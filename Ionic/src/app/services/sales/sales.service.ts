/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/semi */
import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import { ModalController, ToastController } from '@ionic/angular';

import { SaleCategory } from 'src/app/models/sale-category';
import { AddCategoryComponent } from 'src/app/pages/sale/sale-category/add-category/add-category.component';
import { AssociativeCategoryComponent } from 'src/app/pages/sale/sale-category/associative-category/associative-category.component';
import { DeleteCategoryComponent } from 'src/app/pages/sale/sale-category/delete-category/delete-category.component';
import { UpdateCategoryComponent } from 'src/app/pages/sale/sale-category/update-category/update-category.component';
import { ViewCategoryComponent } from 'src/app/pages/sale/sale-category/view-category/view-category.component';
import { ConfirmCategoryComponent } from 'src/app/pages/sale/sale-category/confirm-category/confirm-category.component';

import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  @Output() fetchSaleCategoryEvent = new EventEmitter<SaleCategory>();

  //titleList for all sale categories in service
  private _saleCategoryList = new BehaviorSubject<SaleCategory[]>([]);

  //return sale category list as an observable
  public get saleCategoryList(){
    return this._saleCategoryList.asObservable();
  }

  private temp: SaleCategory[];

  constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
    //receive sale categories from repo
    this.repo.getSaleCategory().subscribe(result => {
      console.log('Sale Category List: Sale Category Service -> Get Sale Category');
      console.log(result);

      var tempResult = Object.assign(result);
      this._saleCategoryList.next(tempResult);

      console.log('Sale Category List: Sale Category Service -> Updated Sale Category');
      console.log(this._saleCategoryList);
    })
  }

  //Methods
  //Add a sale category to the sale category list within the sale category service.
   createSaleCategory(saleCategory: any){
     this.repo.createSaleCategory(saleCategory).subscribe(
       {
         next: () => {
         console.log('Sale Category created');
         this.fetchSaleCategoryEvent.emit(saleCategory);
          }
      }
     )
   }

   getAllSaleCategory(): Observable<any> {
     return this.repo.getSaleCategory();
   }

   //Receives a sale category to update in the service sale category list.
   async updateSaleCategory(id: number ,saleCategory: any){
    return  this.repo.updateSaleCategory(saleCategory.saleCategoryID,saleCategory).subscribe(
      {
        next: () => {
          console.log('Sale Category updated');
          this.fetchSaleCategoryEvent.emit(saleCategory);
        }
      }
    )
  }

  //Receives a sale category to delete in the service sale category list.
  deleteSaleCategory(id: number){
    this.repo.deleteSaleCategory(id).subscribe(result => {
      console.log("Title Deleted");
      this.fetchSaleCategoryEvent.emit();
    });
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
    if (saleCategory.items!= null && saleCategory.items.length > 0){
      const modal = await this.modalCtrl.create({
        component: AssociativeCategoryComponent,
          componentProps: {
            saleCategory
        }
      });
      await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: DeleteCategoryComponent,
          componentProps: {
            saleCategory
        }
      });

      //Update the current sale category list with the sale category list from the delete modal.
      modal.onDidDismiss().then(() => {
        this.repo.getSaleCategory().subscribe(result => {
          var tempResult = Object.assign(result);
          this._saleCategoryList.next(tempResult);
          console.log("Updated sale category list: Sale Category Service: delete sale category");
          console.log(this._saleCategoryList);
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
        saleCategory:tempCategory
      }
    });
    await modal.present();
  }

  //Display the confirm create/update modal
  async confirmSaleCategoryModal(choice: number, saleCategory: any) {
    console.log('sale category Service: ConfirmSaleCategoryModalCall');
    console.log(choice);
    if(choice === 1){
      console.log("Performing ADD");
      // let tempCategory = new SaleCategory();
      // tempCategory.saleCategoryID = 0;
      // tempCategory = Object.assign(saleCategory);
      // console.log(tempCategory);
      const modal = await this.modalCtrl.create({
        component: ConfirmCategoryComponent,
        componentProps: {
          saleCategory,
          choice
        }
      });

      //Update the current sale category list with the sale category list from the confirm modal.
      modal.onDidDismiss().then(() => {
        // this.repo.getSaleCategory().subscribe(result => {
        //   var tempResult = Object.assign(result);
        //   this._saleCategoryList.next(tempResult);
        //   console.log("Updated sale category list: Sale Category Service: ADD confirm sale category");
        //   console.log(this._saleCategoryList);
        // });
        this.repo.getSaleCategory();
      });
      await modal.present();

    } else if (choice === 2){
      console.log("Performing UPDATE");
      let tempCategory = new SaleCategory();
      tempCategory = Object.assign(saleCategory);
      console.log(tempCategory);
      const modal = await this.modalCtrl.create({
        component: ConfirmCategoryComponent,
        componentProps: {
          saleCategory,
          choice
        }
      });

      modal.onDidDismiss().then(() => {
        // this.repo.getSaleCategory().subscribe(result => {
        //   var tempResult = Object.assign(result);
        //   this._saleCategoryList.next(tempResult);
        //   console.log("Updated sale category list: Sale Category Service: Update confirm sale category");
        //   console.log(this._saleCategoryList);
        this.repo.getSaleCategory();
        });

      await modal.present();
    } else {
      console.log("BadOption: " + choice)
    }
  }

}

