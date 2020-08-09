import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponentComponent } from './components/title-component/title-component.component';
import { ContentComponentComponent } from './components/content-component/content-component.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { ArrowIconComponent } from './components/arrow-icon/arrow-icon.component';
import { InputComponentComponent } from './components/input-component/input-component.component';
import { ResultOneRowComponent } from './components/result-one-row/result-one-row.component';
import { ResultRowListComponent } from './components/result-row-list/result-row-list.component';
import { IconComponentComponent } from './components/result-one-row/icon-component.component';
import { ProjectCounterComponent } from './components/project-counter/project-counter.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    TitleComponentComponent,
    ContentComponentComponent,
    ButtonComponentComponent,
    ContentContainerComponent,
    ArrowIconComponent,
    InputComponentComponent,
    ResultOneRowComponent,
    ResultRowListComponent,
    IconComponentComponent,
    ProjectCounterComponent
  ],
  exports: [
    ArrowIconComponent,
    TitleComponentComponent,
    ContentComponentComponent,
    ButtonComponentComponent,
    ContentContainerComponent,
    ArrowIconComponent,
    ResultOneRowComponent,
    InputComponentComponent,
    ResultRowListComponent,
    IconComponentComponent
  ]
})
export class SharedModule {}
