import { Component, OnInit, HostListener, Inject, Type } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { filter, map, scan, startWith, throttleTime, tap } from 'rxjs/operators';
import { HOME_PROVIDER, IHomeProvider } from './home.provider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  components: Observable<Type<any>[]>;
  private providers: IHomeProvider[];

  constructor(@Inject(HOME_PROVIDER) providers: IHomeProvider[]) {
    this.providers = providers.sort((a, b) => a.order - b.order);
  }

  ngOnInit(): void {
    this.components = fromEvent(window, 'scroll').pipe(
      map(this.getScrollPosition),
      throttleTime(300),
      startWith(100),
      filter(scrollY => scrollY >= 70),
      scan((acc) => acc + 1, 1),
      map(order => this.providers.filter(provider => provider.order <= order).map(providers => providers.component)),
      filter(components => components.length <= this.providers.length)
    )
  }

  getScrollPosition() {
    const element = document.body || document.documentElement;
    const parent: any = element.parentNode;
    return (element.scrollTop || parent.scrollTop) / (parent.scrollHeight - parent.clientHeight) * 100
  }

  @HostListener('window:scroll') onScroll(): void { }
}
