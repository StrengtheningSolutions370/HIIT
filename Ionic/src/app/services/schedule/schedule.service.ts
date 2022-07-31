import { formatDate } from '@angular/common';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { BookingType } from 'src/app/models/booking-type';
import { Employee } from 'src/app/models/employee';
import { Schedule } from 'src/app/models/schedule';
import { Venue } from 'src/app/models/venue';
import { AddScheduleComponent } from 'src/app/pages/booking/schedule/add-schedule/add-schedule.component';
import { ConfirmScheduleComponent } from 'src/app/pages/booking/schedule/confirm-schedule/confirm-schedule.component';
import { UpdateScheduleComponent } from 'src/app/pages/booking/schedule/update-schedule/update-schedule.component';
import { BookingService } from '../booking/booking.service';
import { EmployeeService } from '../employee/employee.service';
import { RepoService } from '../repo.service';
import { VenueService } from '../venue/venue.service';

@Injectable({
  providedIn: 'root'
})

export class ScheduleService {
  @Output() fetchScheduleEvent = new EventEmitter<Schedule>();
  //@Output() fetchBookingTypeEvent = new EventEmitter<BookingType>();
  //@Output() fetchVenueEvent = new EventEmitter<Venue>();
  //@Output() fetchEmployeeEvent = new EventEmitter<Employee>();
  //@Output() fetchLessonPlanEvent = new EventEmitter<LessonPlan>();


  //Need to add lesson plan, and possibly a date_session service - to manage all that
  constructor(public repo: RepoService, public venueService: VenueService, public bookingService: BookingService,
     public employeeService: EmployeeService, public modalCtrl: ModalController, public alertCtrl: AlertController ) { }

  //READS:

  getAllScheduleEvents() : Observable<any> {
    return this.repo.getScheduleEvent();
  }

  createSchedule(schedule: any){
    this.repo.createScheduleEvent(schedule).subscribe(
      {
        next: () => {
          console.log('SCHEDULE EVENT CREATED');
          this.fetchScheduleEvent.emit();
        }
      }
    );
   }

    //Receives a schedule to update in the API.
    async updateSchedule(schedule: any) {
      return this.repo.updateScheduleEvent(schedule.scheduleID,schedule).subscribe(
        {
         next: () => {
           console.log('SALE ITEM UPDATED');
           this.fetchScheduleEvent.emit();
         },
         error: (err) => {
           console.log('SALE ITEM UPDATED FAILED');
           console.log(err);
         }
        }
      );
    }

      //Receives a schedule to delete in the API.
   deleteScheduleEvent(id: number){
    console.log('HERE = ' + id);
   this.repo.deleteScheduleEvent(id).subscribe(
     {
       next: res => {
         console.log(res);
         console.log('SALE ITEM DELETED');
         this.fetchScheduleEvent.emit();
       },
       error: err => {
         console.log('ÉRROR HERE');
         console.log(err);
       }
     }
   );
  }


  //CREATE Schedule event
  async addScheduleModal() {
    const modal = await this.modalCtrl.create({
      component: AddScheduleComponent,
      cssClass: 'calendar-modal',
      backdropDismiss: true
    });

    await modal.present();

    // modal.onDidDismiss().then((result) => {
    //   if (result.data && result.data.event) {
    //     let event = result.data.event;
    //     if (event.allDay) {
    //       let start = event.startTime;
    //       event.startTime = new Date(
    //         Date.UTC(
    //           start.getUTCFullYear(),
    //           start.getUTCMonth(),
    //           start.getUTCDate()
    //         )
    //       );
    //       event.endTime = new Date(
    //         Date.UTC(
    //           start.getUTCFullYear(),
    //           start.getUTCMonth(),
    //           start.getUTCDate() + 1
    //         )
    //       );
    //     }
    //     this.eventSource.push(result.data.event);
    //     this.scheduleCalendar.loadEvents();
    //   }
    // });
  }

  //Display the confirm create/update modal
  //Receives the selected qualificationtype from the qualificationtype page
  async confirmScheduleModal(choice: number, scheduleEvent: any, venueName: string, bookingTypeName: string, employeeName: string /*,lessonPlanName: string*/) {

    console.log('ScheduleService: ConfirmScheduleModalCall');
    console.log(choice);
    console.log(scheduleEvent);

    if (choice === 1) {
      console.log('Performing ADD');
    } else if (choice === 2){
      console.log('Performing UPDATE');
    } else {
      console.log('Bad Option: ' + choice);
    }

      const modal = await this.modalCtrl.create({
        component: ConfirmScheduleComponent ,
        componentProps: {
          scheduleEvent,
          choice,
          venueName,
          bookingTypeName,
          employeeName,
          //lessonPlanName
        }

      });
      await modal.present();
  }


}
