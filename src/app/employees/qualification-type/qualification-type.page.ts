import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

  // async addEmployeeTypeModal() {
  //   const modal = await this.modalCtrl.create({
  //     component :
  //   });
  //   await modal.present();

  // }

  // async updateEmployeeTypeMModal() {
  //   const modal = await this.modalCtrl.create({
  //     component :
  //   });
  //   await modal.present();
  // }

  // async deleteEmployeeTypeMModal() {
  //   const modal = await this.modalCtrl.create({
  //     component :
  //   });
  //   await modal.present();
  // }

  // async viewEmployeeTypeMInfoModal() {
  //   const modal = await this.modalCtrl.create({
  //     component :
  //   });
  //   await modal.present();
  // }

}
