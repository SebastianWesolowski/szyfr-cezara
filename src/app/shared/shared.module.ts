import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponentComponent } from './components/title-component/title-component.component';
import { ContentComponentComponent } from './components/content-component/content-component.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    TitleComponentComponent,
    ContentComponentComponent,
    ButtonComponentComponent,
    ContentContainerComponent
  ],
  exports: [
    TitleComponentComponent,
    ContentComponentComponent,
    ButtonComponentComponent,
    ContentContainerComponent
  ]
})
export class SharedModule {}
