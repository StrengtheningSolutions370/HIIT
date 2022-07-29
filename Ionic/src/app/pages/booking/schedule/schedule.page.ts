import { AfterViewInit, Component, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { Subscription } from 'rxjs';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { formatDate } from '@angular/common';
import { AlertController, ModalController } from '@ionic/angular';
import { CalendarModalPage } from '../calendar-modal/calendar-modal.page';
import { Venue } from 'src/app/models/venue';
import { Employee } from 'src/app/models/employee';
import { AddScheduleComponent } from '../add-schedule/add-schedule.component';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements AfterViewInit  {
    //Calendar related:
    eventSource = []; //events to display
    viewTitle: string; //Title(i.e Month, or day)
    modalReady = false;

    calendar = {
      mode: 'month',
      currentDate: new Date()
    }


  event = {
    title: '',
    description: '',
    startTime: null,
    endTime: '',
    allDay: true
  }

    //Pulling in linked SQL table data
    //Venue:
    venueDrop!: Venue [];

    //Booking:
    bookingDrop!: any []; //Need to update this to type Booking (when made as a model)

    //Employee:
    employee!: Employee [];

    //String used from the searchbar, used in the filter pipe to search exercise category.
    public filter: string;

    //Create local exercise category array to be populated onInit.
    scheduleList: Schedule[] = [];

    //Subscription variable to track live updates.
    scheduleType: Subscription;

    isLoading = true;

    @ViewChild(CalendarComponent) scheduleCalendar: CalendarComponent;

  constructor(public scheduleService: ScheduleService, public alertCtrl: AlertController, public modalCtrl: ModalController ) {
    // this.scheduleService.venueService.getAllVenues().subscribe({
    //   next: data => {
    //     console.log(data);
    //     this.venueDrop = data.result;
    //   }
    // })
    // this.fetchSchedule();
   }

   ngAfterViewInit(): void {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
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

   ngOnInit() {

  //   this.bookingService.fetchBookingTypeEvent.subscribe({
  //     next: res => {
  //       console.log('Fetch booking type again');
  //       console.log(res);
  //       this.fetchBookingType();
  //     }
  //   })
   }

   next() {
    this.scheduleCalendar.slideNext();
  }

  back() {
    this.scheduleCalendar.slidePrev();
  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  onTimeSelected(ev) {
    console.log('ev: ', ev);
    this.event.startTime = new Date(ev.selectedTime);
    this.openCalModal();
  }

    // Calendar event was clicked
    async onEventSelected(event) {
      // Use Angular date pipe for conversion
      let start = formatDate(event.startTime, 'medium', 'en-ZA');
      let end = formatDate(event.endTime, 'medium', 'en-ZA');

      const alert = await this.alertCtrl.create({
        header: event.title,
        subHeader: event.desc,
        message: 'From: ' + start + '<br><br>To: ' + end,
        buttons: ['OK'],
      });
      alert.present();
    }

    createRandomEvents() {
      var events = [];
      for (var i = 0; i < 50; i += 1) {
        var date = new Date();
        var eventType = Math.floor(Math.random() * 2);
        var startDay = Math.floor(Math.random() * 90) - 45;
        var endDay = Math.floor(Math.random() * 2) + startDay;
        var startTime: Date;
        var endTime: Date;
        if (eventType === 0) {
          startTime = new Date(
            Date.UTC(
              date.getUTCFullYear(),
              date.getUTCMonth(),
              date.getUTCDate() + startDay
            )
          );
          if (endDay === startDay) {
            endDay += 1;
          }
          endTime = new Date(
            Date.UTC(
              date.getUTCFullYear(),
              date.getUTCMonth(),
              date.getUTCDate() + endDay
            )
          );
          events.push({
            title: 'All Day - ' + i,
            startTime: startTime,
            endTime: endTime,
            allDay: true,
          });
        } else {
          var startMinute = Math.floor(Math.random() * 24 * 60);
          var endMinute = Math.floor(Math.random() * 180) + startMinute;
          startTime = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + startDay,
            0,
            date.getMinutes() + startMinute
          );
          endTime = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + endDay,
            0,
            date.getMinutes() + endMinute
          );
          events.push({
            title: 'Event - ' + i,
            startTime: startTime,
            endTime: endTime,
            allDay: false,
          });
        }
      }
      this.eventSource = events;
    }

    removeEvents() {
      this.eventSource = [];
    }


async openCalModal() {
  const modal = await this.modalCtrl.create({
    component: AddScheduleComponent,
    cssClass: 'calendar-modal',
    backdropDismiss: true
  });

  await modal.present();

  modal.onDidDismiss().then((result) => {
    if (result.data && result.data.event) {
      let event = result.data.event;
      if (event.allDay) {
        let start = event.startTime;
        event.startTime = new Date(
          Date.UTC(
            start.getUTCFullYear(),
            start.getUTCMonth(),
            start.getUTCDate()
          )
        );
        event.endTime = new Date(
          Date.UTC(
            start.getUTCFullYear(),
            start.getUTCMonth(),
            start.getUTCDate() + 1
          )
        );
      }
      this.eventSource.push(result.data.event);
      this.scheduleCalendar.loadEvents();
    }
  });
}
}
