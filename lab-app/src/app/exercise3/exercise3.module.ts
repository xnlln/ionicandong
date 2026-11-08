import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular/lazy';
import { Exercise3Page } from './exercise3.page';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild([{ path: '', component: Exercise3Page }])],
  declarations: [Exercise3Page],
})
export class Exercise3PageModule {}
