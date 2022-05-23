/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, ToastController, ViewWillEnter } from '@ionic/angular';
import { EmployeeType } from 'src/app/models/employeeType';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-update-etype',
  templateUrl: './update-etype.component.html',
  styleUrls: ['./update-etype.component.scss'],
})
export class UpdateEtypeComponent implements ViewWillEnter {
  @Input() employeeType: EmployeeType;

  uEmployeeTypeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl ('', [Validators.required]),
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public fb: FormBuilder,
    public employeeService: EmployeeService, private alertCtrl: AlertController) { }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.uEmployeeTypeForm.controls;
  }

  ionViewWillEnter() {
    console.log('Update Employee Type -View Will Enter');
    console.log(this.employeeType);
    this.uEmployeeTypeForm.controls.venueName.setValue(this.employeeType.name);
    this.uEmployeeTypeForm.controls.location.setValue(this.employeeType.description);
    //Populate the update venue form with the values received from the selected venue object in the main page.
}
submitForm() {
  if (!this.uEmployeeTypeForm.valid) { //If the form has any validation errors, the form will not be submitted.
    console.log('Please provide all required fields');
    this.InvalidAlert();
    return false;
  }
  else
  {
    console.log('InsideUpdateSubmit:');
    let temp = new EmployeeType();
    const choice = 2;
    temp = {
      employeeTypeID: this.employeeType.employeeTypeID,
      name: this.uEmployeeTypeForm.value['name'],
      description: this.uEmployeeTypeForm.value['description'],
      employees: []
    };
      console.log(temp);
     this.employeeService.confirmEmployeeTypeModal(choice,temp);
     this.dismissModal();
  }
}

async sucUpdate() {
  const toast = await this.toastCtrl.create({
    message: 'The Employee Type has been successfully updated!',
    duration: 2000,
    position : 'top'
  });
  toast.present();
}

dismissModal() {
 this.modalCtrl.dismiss(this.employeeType);
}

async InvalidAlert() {
  const alert = await this.alertCtrl.create({
    header: 'Invalid Input',
    message: 'Please provide all required fields and ensure that the information is in the correct format',
    buttons: ['OK']
  });
  alert.present();
}

async DuplicateAlert() {
  const alert = await this.alertCtrl.create({
    header: 'Employee Type Already Exists',
    message: 'The Employee Type Information entered already exists on the system',
    buttons: ['OK']
  });
 alert.present();
}

async FailureAlert() {
  const alert = await this.alertCtrl.create({
    header: 'Could not update Employee Type',
    subHeader : 'There was an error updating the Employee Type. Please try again',
    //Enter SQL Code Error here
    message: 'SQL Code Error',
    buttons: ['OK']
  });
  alert.present();
}
}
