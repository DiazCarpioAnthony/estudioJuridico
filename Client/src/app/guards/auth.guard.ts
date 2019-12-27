import { Injectable } from '@angular/core';
import { CanActivate, Router , UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private userService:UserService, private router:Router ){

  }
  
  canActivate(){
    if(this.userService.getUserLoggedIn()){
      //login TRUE
      return true;
    }else{
      this.router.navigate(['/administrador']);
      return false;
    }
  }
  
}
