import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {UpdateUserComponent} from './update-user.component';

@Component({
  selector: `app-user-card`,
  template: `
    <mat-card
      (click)="open()"
      style="margin-bottom: 30px;"
      fxLayout="column"
      fxLayoutGap="30px"
      fxLayoutAlign="start stretch"
    >
      <mat-card-title>{{ this.user.first_name }} {{ user.last_name }} </mat-card-title>
      <mat-card-content>{{ this.user.email }}</mat-card-content>
      <button (click)="delete()" mat-raised-button color="warn">Delete</button>
      <button (click)="update()" mat-raised-button color="primary">
        Update
      </button>
    </mat-card>
  `
})
export class UserCardComponent implements OnInit {
  @Input() user: User;

  constructor(private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  delete(): void {
  }

  update(): void {
    this.dialog.open(UpdateUserComponent, {width: `300px`, data: this.user});
  }

  open(): void {
    this.router.navigate(['user', this.user.id]);
  }
}
