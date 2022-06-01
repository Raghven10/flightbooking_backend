import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BasicAuthService} from '../service/security/basic-auth.service';
import { User } from 'src/app/models/User.model';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, 
        public basicAuthService:BasicAuthService,        
        public dialog: MatDialog,
        public notificationService: NotificationService,
        ) { }

        email = '';
        password = '';
        errorMessage = 'Invalid Credentials!';
        invalidLogin = false;
        user : User = new User();
        ngOnInit() {
        }

        onClose(){
          this.dialog.closeAll();
          this.notificationService.success("Welcome to Learnoo.net. Login button is still there in navbar.")
        }

       

  basicAuthLogin() 
  {

 this.basicAuthService.executeAuthenticationService(this.email, this.password)
  .subscribe(
    data=>{
      console.log(data);
      this.user=data;
      this.invalidLogin = false;  
      this.dialog.closeAll();       
    },
    error=>{
      console.log(error);
      this.invalidLogin = true;
      this.notificationService.warn("We could not connect remote server. Please Try again with valid Username/ Password.")
    }
  )
      
  }

  
}