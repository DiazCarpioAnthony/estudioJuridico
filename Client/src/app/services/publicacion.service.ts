import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Publicacion } from '../models/publicacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  API_URI = "http://localhost:3000/api";
  API_URI2 = "https://lawyerpage.herokuapp.com/api";


  constructor(private http: HttpClient) { }

  getPublicacionesAll() { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.API_URI}/publicaciones`, { headers: getHeaders });

  }

  createPublicacion(publicacion: Publicacion) { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.API_URI}/publicaciones/create`, publicacion, { headers: getHeaders });

  }

  getLastPublicacion() {
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.API_URI}/publicaciones/last`, { headers: getHeaders });

  }

  addKeyword(id_publicacion: any, keyword: any ) { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.API_URI}/publicaciones/${id_publicacion}`, keyword, { headers: getHeaders });

  }
}


