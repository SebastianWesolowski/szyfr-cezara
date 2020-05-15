import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'icon-component',
  template: ` <div [class]="this.classIcon" class="icon-component"></div> `,
  styles: [
    `
      .icon-component {
        line-height: 40px;
        font-size: 40px;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class IconComponentComponent implements OnInit {
  constructor() {}

  @Input()
  set idIcon(idIcon: number) {
    this.classIcon = `icon-${idIcon}`;
  }

  public classIcon: string;

  ngOnInit(): void {}
}
