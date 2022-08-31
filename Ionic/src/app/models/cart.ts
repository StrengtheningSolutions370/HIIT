import { SaleItem } from "./sale-item";
import { Schedule } from "./schedule";

export class saleLine {
    saleItemID: number;
    saleItem?: SaleItem;
    quantityChange?: number;

}
export class bookingLine {
    scheduleID: number;
    schedule?: Schedule;
}

export class Cart {
    public userId: string;
    public paymentTypeId: number;
    public sales?: saleLine[];
    public bookings?: bookingLine[];
}





