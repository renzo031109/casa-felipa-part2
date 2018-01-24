import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { Menus } from './menus';

@Injectable()
export class MenuStoreService {

  baseUrl = 'https://my-json-server.typicode.com/renzo031109/sample-only/menus/';
  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getMenu(id: number): Observable<Menus> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get(url)
      .map(response => response.json() as Menus);
  }

  getMenus(): Observable<Menus[]> {
    const url = `${this.baseUrl}`;
    return this.http.get(url)
      // .delay(1000)
      .map(response => response.json() as Menus[]);
  }

  addMenu(Menu: Menus) {
    const url = `${this.baseUrl}`;
    const body = JSON.stringify(Menu);
    return this.http.post(url, body, {headers: this.headers})
      .map(response => response.json());
  }

  deleteMenu(id: number) {
    const url = `${this.baseUrl}${id}`;
    return this.http.delete(url, {headers: this.headers})
      .map(response => response.json());
  }
}
