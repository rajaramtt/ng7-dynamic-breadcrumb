# ng7-mat-breadcrumb


ng7-mat-breadcrumb is a Angular Material module for [Angular](https://angular.io/) that generates a Angular Material breadcrumb for any page of your application. It is based on the built-in [Angular router](https://angular.io/docs/ts/latest/guide/router.html).

## [Demo  Example ](https://ng7-mat-breadcrumb.stackblitz.io/)
## [Demo  Source Example ](https://stackblitz.com/edit/ng7-mat-breadcrumb)

# Usage

## Getting started

1.Install `ng7-mat-breadcrumb` via npm:

```bash
npm install --save ng7-mat-breadcrumb
```

Choose the version corresponding to your Angular version:

 Angular     | ng7-mat-breadcrumb 
 ----------- | -------------------
 12          | 6.x+    
 11          | 5.x+    
 10          | 4.x+   
 9           | 3.x+   
 8           | 2.x+               
 7           | 1.x               
      

2.Import the `Ng7MatBreadcrumbModule` within your app:

```js
import {Ng7MatBreadcrumbModule} from "ng7-mat-breadcrumb";

@NgModule({
  imports: [
    Ng7MatBreadcrumbModule,
  ],
})
```

3.Add a name to your route by adding a `breadcrumb` property in the route's `data`:

```js
const routes: Routes = [
  {
    path: 'page1/:pageOneID',
    component: PageComponent,
    data: {
      title: 'page1',
      breadcrumb: [
        {
          label: 'Page1',
          url: ''
        }
      ]
    },
  },
  {
    path: 'page1/:pageOneID/page2/:pageTwoID',
    component: Page2Component,
    data: {
      title: 'page2', 
      breadcrumb: [
        {
          label: 'page {{pageOneID}}',// pageOneID Parameter value will be add 
          url: '/page1/:pageOneID'
        },
        {
          label: 'page {{pageTwoID}}',// pageTwoID Parameter value will be add 
          url: ''
        }
      ]
    },
  },
  {
    path: 'page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID',
    component: Page3Component,
    data: {
      title: 'page3',
      breadcrumb: [
        {
          label: 'page1',
          url: '/page1/:pageOneID'
        },
        {
          label: '{{dynamicText}} page', // If "dynamicText" is not parameter , should be set value  using Ng7MatBreadcrumbService, More info please check the 5th point.
          url: 'page1/:pageOneID/page2/:pageTwoID'
        },
        {
          label: '{{customText}}', // If "customText" is not parameter , should be set value  using Ng7MatBreadcrumbService, More info please check the 5th point.
          url: ''
        }
      ]
    },
  },
];
```

4.Put the `Ng7DynamicBreadcrumbComponent`'s selector within your template:

```html
<app-ng7-mat-breadcrumb></app-ng7-mat-breadcrumb>
<router-outlet></router-outlet>
```

## Input parameters

| Input | Required | Details |
| ---- | ---- | ---- |
| bgColor | Optional | To set background-color for  Breadcrumb, default #eee |
| fontSize | Optional | To set size of  Breadcrumb,  default 18px |
| fontColor | Optional | To set color of  Breadcrumb,  default #0275d8 |
| lastLinkColor | Optional | To set color of last link  Breadcrumb,  default #000 |
| symbol | Optional | To set symbol of Breadcrumb,  default / |



5.Set the value using `Ng7MatBreadcrumbService`

```js
import { Ng7MatBreadcrumbService } from 'ng7-mat-breadcrumb';
constructor(private ng7MatBreadcrumbService: Ng7MatBreadcrumbService) { }
ngOnInit() {
  const breadcrumb =  {customText: 'This is Custom Text', dynamicText: 'Level 2 '};
  this.ng7MatBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }
```

6. Update the Breadcrumb  using `Ng7MatBreadcrumbService`


```js
import { Ng7MatBreadcrumbService } from 'ng7-mat-breadcrumb';
constructor(private ng7MatBreadcrumbService: Ng7MatBreadcrumbService) { }

  updateBreadcrumb(): void {
    const breadcrumbs  =  [
      {
        label: 'page {{pageOneID}}',
        url: '/page1/:pageOneID'
      },
      {
        label: 'page {{pageTwoID}}',
        url: 'page1/:pageOneID/page2/:pageTwoID'
      },
      {
        label: 'page {{pageThreeID}}',
        url: 'page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID'
      },
      {
        label: 'Update Breadcrumb',
        url: ''
      }
    ];
    this.ng7MatBreadcrumbService.updateBreadcrumb(breadcrumbs);
  }
```


## Questions & Issues

Report bugs/problems by creating an issue [creating an issue](https://github.com/rajaramtt/ng7-dynamic-breadcrumb/issues)


## Contribute

 Pick one of the issues from the  [issue list](https://github.com/rajaramtt/ng7-dynamic-breadcrumb/issues) to get started.

## Developer

Developer: Raja Rama Mohan Thavalam


| Raja Rama Mohan Thavalam | 
| ----------------- |
| ![Raja Rama Mohan Thavalam][rajaramtt] |

[rajaramtt]: https://avatars1.githubusercontent.com/u/17231665


## License


(The MIT License)

Copyright (c) 2021 Thavalam Raja Rama Mohan 
