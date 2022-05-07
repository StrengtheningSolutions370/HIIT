import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-etype',
  templateUrl: './add-etype.component.html',
  styleUrls: ['./add-etype.component.scss'],
})
export class AddEtypeComponent  {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
