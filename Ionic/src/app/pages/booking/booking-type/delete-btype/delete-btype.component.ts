import { Component, Input } from '@angular/core';
import { BookingType } from 'src/app/models/booking-type';
import { BookingService } from 'src/app/services/booking/booking.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-delete-btype',
  templateUrl: './delete-btype.component.html',
  styleUrls: ['./delete-btype.component.scss'],
})
export class DeleteBtypeComponent  {
  @Input() bookingType: BookingType;

  constructor(public global: GlobalService,
    public bookingService: BookingService) { }


  //Send through the id of the selected Booking type to be deleted in the booking service.
  async delete(){
    this.bookingService.deleteBookingType(this.bookingType.bookingTypeID).then(async resp => {

      console.log('resp', resp);

      if (!resp || resp['status'] == 200) {
        this.global.showToast("The Booking Type has been successfully deleted");
        this.global.dismissModal();
      } else {
        await this.bookingService.associativeBookingTypeModal(this.bookingType);
      }
    });;
  }

}
