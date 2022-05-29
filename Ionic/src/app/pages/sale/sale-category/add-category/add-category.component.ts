import { Component,  Input, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController, ViewWillEnter} from '@ionic/angular';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
import { ActivatedRoute, Router } from '@angular/router';
import { SaleCategory } from 'src/app/models/sale-category';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements ViewWillEnter {

  @Input() saleCategory: SaleCategory;

   //Creating the form to add the new sale category details, that will be displayed in the HTML component
   cSaleCategoryForm: FormGroup = this.formBuilder.group({
    categoryName : ['', [Validators.required]],
    categoryDescription : ['', [Validators.required]]
  });

  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
    public saleService: SalesService, private router: Router, private currentRoute: ActivatedRoute,
    private  alertCtrl: AlertController ) { }

    //Used for validation within the form, if there are errors in the control, this method will return the errors.
    get errorControl() {
      return this.cSaleCategoryForm.controls;
    }

    ionViewWillEnter(): void {
      console.log("AddSaleCategory-ViewWillEnter");
      console.log(this.saleCategory);
      if (this.saleCategory !=null){
        this.cSaleCategoryForm.controls.categoryName.setValue(this.saleCategory.name);
        this.cSaleCategoryForm.controls.categoryDescription.setValue(this.saleCategory.description);}
      }

      submitForm() {
        if (!this.cSaleCategoryForm.valid){
          console.log('Please provide all required fields');
          return false;
        }else{
          const temp = {
            name: this.cSaleCategoryForm.value['categoryName'],
            description: this.cSaleCategoryForm.value['categoryDescription'],
            items: []
          };
          this.dismissModal();
          //this.saleService.confirmSaleCategoryModal(1,temp);

          // this.sucAdd();
          // console.log("CurrentRoute:ADD");
          // console.log(this.currentRoute.url);
        }
       }

      async sucAdd() {
        const toast = await this.toastCtrl.create({
          message: 'The Sale Category has been successfully added!',
          duration: 2000,
          position : 'top'
        });
        toast.present();
      }

      //Once the modal has been dismissed.
      dismissModal() {
        this.modalCtrl.dismiss();
      };

      async duplicateAlert() {
        const alert = await this.alertCtrl.create({
          header: 'Sale Category Already Exists',
          message: 'The Sale Category Information entered already exists on the system',
          buttons: ['OK']
        });
        alert.present();
      }

      async failureAlert() {
        const alert = await this.alertCtrl.create({
          header: 'Could not create sale category',
          message: 'There was an error creating the sale category. Please try again',
          buttons: ['OK']
        });
        alert.present();
      }

}
