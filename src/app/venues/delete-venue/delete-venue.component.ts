import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-delete-venue',
  templateUrl: './delete-venue.component.html',
  styleUrls: ['./delete-venue.component.scss'],
})
export class DeleteVenueComponent {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  async venueUpdate() {
    //This alert should be executed when venue is deleted
    const alert = await this.alertCtrl.create(
    {header: 'Venue Deleted', message: 'The Venue has been successfully deleted!', buttons: ['Ok']});
    await alert.present();
  }

}
