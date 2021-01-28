import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser;

  constructor(private auth: AngularFireAuth){}

  login(): void{
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (result) => {
        this.user = result.user;
      }
    ).catch((error) => {
      console.log(error.code);
    });
  }

  logout(): void {
    this.auth.signOut().then(() => {
      this.user = null;
    }).catch((error) => {
      console.log(error.message);
    });
  }
}

