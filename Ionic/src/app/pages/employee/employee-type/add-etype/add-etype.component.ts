/* eslint-disable @typescript-eslint/dot-notation */
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController, ToastController, ViewWillEnter } from '@ionic/angular';
import { EmployeeType } from 'src/app/models/employeeType';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-add-etype',
  templateUrl: './add-etype.component.html',
  styleUrls: ['./add-etype.component.scss'],
})
export class AddEtypeComponent implements ViewWillEnter {
  @Input() employeeType: EmployeeType;

  //Creating the form to add the new venue details, that will be displayed in the HTML component
  cEmployeeTypeForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });


  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public employeeService: EmployeeService, private router: Router,
    private alertCtrl: AlertController) { }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cEmployeeTypeForm.controls;
  }

  ionViewWillEnter(): void {
    console.log('Add Employee Type - View Will Enter');
    console.log(this.employeeType);
    if (this.employeeType != null) {
      this.cEmployeeTypeForm.controls.description.setValue(this.employeeType.description);
    }
  }

  submitForm() {
    if (!this.cEmployeeTypeForm.valid) {
      console.log('Please provide all required fields');
      return false;
    } else {
      const temp = {
        name: this.cEmployeeTypeForm.value['name'],
        description: this.cEmployeeTypeForm.value['description'],
        users: []
      };
      this.dismissModal();
      this.employeeService.confirmEmployeeTypeModal(1, temp);

      // this.sucAdd();
      // console.log("CurrentRoute:ADD");
      // console.log(this.currentRoute.url);
    }
  }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The Title has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  //Once the modal has been dismissed.
  dismissModal() {
    this.modalCtrl.dismiss();
  };

  async duplicateAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Title Already Exists',
      message: 'The Title Information entered already exists on the system',
      buttons: ['OK']
    });
    alert.present();
  }

  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not create title',
      message: 'There was an error creating the title. Please try again',
      buttons: ['OK']
    });
    alert.present();
  }

}
