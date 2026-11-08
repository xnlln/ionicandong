import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular/lazy';

@Component({
  standalone: true, imports: [CommonModule, FormsModule, IonicModule, RouterLink], styleUrls: ['./finals.scss'],
  template: `
    <ion-header><ion-toolbar><ion-title>Ionic Checkbox Lab</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding"><main>
      <h1>Select your favorite fruits:</h1>
      <ion-list><ion-item *ngFor="let fruit of fruits"><ion-checkbox [(ngModel)]="fruit.checked" labelPlacement="start" justify="space-between">{{ fruit.name }}</ion-checkbox></ion-item></ion-list>
      <ion-button expand="block" (click)="showSelected()">Show Selected</ion-button>
      <ion-card *ngIf="shown" aria-live="polite"><ion-card-header><ion-card-title>Selected Fruits</ion-card-title></ion-card-header><ion-card-content><ul *ngIf="selected.length; else empty"><li *ngFor="let name of selected">{{ name }}</li></ul><ng-template #empty><p>No fruits selected.</p></ng-template></ion-card-content></ion-card>
      <ion-button routerLink="/exercises">Home</ion-button>
    </main></ion-content>`
})
export class CheckboxesPage {
  fruits = [{ name: 'Apple', checked: false }, { name: 'Banana', checked: false }, { name: 'Mango', checked: false }];
  selected: string[] = [];
  shown = false;
  showSelected(): void { this.selected = this.fruits.filter(f => f.checked).map(f => f.name); this.shown = true; }
}
