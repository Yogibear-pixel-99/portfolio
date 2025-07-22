import { TestBed } from '@angular/core/testing';

import { TechlogoService } from './techlogo.service';

describe('TechlogoService', () => {
  let service: TechlogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechlogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
