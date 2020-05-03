import { TestBed } from '@angular/core/testing';

import { CharactersSWWService } from './characters-sww.service';

describe('CharactersSWWService', () => {
  let service: CharactersSWWService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersSWWService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
