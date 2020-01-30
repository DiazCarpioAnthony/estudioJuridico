import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, UrlTree } from '@angular/router';

import { KeywordService } from '../../../../services/keyword.service';

import { Keyword } from 'src/app/models/keyword';


import Swal from 'sweetalert2'

/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;

@Component({
  selector: 'app-keyword-update',
  templateUrl: './keyword-update.component.html',
  styleUrls: ['./keyword-update.component.css']
})
export class KeywordUpdateComponent implements OnInit {

  keywordId: number;

  keyword: Keyword = {
    id_keyword: 0,
    nombre_keyword: ''
  }
  keywordActual: Keyword = {
    id_keyword: 0,
    nombre_keyword: ''
  }


  constructor(activateRoute: ActivatedRoute, private keywordService: KeywordService, private router:Router) {
    this.keywordId = activateRoute.snapshot.params['id'];
  }


  ngOnInit() {
    this.keywordService.getOne(this.keywordId).subscribe(
      res => {
        this.keywordActual = res;
        var length = Object.keys(this.keywordActual).length;

        $("#nombre").val(this.keywordActual[0].nombre_keyword);
      },
      err => console.error(err)
    );
  }

  nuevaKeyword() {

    delete this.keyword.id_keyword;

    this.keyword.id_keyword = this.keywordId;
    this.keyword.nombre_keyword = $("#nombre").val();

    this.keywordService.updateKeyword(this.keyword.id_keyword, this.keyword).subscribe(
      res => {
        Swal.fire({
          title: 'Keyword Actualizada Correctamente',
          icon: 'success',
          showClass: {
            popup: 'animated fadeInDown faster'
          },
          hideClass: {
            popup: 'animated fadeOutUp faster'
          }
        })

        this.router.navigate(['/dashboard/keyword/list']);

      },
      err => console.error(err)
    );



  }

}


