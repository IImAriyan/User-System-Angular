import { Routes } from '@angular/router';
import {HomeComponent} from "./_pages/home/home.component";
import {RegisterComponent} from "./_pages/register/register.component";
import {DashboardComponent} from "./_pages/dashboard/dashboard.component";
import {authGuard} from "./_guards/auth.guard";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {
    path:'authentication/login',
    component:HomeComponent
  },

  {
    path:'authentication/register',
    component:RegisterComponent
  },

  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[authGuard]
  },
];
