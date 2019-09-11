import { TestBed } from '@angular/core/testing';

import { HttpRequestInterceptor } from './http-request.module';

describe('InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpRequestInterceptor = TestBed.get(HttpRequestInterceptor);
    expect(service).toBeTruthy();
  });
});
