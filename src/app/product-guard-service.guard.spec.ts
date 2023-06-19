import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { productGuardServiceGuard } from './product-guard-service.guard';

describe('productGuardServiceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => productGuardServiceGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
