import { Component,  Input, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController, ViewWillEnter, IonDatetime} from '@ionic/angular';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
import { ActivatedRoute, Router } from '@angular/router';
import { Vat } from 'src/app/models/vat';
import { VatService } from 'src/app/services/vat/vat.service';
import { GlobalService } from 'src/app/services/global/global.service';

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


  constructor(public global: GlobalService, private toastCtrl: ToastController, public formBuilder: FormBuilder,
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
        this.global.dismissModal();
        this.global.showToast("The Vat has been successfully added!");
        this.vatService.confirmVatModal(temp);
      }
     }
}
