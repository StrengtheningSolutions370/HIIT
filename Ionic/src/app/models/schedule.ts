import { BookingType } from "./booking-type";
import { Venue } from "./venue";

export class Schedule {
    scheduleID?: number;
    dateSession: {
      startDateTime: Date;
      endDateTime: Date;
    };
    bookingAttendance: [];
    venueID?: number;
    venue?: Venue;
    bookingTypeID?: number;
    bookingType?:BookingType;
    lessonPlanID?: number;
    lessonPlan?: {};
    employeeID?: number;
}
