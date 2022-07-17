import { Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewWillEnter } from '@ionic/angular';
import { SalesService } from 'src/app/services/sales/sales.service';
import { SaleCategory } from 'src/app/models/sale-category';
import { RepoService } from 'src/app/services/repo.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global/global.service';



@Component({
  selector: 'app-update-sitem',
  templateUrl: './update-sitem.component.html',
  styleUrls: ['./update-sitem.component.scss'],
})
export class UpdateSitemComponent {

@Input() saleItem: any;
categoryDropDown! : SaleCategory[];

quotable = false;

itemImage! : File;
itemImageBase64String! : any;

oldPrice! : number;
oldQuantity! : number;

checked = true;

//Creating the form to add the new sale category details, that will be displayed in the HTML component
uSaleItemForm: FormGroup = this.formBuilder.group({
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
 this.quotable = check;
 if (this.quotable) {
   //is quotable

   this.oldPrice = this.uSaleItemForm.controls['itemPrice'].value;
   this.oldQuantity = this.uSaleItemForm.controls['itemQuantity'].value;

   this.uSaleItemForm.controls.itemPrice.setValue(1);
   this.uSaleItemForm.controls.itemQuantity.setValue(1);
   return;
 }
  this.uSaleItemForm.controls.itemPrice.setValue(this.oldPrice);
  this.uSaleItemForm.controls.itemQuantity.setValue(this.oldQuantity);

}

constructor(private global: GlobalService, public formBuilder: FormBuilder,
 public saleService: SalesService, private repo : RepoService) {
}

 //Used for validation within the form, if there are errors in the control, this method will return the errors.
 get errorControl() {
   return this.uSaleItemForm.controls;
 }

 ionViewWillEnter(){

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
  if (this.saleItem !=null){

    this.checkBoxToggle(this.saleItem.quotable);

    if (!this.saleItem.quotable) {
      this.oldPrice = this.saleItem.price;
      this.oldQuantity = this.saleItem.quantity;
    }

    this.uSaleItemForm.reset({
      itemName : [this.saleItem.name],
      itemDescription : [this.saleItem.description],
      itemPhoto : this.itemImageBase64String,
      itemPrice : [this.saleItem.price],
      itemQuotable : [this.saleItem.quotable],
      itemSCategory : [this.saleItem.SaleCategoryID]
    })

  }
  }

   submitForm() {

    //  if (!this.uSaleItemForm.valid){
    //   //manual verification:
    //   if (this.quotable) {
    //     //price & quantity should be 0
        
    //     if (this.uSaleItemForm.controls['itemName'].value == null) {
    //       this.global.showAlert("There was an error creating the sale item. Please try again","Could not create sale item");
    //       return;
    //     }
    //     if (this.uSaleItemForm.controls['itemDescription'].value == null) {
    //       this.global.showAlert("There was an error creating the sale item. Please try again","Could not create sale item");
    //       return;
    //     }
    //   }
    //   else {
    //     this.global.showAlert("There was an error creating the sale item. Please try again","Could not create sale item");
    //     return;
    //   }
    //  }

     if (this.uSaleItemForm.controls['itemSCategory'].value[0] == null) {
      this.global.showAlert("There was an error creating the sale item. Please try again","Could not create sale item");
      return;
    }

    
     var fName = this.saleItem.photo;
     if (this.itemImage != null) {
      var date = new Date();
      var epoch = date.getTime();
      fName = epoch + '_' + this.itemImage.name;
     }

     //form is valid for submission
    var obj = {
      name: this.uSaleItemForm.controls['itemName'].value,
      saleItemID: this.saleItem.saleItemID,
      photo: fName,
      description: this.uSaleItemForm.controls['itemDescription'].value[0],
      price: Number(this.uSaleItemForm.controls['itemPrice'].value),
      quotable: this.quotable,
      quantity: this.uSaleItemForm.controls['itemQuantity'].value,
      saleCategoryID: Number(this.uSaleItemForm.controls['itemSCategory'].value.split(',')[0]),
      inventoryItem:null
    }

    console.log('ob');
    console.log(obj);



      // remove the old image
      if (this.itemImage != null) {
        //wait for image to upload:
        const formData = new FormData();
        console.log(this.itemImage);
        formData.append('file', this.itemImage, fName);

        this.repo.deleteSaleItemImage(this.saleItem.photo).subscribe({
          next: data => {

            // console.log(data);
            // upload the new image
            this.repo.uploadSaleItemImage(formData).subscribe({
              next: data => {
  
                //update the obj in db
                // this.repo.updateSaleItem()
                this.global.dismissModal();
                this.saleService.confirmSaleItemModal(2, obj, this.uSaleItemForm.value['itemSCategory'].split(',')[1], this.itemImageBase64String);
  
              },
              error: (err : HttpErrorResponse) => {
                console.log(err);
                this.global.showAlert("There was an error creating the sale item. Please try again","Could not create sale item");
              }
            });

          },
          error: err => {
            console.log('ERROR FILE DELETE');
            console.log(err);
          }
        })


      } else {
        //image did not change
        this.global.dismissModal();
        this.saleService.confirmSaleItemModal(2, obj, this.uSaleItemForm.value['itemSCategory'].split(',')[1], this.createImg(this.saleItem.photo));

      }

    }

   public createImg = (fileName: string) => { 
    return `https://localhost:44383/Resources/Images/saleItemImages/${fileName}`; 
  }
}
