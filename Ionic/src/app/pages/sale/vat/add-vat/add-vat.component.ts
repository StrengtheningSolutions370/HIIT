import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-vat',
  templateUrl: './add-vat.component.html',
  styleUrls: ['./add-vat.component.scss'],
})
export class AddVatComponent implements OnInit{
  cVATForm: FormGroup = this.formBuilder.group({
    percentage: ['', [Validators.required]]
  });


  constructor(private modalCtrl: ModalController, public formBuilder: FormBuilder, ) { }

  get errorControl() {
    return this.cVATForm.controls;
  }

  ngOnInit(){
  }

  async submitForm() {
    if (!this.cVATForm.valid){
      console.log('Please provide all required fields');
    }
   else{
      console.log(this.cVATForm.value);
      //this.vatService.confirmVATModal(this.cVATForm.value.percentage);
  }
 }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
