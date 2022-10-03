import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalController, ViewWillEnter } from '@ionic/angular';
import { BookingType } from 'src/app/models/booking-type';
import { Employee } from 'src/app/models/employee';
import { Schedule } from 'src/app/models/schedule';
import { Venue } from 'src/app/models/venue';
import { GlobalService } from 'src/app/services/global/global.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { Time } from '@angular/common';
import { Lesson } from 'src/app/models/lesson';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.scss'],
})

export class UpdateScheduleComponent implements ViewWillEnter {

  @Input() schedule: any; // Not of type Schedule, type Event added to the calendar

  uCalendarForm: UntypedFormGroup = this.formBuilder.group({
    dateSelector: [, [Validators.required]],
    timeStartSelector: [, [Validators.required]],
    timeEndSelector: [,[Validators.required]],
    schedulePrice: [, [Validators.required, Validators.min(1)]],
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

  somethingChanged: Boolean = false;
  //Display old times before update
  sDate: Date = null;
  sTime: Time = null;
  eTime: Time = null;

  constructor(public formBuilder: UntypedFormBuilder, public scheduleService: ScheduleService, public modalCtrl:ModalController, public global: GlobalService) {
  this.fetchData();
  }

  ionViewWillEnter(): void {
    this.fetchData();
    this.setForm();
  }
  get errorControl() {
    return this.uCalendarForm.controls;
  }

  setForm(){
    this.sDate = this.schedule.startTime;
    this.sTime = this.schedule.startTime;
    this.eTime = this.schedule.endTime;

    this.uCalendarForm.get('schedulePrice').setValue(this.schedule.bookingPriceHistory[this.schedule.bookingPriceHistory.length-1].amount);
    const venueID = this.schedule.venue.venueID;
    const venueName = this.schedule.venue.name;
    this.uCalendarForm.get('venueDrop').setValue(`${venueID},${venueName}`);
    const bookingTypeID = this.schedule.bookingType.bookingTypeID;
    const bookingTypeName = this.schedule.bookingType.name;
    this.uCalendarForm.get('bookingTypeDrop').setValue(`${bookingTypeID},${bookingTypeName}`);
    const employeeID = this.schedule.employee.employeeID;
    const employeeName = this.schedule.employee.appUser.firstName;
    this.uCalendarForm.get('employeeDrop').setValue(`${employeeID},${employeeName}`);
    const lessonID = this.schedule.lesson.lessonID;
    const lessonName = this.schedule.lesson.name;
    this.uCalendarForm.get('lessonDrop').setValue(`${lessonID},${lessonName}`);
  }

   fetchData(){
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
        console.log(this.bookingTypeList);
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
    //this.setForm();
  }

  ngOnInit() {
    this.fetchData();
  }

  submitForm() {
      var dateVal = this.uCalendarForm.value['dateSelector'];
      var dateSend: Date = null;
      var timeSVal = this.uCalendarForm.value['timeStartSelector'];
      var timeSSend: Date = null;
      var timeEVal = this.uCalendarForm.value['timeEndSelector'];
      var timeESend: Date = null;


    if (timeSVal == undefined){
      //Old Time Start in update
      console.log("no timeS Defined, use old one");
      if (dateVal == undefined){
        //Old time start and old date
        console.log("no new Date Defined, use old timeS fully");
        timeSSend = new Date(this.schedule.startTime);
      } else {
        //Old time start with new date
        console.log("new date but no change in time, update timeS date");
        timeSSend = new Date(this.schedule.startTime);
        dateSend = new Date(dateVal);
        timeSSend.setDate(dateSend.getDate());
        timeSSend.setMonth(dateSend.getMonth());
        timeSSend.setFullYear(dateSend.getFullYear());
        //this.somethingChanged = true;
      }
    } else {
      //New time start in update
      //this.somethingChanged = true;
      console.log("new timeS, check if date changed");
      if (dateVal == undefined){
        //New time start but old date
        console.log("no new Date Defined, use old timeStart date");
        dateSend = new Date(this.schedule.startTime);
        timeSSend = new Date(timeSVal);
        timeSSend.setDate(dateSend.getDate());
        timeSSend.setMonth(dateSend.getMonth());
        timeSSend.setFullYear(dateSend.getFullYear());

      } else {
        //New time start with new date
        console.log("new date and new timeS, update timeS to match");
        timeSSend = new Date(timeSVal);
        dateSend = new Date(dateVal);
        timeSSend.setDate(dateSend.getDate());
        timeSSend.setMonth(dateSend.getMonth());
        timeSSend.setFullYear(dateSend.getFullYear());
      }
    }

    //Updating timeEnd
    if (timeEVal == undefined){
      //Old Time End in update
      console.log("no timeE Defined, use old one");
      if (dateVal == undefined){
        //Old time end and old date
        console.log("no new Date Defined, use old timeE fully");
        timeESend = new Date(this.schedule.endTime);
      } else {
        //Old time end with new date
        console.log("new date but no change in timeE, update timeE date");
        timeESend = new Date(this.schedule.endTime);
        dateSend = new Date(dateVal);
        timeESend.setDate(dateSend.getDate());
        timeESend.setMonth(dateSend.getMonth());
        timeESend.setFullYear(dateSend.getFullYear());
        //this.somethingChanged = true;
      }
    } else {
      //New time end in update
      //this.somethingChanged = true;
      console.log("new timeE, check if date changed");
      if (dateVal == undefined){
        //New time end but old date
        console.log("no new Date Defined, use old timeEnd date");
        dateSend = new Date(this.schedule.endTime);
        timeESend = new Date(timeEVal);
        timeESend.setDate(dateSend.getDate());
        timeESend.setMonth(dateSend.getMonth());
        timeESend.setFullYear(dateSend.getFullYear());

      } else {
        //New time end with new date
        console.log("new date and new timeE, update timeE to match");
        timeESend = new Date(timeEVal);
        timeESend = new Date(dateVal);
        timeESend.setDate(dateSend.getDate());
        timeESend.setMonth(dateSend.getMonth());
        timeESend.setFullYear(dateSend.getFullYear());
      }
    }

    if (timeESend < timeSSend) {
      this.global.showAlert("Please ensure the ending time is after the starting time","Time range error");
      return false;
    }

      var bphTemp: any = [{
        amount: Number(this.uCalendarForm.controls['schedulePrice'].value)
      }];

      if (bphTemp[0].amount != this.schedule.bookingPriceHistory[this.schedule.bookingPriceHistory.length-1].amount){
        console.log("Different price in duplicate");
        //this.somethingChanged = true;//Unsure about this
      }
      console.log(Number(this.uCalendarForm.controls['schedulePrice'].value));
      console.log("BookingPrice: ",bphTemp[0].amount);
      console.log(this.schedule.bookingPriceHistory[this.schedule.bookingPriceHistory.length-1].amount);
      // if (bphTemp[0].amount === this.schedule.bookingPriceHistory[this.schedule.bookingPriceHistory.length-1].amount){
      //   console.log(this.schedule.bookingPriceHistory[this.schedule.bookingPriceHistory.length-1].amount);
      //   this.global.showAlert("No price change on schedule update");
      //   console.log("setting price to null so it doesn't make a new price history record");
      //   bphTemp = null;
      // }

      var temp: Schedule = {
        startDateTime:timeSSend,
        endDateTime: timeESend,
        bookingAttendance: null,
        bookingPriceHistory: bphTemp,
        venueID:this.uCalendarForm.value['venueDrop'].split(',')[0],
        bookingTypeID:this.uCalendarForm.value['bookingTypeDrop'].split(',')[0],
        employeeID:this.uCalendarForm.value['employeeDrop'].split(',')[0],
        lessonID: this.uCalendarForm.value['lessonDrop'].split(',')[0]
      };
      if (this.schedule.venue.venueID != temp.venueID){
        this.somethingChanged = true;
        console.log("VenueID changed");
        console.log("Old venueID:",this.schedule.venue.venueID);
        console.log("New venueID:",temp.venueID);
      } else if (this.schedule.employee.employeeID != temp.employeeID){
        this.somethingChanged = true;
        console.log("EmployeeID changed");
        console.log("Old employeeID:",this.schedule.employee.employeeID);
        console.log("New venueID:",temp.employeeID);
      } else {
        var oldStartTime = new Date(this.schedule.startTime);
        var oldEndTime = new Date(this.schedule.endTime);
        console.log("oldStartTime:", oldStartTime);
        console.log("newStartTime:", timeSSend);
        console.log("oldEndTime:", oldEndTime);
        console.log("newEndTime:", timeESend);

        if (oldEndTime < timeSSend){
          //Old ends before duplicate starts
          console.log("Old end time is before new duplicated start time");
          this.somethingChanged = true;
        }
        if (timeESend < oldStartTime){
          //Old starts after duplicate ends
          console.log("Old start time is after new duplicated end time");
          this.somethingChanged = true;
        }
      }

      if (this.somethingChanged == false){
        this.global.showAlert("Please ensure the duplicated event is unique: <br> different venue, employee or time range","Unable to duplicate event");
        return false;
      }
      console.log(temp);
      this.global.dismissModal();
      this.scheduleService.confirmScheduleModal(2,temp,
      this.uCalendarForm.value['venueDrop'].split(',')[1],
      this.uCalendarForm.value['bookingTypeDrop'].split(',')[1],
      this.uCalendarForm.value['employeeDrop'].split(',')[1],
      this.uCalendarForm.value['lessonDrop'].split(',')[1]);
   }

   dateSelected(){
    this.sDate = this.dateSelect;
   }

  startSelected(){
    this.sTime = this.timeStart;
  }
   endSelected(){
    this.eTime = this.timeEnd;
   }
}
