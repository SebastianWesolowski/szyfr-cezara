import { Injectable } from '@angular/core';
import { DecryptionItemList } from './../mocks/mock-decryption-list';
import { IItemResult } from '../models/i-item-result';
@Injectable({
  providedIn: 'root'
})
export class DecryptionItemService {
  private decryptionItemList: IItemResult[] = DecryptionItemList;

  constructor() {}

  getDecryptionList(): IItemResult[] {
    return this.decryptionItemList;
  }
}
