import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-employee-info',
  templateUrl: './view-employee-info.component.html',
  styleUrls: ['./view-employee-info.component.scss'],
})
export class ViewEmployeeInfoComponent {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
