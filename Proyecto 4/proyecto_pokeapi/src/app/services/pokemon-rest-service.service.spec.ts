import { TestBed } from '@angular/core/testing';

import { PokemonRestServiceService } from './pokemon-rest-service.service';

describe('PokemonRestServiceService', () => {
  let service: PokemonRestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonRestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
