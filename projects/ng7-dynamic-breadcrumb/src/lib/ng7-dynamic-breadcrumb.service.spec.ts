import { TestBed } from '@angular/core/testing';

import { Ng7DynamicBreadcrumbService } from './ng7-dynamic-breadcrumb.service';

describe('Ng7DynamicBreadcrumbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng7DynamicBreadcrumbService = TestBed.inject(Ng7DynamicBreadcrumbService);
    expect(service).toBeTruthy();
  });
});
