import { Component, OnInit } from '@angular/core';

// import { Ng7MatBreadcrumbService } from '../../../projects/ng7-mat-breadcrumb/src/lib/ng7-mat-breadcrumb.service';
import { Ng7DynamicBreadcrumbService } from '../../../projects/ng7-dynamic-breadcrumb/src/lib/ng7-dynamic-breadcrumb.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  // private ng7MatBreadcrumbService: Ng7MatBreadcrumbService
  constructor(private ng7DynamicBreadcrumbService: Ng7DynamicBreadcrumbService) { }

  ngOnInit() {

    const breadcrumb =  {customText: 'This is the Custom Text'};
   // this.ng7MatBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
    this.ng7DynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }

}
