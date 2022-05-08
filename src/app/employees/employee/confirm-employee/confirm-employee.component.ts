import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-employee',
  templateUrl: './confirm-employee.component.html',
  styleUrls: ['./confirm-employee.component.scss'],
})
export class ConfirmEmployeeComponent {


  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
