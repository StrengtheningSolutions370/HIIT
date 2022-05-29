import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter, AlertController } from '@ionic/angular';
import { Vat } from 'src/app/models/vat';
import { VatService } from 'src/app/services/vat/vat.service';

@Component({
  selector: 'app-delete-vat',
  templateUrl: './delete-vat.component.html',
  styleUrls: ['./delete-vat.component.scss'],
})
export class DeleteVatComponent implements ViewWillEnter{

  @Input() vat: Vat;
  
  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public vatService: VatService, private router: Router, private route: ActivatedRoute, private alertCtrl: AlertController) { }

    ionViewWillEnter() {
      console.log("DeleteVat - ViewWillEnter");
      console.log(this.vat);
    }

  //Send through the id of the selected vat to be deleted in the vat service.
   delete(id: number){
    this.vatService.deleteVat(id);
     this.dismissModal();
    this.sucDelete();
  }

  async sucDelete() {
    const toast = await this.toastCtrl.create({
      message: 'The VAT has been successfully deleted!',
      duration: 2000
    });
    toast.present();
  }

  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not delete VAT',
      message: 'There was an error deleting the VAT, please try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  //Close the modal and navigate back to the vat page.
  dismissModal() {
    this.modalCtrl.dismiss();
  }


}
