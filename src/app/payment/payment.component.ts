import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public paymentService: PaymentService,
    public notificationService: NotificationService,
    public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.paymentService.makePayment(this.paymentService.form.value).subscribe(
      (success: any)=>{
        this.notificationService.success("payment made successfully.")
        this.router.navigate(['/bookings'])
        return success;
      },
      (error:any)=>{
        return error;
      }
    )
  }

}
