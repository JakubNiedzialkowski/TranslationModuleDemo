import { TestBed } from '@angular/core/testing';

import { TranslateStoreService } from './translate-store.service';

describe('TranslateStoreService', () => {
  let service: TranslateStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
