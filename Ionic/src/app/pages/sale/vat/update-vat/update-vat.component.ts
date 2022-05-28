import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController, AlertController, ViewWillEnter, IonDatetime } from '@ionic/angular';
import { Vat } from 'src/app/models/vat';
import { VatService } from 'src/app/services/vat/vat.service';

@Component({
  selector: 'app-update-vat',
  templateUrl: './update-vat.component.html',
  styleUrls: ['./update-vat.component.scss'],
})
export class UpdateVatComponent {

  @Input() vat: Vat;

  //Creating the form to add the new vat details, that will be displayed in the HTML component
  uVATForm: FormGroup = new FormGroup({
    percentage: new FormControl('', [Validators.required, Validators.min(1)])
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public fb: FormBuilder,
    public vatService: VatService, private alertCtrl: AlertController) { }

    //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.uVATForm.controls;
  }

  ionViewWillEnter() {
    console.log('UpdateVat-ViewWillEnter');
    console.log(this.vat);
    this.uVATForm.controls.percentage.setValue(this.vat.percentage);
    //Populate the update vat form with the values received from the selected vat object in the main page.
  }

  submitForm() {
    if (!this.uVATForm.valid) { //If the form has any validation errors, the form will not be submitted.
      console.log('Please provide all required fields');
      this.InvalidAlert();
      return false;
    }
    else
    {
      console.log('InsideUpdateSubmit:');
      var temp = new Vat();
      const choice = 2;
      temp = {
        vatid: this.vat.vatid,
        percentage: this.uVATForm.value['percentage'],
        //double check this date
        date: this.vat.date
      };
        console.log(temp);
       this.vatService.confirmVatModal(choice,temp);
       this.dismissModal();
    }
}

   async sucUpdate() {
     const toast = await this.toastCtrl.create({
       message: 'The VAT has been successfully updated!',
       duration: 2000,
       position : 'top'
     });
     toast.present();
   }

  dismissModal() {
    this.modalCtrl.dismiss();
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
       header: 'VAT Already Exists',
       message: 'The VAT Information entered already exists on the system',
       buttons: ['OK']
     });
    alert.present();
  }

   async FailureAlert() {
     const alert = await this.alertCtrl.create({
       header: 'Could not update VAT',
       subHeader : 'There was an error updating the VAT. Please try again',
       //Enter SQL Code Error here
       message: 'SQL Code Error',
       buttons: ['OK']
     });
     alert.present();
   }

}
