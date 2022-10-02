import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ModalController, ViewWillEnter } from '@ionic/angular';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Cart } from 'src/app/models/cart';
import { SaleCategory } from 'src/app/models/sale-category';
import { SaleItem } from 'src/app/models/sale-item';
import { CartService } from 'src/app/services/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';
import { SalesService } from 'src/app/services/sales/sales.service';
import { ShopService } from 'src/app/services/shop/shop.service';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { ItemFilterPage } from '../item-filter/item-filter.page';
import { SearchPipe } from '../search.pipe';


@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements ViewWillEnter {

  // items: any[] = [];
  saleItems: SaleItem[] = []; //Entire collection of sale items
  items: SaleItem[] = []; //infinite scroll collection, add 12 each time up till numTimesLeft
  numTimesLeft: number = 4;
  cartData: Cart = null;//Local cart data - populated on viewWillEnter by the cartService

  //Subscription variable to track live updates.
  saleItemSub: Subscription;
  cartSub: Subscription;
  isLoading = true;


  //Filtering and ordering stuff
  // filterCategories: any[];
  // filterData = [];
  // filtering = false;
  // filterTerm = '';
  // orderedSaleItems;
  // currentCategory: any;
  // categoryArray!: SaleCategory[];
  // numTimesLeft = 4
  // descending: boolean = false;
  // order: number;
  // column: string = 'name';
  // customSearch: SearchPipe;
  // saleItemsOriginal: any[] = [];
  //String used from the searchbar, used in the filter pipe to search titles.
  // public filter: string;

  public searchControl: UntypedFormControl;
  selectedCategories: any = [];
  filterItems: any = [];


  constructor(public saleService: SalesService, public repo: RepoService, public global: GlobalService,
    private cartService: CartService, public modalCtrl: ModalController, public shopService: ShopService) {
    //this.getItems();
    this.fetchSaleItem();
    this.addMoreItems();
    this.searchControl = new UntypedFormControl();
    //this.filterData = this.saleItems;
  }

  fetchSaleItem() {
    this.isLoading = true;
    this.saleService.getAllSaleItems().subscribe(
      {
        next: data => {
          console.log(data);
          this.isLoading = false;
          this.saleItems = data.result;
          this.saleItems = this.saleItems.filter(si => si.quantityOnHand > 0);
          //console.log(this.saleItems); //Entire collection of sale items
          //this.sortBy('name');
        }
      }
    );
  }

  loadData(event) { //Called on html when user scrolls more
    setTimeout(() => {
      this.addMoreItems();
      this.numTimesLeft -= 1;
      event.target.complete();
    }, 400);
  }

  addMoreItems() {
    for (let i = 0; i < 12; i++) {
      this.items.push(this.saleItems[i]);
    }
  }

  async getData(): Promise<any> {
    await this.cartService.getCartData().then((bool)=>{
      console.log("Getting data from cartService into item page local cartData: ", bool);
    });

    this.cartSub = this.cartService.cart.subscribe({
      next: (cartVal) => {
        this.cartData = cartVal;
        console.log("itemPageCartSub: updated localItemPageCartData to: ",this.cartData);
      },
      error: (err) => {
        console.log("Error in getting cart for items page: ",err)
      }
    }

      )
  }



  async ionViewWillEnter(){

    await this.getData();

    this.saleService.fetchSaleItemsEvent.subscribe(
      {
        next: (res) => {
          //console.log(res);
          console.log("Fetching sale item due to event emit");
          this.fetchSaleItem();
        }
      }
    );
  }

  async ionViewWillLeave() {
    this.cartSub.unsubscribe();
    this.saleService.fetchSaleItemsEvent.unsubscribe();
    //if (this.cartData?.sales && this.cartData?.sales.length > 0) { this.saveToCart(); }
  }

  quantityPlus(item) {
    console.log("1. Adding from shop page: ",item);
    this.cartService.quantityPlus(item);

  }

  quantityMinus(item) {
    console.log("1. Minus from shop page: ",item);
    this.cartService.quantityMinus(item);
    this.global.showToast('Item successfully reduced in cart');
  }

  saveToCart() {
    try {
      this.cartService.saveCart();
    } catch (e) {
      console.log(e);
    }
  }

}





