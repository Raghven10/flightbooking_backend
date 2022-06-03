import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { server_url } from '../app.constant';
import { Booking } from '../models/Booking.model';
import { Flights } from '../models/Flights.model';

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

  fetchBookingDetails(id: any){
    return this.http.get<Booking>(server_url+`/booking-details/${id}`)

  }

  cancelBooking(booking: any){
    return this.http.post(server_url+`/cancel-booking`, booking)

  }

}
