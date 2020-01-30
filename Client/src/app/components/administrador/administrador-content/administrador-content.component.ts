import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';

import { CategoriaService } from '../../../services/categoria.service';
import { UploadService } from '../../../services/upload.service';
import { KeywordService } from '../../../services/keyword.service';
import { PublicacionService } from '../../../services/publicacion.service';

import { Publicacion } from 'src/app/models/publicacion';


import Swal from 'sweetalert2'  

/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;



@Component({
  selector: 'app-administrador-content',
  templateUrl: './administrador-content.component.html',
  styleUrls: ['./administrador-content.component.css']
})
export class AdministradorContentComponent implements OnInit {

  categorias: any = [];
  keywords: any = [];
  uploadedFiles: Array<File>;
  pageActual: number = 1;
  checkeds: any = [];
  nameFile: string = "Choose File";

  last_id_publicacion: any;
  publicacion: Publicacion = {
    id_publicacion: 0,
    title: '',
    description: '',
    image: '',
    fecha: new Date(),
    resumen: '',
    id_categoria: 0,
    nombre_categoria: '',
    descripcion: '',
    icono: '',
    id_keyword: 0,
    nombre_keyword: ''
  }

  keyword: any = {
    id_keyword: 0
  }

  constructor(private serviceUpload: UploadService, private router:Router, private publicacionService: PublicacionService, private categoriaService: CategoriaService, private keywordService: KeywordService) {
  }


  ngOnInit() {
    this.categoriaService.getCategoriasAll().subscribe(
      res => {
        console.log(res);
        this.categorias = res;
      },
      err => console.error(err)
    );
    this.keywordService.getKeywordsAll().subscribe(
      res => {
        console.log(res);
        this.keywords = res;
      },
      err => console.error(err)
    );
  }
/*
  fileChange(element) {
    this.uploadedFiles = element.target.files;
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      this.nameFile = this.uploadedFiles[i].name;
    }
  }
*/
  getCheckeds() {
    var keys = [];
    this.checkeds = [];
    $("input[type=checkbox]:checked").each(function () {
      //cada elemento seleccionado
      keys.push($(this).val());
    });
    for (var i = 0; i < keys.length; i++) {
      this.checkeds.push(keys[i]);
    }
    const eliminarRepetidos = (array) => {
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

    this.checkeds = eliminarRepetidos(this.checkeds);
  }
  nuevaPublicacion() {
    //this.upload();
    /*for (var i = 0; i < this.uploadedFiles.length; i++) {
      this.nameFile = this.uploadedFiles[i].name;
    }*/
    //Guardar en la API que falta crear

    delete this.publicacion.id_publicacion;
    delete this.publicacion.nombre_categoria;
    delete this.publicacion.descripcion;
    delete this.publicacion.icono;
    delete this.publicacion.id_keyword;
    delete this.publicacion.fecha;
    delete this.publicacion.nombre_keyword;

    //this.publicacion.image = this.nameFile;
    this.publicacion.id_categoria = $("#categorias option:selected").val();

    console.log("PUBLICACION----------------");
    console.log(this.publicacion);

    this.publicacionService.createPublicacion(this.publicacion).subscribe(
      res => {
        this.publicacionService.getLastPublicacion().subscribe(
          res => {
            //alert(res[0].lastId);
            this.last_id_publicacion = res[0].lastId;
    
            this.getCheckeds();
            this.addkeyword(this.last_id_publicacion);
          },
          err => console.error(err)
        );

      },
      err => console.error(err)
    );
    

    /*Por alguna razon no entra */
    console.log(this.checkeds);
    //SALE UNDEFINED
    console.log(this.last_id_publicacion);


    
  }

  addkeyword(lastIdPublicacion) {
    for (var i = 0; i < this.checkeds.length; i++) {
      this.keyword.id_keyword = this.checkeds[i];
      console.log(lastIdPublicacion);
      this.publicacionService.addKeyword(lastIdPublicacion, this.keyword).subscribe(
        res => {
          //this.upload();
          Swal.fire({
            title: 'Publicación Registrada Correctamente',
            icon: 'success',
            showClass: {
              popup: 'animated fadeInDown faster'
            },
            hideClass: {
              popup: 'animated fadeOutUp faster'
            }
          })

          this.router.navigate(['/dashboard/list']);

        },
        err => console.error(err)
      );
    }
  }
}
