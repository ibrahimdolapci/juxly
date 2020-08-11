import { Component, OnInit } from '@angular/core';
import { BlogService } from '@libs/services/blog.service';
import { IBlog } from '@libs/interfaces';
import { homeProvider } from '../home.provider';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: IBlog[];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

}

export const BlogProvider = homeProvider({ order: 10, component: BlogComponent });
