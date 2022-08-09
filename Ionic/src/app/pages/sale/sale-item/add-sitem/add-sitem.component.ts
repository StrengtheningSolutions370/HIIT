import { Component,  Input } from '@angular/core';
import { ViewWillEnter} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
import { SaleItem } from 'src/app/models/sale-item';
import { SaleCategory } from 'src/app/models/sale-category';
import { SalesService } from 'src/app/services/sales/sales.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RepoService } from 'src/app/services/repo.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-add-sitem',
  templateUrl: './add-sitem.component.html',
  styleUrls: ['./add-sitem.component.scss'],
})
export class AddSitemComponent implements ViewWillEnter {

  @Input() saleItem: SaleItem;
  categoryDropDown!: SaleCategory[];

  quotable = false;

  itemImage!: File;
  itemImageBase64String!: any;

  //Creating the form to add the new sale category details, that will be displayed in the HTML component
  cSaleItemForm: FormGroup = this.formBuilder.group({
   itemName : ['', [Validators.required]],
   itemDescription : ['', [Validators.required]],
   itemQuantity : ['', [Validators.required, Validators.min(1)]],
   itemStock : ['', [Validators.required, Validators.min(1)]],
   itemPhoto: [],
   itemCost: ['', [Validators.required, Validators.min(1)]],
   itemPrice: ['', [Validators.required, Validators.min(1)]],
   itemSCategory: ['',[Validators.required]],
   itemQuotable: []
 });

 addImage(event: any) {
   this.itemImage = event.target.files[0];
  console.log(this.itemImage);
   const re = /^image*/;

   if (this.itemImage.type.match(re)) {
    this.getBase64(this.itemImage);
   }
  }

  getBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // console.log(reader.result);
      this.itemImageBase64String = reader.result;
    };
    reader.onerror = (error) => {
      console.log(error);
      this.itemImageBase64String = null;
    };
 }

 checkBoxToggle(check: any) {
   this.quotable = check.target.checked;
   console.log(this.quotable);
   if (this.quotable) {
     //is quotable
     this.cSaleItemForm.controls.itemPrice.disable();
     this.cSaleItemForm.controls.itemCost.disable();
     this.cSaleItemForm.controls.itemQuantity.disable();
     this.cSaleItemForm.controls.itemStock.disable();
     return;
   }
   console.log('here')
   this.cSaleItemForm.controls.itemPrice.enable();
   this.cSaleItemForm.controls.itemCost.enable();
   this.cSaleItemForm.controls.itemQuantity.enable();
   this.cSaleItemForm.controls.itemStock.enable();
   
 }

 constructor(public global: GlobalService, public formBuilder: FormBuilder,
   public saleService: SalesService, private repo: RepoService) {
    this.saleService.getAllSaleCategories().subscribe(
      {
        next: data => {
          this.categoryDropDown = data.result;
          console.log(data);
        }
      }
    );
   }

   //Used for validation within the form, if there are errors in the control, this method will return the errors.
   get errorControl() {
     return this.cSaleItemForm.controls;
   }

   ionViewWillEnter(): void {

    //populating the dropdown for saleCategory:
    this.saleService.getAllSaleCategories().subscribe(
      {
        next: data => {
          this.categoryDropDown = data.result;
          console.log(data);
        }
      }
    );

    console.log("AddSaleItem-ViewWillEnter");

    if (this.saleItem !=null){
      console.log(this.saleItem);
      this.cSaleItemForm.controls.itemName.setValue(this.saleItem.name);
      this.cSaleItemForm.controls.itemDescription.setValue(this.saleItem.description);
      this.cSaleItemForm.controls.itemPhoto.setValue(this.itemImageBase64String);
      this.cSaleItemForm.controls.itemQuotable.setValue(this.saleItem.quotable);
      this.cSaleItemForm.controls.itemQuantity.setValue(this.saleItem.quantityOnHand);
      this.cSaleItemForm.controls.itemStock.setValue(this.saleItem.stock);
      this.cSaleItemForm.controls.itemSCategory.setValue(this.saleItem.saleCategoryID);
    }
    }

     submitForm() {

       //if image was uploaded:
       if (this.itemImageBase64String == null) {
        let str = "Image failed to upload." + '\n'+ "please try again."
        this.global.showAlert(str,"Image Error");
          return;       
       }


       if (this.cSaleItemForm.controls['itemSCategory'].value[0] == null) {
        this.global.showAlert("No Sale Category provided","Error updating sale item");
        return;
      }

      var date = new Date();
      var epoch = date.getTime();

      let qoutableTemp = this.quotable;
      let priceTemp = Number(this.cSaleItemForm.controls['itemPrice'].value);
      let costTemp = Number(this.cSaleItemForm.controls['itemCost'].value);
      let qtyTemp = this.cSaleItemForm.controls['itemQuantity'].value;
      let stockTemp = this.cSaleItemForm.controls['itemStock'].value;

      if (qoutableTemp){
        priceTemp = 0;
        qtyTemp = 0;
        costTemp = 0;
        stockTemp = 0;
      }

       //form is valid for submission
      var obj: SaleItem = {
        name: this.cSaleItemForm.controls['itemName'].value,
        photo: epoch + '_' + this.itemImage.name,
        description: this.cSaleItemForm.controls['itemDescription'].value,
        quotable: this.quotable,
        priceHistory: [{
          costAmount: this.cSaleItemForm.value['itemCost'],
          saleAmount: this.cSaleItemForm.value['itemPrice'],
        }],
        quantityOnHand: qtyTemp,
        stock: stockTemp,
        saleCategoryID: this.cSaleItemForm.controls['itemSCategory'].value.split(',')[0],
        //inventoryItem:[] // we need to auto populate this - either from the frontend or on the API
      }


      console.log('ob');
      console.log(obj);


      //wait for image to upload:
      const formData = new FormData();
        console.log(this.itemImage);
        formData.append('file', this.itemImage, epoch + '_' + this.itemImage.name);

        this.repo.uploadSaleItemImage(formData).subscribe({
          next: data => {
            this.global.dismissModal();
            this.saleService.confirmSaleItemModal(1, obj, this.cSaleItemForm.value['itemSCategory'].split(',')[1], this.itemImageBase64String);
          },
          error: (err : HttpErrorResponse) => {
            this.global.showAlert(err.error,"ERROR uploading image");
          return;  
          }
        });

      }

}
