import { Time } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingType } from 'src/app/models/booking-type';
import { Employee } from 'src/app/models/employee';
import { Venue } from 'src/app/models/venue';
import { GlobalService } from 'src/app/services/global/global.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { DatePipe } from '@angular/common';
import { Schedule } from 'src/app/models/schedule';

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
    startTime: null,
    endTime: null
  }

  modalReady = false;

  constructor(public global:GlobalService, public formBuilder: FormBuilder, public scheduleService: ScheduleService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);

    this.scheduleService.venueService.getAllVenues().subscribe({
      next: (data) => {
        this.venueList = data.result;
        console.log("Venues:");
        console.log(data);
      }
    });

    this.scheduleService.bookingService.getAllBookingTypes().subscribe({
      next: (data) => {
        this.bookingTypeList = data.result;
        console.log("Booking Types:");
        console.log(data);
      }
    });

    this.scheduleService.employeeService.getAllEmployees().subscribe({
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
      //var datePipe = new DatePipe('en');
      var dateTemp = new Date(this.cCalendarForm.value['dateSelector']);
      var timeS = new Date(this.cCalendarForm.value['timeStartSelector']);
      var timeE = new Date(this.cCalendarForm.value['timeEndSelector']);

      //var date = datePipe.transform(dateTemp,'dd/MM/yyyy');//formatted for display

      timeS.setDate(dateTemp.getDate());
      timeE.setDate(dateTemp.getDate());
      timeS.setMonth(dateTemp.getMonth());
      timeE.setMonth(dateTemp.getMonth());
      timeS.setFullYear(dateTemp.getFullYear());
      timeE.setFullYear(dateTemp.getFullYear());
      var temp: Schedule = {
        dateSession :{
          startDateTime:timeS,
          endDateTime: timeE
        },
        bookingAttendance: null,
        venueID:this.cCalendarForm.value['venueDrop'].split(',')[0],
        bookingTypeID:this.cCalendarForm.value['bookingTypeDrop'].split(',')[0],
        employeeID:this.cCalendarForm.value['employeeDrop'].split(',')[0]
      };
      console.log(temp);
      this.global.dismissModal();
      this.scheduleService.confirmScheduleModal(1,temp,this.cCalendarForm.value['venueDrop'].split(',')[1],this.cCalendarForm.value['bookingTypeDrop'].split(',')[1],this.cCalendarForm.value['employeeDrop'].split(',')[1]);
    }
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
