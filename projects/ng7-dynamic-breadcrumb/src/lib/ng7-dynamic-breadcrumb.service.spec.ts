import { TestBed } from '@angular/core/testing';

import { NgDynamicBreadcrumbService } from './ng7-dynamic-breadcrumb.service';

describe('NgDynamicBreadcrumbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDynamicBreadcrumbService = TestBed.get(NgDynamicBreadcrumbService);
    expect(service).toBeTruthy();
  });
});
