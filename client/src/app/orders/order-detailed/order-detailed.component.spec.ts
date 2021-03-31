import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';
import { OrderDetailedComponent } from './order-detailed.component';

describe('OrderDetailedComponent', () => {
  let component: OrderDetailedComponent;
  let fixture: ComponentFixture<OrderDetailedComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({
      snapshot: { paramMap: { get: () => ({}) } }
    });
    const breadcrumbServiceStub = () => ({ set: (string, string1) => ({}) });
    const ordersServiceStub = () => ({
      getOrderDetailed: arg => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [OrderDetailedComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: BreadcrumbService, useFactory: breadcrumbServiceStub },
        { provide: OrdersService, useFactory: ordersServiceStub }
      ]
    });
    fixture = TestBed.createComponent(OrderDetailedComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const breadcrumbServiceStub: BreadcrumbService = fixture.debugElement.injector.get(
        BreadcrumbService
      );
      const ordersServiceStub: OrdersService = fixture.debugElement.injector.get(
        OrdersService
      );
      spyOn(breadcrumbServiceStub, 'set').and.callThrough();
      spyOn(ordersServiceStub, 'getOrderDetailed').and.callThrough();
      component.ngOnInit();
      expect(breadcrumbServiceStub.set).toHaveBeenCalled();
      expect(ordersServiceStub.getOrderDetailed).toHaveBeenCalled();
    });
  });
});
