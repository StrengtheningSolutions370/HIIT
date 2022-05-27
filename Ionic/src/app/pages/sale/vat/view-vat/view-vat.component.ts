import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ViewWillEnter } from '@ionic/angular';
import { Vat } from 'src/app/models/vat';

@Component({
  selector: 'app-view-vat',
  templateUrl: './view-vat.component.html',
  styleUrls: ['./view-vat.component.scss'],
})
export class ViewVatComponent implements ViewWillEnter{

  @Input() vat: Vat;

  constructor(private modalCtrl: ModalController, public fb:FormBuilder) { 
  }

  ionViewWillEnter() {
    console.log("viewSpecificVat-ViewWillEnter");
    console.log(this.vat);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  dateFormatter(s : any) : string {
    return s.split("T")[0];
  }

}
