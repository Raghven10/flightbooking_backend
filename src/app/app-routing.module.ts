import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { RouteGuardService } from './service/security/route-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'booking', component: BookingComponent, canActivate: [RouteGuardService],},
  { path: 'register', component: RegisterComponent },
  { path: 'search-ticket', component: SearchTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
