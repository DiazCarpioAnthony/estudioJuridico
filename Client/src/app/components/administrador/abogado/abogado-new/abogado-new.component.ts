import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, UrlTree } from '@angular/router';

import { AbogadoService } from '../../../../services/abogado.service';

import { Abogado } from 'src/app/models/abogado';


import Swal from 'sweetalert2'  

/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;

@Component({
  selector: 'app-abogado-new',
  templateUrl: './abogado-new.component.html',
  styleUrls: ['./abogado-new.component.css']
})
export class AbogadoNewComponent implements OnInit {

  pageActual: number = 1;
  checkeds: any = [];

  abogado: Abogado = {
    id_abogado:  0,
    nombre_abogado: '',
    isDoctor: true,
    DNI: '',
    correo: '',
    colegiatura: '',
    condicion: '',
    image: '',
  }


  constructor(private router:Router, private abogadoService: AbogadoService) {
  }


  ngOnInit() {

  }
  

  nuevoAbogado() {
    
    delete this.abogado.id_abogado;

    //this.publicacion.image = this.nameFile;
    var aux = $("#isDoc option:selected").val();
    if(aux == "true"){
      this.abogado.isDoctor = true;
    }else{
      this.abogado.isDoctor=false;
    }
    

    this.abogadoService.createAbogado(this.abogado).subscribe(
      res => {
        Swal.fire({
          title: 'Abogado Registrado Correctamente',
          icon: 'success',
          showClass: {
            popup: 'animated fadeInDown faster'
          },
          hideClass: {
            popup: 'animated fadeOutUp faster'
          }
        })

        this.router.navigate(['/dashboard/abogado/list']);

      },
      err => console.error(err)
    );
    
    
  }

}
