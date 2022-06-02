import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { BasicAuthService } from './service/security/basic-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flightbooking';
  

  constructor(public authService: BasicAuthService, private router: Router){
    
  }

  logout(){
    console.log('logout...');
    this.authService.logout();  
  }
}
