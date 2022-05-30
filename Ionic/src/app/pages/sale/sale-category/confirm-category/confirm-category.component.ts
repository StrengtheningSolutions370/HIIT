import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { SaleCategory } from 'src/app/models/sale-category';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-confirm-category',
  templateUrl: './confirm-category.component.html',
  styleUrls: ['./confirm-category.component.scss'],
})
export class ConfirmCategoryComponent{
  @Input() choice: number;
  @Input() saleCategory: SaleCategory;
  alertCtrl: any;

  constructor(private modalCtrl: ModalController, public saleService: SalesService,
    public router: Router, public activated: ActivatedRoute, public toastCtrl: ToastController, alertCtrl: AlertController ) {
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  };

  //1 = confirm ADD
  //2 = confirm UPDATE
  async confirmChanges(saleCategory: SaleCategory){
    console.log(this.choice);
    if (this.choice === 1){
      //search duplicates
      if (this.saleService.matchingSaleCategory(saleCategory.name) != null &&
      this.saleService.matchingSaleCategory(saleCategory.description) != null)
      {
        console.log('Existing Sale Category: ' + saleCategory.name +': '+ saleCategory.description);
        this.duplicateAlert();
        return;
      }
      else{
        console.log('Add Sale Category from confirm:');
        //CallRepoToCreate
        await this.saleService.createSaleCategory(saleCategory);
         this.dismissModal();
        this.sucAdd();
      }
    } else if (this.choice === 2){
      console.log('Update Sale Category from confirm:');
      //CallRepoToUpdate
      await this.saleService.updateSaleCategory(saleCategory.saleCategoryID,saleCategory);
      this.dismissModal();
      this.sucUpdate();
    }
  }

  async returnFrom(){
    //1 = return to ADD
    //2 = return to UPDATE
    if (this.choice === 1){
      console.log(this.saleCategory);
      await this.dismissModal();
      this.saleService.addCategoryInfoModal(this.saleCategory);
    } else if (this.choice === 2){
      console.log(this.saleCategory);
      await this.dismissModal();
      this.saleService.updateCategoryInfoModal(this.saleCategory);
    }
  }

  async sucAdd() {
    const toast = await this.toastCtrl.create({
      message: 'The Sale Category has been successfully added!',
      duration: 2000
    });
    toast.present();
  }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The Sale Category has been successfully updated!',
      duration: 2000
    });
    toast.present();
  }

  async duplicateAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Sale Category Already Exists',
      message: 'The Sale Category Information entered already exists on the system',
      buttons: ['OK']
    });
   alert.present();
  }

}
