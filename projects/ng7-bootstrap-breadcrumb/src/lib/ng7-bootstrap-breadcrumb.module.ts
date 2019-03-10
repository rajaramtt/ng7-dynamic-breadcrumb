
import { NgModule } from '@angular/core';
import { Ng7BootstrapBreadcrumbComponent } from './ng7-bootstrap-breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Ng7BootstrapBreadcrumbComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [Ng7BootstrapBreadcrumbComponent]
})
export class Ng7BootstrapBreadcrumbModule { }
