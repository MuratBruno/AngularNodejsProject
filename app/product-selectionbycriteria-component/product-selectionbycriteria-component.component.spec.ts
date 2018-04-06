import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectionbycriteriaComponentComponent } from './product-selectionbycriteria-component.component';

describe('ProductSelectionbycriteriaComponentComponent', () => {
  let component: ProductSelectionbycriteriaComponentComponent;
  let fixture: ComponentFixture<ProductSelectionbycriteriaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSelectionbycriteriaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectionbycriteriaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
