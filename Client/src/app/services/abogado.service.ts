
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Abogado } from '../models/abogado';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AbogadoService {

  API_URI = "http://localhost:3000/api";
  API_URI2 = "https://lawyerpage.herokuapp.com/api";

  
  constructor(private http: HttpClient) { }

  getAbogadosAll() { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.API_URI}/abogados`, { headers: getHeaders } );

  }

  updateUser(id: string, abogadoUpdate: Abogado): Observable<Abogado> { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(`${this.API_URI}/abogados/${id}`, abogadoUpdate, { headers: getHeaders } );
  }

  deleteUser(id: string) { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete(`${this.API_URI}/abogados/${id}`, { headers: getHeaders } );
  }


}


  
