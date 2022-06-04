import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { AddressComponent } from './address/address.component';
import { AdminComponent } from './admin/admin.component';
import { AirlineAllComponent } from './airline-all/airline-all.component';
import { AirlineComponent } from './airline/airline.component';
import { AirportListComponent } from './airport-list/airport-list.component';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { FlightAddComponent } from './flight-add/flight-add.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { LoginComponent } from './login/login.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { AdminUrlGuardService } from './service/security/admin-url-guard.service';
import { RouteGuardService } from './service/security/route-guard.service';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketsAllComponent } from './tickets-all/tickets-all.component';
import { UserAuthorisedComponent } from './user-authorised/user-authorised.component';

const routes: Routes = [
  { path: '', redirectTo: 'search-flight', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent },  
  { path: 'search-flight', component: FlightSearchComponent }, 
  { path: 'ticket/detail/:id', component: TicketDetailComponent},
  { path: 'ticket/search', component: SearchTicketComponent},

  {path: 'user', component: UserAuthorisedComponent, canActivate: [RouteGuardService],
    children: [  
      { path: '', component: ManageBookingComponent },  
      { path: 'booking/address/:id', component: AddressComponent }, 
      { path: 'ticket/search', component: SearchTicketComponent},  
      { path: 'search-flight', component: FlightSearchComponent },    
      { path: 'manage-booking', component: ManageBookingComponent },
      { path: 'booking/payment/:id', component: PaymentComponent  },
      { path: 'booking/:id', component: BookingComponent},
    ]
  },

  {path: 'admin', component: AdminComponent, canActivate: [AdminUrlGuardService],
    children: [  
      {path: '', component: AirlineComponent}, 
      {path: 'flight/new', component: FlightAddComponent}, 
      {path: 'flight/all', component: FlightSearchComponent}, 
      {path: 'ticket/all', component: TicketsAllComponent}, 
      {path: 'ticket/search', component: SearchTicketComponent},        
      {path: 'airline', component: AirlineComponent},
      {path: 'airport/all', component: AirportListComponent},
      {path: 'airport/new', component: AddAirportComponent},
      {path: 'airlines/all', component: AirlineAllComponent},  
    ]
  },
  {path: '**', component: Error404Component}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
