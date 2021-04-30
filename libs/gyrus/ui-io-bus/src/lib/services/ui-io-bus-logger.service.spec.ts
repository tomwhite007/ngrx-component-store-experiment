import { TestBed } from '@angular/core/testing';

import { UiIoBusLoggerService } from './ui-io-bus-logger.service';

describe('UiIoBusLoggerService', () => {
  let service: UiIoBusLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiIoBusLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
