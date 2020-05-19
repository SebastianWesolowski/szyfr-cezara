import { IItemSentence } from '../models/i-item-sentence';
export const InputSequenceList: IItemSentence[] = [
  {
    id: 1,
    encryption: 'Zaszyfrowana tresc',
    decryption: '',
    iconId: 2,
    encryptionShow: true,
    decryptionnShow: false
  },
  {
    id: 2,
    encryption: '',
    decryption: 'Odszyfrowana tresc',
    iconId: 2,
    encryptionShow: false,
    decryptionnShow: true
  }
];
