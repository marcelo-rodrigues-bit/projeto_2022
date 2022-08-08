import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSaidaComponent } from './registrar-saida.component';

describe('RegistrarSaidaComponent', () => {
  let component: RegistrarSaidaComponent;
  let fixture: ComponentFixture<RegistrarSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSaidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
