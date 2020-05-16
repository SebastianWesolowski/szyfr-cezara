import { EncryptionItemList } from './../../../mocks/mock-encryption-list';
import { Component, OnInit, Input } from '@angular/core';
import { IItemSentence, TypeCipherEnum } from 'src/app/models/i-item-sentence';
@Component({
  selector: 'result-row-list',
  templateUrl: './result-row-list.component.html',
  styleUrls: ['./result-row-list.component.scss']
})
export class ResultRowListComponent implements OnInit {
  @Input() result: IItemSentence[];

  // @Input()
  // set result(result: IItemSentence[]) {
  //   this.result = result;
  //   console.log(result);
  // }

  constructor() {
    console.log(this.result);
  }

  ngOnInit(): void {
    // console.log(this.result);
  }

  test(resultItem: IItemSentence) {
    if ((resultItem.encryptionShow = true)) {
      return resultItem.encryption;
    }

    if ((resultItem.decryptionnShow = true)) {
      return resultItem.decryption;
    }
  }
}
