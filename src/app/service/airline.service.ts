import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { server_url } from '../app.constant';
import { Airline } from '../models/Airline.model';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

 
  form: FormGroup = new FormGroup({
    id:new FormControl(null),
    name:new FormControl(''),
    code: new FormControl('', [Validators.required]),   
    country:new FormControl('INDIA', [Validators.required]),
    operationType: new FormControl('', [Validators.required])   
    
   });

  constructor(private http: HttpClient) { }

  registerAirline(airline: any){
    return this.http.post(server_url+`/api/v1.0/flight/airline/register`, airline)
  }

  getAllAirlines(){
    return this.http.get<Airline[]>(server_url+`/api/v1.0/flight/airline/all`)
  }

  deleteAirline(id:any){
    return this.http.delete(server_url+`/api/v1.0/flight/airline/delete/${id}`,id)
  }
}
