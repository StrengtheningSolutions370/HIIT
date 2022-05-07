import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddQualificationComponent } from './add-qualification/add-qualification.component';
import { UpdateQualificationComponent } from './update-qualification/update-qualification.component';
import { DeleteQualificationComponent } from './delete-qualification/delete-qualification.component';
import { ViewQualificationComponent } from './view-qualification/view-qualification.component';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.page.html',
  styleUrls: ['./qualification.page.scss'],
})
export class QualificationPage {

  qualifications = [
    {description : 'Fitness Instructing'},
    {description : 'Personal Training'},
    {description : 'Sport Management'},
    {description : 'Fitness Science'}
  ];

  constructor(private modalCtrl: ModalController) { }

  async addQualificationModal() {
    const modal = await this.modalCtrl.create({
      component : AddQualificationComponent
     });
    await modal.present();
}

  async updateQualificationModal() {
    const modal = await this.modalCtrl.create({
      component : UpdateQualificationComponent
    });
    await modal.present();
  }

  async deleteQualificationModal() {
    const modal = await this.modalCtrl.create({
      component : DeleteQualificationComponent
    });
    await modal.present();
  }

  async viewQualificationInfoModal() {
   const modal = await this.modalCtrl.create({
      component : ViewQualificationComponent
    });
    await modal.present();
}

}
