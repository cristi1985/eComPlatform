import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IBasketItem } from '../shared/models/basket';
import { BasketService } from './basket.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BasketComponent } from './basket.component';

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(() => {
    const basketServiceStub = () => ({
      basket$: {},
      basketTotal$: {},
      removeItemFromBasket: item => ({}),
      incrementItemQuantity: item => ({}),
      decrementItemQuantity: item => ({})
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BasketComponent],
      providers: [{ provide: BasketService, useFactory: basketServiceStub }]
    });
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('removeBasketItem', () => {
    it('makes expected calls', () => {
      const iBasketItemStub: IBasketItem = <any>{};
      const basketServiceStub: BasketService = fixture.debugElement.injector.get(
        BasketService
      );
      spyOn(basketServiceStub, 'removeItemFromBasket').and.callThrough();
      component.removeBasketItem(iBasketItemStub);
      expect(basketServiceStub.removeItemFromBasket).toHaveBeenCalled();
    });
  });

  describe('incrementItemQuantity', () => {
    it('makes expected calls', () => {
      const iBasketItemStub: IBasketItem = <any>{};
      const basketServiceStub: BasketService = fixture.debugElement.injector.get(
        BasketService
      );
      spyOn(basketServiceStub, 'incrementItemQuantity').and.callThrough();
      component.incrementItemQuantity(iBasketItemStub);
      expect(basketServiceStub.incrementItemQuantity).toHaveBeenCalled();
    });
  });

  describe('decrementItemQuantity', () => {
    it('makes expected calls', () => {
      const iBasketItemStub: IBasketItem = <any>{};
      const basketServiceStub: BasketService = fixture.debugElement.injector.get(
        BasketService
      );
      spyOn(basketServiceStub, 'decrementItemQuantity').and.callThrough();
      component.decrementItemQuantity(iBasketItemStub);
      expect(basketServiceStub.decrementItemQuantity).toHaveBeenCalled();
    });
  });
});
