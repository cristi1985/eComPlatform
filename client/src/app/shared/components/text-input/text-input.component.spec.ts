import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormControlDirective, NgControl, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input.component';
import { FormsModule } from '@angular/forms';


describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(() => {
    const ngControlStub = () => ({
      valueAccessor: {},
      control: { validator: {}, asyncValidator: {} }
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TextInputComponent],
      imports: [ FormsModule, ReactiveFormsModule ],
      providers: [{ provide: NgControl, useFactory: ngControlStub }]
    }).overrideComponent(TextInputComponent, {
      set:{
        providers:[
          {
            provide:NgControl,
            useValue: new FormControlDirective([], [], null, null)
          }
        ]
      }
    });
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`type has default value`, () => {
    expect(component.type).toEqual(`text`);
  });
});
