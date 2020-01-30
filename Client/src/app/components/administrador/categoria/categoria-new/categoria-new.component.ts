import { Component, OnInit } from '@angular/core';


import { CategoriaService } from '../../../../services/categoria.service';

import { ActivatedRoute, Router, UrlTree } from '@angular/router';

import { Categoria } from 'src/app/models/categoria';


import Swal from 'sweetalert2'

/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;

@Component({
  selector: 'app-categoria-new',
  templateUrl: './categoria-new.component.html',
  styleUrls: ['./categoria-new.component.css']
})
export class CategoriaNewComponent implements OnInit {

  categoria: Categoria = {
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

  constructor(private categoriaService: CategoriaService, private router:Router) {
  }


  ngOnInit() {

  }

  nuevaCategoria() {
    
    delete this.categoria.id_categoria;
    
    this.categoria.icono = $("#iconos  input[name=icono]:checked").val();
    //alert(this.categoria.icono);
    
    this.categoriaService.createCategoria(this.categoria).subscribe(
      res => {
        Swal.fire({
          title: 'Categoría Registrada Correctamente',
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

