import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewWillEnter } from '@ionic/angular';
import { BookingType } from 'src/app/models/booking-type';
import { BookingService } from 'src/app/services/booking/booking.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-update-btype',
  templateUrl: './update-btype.component.html',
  styleUrls: ['./update-btype.component.scss'],
})
export class UpdateBtypeComponent implements ViewWillEnter {

  @Input() bookingType: BookingType;

  uBookingTypeForm: FormGroup = new FormGroup({
    bookingTypeDescription: new FormControl('', [Validators.required]),
    bookingTypeName: new FormControl('', [Validators.required])
  });

  constructor(public global: GlobalService, public fb: FormBuilder,
    public bookingService: BookingService) { }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.uBookingTypeForm.controls;
  }

  ionViewWillEnter() {
    console.log('UpdateBookingType-ViewWillEnter');
    console.log(this.bookingType);
    if (this.bookingType == null){
      this.global.showAlert("Booking type not passed to update","ERROR");
      this.global.dismissModal();
    }  else {
      this.uBookingTypeForm.controls.bookingTypeName.setValue(this.bookingType.name);
      this.uBookingTypeForm.controls.bookingTypeDescription.setValue(this.bookingType.description);
    }

  }

  submitForm() {
    if
    (!this.uBookingTypeForm.valid) { //If the form has any validation errors, the form will not be submitted.
      console.log('Please provide all required fields');
      return false;
    }
    else
    {
      console.log('InsideUpdateSubmit:');
      var temp = new BookingType();
      const choice = 2;
      temp = {
        bookingTypeID: this.bookingType.bookingTypeID,
        name: this.uBookingTypeForm.value['bookingTypeName'],
        description: this.uBookingTypeForm.value['bookingTypeDescription'],
        capacity: 0,
        colour: null
      };
       console.log(temp);
       this.bookingService.confirmBookingTypeModal(choice,temp);
       this.global.dismissModal();
    }
  }

}
