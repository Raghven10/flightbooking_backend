import { Booking } from "./Booking.model";
import { User } from "./User.model";

export class Address
{
    public id!: number;

    public street1!: String;
	
	
	public street2!: String;	
	
	public city!: String;	
	
	public pinCode!: String;	
	
	public state!: String;	
	
    public country!: String;

	public booking!: Booking;

	public appUser!: User;
}