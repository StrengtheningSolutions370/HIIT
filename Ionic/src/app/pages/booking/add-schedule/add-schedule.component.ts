import { Time } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingType } from 'src/app/models/booking-type';
import { Employee } from 'src/app/models/employee';
import { Venue } from 'src/app/models/venue';
import { BookingService } from 'src/app/services/booking/booking.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { VenueService } from 'src/app/services/venue/venue.service';
import { Platform } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss'],
})
export class AddScheduleComponent implements AfterViewInit {


  venueList!: Venue[];
  bookingTypeList!: BookingType[];
  employeeList!: Employee[];
  lessonPlan!: any; // Update to lesson plan model

  defaultDate = Date.now();//Need to recieve this as input from schedule

  cCalendarForm: FormGroup = this.formBuilder.group({
    dateSelector: [, [Validators.required]],
    timeStartSelector: [, [Validators.required]],
    timeEndSelector: [,[Validators.required]],
    venueDrop : ['', [Validators.required]],
    bookingTypeDrop : ['', [Validators.required]],
    employeeDrop : ['', [Validators.required]]
  });

  datePipe: DatePipe;
  dateSelect: any;
  timeStart: Time;
  timeEnd: Time;

  minDate: string = Date.toString();


  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  viewTitle: string;

  event = {
    title: '',
    description: '',
    startTime: null,
    endTime: '',
    allDay: true
  }

  modalReady = false;

  constructor(public global:GlobalService, private venueService: VenueService, private bookingService: BookingService, private employeeService: EmployeeService,
  public formBuilder: FormBuilder, public scheduleService: ScheduleService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);

    this.venueService.getAllVenues().subscribe({
      next: (data) => {
        this.venueList = data.result;
        console.log("Venues:");
        console.log(data);
      }
    });

    this.bookingService.getAllBookingTypes().subscribe({
      next: (data) => {
        this.bookingTypeList = data.result;
        console.log("Booking Types:");
        console.log(data);
      }
    });

    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employeeList = data;
        console.log("Employees:");
        console.log(data);
      }
    });



    // //Disable weekends script
    // const datetime = document.querySelector('ion-datetime');
    // datetime.isDateEnabled = (dateString) => {
    //   const date = new Date(dateString);
    //   const utcDay = date.getUTCDay();

    //   /**
    //    * Date will be enabled if it is not
    //    * Sunday or Saturday
    //    */
    //   return utcDay !== 0 && utcDay !== 6;
    //}
  }

  submitForm() {
    if (!this.cCalendarForm.valid){
      console.log(this.cCalendarForm.value);
      console.log('Please provide all required fields');
      return false;
    }
    else
    {
      var datePipe = new DatePipe('en');
      let dateTemp:Date = this.cCalendarForm.value['dateSelector'];
      let date = datePipe.transform(dateTemp,'DD/MM');
      let timeStemp:Date = this.cCalendarForm.value['timeStartSelector'];
      let timeS = timeStemp.toTimeString;
      let timeEtemp:Date = this.cCalendarForm.value['timeEndSelector'];
      let timeE = timeEtemp.toTimeString;
      var temp: any = {
        date,
        timeS,
        timeE,
        Venue:this.cCalendarForm.value['venueDrop'],
        BookingType:this.cCalendarForm.value['bookingTypeDrop'],
        Employee:this.cCalendarForm.value['employeeDrop']
      };
      console.log(temp);
      // this.global.dismissModal();
      // this.bookingService.confirmBookingTypeModal(1,temp);
    }
   }

  save(){
    let tempVal = this.global.dismissModal({event: this.event})
    console.log(tempVal);
  }

  dateSelected(){
    console.log(this.dateSelect);
    console.log(this.cCalendarForm.get('dateSelector'));
  }

  timeStartSelected(){
    console.log(this.timeStart);
    console.log(this.cCalendarForm.get('timeStartSelector'));
  }

  timeEndSelected(){
    console.log(this.timeEnd);
    console.log(this.cCalendarForm.get('timeEndSelector'));
  }
}
