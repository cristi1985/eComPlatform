import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from '../account/account.service';
import { BasketService } from '../basket/basket.service';
import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const accountServiceStub = () => ({
      getUserAddress: () => ({ subscribe: f => f({}) })
    });
    const basketServiceStub = () => ({
      basketTotal$: {},
      getCurrentBasketValue: () => ({ deliveryMethodId: {} })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CheckoutComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: AccountService, useFactory: accountServiceStub },
        { provide: BasketService, useFactory: basketServiceStub }
      ]
    });
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  // describe('ngOnInit', () => {
  //   it('makes expected calls', () => {
  //     spyOn(component, 'createCheckOutForm').and.callThrough();
  //     spyOn(component, 'getAddressFormValues').and.callThrough();
  //     spyOn(component, 'getDeliveryMethodValue').and.callThrough();
  //     component.ngOnInit();
  //     expect(component.createCheckOutForm).toHaveBeenCalled();
  //     expect(component.getAddressFormValues).toHaveBeenCalled();
  //     expect(component.getDeliveryMethodValue).toHaveBeenCalled();
  //   });
  // });

  describe('createCheckOutForm', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.createCheckOutForm();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });

  // describe('getAddressFormValues', () => {
  //   it('makes expected calls', () => {
  //     const accountServiceStub: AccountService = fixture.debugElement.injector.get(
  //       AccountService
  //     );
  //     spyOn(accountServiceStub, 'getUserAddress').and.callThrough();
  //     component.getAddressFormValues();
  //     expect(accountServiceStub.getUserAddress).toHaveBeenCalled();
  //   });
  // });

  // describe('getDeliveryMethodValue', () => {
  //   it('makes expected calls', () => {
  //     const basketServiceStub: BasketService = fixture.debugElement.injector.get(
  //       BasketService
  //     );
  //     spyOn(basketServiceStub, 'getCurrentBasketValue').and.callThrough();
  //     component.getDeliveryMethodValue();
  //     expect(basketServiceStub.getCurrentBasketValue).toHaveBeenCalled();
  //   });
  // });
});
