import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NavbarComponent} from '../app/navbar/navbar.component';
import {HomeComponent} from '../app/home/home.component';

import {LoginComponent} from '../app/login/login.component';
import { from } from 'rxjs';
const routes: Routes = [
  // {path:"home",component:NavbarComponent},
  {path:"home",component:HomeComponent},
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
