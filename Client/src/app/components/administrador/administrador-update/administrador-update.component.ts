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
  selector: 'app-administrador-update',
  templateUrl: './administrador-update.component.html',
  styleUrls: ['./administrador-update.component.css']
})
export class AdministradorUpdateComponent implements OnInit {

  publicacionId: number;


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
  publicacionActual: Publicacion = {
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
  };
  keyword: any = {
    id_keyword: 0
  }

  constructor(activateRoute: ActivatedRoute, private router:Router, private serviceUpload: UploadService, private publicacionService: PublicacionService, private categoriaService: CategoriaService, private keywordService: KeywordService) {
    this.publicacionId = activateRoute.snapshot.params['id'];
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
    this.publicacionService.getOne(this.publicacionId).subscribe(
      res => {
        this.publicacionActual = res;
        var length = Object.keys(this.publicacionActual).length;

        $("#titulo").val(this.publicacionActual[0].title.substr(1, this.publicacionActual[0].title.length - 2));
        $("#descripcion").val(this.publicacionActual[0].description.substr(1, this.publicacionActual[0].description.length - 2));
        $("#resumen").val(this.publicacionActual[0].resumen.substr(1, this.publicacionActual[0].resumen.length - 2));
        $("#imagen").val(this.publicacionActual[0].image.substr(1, this.publicacionActual[0].image.length - 2));
        $("#categorias").val(this.publicacionActual[0].id_categoria);
        //FALTA PINTAR KEYWORDS
        for (var i = 0; i < length; i++) {
          console.log( this.publicacionActual[i].id_keyword);
          var aux = this.publicacionActual[i].id_keyword;
          $(`#${aux}`).prop('checked', true);
        }
      },
      err => console.error(err)
    );
  }



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

  actualizarPublicacion() {
    //this.upload();
    /*for (var i = 0; i < this.uploadedFiles.length; i++) {
      this.nameFile = this.uploadedFiles[i].name;
    }*/
    //Guardar en la API que falta crear

    delete this.publicacion.nombre_categoria;
    delete this.publicacion.descripcion;
    delete this.publicacion.icono;
    delete this.publicacion.id_keyword;
    delete this.publicacion.nombre_keyword;

    this.publicacion.fecha = this.publicacionActual.fecha;

    //this.publicacion.image = this.nameFile;
    this.publicacion.id_publicacion = this.publicacionId;
    this.publicacion.title = $("#titulo").val().concat(new String(" "));
    this.publicacion.title = new String(" ").concat(this.publicacion.title);

    this.publicacion.description = $("#descripcion").val().concat(new String(" "));
    this.publicacion.description = new String(" ").concat(this.publicacion.description);

    this.publicacion.resumen = $("#resumen").val().concat(new String(" "));
    this.publicacion.resumen = new String(" ").concat(this.publicacion.resumen);

    this.publicacion.image = $("#imagen").val().concat(new String(" "));
    this.publicacion.image = new String(" ").concat(this.publicacion.image);

    this.publicacion.id_categoria = $("#categorias option:selected").val();

    console.log("PUBLICACION----------------");
    console.log(this.publicacion);

    this.publicacionService.updatePublicacion(this.publicacionId, this.publicacion).subscribe(
      res => {

        this.publicacionService.deleteKeywords(this.publicacionId).subscribe(
          res => {
            this.getCheckeds();
            this.addkeyword(this.publicacionId);
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

  addkeyword(idPublicacion) {
    for (var i = 0; i < this.checkeds.length; i++) {
      this.keyword.id_keyword = this.checkeds[i];
      console.log(idPublicacion);
      this.publicacionService.addKeyword(idPublicacion, this.keyword).subscribe(
        res => {
          //this.upload();
          Swal.fire({
            title: 'Publicación actualizada correctamente',
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
