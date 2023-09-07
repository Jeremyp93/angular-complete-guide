import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  onSwitchMode = () => {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit = (form: NgForm) => {
    this.error = null;
    if (form.invalid) {
      this.error = 'Form is not valid. Please try again.';
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authenticationService.signIn(email, password);
    } else {
      authObs = this.authenticationService.signUp(email, password);
    }

    authObs.subscribe({
      next: response => {
        this.isLoading = false;
        this.router.navigate(['/recipe-book'])
      },
      error: (error: Error) => {
        this.error = error.message;
        this.isLoading = false;
      }
    });

    form.reset();
  }
}
