import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter } from '@ionic/angular';
import { VENUE } from 'src/app/models/venue';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-delete-venue',
  templateUrl: './delete-venue.component.html',
  styleUrls: ['./delete-venue.component.scss'],
})
export class DeleteVenueComponent implements ViewWillEnter {
  @Input() venue: VENUE;

  constructor(private modalCtrl: ModalController, private alertCtrl: ToastController, public formBuilder: FormBuilder,
    public venueService: VenueService, private router: Router, private route: ActivatedRoute) { }
    
  ionViewWillEnter() {
    console.log("DeleteVenue - ViewWillEnter");
    console.log(this.venue);
  }

  async dismissModal() {
    this.modalCtrl.dismiss();
    console.log(this.route);
    await this.router.navigate(['../venue'],{relativeTo: this.route});

  }

}
