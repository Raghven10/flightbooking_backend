import { Airline } from "./Airline.model";

export class Flights{

    public id!: number;
    public origin!: string;
    public destination!: string;
    public dateOfFlight!: Date;	
    public noOfSeats!: number;
    public price!: number;
    public timeOfFlight!: Date;
    public remarks!: string;
    public airline!: Airline;
}