import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { IItemSentence, TypeCipherEnum } from 'src/app/models/i-item-sentence';
import { CipherSystemService } from 'src/app/services/cipher-system.service';

@Component({
  selector: 'decryption-page',
  templateUrl: './decryption-page.component.html',
  styleUrls: ['./decryption-page.component.scss']
})
export class DecryptionPageComponent implements OnInit, OnDestroy {
  public decryptionItemList: IItemSentence[];
  private _subscriptions: Subscription[] = [];

  constructor(private _cipherSystemService: CipherSystemService) {
    this._cipherSystemService.refreshDecryptionList();
  }

  ngOnInit(): void {
    this._subscriptions.push(
      this._cipherSystemService
        .getDecryptionList()
        .subscribe(data => (this.decryptionItemList = data))
    );
  }
  ngOnDestroy() {
    this._subscriptions.forEach(oneSubscription => {
      if (oneSubscription) {
        oneSubscription.unsubscribe();
      }
    });
  }
  decryptionValue(value) {
    this._cipherSystemService.newCipherItem(
      TypeCipherEnum.decryptionnShow,
      value
    );
  }
}
