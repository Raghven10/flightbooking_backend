import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { server_url } from '../app.constant';
import { Flights } from '../models/Flights.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }
  date: Date = new Date();
 
 
  form: FormGroup = new FormGroup({ 
    id: new FormControl(''),
    origin: new FormControl(''),
    destination: new FormControl(''),  
    dateOfFlight: new FormControl(this.date), 
    noOfSeats: new FormControl(''), 
    price: new FormControl(''),  
    timeOfFlight: new FormControl(this.date), 
    remarks: new FormControl(''), 
    airline: new FormControl(''), 
    });

    registerNewFlight(flight:any){
     return this.http.post(server_url+`/api/v1.0/flight/airline/inventory/add`,flight);
    }

    getAllFlights(){
      return this.http.get<Flights[]>(server_url+`/flights-all`);
    }


}


