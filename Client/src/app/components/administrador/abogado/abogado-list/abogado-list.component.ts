import { Component, OnInit } from '@angular/core';

import { AbogadoService } from '../../../../services/abogado.service';
import { Abogado } from 'src/app/models/abogado';
import { concat } from 'rxjs';

import Swal from 'sweetalert2'
import { DomSanitizer } from '@angular/platform-browser';

/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;

@Component({
  selector: 'app-abogado-list',
  templateUrl: './abogado-list.component.html',
  styleUrls: ['./abogado-list.component.css']
})
export class AbogadoListComponent implements OnInit {

  abogados: Array<Abogado> = [];

  constructor(private abogadoService: AbogadoService, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.abogadoService.getAbogadosAll().subscribe(
      (res: Array<Abogado>) => {
        console.log(res);
        this.abogados = res;

        $(document).ready(function () {
          $('#example').DataTable({
            "scrollX": true
          });
        });
      },
      err => console.error(err)
    );
  }


  deleteAbogado(id: any) {
    this.abogadoService.deleteAbogado(id).subscribe(
      res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Abogado eliminado correctamente',
          showConfirmButton: false,
          timer: 1500
        })

        //this.router.navigate(['/dashboard/categoria']);
        setTimeout(() => {
          location.reload();
        }, 1500);

      },
      err => console.error(err)
    );

  }
  
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
