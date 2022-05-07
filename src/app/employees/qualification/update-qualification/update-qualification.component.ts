import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-qualification',
  templateUrl: './update-qualification.component.html',
  styleUrls: ['./update-qualification.component.scss'],
})
export class UpdateQualificationComponent{

  constructor(private modalCtrl: ModalController) { }


  dismissModal() {
    this.modalCtrl.dismiss();
  }


}
