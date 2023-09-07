import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private baseUrl: string = 'https://identitytoolkit.googleapis.com/v1/accounts';
    private apiKey: string = 'AIzaSyAS9wxucHOn7TuLudX5JyeB6RYLt8f_3AQ';
    private signUpEndpoint = `${this.baseUrl}:signUp?key=${this.apiKey}`;
    private signInEndpoint = `${this.baseUrl}:signInWithPassword?key=${this.apiKey}`;
    public user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    constructor(private httpClient: HttpClient, private router: Router) { }

    signIn = (email: string, password: string) => {
        return this.httpClient.post<AuthResponseData>(this.signInEndpoint, { email: email, password: password, returnSecureToken: true })
            .pipe(catchError(this.handleError), tap(this.handleAuthentication));
    }

    signUp = (email: string, password: string) => {
        return this.httpClient.post<AuthResponseData>(this.signUpEndpoint, { email: email, password: password, returnSecureToken: true })
            .pipe(catchError(this.handleError), tap(this.handleAuthentication));
    }

    autoLogin = () => {
        const userDataString = localStorage.getItem('userData');
        if (!userDataString) return;
        const userData: { email: string, id: string, _token: string, _tokenExpirationDate: string } = JSON.parse(userDataString);
        const user = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (!user.token) return;
        this.user.next(user);
        const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        this.autoLogout(expirationDuration);
    }

    autoLogout = (expirationDuration: number) => {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }

    logout = () => {
        this.user.next(null);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
            this.tokenExpirationTimer = null;
        }
        this.router.navigate(['/auth']);
    }

    private handleAuthentication = (response: AuthResponseData) => {
        const expirationDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
        const user = new User(response.email, response.localId, response.idToken, expirationDate);
        this.user.next(user);
        this.autoLogout(+response.expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    private handleError = (errorResponse: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occured.';
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(() => new Error(errorMessage));
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exist already.';
                break;
            case 'INVALID_PASSWORD':
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Your email and/or password is not correct.';
                break;
            case 'USER_DISABLED':
                errorMessage = 'Your account has been disabled. Please contact support.';
                break;
        }
        return throwError(() => new Error(errorMessage));
    }
}