import { Component, OnInit  } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Venue } from 'src/app/models/venue';
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
    capacity: ['', [Validators.required, Validators.max(120), Validators.min(1)]]
  });
  isSubmitted = false;

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public venueService: VenueService, private router:Router, private currentRoute:ActivatedRoute,private  alertCtrl: AlertController ) { }

  get errorControl() {
    return this.cVenueForm.controls;
  }

  ngOnInit(){

  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.cVenueForm.valid){
      console.log('Please provide all required fields');
      this.InvalidAlert();
      return false;
    }else{
      console.log(this.cVenueForm.value);
      var temp = {
        Name: this.cVenueForm.value['venueName'],
        Address: this.cVenueForm.value['location'],
        PostalCode: this.cVenueForm.value['postalCode'],
        Capacity: this.cVenueForm.value['capacity']        
      };
      this.venueService.createVenue(temp);
      this.dismissModal();
      this.sucAdd();
      console.log("CurrentRoute:ADD");
      console.log(this.currentRoute.url);
    }
  }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      //what message should display
      message: 'The Venue has been successfully added!',
      duration: 2000
    });
    toast.present();
  }


  dismissModal() {
    this.modalCtrl.dismiss();
  };

  async InvalidAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid Input',
      message: 'Please provide all required fields and ensure that the information is in the correct format',
      buttons: ['OK']
    });
    alert.present();
  }

  async DuplicateAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Venue Already Exists',
      message: 'The Venue Information entered already exists on the system',
      buttons: ['OK']
    });
    alert.present();
  }

  async FailureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not create venue',
      message: 'There was an error updating the venue. Please try again',
      buttons: ['OK']
    });
    alert.present();
  }
}

