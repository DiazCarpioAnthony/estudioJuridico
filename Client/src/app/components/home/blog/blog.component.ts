import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../services/upload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Publicacion } from 'src/app/models/publicacion';
import { Publicaciones } from 'src/app/models/publicacion';
import { concat } from 'rxjs';


/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  images: any = [];
  image: any;
  pageActual: number = 1;

  publicaciones: Array<Publicaciones> = [];
  agrupados: Array<Publicaciones> = [];
  aux: Array<Publicaciones> = [];


  constructor(private uploadService: UploadService, private sanitizer: DomSanitizer, private publicacionService: PublicacionService) { }


  ngOnInit() {

    this.publicacionService.getUltimas().subscribe(
      (res: Array<Publicaciones>) => {
        console.log(res);
        this.publicaciones = res;
        this.concatenar(this.publicaciones);
        this.getNumber(this.publicaciones, 6);
        this.viewImages();
      },
      err => console.error(err)
    );

  }


  viewImages() {
    for (let i = 0; i < this.publicaciones.length; i++) {

      console.log("-" + this.publicaciones[i].image.substr(1, this.publicaciones[i].image.length - 2) + "-");
    }
    for (let i = 0; i < this.publicaciones.length; i++) {
      var auxFileName = this.publicaciones[i].image.substr(1, this.publicaciones[i].image.length - 2);
      this.uploadService.downloadFile(auxFileName)
        .subscribe(
          data => {
            console.log(data);
            let objectURL = URL.createObjectURL(data);
            this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);

            this.images.push(this.image);
            this.publicaciones[i].img = this.image;
          },
          error => console.error(error)
        );
    }
  }

  concatenar(array: Array<Publicaciones>) {
    for (var i = 0; i < array.length; i++) {
      this.agrupados.push(array[i]);
      this.aux.push(array[i]);
    }

    var auxiliar = "";
    for (var i = 0; i < array.length; i++) {
      auxiliar = "";
      for (var j = 0; j < this.agrupados.length; j++) {

        //this.agrupados.push(array[i]);
        //console.log(this.agrupados[j].id_publicacion + " - " + array[i].id_publicacion);
        if (this.agrupados[j].id_publicacion == array[i].id_publicacion) {

          //console.log("COMPARA: "+this.agrupados[j].id_publicacion + " - " + array[i].id_publicacion);
          auxiliar = auxiliar.concat(this.agrupados[j].nombre_keyword, ', ');

        }
      }
      this.aux[i].nombre_keyword = auxiliar.substr(0, auxiliar.length - 2);
    }

    const eliminarRepetidos = (array: Array<Publicaciones>) => {
      var unicos = [];
      var itemsEncontrados = {};
      for (var i = 0, l = array.length; i < l; i++) {
        var stringified = JSON.stringify(array[i].id_publicacion);
        if (itemsEncontrados[stringified]) { continue; }
        unicos.push(array[i]);
        itemsEncontrados[stringified] = true;
      }
      return unicos;
    }

    this.publicaciones = eliminarRepetidos(this.aux);

  }

  getNumber(array: Array<Publicaciones>, number: number) {
    this.publicaciones = this.publicaciones.splice(0, number);
  }
}
