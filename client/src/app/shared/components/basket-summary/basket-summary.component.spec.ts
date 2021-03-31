import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IBasketItem } from '../../models/basket';
import { RouterTestingModule } from '@angular/router/testing';
import { BasketSummaryComponent } from './basket-summary.component';

describe('BasketSummaryComponent', () => {
  let component: BasketSummaryComponent;
  let fixture: ComponentFixture<BasketSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BasketSummaryComponent]
    });
    fixture = TestBed.createComponent(BasketSummaryComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`isBasket has default value`, () => {
    expect(component.isBasket).toEqual(true);
  });

  it(`items has default value`, () => {
    expect(component.items).toEqual([]);
  });

  it(`isOrder has default value`, () => {
    expect(component.isOrder).toEqual(false);
  });
});
