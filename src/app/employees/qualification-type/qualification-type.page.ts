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
      description :
      'a certificate awarded by an educational establishment to show that someone has successfully completed a course of study.'
    },
    {
      name : 'Certificate',
      description : 'a document certifying that one has fulfilled the requirements of and may practice in a field',
      postalCode : 1769,
      capacity : 15
    },
    {
      name : 'Postgraduate Study',
      description : 'involves learning and studying for academic or professional degrees'
    },
    {
      name : 'Bachelors degree',
      description : ' degree that is given to a student by a college or university usually after four years of study.'
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
