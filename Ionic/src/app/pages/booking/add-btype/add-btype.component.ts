import { Component,  Input } from '@angular/core';
import { ViewWillEnter} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
import { BookingType } from 'src/app/models/booking-type';
import { GlobalService } from 'src/app/services/global/global.service';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'app-add-btype',
  templateUrl: './add-btype.component.html',
  styleUrls: ['./add-btype.component.scss'],
})
export class AddBtypeComponent implements ViewWillEnter {

  @Input() bookingType: BookingType;

  cBookingTypeForm: FormGroup = this.formBuilder.group({
    categoryName : ['', [Validators.required]],
    categoryDescription : ['', [Validators.required]]
  });

  constructor(public global: GlobalService, public formBuilder: FormBuilder,
    public bookingService: BookingService) { }

  ionViewWillEnter(): void {
    console.log("AddSaleCategory-ViewWillEnter");
    console.log(this.bookingType);
    if (this.bookingType !=null){
      this.cBookingTypeForm.controls.typeName.setValue(this.bookingType.name);
      this.cBookingTypeForm.controls.typeDescription.setValue(this.bookingType.description);}
    }


    submitForm() {
      if (!this.cBookingTypeForm.valid){
        console.log('Please provide all required fields');
        return false;
      }else{
        let temp: BookingType = {
          name: this.cBookingTypeForm.value['typeName'],
          description: this.cBookingTypeForm.value['typeDescription'],
          bookings: null,
          bookingPriceHistory: null
        };
        this.global.dismissModal();
        this.bookingService.confirmBookingTypeModal(1,temp);
      }
     }

}
