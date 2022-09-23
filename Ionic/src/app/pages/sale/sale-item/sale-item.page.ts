import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';
import { SalesService } from 'src/app/services/sales/sales.service';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { ViewWillEnter } from '@ionic/angular';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.page.html',
  styleUrls: ['./sale-item.page.scss'],
})
export class SaleItemPage implements ViewWillEnter {
//String used from the searchbar, used in the filter pipe to search titles.
public filter: string;

//Create local title array to be populated onInit.
saleItemList: any[] = [];
saleItemListOriginal : any[] = [];
numTimesLeft = 4
items: any[] = [];

noresults = false;

//Subscription variable to track live updates.
saleItemSub: Subscription;

isLoading = true;

constructor(public saleService: SalesService, public repo: RepoService, public global: GlobalService, public inventoryService: InventoryService) {
   this.fetchSaleItem();
   this.addMoreItems();
  }


fetchSaleItem() {
  this.isLoading = true;
  this.saleService.getAllSaleItems().subscribe(
    {
      next: data => {
        console.log('Fetching items from DB');
        console.log(data);
        this.isLoading = false;
        this.saleItemList = data.result;
        if (this.saleItemList.length == 0) {
          this.noresults = true;
        }
        this.saleItemListOriginal = data.result;
      }
    }
  );
}

searchItems(event : string) {

  this.noresults = false;

  if (event == '' || event == null) {
    this.saleItemList = this.saleItemListOriginal;

    if (this.saleItemList.length == 0) {
      this.noresults = true;
    }

    return;
  }

  const hits = new Fuse(this.saleItemList, {
    keys: [
      'name',
      'description',
      'quantityOnHand',
      'saleCategory.name',
    ]
  }).search(
  	event
  );

  this.saleItemList = [];

  if (hits.length == 0) {
    this.noresults = true;
    return;
  }

  hits.map((el : any) => {
    this.saleItemList.push(el.item);
  });

}

loadData(event) {
  setTimeout(() => {
    console.log('Done');
    this.addMoreItems();
    this.numTimesLeft -= 1;
    event.target.complete();
  }, 400);
} 

addMoreItems() {
  for (let i = 1; i < 12; i++) {
    this.items.push(i);
  }
} 

ionViewWillEnter(): void {
  this.saleService.fetchSaleItemsEvent.subscribe(
    {
      next: res => {
        console.log('Fetch sale items again');
        this.fetchSaleItem();
      }
    }
  );
}

}