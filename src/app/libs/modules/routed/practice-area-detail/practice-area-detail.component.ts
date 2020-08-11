import { Component, OnInit } from '@angular/core';
import { PracticeAreasService } from '@libs/services';

@Component({
  selector: 'app-practice-area-detail',
  templateUrl: './practice-area-detail.component.html',
  styleUrls: ['./practice-area-detail.component.scss']
})
export class PracticeAreaDetailComponent implements OnInit {

  constructor(public practiceAreaService: PracticeAreasService) { }

  ngOnInit(): void {
  }

}
