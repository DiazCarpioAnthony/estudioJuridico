import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, UrlTree } from '@angular/router';

import { CategoriaService } from '../../../../services/categoria.service';
import { Categoria } from 'src/app/models/categoria';
import { concat } from 'rxjs';

import Swal from 'sweetalert2'

/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias: Array<Categoria> = [];

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit() {
    this.categoriaService.getCategoriasAll().subscribe(
      (res: Array<Categoria>) => {
        console.log(res);
        this.categorias = res;

        $(document).ready(function () {
          $('#example').DataTable({
            "scrollX": true
          });
        });
      },
      err => console.error(err)
    );
  }


  deleteCategoria(id: any) {
    this.categoriaService.deleteCategoria(id).subscribe(
      res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Categoría eliminada correctamente',
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

}
