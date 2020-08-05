import { Injectable } from '@angular/core';
import { IBlog } from '@libs/interfaces';
import { Categories } from '@libs/modals';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getBlogs(): IBlog[] {
    return [{
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.CriminalJustice,
      vote:1
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.CulturalSchemas,
      vote:2
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.LaborLaw,
      vote:2
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.LegalAdvise,
      vote:2
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.ProBonoWork,
      vote:4
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.CriminalJustice,
      vote:5
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.LaborLaw,
      vote:2
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.LegalAdvise,
      vote:3
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.ProBonoWork,
      vote:2
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.CriminalJustice,
      vote:1
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.LaborLaw,
      vote:4
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.LegalAdvise,
      vote:5
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.ProBonoWork,
      vote:3
    }, {
      date: 'JANUARY 10, 2018',
      topic: 'DIVORCE SUIT',
      title: 'Lawyer assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...',
      coverImage: '/assets/images/home/blog-1.png',
      category: Categories.CriminalJustice,
      vote:2
    }];
  }
}
