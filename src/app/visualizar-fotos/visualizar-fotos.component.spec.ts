import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarFotosComponent } from './visualizar-fotos.component';

describe('VisualizarFotosComponent', () => {
  let component: VisualizarFotosComponent;
  let fixture: ComponentFixture<VisualizarFotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarFotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
