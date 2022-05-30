import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { SaleItem } from 'src/app/models/sale-item';
import { RepoService } from 'src/app/services/repo.service';
import { SalesService } from 'src/app/services/sales/sales.service';


@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.page.html',
  styleUrls: ['./sale-item.page.scss'],
})
export class SaleItemPage implements OnInit {
//String used from the searchbar, used in the filter pipe to search titles.
public filter: string;

//Create local title array to be populated onInit.
saleItemList: any[] = [];

//Subscription variable to track live updates.
saleItemSub: Subscription;

isLoading = true;

// categories = [
//   {name : 'Shop',
//    description : 'Buy now, get product later'},
//   {name : 'Store',
//    description : 'Buy now, get product now'}
// ];

constructor(public saleService: SalesService, public repo: RepoService) {
  // this.populateTitles();
   this.fetchSaleItem();
}


fetchSaleItem() {
  this.isLoading = true;
  this.saleService.getAllSaleItems().subscribe(
    {
      next: data => {
        console.log('Fetching items from DB');
        console.log(data);
        this.isLoading = false;
        this.saleItemList = data;
      }
    }
  );
}

ngOnInit() {

  this.saleService.fetchSaleItemsEvent.subscribe(
    {
      next: res => {
        console.log('Fetch sale items again');
        this.fetchSaleItem();
      }
    }
  );

}

public createImg = (fileName: string) => { 
  return `https://localhost:44383/Resources/Images/saleItemImages/${fileName}`;
}

}
