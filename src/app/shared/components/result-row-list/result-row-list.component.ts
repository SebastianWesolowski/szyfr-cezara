import { Component, OnInit, Input } from '@angular/core';
import { IItemResult } from 'src/app/models/i-item-result';
@Component({
  selector: 'result-row-list',
  templateUrl: './result-row-list.component.html',
  styleUrls: ['./result-row-list.component.scss']
})
export class ResultRowListComponent implements OnInit {
  @Input() result: IItemResult[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.result);
  }
}
