import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from '../service/address.service';
import { BookingService } from '../service/booking.service';
import { FlightSearchService } from '../service/flight-search.service';
import { PaymentService } from '../service/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';
import { Booking } from '../models/Booking.model';
import { Flights } from '../models/Flights.model';

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

  details!: Flights;
  booked_flight!:any;

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
        this.details = success;
        this.bookingService.form.controls['flight'].setValue(this.details);
        console.log("Details: "+this.details);
        return this.details;
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
        let id = this.booked_flight.pnr_id;
        this.router.navigate(['/address', id]);              
      },
      error=>{
        return error;
      }
    )

  }

  

}
