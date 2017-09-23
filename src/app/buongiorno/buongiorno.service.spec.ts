import { TestBed, inject } from '@angular/core/testing';

import { BuongiornoService } from './buongiorno.service';

describe('BuongiornoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuongiornoService]
    });
  });

  it('should ...', inject([BuongiornoService], (service: BuongiornoService) => {
    expect(service).toBeTruthy();
  }));
});
