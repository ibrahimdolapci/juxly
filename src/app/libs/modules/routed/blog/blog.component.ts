import { Component, OnInit } from '@angular/core';
import { BlogService } from '@libs/services/blog.service';
import { IBlog } from '@libs/interfaces';
import { Categories } from '@libs/modals';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  categories = [
    {
      name: "All Blog Posts",
      type: 'all'
    }, {
      name: "Popular Posts",
      type: 'popular'
    }, {
      name: "Criminal Justice",
      type: Categories.CriminalJustice
    }, {
      name: "Cultural Schemas",
      type: Categories.CulturalSchemas
    }, {
      name: "Labor Law",
      type: Categories.LaborLaw
    }, {
      name: "Legal Advise",
      type: Categories.LegalAdvise
    }, {
      name: "Pro Bono Work",
      type: Categories.ProBonoWork
    }
  ];
  blogs: IBlog[];
  selectedIndex = 0;
  selectedBlogs: IBlog[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
    this.filter();
  }

  filter(type: 'all' | 'popular' | Categories = 'all', index = 0) {
    this.selectedIndex = index;

    switch (type) {
      case 'all':
        this.selectedBlogs = this.blogs;
        break;
      case 'popular':
        this.selectedBlogs = this.blogs.sort((a, b) => b.vote - a.vote);
        break;

      default:
        this.selectedBlogs = this.blogs.filter(blog => blog.category == type);
        break;
    }
  }
}
