import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueEntradasComponent } from './estoque-entradas.component';

describe('EstoqueEntradasComponent', () => {
  let component: EstoqueEntradasComponent;
  let fixture: ComponentFixture<EstoqueEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoqueEntradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
