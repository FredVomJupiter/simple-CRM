import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {

  user!: User;
  loading = false;

  constructor(private dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  saveUser() {

  }
}
