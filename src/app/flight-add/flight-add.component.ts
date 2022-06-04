import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airport } from '../models/Airport.model';
import { AirlineService } from '../service/airline.service';
import { FlightSearchService } from '../service/flight-search.service';
import { FlightService } from '../service/flight.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-flight-add',
  templateUrl: './flight-add.component.html',
  styleUrls: ['./flight-add.component.css']
})
export class FlightAddComponent implements OnInit {


  airports!: any
  airlines!: any
  flights!: any
  minDate!: Date;
  maxDate!: Date;


  constructor(
    public flightService: FlightService,
    public flightSearchService: FlightSearchService,
    public airlineService: AirlineService,
    public router: Router,
    public notificationService: NotificationService) {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      this.minDate = new Date();
      this.maxDate = new Date(currentYear,currentMonth + 2, 31);
     }

  ngOnInit(): void {
    this.getAllAirlines();
    this.getAllAirports();
  }

  onSubmit(){
    this.flightService.registerNewFlight(this.flightService.form.value).subscribe(
      res=>{
        this.notificationService.success("Flight Data saved successfully");
        this.router.navigate(['/search-flight']);
      }
    )

  }

  getAllAirports(){
    this.flightSearchService.getAirportList().subscribe(res=>{
      this.airports = res;
      console.log(this.airports);
      return this.airports;      
    })
  }

  getAllFlights(){
    this.flightService.getAllFlights().subscribe(res=>{
      this.flights = res;
      console.log(this.flights);
      return this.flights;      
    })
  }

  getAllAirlines(){
    this.airlineService.getAllAirlines().subscribe(res=>{
      this.airlines = res;
      console.log(this.airlines);
      return this.airlines;      
    })
  }

}
