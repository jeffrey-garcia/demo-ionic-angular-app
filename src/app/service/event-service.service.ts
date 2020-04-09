import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Model } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  constructor() { 
    console.log(`creating: ${this.constructor.name}`);
  }

  private loginCompleted = new Subject<void>();
  public loginCompletedEvent$ = this.loginCompleted.asObservable();

  publishLoginCompletedEvent() {
    this.loginCompleted.next();
  }

}
