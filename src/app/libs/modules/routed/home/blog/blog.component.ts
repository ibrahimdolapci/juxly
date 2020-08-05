import { Component, OnInit } from '@angular/core';
import { BlogService } from '@libs/services/blog.service';
import { IBlog } from '@libs/interfaces';

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
