import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { server_url } from '../app.constant';
import { Airline } from '../models/Airline.model';
import { Airport } from '../models/Airport.model';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  form: FormGroup = new FormGroup({
    id:new FormControl(null),
    name:new FormControl('',  [Validators.required]),
    code: new FormControl('', [Validators.required]),   
    state:new FormControl('', [Validators.required])    
   });

  constructor(private http: HttpClient) { }

  registerAirport(airport: any){
    return this.http.post(server_url+`/api/v1.0/flight/airport/register`, airport)
  }

  getAllAirports(){
    return this.http.get<Airport[]>(server_url+`/api/v1.0/flight/airport/all`)
  }

  deleteAirport(id:any){
    return this.http.delete(server_url+`/api/v1.0/flight/airport/delete/${id}`,id)
  }
}
