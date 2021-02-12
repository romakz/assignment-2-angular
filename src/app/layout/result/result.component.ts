import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() myResultTable = [];
  @Output() sentMessageParentComponent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  sentMessage() {
    console.log('My Result Table is Empty!');
    this.sentMessageParentComponent.emit();
  }
}
