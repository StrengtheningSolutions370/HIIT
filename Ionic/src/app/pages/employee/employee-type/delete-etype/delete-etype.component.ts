import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, ToastController, ViewWillEnter } from '@ionic/angular';
import { EmployeeType } from 'src/app/models/employeeType';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-delete-etype',
  templateUrl: './delete-etype.component.html',
  styleUrls: ['./delete-etype.component.scss'],
})
export class DeleteEtypeComponent implements ViewWillEnter {
  @Input() employeeType: EmployeeType;

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public employeeService: EmployeeService, private router: Router, private route: ActivatedRoute, private alertCtrl: AlertController) { }

    ionViewWillEnter() {
      console.log('Delete Employee Type - View Will Enter');
      console.log(this.employeeType);
    }

    //Send through the id of the selected venue to be deleted in the venue service.
  async delete(id: number){
    this.employeeService.deleteEmployeeType(id);
    await this.dismissModal();
    this.sucDelete();
  }
  async sucDelete() {
    const toast = await this.toastCtrl.create({
      message: 'The Employee Type has been successfully deleted!',
      duration: 2000
    });
    toast.present();
  }

  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not delete Employee Type',
      message: 'There was an error deleting the venue, please try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  //Close the modal and navigate back to the venue page.
  async dismissModal() {
    this.modalCtrl.dismiss();
    console.log(this.route);
    await this.router.navigate(['../employee-type'],{relativeTo: this.route});
  }

}
