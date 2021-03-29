import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const accountServiceStub = () => ({
      loadCurrentUser: token => ({ subscribe: f => f({}) })
    });
    const basketServiceStub = () => ({
      getBasket: basketId => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: AccountService, useFactory: accountServiceStub },
        { provide: BasketService, useFactory: basketServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`title has default value`, () => {
    expect(component.title).toEqual(`eComPlatform`);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'loadBasket').and.callThrough();
      spyOn(component, 'loadCurrentUser').and.callThrough();
      component.ngOnInit();
      expect(component.loadBasket).toHaveBeenCalled();
      expect(component.loadCurrentUser).toHaveBeenCalled();
    });
  });

  describe('loadCurrentUser', () => {
    it('makes expected calls', () => {
      const accountServiceStub: AccountService = fixture.debugElement.injector.get(
        AccountService
      );
      spyOn(accountServiceStub, 'loadCurrentUser').and.callThrough();
      component.loadCurrentUser();
      expect(accountServiceStub.loadCurrentUser).toHaveBeenCalled();
    });
  });

  // describe('loadBasket', () => {
  //   it('makes expected calls', () => {
  //     const basketServiceStub: BasketService = fixture.debugElement.injector.get(
  //       BasketService
  //     );
  //     spyOn(basketServiceStub, 'getBasket').and.callThrough();
  //     component.loadBasket();
  //     expect(basketServiceStub.getBasket).toHaveBeenCalled();
  //   });
  // });
});
