/* eslint-disable @typescript-eslint/dot-notation */
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { UserRole } from 'src/app/models/userRole';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent implements ViewWillEnter {

  //Creating the form to add the new venue details, that will be displayed in the HTML component
  cUserRoleForm: FormGroup = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    permissions: new FormArray([])
  });

  permissions=[
    {
      des : 'Create employee accounts'
    },
    {
      des : 'Update profile information'
    },
    {
      des : 'View Access to client data '
    },
    {
      des : 'Run as-hoc reporting'
    }
  ];


  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public userService: UserService, private router: Router, private currentRoute: ActivatedRoute,
    private  alertCtrl: AlertController ) { }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cUserRoleForm.controls;
  }

  get permissionsFormArray() {
    return this.cUserRoleForm.controls.permissions as FormArray;
}

  ionViewWillEnter(): void {
    console.log('Add User Role - View Will Enter');
    this.permissions.forEach(() =>
    this.permissionsFormArray.push(new FormControl(false))
  );
  }



  submitForm() {
    if (!this.cUserRoleForm.valid){
      console.log('Please provide all required fields');
      return false;
    }else{
      const temp = {
        name: this.cUserRoleForm.value['name'],
        description: this.cUserRoleForm.value['description'],
        permissions: [],
        //permissions: this.cUserRoleForm.value['permission'],
        users: []
      };
      this.userService.confirmUserRoleModal(1,temp);
      this.dismissModal();
    }
   }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The User Role has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  async duplicateAlert() {
    const alert = await this.alertCtrl.create({
      header: 'User Role Exists',
      message: 'The User Role Information entered already exists on the system',
      buttons: ['OK']
    });
    alert.present();
  }

  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not create user role',
      message: 'There was an error updating the user role. Please try again',
      buttons: ['OK']
    });
    alert.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
