import { Component, OnInit } from '@angular/core';
import { IItemSentence, TypeCipherEnum } from 'src/app/models/i-item-sentence';
import { CipherSystemService } from 'src/app/services/cipher-system.service';

@Component({
  selector: 'decryption-page',
  templateUrl: './decryption-page.component.html',
  styleUrls: ['./decryption-page.component.scss']
})
export class DecryptionPageComponent implements OnInit {
  public decryptionItemList: IItemSentence[];

  constructor(private _cipherSystemService: CipherSystemService) {
    this.decryptionItemList = this._cipherSystemService.getDecryptionList();
  }

  ngOnInit(): void {}

  decryptionValue(value) {
    this._cipherSystemService.newCipherItem(
      TypeCipherEnum.decryptionnShow,
      value
    );
  }
}
