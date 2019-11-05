import { TestBed } from '@angular/core/testing';

import { ShowCookieService } from './show-cookie.service';

describe('ShowCookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowCookieService = TestBed.get(ShowCookieService);
    expect(service).toBeTruthy();
  });
});
