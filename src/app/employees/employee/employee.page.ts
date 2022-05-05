import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeleteVenueComponent } from 'src/app/venues/delete-venue/delete-venue.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage {

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
