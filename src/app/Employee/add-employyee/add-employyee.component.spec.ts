import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployyeeComponent } from './add-employyee.component';

describe('AddEmployyeeComponent', () => {
  let component: AddEmployyeeComponent;
  let fixture: ComponentFixture<AddEmployyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployyeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
