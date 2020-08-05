import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeAreaComponent } from './practice-area.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../../components';
import { PracticeAreasModule } from '../../domain';

@NgModule({
  declarations: [PracticeAreaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: PracticeAreaComponent }]),
    ComponentsModule,
    PracticeAreasModule
  ]
})
export class PracticeAreaPageModule { }
