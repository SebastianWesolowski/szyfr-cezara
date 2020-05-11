import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponentComponent } from './components/title-component/title-component.component';
import { ContentComponentComponent } from './components/content-component/content-component.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [TitleComponentComponent, ContentComponentComponent],
  exports: [TitleComponentComponent]
})
export class SharedModule {}
