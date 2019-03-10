import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map, mergeMap } from 'rxjs/internal/operators';
import { Breadcrumb } from './breadcrumb.model';

@Component({
  selector: 'app-ng-dynamic-breadcrumb',
  templateUrl: './ng-dynamic-breadcrumb.component.html',
  styleUrls: ['./ng-dynamic-breadcrumb.component.css']
})
export class NgDynamicBreadcrumbComponent implements OnInit {

  breadcrumb: Breadcrumb[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadCrumbData();
  }

  ngOnInit() {
  }

  breadCrumbData() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }))
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {

        if (route.snapshot.data.breadcrumb) {
          const breadcrumb = (JSON.parse(JSON.stringify(route.snapshot.data.breadcrumb)));
          breadcrumb.map((crumb) => {
            const urlChunks = crumb.url.split('/');

            for (const chunk of urlChunks) {
              if (chunk.includes(':')) {
                const paramID = chunk.replace(':', '');
                const pharmacistID = route.snapshot.params[paramID];
                crumb.url = crumb.url.replace(`:${paramID}`, pharmacistID);
              }
            }
          });
          this.breadcrumb = breadcrumb;
        } else {
          this.breadcrumb = [];
        }
      });
  }
}
