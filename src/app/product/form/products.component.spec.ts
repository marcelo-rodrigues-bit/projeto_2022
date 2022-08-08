import { ComponentFixture, TestBed } from '@angular/core/testing';

import { productsCadastroComponent } from './products.component';

describe('productsCadastroComponent', () => {
  let component: productsCadastroComponent;
  let fixture: ComponentFixture<productsCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ productsCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(productsCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
