import { Component, OnInit } from '@angular/core';
import { Airline } from '../models/Airline.model';
import { AirlineService } from '../service/airline.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {

  constructor(public airlineService: AirlineService, public notificationService: NotificationService) { }

  ngOnInit(): void {
  }

 

  registerAirline(){
    this.airlineService.registerAirline(this.airlineService.form.value).subscribe(
      res=>{
        this.notificationService.success("Airline registered successfully!");
      },
      error=>{
        this.notificationService.success("Oops, Airline couldn't be registered!");
      }
    )
  };

}
