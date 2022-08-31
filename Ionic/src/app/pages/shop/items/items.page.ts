import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SaleCategory } from 'src/app/models/sale-category';
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
export class ItemsPage implements OnInit {
  descending: boolean = false;
  order: number;
  column: string = 'name';
  customSearch: SearchPipe;

  //String used from the searchbar, used in the filter pipe to search titles.
  // public filter: string;

  public searchControl: UntypedFormControl;
  selectedCategories: any = [];
  filterItems: any = [];

  //Create local title array to be populated onInit.
  items: any[] = [];
  saleItems: any[] = [];

  saleItemsOriginal: any[] = [];
  numTimesLeft = 4
  cartData: any = {};
  storedData: any = {};
  cartSub: Subscription;

  filterData = []

  filtering = false;
  filterTerm = '';
  orderedSaleItems;

  selectedCategory = document.getElementById("selectedCategory");
  currentCategory: any;

  categoryArray!: SaleCategory[];

  //Subscription variable to track live updates.
  saleItemSub: Subscription;

  isLoading = true;
  filterCategories: any[];


  constructor(public saleService: SalesService, public repo: RepoService, public global: GlobalService,
    private cartService: CartService, public modalCtrl: ModalController, public shopService: ShopService) {
    this.getItems();
    this.fetchSaleItem();
    this.addMoreItems();

    this.searchControl = new UntypedFormControl();

    this.filterData = this.saleItems;
  }



  handleChange(ev) {
    this.currentCategory = ev.target.value;

     this.filterCategories = this.currentCategory.map((category) => {
      return category.name;
    });

    const output = this.filterCategory(this.saleItems, this.filterCategories)


    console.log("Selected categories", this.currentCategory);
    console.log("Filtered products", output);
  }

  filterCategory(input: any[], filterCategories: string[]){
    return input.filter(item => {
      return filterCategories?.includes(item.SaleCategory.name);
    });
  }





  sortBy(field: string) {

    this.saleItems.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.orderedSaleItems = this.filterData;
  }

  sortByDescending(field: string) {
    this.saleItems.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.orderedSaleItems = this.filterData;
  }

  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  priceLow() {
    this.orderedSaleItems = this.sortBy('priceHistory.saleAmount');
  }

  priceHigh() {
    this.orderedSaleItems = this.sortByDescending('priceHistory.saleAmount');
  }

  loadData(event) {
    setTimeout(() => {
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

  fetchSaleItem() {
    this.isLoading = true;
    this.saleService.getAllSaleItems().subscribe(
      {
        next: data => {
          this.isLoading = false;
          this.saleItems = data.result;
          this.sortBy('name');
        }
      }
    );
  }

  ngOnInit() {

    // this.setFilteredItems('');
    this.searchControl.valueChanges
      .subscribe(search => {
        this.setFilteredItems(search);
      });

    this.saleService.fetchSaleItemsEvent.subscribe(
      {
        next: res => {
          this.fetchSaleItem();
        }
      }
    );

    this.cartSub = this.cartService.cart.subscribe(cart => {
      this.cartData = {};
      this.storedData = {};
      if (cart && cart?.sales.length > 0) {
        this.storedData = cart;
        // this.cartData.items = this.storedData.items;
        this.cartData.totalItem = this.storedData.totalItem;
        this.cartData.totalPrice = this.storedData.totalPrice;
        this.saleItems.forEach(element => {
          cart.sales.forEach(element2 => {
            if (element.id !== element2.saleItemID) { return; }
            element.quantity = element2.quantityChange;
          });
        });
        this.cartData.items = this.saleItems.filter(x => x.quantity > 0);
      }
      else {
        this.saleItems.forEach(element => {
          element.quantity = 0;
        });
      }
    });

    this.saleService.getAllSaleCategories().subscribe(
      {
        next: data => {
          this.categoryArray = data.result;
          this.isLoading = false;
        }
      }
    );

    this.filterData = this.saleItems;
    console.log(this.filterItems);

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
        await this.cartService.getCartData();
        this.isLoading = false;
      }, 3000);
    } catch (e) {
      console.log(e);
    }
  }


  quantityPlus(item) {
    const index = this.saleItems.findIndex(x => x.saleItemID === item.saleItemID);
    if (!this.saleItems[index].quantity) {
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
      this.cartService.saveCart();
    } catch (e) {
      console.log(e);
    }
  }

  async ionViewWillLeave() {
    if (this.cartData?.items && this.cartData?.items.length > 0) { await this.saveToCart(); }
  }


}
