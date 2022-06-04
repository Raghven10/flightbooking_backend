import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../models/Booking.model';
import { BookingService } from '../service/booking.service';
import { NotificationService } from '../service/notification.service';


@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.css']
})
export class SearchTicketComponent implements OnInit {

  bookings!:Booking[];
  ticket!: Booking
  tickets! : Booking[];
  selectedRole!:any
  
  constructor( 
    public bookingService: BookingService,
    public notificationService: NotificationService,
    public router: Router
    ) { }


  ngOnInit(): void {  
   this.selectedRole = sessionStorage.getItem('selectedRole');
  }

  searchTicketByPnr(){     
        this.router.navigate(['ticket/detail/',this.bookingService.ticketSearchFormPnr.controls['pnr'].value]);      
  };

  searchTicketByEmail(){
    this.bookingService.fetchBookingDetailsByEmailId(this.bookingService.form2.controls['email'].value).subscribe(
      res=>{
        this.tickets = res
        console.log(this.tickets)
        return this.tickets;
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
