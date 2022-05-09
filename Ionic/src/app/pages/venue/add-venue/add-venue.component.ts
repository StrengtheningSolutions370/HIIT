import { Component, OnInit  } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { VENUE } from 'src/app/models/venue';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.scss'],
})
export class AddVenueComponent implements OnInit {

  cVenueForm: FormGroup = this.formBuilder.group({
    venueName: ['', [Validators.required]],
    location: ['', [Validators.required]],
    postalCode: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
    capacity: ['', [Validators.required, Validators.max(12), Validators.min(0)]]
  });
  isSubmitted = false;

  constructor(private modalCtrl: ModalController, private alertCtrl: ToastController, public formBuilder: FormBuilder,
    public venueService: VenueService, private router:Router, private currentRoute:ActivatedRoute ) { }

  get errorControl() {
    return this.cVenueForm.controls;
  }

  ngOnInit(){

  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.cVenueForm.valid){
      console.log('Please provide all required fields');
      return false;
    }else{
      console.log(this.cVenueForm.value);
      var temp = {
        VENUE_NAME: this.cVenueForm.value['venueName'],
        VENUE_ADDRESS: this.cVenueForm.value['location'],
        VENUE_POSTAL_CODE: this.cVenueForm.value['postalCode'],
        VENUE_CAPACITY: this.cVenueForm.value['capacity']        
      };
      this.venueService.createVenue(temp);
      this.dismissModal();
      this.sucAdd();
      console.log("CurrentRoute:ADD");
      console.log(this.currentRoute.url);
    }
  }

  async sucAdd() {
    const toast = await this.alertCtrl.create({
      //what message should display
      message: 'The Venue has been successfully added!',
      //how long should the message be present
      duration: 2000
    });
    //display the toast notification
    toast.present();
  }


  dismissModal() {
    this.modalCtrl.dismiss();
  };
}

