import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritereXComponent } from './critere-x.component';

describe('CritereXComponent', () => {
  let component: CritereXComponent;
  let fixture: ComponentFixture<CritereXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritereXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritereXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
