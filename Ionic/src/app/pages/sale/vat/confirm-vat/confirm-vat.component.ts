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
  @Input() choice: number;
  @Input() vat: Vat;

  constructor(private modalCtrl: ModalController, public vatService: VatService,
    public router: Router, public activated: ActivatedRoute, public toastCtrl : ToastController) {
   }

   dismissModal() {
    this.modalCtrl.dismiss();
    //this.router.navigate(['../titles'],{relativeTo:this.activated});
  };
  //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(vat: Vat){
    console.log(this.choice);
    if (this.choice === 1){
      //search duplicates
      //confirm to string here
      if (this.vatService.matchingVat(vat.percentage.toString()) != null)
      {
        console.log('Existing Vat: ' + vat.percentage);
        //display duplicate alert
        //failure alert
        return;
      }
      else {
        console.log('Add Vat from confirm:');
        //CallRepoToCreate
        await this.vatService.createVat(vat);
        await this.dismissModal();
        this.sucAdd();
      }

    } else if (this.choice === 2){
      console.log('Update Vat from confirm:');
      //CallRepoToUpdate
      await this.vatService.updateVat(vat.vatid,vat);
      this.dismissModal();
      this.sucUpdate();
    }

    //dismiss modal
    // await this.dismissModal();
    //
  }

  async returnFrom(){
      //1 = return to ADD
      //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.vat);
      await this.dismissModal();
      this.vatService.addVatInfoModal(this.vat);
    } else if (this.choice === 2){
      console.log(this.vat);
      await this.dismissModal();
      this.vatService.updateVatInfoModal(this.vat);
    }
  }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The Vat has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The Vat has been successfully updated!',
      duration: 2000
    });
    toast.present();
  }

}
