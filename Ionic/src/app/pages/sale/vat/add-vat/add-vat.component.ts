import { Component,  Input, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController, ViewWillEnter, IonDatetime} from '@ionic/angular';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
import { ActivatedRoute, Router } from '@angular/router';
import { Vat } from 'src/app/models/vat';
import { VatService } from 'src/app/services/vat/vat.service';

@Component({
  selector: 'app-add-vat',
  templateUrl: './add-vat.component.html',
  styleUrls: ['./add-vat.component.scss'],
})
export class AddVatComponent implements ViewWillEnter{

  @Input() vat: Vat;

  //Creating the form to add the new vat details, that will be displayed in the HTML component
  cVATForm: FormGroup = this.formBuilder.group({
    percentage: ['', [Validators.required, Validators.min(1)]]
  });


  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public vatService: VatService, private router: Router, private currentRoute: ActivatedRoute,
    private  alertCtrl: AlertController ) { }

    //Used for validation within the form, if there are errors in the control, this method will return the errors.
  get errorControl() {
    return this.cVATForm.controls;
  }

  ionViewWillEnter(): void {
    console.log("AddVat-ViewWillEnter");
    console.log(this.vat);
    if (this.vat !=null){
      this.cVATForm.controls.percentage.setValue(this.vat.percentage);}
    }

    submitForm() {
      if (!this.cVATForm.valid){
        console.log('Please provide all required fields');
        return false;
      }else{
        var temp = {
          percentage: this.cVATForm.value['percentage'],
          date: IonDatetime       
        }; 
        this.dismissModal();
        this.vatService.confirmVatModal(1,temp);
       
        // this.sucAdd();
        // console.log("CurrentRoute:ADD");
        // console.log(this.currentRoute.url);
      }
     }
  
    async sucAdd() {
      const toast = await this.toastCtrl.create({
        message: 'The Vat has been successfully added!',
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
        header: 'Vat Already Exists',
        message: 'The Vat Information entered already exists on the system',
        buttons: ['OK']
      });
      alert.present();
    }
  
    async failureAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Could not create vat',
        message: 'There was an error creating the vat. Please try again',
        buttons: ['OK']
      });
      alert.present();
    }

}
