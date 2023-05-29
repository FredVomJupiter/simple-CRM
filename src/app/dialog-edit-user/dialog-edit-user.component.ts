import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {

  userId!: string;
  user!: User;
  loading = false;

  constructor(private dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore) { }

  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  saveUser() {
    const docInstance = doc(this.firestore, 'users', this.userId); // creates a reference to the document in the database.
    this.loading = true;
    const updateUser = {
      company: this.user.company,
      email: this.user.email,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      telephone: this.user.telephone
    };

    updateDoc(docInstance, updateUser).then(() => {
      this.loading = false;
      this.dialogRef.close();
    }
    );
  }
}
