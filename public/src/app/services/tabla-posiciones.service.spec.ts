import { TestBed, inject } from '@angular/core/testing';

import { TablaPosicionesService } from './tabla-posiciones.service';

describe('TablaPosicionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TablaPosicionesService]
    });
  });

  it('should be created', inject([TablaPosicionesService], (service: TablaPosicionesService) => {
    expect(service).toBeTruthy();
  }));
});
