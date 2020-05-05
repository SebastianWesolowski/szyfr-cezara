import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page-component/main-page-component.component';
import { SharedModule } from './shared/shared.module';
import { InformationPageComponent } from './components/information-page/information-page.component';
import { DecryptionPageComponent } from './components/decryption-page/decryption-page.component';
import { EncryptionPageComponent } from './components/encryption-page/encryption-page.component';
import { MainMenuComponentComponent } from './components/main-menu-component/main-menu-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InformationPageComponent,
    DecryptionPageComponent,
    EncryptionPageComponent,
    MainMenuComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
