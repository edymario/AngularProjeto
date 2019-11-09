import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../logins/login-service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private loginService : LoginService,
    private router : Router
    ) { }

  canActivate( route : ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    if(this.loginService.usuarioEstaAutenticado()){
      return true;
    } else{
      this.router.navigate(['/index']);
      return false;
    }

  }
}
