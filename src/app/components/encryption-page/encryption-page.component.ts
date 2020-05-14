import { Component, OnInit } from '@angular/core';
import { IItemResult } from 'src/app/models/i-item-result';
import { DecryptionItemService } from 'src/app/services/decryption-item.service';
import { EncryptionItemService } from 'src/app/services/encryption-item.service';

@Component({
  selector: 'encryption-page',
  templateUrl: './encryption-page.component.html',
  styleUrls: ['./encryption-page.component.scss']
})
export class EncryptionPageComponent implements OnInit {
  public encryptionItemList: IItemResult[];

  constructor(private _encryptionItemService: EncryptionItemService) {
    this.encryptionItemList = this._encryptionItemService.getEncryptionList();
  }

  ngOnInit(): void {}

  encryptionValue(value) {
    this._encryptionItemService.encryptionNewValue(value);
  }
}
