import { TestBed } from '@angular/core/testing';

import { SwitchserviceService } from './switchservice.service';

describe('SwitchserviceService', () => {
  let service: SwitchserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
