import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit, ControlValueAccessor {

  @ViewChild('input', { static: true }) input!: ElementRef;
  @Input() type = 'text';
  @Input() label!: string;

  //@Self for angular dependency injector will only look for this inside itself and not look for any other dependency that is already in use
  constructor(@Self() public controlDir: NgControl) {
    //binds to our class and now we have access to our control directive inside of our component and inside our template
    this.controlDir.valueAccessor = this
  }
  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators = control?.validator ? [control.validator] : [];
    const asyncValidators = control?.asyncValidator ? [control.asyncValidator] : []

    control?.setValidators(validators);
    control?.setAsyncValidators(asyncValidators);
    control?.updateValueAndValidity();
  }
  onChange(event:any) { };
  onTouched() { };
  writeValue(obj: any): void {
    this.input.nativeElement.value = obj || '';
    }
  registerOnChange(fn: any): void {
    this.onChange=fn;
    }
  registerOnTouched(fn: any): void {
    this.onTouched=fn;
    }

 

}
