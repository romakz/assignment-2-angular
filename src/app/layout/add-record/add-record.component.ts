import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {
  date = new Date();
  distance = 0;
  time = 0;
  @Output() sentMessageParentAddNew = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewResult() {
    this.sentMessageParentAddNew.emit({date: this.date, distance: this.distance, time: this.time});
    console.log('Add new result');
    console.log({date: this.date, distance: this.distance, time: this.time});
    this.doDefaultValue();
  }

  doDefaultValue() {
    this.date = null;
    this.time = 0;
    this.distance = 0;
  }
}
