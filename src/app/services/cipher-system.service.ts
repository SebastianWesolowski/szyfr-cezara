import { Injectable } from '@angular/core';
import { InputSequenceList } from './../mocks/mock-input-sequence-list';
import { IItemSequence } from '../models/i-item-sequence';

@Injectable({
  providedIn: 'root'
})
export class CipherSystemService {
  private sequenceItemList: IItemSequence[] = InputSequenceList;

  getSequenceList(): IItemSequence[] {
    return this.sequenceItemList;
  }

  constructor() {}
}
