import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class ChamadoGuard implements CanActivateChild {

  canActivateChild( route : ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{


      return true;
    }
  }
