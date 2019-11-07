import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterMonthPickerComponent } from './roster-month-picker.component';

describe('RosterMonthPickerComponent', () => {
  let component: RosterMonthPickerComponent;
  let fixture: ComponentFixture<RosterMonthPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterMonthPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterMonthPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
