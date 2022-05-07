import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-etype',
  templateUrl: './view-etype.component.html',
  styleUrls: ['./view-etype.component.scss'],
})
export class ViewEtypeComponent{

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }


}
