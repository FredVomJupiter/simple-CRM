import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../models/user.class';
// WICHTIG! es muss von @angular/fire/firestore importiert werden, sonst Nullinjectorfehler
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {

  user!: User;
  loading = false;

  constructor(private firestore: Firestore, private dialogRef: MatDialogRef<DialogAddUserComponent>) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  saveUser() {
    this.loading = true;
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, this.user.toJSON()).then(() => {
      this.loading = false;
      this.dialogRef.close();
    }).catch((error) => {
      console.log(error);
    });
  }
}
