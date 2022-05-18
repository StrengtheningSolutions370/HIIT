import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter, AlertController } from '@ionic/angular';
import { Venue } from 'src/app/models/venue';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-delete-venue',
  templateUrl: './delete-venue.component.html',
  styleUrls: ['./delete-venue.component.scss'],
})
export class DeleteVenueComponent implements ViewWillEnter {
  @Input() venue: Venue;

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public venueService: VenueService, private router: Router, private route: ActivatedRoute, private alertCtrl: AlertController) { }
    
  ionViewWillEnter() {
    console.log("DeleteVenue - ViewWillEnter");
    console.log(this.venue);
  }

  async delete(id:number){
    console.log("DeleteVenue-BtnClick("+id+")");
    this.venueService.deleteVenue(id);
    await this.dismissModal();
    this.sucDelete();
  }

  async sucDelete() {
    const toast = await this.toastCtrl.create({
      message: 'The Venue has been successfully deleted!',
      duration: 2000
    });
    toast.present();
  }

  async FailureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not delete Venue',
      message: 'There was an error deleting the venue, please try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  async dismissModal() {
    this.modalCtrl.dismiss();
    console.log(this.route);
    await this.router.navigate(['../venues'],{relativeTo: this.route});
  }

}
