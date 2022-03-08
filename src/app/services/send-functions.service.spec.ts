import { TestBed } from '@angular/core/testing';

import { SendFunctionsService } from './send-functions.service';

describe('SendFunctionsService', () => {
  let service: SendFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
