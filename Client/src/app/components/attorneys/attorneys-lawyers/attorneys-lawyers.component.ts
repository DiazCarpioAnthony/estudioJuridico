import { Component, OnInit } from '@angular/core';

import { AbogadoService } from 'src/app/services/abogado.service';

@Component({
  selector: 'app-attorneys-lawyers',
  templateUrl: './attorneys-lawyers.component.html',
  styleUrls: ['./attorneys-lawyers.component.css']
})
export class AttorneysLawyersComponent implements OnInit {

  abogados: any = [];

  pageActual:number = 1;
  constructor(private abogadoService: AbogadoService) { }

  ngOnInit() {
    this.abogadoService.getAbogadosAll().subscribe(
      res => {
        console.log(res);
        this.abogados = res;
      },
      err => console.error(err)
    );
  }

}
