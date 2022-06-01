import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { server_url } from 'src/app/app.constant';
import { User } from 'src/app/models/User.model';
import { NotificationService } from '../notification.service';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  user : User = new User();
  userRoles : any
  constructor(private router: Router,
    private http: HttpClient,    
    ) { }

  
    executeAuthenticationService(email: string, password: string){
    
      let basicHeaderString = 'Basic ' + window.btoa(email + ':' + password);
      let headers = new HttpHeaders(
        {Authorization: basicHeaderString}
      )

     
      return this.http.get<User>(server_url+`/restauth`,
      {headers}).pipe(
        map(
          data=>{
              this.user=data;  
             console.log("Role Size: "+this.user.roles.length);
              if(this.user.roles.length==1)
              {              
              
              sessionStorage.setItem('authenticatedUser', email); 
              sessionStorage.setItem('token', basicHeaderString); 

              sessionStorage.setItem('selectedRole',JSON.parse(JSON.stringify(this.user.roles))[0].roleName)
              sessionStorage.setItem('firstName',JSON.parse(JSON.stringify(this.user.firstName)))
              sessionStorage.setItem('lastName',JSON.parse(JSON.stringify(this.user.lastName)))
              this.router.navigate(['']);
              }
    
              else if (this.user.roles.length>1){
                
                sessionStorage.setItem('authenticatedUser', email);
                sessionStorage.setItem('token', basicHeaderString);   
                sessionStorage.setItem('firstName',JSON.parse(JSON.stringify(this.user.firstName)))
                sessionStorage.setItem('lastName',JSON.parse(JSON.stringify(this.user.lastName)))              
                this.router.navigate(['selectrole']);
              }
        
              else {
                this.router.navigate(['no-authorization']);
              }
                 
              return data;   
            
          }
        )
      ); 
      
    }


  getAuthenticatedUser() {    
    
    return this.user; 
   }

  getAuthToken(): string | null | undefined {
     if(this.getAuthenticatedUser())
      {return sessionStorage.getItem('token'); }
      return null;   
   }

  isUserLoggedIn() {
   let user = sessionStorage.getItem('authenticatedUser')
   return !(user === null)
  }

  logout() {
  this.http.get(server_url+`/session-logout`).subscribe(
    data=>{ return data;      
    })   
     
   }

   deactivate() {
    this.http.get(server_url+`/deactivateaccount`).subscribe(
      res=>{ this.logout(); 
      })   
       
     }

   getUserRoles(){   
    return this.user.roles; 
  }

}

export class AuthenticationBean {
  constructor(public message: string) { }
 }


