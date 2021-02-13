import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  template: `
    <form
      [formGroup]="userForm"
      (ngSubmit)="this.userForm.valid && this.addOrUpdateUser()"
    >
      <div fxLayout="column" fxLayoutAlign="center stretch">
        <mat-form-field>
          <input formControlName="email" matInput placeholder="email" />
          <mat-error>Valid email is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="name" matInput placeholder="username" />
          <mat-error>Name is Required</mat-error>
        </mat-form-field>
        <button mat-raised-button color="primary" type="submit">
          {{ this.data ? 'Update' : 'Add' }}
        </button>
      </div>
    </form>
  `,
  styles: [``],
})
export class UpdateUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(
        this.data ? `${this.data.first_name} ${this.data.last_name}` : null,
        [Validators.required]
      ),
      email: new FormControl(this.data ? this.data.email : null, [
        Validators.required,
      ]),
    });
  }

  addOrUpdateUser(): void {
    if (this.data) {
      this.updateUser();
    } else {
      this.addUser();
    }
  }

  updateUser(): void {}

  addUser(): void {}
}
