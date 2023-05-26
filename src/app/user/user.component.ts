import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';
// WICHTIG! es muss von @angular/fire/firestore importiert werden, sonst Nullinjectorfehler
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user: User = new User();

  constructor(private dialog: MatDialog, private firestore: Firestore) {
    
  }

  ngOnInit(): void {
    this.loadUser();
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  loadUser() {
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance).subscribe((users) => {
      console.log(users);
    });
  }
}
