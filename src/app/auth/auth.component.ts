import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthResponseData, AuthenticationService } from './authentication.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;
  private closeErrorSubscription: Subscription;

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
        this.showErrorAlert(error.message);
        this.isLoading = false;
      }
    });

    form.reset();
  }

  onCloseError = () => {
    this.error = null;
  }

  ngOnDestroy(): void {
    if (this.closeErrorSubscription) {
      this.closeErrorSubscription.unsubscribe();
    }
  }

  private showErrorAlert = (errorMessage: string) => {
    const hostViewContainerRef = this.alertHost.viewcontainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(AlertComponent);
    componentRef.setInput('message', errorMessage);
    this.closeErrorSubscription = componentRef.instance.closeEvent.subscribe(() => {
      this.closeErrorSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
