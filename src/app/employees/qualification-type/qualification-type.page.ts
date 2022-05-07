import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddQtypeComponent } from './add-qtype/add-qtype.component';
import { UpdateQtypeComponent } from './update-qtype/update-qtype.component';
import { DeleteQtypeComponent } from './delete-qtype/delete-qtype.component';
import { ViewQtypeComponent } from './view-qtype/view-qtype.component';

@Component({
  selector: 'app-qualification-type',
  templateUrl: './qualification-type.page.html',
  styleUrls: ['./qualification-type.page.scss'],
})
export class QualificationTypePage {

  qualificationTypes = [
    {
      name : 'Diploma',
    },
    {
      name : 'Certificate',
    },
    {
      name : 'Postgraduate Study',
    },
    {
      name : 'Bachelors degree',
    }
  ];

  constructor(private modalCtrl: ModalController) { }

   async addQtypeModal() {
    const modal = await this.modalCtrl.create({
     component : AddQtypeComponent
   });
   await modal.present();

  }

  async updateQtypeModal() {
    const modal = await this.modalCtrl.create({
    component : UpdateQtypeComponent
  });
  await modal.present();

  }

  async deleteQtypeModal() {
    const modal = await this.modalCtrl.create({
    component : DeleteQtypeComponent
  });
  await modal.present();

  }

  async viewQtypeModal() {
    const modal = await this.modalCtrl.create({
    component : ViewQtypeComponent
  });
  await modal.present();

  }

}
