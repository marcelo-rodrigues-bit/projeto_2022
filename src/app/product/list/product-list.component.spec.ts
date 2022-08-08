import { ComponentFixture, TestBed } from '@angular/core/testing';

import { productsListaComponent } from './product-list.component';

describe('productsListaComponent', () => {
  let component: productsListaComponent;
  let fixture: ComponentFixture<productsListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ productsListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(productsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
