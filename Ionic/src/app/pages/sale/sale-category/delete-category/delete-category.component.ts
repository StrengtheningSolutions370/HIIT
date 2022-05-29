import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter, AlertController } from '@ionic/angular';
import { SaleCategory } from 'src/app/models/sale-category';
import { SalesService } from 'src/app/services/sales/sales.service';


@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss'],
})
export class DeleteCategoryComponent implements ViewWillEnter {
  @Input() saleCategory: SaleCategory;


  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
  public saleService: SalesService, private router: Router, private route: ActivatedRoute, private alertCtrl: AlertController) { }

  ionViewWillEnter() {
    console.log('DeleteSaleCategory - ViewWillEnter');
    console.log(this.saleCategory);
  }

  //Send through the id of the selected title to be deleted in the title service.
  // async delete(id: number){
  //   this.saleService.deleteSaleCategory(id);
  //   await this.dismissModal();
  //   this.sucDelete();
  // }

  async sucDelete() {
    const toast = await this.toastCtrl.create({
      message: 'The Sale Category has been successfully deleted!',
      duration: 2000
    });
    toast.present();
  }

  async failureAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Could not delete Sale Category',
      message: 'There was an error deleting the sale Category, please try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  //Close the modal and navigate back to the venue page.
  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
