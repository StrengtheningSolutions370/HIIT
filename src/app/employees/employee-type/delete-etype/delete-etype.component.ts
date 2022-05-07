import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-delete-etype',
  templateUrl: './delete-etype.component.html',
  styleUrls: ['./delete-etype.component.scss'],
})
export class DeleteEtypeComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
