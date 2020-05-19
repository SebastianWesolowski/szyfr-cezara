export interface IItemSentence {
  id: number;
  encryption: string;
  decryption: string;
  iconId: number;
  encryptionShow?: boolean;
  decryptionnShow?: boolean;
}

export enum TypeCipherEnum {
  encryptionShow,
  decryptionnShow
}
