import { TestBed } from '@angular/core/testing';

import { Ng7BootstrapBreadcrumbService } from './ng7-bootstrap-breadcrumb.service';

describe('Ng7BootstrapBreadcrumbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng7BootstrapBreadcrumbService = TestBed.get(Ng7BootstrapBreadcrumbService);
    expect(service).toBeTruthy();
  });
});
