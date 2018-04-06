import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchComponentComponent } from './research-component.component';

describe('ResearchComponentComponent', () => {
  let component: ResearchComponentComponent;
  let fixture: ComponentFixture<ResearchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
