import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {

  user: User = new User();

  constructor() { }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  saveUser() {
    console.log(this.user);
  }
}
