import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Keyword } from '../models/keyword';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  API_URI2 = "http://localhost:3000/api";
  API_URI = "https://lawyerpage.herokuapp.com/api";
  
  constructor(private http: HttpClient) { }

  getKeywordsAll() { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.API_URI}/keyword`, { headers: getHeaders } );

  }
  
  getOne(id: Number) {
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.API_URI}/keyword/${id}`, { headers: getHeaders });

  }

  createKeyword(keyword: Keyword) { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.API_URI}/keyword/register`, keyword, { headers: getHeaders } );
  }

  updateKeyword(id: any, updateKeyword: Keyword): Observable<Keyword> { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(`${this.API_URI}/keyword/${id}`, updateKeyword, { headers: getHeaders } );
  }

  deleteKeyword(id: string) { // ` es 96
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete(`${this.API_URI}/keyword/${id}`, { headers: getHeaders } );
  }

}


  