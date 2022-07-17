import { Component,  Input } from '@angular/core';
import { ViewWillEnter} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  categoryDropDown! : SaleCategory[];

  quotable = false;

  itemImage! : File;
  itemImageBase64String! : any;

  //Creating the form to add the new sale category details, that will be displayed in the HTML component
  cSaleItemForm: FormGroup = this.formBuilder.group({
   itemName : ['', [Validators.required]],
   itemDescription : ['', [Validators.required]],
   itemQuantity : ['', [Validators.required, Validators.min(1)]],
   itemPhoto: [],
   itemPrice: ['', [Validators.required, Validators.min(1)]],
   itemSCategory: ['',[Validators.required]],
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
      console.log(error);
      this.itemImageBase64String = null;
    };
 }

 checkBoxToggle(check : any) {
   this.quotable = check.target.checked;
   console.log(this.quotable);
  //  if (this.quotable) {
  //    //is quotable
  //    this.cSaleItemForm.controls.itemPrice.setValue(1);
  //    this.cSaleItemForm.controls.itemQuantity.setValue(1);
  //    return;
  //  }
  //  console.log('here')
  //   this.cSaleItemForm.controls.itemPrice.setValue();
  //   this.cSaleItemForm.controls.itemQuantity.setValue(null);
 }

 constructor(private global: GlobalService, public formBuilder: FormBuilder,
   public saleService: SalesService, private repo : RepoService) { 
    this.saleService.getAllSaleCategories().subscribe(
      {
        next: data => {
          this.categoryDropDown = data.result;
          console.log(data);
        }
      }
    )
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
      this.cSaleItemForm.controls.itemSCategory.setValue(this.saleItem.SaleCategoryID);
    }
    }

     submitForm() {

       //if image was uploaded:
       //Confirm if this is optional, if so remove alert
       if (this.itemImageBase64String == null) {
        this.global.showAlert("Image failed to upload, please try again.","Image Error");
          return;       
       }

      var date = new Date();
      var epoch = date.getTime();

      let qoutableTemp = this.quotable;
      let priceTemp = Number(this.cSaleItemForm.controls['itemPrice'].value);
      let qtyTemp = this.cSaleItemForm.controls['itemQuantity'].value;
      if (qoutableTemp){
        priceTemp = null;
        qtyTemp = null;
      }

       //form is valid for submission
      var obj = {
        Name: this.cSaleItemForm.controls['itemName'].value,
        Photo: epoch + '_' + this.itemImage.name,
        Description: this.cSaleItemForm.controls['itemDescription'].value,
        Quotable: this.quotable,
        Price: priceTemp,
        Quantity: qtyTemp,
        SaleCategoryID: this.cSaleItemForm.controls['itemSCategory'].value.split(',')[0],
        inventoryItem:[] // we need to auto populate this - either from the frontend or on the API
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
