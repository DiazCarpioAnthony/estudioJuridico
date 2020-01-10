import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  styleUrls: ['./practice-areas.component.css']
})
export class PracticeAreasComponent implements OnInit {

  categorias: any = [];
  pageActual: number = 1;
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    
    this.categoriaService.getCategoriasAll().subscribe(
      res => {
        console.log(res);
        this.categorias = res;
      },
      err => console.error(err)
    );
  }

}
