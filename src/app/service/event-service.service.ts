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

  private fetchDataStarted = new Subject<void>();
  public fetchDataStartedEvent$ = this.fetchDataStarted.asObservable();

  publishFetchDataStartedEvent() {
    this.fetchDataStarted.next();
  }

  private fetchDataCompleted = new Subject<Model[]>();
  public fetchDataCompletedEvent$ = this.fetchDataCompleted.asObservable();

  publishFetchDataCompletedEvent(items:Model[]) {
    this.fetchDataCompleted.next(items);
  }

}
