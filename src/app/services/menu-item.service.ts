import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItemList } from './../mocks/mock-menu-item-list';
import { Injectable } from '@angular/core';
import { IItemMenu } from '../models/i-item-menu';
@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  private _MenuItemList: IItemMenu[] = MenuItemList;
  private _selectMenuItem: BehaviorSubject<IItemMenu> = new BehaviorSubject<
    IItemMenu
  >(this._MenuItemList[0]);
  private _selectMenuItemObservable = this._selectMenuItem.asObservable();

  constructor() {}

  setActiveMenu(item: IItemMenu): void {
    this._selectMenuItem.next(item);
  }

  getActiveMenu(): Observable<IItemMenu> {
    return this._selectMenuItemObservable;
  }

  getMenuList(): IItemMenu[] {
    return this._MenuItemList;
  }
}
