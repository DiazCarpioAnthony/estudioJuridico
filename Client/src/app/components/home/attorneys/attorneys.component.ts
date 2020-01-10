import { Component, OnInit } from '@angular/core';

import { AbogadoService } from 'src/app/services/abogado.service';

@Component({
  selector: 'app-attorneys',
  templateUrl: './attorneys.component.html',
  styleUrls: ['./attorneys.component.css']
})
export class AttorneysComponent implements OnInit {

  abogados: any = [];
  
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
