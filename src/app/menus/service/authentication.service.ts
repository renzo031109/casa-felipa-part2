import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {

  private user: Observable<firebase.User>;

  constructor(private afauth: AngularFireAuth) {
    this.user = afauth.authState;
   }

  login(user: User) {
    return this.afauth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.afauth.auth.signOut();
  }

  authUser() {
    return this.user;
  }

}
