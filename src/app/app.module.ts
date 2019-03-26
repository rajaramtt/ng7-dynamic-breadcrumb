import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

 import { Ng7MatBreadcrumbModule } from '../../projects/ng7-mat-breadcrumb/src/public_api';

// import {Ng7DynamicBreadcrumbModule} from 'ng7-dynamic-breadcrumb';


@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng7MatBreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
