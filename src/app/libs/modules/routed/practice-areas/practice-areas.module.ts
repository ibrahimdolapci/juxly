import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeAreasPageComponent } from './practice-areas.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../../components';
import { PracticeAreasModule } from '../../domain';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: PracticeAreasPageComponent,
  data: {
    breadcrumb: {
      title: 'Practice Areas',
      links: [{
        name: 'Home',
        path: 'home'
      }, {
        name: 'Practice Area',
        path: 'practice-area'
      }]
    }
  }
}];

@NgModule({
  declarations: [PracticeAreasPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PracticeAreasModule
  ]
})
export class PracticeAreasPageModule { }
