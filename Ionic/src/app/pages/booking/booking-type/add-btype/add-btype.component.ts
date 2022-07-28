import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { BookingType } from 'src/app/models/booking-type';
import { BookingService } from 'src/app/services/booking/booking.service';
import { ViewWillEnter} from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-add-btype',
  templateUrl: './add-btype.component.html',
  styleUrls: ['./add-btype.component.scss'],
})
export class AddBtypeComponent implements ViewWillEnter {

  @Input() bookingType: BookingType;
  constructor(private global: GlobalService,  public formBuilder: FormBuilder,
    public bookingService: BookingService) { }

  //Creating the form to add the new booking type details, that will be displayed in the HTML component
   cBookingTypeForm: FormGroup = this.formBuilder.group({
    bookingTypeName: ['', [Validators.required]],
    bookingTypeDescription: ['', [Validators.required]]
  });

  get errorControl() {
    return this.cBookingTypeForm.controls;
  }


  ionViewWillEnter(): void {
    console.log("AddBookingType-ViewWillEnter");
    console.log(this.bookingType);
    if (!!this.bookingType){
      console.log(this.bookingType);
      this.cBookingTypeForm.controls.bookingTypeName.setValue(this.bookingType.name);
      this.cBookingTypeForm.controls.bookingTypeDescription.setValue(this.bookingType.description);
    }

  }


  submitForm() {
    if (!this.cBookingTypeForm.valid){
      console.log(this.cBookingTypeForm.value['bookingTypeName']);
      console.log(this.cBookingTypeForm.value['bookingTypeDescription']);
      console.log('Please provide all required fields');
      return false;
    }
    else
    {
      var temp: BookingType = {
        name: this.cBookingTypeForm.value['bookingTypeName'],
        description: this.cBookingTypeForm.value['bookingTypeDescription']
      };
      this.global.dismissModal();
      this.bookingService.confirmBookingTypeModal(1,temp);
    }
   }
}
