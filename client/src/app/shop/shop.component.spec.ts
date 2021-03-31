import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { asNativeElements, NO_ERRORS_SCHEMA } from '@angular/core';
import { ShopService } from './shop.service';
import { ShopComponent } from './shop.component';
import { of } from 'rxjs';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(() => {
    const shopServiceStub = () => ({
      getProducts(){ return of ({shopParams:{
        pageIndex:1,
        pageSize:1,
        count:1,
        data:{
          id:1,
          productName:'Test Product',
          description:'Description Test',
          pictureUrl:'localhost',
          price:200,
          productType:'Hat',
          prodctBrand:'Nike'
        }
      }})},
      getBrands(){return of({data:
        {
          id: 1,
         name: "Test Brand"
        }
      },{data:{
        id:2,
        name:"Famous Brand"
      }})},
      getTypes() {return of ({ 
        id:1,
        name:'Hat'
      })}
    })
    ;
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ShopComponent],
      providers: [{ provide: ShopService, useFactory: shopServiceStub }]
    });
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`products has default value`, () => {
    expect(component.products).toEqual([]);
  });

  it(`brands has default value`, () => {
    expect(component.brands).toEqual([]);
  });

  it(`types has default value`, () => {
    expect(component.types).toEqual([]);
  });

  it(`totalCount has default value`, () => {
    expect(component.totalCount).toEqual(0);
  });

  it(`sortOptions has default value`, () => {
    expect(component.sortOptions).length == 3;
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getProducts').and.callThrough();
      spyOn(component, 'getBrands').and.callThrough();
      spyOn(component, 'getTypes').and.callThrough();
      component.ngOnInit();
      expect(component.getProducts).toHaveBeenCalled();
      expect(component.getBrands).toHaveBeenCalled();
      expect(component.getTypes).toHaveBeenCalled();
    });
  });

  describe('getProducts', () => {
    it('makes expected calls', () => {
      const shopServiceStub: ShopService = fixture.debugElement.injector.get(
        ShopService
      );
      spyOn(shopServiceStub, 'getProducts').and.callThrough();
      component.getProducts();
      expect(shopServiceStub.getProducts).toHaveBeenCalled();
    });
  });

  describe('getBrands', () => {
    it('makes expected calls', () => {
      const shopServiceStub: ShopService = fixture.debugElement.injector.get(
        ShopService
      );
      spyOn(shopServiceStub, 'getBrands').and.callThrough();
      component.getBrands();
      expect(shopServiceStub.getBrands).toHaveBeenCalled();
    });
  });

  describe('getTypes', () => {
    it('makes expected calls', () => {
      const shopServiceStub: ShopService = fixture.debugElement.injector.get(
        ShopService
      );
      spyOn(shopServiceStub, 'getTypes').and.callThrough();
      component.getTypes();
      expect(shopServiceStub.getTypes).toHaveBeenCalled();
    });
  });

  // describe('onSearch', () => {
   
  //   it('makes expected calls', (() => {
  //     component.searchTerm.nativeElement.value="hat";
  //     const shopServiceStub: ShopService = fixture.debugElement.injector.get(
  //       ShopService
  //     );
  //     spyOn(shopServiceStub, 'getProducts').and.callThrough();
  //     component.onSearch();
  //     expect(shopServiceStub.getProducts).toHaveBeenCalled();
  //   }));
  // });

  // describe('onReset', () => {
  //   it('makes expected calls', () => {
  //     spyOn(component, 'getProducts').and.callThrough();
  //     component.onReset();
  //     expect(component.getProducts).toHaveBeenCalled();
  //   });
  // });
});
