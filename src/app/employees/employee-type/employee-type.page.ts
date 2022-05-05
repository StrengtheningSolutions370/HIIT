import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.page.html',
  styleUrls: ['./employee-type.page.scss'],
})
export class EmployeeTypePage {

  employeeTypes = [
    {
      name : 'Administrator',
      description : 'a person responsible for carrying out the administration of a business or organization'
    },
    {
      name : 'Trainer',
      description : 'one whose occupation is to guide or instruct people in fitness and exercise routines a personal trainer ',
      postalCode : 1769,
      capacity : 15
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
