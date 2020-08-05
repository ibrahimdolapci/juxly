import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttorneyComponent } from './attorney.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../../components';

@NgModule({
  declarations: [AttorneyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: AttorneyComponent }]),
    ComponentsModule
  ]
})
export class AttorneyPageModule { }
