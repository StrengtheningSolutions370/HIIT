import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeInfoComponent } from './view-employee-info/view-employee-info.component';
import { ConfirmEmployeeComponent } from './confirm-employee/confirm-employee.component';

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
      gender : 'Male',
      email : 'zz.zonneveld@gmail.com',
      title : 'Mr.'
    },
    {
      name : 'Sonali',
      surname : 'Marais',
      type : 'Trainer',
      gender : 'Female',
      email : 'sonalimarais001@icloud.com',
      title : 'Mrs.'
    },
    {
      name : 'Stacey',
      surname : 'Scott',
      type : 'Administrator',
      gender : 'Female',
      email : 'staceyscot@icloud.com',
      title : 'Prof.'
    },
    {
      name : 'Luhan',
      surname : 'Smith',
      type : 'Trainer',
      gender : 'Male',
      email : 'smith.luhan@gmail.com',
      title : 'Mr.'
    },
    {
      name : 'Ruben',
      surname : 'Haddow',
      type : 'Trainer',
      gender : 'Male',
      email : 'ruben.haddow@gmail.com',
      title : 'Mr.'
    },
    {
      name : 'Chiante',
      surname : 'Brits',
      type : 'Administrator',
      email : 'brits550chiante@gmail.com',
      gender : 'Female',
      title : 'Miss.'
    },
    {
      name : 'Juan',
      surname : 'Zonneveld',
      type : 'Trainer',
      gender : 'Male',
      email : 'zz.zonneveld@gmail.com',
      title : 'Mr.'
    },
    {
      name : 'Sonali',
      surname : 'Marais',
      type : 'Trainer',
      gender : 'Female',
      email : 'sonalimarais001@icloud.com',
      title : 'Mrs.'
    },
    {
      name : 'Stacey',
      surname : 'Scott',
      type : 'Administrator',
      gender : 'Female',
      email : 'staceyscot@icloud.com',
      title : 'Prof.'
    },
    {
      name : 'Luhan',
      surname : 'Smith',
      type : 'Trainer',
      gender : 'Male',
      email : 'smith.luhan@gmail.com',
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

  async viewEmployeeInfoModal() {
    const modal = await this.modalCtrl.create({
      component : ViewEmployeeInfoComponent
    });
    await modal.present();
  }

}
