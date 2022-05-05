import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-update-venue',
  templateUrl: './update-venue.component.html',
  styleUrls: ['./update-venue.component.scss'],
})
export class UpdateVenueComponent {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  async venueUpdate() {
    //first display another modal for user to confirm if they want to edit info

    //This alert should be executed when venue is updated
    const alert = await this.alertCtrl.create(
    {header: 'Venue Updated', message: 'The Venue has been successfully updated!', buttons: ['Ok']});
    await alert.present();
  }

}
