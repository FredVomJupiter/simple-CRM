import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
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
