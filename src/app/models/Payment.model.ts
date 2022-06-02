import { Booking } from "./Booking.model";

export class Payment{

    public id!: number;

    public amount!: number;

    public payment_method!: string;

    public payment_gateway!: string;

    public booking_id!: Booking;
}