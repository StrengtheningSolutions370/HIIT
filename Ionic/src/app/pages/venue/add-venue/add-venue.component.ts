/* eslint-disable no-var */
/* eslint-disable no-trailing-spaces */
import { Component, Input, OnInit  } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { Venue } from 'src/app/models/venue';
import { GlobalService } from 'src/app/services/global/global.service';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.scss'],
})
export class AddVenueComponent implements ViewWillEnter {
  @Input() venue: Venue;

  //Creating the form to add the new venue details, that will be displayed in the HTML component
  cVenueForm: FormGroup = this.formBuilder.group({
    venueName: ['', [Validators.required]],
    location: ['', [Validators.required]],
    postalCode: ['', [Validators.required,Validators.pattern('[0-9]{4}')]],
    capacity: ['', [Validators.required, Validators.min(1)]]
  });

  constructor(private global: GlobalService, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public venueService: VenueService, private router: Router, private currentRoute: ActivatedRoute,
    private  alertCtrl: AlertController ) { }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cVenueForm.controls;
  }

  ionViewWillEnter(): void {
    console.log("AddVenue-ViewWillEnter");
    console.log(this.venue);
    if (this.venue !=null){
      this.cVenueForm.controls.venueName.setValue(this.venue.name);
      this.cVenueForm.controls.location.setValue(this.venue.address);
      this.cVenueForm.controls.postalCode.setValue(this.venue.postalCode);
      this.cVenueForm.controls.capacity.setValue(this.venue.capacity);
    }

  }

  submitForm() {
    if (!this.cVenueForm.valid){
      console.log('Please provide all required fields');
      return false;
    }else{
      var temp = {
        name: this.cVenueForm.value['venueName'],
        address: this.cVenueForm.value['location'],
        postalCode: this.cVenueForm.value['postalCode'],
        capacity: this.cVenueForm.value['capacity'],
        schedules: []        
      };
      this.venueService.confirmVenueModal(1,temp);
      this.global.dismissModal();
    }
   }
}

