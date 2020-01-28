import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from '@angular/router';

import { UploadService } from '../../../services/upload.service';
import { CategoriaService } from '../../../services/categoria.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Publicacion, Publicaciones } from 'src/app/models/publicacion';
import { Router } from '@angular/router';
import { concat } from 'rxjs';


@Component({
  selector: 'app-blog-single-publicacion',
  templateUrl: './blog-single-publicacion.component.html',
  styleUrls: ['./blog-single-publicacion.component.css']
})
export class BlogSinglePublicacionComponent implements OnInit {

  publicacionId: any;

  categorias: any = [];
  images: any = [];
  image: any;
  pageActual: number = 1;
  publicacionActual: Array<Publicaciones> = [];
  publicaciones: Array<Publicaciones> = [];
  agrupados: Array<Publicaciones> = [];
  agrupadosActual: Array<Publicaciones> = [];
  aux: Array<Publicaciones> = [];
  auxActual: Array<Publicaciones> = [];
  keywords: any = [];

  constructor(private router: Router, private categoriaService: CategoriaService, private uploadService: UploadService, private sanitizer: DomSanitizer, private publicacionService: PublicacionService, public activateRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
      this.publicacionId = this.activateRoute.snapshot.paramMap.get("id");

      this.publicacionService.getOne(this.publicacionId).subscribe(
        (res: Array<Publicaciones>) => {


          this.publicacionActual=null;
          this.publicacionActual = res;
          

          console.log("-----DESPUES DEL RES-------");
          console.log(this.publicacionActual);
          this.concatenar(this.publicacionActual);
          
        },
        err => console.error(err)
      );    

    })

    this.publicacionService.getUltimas().subscribe(
      (res: Array<Publicaciones>) => {
        this.publicaciones = res;
        this.concatenar2(this.publicaciones);

        this.getNumber(this.publicaciones, 4);
        console.log("---------------------");
        console.log(this.publicaciones);
      },
      err => console.error(err)
    );


    this.categoriaService.getCategoriasAll().subscribe(
      res => {
        console.log(res);
        this.categorias = res;
      },
      err => console.error(err)
    );

  }

  getNumber(array: Array<Publicaciones>, number: number) {
    this.publicaciones = this.publicaciones.splice(0, number);
  }


  concatenar(array: Array<Publicaciones>) {
    
    this.agrupadosActual=[];
    this.auxActual=[];
    this.keywords=[];
    for (var i = 0; i < array.length; i++) {
      this.agrupadosActual.push(array[i]);
      this.auxActual.push(array[i]);
    }

    var auxiliar = "";
    for (var i = 0; i < array.length; i++) {
      auxiliar = "";
      for (var j = 0; j < this.agrupadosActual.length; j++) {

        //this.agrupados.push(array[i]);
        //console.log(this.agrupados[j].id_publicacion + " - " + array[i].id_publicacion);
        if (this.agrupadosActual[j].id_publicacion == array[i].id_publicacion) {
          this.keywords.push(array[i].nombre_keyword);
          //console.log("COMPARA: "+this.agrupados[j].id_publicacion + " - " + array[i].id_publicacion);
          auxiliar = auxiliar.concat(this.agrupadosActual[j].nombre_keyword, ', ');

        }
      }
      this.auxActual[i].nombre_keyword = auxiliar.substr(0, auxiliar.length - 2);
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

    this.publicacionActual = eliminarRepetidos(this.auxActual);

    const eliminarRepetidosString = (array) => {
      var unicos = [];
      var itemsEncontrados = {};
      for (var i = 0, l = array.length; i < l; i++) {
        var stringified = JSON.stringify(array[i]);
        if (itemsEncontrados[stringified]) { continue; }
        unicos.push(array[i]);
        itemsEncontrados[stringified] = true;
      }
      return unicos;
    }


    this.keywords = eliminarRepetidosString(this.keywords);
  }


  concatenar2(array: Array<Publicaciones>) {
    
    this.agrupados=[];
    this.aux=[];
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

}
