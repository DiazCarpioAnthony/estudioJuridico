import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  API_URI2 = "http://localhost:3000/api";
  API_URI = "https://lawyerpage.herokuapp.com/api";

  
  constructor(private http: HttpClient) { }

  getCategoriasAll() { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.API_URI}/categorias`, { headers: getHeaders } );

  }

  getOne(id: Number) {
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.API_URI}/categorias/${id}`, { headers: getHeaders });

  }

  createCategoria(categoria: Categoria) { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.API_URI}/categorias/register`, categoria, { headers: getHeaders } );
  }

  updateCategoria(id: any, updateCategoria: Categoria): Observable<Categoria> { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(`${this.API_URI}/categorias/${id}`, updateCategoria, { headers: getHeaders } );
  }

  deleteCategoria(id: string) { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete(`${this.API_URI}/categorias/${id}`, { headers: getHeaders } );
  }

}


  