import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { server_url } from '../app.constant';
import { Booking } from '../models/Booking.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  form: FormGroup = new FormGroup({
    id:new FormControl(null),
    amount: new FormControl('', [Validators.required]),
    payment_method: new FormControl('', [Validators.required]),
    payment_gateway: new FormControl('', [Validators.required]),
    booking: new FormControl(new Booking),  
    
   });

  constructor(private http: HttpClient) { }

  makePayment(payment:any){
    return this.http.post(server_url+`/payment`,payment);
  }
}
