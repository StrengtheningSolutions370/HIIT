import { DatePipe, Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Schedule } from 'src/app/models/schedule';
import { GlobalService } from 'src/app/services/global/global.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';

@Component({
  selector: 'app-confirm-schedule',
  templateUrl: './confirm-schedule.component.html',
  styleUrls: ['./confirm-schedule.component.scss'],
})
export class ConfirmScheduleComponent implements ViewWillEnter{

  @Input() choice: number;
  @Input() scheduleEvent: Schedule;
  @Input() venueName: string;
  @Input() bookingTypeName: string;
  @Input() employeeName: string;
  //@Input() lessonPlanName: string;
  dateString: string;
  timeStart: string;
  timeEnd: string;


  finalStart: string;
  finalEnd: string;

  constructor(public global:GlobalService, public scheduleService: ScheduleService) { }

  ionViewWillEnter(): void {
    this.dateString = new Date(this.scheduleEvent.dateSession.startDateTime).toDateString();
    this.timeStart = new Date(this.scheduleEvent.dateSession.startDateTime).toLocaleTimeString();
    this.timeEnd = new Date(this.scheduleEvent.dateSession.endDateTime).toLocaleTimeString();
    console.log(this.dateString);
    console.log(this.timeStart);
    console.log(this.timeEnd);
    //this.finalStart = new Date(this.scheduleEvent.dateSession.timeStart).toISOString();
    //this.finalEnd = new Date(this.scheduleEvent.dateSession.timeEnd).toISOString();
    this.finalStart = (new Date (
      this.scheduleEvent.dateSession.startDateTime.getUTCFullYear(),
      this.scheduleEvent.dateSession.startDateTime.getUTCMonth(),
      this.scheduleEvent.dateSession.startDateTime.getUTCDate(),
      this.scheduleEvent.dateSession.startDateTime.getUTCHours()+4,
      this.scheduleEvent.dateSession.startDateTime.getUTCMinutes(),
    )).toISOString();
    this.finalEnd = (new Date (
      this.scheduleEvent.dateSession.endDateTime.getUTCFullYear(),
      this.scheduleEvent.dateSession.endDateTime.getUTCMonth(),
      this.scheduleEvent.dateSession.endDateTime.getUTCDate(),
      this.scheduleEvent.dateSession.endDateTime.getUTCHours()+4,
      this.scheduleEvent.dateSession.endDateTime.getUTCMinutes(),
    )).toISOString();
    console.log(this.finalStart);
    console.log(this.finalEnd);
  }
    //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(){
    console.log(this.choice);
    //need to update capacity booked and lessonPlan
    var final = {
      capacityBooked: 0,
      bookingAttendance : null,
      venueID: this.scheduleEvent.venueID,
      bookingTypeID: this.scheduleEvent.bookingTypeID,
      lessonPlanID: null,
      employeeID: this.scheduleEvent.employeeID,
      dateSession: {
        startDateTime: this.finalStart,
        endDateTime: this.finalEnd
        }
    }
            if (this.choice === 1){

              console.log('Add schedule Item from confirm:');
              console.log(this.scheduleEvent);
              //CallRepoToCreate
              this.scheduleService.createSchedule(final);
              this.global.dismissModal();
              this.global.showToast("The schedule event has been successfully added!");
            } else if (this.choice === 2){
              console.log('Update SCHEDULE EVENT - incomplete');
              //CallRepoToUpdate
              console.log(this.scheduleEvent);
              this.scheduleService.updateSchedule(final);
            this.global.dismissModal();
            this.global.showToast('The schedule event has been successfully updated!');
          }
  }

  async returnFrom(){
    //1 = return to ADD
    //2 = return to UPDATE
    if (this.choice === 1){
      this.global.dismissModal();
      this.scheduleService.addScheduleModal();
    } else if (this.choice === 2){
      this.global.dismissModal();
      //this.scheduleService.updateScheduleModal();
    }
  }

}
