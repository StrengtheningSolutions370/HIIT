import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter, AlertController } from '@ionic/angular';
import { Vat } from 'src/app/models/vat';
import { GlobalService } from 'src/app/services/global/global.service';
import { VatService } from 'src/app/services/vat/vat.service';

@Component({
  selector: 'app-delete-vat',
  templateUrl: './delete-vat.component.html',
  styleUrls: ['./delete-vat.component.scss'],
})
export class DeleteVatComponent implements ViewWillEnter{

  @Input() vat: Vat;
  
  constructor(public global: GlobalService, public formBuilder: FormBuilder,
    public vatService: VatService) { }

    ionViewWillEnter() {
      console.log("DeleteVat - ViewWillEnter");
      console.log(this.vat);
    }

  //Send through the id of the selected vat to be deleted in the vat service.
   delete(id: number){
    this.vatService.deleteVat(id);
    this.global.dismissModal();
    this.global.showToast("The VAT has been successfully deleted!");
  }

}
