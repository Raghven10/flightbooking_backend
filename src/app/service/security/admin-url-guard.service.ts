import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BasicAuthService } from './basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUrlGuardService implements CanActivate{

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authService.isUserLoggedIn() && sessionStorage.getItem('selectedRole')=='ADMIN') {
      return true;
    }
    this.router.navigate(['/']);
    return false;
    }    

  constructor(public authService:BasicAuthService,
    private router: Router) { }
}
