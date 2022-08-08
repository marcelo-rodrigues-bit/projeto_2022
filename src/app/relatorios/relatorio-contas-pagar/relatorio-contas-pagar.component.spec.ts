import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioContasPagarComponent } from './relatorio-contas-pagar.component';

describe('RelatorioContasPagarComponent', () => {
  let component: RelatorioContasPagarComponent;
  let fixture: ComponentFixture<RelatorioContasPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioContasPagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioContasPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
