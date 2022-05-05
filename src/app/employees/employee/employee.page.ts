import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage {

  employees = [
    {
      name : 'Juan',
      surname : 'Zonneveld',
      type : 'Trainer',
      communicationType : 'Email',
      communication : 'zz.zonneveld@gmail.com',
      title : 'Mr.'
    },
    {
      name : 'Sonali',
      surname : 'Marais',
      type : 'Trainer',
      communicationType : 'Email',
      communication : 'sonalimarais001@icloud.com',
      title : 'Mrs.'
    },
    {
      name : 'Stacey',
      surname : 'Scott',
      type : 'Administrator',
      communicationType : 'Mobile Number',
      communication : '083 987 2364',
      title : 'Prof.'
    },
    {
      name : 'Luhan',
      surname : 'Smith',
      type : 'Trainer',
      communicationType : 'Email',
      communication : 'smith.luhan@gmail.com',
      title : 'Mr.'
    },
    {
      name : 'Ruben',
      surname : 'Haddow',
      type : 'Trainer',
      communicationType : 'Mobile Number',
      communication : '079 568 4573',
      title : 'Mr.'
    },
    {
      name : 'Chiante',
      surname : 'Brits',
      type : 'Administrator',
      communicationType : 'Mobile Number',
      communication : '063 458 4715',
      title : 'Miss.'
    },
    {
      name : 'Juan',
      surname : 'Zonneveld',
      type : 'Trainer',
      communicationType : 'Email',
      communication : 'zz.zonneveld@gmail.com',
      title : 'Mr.'
    },
    {
      name : 'Sonali',
      surname : 'Marais',
      type : 'Trainer',
      communicationType : 'Email',
      communication : 'sonalimarais001@icloud.com',
      title : 'Mrs.'
    },
    {
      name : 'Stacey',
      surname : 'Scott',
      type : 'Administrator',
      communicationType : 'Mobile Number',
      communication : '083 987 2364',
      title : 'Prof.'
    },
    {
      name : 'Luhan',
      surname : 'Smith',
      type : 'Trainer',
      communicationType : 'Email',
      communication : 'smith.luhan@gmail.com',
      title : 'Mr.'
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  async addEmployeeInfoModal() {
    const modal = await this.modalCtrl.create({
      component : AddEmployeeComponent
    });
    await modal.present();

  }

  async updateEmployeeInfoModal() {
    const modal = await this.modalCtrl.create({
      component : UpdateEmployeeComponent
    });
    await modal.present();
  }

  async deleteEmployeeInfoModal() {
    const modal = await this.modalCtrl.create({
      component : DeleteEmployeeComponent
    });
    await modal.present();
  }

  //async viewVenueInfoModal() {
   // const modal = await this.modalCtrl.create({
      //component : ViewEmployeeInfoComponent
    //});
    //await modal.present();
 // }

}
