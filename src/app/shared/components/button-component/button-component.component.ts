import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss']
})
export class ButtonComponentComponent implements OnInit {
  @Output() buttonClick: EventEmitter<Event> = new EventEmitter();
  @Input() content: string;

  constructor() {}

  ngOnInit(): void {}

  onClick(event) {
    this.buttonClick.emit(event);
  }
}
