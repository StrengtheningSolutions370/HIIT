/* eslint-disable @typescript-eslint/quotes */
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
  // Receiving the venue object from the main venue page
  @Input() venue: VENUE;

  constructor(private modalCtrl: ModalController, private alertCtrl: ToastController, public formBuilder: FormBuilder,
    public venueService: VenueService, private router: Router, private route: ActivatedRoute) { }

  ionViewWillEnter() {
    console.log("DeleteVenue - ViewWillEnter");
    console.log(this.venue);
  }

  //Send through the id of the selected venue to be deleted in the venue service.
  async delete(id: number){
    this.venueService.deleteVenue(id);
    await this.dismissModal();
  }

  //Close the modal and navigate back to the venue page.
  async dismissModal() {
    this.modalCtrl.dismiss();
    await this.router.navigate(['../venue'],{relativeTo: this.route});

  }
}
