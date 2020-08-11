import { Component, OnInit } from '@angular/core';
import { homeProvider } from '../home.provider';

@Component({
  selector: 'app-attorney',
  templateUrl: './attorney.component.html',
  styleUrls: ['./attorney.component.scss']
})
export class AttorneyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export const AttorneyProvider = homeProvider({ order: 6, component: AttorneyComponent });
