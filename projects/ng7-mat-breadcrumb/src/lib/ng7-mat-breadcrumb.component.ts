import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router
} from '@angular/router';
import { map } from 'rxjs/internal/operators';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from './breadcrumb.model';
import { Ng7MatBreadcrumbService } from './ng7-mat-breadcrumb.service';
@Component({
  selector: 'app-ng7-mat-breadcrumb',
  templateUrl: './ng7-mat-breadcrumb.component.html',
  styleUrls: ['./ng7-mat-breadcrumb.component.css']
})
export class Ng7MatBreadcrumbComponent implements OnInit {
  breadcrumb: Breadcrumb[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ng7MatBreadcrumbService: Ng7MatBreadcrumbService
  ) {
    this.breadCrumbData();
  }

  ngOnInit() {
    this.ng7MatBreadcrumbService.breadcrumbLabels.subscribe(labelData => {
      for (const label in labelData) {
        if (labelData.hasOwnProperty(label)) {
          this.breadcrumb.map(crumb => {
            const labelParams = crumb.label.match(/[^{{]+(?=\}})/g);
            if (labelParams) {
              for (const labelParam of labelParams) {
                const dynamicData = labelData[label];
                if (labelParam === label) {
                  crumb.displayText = crumb.label.replace(
                    '{{' + labelParam + '}}',
                    dynamicData
                  );
                }
              }
            } else {
              crumb.displayText = crumb.label;
            }
          });
        }
      }
    });
  }

  breadCrumbData() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {
        if (route.snapshot.data.breadcrumb) {
          const breadcrumb = JSON.parse(
            JSON.stringify(route.snapshot.data.breadcrumb)
          );
          breadcrumb.map(crumb => {
            const urlChunks = crumb.url.split('/');
            for (const chunk of urlChunks) {
              if (chunk.includes(':')) {
                const paramID = chunk.replace(':', '');
                const routerParamID = route.snapshot.params[paramID];
                crumb.url = crumb.url.replace(`:${paramID}`, routerParamID);
              }
            }

            const labelParams = crumb.label.match(/[^{{]+(?=\}})/g);
            if (labelParams) {
              for (const labelParam of labelParams) {
                const routerParamID = route.snapshot.params[labelParam.trim()];
                if (routerParamID) {
                  crumb.displayText = crumb.label.replace(
                    '{{' + labelParam + '}}',
                    routerParamID
                  );
                } else {
                  crumb.displayText = crumb.label;
                }
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
