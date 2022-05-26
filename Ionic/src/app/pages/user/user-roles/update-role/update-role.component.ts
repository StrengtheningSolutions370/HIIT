/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { UserRole } from 'src/app/models/userRole';
import { UserService } from 'src/app/services/user/user.service';
import { VenueService } from 'src/app/services/venue/venue.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss'],
})
export class UpdateRoleComponent {
  @Input() userRole: UserRole;

  permissions = [
    {
      des: 'Create employee accounts'
    },
    {
      des: 'Update profile information'
    },
    {
      des: 'View Access to client data '
    },
    {
      des: 'Run as-hoc reporting'
    }
  ];

  uUserRoleForm: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    // permissions: this.formBuilder.array([], [Validators.required])
  });

  constructor(private modalCtrl: ModalController,
    private toastCtrl: ToastController, public fb: FormBuilder,
    public userService: UserService, private alertCtrl: AlertController) { }

  //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.uUserRoleForm.controls;
  }

  ionViewWillEnter() {
    console.log('Update User Role - View Will Enter');
    console.log(this.userRole);
    this.uUserRoleForm.controls.name.setValue(this.userRole.name);
    this.uUserRoleForm.controls.description.setValue(this.userRole.description);
    //Populate the update venue form with the values received from the selected venue object in the main page.
  }

  submitForm() {
    if (!this.uUserRoleForm.valid) { //If the form has any validation errors, the form will not be submitted.
      console.log('Please provide all required fields');
      this.InvalidAlert();
      return false;
    }
    else {
      console.log('Inside Update Submit:');
      let temp = new UserRole();
      const choice = 2;
      temp = {
        userRoleID: this.userRole.userRoleID,
        name: this.uUserRoleForm.value['name'],
        description: this.uUserRoleForm.value['description'],
        users: []
      };
      console.log(temp);
      this.userService.confirmUserRoleModal(choice, temp);
      this.dismissModal();
      this.sucUpdate();
    }
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The user role has been successfully updated!',
      duration: 2000,
      position: 'top'
    });
    toast.present();
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
      header: 'User Role Already Exists',
      message: 'The User Role Information entered already exists on the system',
      buttons: ['OK']
    });
    alert.present();
  }

  async FailureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not update user role',
      subHeader: 'There was an error updating the user role. Please try again',
      //Enter SQL Code Error here
      message: 'SQL Code Error',
      buttons: ['OK']
    });
    alert.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
