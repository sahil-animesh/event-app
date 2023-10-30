import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PATHS } from '../shared/constant-files/routing-paths';

const routes: Routes = [
  {
    path: '',
    redirectTo:PATHS.AUTH.LOGIN,
    pathMatch: 'full'
  },
  {
    path: PATHS.AUTH.LOGIN,
    component: LoginComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
