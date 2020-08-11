import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [BlogItemComponent],
  imports: [CommonModule, LazyLoadImageModule],
  exports: [BlogItemComponent]
})
export class BlogModule { }
