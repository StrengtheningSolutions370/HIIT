import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { Subscription } from 'rxjs';
import { Schedule } from 'src/app/models/schedule';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';


@Component({
  selector: 'app-client-booking',
  templateUrl: './client-booking.page.html',
  styleUrls: ['./client-booking.page.scss'],
})
export class ClientBookingPage implements AfterViewInit {
  public filter: string;
  tempScheduleList: Schedule[] = [];
  scheduleList: Schedule[] = [];

  //Subscription variable to track live updates.
  scheduleSub: Subscription;

  isLoading = true;
  constructor(public scheduleService: ScheduleService, public global: GlobalService, private repo: RepoService) {
    this.fetchSchedule();
   }

  ngAfterViewInit(): void {
    this.scheduleService.fetchScheduleEvent.subscribe(
      {
        next: res => {
          console.log('Fetch schedule events again');
          this.fetchSchedule();
        }
      }
    );
   }

   send() {
    this.repo.sendReminder().subscribe({
      next: () => {
        this.global.showToast("Reminders have been smsed!")
      }
    })
   }
  fetchSchedule() {

    this.isLoading = true;
    this.scheduleService.getAllScheduleEvents().subscribe(
      {
        next: (data) => {
          console.log("Fetching Schedule Events from API");
          this.tempScheduleList = data.result;
          if (this.tempScheduleList!= undefined){
            console.log("Unfiltered entire list of schedule events: ", this.tempScheduleList);
            this.tempScheduleList.forEach((sItem) => {
              var date = new Date(sItem.startDateTime);
              var startTime: Date;
              startTime = new Date(
                Date.UTC(
                  date.getUTCFullYear(),
                  date.getUTCMonth(),
                  date.getUTCDate(),
                  date.getHours()-2,
                  date.getMinutes()
                ));

                var date = new Date(sItem.endDateTime);
                var endTime: Date;
                endTime = new Date(
                  Date.UTC(
                    date.getUTCFullYear(),
                    date.getUTCMonth(),
                    date.getUTCDate(),
                    date.getHours()-2,
                    date.getMinutes()
                  ));
                  if (sItem.bookingAttendance.length > 0){
                    this.scheduleList.push(sItem);
                  }
              })
              console.log("Filtered list of schedule events by booking: ", this.scheduleList);
              this.isLoading = false;
          } else {
            this.isLoading = false;
          }

        },
        error: (err)=>{
          console.log("Error fetching Schedule events from API");
          console.log(err);
          this.isLoading = true;
          this.global.showAlert("Unable to fetch events from the database","ERROR fetching events", ['Ok']).then(() => {this.isLoading = false;});
        }
      });

  }


}
