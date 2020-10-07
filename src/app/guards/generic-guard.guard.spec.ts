import { TestBed } from '@angular/core/testing';

import { GenericGuardGuard } from './generic-guard.guard';

describe('GenericGuardGuard', () => {
  let guard: GenericGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GenericGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
