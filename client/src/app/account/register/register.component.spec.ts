import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { AccountService } from '../account.service';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    const breadcrumbServiceStub = () => ({ set: (string, string1) => ({}) });
    const accountServiceStub = () => ({
      register: value => ({ subscribe: f => f({}) }),
      checkEmailExists: value => ({ pipe: () => ({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RegisterComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: Router, useFactory: routerStub },
        { provide: BreadcrumbService, useFactory: breadcrumbServiceStub },
        { provide: AccountService, useFactory: accountServiceStub }
      ]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'createRegisterForm').and.callThrough();
      component.ngOnInit();
      expect(component.createRegisterForm).toHaveBeenCalled();
    });
  });

  describe('createRegisterForm', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(component, 'validateEmailNotTaken').and.callThrough();
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.createRegisterForm();
      expect(component.validateEmailNotTaken).toHaveBeenCalled();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });

  // describe('onSubmit', () => {
  //   it('makes expected calls', () => {
  //     const routerStub: Router = fixture.debugElement.injector.get(Router);
  //     const accountServiceStub: AccountService = fixture.debugElement.injector.get(
  //       AccountService
  //     );
  //     spyOn(routerStub, 'navigateByUrl').and.callThrough();
  //     spyOn(accountServiceStub, 'register').and.callThrough();
  //     component.onSubmit();
  //     expect(routerStub.navigateByUrl).toHaveBeenCalled();
  //     expect(accountServiceStub.register).toHaveBeenCalled();
  //   });
  // });

  // describe('validateEmailNotTaken', () => {
  //   it('makes expected calls', () => {
  //     const accountServiceStub: AccountService = fixture.debugElement.injector.get(
  //       AccountService
  //     );
  //     spyOn(accountServiceStub, 'checkEmailExists').and.callThrough();
  //     component.validateEmailNotTaken();
  //     expect(accountServiceStub.checkEmailExists).toHaveBeenCalled();
  //   });
  // });
});
