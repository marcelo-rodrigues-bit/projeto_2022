import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioSaidasComponent } from './relatorio-saidas.component';

describe('RelatorioSaidasComponent', () => {
  let component: RelatorioSaidasComponent;
  let fixture: ComponentFixture<RelatorioSaidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioSaidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioSaidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
