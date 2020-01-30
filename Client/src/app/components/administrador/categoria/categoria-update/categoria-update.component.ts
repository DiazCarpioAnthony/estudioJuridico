import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';

import { CategoriaService } from '../../../../services/categoria.service';

import { Categoria } from 'src/app/models/categoria';


import Swal from 'sweetalert2'

/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoriaId: number;

  categoria: Categoria = {
    id_categoria: 0,
    nombre_categoria: '',
    descripcion: '',
    icono: ''
  }
  categoriaActual: Categoria = {
    id_categoria: 0,
    nombre_categoria: '',
    descripcion: '',
    icono: ''
  }
  iconos = [
    {
      "icono": "flaticon-family"
    },
    {
      "icono": "flaticon-auction"
    },
    {
      "icono": "flaticon-shield"
    },
    {
      "icono": "flaticon-handcuffs"
    },
    {
      "icono": "flaticon-house"
    },
    {
      "icono": "flaticon-employee"
    },
    {
      "icono": "flaticon-fire"
    },
    {
      "icono": "flaticon-money"
    },
    {
      "icono": "flaticon-medicine"
    },
    {
      "icono": "flaticon-handcuffs"
    }
  ]

  constructor(activateRoute: ActivatedRoute, private categoriaService: CategoriaService, private router:Router) {
    this.categoriaId = activateRoute.snapshot.params['id'];
  }


  ngOnInit() {
    this.categoriaService.getOne(this.categoriaId).subscribe(
      res => {
        this.categoriaActual = res;
        var length = Object.keys(this.categoriaActual).length;

        $("#nombre").val(this.categoriaActual[0].nombre_categoria);
        $("#descripcion").val(this.categoriaActual[0].descripcion);       
        
        $(`#${this.categoriaActual[0].icono}`).prop('checked', true);
      },
      err => console.error(err)
    );
  }

  nuevaCategoria() {
    
    delete this.categoria.id_categoria;

    this.categoria.id_categoria = this.categoriaId;
    this.categoria.nombre_categoria = $("#nombre").val();
    this.categoria.descripcion = $("#descripcion").val();
    
    this.categoria.icono = $("#iconos  input[name=icono]:checked").val();
    //alert(this.categoria.icono);
    //console.log("HOLLLLLLLLLL");
    //console.log(this.categoria);

    this.categoriaService.updateCategoria(this.categoria.id_categoria,this.categoria).subscribe(
      res => {
        Swal.fire({
          title: 'Categoría Actualizada Correctamente',
          icon: 'success',
          showClass: {
            popup: 'animated fadeInDown faster'
          },
          hideClass: {
            popup: 'animated fadeOutUp faster'
          }
        })

        this.router.navigate(['/dashboard/categoria/list']);
      },
      err => console.error(err)
    );



  }

}


