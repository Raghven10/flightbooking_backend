import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from '../service/address.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(
    public addressService: AddressService, 
    public router: Router,
    private notificationService: NotificationService
    ) { }



  ngOnInit(): void {
  }


  onSubmit(){
    this.addressService.saveUserAddress(this.addressService.form.value).subscribe(
      success=>{
        this.notificationService.success("Address registered successfully.")
        this.router.navigate(['/payment'])
        return success;
      },
      error=>{
        return error;
      }
    )
  }

}
