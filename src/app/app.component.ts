import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng7-dynamic-breadcrumb-lib';

  breadcrumbConfig: object = {
    bgColor: '#eee',
    fontSize: '18px',
    fontColor: '#0275d8',
    lastLinkColor: '#000',
    symbol: ' / ',
  };

}
