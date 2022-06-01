import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthService } from './basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor{

  constructor(private basicAuthService: BasicAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){

  
    let username = this.basicAuthService.getAuthenticatedUser();

    let basicAuthHeaderString = this.basicAuthService.getAuthToken();
   

    if (basicAuthHeaderString && username){

      req = req.clone({
        setHeaders:{
          Authorization:basicAuthHeaderString
        }
      })

    }
       
    return next.handle(req);
  }

}
