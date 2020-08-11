import { Component, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { fromEvent, Subject, Observable } from 'rxjs';
import { map, takeUntil, startWith } from 'rxjs/operators';
import { homeProvider } from '../home.provider';

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
    { image: "/assets/images/home/slider-item-1.webp" },
    { image: "/assets/images/home/slider-item-2.webp" },
    { image: "/assets/images/home/slider-item-3.webp" },
    { image: "/assets/images/home/slider-item-4.webp" }
  ];

  @ViewChild('scrollContent', { static: false }) scrollContent: ElementRef;
  destroy$ = new Subject();

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.scrollY$ = fromEvent(window, 'scroll').pipe(map(() => window.scrollY));
  }

  ngAfterViewInit(): void {
    const element = this.scrollContent.nativeElement;

    fromEvent(element, 'scroll')
      .pipe(
        takeUntil(this.destroy$),
        map((event: Event) => (event.target as Element).scrollTop),
        startWith(0)
      )
      .subscribe(value => {
        const innerHeight = window.innerHeight;
        const scrollTop = value + innerHeight - 1;
        const selectedIndex = Math.min(Math.floor(scrollTop / innerHeight), this.sliderItems.length - 1);
        const currentItemScrollTop = scrollTop - (selectedIndex * innerHeight);

        setTimeout(() => {
          this.virtualScroll = (currentItemScrollTop / innerHeight) * 100;
          this.step = this.steps.filter(step => this.virtualScroll > step).length;
          this.selectedIndex = selectedIndex;
        });
      });
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

export const SliderProvider = homeProvider({ order: 1, component: SliderComponent });
