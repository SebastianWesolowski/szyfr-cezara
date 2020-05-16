import { Component, OnInit } from '@angular/core';
import { CipherSystemService } from 'src/app/services/cipher-system.service';
import { IItemSentence, TypeCipherEnum } from 'src/app/models/i-item-sentence';

@Component({
  selector: 'encryption-page',
  templateUrl: './encryption-page.component.html',
  styleUrls: ['./encryption-page.component.scss']
})
export class EncryptionPageComponent implements OnInit {
  public encryptionItemList: IItemSentence[];

  constructor(private _cipherSystemService: CipherSystemService) {
    this.encryptionItemList = this._cipherSystemService.getSequenceList();
  }

  ngOnInit(): void {}

  encryptionValue(value) {
    this._cipherSystemService.newCipherItem(
      TypeCipherEnum.encryptionShow,
      value
    );
  }
}
