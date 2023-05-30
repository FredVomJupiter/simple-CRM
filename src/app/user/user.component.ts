import { AfterViewInit, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
// WICHTIG! es muss von @angular/fire/firestore importiert werden, sonst Nullinjectorfehler
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { DeleteMessageService } from '../delete-message.service';
import { set } from 'firebase/database';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements AfterViewInit {

  users: any;
  message: string = '';

  constructor(private dialog: MatDialog, private firestore: Firestore, private messageService: DeleteMessageService) {

  }


  ngOnInit(): void {
    this.loadUserData();
    this.messageService.message$.subscribe((message) => {
      this.message = message;
    });
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }


  ngAfterViewInit(): void {
    
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }


  loadUserData() {
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance, { idField: 'userId' }).subscribe((users) => {
      this.users = users;
    });
  }
}
