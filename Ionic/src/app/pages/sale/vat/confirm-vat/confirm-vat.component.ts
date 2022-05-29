import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Vat } from 'src/app/models/vat';
import { GlobalService } from 'src/app/services/global/global.service';
import { VatService } from 'src/app/services/vat/vat.service';

@Component({
  selector: 'app-confirm-vat',
  templateUrl: './confirm-vat.component.html',
  styleUrls: ['./confirm-vat.component.scss'],
})
export class ConfirmVatComponent {
  @Input() vat: Vat;

  constructor(public vatService: VatService, public global : GlobalService) {
   }
  async confirmChanges(vat: Vat){

      //search duplicates
      //confirm to string here
      if (this.vatService.matchingVat(vat.percentage.toString()) != null)
      {
        console.log('Existing Vat: ' + vat.percentage);
        this.global.showAlert("Existing VAT record");
        //display duplicate alert
        //failure alert
        return;
      }
      else {
        console.log('Add Vat from confirm:');
        //CallRepoToCreate
        this.vatService.createVat(vat);
        this.global.dismissModal();
        this.global.showToast("The Vat has been successfully added!");
      }
  }

  async returnFrom(){
      console.log(this.vat);
      this.global.dismissModal();
      this.vatService.addVatInfoModal(this.vat);
  }

}
