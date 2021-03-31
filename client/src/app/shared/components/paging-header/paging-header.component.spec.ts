import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PagingHeaderComponent } from './paging-header.component';

describe('PagingHeaderComponent', () => {
  let component: PagingHeaderComponent;
  let fixture: ComponentFixture<PagingHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PagingHeaderComponent]
    });
    fixture = TestBed.createComponent(PagingHeaderComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
