import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { UpdateUserComponent } from '../components/update-user.component';
import { Store } from '@ngrx/store';
import { getUserLoaded, getUserLoading, RootReducerState } from '../reducers';
import {
  UserListRequestAction,
  UserListSuccessAction,
} from '../actions/user.action';
import { getUsers } from '../reducers';
import { combineLatest, Observable } from 'rxjs';
import { RepositoryService } from '../services/repository.service';

// reducer -> it contain a state (global state)
// it will take an action -> it will return a new state

// action -> it will contain a payload and a type

// Dependency Injection Principle
// you should not depend on something directly
// component -> repo -> apiService -> http Service -> http client

@Component({
  selector: `app-user`,
  template: `
    <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="30px">
      <app-user-list
        *ngIf="!this.loading && !this.error"
        [users]="users"
      ></app-user-list>
      <mat-spinner *ngIf="this.loading"></mat-spinner>
      <app-error (reload)="tryAgain()" *ngIf="!loading && !error"></app-error>
      <button *ngIf="!loading && !error" mat-raised-button color="accent">
        Add User
      </button>
    </div>
  `,
})
export class UserComponent implements OnInit, OnDestroy {
  users: User[] = [];
  loading = false;
  error = false;
  isAvail = true;

  constructor(
    private matDialog: MatDialog,
    private apiServiceCall: ApiService,
    private dialog: MatDialog,
    private repositoryService: RepositoryService
  ) {}

  ngOnDestroy(): void {
    this.isAvail = false;
  }

  addUser(): void {
    this.dialog.open(UpdateUserComponent, { width: '300px' });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const { getAllUsers } = this.repositoryService.getUserList();
    getAllUsers.subscribe((users: User[]) => (this.users = users));
  }

  tryAgain(): void {
    this.fetchData();
  }
}
