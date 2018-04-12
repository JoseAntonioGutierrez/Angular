import { TestBed, inject } from '@angular/core/testing';

import { VisualizarFotosService } from './visualizar-fotos.service';

describe('VisualizarFotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisualizarFotosService]
    });
  });

  it('should be created', inject([VisualizarFotosService], (service: VisualizarFotosService) => {
    expect(service).toBeTruthy();
  }));
});
