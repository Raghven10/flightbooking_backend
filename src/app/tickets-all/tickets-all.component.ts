import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../models/Booking.model';
import { BookingService } from '../service/booking.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-tickets-all',
  templateUrl: './tickets-all.component.html',
  styleUrls: ['./tickets-all.component.css']
})
export class TicketsAllComponent implements OnInit {

  bookings!: Booking[]
  constructor(
    private bookingService: BookingService,
    private router: Router,
    public notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.fetchUserBookings();
  }

  
  fetchUserBookings(){
    this.bookingService.fetchMyBookings().subscribe(
      success=>{
        this.bookings = success
        console.log(this.bookings)        
        return success;
      },
      error=>{
        return error;
      }
     
    )
  };

  getBookingDetails(id:any){   
    this.router.navigate(['ticket/detail/',id]);
  };

  cancelBooking(id: any){
    this.bookingService.cancelBooking(id).subscribe(
      res=>{
        this.notificationService.success("Ticked cancelled successfully.");
        window.location.reload();
      },
      error=>{
        this.notificationService.warn("::Error - Ticked could not be cancelled!")
      }
    )
  };

}
