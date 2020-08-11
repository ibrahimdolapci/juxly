import { Component, OnInit } from '@angular/core';
import { homeProvider } from '@libs/modules/routed/home/home.provider';

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  styleUrls: ['./practice-areas.component.scss']
})
export class PracticeAreasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export const PracticeAreasProvider = homeProvider({ order: 5, component: PracticeAreasComponent });
