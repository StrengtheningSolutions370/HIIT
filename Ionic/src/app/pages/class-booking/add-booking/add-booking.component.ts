import { Time } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { bookingLine } from 'src/app/models/cart';
import { Schedule } from 'src/app/models/schedule';
import { BookingService } from 'src/app/services/booking/booking.service';
import { CartService } from 'src/app/services/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { StoreService } from 'src/app/services/storage/store.service';
import { EventBookingsPage } from '../event-bookings/event-bookings.page';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss'],
})


export class AddBookingComponent implements AfterViewInit {
  @Input() scheduleEvent: any;
  dateString: string;
  timeStart: string;
  timeEnd: string;
  checkPassTime: Date = null;
  now: Date = null;

  isLoading = false;
  myBookingList: any[] = [];
  alreadyBooked = false;

  constructor(public global:GlobalService,
    public cartService: CartService,
    public bookingService: BookingService,
    public storage: StoreService) { }

  async ngAfterViewInit(): Promise<void> {
    console.log(this.scheduleEvent);
    this.dateString = new Date(this.scheduleEvent.startTime).toDateString();
    this.timeStart = new Date(this.scheduleEvent.startTime).toLocaleTimeString();
    this.timeEnd = new Date(this.scheduleEvent.endTime).toLocaleTimeString();
    this.checkPassTime = new Date(this.scheduleEvent.startTime);
    this.now = new Date();
    console.log(this.dateString);
    console.log(this.timeStart);
    console.log(this.timeEnd);
    await this.fetchMyBookings();
  }

  public async fetchMyBookings(){
    this.isLoading = true;
    var userID: string = '';
    await this.storage.getKey('user').then((usr : any) => {
      const obj = JSON.parse(usr)
      userID = `${obj.id}`.toString();
      })

    this.bookingService.getBookingByID(userID).subscribe({
      next: data => {
        console.log("Fetching client bookings");
        this.myBookingList = data.result;
        if (this.myBookingList == undefined){
          this.isLoading = false;
          return;
        } else {
          this.myBookingList = this.myBookingList.filter(x => x.bookingAttendance.length > 0);
          if (this.myBookingList.length < 1){
            this.isLoading = false;
          }
          console.log(this.myBookingList);
          this.myBookingList.forEach((myBooking) => {
            console.log(myBooking);
            console.log(this.scheduleEvent);
            if (myBooking.bookingAttendance[0].scheduleID == this.scheduleEvent.scheduleID){
              this.alreadyBooked = true;
              this.isLoading = false;
              console.log(this.alreadyBooked);
              return;
            }
          })
          this.isLoading = false;
        }
      }
    })
  }

  confirmChanges(){
    console.log();
    if (this.checkPassTime < this.now){
      this.global.showAlert("Booking start time has already passed","Unable to add booking to cart");
      this.global.dismissModal();
    } else if (this.alreadyBooked){
      this.global.showAlert("You have already placed a booking for this event","Unable to add booking to cart");
      this.global.dismissModal();
    } else {
      const index = this.scheduleEvent.scheduleID;
      var bookingItem: bookingLine = new bookingLine();
      bookingItem.scheduleID = this.scheduleEvent.scheduleID;
      bookingItem.schedule = this.scheduleEvent;
      this.cartService.addBooking(bookingItem);
      this.global.dismissModal();
      this.global.showToast("Booking event successfully added to your cart");
    }

  }
}
