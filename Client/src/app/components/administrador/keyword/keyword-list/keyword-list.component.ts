import { Component, OnInit } from '@angular/core';

import { KeywordService } from '../../../../services/keyword.service';
import { Keyword } from 'src/app/models/keyword';
import { concat } from 'rxjs';

import Swal from 'sweetalert2'

/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;

@Component({
  selector: 'app-keyword-list',
  templateUrl: './keyword-list.component.html',
  styleUrls: ['./keyword-list.component.css']
})
export class KeywordListComponent implements OnInit {

  keywords: Array<Keyword> = [];

  constructor(private keywordService: KeywordService) { }

  ngOnInit() {
    this.keywordService.getKeywordsAll().subscribe(
      (res: Array<Keyword>) => {
        console.log(res);
        this.keywords = res;

        $(document).ready(function () {
          $('#example').DataTable({
            "scrollX": true
          });
        });
      },
      err => console.error(err)
    );
  }


  deleteKeyword(id: any) {
    this.keywordService.deleteKeyword(id).subscribe(
      res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Keyword eliminada correctamente',
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
