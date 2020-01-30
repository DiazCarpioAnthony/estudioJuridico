import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, UrlTree } from '@angular/router';

import { KeywordService } from '../../../../services/keyword.service';
import { Keyword } from 'src/app/models/keyword';
import { concat } from 'rxjs';

import Swal from 'sweetalert2'

/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;


@Component({
  selector: 'app-keyword-new',
  templateUrl: './keyword-new.component.html',
  styleUrls: ['./keyword-new.component.css']
})
export class KeywordNewComponent implements OnInit {

    keyword: Keyword = {
      id_keyword: 0,
      nombre_keyword: ''
    }
    
  
    constructor(private keywordService: KeywordService, private router:Router) {
    }
  
  
    ngOnInit() {
  
    }
  
    nuevoKeyword() {
      
      delete this.keyword.id_keyword;
      
      
      this.keywordService.createKeyword(this.keyword).subscribe(
        res => {
          Swal.fire({
            title: 'Keyword Registrada Correctamente',
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
  
  