import { Component, OnInit } from '@angular/core';
import { IItemResult } from 'src/app/models/i-item-result';
import { DecryptionItemService } from 'src/app/services/decryption-item.service';

@Component({
  selector: 'decryption-page',
  templateUrl: './decryption-page.component.html',
  styleUrls: ['./decryption-page.component.scss']
})
export class DecryptionPageComponent implements OnInit {
  public decryptionItemList: IItemResult[];

  constructor(private _decryptionItemService: DecryptionItemService) {
    this.decryptionItemList = this._decryptionItemService.getDecryptionList();
  }

  ngOnInit(): void {}

  decryptionValue(value) {
    const test = this._decryptionItemService.decryptionNewValue(value);
    console.log(test);
  }
}
