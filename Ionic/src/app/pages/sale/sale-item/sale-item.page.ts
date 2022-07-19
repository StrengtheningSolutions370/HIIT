import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global/global.service';
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

constructor(public saleService: SalesService, public repo: RepoService, public global: GlobalService) {
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
        this.saleItemList = data.result;
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



}
