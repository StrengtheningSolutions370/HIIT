import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookingType } from 'src/app/models/booking-type';
import { BookingService } from 'src/app/services/booking/booking.service';
import Fuse from 'fuse.js';


@Component({
  selector: 'app-booking-type',
  templateUrl: './booking-type.page.html',
  styleUrls: ['./booking-type.page.scss'],
})
export class BookingTypePage implements OnInit {

    //String used from the searchbar, used in the filter pipe to search exercise category.
    public filter: string;

    //Create local exercise category array to be populated onInit.
    bookingTypeList: BookingType[] = [];
    bookingTypeListOriginal: BookingType[] = [];


    //Subscription variable to track live updates.
    bookingType: Subscription;
    noresults = false;
    isLoading = true;

  constructor(public bookingService: BookingService) {
    this.fetchBookingType();
   }

  fetchBookingType() {
    this.isLoading = true;
    this.bookingService.getAllBookingTypes().subscribe(
      {
        next: data => {
          console.log('Fetching booking types from DB');
          console.log(data);
          this.isLoading = false;
          this.bookingTypeList = data.result;
          this.bookingTypeListOriginal = this.bookingTypeList;
        }
      }
    );
  }

  ngOnInit() {
    this.bookingService.fetchBookingTypeEvent.subscribe({
      next: res => {
        console.log('Fetch booking type again');
        this.fetchBookingType();
      }
    })
  }

  searchBType(event : any) {
    this.noresults = false;

    if (event == '' || event == null) {
      this.bookingTypeList = this.bookingTypeListOriginal;


      if (this.bookingTypeList.length == 0) {
        this.noresults = true;
      }

      return;
    }

    const hits = new Fuse(this.bookingTypeList, {
      keys: [
        'name',
        'description',
        'colour',
        'capacity',
      ]
    }).search(
      event
    );

    this.bookingTypeList = [];

    if (hits.length == 0) {
      this.noresults = true;
      return;
    }

    hits.map((el : any) => {
      this.bookingTypeList.push(el.item);
    });
  }

}
