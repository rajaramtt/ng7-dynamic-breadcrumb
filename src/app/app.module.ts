import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { Ng7DynamicBreadcrumbModule } from '../../projects/ng7-dynamic-breadcrumb/src/public_api';

import {Ng7DynamicBreadcrumbModule} from 'ng7-dynamic-breadcrumb';


@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng7DynamicBreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
