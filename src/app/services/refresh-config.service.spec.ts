import { TestBed } from '@angular/core/testing';

import { RefreshConfigService } from './refresh-config.service';

describe('RefreshConfigService', () => {
  let service: RefreshConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
