import { Component, OnInit } from '@angular/core';
import { homeProvider } from '../home.provider';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export const WhoWeAreProvider = homeProvider({ order: 2, component: WhoWeAreComponent });
