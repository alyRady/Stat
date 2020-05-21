import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationRegressionComponent } from './correlation-regression.component';

describe('CorrelationRegressionComponent', () => {
  let component: CorrelationRegressionComponent;
  let fixture: ComponentFixture<CorrelationRegressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrelationRegressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrelationRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
