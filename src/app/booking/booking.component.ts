import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from '../service/address.service';
import { BookingService } from '../service/booking.service';
import { FlightSearchService } from '../service/flight-search.service';
import { PaymentService } from '../service/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class BookingComponent implements OnInit {

  flight: any;
  booked_flight: any;

  counter(i: number) {
    return new Array(i);
  }

  constructor(
    public bookingService: BookingService,
    public addressService: AddressService, 
    public paymentService: PaymentService,
    public flightService: FlightSearchService,
    private route: ActivatedRoute,
    private router: Router,
    public notificationService: NotificationService ) {}

  ngOnInit() {
    this.fetchFlightDetails(this.route.snapshot.params['id']);    
  }

  fetchFlightDetails(id: any){
    this.flightService.getFlightDetail(id).subscribe(
      success=>{
        this.flight = success;
        console.log(this.flight);
        return this.flightService;
      },
      error=>{
        return error;
      }
    )
  }

  bookSeat(){
    this.bookingService.bookSeat(this.bookingService.form.value).subscribe(
      success=>{
        
        this.booked_flight = success; 
        console.log('Booking_ID: '+this.booked_flight.pnr_id)               
      },
      error=>{
        return error;
      }
    )

  }

  saveAddress(){
    this.addressService.saveUserAddress(this.addressService.form.value).subscribe(
      success=>{
        this.notificationService.success("Address saved successfully. Now make payment and finlize your booking.")        
        return success;
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
        this.router.navigate(['/manage-booking']);     
        return success;
      },
      (error:any)=>{
        return error;
      }
    )
  }

}
