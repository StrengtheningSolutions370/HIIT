import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent implements OnInit {

  cUserRoleForm: FormGroup = this.formBuilder.group({
    userRoleName: ['', [Validators.required]],
    userRoleDes: ['', [Validators.required]],
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

  constructor(private modalCtrl: ModalController, public formBuilder: FormBuilder) { }

  get errorControl() {
    return this.cUserRoleForm.controls;
  }

  ngOnInit(){
  }

  async submitForm() {
    if (!this.cUserRoleForm.valid){
      console.log('Please provide all required fields');
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
