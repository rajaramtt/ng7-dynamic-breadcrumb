import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { Ng7MatBreadcrumbModule } from '../../projects/ng7-mat-breadcrumb/src/public_api';
// import {Ng7DynamicBreadcrumbModule} from 'ng7-dynamic-breadcrumb';
// import { Ng7DynamicBreadcrumbModule } from '../../projects/ng7-dynamic-breadcrumb/src/public_api';
// import { Ng7BootstrapBreadcrumbModule } from '../../projects/ng7-bootstrap-breadcrumb/src/public_api';
import { NgDynamicBreadcrumbModule } from '../../projects/ng-dynamic-breadcrumb/src/projects';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Ng7BootstrapBreadcrumbModule
  //  Ng7DynamicBreadcrumbModule
  // Ng7MatBreadcrumbModule
  NgDynamicBreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
