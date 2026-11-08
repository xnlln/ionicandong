import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular/lazy';

@Component({
  standalone: true, imports: [CommonModule, ReactiveFormsModule, IonicModule, RouterLink], styleUrls: ['./finals.scss'],
  template: `
    <ion-header><ion-toolbar><ion-title>Login</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding"><main class="form">
      <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
        <ion-input label="Email" labelPlacement="floating" type="email" placeholder="Enter your email" autocomplete="email" [clearInput]="true" formControlName="email" aria-describedby="login-email-error"></ion-input>
        <p class="error" id="login-email-error" *ngIf="form.controls.email.touched && form.controls.email.invalid">Valid email is required.</p>
        <ion-input label="Password" labelPlacement="stacked" type="password" placeholder="Enter your password" autocomplete="current-password" formControlName="password" aria-describedby="login-password-error"></ion-input>
        <p class="error" id="login-password-error" *ngIf="form.controls.password.touched && form.controls.password.invalid">Password is required (min 4 characters).</p>
        <ion-button expand="block" type="submit">Login</ion-button>
      </form>
      <p class="account-link">Don't have an account? <a routerLink="/finals/register">Register here</a></p>
      <p *ngIf="success" class="success" role="status">Login form submitted successfully.</p>
      <p class="note">Form practice only. No account is signed in.</p>
      <ion-button fill="clear" routerLink="/exercises">Home</ion-button>
    </main></ion-content>`
})
export class LoginPage {
  success = false;
  form = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(4)] }),
  });
  submit(): void { this.form.markAllAsTouched(); this.success = this.form.valid; if (this.success) this.form.controls.password.reset(); }
}
