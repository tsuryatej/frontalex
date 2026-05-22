import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  {path:'home', component: Home},
  {path:'about', component: About},
  {path:'contact', component: Contact},
  {path: 'login', loadComponent: () => import('./features/auth/login/login').then((m) => m.Login)},
  {path: 'register', loadComponent: () => import('./features/auth/register/register').then((m) => m.Register)},
  {path: '', redirectTo: 'home', pathMatch: 'full',},
  {path: '**', redirectTo: 'home'},
];
