import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  resultArray = [
    {date: '2021-02-05', distance: 1000, time: 30}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  updateArray(newElem) {
    console.log('resultArray update');
    this.resultArray.push(newElem);
  }

  emptyArray() {
    console.log('resultArray is empty');
    this.resultArray = [];
  }
}
