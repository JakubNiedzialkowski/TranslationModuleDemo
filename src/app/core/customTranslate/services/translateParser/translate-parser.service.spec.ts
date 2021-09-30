import { TestBed } from '@angular/core/testing';

import { TranslateParserService } from './translate-parser.service';

describe('TranslateParserService', () => {
  let service: TranslateParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
