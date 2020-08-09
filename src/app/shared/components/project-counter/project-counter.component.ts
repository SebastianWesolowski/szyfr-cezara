import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-counter',
  templateUrl: './project-counter.component.html',
  styleUrls: ['./project-counter.component.scss']
})
export class ProjectCounterComponent implements OnInit {
  @Input() quantityProject: number;

  constructor() {}

  ngOnInit(): void {}
}
