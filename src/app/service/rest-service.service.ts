import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay, tap  } from 'rxjs/operators';
import { Model } from '../model/model';

export enum STATUS {
  LOGIN_COMPLETED = "LOGIN_COMPLETED",
  LOGOUT_COMPLETED = "LOGOUT_COMPLETED",
  GET_DATA_COMPLETED = "GET_DATA_COMPLETED"
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  private items:Model[] = [];

  constructor(
    private http: HttpClient
  ) { 
    console.log(`creating: ${this.constructor.name}`)
  }

  public loginStub(): Observable<any> {
    // simulate success response
    return of(
      {
        status: STATUS.LOGIN_COMPLETED
      }
    ).pipe(delay(500));
  }

  public createDataStub(item:Model):Observable<Model> {
    let pos = this.items.findIndex(
      (_item) => {
        return _item.orderid == item.orderid;
      }
    );
    if (pos >= 0) {
      this.items[pos] = item;
    } else {
      this.items.push(item);
    }
    return of(item).pipe(delay(1000));
  }

  public fetchDataStub():Observable<Model[]> {
    return of(this.items.reverse()).pipe(delay(1000));
  }

  public deleteDataStub(item:Model):Observable<Model> {
    this.items.splice(this.items.indexOf(item), 1);
    return of(item).pipe(delay(1000));
  }

  public searchDataStub(orderid:string):Observable<Model> {
    let pos = this.items.findIndex(
      (_item) => {
        return _item.orderid == orderid;
      }
    );
    if (pos >= 0) {
      return of(this.items[pos]).pipe(delay(1000));
    } else {
      return of(null).pipe(delay(50));
    }
  }

}
