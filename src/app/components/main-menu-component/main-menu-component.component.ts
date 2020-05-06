import { Subscription } from 'rxjs/internal/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IItemMenu } from 'src/app/models/i-item-menu';
import { MenuItemService } from 'src/app/services/menu-item.service';

@Component({
  selector: 'main-menu-component',
  templateUrl: './main-menu-component.component.html',
  styleUrls: ['./main-menu-component.component.scss']
})
export class MainMenuComponentComponent implements OnInit, OnDestroy {
  public MenuItemList: IItemMenu[] = this._menuItemService.getMenuList();
  public activeMenuItem: IItemMenu;
  private _subscriptions: Subscription[] = [];

  constructor(private _menuItemService: MenuItemService) {}

  ngOnInit(): void {
    this._subscriptions.push(
      this._menuItemService
        .getActiveMenu()
        .subscribe(data => (this.activeMenuItem = data))
    );
  }

  selectMenuItem(selectedMenuItem) {
    this._menuItemService.setActiveMenu(selectedMenuItem);
  }

  ngOnDestroy() {
    this._subscriptions.forEach(oneSubscription => {
      oneSubscription.unsubscribe();
    });
  }
}
