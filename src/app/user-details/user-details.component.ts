import { Component } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  userId!: string;
  user: any;


  constructor(private route: ActivatedRoute, private firestore: Firestore, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id')!;
    });

    this.loadUserData();
  }


  loadUserData() {
    console.log(this.userId);
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance, {idField: 'userId'}).subscribe((users) => {

      for (const user of users) {
        if (user['userId'] === this.userId) {
          this.user = user;
        }
      }
    });
  }


  editUser() {
    let dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON()); // creates a copy of the user object and injects it into the constructer of User.
  }


  editAddress() {
    let dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
  }
}
