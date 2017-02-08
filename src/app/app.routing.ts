
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent }       from './container/home/home.component';
import {LoginComponent}       from './container/login/login.component';
import {SignupComponent}      from './container/signup/signup.component';

const appRoutes: Routes=[
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login',  component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home',   component: HomeComponent}
];

export const appRoutingProviders: any[]=[];

export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
