import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'exercises', loadComponent: () => import('./finals/menu.page').then(m => m.MenuPage) },
  { path: 'finals/cards', loadComponent: () => import('./finals/cards.page').then(m => m.CardsPage) },
  { path: 'finals/policies', loadComponent: () => import('./finals/policies.page').then(m => m.PoliciesPage) },
  { path: 'finals/checkboxes', loadComponent: () => import('./finals/checkboxes.page').then(m => m.CheckboxesPage) },
  { path: 'finals/login', loadComponent: () => import('./finals/login.page').then(m => m.LoginPage) },
  { path: 'finals/register', loadComponent: () => import('./finals/register.page').then(m => m.RegisterPage) },
  {
    path: 'exercise3',
    loadChildren: () => import('./exercise3/exercise3.module').then(m => m.Exercise3PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'exercises',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
