import { TestBed } from '@angular/core/testing';

import { MedatusButtonService } from './medatus-button.service';

describe('MedatusButtonService', () => {
  let service: MedatusButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedatusButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
