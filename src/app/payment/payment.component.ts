import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../service/booking.service';
import { FlightSearchService } from '../service/flight-search.service';
import { NotificationService } from '../service/notification.service';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public paymentService: PaymentService,
    public notificationService: NotificationService,
    public router: Router,
    public route: ActivatedRoute,
    public bookingService: BookingService,
    public flightService: FlightSearchService) { }


  booking:any

  ngOnInit(): void {
    this.fetchBookingDetails(this.route.snapshot.params['id']);  
  }


  fetchBookingDetails(id: any){
    this.bookingService.fetchBookingDetails(id).subscribe(
      (res: any)=>{
        this.booking = res;
        this.paymentService.form.controls['booking'].setValue(this.booking);      
        console.log('Booking : '+this.booking);
        return this.booking;
      },
      error=>{
        return error;
      }
    )
  }

  makePayment(){
    this.paymentService.makePayment(this.paymentService.form.value).subscribe(
      (success: any)=>{
        this.notificationService.success("payment made successfully.")  
        this.router.navigate(['/user']);     
        return success;
      },
      (error:any)=>{
        return error;
      }
    )
  }

}
