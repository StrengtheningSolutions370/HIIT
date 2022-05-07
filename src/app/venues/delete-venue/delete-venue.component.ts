import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-delete-venue',
  templateUrl: './delete-venue.component.html',
  styleUrls: ['./delete-venue.component.scss'],
})
export class DeleteVenueComponent {

  constructor(private modalCtrl: ModalController, private alertCtrl: ToastController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }


    //This alert should be executed when venue is deleted
    //this.sucDelete();
 

  async sucDelete() {
    const toast = await this.alertCtrl.create({
      //what message should display
      message: 'The Venue has been successfully deleted!',
      //how long should the message be present
      duration: 2000
    });
    //display the toast notification
    toast.present();
  }

}
