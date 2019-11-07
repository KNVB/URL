import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roster-month-picker',
  templateUrl: './roster-month-picker.component.html',
  styleUrls: ['./roster-month-picker.component.css']
})
export class RosterMonthPickerComponent implements OnInit {
  rosterMonth = 'November 2019';
  constructor() { }

  ngOnInit() {
  }
  nextMonth() {
    console.log('Next Month');
  }
  popup() {
    console.log('Popup');
  }
  prevMonth() {
    console.log('Previous Month');
  }
}
