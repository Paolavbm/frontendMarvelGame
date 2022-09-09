import { Injectable } from '@angular/core';
import {Auth, signInWithPopup, GoogleAuthProvider, UserCredential} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }


  loginWithGoogle():Promise<UserCredential>{
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  logOut() {
    return this.auth.signOut().then(() => {
    });
  }
}
