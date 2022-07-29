import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SaleCategory } from 'src/app/models/sale-category';
import { CartService } from 'src/app/services/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';
import { SalesService } from 'src/app/services/sales/sales.service';
import { CartModalPage } from '../cart-modal/cart-modal.page';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
//String used from the searchbar, used in the filter pipe to search titles.
// public filter: string;

public searchControl: FormControl;


//Create local title array to be populated onInit.
items: any[] = [];
saleItems: any[] = [];

saleItemsOriginal: any[] = [];
cartData: any = {};
storedData: any = {};
cartSub: Subscription;

filtering = false;
filterTerm = '';

categoryArray!: SaleCategory[];

//Subscription variable to track live updates.
saleItemSub: Subscription;

isLoading = true;

constructor(public saleService: SalesService, public repo: RepoService, public global: GlobalService,
  private cartService: CartService, public modalCtrl: ModalController) {
    this.getItems();
    this.fetchSaleItem();
    this.searchControl = new FormControl();

    this.saleService.getAllSaleCategories().subscribe(
      {
        next: data => {
          this.categoryArray = data.result;
          console.log(data);
        }
      }
    );
}


fetchSaleItem() {
  this.isLoading = true;
  this.saleService.getAllSaleItems().subscribe(
    {
      next: data => {
        console.log('Fetching items from DB');
        console.log(data);
        this.isLoading = false;
        this.saleItems = data.result;
      }
    }
  );
}


ngOnInit() {
  this.setFilteredItems('');
  this.searchControl.valueChanges
    .subscribe(search => {
      this.setFilteredItems(search);
    });

  this.saleService.fetchSaleItemsEvent.subscribe(
    {
      next: res => {
        console.log('Fetch sale items again');
        this.fetchSaleItem();
      }
    }
  );

  this.cartSub = this.cartService.cart.subscribe(cart => {
    console.log('cart items: ', cart);
    this.cartData = {};
    this.storedData = {};
    if(cart && cart?.totalItem > 0) {
      this.storedData = cart;
      // this.cartData.items = this.storedData.items;
      this.cartData.totalItem = this.storedData.totalItem;
      this.cartData.totalPrice = this.storedData.totalPrice;
        this.saleItems.forEach(element => {
          cart.items.forEach(element2 => {
            if(element.id !== element2.saleItemID) {return;}
            element.quantity = element2.quantityChange;
          });
        });
        console.log('allitems: ', this.saleItems);
        this.cartData.items = this.saleItems.filter(x => x.quantity > 0);
      } else {
        this.saleItems.forEach(element => {
            element.quantity = 0;
        });
      }
    });
    this.getItems();
}

setFilteredItems(searchTerm) {
  this.getItems();
  this.items = this.global.filterItems(searchTerm);
}

async getItems() {
  try {
    this.isLoading = true;
    this.cartData = {};
    this.storedData = {};
    setTimeout(async () => {
      this.saleItems.forEach((element, index) => {
        this.saleItems[index].quantity = 0;
      });
      this.items = [...this.saleItems];
      console.log('items: ', this.items);
      await this.cartService.getCartData();
      this.isLoading = false;
    }, 3000);
  } catch(e) {
    console.log(e);
  }
}


quantityPlus(item) {
  const index = this.saleItems.findIndex(x => x.saleItemID === item.saleItemID);
  console.log(index);
  if(!this.saleItems[index].quantity) {
      console.log('index item: ', this.saleItems);
      this.cartService.quantityPlus(index, this.saleItems);
    } else {
      // alert for clear cart
      // this.cartService.alertClearCart(index, this.saleItems);
    };
    this.global.showToast('Item successfully added to cart');
  }

quantityMinus(item) {
  const index = this.saleItems.findIndex(x => x.id === item.id);
  this.cartService.quantityMinus(index, this.saleItems);
}

saveToCart() {
  try {
    console.log('save cartData: ', this.cartData);
    this.cartService.saveCart();
  } catch(e) {
    console.log(e);
  }
}

async ionViewWillLeave() {
  console.log('ionViewWillLeave ItemsPage');
  if(this.cartData?.items && this.cartData?.items.length > 0) {await this.saveToCart();}
}


}
