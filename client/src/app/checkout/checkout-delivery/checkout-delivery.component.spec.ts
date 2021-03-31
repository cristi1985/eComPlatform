import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { IDeliveryMethod } from '../../shared/models/deliveryMethods';
import { CheckoutService } from '../checkout.service';
import { CheckoutDeliveryComponent } from './checkout-delivery.component';

describe('CheckoutDeliveryComponent', () => {
  let component: CheckoutDeliveryComponent;
  let fixture: ComponentFixture<CheckoutDeliveryComponent>;

  beforeEach(() => {
    const basketServiceStub = () => ({
      setShippingPrice: deliveryMethod => ({})
    });
    const checkoutServiceStub = () => ({
      getDeliveryMethods: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CheckoutDeliveryComponent],
      providers: [
        { provide: BasketService, useFactory: basketServiceStub },
        { provide: CheckoutService, useFactory: checkoutServiceStub }
      ]
    });
    fixture = TestBed.createComponent(CheckoutDeliveryComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('setShippingPrice', () => {
    it('makes expected calls', () => {
      const basketServiceStub: BasketService = fixture.debugElement.injector.get(
        BasketService
      );
      const iDeliveryMethodStub: IDeliveryMethod = <any>{};
      spyOn(basketServiceStub, 'setShippingPrice').and.callThrough();
      component.setShippingPrice(iDeliveryMethodStub);
      expect(basketServiceStub.setShippingPrice).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const checkoutServiceStub: CheckoutService = fixture.debugElement.injector.get(
        CheckoutService
      );
      spyOn(checkoutServiceStub, 'getDeliveryMethods').and.callThrough();
      component.ngOnInit();
      expect(checkoutServiceStub.getDeliveryMethods).toHaveBeenCalled();
    });
  });
});
