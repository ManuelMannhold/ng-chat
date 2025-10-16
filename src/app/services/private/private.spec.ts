import { TestBed } from '@angular/core/testing';

import { Private } from './private';

describe('Private', () => {
  let service: Private;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Private);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
