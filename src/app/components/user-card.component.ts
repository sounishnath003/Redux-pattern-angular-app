import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {UpdateUserComponent} from './update-user.component';
import {RepositoryService} from '../services/repository.service';

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
      <mat-card-title>{{ this.user.name }} </mat-card-title>
      <mat-card-content>{{ this.user.email }}</mat-card-content>
      <button (click)="delete(this.user.id)" mat-raised-button color="warn">Delete</button>
      <button (click)="update()" mat-raised-button color="primary">
        Update
      </button>
    </mat-card>
  `
})
export class UserCardComponent implements OnInit {
  @Input() user: User;

  constructor(private router: Router, private dialog: MatDialog, private repositoryService: RepositoryService) {
  }

  ngOnInit(): void {
  }

  delete(id: number): void {
    this.repositoryService.deleteUserById(id);
  }

  update(): void {
    this.dialog.open(UpdateUserComponent, {width: `300px`, data: this.user});
  }

  open(): void {
    this.router.navigate(['user', this.user.id]);
  }
}
