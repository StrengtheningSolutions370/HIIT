import { BookingType } from "./booking-type";
import { Venue } from "./venue";

export class Schedule {
    scheduleID?: number;
    startDateTime: any;
    endDateTime: any;
    bookingAttendance?: [{
      attended?: boolean;
      bookingAttendanceID?: number;
    }];
    venueID?: number;
    venue?: Venue;
    bookingTypeID?: number;
    bookingType?:BookingType;
    lessonID?: number;
    bookingPriceHistory? :[{
      bookingPriceHistoryID?: number,
      date?: Date;
      amount:number;
    }]
    lesson?: {
      lessonID?: number;
      name?: string;
    };
    employeeID?: number;
    employee?:any;
}
