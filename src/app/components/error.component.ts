import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: `app-error`,
  template: `
    <div fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="20px">
      <mat-icon>error_outline</mat-icon>
      <span>{{ errorTitle || 'Error Occured!' }}</span>
      <button (click)="reload.next()" mat-raised-button color="warn">
        Try Again
      </button>
    </div>
  `,
})
export class ErrorComponent implements OnInit {
  @Output() reload: EventEmitter<any> = new EventEmitter<any>();
  @Input() errorTitle;

  constructor() {}

  ngOnInit(): void {}
}
