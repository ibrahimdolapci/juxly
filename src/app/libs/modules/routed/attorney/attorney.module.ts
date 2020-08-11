import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttorneyComponent } from './attorney.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../../components';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [AttorneyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: AttorneyComponent,
      data: {
        breadcrumb: {
          title: 'Attorney',
          links: [{
            name: 'Home',
            path: 'home'
          }, {
            name: 'Attorney',
            path: 'attorney'
          }]
        }
      }
    }]),
    ComponentsModule,
    LazyLoadImageModule
  ]
})
export class AttorneyPageModule { }
