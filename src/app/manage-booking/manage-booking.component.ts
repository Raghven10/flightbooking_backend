import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../service/booking.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.css']
})
export class ManageBookingComponent implements OnInit {

  constructor(
    public bookingService: BookingService,
    public router: ActivatedRoute,
    public notification: NotificationService
  ) { }

  bookings:any = []
  ngOnInit(): void {
    this.fetchUserBookings();
  }

  fetchUserBookings(){
    this.bookingService.fetchMyBookings().subscribe(
      success=>{
        this.bookings = success
        return success;
      },
      error=>{
        return error;
      }
     
    )
  }

  cancelBooking(id: any){
    this.bookingService.cancelBooking(id).subscribe(
      success=>{
        this.notification.success("Booking Cancelled successfully!");
       
      },
      error=>{
        this.notification.warn("::Error - Booking not Cancelled!")
      }
    )

  }

}
