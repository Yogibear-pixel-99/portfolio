import { TestBed } from '@angular/core/testing';

import { CircleLinkServiceService } from './circle-link/circle-link.service.';

describe('CircleLinkServiceService', () => {
  let service: CircleLinkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircleLinkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
