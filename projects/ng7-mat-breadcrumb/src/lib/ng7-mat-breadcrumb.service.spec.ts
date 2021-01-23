import { TestBed } from '@angular/core/testing';

import { Ng7MatBreadcrumbService } from './ng7-mat-breadcrumb.service';

describe('Ng7MatBreadcrumbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng7MatBreadcrumbService = TestBed.inject(Ng7MatBreadcrumbService);
    expect(service).toBeTruthy();
  });
});
