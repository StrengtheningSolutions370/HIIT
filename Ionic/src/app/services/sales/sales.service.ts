/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/semi */
import { Injectable, OnInit } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import { ModalController, ToastController } from '@ionic/angular';

import { SaleCategory } from 'src/app/models/sale-category';
import { AddCategoryComponent } from 'src/app/pages/sale/sale-category/add-category/add-category.component';
import { AssociativeCategoryComponent } from 'src/app/pages/sale/sale-category/associative-category/associative-category.component';
import { DeleteCategoryComponent } from 'src/app/pages/sale/sale-category/delete-category/delete-category.component';
import { UpdateCategoryComponent } from 'src/app/pages/sale/sale-category/update-category/update-category.component';
import { ViewCategoryComponent } from 'src/app/pages/sale/sale-category/view-category/view-category.component';
import { ConfirmCategoryComponent } from 'src/app/pages/sale/sale-category/confirm-category/confirm-category.component';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private _salecategoryList = new BehaviorSubject<SaleCategory[]>([]);

  public get salecategoryList(){
    return this._salecategoryList.asObservable();
  }

  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
    this.repo.getSaleCategory().subscribe(result => {
      console.log('Sale Category List: Sale Category Service -> Get Sale Category');
      console.log(result);

      var tempResult = Object.assign(result);
      this._salecategoryList.next(tempResult);

      console.log('Sale Category List: Sale Category Service -> Updated Sale Category');
      console.log(this._salecategoryList);
    })
  }

  //Methods
  //Add a sale category to the sale category list within the sale category service.
   createSaleCategory(saleCategory: any){
     console.log('saleCategoryService: Repo -> Create Sale Category');
     console.log(JSON.stringify(saleCategory));
     this.repo.createSaleCategory(saleCategory).subscribe(res=> {
      var tempResult = Object.assign(res);
      console.log("Sale Category Service: Create Sale Category");
      console.log(res);
      this._salecategoryList.next(tempResult.data);
     });
   }

   //Receives a sale category to update in the service sale category list.
   updateSaleCategory(id,saleCategory: any){
    console.log('sale category Service: Repo -> Update sale category');
    console.log(saleCategory);

    const currentSaleCategory = this._salecategoryList.value;
    const index = currentSaleCategory.findIndex(x => x.saleCategoryID === id)
    this.repo.updateSaleCategory(saleCategory.saleCategoryID,saleCategory).subscribe(result =>
     console.log(result));
  }

  //Receives a sale category to delete in the service sale category list.
  deleteSaleCategory(id: number){
    this.repo.deleteSaleCategory(id).subscribe(result =>
     console.log(result));
  }

  matchingSaleCategory(input: string){
   console.log('sale category Service: Repo -> Matching sale category');
   this.repo.getMatchSaleCategory(input);
  }

  existingSaleCategory(id: number){
   console.log('sale category Service: Repo -> Existing sale category');
   this.repo.existsSaleCategory(id).subscribe(result =>
    console.log(result));
  }

  //Modals
  //Display the create sale category modal.
  async addSaleCategoryModal(saleCategory?: SaleCategory) {
    const modal = await this.modalCtrl.create({
      component: AddCategoryComponent,
      componentProps:{
        saleCategory
      }
    });
    await modal.present();
  }

  //Display the update sale category modal.
  async updateSaleCategoryModal(saleCategory: SaleCategory) {
    console.log("sALE cATEGORY Service: UpdateSaleCategoryModalCall");
    const modal = await this.modalCtrl.create({
      component: UpdateCategoryComponent,
      componentProps:{
        saleCategory
      }
    });
    await modal.present();
  }

  //Display the delete venue modal.
  async deleteSaleCategoryModal(saleCategory: SaleCategory) {
    console.log("sale category Service: DeleteSaleCategoryModalCall");
    let tempCategory = new SaleCategory();
    tempCategory = Object.assign(saleCategory);
    console.log(tempCategory);
    if (tempCategory.items!= null && tempCategory.items.length > 0){
      const modal = await this.modalCtrl.create({
        component: AssociativeCategoryComponent,
          componentProps: {
            venue: saleCategory
        }
      });
      await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: DeleteCategoryComponent,
          componentProps: {
            venue: tempCategory
        }
      });

      //Update the current sale category list with the sale category list from the delete modal.
      modal.onDidDismiss().then(() => {
        this.repo.getSaleCategory().subscribe(result => {
          var tempResult = Object.assign(result);
          this._salecategoryList.next(tempResult);
          console.log("Updated sale category list: Sale Category Service: delete sale category");
          console.log(this._salecategoryList);
        });
      });
      await modal.present();
    }
  }

  //Display the view sale category modal.
  async viewSaleCategoryModal(saleCategory: SaleCategory) {
    console.log("sale category Service: ViewSaleCategoryModalCall");
    let tempCategory = new SaleCategory();
    tempCategory = Object.assign(saleCategory);
    console.log(tempCategory);
    const modal = await this.modalCtrl.create({
      component: ViewCategoryComponent,
      componentProps: {
        venue:tempCategory
      }
    });
    await modal.present();
  }

  //Display the confirm create/update modal
  async confirmSaleCategoryModal(selection: number, saleCategory: any) {
    console.log('sale category Service: ConfirmSaleCategoryModalCall');
    console.log(selection);
    if(selection === 1){
      console.log("Performing ADD");
      let tempCategory = new SaleCategory();
      tempCategory.saleCategoryID = 0;
      tempCategory = Object.assign(saleCategory);
      console.log(tempCategory);
      const modal = await this.modalCtrl.create({
        component: ConfirmCategoryComponent,
        componentProps: {
          venue:tempCategory,
          choice:selection
        }
      });

      //Update the current sale category list with the sale category list from the confirm modal.
      modal.onDidDismiss().then(() => {
        this.repo.getSaleCategory().subscribe(result => {
          var tempResult = Object.assign(result);
          this._salecategoryList.next(tempResult);
          console.log("Updated sale category list: Sale Category Service: ADD confirm sale category");
          console.log(this._salecategoryList);
        });
      });
      await modal.present();
    } else if (selection === 2){
      console.log("Performing UPDATE");
      let tempCategory = new SaleCategory();
      tempCategory = Object.assign(saleCategory);
      console.log(tempCategory);
      const modal = await this.modalCtrl.create({
        component: ConfirmCategoryComponent,
        componentProps: {
          venue:saleCategory,
          choice:selection
        }
      });
      modal.onDidDismiss().then(() => {
        this.repo.getSaleCategory().subscribe(result => {
          var tempResult = Object.assign(result);
          this._salecategoryList.next(tempResult);
          console.log("Updated sale category list: Sale Category Service: Update confirm sale category");
          console.log(this._salecategoryList);
        });
      });
      await modal.present();
    } else {
      console.log("BadOption: " + selection)
    }
  }

}

