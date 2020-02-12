
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Abogado } from '../models/abogado';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AbogadoService {

  API_URI2 = "http://localhost:3000/api";
  API_URI = "https://lawyerpage.herokuapp.com/api";

  
  constructor(private http: HttpClient) { }

  getAbogadosAll() { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.API_URI}/abogados`, { headers: getHeaders } );

  }

  getOne(id: Number) {
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.API_URI}/abogados/${id}`, { headers: getHeaders });

  }

  createAbogado(abogado: Abogado) { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.API_URI}/abogados/register`, abogado, { headers: getHeaders } );
  }

  updateAbogado(id: any, updateAbogado: Abogado): Observable<Abogado> { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(`${this.API_URI}/abogados/${id}`, updateAbogado, { headers: getHeaders } );
  }

  deleteAbogado(id: string) { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete(`${this.API_URI}/abogados/${id}`, { headers: getHeaders } );
  }


}


  
