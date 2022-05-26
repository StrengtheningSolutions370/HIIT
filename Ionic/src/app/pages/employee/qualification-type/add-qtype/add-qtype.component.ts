import { Component, Input, OnInit  } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { QualificationType } from 'src/app/models/qualification-type';
import { QualificationService } from 'src/app/services/qualification/qualification.service';

@Component({
  selector: 'app-add-qtype',
  templateUrl: './add-qtype.component.html',
  styleUrls: ['./add-qtype.component.scss'],
})
export class AddQtypeComponent implements ViewWillEnter {
  @Input() qualificationType: QualificationType;

  //Creating the form to add the new venue details, that will be displayed in the HTML component
  cQTypeForm: FormGroup = this.formBuilder.group({
    qualificationTypeName: ['', [Validators.required]]
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public qualificationService: QualificationService, private router: Router, private currentRoute: ActivatedRoute,
    private  alertCtrl: AlertController ) { }

    //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cQTypeForm.controls;
  }

  ionViewWillEnter(): void {
    console.log("AddQualificationType-ViewWillEnter");
    console.log(this.qualificationType);
    if (this.qualificationType !=null){
      this.cQTypeForm.controls.qualificationTypeName.setValue(this.qualificationType.name)
    }

  }

  submitForm() {
    if (!this.cQTypeForm.valid){
      console.log('Please provide all required fields');
      return false;
    }else{
      var temp = {
        name: this.cQTypeForm.value['qualificationTypeName'],
        qualifications: []       
      };
      this.dismissModal();
      this.qualificationService.confirmQualificationTypeModal(1,temp);
     
       //this.sucAdd();
      // console.log("CurrentRoute:ADD");
      // console.log(this.currentRoute.url);
    }
   }

   async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The Qualification Type has been successfully added!',
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
      header: 'Qualification Type Already Exists',
      message: 'The Qualificaion Type Information entered already exists on the system',
      buttons: ['OK']
    });
    alert.present();
  }

  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not create qualification type',
      message: 'There was an error updating the qualification type. Please try again',
      buttons: ['OK']
    });
    alert.present();
  }


}
