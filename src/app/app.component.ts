import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { NotificationService } from './service/notification.service';
import { BasicAuthService } from './service/security/basic-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flightbooking';
  

  constructor(
    
    public authService: BasicAuthService, 
    public notificationService: NotificationService,
    private router: Router){
    
  }

 
  selectedRole = sessionStorage.getItem('selectedRole');  
  fullname = sessionStorage.getItem('firstName')+' '+sessionStorage.getItem('lastName');



  //Logout method
  logout(){

    this.authService.logout();     
    sessionStorage.removeItem('authenticatedUser')
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('selectedRole');
  sessionStorage.removeItem('firstName');
  sessionStorage.removeItem('lastName');
  sessionStorage.clear();

  this.notificationService.success(':: You are successfully logged Out! Thanks for visiting.');

  window.location.reload();
   
}

}
