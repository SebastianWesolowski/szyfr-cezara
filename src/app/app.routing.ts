import { Routes } from '@angular/router';
import { MainPageComponent } from './components/mainPageComponent/mainPageComponent.component';
export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: []
  }
];
