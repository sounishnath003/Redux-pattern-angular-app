import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: `app-user-list`,
  template: `
    <div fxLayout="row wrap" fxLayoutAlign="center start" fxLayoutGap="30px">
      <input [(ngModel)]="searchTerm" placeholder="search by name" style="padding: 8px; margin-top: 10px" />
      <app-user-card
        [user]="user"
        *ngFor="let user of users | userFilter: searchTerm"
      ></app-user-card>
    </div>
  `,
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  searchTerm: string;

  ngOnInit(): void {}
}
