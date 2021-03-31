import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(() => {
    const basketServiceStub = () => ({ addItemToBasket: product => ({}) });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductItemComponent],
      providers: [{ provide: BasketService, useFactory: basketServiceStub }]
    });
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('addItemToBasket', () => {
    it('makes expected calls', () => {
      const basketServiceStub: BasketService = fixture.debugElement.injector.get(
        BasketService
      );
      spyOn(basketServiceStub, 'addItemToBasket').and.callThrough();
      component.addItemToBasket();
      expect(basketServiceStub.addItemToBasket).toHaveBeenCalled();
    });
  });
});
