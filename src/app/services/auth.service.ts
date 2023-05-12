import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginData } from '../interfaces/login-data.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
  ) {}

  login({email, password}: LoginData) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register({email, password}: LoginData){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  isAuthenticated(): boolean{
    if (this.auth.currentUser === null || this.auth.currentUser === undefined) {
      console.log("No está autenticado");
      return false;
    } else {
      console.log("Está autenticado");
      return true;
    }
  }

  logout() {
    return this.auth.signOut();
  }
}
