import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../../components';
import { BlogModule } from '@libs/modules/domain';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: BlogComponent,
      data: {
        breadcrumb: {
          title: 'Blog',
          links: [{
            name: 'Home',
            path: 'home'
          }, {
            name: 'Blog',
            path: 'blog'
          }]
        }
      }
    }]),
    ComponentsModule,
    BlogModule
  ]
})
export class BlogPageModule { }
