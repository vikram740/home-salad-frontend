import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment, homesalads } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  http=inject(HttpClient)
  setToken(token: string) {
    if (typeof localStorage !== 'undefined') {
      return localStorage.setItem('token', token);
    }
    else {
      return null;
    }
  }

  getToken() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('token');
    }
    else {
      return null;
    }
  }

  // setting user role in the localStorage
  setRole(role: string) {
    if (typeof localStorage !== 'undefined') {
      return localStorage.setItem('role', role);
    }
    else {
      return null;
    }
  }

  // fetching the user role from the localStorage
  getRole(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('role');
    }
    else {
      return null;
    }
  }
  createAccout(body:any) {
    return this.http.post(environment.baseUrl + homesalads.createAccount , body)
  }
  login(body:any) {
    return this.http.post(environment.baseUrl + homesalads.login , body)

  }
  verify(body:any) {
    return this.http.post(environment.baseUrl + homesalads.verify, body)

  }
}

