import { Subscription } from 'rxjs/internal/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IItemMenu } from 'src/app/models/i-item-menu';
import { MenuItemService } from 'src/app/services/menu-item.service';

@Component({
  selector: 'menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit, OnDestroy {
  public activeMenuItem: IItemMenu;
  public MenuItemList: IItemMenu[] = this._menuItemService.getMenuList();
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
      if (oneSubscription) {
        oneSubscription.unsubscribe();
      }
    });
  }
}
