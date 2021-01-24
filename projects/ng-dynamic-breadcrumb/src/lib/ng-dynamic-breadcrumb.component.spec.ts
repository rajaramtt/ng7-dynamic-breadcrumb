import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgDynamicBreadcrumbComponent } from './ng-dynamic-breadcrumb.component';

describe('NgDynamicBreadcrumbComponent', () => {
  let component: NgDynamicBreadcrumbComponent;
  let fixture: ComponentFixture<NgDynamicBreadcrumbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDynamicBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDynamicBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
