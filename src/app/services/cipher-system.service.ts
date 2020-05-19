import { Injectable } from '@angular/core';
import { cesarCipher } from './../util/cipher';
import { InputSequenceList } from './../mocks/mock-input-sentence-list';
import { IItemSentence, TypeCipherEnum } from '../models/i-item-sentence';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CipherSystemService {
  private sequenceItemList: IItemSentence[] = InputSequenceList;
  private _encryptionList: BehaviorSubject<
    IItemSentence[]
  > = new BehaviorSubject<IItemSentence[]>(null);
  private _encryptionListObservable = this._encryptionList.asObservable();
  private _decryptionList: BehaviorSubject<
    IItemSentence[]
  > = new BehaviorSubject<IItemSentence[]>(null);
  private _decryptionListObservable = this._decryptionList.asObservable();

  constructor() {}

  newCipherItem(type: TypeCipherEnum, valueInput): any {
    const newObj = {
      id: this.getnewIdDecryptionList(),
      decryption:
        type === TypeCipherEnum.decryptionnShow
          ? cesarCipher(valueInput)
          : valueInput,
      decryptionnShow: type === TypeCipherEnum.decryptionnShow ? true : false,
      encryption:
        type === TypeCipherEnum.encryptionShow
          ? cesarCipher(valueInput)
          : valueInput,
      encryptionShow: type === TypeCipherEnum.encryptionShow ? true : false,
      iconId: Math.ceil(Math.random() * 14)
    };

    this.sequenceItemList.push(newObj);
    this.checkTypeCipher(type);
  }

  refreshDecryptionList() {
    const decryptionList = this.sequenceItemList.filter(
      sequence => sequence.decryptionnShow === true
    );
    this._decryptionList.next(decryptionList);
  }

  getDecryptionList(): Observable<IItemSentence[]> {
    return this._decryptionListObservable;
  }

  getEncryptionList(): Observable<IItemSentence[]> {
    return this._encryptionListObservable;
  }

  refreshEncryptionList() {
    const encryptionList = this.sequenceItemList.filter(
      sequence => sequence.encryptionShow === true
    );
    this._encryptionList.next(encryptionList);
  }

  checkTypeCipher(type) {
    if (type === TypeCipherEnum.decryptionnShow) {
      this.refreshDecryptionList();
    }
    if (type === TypeCipherEnum.encryptionShow) {
      this.refreshEncryptionList();
    }
  }

  getnewIdDecryptionList(): number {
    return this.sequenceItemList.length + 1;
  }
}
