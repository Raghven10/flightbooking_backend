import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import {BasicAuthService} from '../security/basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authService.isUserLoggedIn() && sessionStorage.getItem('selectedRole')!=null) {
      return true;
    }
    this.router.navigate(['']);
    return false;
    }

  constructor(private authService:BasicAuthService,
    private router: Router) { }
}
