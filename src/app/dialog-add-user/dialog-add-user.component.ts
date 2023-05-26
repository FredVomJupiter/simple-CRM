import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../models/user.class';
// WICHTIG! es muss von @angular/fire/firestore importiert werden, sonst Nullinjectorfehler
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {

  user!: User;
  

  constructor(private firestore: Firestore) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  saveUser() {
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, this.user.toJSON()).then(() => {
      console.log('User added');
    }).catch((error) => {
      console.log(error);
    });
  }
}
