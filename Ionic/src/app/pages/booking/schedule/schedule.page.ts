import { AfterViewInit, Component, LOCALE_ID, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { Subscription } from 'rxjs';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { GlobalService } from 'src/app/services/global/global.service';
import { format, parseISO } from 'date-fns';
import { IEvent, ITimeSelected } from 'ionic2-calendar/calendar';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements AfterViewInit  {
    //Calendar related:
    eventSource:any[] = []; //events to display
    viewTitle: string; //Title(i.e Month, or day)
    modalReady = false;

    calendar = {
      mode: 'month',
      currentDate: new Date()
    }

    markDisabled = (date: Date) => {
      var current = new Date();
      return date < current;
  };

  selectDate: ITimeSelected;

    //Object to add to schedule on create + populate calendar (time realted information here but rest in schedule entity)
  event = {
    scheduleID: 0,
    venue:{},
    bookingType:{},
    startTime: null,
    endTime: null
  }

    //Pulling in linked SQL table data
    //Venue:
    //venueDrop!: Venue [];

    //Booking:
    //bookingDrop!: any []; //Need to update this to type Booking (when made as a model)

    //Employee:
    //employee!: Employee [];

    //Create local schedule array to be populated onInit.
    scheduleList: Schedule[] = [];

    //Subscription variable to track live updates.
    scheduleSub: Subscription;

    isLoading = true;

    @ViewChild(CalendarComponent) scheduleCalendar: CalendarComponent;

  constructor(public scheduleService: ScheduleService, public alertCtrl: AlertController, public modalCtrl: ModalController, public global: GlobalService ) {
    this.fetchSchedule();
    console.log(this.scheduleList);
   }

   ngAfterViewInit(): void {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
    this.scheduleService.fetchScheduleEvent.subscribe(
      {
        next: res => {
          console.log('Fetch schedule events again');
          this.fetchSchedule();
        }
      }
    );
   }

  fetchSchedule() {
    this.isLoading = true;
    this.scheduleService.getAllScheduleEvents().subscribe(
      {
        next: (data) => {
          console.log("Fetching Schedule Events from API");
          this.scheduleList = data.result;
          var events = [];
          if (this.scheduleList!= undefined){
            this.scheduleList.forEach((sItem) => {
              var date = new Date(sItem.dateSession.startDateTime);
              var startTime: Date;
              startTime = new Date(
                Date.UTC(
                  date.getUTCFullYear(),
                  date.getUTCMonth(),
                  date.getUTCDate(),
                  date.getHours()-2,
                  date.getMinutes()
                ));
                console.log(startTime);

                var date = new Date(sItem.dateSession.endDateTime);
                var endTime: Date;
                endTime = new Date(
                  Date.UTC(
                    date.getUTCFullYear(),
                    date.getUTCMonth(),
                    date.getUTCDate(),
                    date.getHours()-2,
                    date.getMinutes()
                  ));
                  console.log(endTime);

                events.push({
                  scheduleID: sItem.scheduleID,
                  venue: sItem.venue,
                  bookingType: sItem.bookingType,
                  startTime: startTime,
                  endTime: endTime,
                });
              })
              this.eventSource = events;
              console.log(this.eventSource);
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
    this.global.showAlert("Time selected");
    //this.event.startTime = new Date(ev.selectedTime);
    //this.scheduleService.addScheduleModal();
  }

    //Modals:
  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    console.log(event);
    let start = formatDate(event.startTime, 'h:mm a', 'en-ZA');
    let end = formatDate(event.endTime, 'h:mm a', 'en-ZA');
    let date = formatDate(event.startTime,'EEEE, MMMM d','en-ZA');
    let venueName =  event.venue.name;
    let bookingType = event.bookingType.name;
    const alert = await this.alertCtrl.create({
      header: date,
      message: 'From:'+ start +
      '<br><br>To: ' + end + '<br><br>' +'Venue: ' + venueName + '<br><br>' +'Booking Type: ' + bookingType ,
      buttons: ['Ok',{
        text: 'Update',
        handler: () => {
          console.log("Updating event: " + event);
          this.scheduleService.updateScheduleModal(event);
        }
      },
      {
        text: 'Delete',
        cssClass: 'color:red;',
        handler: () => {
          this.scheduleService.deleteScheduleEvent(event.scheduleID)
        }
      }],
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
}
