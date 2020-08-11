import { Component, OnInit } from '@angular/core';
import { homeProvider } from '../home.provider';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export const SuccessProvider = homeProvider({ order: 4, component: SuccessComponent });
