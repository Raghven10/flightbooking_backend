import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { server_url } from '../app.constant';
import { Airport } from '../models/Airport.model'
import { Flights } from '../models/Flights.model';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  constructor(private http: HttpClient) { }
  date: Date = new Date();
 
 
  form: FormGroup = new FormGroup({    
    origin: new FormControl(''),
    destination: new FormControl(''),  
    dateOfFlight: new FormControl(this.date),   
  });



  getAirportList(){
    return this.http.get<Set<Airport>>(server_url+`/airports`);
  }

  getAllFlightsList(){
    return this.http.get<Flights[]>(server_url+`/flights-all`);
  }

  searchFlights(a:string , b:string,  c:Date): Observable<Flights[]>{

    let queryParams = new HttpParams();
    queryParams = queryParams.append("origin",a);
    queryParams = queryParams.append("destination",b);

    let date = new Date(c).toISOString();
    queryParams = queryParams.append("dateOfFlight", date);
   
    return this.http.get<Flights[]>(server_url+`/flight-search`,{params:queryParams})
    
  }

  searchFlightsOriginDest(a:string , b:string, c:Date): Observable<Flights[]>{

    let queryParams = new HttpParams();
    queryParams = queryParams.append("origin",a);
    queryParams = queryParams.append("destination",b);
    
   
    return this.http.get<Flights[]>(server_url+`/flight-search`,{params:queryParams})    
  }

  getFlightDetail(id:any){

    return this.http.get<Flights>(server_url+`/get-flight-detail/${id}`)

  }



  


 
}
