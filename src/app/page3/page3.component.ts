import { Component, OnInit } from '@angular/core';

import { Ng7MatBreadcrumbService } from '../../../projects/ng7-mat-breadcrumb/src/lib/ng7-mat-breadcrumb.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(private ng7MatBreadcrumbService: Ng7MatBreadcrumbService) { }

  ngOnInit() {

    const breadcrumb =  {customText: 'This is the Custom Text'};
    this.ng7MatBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }

}
