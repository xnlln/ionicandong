import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular/lazy';

@Component({
  standalone: true, imports: [IonicModule, RouterLink], styleUrls: ['./finals.scss'],
  template: `
    <ion-header class="blue"><ion-toolbar><ion-buttons slot="start"><ion-back-button defaultHref="/exercises" text="Labs"></ion-back-button></ion-buttons><ion-title>NEUST Enrollment System</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding"><main>
      <ion-card class="yellow"><ion-card-header><ion-card-title>International Students</ion-card-title><ion-card-subtitle>Rules</ion-card-subtitle></ion-card-header><ion-card-content><p>Note: The international students who wish to enroll should update CASES23 to confirm the student's commencement of learning within 15 working days of graduation.</p></ion-card-content></ion-card>
      <ion-card class="yellow"><ion-card-header><ion-card-title>Transfer Students</ion-card-title></ion-card-header><ion-card-content>
        <ion-button size="small" fill="outline" routerLink="/finals/policies">See more Policies</ion-button>
        <p>Transferees from public and private schools in the Philippines who failed to submit the SF 9 (formerly Form 138) during early registration or upon enrollment shall only be temporarily enrolled until the submission of required documents on or before August 31st of the current year. Approval by the parent or guardian is required for temporary enrollment.</p>
      </ion-card-content></ion-card>
      <p class="note">Sample enrollment content for this laboratory exercise.</p>
    </main></ion-content>
    <ion-footer class="blue"><ion-toolbar><ion-title class="page-number">Page 1</ion-title></ion-toolbar></ion-footer>`
})
export class CardsPage {}
