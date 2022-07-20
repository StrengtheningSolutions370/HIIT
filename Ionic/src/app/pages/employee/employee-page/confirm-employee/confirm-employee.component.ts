import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-confirm-employee',
  templateUrl: './confirm-employee.component.html',
  styleUrls: ['./confirm-employee.component.scss'],
})

export class ConfirmEmployeeComponent {
  @Input() choice: number;
  @Input() employee: any;
  //employee type, qualification, qualification type and title
  @Input() title: string;
  @Input() employeeTypeName:string;
  @Input() qualificationDescription: string;
  @Input() qTypeName: string;
  @Input() employeeImage : any;
  alertCtrl: any;

   constructor(private modalCtrl: ModalController, public employeeService: EmployeeService,
    public router: Router, public activated: ActivatedRoute, public toastCtrl: ToastController, alertCtrl: AlertController ) {
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  };

  //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(employee: Employee){
    console.log(this.choice);
    if (this.choice === 1){

      //  if(true){
        //do duplicate check here from API
      //   console.log('Existing Employee: ' + saleItem.Name +': '+ saleItem.Description);
      //   this.duplicateAlert();
      //   return;
      //  }
      
      
        console.log('Add Employee from confirm:');
        //CallRepoToCreate
        await this.employeeService.createEmployee(employee);
        await this.dismissModal();
        this.sucAdd();
      
    } else if (this.choice === 2){
      //CallRepoToUpdate
      await this.employeeService.updateEmployee(employee);
      this.dismissModal();
      this.sucUpdate();

    }
  }

  async returnFrom(){
    //1 = return to ADD
    //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.employee);
      await this.dismissModal();
      this.employeeService.addEmployeeInfoModal(this.employee);
    } else if (this.choice === 2){

      console.log('CHECK ID HERE')
      console.log(this.employee)
      await this.dismissModal();
      this.employeeService.updateEmployeeInfoModal(this.employee);
    }
  }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The Employee has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The Employee has been successfully updated!',
      duration: 2000
    });
    toast.present();
  }

  async duplicateAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Employee Already Exists',
      message: 'The Employee Information entered already exists on the system',
      buttons: ['OK']
    });
   alert.present();
  }

}


