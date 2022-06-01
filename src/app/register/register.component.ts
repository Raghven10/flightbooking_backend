import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from 'src/app/service/security/basic-auth.service';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public registerService:RegisterService,
    public notificationService: NotificationService,
    public basicAuth: BasicAuthService,
    public router: Router
    ) { }

    user : any;

  ngOnInit(): void {
  }

  onSubmit(){
    this.registerService.saveUser(this.registerService.form.value)
    .subscribe(
      data=>{
        console.log(data);
        this.user=data;
        this.notificationService.success(':: Regitstration successful! Please log in');
        this.router.navigateByUrl('welcome');                               
      },
      error=>{
        this.notificationService.warn(':: Not submitted!');
        
        return error;

      }
    );

  }

 
  onClear() {
     this.registerService.form.reset();
     this.registerService.initializeFormGroup();        
  }

}
