import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorySummaryComponent } from './factory-summary.component';

describe('FactorySummaryComponent', () => {
  let component: FactorySummaryComponent;
  let fixture: ComponentFixture<FactorySummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactorySummaryComponent]
    });
    fixture = TestBed.createComponent(FactorySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
