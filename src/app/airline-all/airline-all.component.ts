import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from '../models/Airline.model';
import { AirlineService } from '../service/airline.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-airline-all',
  templateUrl: './airline-all.component.html',
  styleUrls: ['./airline-all.component.css']
})
export class AirlineAllComponent implements OnInit {


  public airlines!: Airline[]

  constructor(
    private router: Router,
    private notification: NotificationService,
    private airlineService: AirlineService
    ) { }

  ngOnInit(): void {
    this.getAllAirlines();
  }

  getAllAirlines(){
    this.airlineService.getAllAirlines().subscribe(
      res=>{
        this.airlines = res;
      },
      error=>{
        return error;
      }
    )
  }

  deleteAirline(id: any){
    this.airlineService.deleteAirline(id).subscribe(
      res=>{
        this.notification.success('Deleted successfully!');
        this.getAllAirlines();
      },
      error=>{
        this.notification.success('::Error: Could not be deleted!');
        this.getAllAirlines();
      }
    )
  };

}
