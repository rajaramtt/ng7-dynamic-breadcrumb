import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { NgDynamicBreadcrumbModule } from '../../projects/ng7-dynamic-breadcrumb/src/public_api';

import {NgDynamicBreadcrumbModule} from 'ng7-dynamic-breadcrumb';


@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDynamicBreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
