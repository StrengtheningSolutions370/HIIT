import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { EmployeeType } from 'src/app/models/employeeType';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-confirm-etype',
  templateUrl: './confirm-etype.component.html',
  styleUrls: ['./confirm-etype.component.scss'],
})
export class ConfirmEtypeComponent{
  @Input() choice: number;
  @Input() employeeType: EmployeeType;

  constructor(private modalCtrl: ModalController, public employeeService: EmployeeService,
    public router: Router, public activated: ActivatedRoute, public toastCtrl: ToastController) {
   }

   dismissModal() {
    this.modalCtrl.dismiss();
    //this.router.navigate(['../titles'],{relativeTo:this.activated});
  };
  //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(employeeType: EmployeeType){
    console.log(this.choice);
    if (this.choice === 1){
      //search duplicates
      if (this.employeeService.matchingEmployeeType(employeeType.description) != null)
      {
        console.log('Existing Title: ' + employeeType.description);
        //display duplicate alert
        //failure alert
        return;
      }
      else {
        console.log('Add Employee Type from confirm:');
        //CallRepoToCreate
        await this.employeeService.createEmployeeType(employeeType);
        await this.dismissModal();
        this.sucAdd();
      }

    } else if (this.choice === 2){
      console.log('Update Employee Type from confirm:');
      //CallRepoToUpdate
      await this.employeeService.updateEmployeeType(employeeType.employeeTypeID,employeeType);
      await this.dismissModal();
      this.sucUpdate();
    }

    //dismiss modal
    // await this.dismissModal();
    //
  }

  async returnFrom(){
      //1 = return to ADD
      //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.employeeType);
      await this.dismissModal();
      this.employeeService.addEmployeeTypeInfoModal(this.employeeType);
    } else if (this.choice === 2){
      console.log(this.employeeType);
      await this.dismissModal();
      this.employeeService.updateEmployeeTypeInfoModal(this.employeeType);
    }
  }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The employee type has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The employee type has been successfully updated!',
      duration: 2000
    });
    toast.present();
  }

}
