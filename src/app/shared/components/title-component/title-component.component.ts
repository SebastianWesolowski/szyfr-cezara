import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'title-component',
  templateUrl: './title-component.component.html',
  styleUrls: ['./title-component.component.scss']
})
export class TitleComponentComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() decoration: boolean;

  constructor() {}

  ngOnInit(): void {}
}
