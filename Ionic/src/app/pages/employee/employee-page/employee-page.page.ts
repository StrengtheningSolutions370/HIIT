import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee/employee.service';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.page.html',
  styleUrls: ['./employee-page.page.scss'],
})
export class EmployeePagePage {

  employees = [
    {
      name : 'Juan',
      surname : 'Zonneveld',
      type : 'Trainer',
      cell : '078 569 5894',
      email : 'zz.zonneveld@gmail.com',
      title : 'Mr.'
    },
    {
      name : 'Sonali',
      surname : 'Marais',
      type : 'Trainer',
      cell : ' 079 584 4523',
      email : 'sonalimarais001@icloud.com',
      title : 'Mrs.'
    },
    {
      name : 'Stacey',
      surname : 'Scott',
      type : 'Administrator',
      cell : '178 963 4123',
      email : 'staceyscot@icloud.com',
      title : 'Prof.'
    },
    {
      name : 'Luhan',
      surname : 'Smith',
      type : 'Trainer',
      cell : '078 987 7412',
      email : 'smith.luhan@gmail.com',
      title : 'Mr.'
    },
    {
      name : 'Ruben',
      surname : 'Haddow',
      type : 'Trainer',
      cell : '089 546 4125',
      email : 'ruben.haddow@gmail.com',
      title : 'Mr.'
    },
    {
      name : 'Chiante',
      surname : 'Brits',
      type : 'Administrator',
      email : 'brits550chiante@gmail.com',
      cell : '128 456 8952',
      title : 'Miss.'
    },
    {
      name : 'Juan',
      surname : 'Zonneveld',
      type : 'Trainer',
      cell : '089 564 2563',
      email : 'zz.zonneveld@gmail.com',
      title : 'Mr.'
    },
    {
      name : 'Sonali',
      surname : 'Marais',
      type : 'Trainer',
      cell : '078 962 2658',
      email : 'sonalimarais001@icloud.com',
      title : 'Mrs.'
    },
    {
      name : 'Stacey',
      surname : 'Scott',
      type : 'Administrator',
      cell : '089 549 5123',
      email : 'staceyscot@icloud.com',
      title : 'Prof.'
    },
    {
      name : 'Luhan',
      surname : 'Smith',
      type : 'Trainer',
      cell : '078 965 1236',
      email : 'smith.luhan@gmail.com',
      title : 'Mr.'
    }
  ];

  constructor(private modalCtrl: ModalController, public employeeService: EmployeeService) { }


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
      component : ViewEmployeeComponent
    });
    await modal.present();
  }

}
