import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalleConfianceComponent } from './intervalle-confiance.component';

describe('IntervalleConfianceComponent', () => {
  let component: IntervalleConfianceComponent;
  let fixture: ComponentFixture<IntervalleConfianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalleConfianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalleConfianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
