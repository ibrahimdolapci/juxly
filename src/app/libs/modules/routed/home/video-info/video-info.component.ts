import { Component, OnInit } from '@angular/core';
import { homeProvider } from '../home.provider';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.scss']
})
export class VideoInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export const VideoInfoProvider = homeProvider({ order: 3, component: VideoInfoComponent });
