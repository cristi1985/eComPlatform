import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OrdersService } from './orders.service';
import { RouterTestingModule } from '@angular/router/testing';
import { OrdersComponent } from './orders.component';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(() => {
    const ordersServiceStub = () => ({
      getOrdersForUser: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [OrdersComponent],
      providers: [{ provide: OrdersService, useFactory: ordersServiceStub }]
    });
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getOrders').and.callThrough();
      component.ngOnInit();
      expect(component.getOrders).toHaveBeenCalled();
    });
  });

  describe('getOrders', () => {
    it('makes expected calls', () => {
      const ordersServiceStub: OrdersService = fixture.debugElement.injector.get(
        OrdersService
      );
      spyOn(ordersServiceStub, 'getOrdersForUser').and.callThrough();
      component.getOrders();
      expect(ordersServiceStub.getOrdersForUser).toHaveBeenCalled();
    });
  });
});
