import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * This service is used to pass a message from the user-details component to the user-component
 * after a successful deletion of a user.
 */
export class DeleteMessageService {

  private  message = new Subject<string>();

  message$ = this.message.asObservable();

  constructor() {
  }


  setMessage(message: string) {
    this.message.next(message);
  }


  getMessage() {
    return this.message;
  }
}
