import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'result-one-row',
  templateUrl: './result-one-row.component.html',
  styleUrls: ['./result-one-row.component.scss']
})
export class ResultOneRowComponent implements OnInit {
  @Input() icon: string;
  @Input() content: string;
  @Input() mode: boolean;

  public id = 1;
  constructor() {}

  ngOnInit(): void {}
}
