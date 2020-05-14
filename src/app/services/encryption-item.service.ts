import { Injectable } from '@angular/core';
import { EncryptionItemList } from './../mocks/mock-encryption-list';
import { IItemResult } from '../models/i-item-result';
@Injectable({
  providedIn: 'root'
})
export class EncryptionItemService {
  private EncryptionItemList: IItemResult[] = EncryptionItemList;

  constructor() {}

  getEncryptionList(): IItemResult[] {
    return this.EncryptionItemList;
  }
}
