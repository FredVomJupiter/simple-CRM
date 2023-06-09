import { Component } from '@angular/core';
import { collectionData, Firestore, collection, doc, deleteDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { User } from '../models/user.class';
import { DeleteMessageService } from '../services/delete-message.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  userId!: string;
  user!: User;
  message: string = '';


  constructor(private route: ActivatedRoute, private firestore: Firestore, private dialog: MatDialog, private messageService: DeleteMessageService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id')!;
    });

    this.loadUserData();
  }

  /**
   * cRud - Read
   */
  loadUserData() {
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance, { idField: 'userId' }).subscribe((users) => {

      for (const user of users) {
        if (user['userId'] === this.userId) {
          this.user = new User(user);
        }
      }
    });
  }

  /**
   * crUd - Update
   */
  editUser() {
    let dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON()); // creates a copy of the user object and injects it into the constructer of User.
    dialog.componentInstance.userId = this.userId; // passes the userId to the dialog.
  }

  /**
   * crUd -Update
   */
  editAddress() {
    let dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  /**
   * cruD - Delete
   */
  deleteUser() {
    const docInstance = doc(this.firestore, 'users', this.userId);
    this.message = 'User deleted: ' + this.user.firstName + ' ' + this.user.lastName;
    deleteDoc(docInstance).then(() => {
      this.messageService.setMessage(this.message);
    }).catch((error) => {
      this.messageService.setMessage('Error deleting user: ' + error);
    }
    );
  }
}
