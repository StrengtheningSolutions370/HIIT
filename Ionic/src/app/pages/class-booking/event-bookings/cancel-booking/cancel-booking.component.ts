import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking/booking.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { StoreService } from 'src/app/services/storage/store.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.scss'],
})
export class CancelBookingComponent implements AfterViewInit{

  @Input() booking: any;
  @Input() bookingAttendance: any;
  checkPassTime: Date = null;
  dayAdvance: Date = null;
  now: Date = null;

  constructor(public global: GlobalService, public bookingService: BookingService, public storage: StoreService) { }

  ngAfterViewInit(): void {
    console.log(this.booking);
    this.checkPassTime = new Date(this.booking.bookingAttendance[0].schedule.startDateTime);
    console.log("CheckPasstime: ", this.checkPassTime);
    this.now = new Date();
    console.log("Now: ",this.now);
    this.dayAdvance = new Date(this.checkPassTime);
    this.dayAdvance.setDate(this.checkPassTime.getDate()-1);
    console.log("dayAdvance: ",this.dayAdvance);
  }

  async delete(){
    var userID: string = '';
    await this.storage.getKey('user').then((usr : any) => {
      const obj = JSON.parse(usr)
      userID = `${obj.id}`.toString();
      })

      if (this.checkPassTime < this.now){
        this.global.showAlert("Booking start time has already passed","Unable to cancel booking");
        this.global.dismissModal();
      } else if (this.dayAdvance < this.now){
        this.global.showAlert("Booking cancellations must be done 24 hours in advance","Unable to cancel booking");
        this.global.dismissModal();
      } else {
        this.bookingService.cancelClientBooking(userID,this.booking.bookingID,this.bookingAttendance.scheduleID).subscribe({
          next: data => {
            console.log(data);
            this.global.dismissModal();
            this.bookingService.fetchBookingEvent.emit();
            this.global.showToast("Booking successfully cancelled");
          }
        })
      }

  }

}
