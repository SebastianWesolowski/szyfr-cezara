import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page-component/main-page-component.component';
import { DecryptionPageComponent } from './components/decryption-page/decryption-page.component';
import { EncryptionPageComponent } from './components/encryption-page/encryption-page.component';
import { InformationPageComponent } from './components/information-page/information-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'informacje',
        pathMatch: 'full'
      },
      {
        path: 'informacje',
        component: InformationPageComponent
      },
      {
        path: 'zaszyfruj',
        component: DecryptionPageComponent
      },
      {
        path: 'odszyfruj',
        component: EncryptionPageComponent
      },
      {
        path: '**',
        component: InformationPageComponent,
        pathMatch: 'full'
      }
    ]
  }
];

export const routesModule = RouterModule.forRoot(routes, {
  enableTracing: false,
  useHash: false
});
