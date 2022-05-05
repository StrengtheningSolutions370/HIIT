import { Component} from '@angular/core';
import { AlertController} from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-venue',
  templateUrl: './confirm-venue.component.html',
  styleUrls: ['./confirm-venue.component.scss'],
})
export class ConfirmVenueComponent {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  async venueConfirm() {
  }

}
