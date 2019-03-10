import { NgModule } from '@angular/core';
import { NgDynamicBreadcrumbComponent } from './ng7-dynamic-breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgDynamicBreadcrumbComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [NgDynamicBreadcrumbComponent]
})
export class NgDynamicBreadcrumbModule { }
