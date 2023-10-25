import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PARENT_PATHS, PATHS } from '../shared/constant-files/routing-paths';

const routes: Routes = [
  {
    path: PARENT_PATHS.DEFAULT, 
    component: MainComponent,
    children: [
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
