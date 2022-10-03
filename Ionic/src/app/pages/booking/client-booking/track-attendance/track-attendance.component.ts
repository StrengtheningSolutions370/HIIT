import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { GlobalService } from 'src/app/services/global/global.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';

@Component({
  selector: 'app-track-attendance',
  templateUrl: './track-attendance.component.html',
  styleUrls: ['./track-attendance.component.scss'],
})
export class TrackAttendanceComponent implements OnInit {

  @Input() schedule: Schedule;

  attendanceList = [];

  constructor(public global: GlobalService, public scheduleService: ScheduleService) {


  }

  ngOnInit() {
    console.log(this.schedule);
    this.createArr();
  }

  createArr(){
    for (let i=0; i< this.schedule.bookingAttendance.length; i++){
      let checked: boolean = this.schedule.bookingAttendance[i].attended;
      this.attendanceList.push({bookingAttendanceID: this.schedule.bookingAttendance[i].bookingAttendanceID, attended: checked});
    }
  }
  confirmChanges(){
    console.log(this.attendanceList);
    this.scheduleService.trackAttendance(this.attendanceList);
    this.global.dismissModal();
    location.reload();
  }

}
