import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { SaleCategory } from 'src/app/models/sale-category';
import { RepoService } from 'src/app/services/repo.service';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-sale-category',
  templateUrl: './sale-category.page.html',
  styleUrls: ['./sale-category.page.scss'],
})
export class SaleCategoryPage implements OnInit {

  //String used from the searchbar, used in the filter pipe to search titles.
  public filter: string;

  //Create local title array to be populated onInit.
  saleCategoryList: SaleCategory[] = [];

  //Subscription variable to track live updates.
  saleCategorySub: Subscription;

  isLoading = true;

  // categories = [
  //   {name : 'Shop',
  //    description : 'Buy now, get product later'},
  //   {name : 'Store',
  //    description : 'Buy now, get product now'}
  // ];

  constructor(public saleService: SalesService, public repo: RepoService) {
    // this.populateTitles();
     this.fetchSaleCategory();
  }


  fetchSaleCategory() {
    this.isLoading = true;
    // this.saleService.getAllSaleCategory().subscribe(
    //   {
    //     next: data => {
    //       console.log('Fetching categories from DB');
    //       console.log(data);
    //       this.isLoading = false;
    //       this.saleCategoryList = data;
    //     }
    //   }
    // );
  }

  ngOnInit() {

    // this.saleService.fetchSaleCategoryEvent.subscribe(
    //   {
    //     next: res => {
    //       console.log('Fetch sale categories again');
    //       this.fetchSaleCategory();
    //     }
    //   }
    // );

  }

}
