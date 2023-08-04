import { NgModule } from '@angular/core';
import { Ng7MatBreadcrumbComponent } from './ng7-mat-breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';

@NgModule({
  declarations: [Ng7MatBreadcrumbComponent],
  imports: [
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [Ng7MatBreadcrumbComponent]
})
export class Ng7MatBreadcrumbModule { }
