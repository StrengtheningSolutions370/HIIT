import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { SaleCategory } from 'src/app/models/sale-category';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent {
  @Input() saleCategory: SaleCategory;

  uSaleCategoryForm: FormGroup = new FormGroup({
    categoryDescription: new FormControl('', [Validators.required]),
    categoryName: new FormControl('', [Validators.required])
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public fb: FormBuilder,
  public saleService: SalesService, private alertCtrl: AlertController) { }

    //Used for validation within the form, if there are errors in the control, this method will return the errors.
    get errorControl() {
      return this.uSaleCategoryForm.controls;
    }

    ionViewWillEnter() {
      console.log('UpdateSaleCategory-ViewWillEnter');
      console.log(this.saleCategory);
      this.uSaleCategoryForm.controls.categoryName.setValue(this.saleCategory.name);
      this.uSaleCategoryForm.controls.categoryDescription.setValue(this.saleCategory.description);
    }

  //   submitForm() {
  //     if (!this.uSaleCategoryForm.valid) { //If the form has any validation errors, the form will not be submitted.
  //       console.log('Please provide all required fields');
  //       this.invalidAlert();
  //       return false;
  //     }
  //     else
  //     {
  //       console.log('InsideUpdateSubmit:');
  //       var temp = new SaleCategory();
  //       const choice = 2;
  //       temp = {
  //         saleCategoryID: this.saleCategory.saleCategoryID,
  //         name: this.uSaleCategoryForm.value['categoryName'],
  //         description: this.uSaleCategoryForm.value['categoryDescription'],
  //         items: []
  //       };
  //        console.log(temp);
  //        this.saleService.confirmSaleCategoryModal(choice,temp);
  //        this.dismissModal();
  //     }
  // }

  async sucUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'The Sale Category has been successfully updated!',
      duration: 2000,
      position : 'top'
    });
    toast.present();
  }

 dismissModal() {
   this.modalCtrl.dismiss();
 }

 async invalidAlert() {
  const alert = await this.alertCtrl.create({
    header: 'Invalid Input',
    message: 'Please provide all required fields and ensure that the information is in the correct format',
    buttons: ['OK']
  });
  alert.present();
}

async failureAlert() {
  const alert = await this.alertCtrl.create({
    header: 'Could not update sale category',
    subHeader : 'There was an error updating the sale category. Please try again',
    buttons: ['OK']
  });
  alert.present();
}


}
