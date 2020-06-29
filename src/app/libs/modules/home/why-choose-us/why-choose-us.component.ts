import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, transition, state } from '@angular/animations';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('0', style({
        height: '0',
        opacity: 0
      })),
      state('1', style({
        height: '*',
        opacity: 1
      })),
      transition('1 => 0', animate('300ms ease')),
      transition('0 => 1', animate('300ms ease'))
    ])
  ]
})
export class WhyChooseUsComponent implements OnInit {

  activeIndex = 0;
  items = [{
    title: 'Expert Lawyer',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  },{
    title: 'Fast Support',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  },{
    title: 'Free Consultations',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  },{
    title: 'Lowers Cost',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
