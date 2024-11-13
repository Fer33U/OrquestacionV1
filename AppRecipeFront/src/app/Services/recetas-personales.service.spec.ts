import { TestBed } from '@angular/core/testing';

import { RecetasPersonalesService } from './recetas-personales.service';

describe('RecetasPersonalesService', () => {
  let service: RecetasPersonalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetasPersonalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
