import { Component, OnInit, Input } from '@angular/core';
import { IItemSentence, TypeCipherEnum } from 'src/app/models/i-item-sentence';
@Component({
  selector: 'result-row-list',
  templateUrl: './result-row-list.component.html',
  styleUrls: ['./result-row-list.component.scss']
})
export class ResultRowListComponent implements OnInit {
  @Input() result: IItemSentence[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.result);
  }
}
