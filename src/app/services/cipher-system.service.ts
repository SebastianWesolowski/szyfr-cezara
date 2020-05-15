import { Injectable } from '@angular/core';
import { InputSequenceList } from './../mocks/mock-input-sentence-list';
import { IItemSentence, TypeCipherEnum } from '../models/i-item-sentence';

@Injectable({
  providedIn: 'root'
})
export class CipherSystemService {
  private sequenceItemList: IItemSentence[] = InputSequenceList;
  private encryptionList: IItemSentence[] = [];
  private decryptionList: IItemSentence[] = [];

  constructor() {}

  getSequenceList(): IItemSentence[] {
    return this.sequenceItemList;
  }

  normalize(str) {
    const map = {
      a: 'á|à|ã|â|ą',
      c: 'ç|ć',
      e: 'é|è|ê|ę',
      i: 'í|ì|î',
      l: 'ł',
      n: 'ñ|ń',
      o: 'ó|ò|ô|õ',
      s: 'ś',
      u: 'ú|ù|û|ü',
      z: 'ź|ż',
      A: 'À|Á',
      C: 'Ç|Ć',
      E: 'É|È|Ê|Ę',
      I: 'Í|Ì|Î',
      L: 'Ł',
      N: 'Ñ|Ń',
      O: 'Ó|Ò|Ô|Õ',
      S: 'Ś',
      U: 'Ú|Ù|Û|Ü',
      Z: 'Ź|Ż'
    };

    for (const pattern of Object.keys(map)) {
      str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    }

    return str;
  }

  newCipherItem(type: TypeCipherEnum, valueInput): IItemSentence[] {
    let valueInputArray = valueInput.split(' ');

    const SETTING = {
      offsetLetter: 13,
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      alphabetArray: 'abcdefghijklmnopqrstuvwxyz'.split(''),
      alphabetLength: 'abcdefghijklmnopqrstuvwxyz'.split('').length,
      type
    };

    valueInputArray = valueInputArray.map(sentence => {
      sentence = this.normalize(sentence);
      return this.CipherSystem(sentence.split(''), SETTING).join('');
    });

    console.log(valueInputArray.join(' '));
    return this.sequenceItemList;
  }

  isNumeric(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  CipherSystem(oneWord, SETTING) {
    const cipherOneWord = oneWord.map(char => {
      if (typeof char === 'number' || this.isNumeric(char)) {
        return char;
      }
      let charIsUpperCase = false;

      if (char === char.toUpperCase()) {
        charIsUpperCase = true;
        char = char.toLowerCase();
      }

      if (SETTING.alphabetArray.indexOf(char) !== -1) {
        const indexInAlphabet = SETTING.alphabetArray.indexOf(char);
        if (SETTING.type === TypeCipherEnum.decryptionnShow) {
          if (indexInAlphabet < SETTING.offsetLetter) {
            if (charIsUpperCase) {
              return SETTING.alphabetArray[
                indexInAlphabet + SETTING.offsetLetter
              ].toUpperCase();
            }
            return SETTING.alphabetArray[
              indexInAlphabet + SETTING.offsetLetter
            ];
          }
          if (charIsUpperCase) {
            return SETTING.alphabetArray[
              indexInAlphabet - SETTING.alphabetLength + SETTING.offsetLetter
            ].toUpperCase();
          }
          return SETTING.alphabetArray[
            indexInAlphabet - SETTING.alphabetLength + SETTING.offsetLetter
          ];
        }

        if (SETTING.type === TypeCipherEnum.encryptionShow) {
          if (indexInAlphabet < SETTING.offsetLetter) {
            if (charIsUpperCase) {
              return SETTING.alphabetArray[
                indexInAlphabet + SETTING.alphabetLength - SETTING.offsetLetter
              ].toUpperCase();
            }
            return SETTING.alphabetArray[
              indexInAlphabet + SETTING.alphabetLength - SETTING.offsetLetter
            ];
          }
          if (charIsUpperCase) {
            return SETTING.alphabetArray[
              indexInAlphabet - SETTING.offsetLetter
            ].toUpperCase();
          }
          return SETTING.alphabetArray[indexInAlphabet - SETTING.offsetLetter];
        }
      }
      return char;
    });

    return cipherOneWord;
  }

  getDecryptionList(): IItemSentence[] {
    this.decryptionList = this.sequenceItemList.map(Sequence => {
      return Sequence.decryptionnShow ? Sequence : null;
    });
    return this.decryptionList;
  }

  getEncryptionList(): IItemSentence[] {
    this.encryptionList = this.sequenceItemList.map(Sequence => {
      return Sequence.encryptionShow ? Sequence : null;
    });
    return this.encryptionList;
  }
}
