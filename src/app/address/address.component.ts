import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/Booking.model';
import { AddressService } from '../service/address.service';
import { BookingService } from '../service/booking.service';

import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  booking_id:any
  constructor(
    public addressService: AddressService, 
    public router: Router,
    public route: ActivatedRoute,
    public bookingService: BookingService,
    private notificationService: NotificationService
    ) { }

    bookingDetail!: Booking

  ngOnInit(): void {
    this.fetchBookingDetails(this.route.snapshot.params['id']); 
    
  }


  fetchBookingDetails(id:any){
    this.bookingService.fetchBookingDetails(id).subscribe(
      res=>{
        this.bookingDetail = res;
        this.addressService.form.controls['booking'].setValue(this.bookingDetail);
        console.log(this.bookingDetail);
      }
    )
  }


  saveAddress(){
    this.addressService.saveUserAddress(this.addressService.form.value).subscribe(
      success=>{
        this.notificationService.success("Address saved successfully. Now make payment and finlize your booking.");
        let id = this.bookingDetail.pnr_id;
        this.router.navigate(['/user/booking/payment',id])        
        return success;
      },
      error=>{
        return error;
      }
    )
  }

}
