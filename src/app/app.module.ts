import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/mainPageComponent/mainPageComponent.component';
import { SharedModule } from './shared/shared.module';
import { InformationPageComponent } from './components/information-page/information-page.component';
import { DecryptionPageComponent } from './components/decryption-page/decryption-page.component';
import { EncryptionPageComponent } from './components/encryption-page/encryption-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InformationPageComponent,
    DecryptionPageComponent,
    EncryptionPageComponent
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
