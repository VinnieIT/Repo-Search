import { TestBed } from '@angular/core/testing';

import { ApiResponseServService } from './api-response-serv.service';

describe('ApiResponseServService', () => {
  let service: ApiResponseServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiResponseServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
