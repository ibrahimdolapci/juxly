import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, map, filter } from 'rxjs/operators';

interface IBreadcrumb {
  name: string,
  path: string
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  title: string;
  links: IBreadcrumb[];
  destroy$ = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const root = this.getCurrentChild(this.route.snapshot)
        const breadcrumb = root.data.breadcrumb;

        this.title = breadcrumb.title;
        this.links = breadcrumb.links;
      });
  }

  getCurrentChild(snapshot){
    if(!snapshot.firstChild) return snapshot

    return this.getCurrentChild(snapshot.firstChild)
  }
}
