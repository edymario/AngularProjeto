import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class ClienteGuard implements CanActivateChild {

  canActivateChild( route : ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    console.log(state);
    return true;
    }
  }
