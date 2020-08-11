import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../../components';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: AboutUsComponent,
      data: {
        breadcrumb: {
          title: 'About Us',
          links: [{
            name: 'Home',
            path: 'home'
          }, {
            name: 'About Us',
            path: 'about-us'
          }]
        }
      }
    }]),
    ComponentsModule,
    LazyLoadImageModule
  ]
})
export class AboutUsPageModule { }
