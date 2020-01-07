import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  
  API_URI = "http://localhost:3000/api";
  API_URI2 = "https://lawyerpage.herokuapp.com/api";

  constructor(private http: HttpClient) { }

  uploadFile(formData) {
    return this.http.post(`${this.API_URI}/upload`, formData);
  }

  downloadFile(file:String) {
    var body = {filename: file};

    return this.http.post(`${this.API_URI}/download`, body, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

}
