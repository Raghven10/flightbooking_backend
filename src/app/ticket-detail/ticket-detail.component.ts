import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/Booking.model';
import { BookingService } from '../service/booking.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket:any
  bookings!: Booking[]

  constructor(public bookingService: BookingService,
    public notificationService: NotificationService,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.getBookingDetails(this.route.snapshot.params['id']);    
  }

  getBookingDetails(id:any){
    this.bookingService.fetchBookingDetails(id).subscribe(
      res=>{
        this.ticket = res;
        if (this.ticket===null){
          this.notificationService.warn("::Error- No ticket found with PNR ( "+id+" )");
          this.router.navigate(['/ticket/search'])
        }
        console.log("Ticket: "+this.ticket)
      },
      error=>{
        console.log(error);
        this.notificationService.warn("::Error- Details couldn't be fetched! Please try again.")
      }
    )
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
  }

}
