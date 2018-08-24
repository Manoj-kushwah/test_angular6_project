import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {db} from './data-map.service';

const addUser: any = (s: AuthService) => {
  return db.add('authUser', {userId: 100, fName: 'Manoj', lName: 'kushwah', email: 'manoj@gmail.com', password: '123'}).then(value => {
    console.log('add:', value);
    if(value){
      s.user = value;
      s.isAuthorize = true;
    }
  }).catch(reason => {
    console.error('add:', reason);
  });
};
const openDB: any = (s: AuthService) => {
  return db.openDatabase(3, (evt) => {
    console.log(s);
    console.log(evt.currentTarget.result);
    const objectStore = evt.currentTarget.result.createObjectStore(
      'authUser', { keyPath: "id", autoIncrement: true }); // 9109181009 ;

    objectStore.createIndex("userId", "userId", { unique: true });
    objectStore.createIndex("email", "email", { unique: true });
  }).then(value => {
    console.log(value); getByKey(s); s.canActivate();
  }).catch(reason => {
    console.error(reason);
  });
};

const getByKey: any = (s: AuthService) => {
  return db.getByIndex('authUser', 'userId', 100).then(value => {
    console.log(value);
    if(value){
      s.user = value;
      s.isAuthorize = true;
    }
    return value;
  }).catch(reason => {
    console.error(reason);
    return reason;
  });
};

const clear: any = (s: AuthService) => {
  db.clear('authUser').then(value => {
    console.log(value);
    s.user = undefined;
    s.isAuthorize = false;
  }).catch(reason => {
    console.error(reason);
  });
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthorize: boolean = false;
  user: any;
  constructor(private route: Router) { openDB(this); }

  login() {
    addUser(this);
    this.isAuthorize = true;
  }
  logout() {
    clear(this);
  }
  check() {
    return getByKey(this);
  }
  canActivate(activated?: ActivatedRouteSnapshot, state?: RouterStateSnapshot) {
    console.log('activated:', activated);
    console.log('state:', state);

    console.log('db:', db);
    this.check().then(value => {
      if(value){
        this.route.navigate(['dashboard']);
        this.isAuthorize = true;
      }
    }).catch(reason => {
      console.error(reason);
      this.route.navigate(['']);
      this.isAuthorize = false;
    });
    console.log('db:', this.isAuthorize);
    return this.isAuthorize;
  }
}
