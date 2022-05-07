import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-update-venue',
  templateUrl: './update-venue.component.html',
  styleUrls: ['./update-venue.component.scss'],
})
export class UpdateVenueComponent {

  constructor(private modalCtrl: ModalController, private alertCtrl: ToastController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }


  async sucUpdate() {
    const toast = await this.alertCtrl.create({
      //what message should display
      message: 'The Venue has been successfully updated!',
      //how long should the message be present
      duration: 2000
    });
    //display the toast notification
    toast.present();
  }

}
