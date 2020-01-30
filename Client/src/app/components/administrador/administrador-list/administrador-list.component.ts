import { Component, OnInit } from '@angular/core';

import { PublicacionService } from '../../../services/publicacion.service';
import { Publicaciones } from 'src/app/models/publicacion';
import { concat } from 'rxjs';

import Swal from 'sweetalert2'
import { DomSanitizer } from '@angular/platform-browser';

/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  publicaciones: Array<Publicaciones> = [];
  agrupados: Array<Publicaciones> = [];
  aux: Array<Publicaciones> = [];
  constructor(private publicacionService: PublicacionService, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.publicacionService.getPublicacionesAll().subscribe(
      (res: Array<Publicaciones>) => {
        console.log(res);
        this.publicaciones = res;
        this.concatenar(this.publicaciones);
        $(document).ready(function () {
          $('#example').DataTable({
            "scrollX": true
          });
        });
      },
      err => console.error(err)
    );
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
    /*
        for (var i = 0; i < this.publicaciones.length; i++) {
    
          console.log(this.publicaciones[i].id_publicacion + " - " + this.publicaciones[i].nombre_keyword);
        }
    */

  }

  deletePublicacion(id: any) {
    this.publicacionService.deleteKeywords(id).subscribe(
      res => {
        this.publicacionService.deletePublicacion(id).subscribe(
          res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Publicacíon eliminada correctamente',
              showConfirmButton: false,
              timer: 1500
            });

            //this.router.navigate(['/dashboard/categoria']);
            setTimeout(() => {
              location.reload();
            }, 1500);
          },
          err => console.error(err)
        );

      },
      err => console.error(err)
    );
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
