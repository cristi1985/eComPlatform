import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from '../../basket/basket.service';
import { CheckoutService } from '../checkout.service';
import { CheckoutPaymentComponent } from './checkout-payment.component';

describe('CheckoutPaymentComponent', () => {
  let component: CheckoutPaymentComponent;
  let fixture: ComponentFixture<CheckoutPaymentComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array, navigationExtras) => ({}) });
    const toastrServiceStub = () => ({ error: message => ({}) });
    const basketServiceStub = () => ({
      getCurrentBasketValue: () => ({}),
      deleteBasket: basket => ({})
    });
    const checkoutServiceStub = () => ({
      createOrder: orderToCreate => ({ toPromise: () => ({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CheckoutPaymentComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: ToastrService, useFactory: toastrServiceStub },
        { provide: BasketService, useFactory: basketServiceStub },
        { provide: CheckoutService, useFactory: checkoutServiceStub }
      ]
    });
    fixture = TestBed.createComponent(CheckoutPaymentComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`loading has default value`, () => {
    expect(component.loading).toEqual(false);
  });

  it(`cardNumberValid has default value`, () => {
    expect(component.cardNumberValid).toEqual(false);
  });

  it(`cardExpiryValid has default value`, () => {
    expect(component.cardExpiryValid).toEqual(false);
  });

  it(`cardCvcValid has default value`, () => {
    expect(component.cardCvcValid).toEqual(false);
  });
});
