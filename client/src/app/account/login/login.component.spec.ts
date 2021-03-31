import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({
      snapshot: { queryParams: { returnUrl: {} } }
    });
    const routerStub = () => ({ navigateByUrl: returnUrl => ({}) });
    const accountServiceStub = () => ({
      login: value => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: AccountService, useFactory: accountServiceStub }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'createLoginForm').and.callThrough();
      component.ngOnInit();
      expect(component.createLoginForm).toHaveBeenCalled();
    });
  });

  // describe('onSubmit', () => {
  //   it('makes expected calls', () => {
  //     const routerStub: Router = fixture.debugElement.injector.get(Router);
  //     const accountServiceStub: AccountService = fixture.debugElement.injector.get(
  //       AccountService
  //     );
  //     spyOn(routerStub, 'navigateByUrl').and.callThrough();
  //     spyOn(accountServiceStub, 'login').and.callThrough();
  //     component.onSubmit();
  //     expect(routerStub.navigateByUrl).toHaveBeenCalled();
  //     expect(accountServiceStub.login).toHaveBeenCalled();
  //   });
  // });
});
