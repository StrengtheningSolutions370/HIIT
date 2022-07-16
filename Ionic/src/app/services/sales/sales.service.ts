/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { SaleItem } from 'src/app/models/sale-item';
import { AddSitemComponent } from 'src/app/pages/sale/sale-item/add-sitem/add-sitem.component';
import { DeleteSitemComponent } from 'src/app/pages/sale/sale-item/delete-sitem/delete-sitem.component';
import { UpdateSitemComponent } from 'src/app/pages/sale/sale-item/update-sitem/update-sitem.component';
import { ViewSitemComponent } from 'src/app/pages/sale/sale-item/view-sitem/view-sitem.component';
import { ConfirmSitemComponent } from 'src/app/pages/sale/sale-item/confirm-sitem/confirm-sitem.component';
import { RepoService } from '../repo.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { SaleCategory } from 'src/app/models/sale-category';
import { AddCategoryComponent } from 'src/app/pages/sale/sale-category/add-category/add-category.component';
import { DeleteCategoryComponent } from 'src/app/pages/sale/sale-category/delete-category/delete-category.component';
import { UpdateCategoryComponent } from 'src/app/pages/sale/sale-category/update-category/update-category.component';
import { ViewCategoryComponent } from 'src/app/pages/sale/sale-category/view-category/view-category.component';
import { ConfirmCategoryComponent } from 'src/app/pages/sale/sale-category/confirm-category/confirm-category.component';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  @Output() fetchSaleItemsEvent = new EventEmitter<SaleItem>();
  @Output() fetchSaleCategoriesEvent = new EventEmitter<SaleCategory>();

  //Creating a saleitemList for all the saleitems in the service.
private _saleItemList = new BehaviorSubject<SaleItem[]>([]);
//Creating a salecategoryList for all the salecategories in the service.
private _saleCategoryList = new BehaviorSubject<SaleCategory[]>([]);

//Return the sale item list as an observable.
public get saleItemList(){
  return this._saleItemList.asObservable();
}
//Return the sale category list as an observable.
public get saleCategoryList(){
  return this._saleCategoryList.asObservable();
}

private tempSI: SaleItem[];
private tempSC: SaleCategory[];


constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
  //Receive the sale items from the repo (API).
  this.repo.getSaleItems().subscribe(result => {
    console.log('SaleItem List: Sales Service -> Get SaleItems');
    console.log(result);
    const tempResult = Object.assign(result);
    this._saleItemList.next(tempResult);
    console.log('SaleItem List: Sales Service -> Updated SaleItems');
    console.log(this._saleItemList);
  });

    //Receive the sale categories from the repo (API).
  this.repo.getSaleCategory().subscribe(result => {
    console.log('SaleCategory List: Sales Service -> Get SaleCategories');
    console.log(result);
    const tempResult = Object.assign(result);
    this._saleCategoryList.next(tempResult);
    console.log('SaleCategory List: Sales Service -> Updated SaleCategories');
    console.log(this._saleCategoryList);
  });
}

 //Methods
  //Add a saleitem to the saleitem list within the sales service.
  createSaleItem(saleItem: any){
    const today = new Date();
    const saleItemTemp = {
      Name : saleItem.Name,
      Photo: saleItem.Photo,
      Description: saleItem.Description,
      Price: saleItem.Price,
      Quotable: saleItem.Quotable,
      Quantity: saleItem.Quantity,
      SaleCategoryID: saleItem.SaleCategoryID
    };
    this.repo.createSaleItem(saleItemTemp).subscribe(
      {
        next: () => {
          console.log('SALE ITEM CREATED');
          this.fetchSaleItemsEvent.emit(saleItem);
        }
      }
    );
   }

   createSaleCategory(saleCategory: any){
    this.repo.createSaleCategory(saleCategory).subscribe(
      {
        next: () => {
          console.log('SALE CATEGORY CREATED');
          this.fetchSaleCategoriesEvent.emit(saleCategory);
        }
      }
    );
   }

   getAllSaleItems(): Observable<any> {
     return this.repo.getSaleItems();
   }

   getAllSaleCategories(): Observable<any> {
    return this.repo.getSaleCategory();
  }

  //Receives a sale item to update in the service sale  list.
   async updateSaleItem(saleItem: any) {
     return this.repo.updateSaleItem(saleItem).subscribe(
       {
        next: () => {
          console.log('SALE ITEM UPDATED');
          this.fetchSaleItemsEvent.emit(saleItem);
        },
        error: err => {
          console.log('SALE ITEM UPDATED FAILED');
        }
       }
     );
   }

   //Receives a sale category to update in the service sale  list.
   async updateSaleCategory(id: number,saleCategory: any) {
    return this.repo.updateSaleCategory(id,saleCategory).subscribe(
      {
       next: () => {
         console.log('SALE CATEGORY UPDATED');
         this.fetchSaleCategoriesEvent.emit(saleCategory);
       }
      }
    );
  }

  //Receives a sale item to delete in the service vat list.
   deleteSaleItem(id: number){
     console.log('HERE = ' + id);
    this.repo.deleteSaleItem(id).subscribe(
      {
        next: res => {
          console.log(res);
          console.log('SALE ITEM DELETED');
          this.fetchSaleItemsEvent.emit();
        },
        error: err => {
          console.log('ÉRROR HERE');
          console.log(err);
        }
      }
    );
   }

    //Receives a sale category to delete in the service vat list.
    deleteSaleCategory(id: number){
      this.repo.deleteSaleCategory(id).subscribe(
        {
          next: res => {
            console.log(res);
            console.log('SALE CATEGORY DELETED');
            this.fetchSaleCategoriesEvent.emit();
          },
          error: err => {
            console.log('ÉRROR HERE');
            console.log(err);
          }
        }
      );
     }

   matchingSaleItem(input: string){
    console.log('saleService: Repo -> Matching saleItem');
    this.repo.getMatchSaleItem(input);
   }

   matchingSaleCategory(input: string){
    console.log('saleService: Repo -> Matching saleCategory');
    this.repo.getMatchSaleCategory(input);
   }

   existingSaleItem(id: number){
    console.log('saleItemService: Repo -> Existing Sale Item');
    this.repo.existsSaleItem(id).subscribe(result =>
     console.log(result));
   }

  //Modals
  async addSaleItemInfoModal(saleItem?: SaleItem) {
    const modal = await this.modalCtrl.create({
      component: AddSitemComponent,
      componentProps:{
        saleItem
      }
    });
    await modal.present();
  }

  //Modals
  async addCategoryInfoModal(saleCategory?: SaleCategory) {
    const modal = await this.modalCtrl.create({
      component: AddCategoryComponent,
      componentProps:{
        saleCategory
      }
    });
    await modal.present();
  }

  //Display the update sale item modal.
  //This method receives the selected sale item object, from the sale item page, in the modal through the componentProps.
  async updateSaleItemInfoModal(saleItem: SaleItem) {
    console.log('SalesService: UpdateSaleItemModalCall');
    const modal = await this.modalCtrl.create({
      component: UpdateSitemComponent,
      componentProps:{
        saleItem
      }
    });
    await modal.present();
  }

  //Display the update sale category modal.
  //This method receives the selected sale category object, from the sale category page, in the modal through the componentProps.
  async updateCategoryInfoModal(saleCategory: SaleCategory) {
    console.log('SalesService: UpdateSaleItemModalCall');
    const modal = await this.modalCtrl.create({
      component: UpdateCategoryComponent,
      componentProps:{
        saleCategory
      }
    });
    await modal.present();
  }


  //Display the delete sale item modal.
  //This method receives the selected sale item object, from the sale item page, in the modal through the componentProps.
  async deleteSaleItemInfoModal(saleItem: SaleItem) {
    console.log('SalesService: DeleteSaleItemModalCall');

      const modal = await this.modalCtrl.create({
        component: DeleteSitemComponent,
          componentProps: {
            saleItem,
        }
      });

      //Update the current sale item list with the sale item list from the delete modal.
      modal.onDidDismiss().then(() => {
        this.repo.getSaleItems().subscribe(result => {
          const tempResult = Object.assign(result);
          this._saleItemList.next(tempResult);
          console.log('Updated sale item list: Sales Service: delete sale item');
          console.log(this._saleItemList);
        });
      });
      await modal.present();
    }

      //Display the delete sale category modal.
  //This method receives the selected sale category object, from the sale category page, in the modal through the componentProps.
  async deleteCategoryInfoModal(saleCategory: SaleCategory) {
    console.log('SalesService: DeleteSaleCategoryModalCall');

      const modal = await this.modalCtrl.create({
        component: DeleteCategoryComponent,
          componentProps: {
            saleCategory
        }
      });



    //Update the current sale category list with the sale category list from the delete modal.
    modal.onDidDismiss().then(() => {
      this.repo.getSaleCategory().subscribe(result => {
        const tempResult = Object.assign(result);
        this._saleCategoryList.next(tempResult);
        console.log('Updated sale category list: Sales Service: delete sale category');
        console.log(this._saleCategoryList);
      });
    });
    await modal.present();
  }


  //Display the view sale item modal.
    //This method receives the selected sale item object, from the sale item page, in the modal through the componentProps.
  async viewSaleItemInfoModal(saleItem: SaleItem) {
    console.log('SalesService: ViewSaleItemModalCall');
    let tempSaleItem = new SaleItem();
    tempSaleItem = Object.assign(saleItem);
    console.log(tempSaleItem);
    const modal = await this.modalCtrl.create({
      component: ViewSitemComponent,
      componentProps: {
        saleItem:tempSaleItem
      }
    });
    await modal.present();
  }

  //Display the view sale category modal.
    //This method receives the selected sale category object, from the sale category page, in the modal through the componentProps.
    async viewCategoryInfoModal(saleCategory: SaleCategory) {
      console.log('SalesService: ViewSaleCategoryModalCall');
      let tempSaleCategory = new SaleCategory();
      tempSaleCategory = Object.assign(saleCategory);
      console.log(tempSaleCategory);
      const modal = await this.modalCtrl.create({
        component: ViewCategoryComponent,
        componentProps: {
          saleCategory:tempSaleCategory
        }
      });
      await modal.present();
    }


  //Display the confirm create/update modal
  //Receives the selected saleItem from the saleitem page
  async confirmSaleItemModal(choice: number, saleItem: any, categoryName: string, image: any) {
    console.log('SaleItemService: ConfirmSaleItemModalCall');
    console.log(choice);
    if(choice === 1){
      console.log('Performing ADD');
      const modal = await this.modalCtrl.create({
        component: ConfirmSitemComponent,
        componentProps: {
          saleItem,
          choice,
          categoryName,
          image
        }
      });

      //Update the current vat list with the vat list from the confirm modal.
      modal.onDidDismiss().then(() => {

        this.repo.getSaleItems();

      });

      await modal.present();

    } else if (choice === 2){

      console.log('Performing UPDATE');


      const modal = await this.modalCtrl.create({
        component: ConfirmSitemComponent,
        componentProps: {
          saleItem,
          choice,
          categoryName,
          image
        }
      });

      modal.onDidDismiss().then(() => {

        // this.repo.getSaleItems();
        // this.updateSaleItemInfoModal(saleItem);

      });

      await modal.present();

    } else {

      console.log('BadOption: ' + choice);

    }
  }

  //Display the confirm create/update modal
  //Receives the selected saleCategory from the salecategory page
  async confirmSaleCategoryModal(choice: number, saleCategory: any) {
    console.log('SaleService: ConfirmSaleCategoryModalCall');
    console.log(choice);
    if(choice === 1){
      console.log('Performing ADD');
      const modal = await this.modalCtrl.create({
        component: ConfirmCategoryComponent,
        componentProps: {
          saleCategory,
          choice
        }
      });

      //Update the current vat list with the vat list from the confirm modal.
      modal.onDidDismiss().then(() => {

        this.repo.getSaleCategory();

      });

      await modal.present();

    } else if (choice === 2){

      console.log('Performing UPDATE');


      const modal = await this.modalCtrl.create({
        component: ConfirmCategoryComponent,
        componentProps: {
          saleCategory,
          choice
        }
      });

      modal.onDidDismiss().then(() => {

        this.repo.getSaleCategory();

      });

      await modal.present();

    } else {

      console.log('BadOption: ' + choice);

    }
  }
}
