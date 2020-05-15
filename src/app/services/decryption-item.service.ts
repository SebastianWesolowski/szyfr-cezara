import { Injectable } from '@angular/core';
import { DecryptionItemList } from './../mocks/mock-decryption-list';
import { IItemResult } from '../models/i-item-result';
@Injectable({
  providedIn: 'root'
})
export class DecryptionItemService {
  private decryptionItemList: IItemResult[] = DecryptionItemList;

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

  // TODO: Capital letter, number, special char, space, Polish Letters
  decryptionNewValue(inputValue) {
    const offsetLetter = 13;
    const ALPHABET_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const alphabetLength = ALPHABET_ARRAY.length;
    const normalizedData = this.removePolishLetters(inputValue);
    const decryptionValue = normalizedData.map(char => {
      const indexInAlphabet = ALPHABET_ARRAY.indexOf(char);
      if (indexInAlphabet < offsetLetter) {
        return ALPHABET_ARRAY[indexInAlphabet + offsetLetter];
      }
      return ALPHABET_ARRAY[indexInAlphabet - alphabetLength + offsetLetter];
    });

    const newDecryptionObject = {
      id: this.getnewIdDecryptionList(),
      content: decryptionValue.join(''),
      iconId: Math.ceil(Math.random() * 14)
    };

    this.decryptionItemList.push(newDecryptionObject);

    return newDecryptionObject;
  }
  getnewIdDecryptionList(): number {
    return this.decryptionItemList.length + 1;
  }

  getDecryptionList(): IItemResult[] {
    return this.decryptionItemList;
  }
}
