import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  
  API_URI2 = "http://localhost:3000/api";
  API_URI = "https://lawyerpage.herokuapp.com/api";

  constructor(private http: HttpClient) { }

  uploadFile(formData) {
    return this.http.post(`${this.API_URI}/upload`, formData);
  }

}
