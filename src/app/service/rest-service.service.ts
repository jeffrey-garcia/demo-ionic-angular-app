import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay, tap, map  } from 'rxjs/operators';

import { Model } from '../model/model';
import { environment } from '../../environments/environment';

export enum STATUS {
  LOGIN_COMPLETED = "LOGIN_COMPLETED",
  LOGOUT_COMPLETED = "LOGOUT_COMPLETED",
  GET_DATA_COMPLETED = "GET_DATA_COMPLETED"
}

export const DEBUG:string = `DEBUG`;

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
    ).pipe(delay(100));
  }

  public createData(item:Model):Observable<Model[]> {
    if (environment.envName == DEBUG) {
      return this.createDataStub(item);
    }
    return this.http.post<any>(this.remoteHost + '/order/update', item, this.httpOptions).pipe(
      tap(
        (response) => {
          console.log(`response: ${JSON.stringify(response)}`);
          map(
            (item:Model) => {
              this.items.push(response);
            }
          )
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }

  public createAutoId = (function() {
    var autoId = 0
    return (function() {
      autoId += 1;
      return autoId;
    });
  })();

  private createDataStub(item:Model):Observable<Model[]> {
    let pos = this.items.findIndex(
      (_item) => {
        return _item.orderid == item.orderid;
      }
    );
    if (pos >= 0) {
      this.items[pos] = item;
    } else {
      item.orderid = `${this.createAutoId()}`;
      item.orderdate = new Date().toISOString();
      item.status = `PENDING`;
      this.items.push(item);
    }
    return of(this.items).pipe(delay(100));
  }

  public fetchData():Observable<Model[]> {
    if (environment.envName == DEBUG) {
      return this.fetchDataStub();
    }
    return this.http.get<any>(this.remoteHost + `/orders`, this.httpOptions);
  }

  private fetchDataStub():Observable<Model[]> {
    console.log(`response: ${JSON.stringify(this.items)}`);
    return of(Object.assign([], this.items)).pipe(delay(100));
  }

  public deleteData(item:Model):Observable<Model[]> {
    if (environment.envName == DEBUG) {
      return this.deleteDataStub(item);
    }
    
    return this.http.delete<any>(this.remoteHost + `/order/delete/${item.orderid}`, this.httpOptions).pipe(
      tap(
        (response) => {
          console.log(`response: ${JSON.stringify(response)}`);
          map((item:Model) => {
            console.log(`remaining items: ${JSON.stringify(response)}`);
            return this.items.splice(this.items.indexOf(item), 1);
          })
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }

  private deleteDataStub(item:Model):Observable<Model[]> {
    console.log(`response: ${JSON.stringify(item)}`);
    this.items.splice(this.items.indexOf(item), 1);
    console.log(`remaining items: ${JSON.stringify(this.items)}`);
    return of(Object.assign([], this.items)).pipe(delay(100));
  }

  public searchData(orderid:string):Observable<Model> {
    if (environment.envName == DEBUG) {
      return this.searchDataStub(orderid);
    }
    return this.http.get<any>(this.remoteHost + `/order/info/${orderid}`, this.httpOptions).pipe(
      tap(
        (response) => {
          console.log(`response: ${JSON.stringify(response)}`);
          map((item:Model) => {
            return item;
          })
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }

  private searchDataStub(orderid:string):Observable<Model> {
    let pos = this.items.findIndex(
      (_item) => {
        return _item.orderid == orderid;
      }
    );
    if (pos >= 0) {
      return of(this.items[pos]).pipe(delay(100));
    } else {
      return of(null).pipe(delay(50));
    }
  }

}
