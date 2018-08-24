import { Injectable } from '@angular/core';
import {AngularIndexedDB} from './angular2-indexeddb';
import {HttpClient} from '@angular/common/http';
export const db: AngularIndexedDB = new AngularIndexedDB('jdesk9', 2);
@Injectable({
  providedIn: 'root'
})
export class DataMapService {
  userList: Map<number, User> = new Map<number, User>();
  constructor(private http: HttpClient) { }
}
@Injectable({
  providedIn: 'root'
})
export class Database {
  jdesk9: AngularIndexedDB = db;
}
export class User {
  constructor(private fName: string, private lName: string, private userId: number) {

  }
}
