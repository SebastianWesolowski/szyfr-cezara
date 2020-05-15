import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'result-one-row',
  templateUrl: './result-one-row.component.html',
  styleUrls: ['./result-one-row.component.scss']
})
export class ResultOneRowComponent implements OnInit {
  @Input() iconId: string;
  @Input() content: string;
  @Input() mode: boolean;

  constructor() {}

  ngOnInit(): void {}
}
