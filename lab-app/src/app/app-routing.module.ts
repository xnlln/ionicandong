import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusPage } from './campus.page';
const routes: Routes = [
 ...['dashboard','school-profile','courses','faculty','contacts','gallery'].map(path => ({path,component:CampusPage,data:{section:path}})),
 {path:'',redirectTo:'dashboard',pathMatch:'full'}, {path:'**',redirectTo:'dashboard'}
];
@NgModule({imports:[RouterModule.forRoot(routes)],exports:[RouterModule]})
export class AppRoutingModule {}