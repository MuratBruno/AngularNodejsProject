import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectionbykeywordsComponentComponent } from './product-selectionbykeywords-component.component';

describe('ProductSelectionbykeywordsComponentComponent', () => {
  let component: ProductSelectionbykeywordsComponentComponent;
  let fixture: ComponentFixture<ProductSelectionbykeywordsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSelectionbykeywordsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectionbykeywordsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
