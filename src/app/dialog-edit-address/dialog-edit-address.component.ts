import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {

  user!: User;
  loading = false;
  userId!: string;

  constructor(private dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: Firestore) { }


  ngOnInit() {

  }

  /**
   * crUd - Update
   */
  saveAddress() {
    const docInstance = doc(this.firestore, 'users', this.userId); // creates a reference to the document in the database.
    this.loading = true;
    const updateAddress = {
      address: this.user.address,
      city: this.user.city,
      state: this.user.state,
      postalCode: this.user.postalCode
    };

    updateDoc(docInstance, updateAddress).then(() => {
      this.loading = false;
      this.dialogRef.close();
    }
    );
  }
}
