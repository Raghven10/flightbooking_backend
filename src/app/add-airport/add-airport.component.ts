import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airport } from '../models/Airport.model';
import { AirportService } from '../service/airport.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.css']
})
export class AddAirportComponent implements OnInit {

  constructor(public airportService: AirportService, 
    public notificationService: NotificationService,
    public router: Router) { }

  airports!: Airport[]
  

  ngOnInit(): void {
  }

  registerAirport(){
    this.airportService.registerAirport(this.airportService.form.value).subscribe(
      res=>{
        this.notificationService.success("Airport registered successfully!");
        this.router.navigate(['/admin/airport/all']);
      },
      error=>{
        this.notificationService.success("Oops, Airport couldn't be registered!");
      }
    )
  }

}
