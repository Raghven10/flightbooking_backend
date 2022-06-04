import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airport } from '../models/Airport.model';
import { AirportService } from '../service/airport.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {

  airports!: Airport[]

  constructor(
    private router: Router,
    private notification: NotificationService,
    private airpotService: AirportService
  ) { }


  ngOnInit(): void {
    this.getAllAirports();
  }

  getAllAirports(){
    this.airpotService.getAllAirports().subscribe(
      res=>{
        this.airports = res;
      },
      error=>{
        return error;
      }
    )
  }

  deleteAirport(id: any){
    this.airpotService.deleteAirport(id).subscribe(
      res=>{
        this.notification.success('Deleted successfully!');
        this.getAllAirports();
      },
      error=>{
        this.notification.success('::Error: Could not be deleted!');
        this.getAllAirports();
      }
    )

  }

}
