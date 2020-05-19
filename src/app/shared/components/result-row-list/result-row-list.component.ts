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

  constructor() {}

  ngOnInit(): void {}

  test(resultItem: IItemSentence) {
    if (resultItem.encryptionShow === true) {
      return {
        showResult: resultItem.encryption,
        hiddenResult: resultItem.decryption
      };
    }

    if (resultItem.decryptionnShow === true) {
      return {
        showResult: resultItem.decryption,
        hiddenResult: resultItem.encryption
      };
    }
  }
}
