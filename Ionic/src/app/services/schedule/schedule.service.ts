import { Injectable } from '@angular/core';
import { BookingService } from '../booking/booking.service';
import { EmployeeService } from '../employee/employee.service';
import { VenueService } from '../venue/venue.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  //Need to add lesson plan, and possibly a date_session service - to manage all that
  constructor(public venueService: VenueService, public bookingService: BookingService, public employeeService: EmployeeService ) { }
}
