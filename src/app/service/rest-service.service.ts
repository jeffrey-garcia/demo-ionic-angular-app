import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay, tap  } from 'rxjs/operators';

import { Model } from '../model/model';
import { environment } from '../../environments/environment';

export enum STATUS {
  LOGIN_COMPLETED = "LOGIN_COMPLETED",
  LOGOUT_COMPLETED = "LOGOUT_COMPLETED",
  GET_DATA_COMPLETED = "GET_DATA_COMPLETED"
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private remoteHost:string = environment.SWAGGER_API_BASE_PATH;
  
  private items:Model[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

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

  public createData(item:Model) {
    return this.http.post<any>(this.remoteHost + '/order/update', item, this.httpOptions).pipe(
      tap(
        (response) => {
          this.items.push(response);
        },
        (error) => {
          console.log(error);
        }
      )
    );
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

  public fetchData() {
    return this.http.get<any>(this.remoteHost + `/orders`, this.httpOptions);
  }

  public fetchDataStub():Observable<Model[]> {
    return of(this.items.reverse()).pipe(delay(1000));
  }

  public deleteData(item:Model):Observable<Model> {
    return this.http.delete<any>(this.remoteHost + `/order/delete/${item.orderid}`, this.httpOptions).pipe(
      tap(
        (response) => {
          this.items.splice(this.items.indexOf(item), 1);
          console.log(`@@@ ${JSON.stringify(this.items)}`);
        }
      )
    );
  }

  public deleteDataStub(item:Model):Observable<Model> {
    this.items.splice(this.items.indexOf(item), 1);
    return of(item).pipe(delay(1000));
  }

  public searchData(orderid:string):Observable<Model> {
    return this.http.get<any>(this.remoteHost + `/order/info/${orderid}`, this.httpOptions).pipe(
      tap(
        (response) => {
          this.items = [];
          this.items.push(response);
        },
        (error) => {
          console.log(error);
        }
      )
    );
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
