import { TestBed } from '@angular/core/testing';

import { SinglePostService } from './single-post.service';

describe('SinglePostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SinglePostService = TestBed.get(SinglePostService);
    expect(service).toBeTruthy();
  });
});
