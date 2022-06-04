import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Flights } from '../models/Flights.model';
import { FlightSearchService } from '../service/flight-search.service';
import { NotificationService } from '../service/notification.service';
import { BasicAuthService } from '../service/security/basic-auth.service';


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [DatePipe],
})

export class FlightSearchComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  constructor(
    public flightService:FlightSearchService,
    public datePipe: DatePipe,
    public dialog: MatDialog,
    public authService: BasicAuthService,
    public notificationService: NotificationService,
    private router: Router
  ) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear,currentMonth + 2, 31);
   }

  airports: any = [];
  flights: any = [];
  displayedColumns: string[] = ['airline', 'origin', 'destination', 'seats', 'action'];
  dataSource!: MatTableDataSource<any>;
  origin: string ='';
  destination: string ='';
  dof: Date = new Date();
  minDate: Date;
  maxDate: Date;
  selectedRole! : any




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.selectedRole = sessionStorage.getItem('selectedRole');
    this.getAllAirports();
    this.getAllFlights();
  }

  getAllAirports(){
    this.flightService.getAirportList().subscribe(res=>{
      this.airports = res;
      console.log(this.airports);
      return this.airports;      
    })
  }

  getAllFlights(){
    this.flightService.getAllFlightsList().subscribe(list => {
      let array = list.map
      ((item) =>{return { item };});
    this.dataSource = new MatTableDataSource(array);
    this.flights = list;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}


bookTicket(id: any){  
  
  if(this.authService.isUserLoggedIn()){
    this.router.navigate(['/user/booking', id]); 
  }
  else{
    this.notificationService.warn("Please Log In first in order to book a flight!")
    this.router.navigate(['/login', id]); 
  }
  
}


onSubmit() {

  let a = this.flightService.form.controls['origin'].value;
  let b= this.flightService.form.controls['destination'].value;
  let c = this.flightService.form.controls['dateOfFlight'].value;

  console.log(a,b,c)
  this.flightService.searchFlights(a,b,c)
    .subscribe(
      data => {
       
       if (data.length!== 0){
        this.flights = data;  
        this.flightService.form.reset();
       } 
       else{
        this.flights = data; 
        this.notificationService.warn('::No Flights on this day on this route!');
        this.flightService.form.reset();
        this.getAllFlights();
       }                
      },
      error=>{
        this.notificationService.warn(':: Oops! Remote servers are seems to be down!! '); 
        this.flightService.form.reset();
        
        return error;

      }
    );
};


}
