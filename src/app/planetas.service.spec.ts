import { TestBed } from '@angular/core/testing';

import { PlanetasService } from './planetas.service';

describe('PlanetasService', () => {
  let service: PlanetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
