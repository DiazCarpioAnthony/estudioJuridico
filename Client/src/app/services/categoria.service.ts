import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  API_URI2 = "http://localhost:3000/api";
  API_URI = "https://lawyerpage.herokuapp.com/api";;

  
  constructor(private http: HttpClient) { }

  getCategoriasAll() { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.API_URI}/categorias`, { headers: getHeaders } );

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


  