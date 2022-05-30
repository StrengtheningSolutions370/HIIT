import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { SaleItem } from 'src/app/models/sale-item';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-confirm-sitem',
  templateUrl: './confirm-sitem.component.html',
  styleUrls: ['./confirm-sitem.component.scss'],
})
export class ConfirmSitemComponent {
  @Input() choice: number;
  @Input() saleItem: SaleItem;
  @Input() categoryName: string;
  @Input() image : any;
  alertCtrl: any;

  constructor(private modalCtrl: ModalController, public saleService: SalesService,
    public router: Router, public activated: ActivatedRoute, public toastCtrl: ToastController, alertCtrl: AlertController ) {
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  };

  //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(saleItem: SaleItem){
    console.log(this.choice);
    if (this.choice === 1){
      //search duplicates
      if (this.saleService.matchingSaleItem(saleItem.Name) != null &&
      this.saleService.matchingSaleItem(saleItem.Description) != null)
      {
        console.log('Existing Sale Item: ' + saleItem.Name +': '+ saleItem.Description);
        this.duplicateAlert();
        return;
      }
      else{
        console.log('Add Sale Item from confirm:');
        //CallRepoToCreate
        await this.saleService.createSaleItem(saleItem);
        await this.dismissModal();
        this.sucAdd();
      }
    } else if (this.choice === 2){
      console.log('Update Sale Item from confirm:');
      //CallRepoToUpdate
      await this.saleService.updateSaleItem(saleItem.SaleItemID,saleItem);
      this.dismissModal();
      this.sucUpdate();
    }
  }

  async returnFrom(){
    //1 = return to ADD
    //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.saleItem);
      await this.dismissModal();
      this.saleService.addSaleItemInfoModal(this.saleItem);
    } else if (this.choice === 2){
      console.log(this.saleItem);
      await this.dismissModal();
      this.saleService.updateSaleItemInfoModal(this.saleItem);
    }
  }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The Sale Item has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The Sale Item has been successfully updated!',
      duration: 2000
    });
    toast.present();
  }

  async duplicateAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Sale Item Already Exists',
      message: 'The Sale Item Information entered already exists on the system',
      buttons: ['OK']
    });
   alert.present();
  }

}
