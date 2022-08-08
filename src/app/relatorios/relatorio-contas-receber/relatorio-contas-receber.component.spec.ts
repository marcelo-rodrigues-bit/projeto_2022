import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioContasReceberComponent } from './relatorio-contas-receber.component';

describe('RelatorioContasReceberComponent', () => {
  let component: RelatorioContasReceberComponent;
  let fixture: ComponentFixture<RelatorioContasReceberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioContasReceberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioContasReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
