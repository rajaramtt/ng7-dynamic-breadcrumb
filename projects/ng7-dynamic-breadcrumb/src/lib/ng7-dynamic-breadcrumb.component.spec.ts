import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7DynamicBreadcrumbComponent } from './ng7-dynamic-breadcrumb.component';

describe('Ng7DynamicBreadcrumbComponent', () => {
  let component: Ng7DynamicBreadcrumbComponent;
  let fixture: ComponentFixture<Ng7DynamicBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7DynamicBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7DynamicBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
