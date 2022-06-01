import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpIntercepterService } from './service/security/http-intercepter.service';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    SearchTicketComponent,
    HomeComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,  
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass:HttpIntercepterService,multi:true,},
    { provide: DatePipe, useValue: undefined },
   {provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }},
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
