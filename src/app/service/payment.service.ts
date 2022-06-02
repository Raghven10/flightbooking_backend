import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { server_url } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  form: FormGroup = new FormGroup({
    id:new FormControl(null),
    amount: new FormControl('', [Validators.required]),
    payment_method: new FormControl('', [Validators.required]),
    payment_gateway: new FormControl('', [Validators.required]),
    booking_id: new FormControl(),  
    
   });

  constructor(private http: HttpClient) { }

  makePayment(payment:any){
    return this.http.post(server_url+`/payment`,payment);
  }
}
