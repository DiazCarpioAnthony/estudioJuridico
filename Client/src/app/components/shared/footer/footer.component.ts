import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  categorias: any = [];

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
