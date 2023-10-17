import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFactoryFormComponent } from './add-new-factory-form.component';

describe('AddNewFactoryFormComponent', () => {
  let component: AddNewFactoryFormComponent;
  let fixture: ComponentFixture<AddNewFactoryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewFactoryFormComponent]
    });
    fixture = TestBed.createComponent(AddNewFactoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
