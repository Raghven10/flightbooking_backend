import { Address } from "./Address.model";
import { Flights } from "./Flights.model";
import { Payment } from "./Payment.model";
import { User } from "./User.model";

export class Booking{

    public pnr_id!: number;

    public noOfSeatsBooked!: number;

    public status!: string;

    public appUser!: User;

    public address!: Address;

    public flight!: Flights;

    public payment!: Payment;


}