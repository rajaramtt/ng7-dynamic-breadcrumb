import { NgModule } from '@angular/core';
import { Ng7DynamicBreadcrumbComponent } from './ng7-dynamic-breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Ng7DynamicBreadcrumbComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [Ng7DynamicBreadcrumbComponent]
})
export class Ng7DynamicBreadcrumbModule { }
