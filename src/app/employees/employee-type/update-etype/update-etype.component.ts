import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-etype',
  templateUrl: './update-etype.component.html',
  styleUrls: ['./update-etype.component.scss'],
})
export class UpdateEtypeComponent {

  constructor(private modalCtrl: ModalController) { }


  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
