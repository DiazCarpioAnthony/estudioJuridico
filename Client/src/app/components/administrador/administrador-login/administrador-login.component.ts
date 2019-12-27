import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-administrador-login',
  templateUrl: './administrador-login.component.html',
  styleUrls: ['./administrador-login.component.css']
})
export class AdministradorLoginComponent implements OnInit {

  usuario: Usuario = {
    id_usuario: 0,
    email: '',
    nombre: '',
    password: '',
    created_at: new Date()
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    delete this.usuario.created_at;
    delete this.usuario.id_usuario;

    this.userService.postLogin(this.usuario).subscribe(
      res => {
        console.log("------------------------------");
        console.log(res['login']);
        if(res['login'] == "TRUE"){
          let u: Usuario = this.usuario;
          this.userService.setUserLoggedIn(u);
          this.router.navigate(['/dashboard']);
        }else{
          alert("Usuario o contraseña incorrectos");
        }
      },
      err => console.error(err)
    )
  }
}
