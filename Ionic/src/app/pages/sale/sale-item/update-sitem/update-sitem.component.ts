import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController, AlertController, ViewWillEnter } from '@ionic/angular';
import { SaleItem } from 'src/app/models/sale-item';
import { SalesService } from 'src/app/services/sales/sales.service';
import { SaleCategory } from 'src/app/models/sale-category';
import { RepoService } from 'src/app/services/repo.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { merge } from 'rxjs';



@Component({
  selector: 'app-update-sitem',
  templateUrl: './update-sitem.component.html',
  styleUrls: ['./update-sitem.component.scss'],
})
export class UpdateSitemComponent {

//   @Input() saleItem: SaleItem;
//   categoryDropDown! : SaleCategory[];

//   quotable = false;

//   itemImage! : File;
//   itemImageBase64String! : any;

//   uSaleItemForm: FormGroup = new FormGroup({
//     itemName: new FormControl('', [Validators.required]),
//     itemDescription: new FormControl('', [Validators.required]),
//     itemQuantity: new FormControl('', [Validators.required, Validators.min(1)]),
//     itemPhoto: [],
//     itemPrice: [, [Validators.required]],
//     itemSCategory: [],
//     itemQuotable: []
//   });

//   updateImage(event : any) {
//     this.itemImage = event.target.files[0];
//    console.log(this.itemImage);
//     const re = /^image*/;
 
//     if (this.itemImage.type.match(re)) {
//      this.getBase64(this.itemImage);
//     }
//    }

//    getBase64(file : File) {
//     var reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       // console.log(reader.result);
//       this.itemImageBase64String = reader.result;
//     };
//     reader.onerror = (error) => {
//       this.itemImageBase64String = null;
//     };
//  }

//  checkBoxToggle(check : any) {
//   this.quotable = check.target.checked;
//   console.log(this.quotable);
//   if (this.quotable) {
//     //is quotable
//     this.uSaleItemForm.controls.itemPrice.setValue(1);
//     this.uSaleItemForm.controls.itemQuantity.setValue(1);
//     return;
//   }
//   console.log('here')
//    this.uSaleItemForm.controls.itemPrice.setValue(null);
//    this.uSaleItemForm.controls.itemQuantity.setValue(null);

// }


//  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController, public fb: FormBuilder,
//   public saleService: SalesService, private alertCtrl: AlertController) { }

//     //Used for validation within the form, if there are errors in the control, this method will return the errors.
//     get errorControl() {
//       return this.uSaleItemForm.controls;
//     }

//     ionViewWillEnter() {
//       console.log('UpdateSaleItem-ViewWillEnter');
//       console.log(this.saleItem);
//       this.uSaleItemForm.controls.itemName.setValue(this.saleItem.Name);
//       this.uSaleItemForm.controls.itemDescription.setValue(this.saleItem.Description);
//       this.uSaleItemForm.controls.itemQuantity.setValue(this.saleItem.Quantity);
//       this.uSaleItemForm.controls.itemPhoto.setValue(this.saleItem.Photo);
//       this.uSaleItemForm.controls.itemPrice.setValue(this.saleItem.Price);
//       this.uSaleItemForm.controls.itemSCategory.setValue(this.saleItem.SaleCategoryID);
//     }

//     //populating the dropdown for saleCategory:
//     this.saleService.getAllSaleCategories().subscribe(
//       {
//         next: data => {
//           this.categoryDropDown = data;
//           console.log(data);
//         }
//       }
//     )

//     submitForm() {
//       if (!this.uSaleItemForm.valid) { //If the form has any validation errors, the form will not be submitted.
//         console.log('Please provide all required fields');
//         this.invalidAlert();
//         return false;
//       }
//       else
//       {
//         console.log('InsideUpdateSubmit:');
//         var temp = new SaleItem();
//         const choice = 2;
//         temp = {
//           SaleItemID: this.saleItem.SaleItemID,
//           Name: this.uSaleItemForm.value['itemName'],
//           Description: this.uSaleItemForm.value['itemDescription'],
//           Quantity: this.uSaleItemForm.value['itemQuantity'],
//           Photo: this.uSaleItemForm.value['itemPhoto'],
//           Price: this.uSaleItemForm.value['itemPrice'],
//           SaleCategoryID: this.uSaleItemForm.value['itemSCategory']
//         };
//          console.log(temp);
//          this.saleService.confirmSaleItemModal(choice,temp);
//          this.dismissModal();
//       }
//   }

//   async sucUpdate() {
//     const toast = await this.toastCtrl.create({
//       message: 'The Sale Item has been successfully updated!',
//       duration: 2000,
//       position : 'top'
//     });
//     toast.present();
//   }

//  dismissModal() {
//    this.modalCtrl.dismiss();
//  }

//  async invalidAlert() {
//   const alert = await this.alertCtrl.create({
//     header: 'Invalid Input',
//     message: 'Please provide all required fields and ensure that the information is in the correct format',
//     buttons: ['OK']
//   });
//   alert.present();
// }

// async failureAlert() {
//   const alert = await this.alertCtrl.create({
//     header: 'Could not update sale item',
//     subHeader : 'There was an error updating the sale item. Please try again',
//     buttons: ['OK']
//   });
//   alert.present();
// }

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

constructor(private http : HttpClient, private modalCtrl: ModalController, private toastCtrl: ToastController, public formBuilder: FormBuilder,
 public saleService: SalesService, private router: Router, private currentRoute: ActivatedRoute,
 private  alertCtrl: AlertController, private repo : RepoService) {

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
        this.categoryDropDown = data;
        console.log(data);
      }
    }
  )

  console.log("AddSaleItem-ViewWillEnter");
  if (this.saleItem !=null){

    this.quotable = this.saleItem.quotable;
    this.checkBoxToggle(this.quotable);

    if (!this.quotable) {
      this.oldPrice = this.saleItem.price;
      this.oldQuantity = this.saleItem.quantity;
    }

    this.uSaleItemForm.reset({
      itemName : [this.saleItem.name],
      itemDescription : [this.saleItem.description],
      itemPhoto : this.itemImageBase64String,
      itemPrice : [this.saleItem.price],
      itemQuotable : [false],
      itemQuantity : [this.saleItem.quantity],
      itemSCategory : [this.saleItem.SaleCategoryID],
    })
  }
  }

   submitForm() {

     if (!this.uSaleItemForm.valid){
      //manual verification:
      if (this.quotable) {
        //price & quantity should be 0
        
        if (this.uSaleItemForm.controls['itemName'].value == null) {
          this.failureAlert();
          return;
        }
        if (this.uSaleItemForm.controls['itemDescription'].value == null) {
          this.failureAlert();
          return;
        }
      }
      else {
        this.failureAlert();
        return;
      }
     }

     if (this.uSaleItemForm.controls['itemSCategory'].value[0] == null) {
      this.failureAlert();
      return;
    }

    
     var fName = this.saleItem.photo;
     if (this.itemImage == null) {
      var date = new Date();
      var epoch = date.getTime();
      fName = this.saleItem.photo;
     }

     //form is valid for submission
    var obj = {
      Name: this.uSaleItemForm.controls['itemName'].value,
      Photo: fName,
      Description: this.uSaleItemForm.controls['itemDescription'].value,
      Price: Number(this.uSaleItemForm.controls['itemPrice'].value),
      Quotable: this.quotable,
      Quantity: this.uSaleItemForm.controls['itemQuantity'].value,
      SaleCategoryID: this.uSaleItemForm.controls['itemSCategory'].value.split(',')[0],
      inventoryItem:[]
    }

    console.log('ob');
    console.log(obj);


    

      //remove the old image
      if (this.itemImage != null) {
        //wait for image to upload:
        const formData = new FormData();
        console.log(this.itemImage);
        formData.append('file', this.itemImage, fName);

        this.repo.reuploadSaleItemImage(this.saleItem.photo).subscribe({
          next: data => {

            console.log(data);
            //upload the new image
            // this.repo.uploadSaleItemImage(formData).subscribe({
            //   next: data => {
  
            //     //update the obj in db
            //     // this.repo.updateSaleItem()
            //     this.dismissModal();
            //     this.saleService.confirmSaleItemModal(1, obj, this.uSaleItemForm.value['itemSCategory'].split(',')[1], this.itemImageBase64String);
  
            //   },
            //   error: (err : HttpErrorResponse) => {
            //     this.failureAlert();
            //   }
            // });

          },
          error: err => {
  
          }
        })


      } else {

        //image did not change

      }

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

   public createImg = (fileName: string) => { 
    return `https://localhost:44383/Resources/Images/saleItemImages/${fileName}`; 
  }
}
