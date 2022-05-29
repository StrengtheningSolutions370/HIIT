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

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  @Output() fetchSaleItemsEvent = new EventEmitter<SaleItem>();

  //Creating a saleitemList for all the saleitems in the service.
private _saleItemList = new BehaviorSubject<SaleItem[]>([]);

//Return the vat list as an observable.
public get saleItemList(){
  return this._saleItemList.asObservable();
}

private temp : SaleItem[];


constructor(public repo: RepoService, private modalCtrl: ModalController, private alertCtrl: ToastController) {
  //Receive the venues from the repo (API).
  this.repo.getSaleItems().subscribe(result => {
    console.log('SaleItem List: Sales Service -> Get SaleItems');
    console.log(result);
    var tempResult = Object.assign(result);
    this._saleItemList.next(tempResult);
    console.log('SaleItem List: Sales Service -> Updated SaleItems');
    console.log(this._saleItemList);
  })
}

 //Methods
  //Add a saleitem to the saleitem list within the sales service.
  createSaleItem(saleItem: any){
    var today = new Date()
    let saleItemTemp = {
      Name : saleItem.Name,
      Photo: saleItem.Photo,
      Description: saleItem.Description,
      Price: saleItem.Price,
      Quotable: saleItem.Quotable,
      Quantity: saleItem.Quantity,
      SaleCategoryID: saleItem.SaleCategoryID
    }
    this.repo.createSaleItem(saleItemTemp).subscribe(
      {
        next: () => {
          console.log('SALE ITEM CREATED');
          this.fetchSaleItemsEvent.emit(saleItem);
        }
      }
    )
   }

   getAllSaleItems() : Observable<any> {
     return this.repo.getSaleItems();
   }

  //Receives a sale item to update in the service sale item list.
   async updateSaleItem(id:number,saleItem: any) {
     return this.repo.updateSaleItem(saleItem).subscribe(
       {
        next: () => {
          console.log('SALE ITEM UPDATED');
          this.fetchSaleItemsEvent.emit(saleItem);
        }
       }
     )
   }

  //Receives a sale item to delete in the service vat list.
   deleteVat(id: number){
    this.repo.deleteSaleItem(id).subscribe(
      {
        next: res => {
          console.log(res);
          console.log('SALE ITEM DELETED');
          this.fetchSaleItemsEvent.emit();
        },
        error: err => {
          console.log("ÉRROR HERE")
          console.log(err);
        }
      }
    );
   }

   matchingSaleItem(input: string){
    console.log('saleItemService: Repo -> Matching saleItem');
    this.repo.getMatchSaleItem(input);
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

  //Display the update sale item modal.
  //This method receives the selected sale item object, from the sale item page, in the modal through the componentProps.
  async updateSaleItemInfoModal(saleItem: SaleItem) {
    console.log("SalesService: UpdateSaleItemModalCall");
    const modal = await this.modalCtrl.create({
      component: UpdateSitemComponent,
      componentProps:{
        saleItem
      }
    });
    await modal.present();
  }

  //Display the delete sale item modal.
  //This method receives the selected sale item object, from the sale item page, in the modal through the componentProps.
  async deleteSaleItemInfoModal(saleItem: SaleItem) {
    console.log("SalesService: DeleteSaleItemModalCall");
    
      const modal = await this.modalCtrl.create({
        component: DeleteSitemComponent,
          componentProps: {
            saleItem
        }
      });

      //Update the current sale item list with the sale item list from the delete modal.
      modal.onDidDismiss().then(() => {
        this.repo.getSaleItems().subscribe(result => {
          var tempResult = Object.assign(result);
          this._saleItemList.next(tempResult);
          console.log("Updated sale item list: Sales Service: delete sale item");
          console.log(this._saleItemList);
        });
      });
      await modal.present();
    }
  

  //Display the view sale item modal.
    //This method receives the selected sale item object, from the sale item page, in the modal through the componentProps.
  async viewSaleItemInfoModal(saleItem: SaleItem) {
    console.log("SalesService: ViewSaleItemModalCall");
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

  //Display the confirm create/update modal
  //Receives the selected saleItem from the saleitem page
  async confirmSaleItemModal(choice: number, saleItem: any) {
    console.log('SaleItemService: ConfirmSaleItemModalCall');
    console.log(choice);
    if(choice === 1){
      console.log("Performing ADD");
      const modal = await this.modalCtrl.create({
        component: ConfirmSitemComponent,
        componentProps: {
          saleItem,
          choice
        }
      });

      //Update the current vat list with the vat list from the confirm modal.
      modal.onDidDismiss().then(() => {

        this.repo.getSaleItems();

      });

      await modal.present();

    } else if (choice === 2){

      console.log("Performing UPDATE");


      const modal = await this.modalCtrl.create({
        component: ConfirmSitemComponent,
        componentProps: {
          saleItem,
          choice
        }
      });

      modal.onDidDismiss().then(() => {

        this.repo.getSaleItems();

      });

      await modal.present();

    } else {

      console.log("BadOption: " + choice)

    }
  }
}
