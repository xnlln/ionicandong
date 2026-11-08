import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular/lazy';

@Component({
  standalone: true, imports: [IonicModule, RouterLink], styleUrls: ['./finals.scss'],
  template: `
    <ion-header><ion-toolbar><ion-title>Ionic Laboratory</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding"><main>
      <h1>Finals Exercises</h1>
      <ion-card><ion-card-header><ion-card-subtitle>Exercise 1</ion-card-subtitle><ion-card-title>Cards & Navigation</ion-card-title></ion-card-header><ion-card-content>Enrollment cards and a separate policies page.<ion-button expand="block" routerLink="/finals/cards">Open Exercise 1</ion-button></ion-card-content></ion-card>
      <ion-card><ion-card-header><ion-card-subtitle>Exercise 2</ion-card-subtitle><ion-card-title>Fruit Checkboxes</ion-card-title></ion-card-header><ion-card-content>Select your favorite fruits and display your choices.<ion-button expand="block" routerLink="/finals/checkboxes">Open Exercise 2</ion-button></ion-card-content></ion-card>
      <ion-card><ion-card-header><ion-card-subtitle>Exercise 3</ion-card-subtitle><ion-card-title>Login & Register</ion-card-title></ion-card-header><ion-card-content>Practice labels, inputs, and form validation.<ion-button expand="block" routerLink="/finals/login">Open Exercise 3</ion-button></ion-card-content></ion-card>
      <h1>Midterm Exercises</h1>
      <ion-button expand="block" fill="outline" routerLink="/home">Exercise 2 · About Me</ion-button>
      <ion-button expand="block" fill="outline" routerLink="/exercise3">Exercise 3 · Fullscreen Scroll</ion-button>
    </main></ion-content>`
})
export class MenuPage {}
