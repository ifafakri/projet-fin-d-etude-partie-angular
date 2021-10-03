import { TestBed } from '@angular/core/testing';

import { AcceeServiceService } from './accee-service.service';

describe('AcceeServiceService', () => {
  let service: AcceeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
