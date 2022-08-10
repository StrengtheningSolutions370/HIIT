import { Time } from '@angular/common';
import { AfterViewInit, Component} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BookingType } from 'src/app/models/booking-type';
import { Employee } from 'src/app/models/employee';
import { Venue } from 'src/app/models/venue';
import { GlobalService } from 'src/app/services/global/global.service';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.page.html',
  styleUrls: ['./calendar-modal.page.scss'],
})
export class CalendarModalPage implements AfterViewInit {

  venueList!: Venue[];
  bookingTypeList!: BookingType[];
  employeeList!: Employee[];
  lessonPlan!: any; // Update to lesson plan model

  cCalendarForm: UntypedFormGroup = this.formBuilder.group({
    venueDrop : ['', [Validators.required]],
    bookingTypeDrop : ['', [Validators.required]],
    employeeDrop : ['', [Validators.required]]
  });


  timeStart: Time;
  timeEnd: Time;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  viewTitle: string;

  event = {
    title: '',
    description: '',
    startTime: null,
    endTime: '',
    allDay: true
  }

  modalReady = false;

  constructor(public global:GlobalService, public modalCtrl:ModalController, private venueService: VenueService,
  public formBuilder: UntypedFormBuilder, public scheduleService: ScheduleService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);

    this.venueService.getAllVenues().subscribe({
      next: (data) => {
        this.venueList = data.result;
        console.log(data);
      }
    });


    //Disable weekends script
    const datetime = document.querySelector('ion-datetime');
    datetime.isDateEnabled = (dateString) => {
      const date = new Date(dateString);
      const utcDay = date.getUTCDay();

      /**
       * Date will be enabled if it is not
       * Sunday or Saturday
       */
      return utcDay !== 0 && utcDay !== 6;
    }
  }

  save(){
    let tempVal = this.global.dismissModal({event: this.event})
    console.log(tempVal);
  }
}
