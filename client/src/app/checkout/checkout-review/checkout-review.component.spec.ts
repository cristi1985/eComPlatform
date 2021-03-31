import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from '../../basket/basket.service';
import { CheckoutReviewComponent } from './checkout-review.component';
import { of } from 'rxjs/internal/observable/of';

describe('CheckoutReviewComponent', () => {
  let component: CheckoutReviewComponent;
  let fixture: ComponentFixture<CheckoutReviewComponent>;

  beforeEach(() => {
    const toastrServiceStub = () => ({ error: message => ({}) });
    const basketServiceStub = () => ({
      basket$: {},
      createPaymentIntent: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CheckoutReviewComponent],
      providers: [
        { provide: ToastrService, useFactory: toastrServiceStub },
        { provide: BasketService, useValue: {
          basket$: of('VALUE_OF_LOADED_DATA'),
        }, 
      },
        
      ]
    });
    fixture = TestBed.createComponent(CheckoutReviewComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  // describe('createPaymentIntent', () => {
  //   it('makes expected calls', () => {
  //     const toastrServiceStub: ToastrService = fixture.debugElement.injector.get(
  //       ToastrService
  //     );
  //     const basketServiceStub: BasketService = fixture.debugElement.injector.get(
  //       BasketService
  //     );
  //     spyOn(toastrServiceStub, 'error').and.callThrough();
  //     spyOn(basketServiceStub, 'createPaymentIntent').and.callThrough();
  //     component.createPaymentIntent();
  //     expect(toastrServiceStub.error).toHaveBeenCalled();
  //     expect(basketServiceStub.createPaymentIntent).toHaveBeenCalled();
  //   });
  // });
});
