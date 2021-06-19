import { TestBed } from '@angular/core/testing';

import { NgxSimpleToastsService } from './ngx-simple-toasts.service';

describe('NgxSimpleToastsService', () => {
  let service: NgxSimpleToastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpleToastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
