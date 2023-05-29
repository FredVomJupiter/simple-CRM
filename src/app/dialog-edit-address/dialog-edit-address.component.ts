import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {

  user!: User;
  loading = false;

  constructor(private dialogRef: MatDialogRef<DialogEditAddressComponent>) { }


  saveAddress() {

  }
}
