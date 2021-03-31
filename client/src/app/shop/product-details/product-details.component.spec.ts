import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from '../../basket/basket.service';
import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(() => {
    const shopServiceStub = () => ({
      getProduct: arg => ({ subscribe: f => f({}) })
    });
    const activatedRouteStub = () => ({
      snapshot: { paramMap: { get: () => ({}) } }
    });
    const breadcrumbServiceStub = () => ({ set: (string, string1) => ({}) });
    const basketServiceStub = () => ({
      addItemToBasket: (product, quantity) => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductDetailsComponent],
      providers: [
        { provide: ShopService, useFactory: shopServiceStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: BreadcrumbService, useFactory: breadcrumbServiceStub },
        { provide: BasketService, useFactory: basketServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`quantity has default value`, () => {
    expect(component.quantity).toEqual(1);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'loadProduct').and.callThrough();
      component.ngOnInit();
      expect(component.loadProduct).toHaveBeenCalled();
    });
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

  describe('loadProduct', () => {
    it('makes expected calls', () => {
      const shopServiceStub: ShopService = fixture.debugElement.injector.get(
        ShopService
      );
      const breadcrumbServiceStub: BreadcrumbService = fixture.debugElement.injector.get(
        BreadcrumbService
      );
      spyOn(shopServiceStub, 'getProduct').and.callThrough();
      spyOn(breadcrumbServiceStub, 'set').and.callThrough();
      component.loadProduct();
      expect(shopServiceStub.getProduct).toHaveBeenCalled();
      expect(breadcrumbServiceStub.set).toHaveBeenCalled();
    });
  });
});
