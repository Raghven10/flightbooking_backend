import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { server_url } from '../app.constant';
import { Booking } from '../models/Booking.model';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  date: Date = new Date();
 
 
  form: FormGroup = new FormGroup({    
    pnr_id: new FormControl(''),
    noOfSeatsBooked: new FormControl(''),  
    flight: new FormControl('')   
        
  });

  ticketSearchFormPnr: FormGroup = new FormGroup({
    pnr: new FormControl('')
  });

  form2: FormGroup = new FormGroup({
    email: new FormControl('')
  });

  
  initializeFormGroup() {
    this.form.setValue({
      pnr_id: '',
      noOfSeatsBooked: '',
      flight: ''
    })}


  bookSeat(booking:any){
    return this.http.post(server_url+`/create-booking`,booking);
  }

  fetchMyBookings(){
    return this.http.get<Booking[]>(server_url+`/user-bookking-all`)

  }

  fetchBookingDetails(pnr: any){
    return this.http.get<Booking>(server_url+`/api/v1.0/flight/ticket/${pnr}`)

  }

  fetchBookingDetailsByEmailId(email: any){
    return this.http.get<Booking[]>(server_url+`/api/v1.0/flight/booking/history/${email}`)

  }

  cancelBooking(booking: any){
    return this.http.get(server_url+`/api/v1.0/flight/booking/cancel/${booking}`)

  }

}
