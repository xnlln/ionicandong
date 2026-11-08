import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular/lazy';

@Component({
  standalone: true, imports: [IonicModule, RouterLink], styleUrls: ['./finals.scss'],
  template: `
    <ion-header class="blue"><ion-toolbar><ion-title>NEUST Policies</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding"><main>
      <ion-card class="yellow"><ion-card-header><ion-card-title>University Policies</ion-card-title></ion-card-header><ion-card-content><p>NEUST's policies are outlined in their various institutional documents, including the NEUST Code, the Citizen's Charter, and the Quality Management System (QMS) Manual which aligns with ISO 9001:2015 standards. These policies cover instruction, research, staff development, student welfare, transparency, and service delivery, emphasizing accountability, competence, relevance, and continuous improvement to meet regional and national development needs.</p></ion-card-content></ion-card>
      <ion-button expand="block" routerLink="/finals/cards" routerDirection="back">Go Back Home</ion-button>
      <ion-button expand="block" fill="clear" routerLink="/exercises">All Exercises</ion-button>
      <p class="note">Sample policy summary from the exercise reference.</p>
    </main></ion-content>
    <ion-footer class="blue"><ion-toolbar><ion-title class="page-number">Page 2</ion-title></ion-toolbar></ion-footer>`
})
export class PoliciesPage {}
