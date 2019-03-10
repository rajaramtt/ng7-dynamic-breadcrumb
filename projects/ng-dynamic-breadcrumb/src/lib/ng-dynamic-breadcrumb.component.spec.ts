import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDynamicBreadcrumbComponent } from './ng-dynamic-breadcrumb.component';

describe('NgDynamicBreadcrumbComponent', () => {
  let component: NgDynamicBreadcrumbComponent;
  let fixture: ComponentFixture<NgDynamicBreadcrumbComponent>;

  beforeEach(async(() => {
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
