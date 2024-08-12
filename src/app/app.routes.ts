import { Routes } from '@angular/router';
import {HomeComponent} from "./_pages/home/home.component";
import {RegisterComponent} from "./_pages/register/register.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'authentication/login',component:HomeComponent},
  {path:'authentication/register',component:RegisterComponent},
];
