import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, UrlTree } from '@angular/router';

import { AbogadoService } from '../../../../services/abogado.service';

import { Abogado } from 'src/app/models/abogado';


import Swal from 'sweetalert2'

/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;

@Component({
  selector: 'app-abogado-update',
  templateUrl: './abogado-update.component.html',
  styleUrls: ['./abogado-update.component.css']
})
export class AbogadoUpdateComponent implements OnInit {

  abogadoId: number;

 
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

  
  abogadoActual: Abogado = {
    id_abogado:  0,
    nombre_abogado: '',
    isDoctor: true,
    DNI: '',
    correo: '',
    colegiatura: '',
    condicion: '',
    image: '',
  }

  constructor(activateRoute: ActivatedRoute, private router:Router, private abogadoService: AbogadoService) {
    this.abogadoId = activateRoute.snapshot.params['id'];
  }


  ngOnInit() {
    
    this.abogadoService.getOne(this.abogadoId).subscribe(
      res => {
        this.abogadoActual = res;

        $("#Nombre").val(this.abogadoActual[0].nombre_abogado);
        $("#DNI").val(this.abogadoActual[0].DNI);
        $("#Correo").val(this.abogadoActual[0].correo);
        $("#Image").val(this.abogadoActual[0].image);
        if(this.abogadoActual[0].isDoctor=="1"){ //TRUE
          $("#isDoc").val("true");
        }
        if(this.abogadoActual[0].isDoctor=="0"){
          $("#isDoc").val("false");
        }
        $("#Condicion").val(this.abogadoActual[0].condicion);
        $("#Colegiatura").val(this.abogadoActual[0].colegiatura);
        
      },
      err => console.error(err)
    );
  }




  actualizarAbogado() {

    this.abogado.id_abogado = this.abogadoId;
    this.abogado.nombre_abogado = $("#Nombre").val();
    this.abogado.DNI = $("#DNI").val().toString();
    this.abogado.correo = $("#Correo").val();
    this.abogado.image = $("#Image").val();
    this.abogado.condicion = $("#Condicion").val();
    this.abogado.colegiatura = $("#Colegiatura").val();

    var aux = $("#isDoc option:selected").val();
    if(aux == "true"){
      this.abogado.isDoctor = true;
    }else{
      this.abogado.isDoctor = false;
    }

    console.log("-------------")
    console.log(this.abogado);
    

    this.abogadoService.updateAbogado(this.abogadoId, this.abogado).subscribe(
      res => {
        Swal.fire({
          title: 'Abogado actualizado correctamente',
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
4
}

