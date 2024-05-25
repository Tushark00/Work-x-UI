import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PerformanceComponent } from './performance/performance.component';

const routes: Routes = [
  { path: 'performance', component: PerformanceComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
