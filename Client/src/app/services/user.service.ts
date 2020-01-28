import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  API_URI = "http://localhost:3000/api";
  API_URI2 = "https://lawyerpage.herokuapp.com/api";

  private isUserLoggedIn;
  public usserLogged: Usuario;

  constructor(private http: HttpClient) {

    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user: Usuario) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user.email));
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  closeUserSession() {
    localStorage.removeItem('currentUser');
    localStorage.clear();
  }

  postLogin(user: Usuario) { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.API_URI}/user/login`, user, { headers: getHeaders } );

  }

  postRegister(user: Usuario) { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.API_URI}/user/register`, user, { headers: getHeaders } );
  }

  updateUser(id: string, userUpdate: Usuario): Observable<Usuario> { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(`${this.API_URI}/user/${id}`, userUpdate, { headers: getHeaders } );
  }

  deleteUser(id: string) { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete(`${this.API_URI}/user/${id}`, { headers: getHeaders } );
  }

}
