import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { AccountService } from '../../account/account.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(() => {
    const basketServiceStub = () => ({ basket$: {} });
    const accountServiceStub = () => ({ currentUser$: {}, logout: () => ({}) });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NavBarComponent],
      providers: [
        { provide: BasketService, useFactory: basketServiceStub },
        { provide: AccountService, useFactory: accountServiceStub }
      ]
    });
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('logout', () => {
    it('makes expected calls', () => {
      const accountServiceStub: AccountService = fixture.debugElement.injector.get(
        AccountService
      );
      spyOn(accountServiceStub, 'logout').and.callThrough();
      component.logout();
      expect(accountServiceStub.logout).toHaveBeenCalled();
    });
  });
});
