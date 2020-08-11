import { Component, OnInit } from '@angular/core';
import { homeProvider } from '../home.provider';
import { animations } from '@libs/animation';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss'],
  animations: animations
})
export class WhyChooseUsComponent implements OnInit {

  activeIndex = 0;
  items = [{
    title: 'Expert Lawyer',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  }, {
    title: 'Fast Support',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  }, {
    title: 'Free Consultations',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  }, {
    title: 'Lowers Cost',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
export const WhyChooseUsProvider = homeProvider({ order: 8, component: WhyChooseUsComponent });
