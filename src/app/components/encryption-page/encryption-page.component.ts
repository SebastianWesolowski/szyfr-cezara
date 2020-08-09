import { Component, OnInit, OnDestroy } from '@angular/core';
import { CipherSystemService } from 'src/app/services/cipher-system.service';
import { IItemSentence, TypeCipherEnum } from 'src/app/models/i-item-sentence';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'encryption-page',
  templateUrl: './encryption-page.component.html',
  styleUrls: []
})
export class EncryptionPageComponent implements OnInit, OnDestroy {
  public encryptionItemList: IItemSentence[];
  private _subscriptions: Subscription[] = [];

  constructor(private _cipherSystemService: CipherSystemService) {
    this._cipherSystemService.refreshEncryptionList();
  }
  ngOnInit(): void {
    this._subscriptions.push(
      this._cipherSystemService.getEncryptionList().subscribe(data => {
        this.encryptionItemList = data;
      })
    );
  }
  ngOnDestroy() {
    this._subscriptions.forEach(oneSubscription => {
      if (oneSubscription) {
        oneSubscription.unsubscribe();
      }
    });
  }

  encryptionValue(value) {
    this._cipherSystemService.newCipherItem(
      TypeCipherEnum.encryptionShow,
      value
    );
  }
}
