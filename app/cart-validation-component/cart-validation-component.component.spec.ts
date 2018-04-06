import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartValidationComponentComponent } from './cart-validation-component.component';

describe('CartValidationComponentComponent', () => {
  let component: CartValidationComponentComponent;
  let fixture: ComponentFixture<CartValidationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartValidationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartValidationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
