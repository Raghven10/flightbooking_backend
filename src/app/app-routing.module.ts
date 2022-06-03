import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { LoginComponent } from './login/login.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { RouteGuardService } from './service/security/route-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'search-flight', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'address/:id', component: AddressComponent, canActivate: [RouteGuardService] },
  { path: 'manage-booking', component: ManageBookingComponent, canActivate: [RouteGuardService] },
  { path: 'payment/:id', component: PaymentComponent, canActivate: [RouteGuardService] },
  { path: 'booking/:id', component: BookingComponent, canActivate: [RouteGuardService]},
  { path: 'register', component: RegisterComponent },
  { path: 'search-ticket', component: SearchTicketComponent },
  { path: 'search-flight', component: FlightSearchComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
