import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginData } from '../interfaces/login-data.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(
    private auth: AngularFireAuth,
  ) {}

  login({email, password}: LoginData) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register({email, password}: LoginData){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  setIsAuthenticatedTrue() { 
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
    return this.auth.signOut();
  }
}
