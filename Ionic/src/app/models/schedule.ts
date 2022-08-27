import { BookingType } from "./booking-type";
import { Venue } from "./venue";

export class Schedule {
    scheduleID?: number;
    startDateTime: Date;
    endDateTime: Date;
    bookingAttendance?: [];
    venueID?: number;
    venue?: Venue;
    bookingTypeID?: number;
    bookingType?:BookingType;
    lessonID?: number;
    lesson?: {
      lessonID?: number;
      name?: string;
    };
    employeeID?: number;
    employee?:any;
}
