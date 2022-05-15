import { TestBed } from '@angular/core/testing';

import { SubreccitService } from './subreccit.service';

describe('SubreccitService', () => {
  let service: SubreccitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubreccitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
