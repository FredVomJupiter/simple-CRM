import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
// WICHTIG! es muss von @angular/fire/firestore importiert werden, sonst Nullinjectorfehler
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements AfterViewInit {

  users: any;

  constructor(private dialog: MatDialog, private firestore: Firestore) {
    
  }


  ngOnInit(): void {
    this.loadUserData();
  }


  ngAfterViewInit(): void {
    
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }


  loadUserData() {
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance, {idField: 'userId'}).subscribe((users) => {
      this.users = users;
    });
  }
}
