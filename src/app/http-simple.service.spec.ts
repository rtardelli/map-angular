import { TestBed } from '@angular/core/testing';

import { HttpSimpleService } from './http-simple.service';

describe('HttpSimpleService', () => {
  let service: HttpSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
