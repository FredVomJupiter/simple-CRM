import { Component } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  userId!: string;
  users: any;


  constructor(private route: ActivatedRoute, private firestore: Firestore) { }


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
          this.users = user;
        }
      }
    });
  }

}
