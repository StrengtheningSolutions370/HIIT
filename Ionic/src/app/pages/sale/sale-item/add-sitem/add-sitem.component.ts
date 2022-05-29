import { Component,  Input, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController, ViewWillEnter} from '@ionic/angular';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
import { ActivatedRoute, Router } from '@angular/router';
import { SaleItem } from 'src/app/models/sale-item';
import { SaleCategory } from 'src/app/models/sale-category';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-add-sitem',
  templateUrl: './add-sitem.component.html',
  styleUrls: ['./add-sitem.component.scss'],
})
export class AddSitemComponent implements ViewWillEnter {

  @Input() saleItem: SaleItem;
  categoryDropDown! : SaleCategory[];

  quotable = false;

  itemImage! : File;
  itemImageBase64String! : any;

  //Creating the form to add the new sale category details, that will be displayed in the HTML component
  cSaleItemForm: FormGroup = this.formBuilder.group({
   itemName : [, [Validators.required]],
   itemDescription : [, [Validators.required]],
   itemQuantity : [, [Validators.required, Validators.min(1)]],
   itemPhoto: [],
   itemPrice: [, [Validators.required]],
   itemSCategory: [],
   itemQuotable: []
 });

 addImage(event : any) {
   this.itemImage = event.target.files[0];
  console.log(this.itemImage);
   const re = /^image*/;

   if (this.itemImage.type.match(re)) {
    this.getBase64(this.itemImage);
   }
  }

  getBase64(file : File) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // console.log(reader.result);
      this.itemImageBase64String = reader.result;
    };
    reader.onerror = (error) => {
      this.itemImageBase64String = null;
    };
 }

 checkBoxToggle(check : any) {
   this.quotable = check.target.checked;
   if (check) {
     //is quotable
     this.cSaleItemForm.controls.itemPrice.setValue(0);
     this.cSaleItemForm.controls.itemQuantity.setValue(0);
     return;
   }
 }

 constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
   public saleService: SalesService, private router: Router, private currentRoute: ActivatedRoute,
   private  alertCtrl: AlertController ) { }

   //Used for validation within the form, if there are errors in the control, this method will return the errors.
   get errorControl() {
     return this.cSaleItemForm.controls;
   }

   ionViewWillEnter(): void {

    //populating the dropdown for saleCategory:
    this.saleService.getAllSaleCategories().subscribe(
      {
        next: data => {
          this.categoryDropDown = data;
          console.log(data);
        }
      }
    )

    console.log("AddSaleItem-ViewWillEnter");
    console.log(this.saleItem);
    if (this.saleItem !=null){
      this.cSaleItemForm.controls.itemName.setValue(this.saleItem.Name);
      this.cSaleItemForm.controls.itemDescription.setValue(this.saleItem.Description);
      this.cSaleItemForm.controls.itemPhoto.setValue(this.itemImageBase64String);
      this.cSaleItemForm.controls.itemPrice.setValue(this.saleItem.Price);
      this.cSaleItemForm.controls.itemQuotable.setValue(this.saleItem.Quotable);
      this.cSaleItemForm.controls.itemQuantity.setValue(this.saleItem.Quantity);
      this.cSaleItemForm.controls.itemSCategory.setValue(this.saleItem.SaleCategoryID)

    }
    }

     submitForm() {

       if (!this.cSaleItemForm.valid){

        //manual verification:
        if (this.quotable) {
          //price & quantity should be 0
          
          if (this.cSaleItemForm.controls['itemName'].value == null) {
            this.failureAlert();
            return;
          }
          if (this.cSaleItemForm.controls['itemDescription'].value == null) {
            this.failureAlert();
            return;
          }
          if (this.cSaleItemForm.controls['itemPhoto'].value == null) {
            this.failureAlert();
            return;
          }
          if (this.cSaleItemForm.controls['itemSCategory'].value == null) {
            this.failureAlert();
            return;
          }

        }
        else {
          this.failureAlert();
          return;
        }
         
       }

       //if image was uploaded:
       if (this.itemImageBase64String == null) {
        this.failureAlert();
        return;
       }

      var obj = new SaleItem();
      obj.Name = this.cSaleItemForm.value['itemName'];
      obj.Description = this.cSaleItemForm.value['itemDescription'];
      obj.Photo = this.cSaleItemForm.value['itemPhoto'];
      obj.Price = this.cSaleItemForm.value['itemPrice'];
      obj.Price = this.cSaleItemForm.value['itemPrice'];
      obj.Quotable = this.cSaleItemForm.value['itemQuotable'];
      obj.Quantity = this.cSaleItemForm.value['itemQuantity'];
      obj.SaleCategoryID = this.cSaleItemForm.value['itemSCategory'].split(',')[0];

      this.dismissModal();

      this.saleService.confirmSaleItemModal(1, obj, this.cSaleItemForm.value['itemSCategory'].split(',')[1], this.itemImageBase64String);

      // this.sucAdd();
      // console.log("CurrentRoute:ADD");
      // console.log(this.currentRoute.url);

      }

     async sucAdd() {
       const toast = await this.toastCtrl.create({
         message: 'The Sale Item has been successfully added!',
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
         header: 'Sale Item Already Exists',
         message: 'The Sale Item Information entered already exists on the system',
         buttons: ['OK']
       });
       alert.present();
     }

     async failureAlert() {
       const alert = await this.alertCtrl.create({
         header: 'Could not create sale item',
         message: 'There was an error creating the sale item. Please try again',
         buttons: ['OK']
       });
       alert.present();
     }
}
