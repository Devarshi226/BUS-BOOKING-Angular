import { TestBed } from '@angular/core/testing';

import { BusesService } from './buses.service';

describe('BusesService', () => {
  let service: BusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
