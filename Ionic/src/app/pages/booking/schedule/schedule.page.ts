import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage /*implements OnInit */ {

    //String used from the searchbar, used in the filter pipe to search exercise category.
    public filter: string;

    //Create local exercise category array to be populated onInit.
    scheduleList: Schedule[] = [];

    //Subscription variable to track live updates.
    scheduleType: Subscription;

    isLoading = true;

  constructor(public scheduleService: ScheduleService ) {
    this.fetchSchedule();
   }

  fetchSchedule() {
    this.isLoading = true;
   //this.scheduleService
    // .getAllBookingTypes().subscribe(
    //   {
    //     next: data => {
    //       console.log('Fetching booking types from DB');
    //       console.log(data);
    //       this.isLoading = false;
    //       this.bookingTypeList = data.result;
    //     }
    //   }
    // );
  }

  // ngOnInit() {
  //   this.bookingService.fetchBookingTypeEvent.subscribe({
  //     next: res => {
  //       console.log('Fetch booking type again');
  //       console.log(res);
  //       this.fetchBookingType();
  //     }
  //   })
  // }
}
