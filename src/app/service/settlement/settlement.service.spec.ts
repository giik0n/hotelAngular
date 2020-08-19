import { TestBed } from '@angular/core/testing';

import { SettlementService } from './settlement.service';

describe('ClientService', () => {
  let service: SettlementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettlementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
