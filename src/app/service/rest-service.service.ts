import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay, tap  } from 'rxjs/operators';

export enum STATUS {
  LOGIN_COMPLETED = "LOGIN_COMPLETED",
  LOGOUT_COMPLETED = "LOGOUT_COMPLETED",
  GET_DATA_COMPLETED = "GET_DATA_COMPLETED"
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  constructor(
    private http: HttpClient
  ) { 
    console.log(`creating: ${this.constructor.name}`)
  }

  loginStub(): Observable<any> {
    // simulate success response
    return of(
      {
        status: STATUS.LOGIN_COMPLETED
      }
    ).pipe(delay(2500)) 
  }

}
