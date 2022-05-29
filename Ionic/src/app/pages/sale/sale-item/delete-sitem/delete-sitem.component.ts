import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController, ViewWillEnter, AlertController } from '@ionic/angular';
import { SaleItem } from 'src/app/models/sale-item';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-delete-sitem',
  templateUrl: './delete-sitem.component.html',
  styleUrls: ['./delete-sitem.component.scss'],
})
export class DeleteSitemComponent implements ViewWillEnter {

  @Input() saleItem: SaleItem;
  @Input() categoryName: string;

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public saleService: SalesService, private router: Router, private route: ActivatedRoute, private alertCtrl: AlertController) { }
  
    ionViewWillEnter() {
      console.log('DeleteSaleItem - ViewWillEnter');
      console.log(this.saleItem);
    }
  
    //Send through the id of the selected title to be deleted in the title service.
    async delete(id: number){
      this.saleService.deleteSaleItem(id);
      await this.dismissModal();
      this.sucDelete();
    }
  
    async sucDelete() {
      const toast = await this.toastCtrl.create({
        message: 'The Sale Item has been successfully deleted!',
        duration: 2000
      });
      toast.present();
    }
  
    async failureAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Could not delete Sale Item',
        message: 'There was an error deleting the sale item, please try again.',
        buttons: ['OK']
      });
      alert.present();
    }
  
    //Close the modal and navigate back to the venue page.
    dismissModal() {
      this.modalCtrl.dismiss();
    }
  

}
