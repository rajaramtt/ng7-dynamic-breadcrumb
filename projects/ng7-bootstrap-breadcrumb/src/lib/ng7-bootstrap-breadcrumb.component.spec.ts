import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Ng7BootstrapBreadcrumbComponent } from './ng7-bootstrap-breadcrumb.component';

describe('Ng7BootstrapBreadcrumbComponent', () => {
  let component: Ng7BootstrapBreadcrumbComponent;
  let fixture: ComponentFixture<Ng7BootstrapBreadcrumbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7BootstrapBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7BootstrapBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
