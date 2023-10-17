import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewShiftComponent } from './add-new-shift.component';

describe('AddNewShiftComponent', () => {
  let component: AddNewShiftComponent;
  let fixture: ComponentFixture<AddNewShiftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewShiftComponent]
    });
    fixture = TestBed.createComponent(AddNewShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
