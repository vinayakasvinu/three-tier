import { TestBed } from '@angular/core/testing';

import { NameTagService } from './name-tag.service';

describe('NameTagService', () => {
  let service: NameTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
