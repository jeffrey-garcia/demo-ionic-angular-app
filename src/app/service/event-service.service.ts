import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private loginCompleted = new Subject();
  public loginCompletedEvent$ = this.loginCompleted.asObservable();

  publishLoginCompletedEvent(){
    this.loginCompleted.next();
  }
  
  constructor() { 
    console.log(`creating: ${this.constructor.name}`);
  }
}
