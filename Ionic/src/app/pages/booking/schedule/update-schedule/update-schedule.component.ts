import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BookingType } from 'src/app/models/booking-type';
import { Employee } from 'src/app/models/employee';
import { Schedule } from 'src/app/models/schedule';
import { Venue } from 'src/app/models/venue';
import { GlobalService } from 'src/app/services/global/global.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { DatePipe, Time } from '@angular/common';
import { Lesson } from 'src/app/models/lesson';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.scss'],
})



export class UpdateScheduleComponent implements OnInit {
  @Input() schedule: Schedule;

  uCalendarForm: UntypedFormGroup = this.formBuilder.group({
    dateSelector: [, [Validators.required]],
    timeStartSelector: [, [Validators.required]],
    timeEndSelector: [,[Validators.required]],
    venueDrop : ['', [Validators.required]],
    bookingTypeDrop : ['', [Validators.required]],
    employeeDrop : ['', [Validators.required]],
    lessonDrop: ['',[Validators.required]]
  });

  //Dropdowns
  venueList!: Venue[];
  bookingTypeList!: BookingType[];
  employeeList!: Employee[];
  lessonList!: Lesson[];

  //Variable used to determine selection from user when adding a new event
  dateSelect: any;
  today: string = (new Date()).toISOString();
  timeStart: Time;
  timeEnd: Time;

  constructor(public formBuilder: UntypedFormBuilder, public scheduleService: ScheduleService, public modalCtrl:ModalController, public global: GlobalService) { }

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

    this.scheduleService.lessonService.getAllLessons().subscribe({
      next: (data) => {
        console.log("Lessons: ")
        console.log(data);
        this.lessonList = data;
      },
    })
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
        startDateTime:timeS,
        endDateTime: timeE,
        bookingAttendance: null,
        venueID:this.uCalendarForm.value['venueDrop'].split(',')[0],
        bookingTypeID:this.uCalendarForm.value['bookingTypeDrop'].split(',')[0],
        employeeID:this.uCalendarForm.value['employeeDrop'].split(',')[0],
        lessonID: this.uCalendarForm.value['lessonDrop'].split(',')[0]
      };
      console.log(temp);
      this.global.dismissModal();
      this.scheduleService.confirmScheduleModal(1,temp,
      this.uCalendarForm.value['venueDrop'].split(',')[1],
      this.uCalendarForm.value['bookingTypeDrop'].split(',')[1],
      this.uCalendarForm.value['employeeDrop'].split(',')[1],
      this.uCalendarForm.value['lessonDrop'].split(',')[1]);
    }
   }

}
