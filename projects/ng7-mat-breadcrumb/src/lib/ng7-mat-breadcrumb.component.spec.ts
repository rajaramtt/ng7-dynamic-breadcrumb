import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7MatBreadcrumbComponent } from './ng7-mat-breadcrumb.component';

describe('Ng7MatBreadcrumbComponent', () => {
  let component: Ng7MatBreadcrumbComponent;
  let fixture: ComponentFixture<Ng7MatBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7MatBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7MatBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
