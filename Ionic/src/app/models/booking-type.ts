import {Schedule} from './schedule'
export class BookingType {
  bookingTypeID?: number;
  name: string;
  description: string;
  capacity: number;
  colour: string;
  schedule?: Schedule[];
  bookingPriceHistory?: [{
    bookingPriceID?:number,
    date?:Date,
    amount:number;
  }];
}
