import { TestBed, inject } from '@angular/core/testing';

import { GoleoService } from './goleo.service';

describe('GoleoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoleoService]
    });
  });

  it('should be created', inject([GoleoService], (service: GoleoService) => {
    expect(service).toBeTruthy();
  }));
});
