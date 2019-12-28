import { Component, OnInit } from '@angular/core';

import { UploadService } from '../../../services/upload.service';

@Component({
  selector: 'app-administrador-content',
  templateUrl: './administrador-content.component.html',
  styleUrls: ['./administrador-content.component.css']
})
export class AdministradorContentComponent implements OnInit {

  uploadedFiles: Array < File > ;
  constructor(private serviceUpload: UploadService) { }

  ngOnInit() {
  }
  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads", this.uploadedFiles[i], this.uploadedFiles[i].name);

    }
    this.serviceUpload.uploadFile(formData).subscribe((res) => {
      console.log('response received is ', res);
    });
  }

  nuevaPublicacion() {
    this.upload();
    //Guardar en la API que falta crear
    
  }
}
