import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, Subject, Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  virtualScroll = 0;
  selectedIndex = 0;
  scrollY$: Observable<number>;
  steps = [15, 40, 75];
  step = 0;

  sliderItems = [
    { image: "/assets/images/home/slider-item-1.png" },
    { image: "/assets/images/home/slider-item-2.jpg" },
    { image: "/assets/images/home/slider-item-3.jpg" },
    { image: "/assets/images/home/slider-item-4.jpg" },
    { image: "/assets/images/home/slider-item-5.jpg" }
  ];

  @ViewChild('scrollContent', { static: false }) scrollContent: ElementRef;
  destroy$ = new Subject();

  constructor() { }

  ngAfterViewInit(): void {
    const element = this.scrollContent.nativeElement;

    fromEvent(element, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ target }: any) => {
        const scrollTop = target.scrollTop;
        const innerHeight = window.innerHeight;
        const selectedIndex = Math.min(Math.floor(scrollTop / innerHeight), this.sliderItems.length - 1);
        const currentItemScrollTop = scrollTop - (selectedIndex * innerHeight);

        this.virtualScroll = (currentItemScrollTop / innerHeight) * 100;
        this.step = this.steps.filter(step => this.virtualScroll > step).length;
        this.selectedIndex = selectedIndex;
      });

    this.scrollY$ = fromEvent(window, 'scroll').pipe(map(() => window.scrollY));
  }

  select(selectedIndex: number) {
    const element = this.scrollContent.nativeElement;
    element.scrollTo(0, (selectedIndex * window.innerHeight) + 1);
  }

  up() {
    const index = this.selectedIndex == 0 ? this.sliderItems.length - 1 : --this.selectedIndex;
    this.select(index);
  }

  down() {
    const index = this.selectedIndex == this.sliderItems.length - 1 ? 0 : ++this.selectedIndex;
    this.select(index);
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
