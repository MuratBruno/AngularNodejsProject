import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartManagementComponentComponent } from './cart-management-component.component';

describe('CartManagementComponentComponent', () => {
  let component: CartManagementComponentComponent;
  let fixture: ComponentFixture<CartManagementComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartManagementComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartManagementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
