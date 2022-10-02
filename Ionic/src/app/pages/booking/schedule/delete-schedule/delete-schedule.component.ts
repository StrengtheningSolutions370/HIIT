import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { GlobalService } from 'src/app/services/global/global.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-delete-schedule',
  templateUrl: './delete-schedule.component.html',
  styleUrls: ['./delete-schedule.component.scss'],
  providers: [DatePipe]
})
export class DeleteScheduleComponent implements OnInit {
  @Input() schedule: Schedule;
  constructor(public scheduleService: ScheduleService, public global: GlobalService) { }

  ngOnInit() {
    console.log("Delete schedule view:");
    console.log(this.schedule);
  }

  delete() {
    if (this.schedule.bookingAttendance.length > 0){
      this.global.showAlert("Clients have booked for this event","Unable to delete schedule event");
      this.global.dismissModal();
    } else {
      this.scheduleService.deleteScheduleEvent(this.schedule.scheduleID);
      this.global.dismissModal();
      this.global.showToast("The Schedule Event has been successfully deleted");
    }

  }

}
