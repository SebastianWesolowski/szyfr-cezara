import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'result-one-row',
  templateUrl: './result-one-row.component.html',
  styleUrls: ['./result-one-row.component.scss']
})
export class ResultOneRowComponent implements OnInit {
  @Input() iconId: string;
  @Input()
  set content(content) {
    this.showResult = content.showResult;
    this.hiddenResult = content.hiddenResult;
  }

  @Input() mode: boolean;

  public showResult: string;
  public hiddenResult: string;

  constructor() {}

  ngOnInit(): void {}
}
