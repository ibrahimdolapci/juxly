import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  selectedIndex = 1;
  images = [
    'assets/images/home/client-1.png',
    'assets/images/home/client-1.png',
    'assets/images/home/client-1.png',
    'assets/images/home/client-1.png',
    'assets/images/home/client-1.png'
  ];

  @ViewChild('container', { static: false }) scrollContainer: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.scroll(this.selectedIndex);
  }

  left() {
    const index = this.selectedIndex == 0 ? this.images.length - 1 : --this.selectedIndex;
    this.scroll(index);
  }

  right() {
    const index = this.selectedIndex == this.images.length - 1 ? 0 : ++this.selectedIndex;
    this.scroll(index);
  }

  scroll(index) {
    this.selectedIndex = index;

    const element = this.scrollContainer.nativeElement;
    element.scrollTo(index * 90, 0);
  }
}
