import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page-component/main-page-component.component';
export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: []
  }
];
