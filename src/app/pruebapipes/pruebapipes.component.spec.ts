import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebapipesComponent } from './pruebapipes.component';

describe('PruebapipesComponent', () => {
  let component: PruebapipesComponent;
  let fixture: ComponentFixture<PruebapipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebapipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebapipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
