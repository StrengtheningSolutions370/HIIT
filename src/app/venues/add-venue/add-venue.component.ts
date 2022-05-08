import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.scss'],
})
export class AddVenueComponent {

  constructor(private modalCtrl: ModalController, private alertCtrl: ToastController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  //I changed it to form

    //the create Venue button should only be enabled if all fields has been entered and frontend validation is successful
    //thus put required by all inputs


    //Confirm modal should appear

    //more intense validation

    //search through venue entity to ensure no duplicates

    //SQL insert query

  //This alert should be executed when venue is added
  //

    //This alert should be executed when venue is deleted
    //this.sucAdd();


  async sucAdd() {
    const toast = await this.alertCtrl.create({
      //what message should display
      message: 'The Venue has been successfully added!',
      //how long should the message be present
      duration: 2000
    });
    //display the toast notification
    toast.present();
  }
}
