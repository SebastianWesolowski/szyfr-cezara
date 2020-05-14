import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
})
export class InputComponentComponent implements OnInit {
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter();

  @Input() placeholder;
  constructor() {}

  ngOnInit(): void {}

  newValue(event) {
    if (event.target.value !== '')
      this.inputValueChange.emit(event.target.value);
    event.target.value = '';
  }
}
