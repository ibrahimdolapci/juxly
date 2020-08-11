import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = [{
    name: "Home",
    route: "home"
  }, {
    name: "About Us",
    route: "about-us"
  }, {
    name: "Practice Area",
    route: "practice-areas"
  }, {
    name: "Attorney",
    route: "attorney"
  }, {
    name: "Blog",
    route: "blog"
  }, {
    name: "Contact",
    route: "contact"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
