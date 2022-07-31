import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BookingType } from 'src/app/models/booking-type';
import { Employee } from 'src/app/models/employee';
import { Schedule } from 'src/app/models/schedule';
import { Venue } from 'src/app/models/venue';
import { GlobalService } from 'src/app/services/global/global.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { DatePipe, Time } from '@angular/common';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.scss'],
})



export class UpdateScheduleComponent implements OnInit {
  @Input() schedule: Schedule;

  uCalendarForm: FormGroup = this.formBuilder.group({
    dateSelector: [, [Validators.required]],
    timeStartSelector: [, [Validators.required]],
    timeEndSelector: [,[Validators.required]],
    venueDrop : ['', [Validators.required]],
    bookingTypeDrop : ['', [Validators.required]],
    employeeDrop : ['', [Validators.required]]
  });

  defaultDate = Date.now();//Need to recieve this as input from schedule
  dateSelect: any;
  timeStart: Time;
  timeEnd: Time;

  venueList!: Venue[];
  bookingTypeList!: BookingType[];
  employeeList!: Employee[];
  lessonPlan!: any; // Update to lesson plan model

  constructor(public formBuilder: FormBuilder, public scheduleService: ScheduleService, public modalCtrl:ModalController, public global: GlobalService) { }

  ngOnInit() {
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
    if (!this.uCalendarForm.valid){
      console.log(this.uCalendarForm.value);
      console.log('Please provide all required fields');
      return false;
    }
    else
    {
      //var datePipe = new DatePipe('en');
      var dateTemp = new Date(this.uCalendarForm.value['dateSelector']);
      var timeS = new Date(this.uCalendarForm.value['timeStartSelector']);
      var timeE = new Date(this.uCalendarForm.value['timeEndSelector']);

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
        venueID:this.uCalendarForm.value['venueDrop'].split(',')[0],
        bookingTypeID:this.uCalendarForm.value['bookingTypeDrop'].split(',')[0],
        employeeID:this.uCalendarForm.value['employeeDrop'].split(',')[0]
      };
      console.log(temp);
      this.global.dismissModal();
      this.scheduleService.confirmScheduleModal(1,temp,this.uCalendarForm.value['venueDrop'].split(',')[1],this.uCalendarForm.value['bookingTypeDrop'].split(',')[1],this.uCalendarForm.value['employeeDrop'].split(',')[1]);
    }
   }

}
