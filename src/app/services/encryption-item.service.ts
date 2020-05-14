import { Injectable } from '@angular/core';
import { EncryptionItemList } from './../mocks/mock-encryption-list';
import { IItemResult } from '../models/i-item-result';
@Injectable({
  providedIn: 'root'
})
export class EncryptionItemService {
  private encryptionItemList: IItemResult[] = EncryptionItemList;

  constructor() {}

  removePolishLetters(inputValue) {
    const letterMap = {
      ś: 's',
      ć: 'c',
      ó: 'o',
      ą: 'a',
      ę: 'e',
      ł: 'l',
      ń: 'n',
      ź: 'z',
      ż: 'z'
    };

    for (const [key, value] of Object.entries(letterMap)) {
      inputValue = inputValue.toLocaleLowerCase().split(key).join(value);
    }
    return inputValue.split('');
  }

  encryptionNewValue(inputValue) {
    const offsetLetter = 13;
    const ALPHABET_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const alphabetLength = ALPHABET_ARRAY.length;
    const normalizedData = this.removePolishLetters(inputValue);
    const decryptionValue = normalizedData.map(char => {
      const indexInAlphabet = ALPHABET_ARRAY.indexOf(char);
      if (indexInAlphabet < offsetLetter) {
        return ALPHABET_ARRAY[indexInAlphabet + alphabetLength + offsetLetter];
      }
      return ALPHABET_ARRAY[indexInAlphabet - offsetLetter];
    });

    const newDecryptionObject = {
      id: this.getnewIdDecryptionList(),
      content: decryptionValue.join(''),
      icon: 'icon'
    };

    this.encryptionItemList.push(newDecryptionObject);

    return newDecryptionObject;
  }

  getnewIdDecryptionList(): number {
    return this.encryptionItemList.length + 1;
  }

  getEncryptionList(): IItemResult[] {
    return this.encryptionItemList;
  }
}

// nopq
