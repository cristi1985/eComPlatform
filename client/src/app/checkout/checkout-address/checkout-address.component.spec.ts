import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../account/account.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CheckoutAddressComponent } from './checkout-address.component';

describe('CheckoutAddressComponent', () => {
  let component: CheckoutAddressComponent;
  let fixture: ComponentFixture<CheckoutAddressComponent>;

  beforeEach(() => {
    const toastrServiceStub = () => ({ success: string => ({}) });
    const accountServiceStub = () => ({
      updateUserAddress: value => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CheckoutAddressComponent],
      providers: [
        { provide: ToastrService, useFactory: toastrServiceStub },
        { provide: AccountService, useFactory: accountServiceStub }
      ]
    });
    fixture = TestBed.createComponent(CheckoutAddressComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  // describe('saveUserAddress', () => {
  //   it('makes expected calls', () => {
  //     const toastrServiceStub: ToastrService = fixture.debugElement.injector.get(
  //       ToastrService
  //     );
  //     const accountServiceStub: AccountService = fixture.debugElement.injector.get(
  //       AccountService
  //     );
  //     spyOn(toastrServiceStub, 'success').and.callThrough();
  //     spyOn(accountServiceStub, 'updateUserAddress').and.callThrough();
  //     component.saveUserAddress();
  //     expect(toastrServiceStub.success).toHaveBeenCalled();
  //     expect(accountServiceStub.updateUserAddress).toHaveBeenCalled();
  //   });
  // });
});
