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
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: BlogComponent }]),
    ComponentsModule,
    BlogModule
  ]
})
export class BlogPageModule { }
