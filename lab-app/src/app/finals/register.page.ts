import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular/lazy';

@Component({
  standalone: true, imports: [CommonModule, ReactiveFormsModule, IonicModule, RouterLink], styleUrls: ['./finals.scss'],
  template: `
    <ion-header><ion-toolbar><ion-title>Register</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding"><main class="form">
      <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
        <ion-input label="Full Name" labelPlacement="stacked" placeholder="Enter your full name" autocomplete="name" [clearInput]="true" formControlName="name" aria-describedby="name-error"></ion-input>
        <p class="error" id="name-error" *ngIf="form.controls.name.touched && form.controls.name.invalid">Full name is required (min 3 characters).</p>
        <ion-input label="Email" labelPlacement="floating" type="email" placeholder="Enter your email" autocomplete="email" [clearInput]="true" formControlName="email" aria-describedby="register-email-error"></ion-input>
        <p class="error" id="register-email-error" *ngIf="form.controls.email.touched && form.controls.email.invalid">Valid email is required.</p>
        <ion-input label="Password" labelPlacement="stacked" type="password" placeholder="Enter your password" autocomplete="new-password" formControlName="password" aria-describedby="register-password-error"></ion-input>
        <p class="error" id="register-password-error" *ngIf="form.controls.password.touched && form.controls.password.invalid">Password is required (min 4 characters).</p>
        <ion-input label="Confirm" labelPlacement="fixed" type="password" placeholder="Re-enter your password" autocomplete="new-password" formControlName="confirm" aria-describedby="confirm-error"></ion-input>
        <p class="error" id="confirm-error" *ngIf="form.controls.confirm.touched && (form.controls.confirm.invalid || form.hasError('mismatch'))">Passwords must be filled in and match.</p>
        <ion-button expand="block" type="submit">Register</ion-button>
      </form>
      <p class="account-link">Already have an account? <a routerLink="/finals/login">Login here</a></p>
      <p *ngIf="success" class="success" role="status">Registration form submitted successfully. You can return to the login page.</p>
      <p class="note">Form practice only. No account is created.</p>
      <ion-button fill="clear" routerLink="/exercises">Home</ion-button>
    </main></ion-content>`
})
export class RegisterPage {
  success = false;
  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3), Validators.pattern(/.*\S.*/)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(4)] }),
    confirm: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  }, { validators: (control: AbstractControl) => control.get('password')?.value === control.get('confirm')?.value ? null : { mismatch: true } });
  submit(): void {
    this.form.markAllAsTouched(); this.success = this.form.valid;
    if (this.success) { this.form.controls.password.reset(); this.form.controls.confirm.reset(); }
  }
}
