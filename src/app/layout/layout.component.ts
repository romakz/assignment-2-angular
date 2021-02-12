import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  array = [
    {date: '2021-02-05', distance: 1000, time: 30}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  updateArray(newElem) {
    this.array.push(newElem);
  }

}
