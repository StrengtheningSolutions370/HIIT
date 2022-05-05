import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.scss'],
})
export class AddVenueComponent {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  async venueAdd() {
    //the create Venue button should only be enabled if all fields has been entered and frontend validation is successful
    //thus put required by all inputs


    //Confirm modal should appear

    //more intense validation

    //search through venue entity to ensure no duplicates

    //SQL insert query

  //This alert should be executed when venue is added
  const alert = await this.alertCtrl.create({ header: 'Venue Added', message: 'The Venue has been successfully added!', buttons: ['Ok']});
  await alert.present();
}
}
