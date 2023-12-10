import { TestBed } from '@angular/core/testing';

import { ElaspedTimeService } from './elasped-time.service';

describe('ElaspedTimeService', () => {
  let service: ElaspedTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElaspedTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
