import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routesModule } from './app.routing';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page-component/main-page-component.component';
import { SharedModule } from './shared/shared.module';
import { InformationPageComponent } from './components/information-page/information-page.component';
import { DecryptionPageComponent } from './components/decryption-page/decryption-page.component';
import { EncryptionPageComponent } from './components/encryption-page/encryption-page.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { MenuItemService } from './services/menu-item.service';
import { CipherSystemService } from './services/cipher-system.service';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InformationPageComponent,
    DecryptionPageComponent,
    EncryptionPageComponent,
    MenuComponentComponent
  ],
  imports: [BrowserModule, FormsModule, SharedModule, routesModule],
  providers: [MenuItemService, CipherSystemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
