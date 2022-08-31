/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart';
import { SaleItem } from '../models/sale-item';
import { CartModalPage } from '../pages/shop/cart-modal/cart-modal.page';
import { CheckoutComponent } from '../pages/shop/checkout/checkout.component';
import { PaymentPage } from '../pages/shop/payment/payment.page';
import { GlobalService } from './global/global.service';
import { RepoService } from './repo.service';
import { StoreService } from './storage/store.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  model = {} as Cart;
  private _cart = new BehaviorSubject<Cart>(null);

  get cart() {
    return this._cart.asObservable();
  }

  constructor(
    private storage: StoreService,
    public global: GlobalService,
    private modalCtrl: ModalController,
    public repo: RepoService
  ) { }

  getCart() {
    return this.storage.getKey('cart');
  }

  getCartOrder(): any {
    return this.storage.getKey('order');
  }

  async getCartData(): Promise<any> {
    console.log('Cart Service: getCartData()');
    const data: any = await this.getCart();
    console.log('cart data: ', data);
    if(data?.value) {
      this.model = await JSON.parse(data.value);
      console.log('cart model: ', this.model);
      await this.calculate();
      this._cart.next(this.model);
    }
    return new Promise((resolve) => {
      resolve(this.model);
    })

  }


  async quantityPlus(index, sales?) {
    console.log('Cart Service: quantityPlus()');
    try {
      if(sales) {this.model.sales = [...sales];}
      console.log('Quantity plus: ', this.model.sales[index]);
      if(!this.model.sales[index].quantityChange || this.model.sales[index].quantityChange === 0) {
        this.model.sales[index].quantityChange = 1;
      } else {
        this.model.sales[index].quantityChange += 1; // this.model.sales[index].quantity = this.model.sales[index].quantity + 1
      }
      await this.calculate();
      this._cart.next(this.model);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  async quantityMinus(index, sales?: any[]) {
    try {
      if(sales) {
        console.log('model: ', this.model);
        this.model.sales = [...sales];
      }
      console.log('item: ', this.model.sales[index]);
      if(this.model.sales[index].quantityChange && this.model.sales[index].quantityChange !== 0) {
        this.model.sales[index].quantityChange -= 1;
      } else {
        this.model.sales[index].quantityChange = 0;
      }
      await this.calculate();
      this._cart.next(this.model);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  async calculate() {
    // const item = this.model.sales.filter(x => x.quantityChange > 0);
    // this.model.sales = item;

    // this.model.grandTotal = 0;
    // this.model.sales.forEach(element => {
    //   this.model.sales.length += element.quantityChange;
    //   let subTotal = element.priceHistory[element.priceHistory.length-1].saleAmount;
    //   element.subTotal = subTotal * element.quantityChange;
    //   this.model.totalPrice += (subTotal * element.quantityChange);
    // });
    // // console.log("Final price: ");
    // // console.log(this.model.totalPrice);
    // // this.model.totalPrice = parseFloat(this.model.totalPrice).toFixed(2);
    // // this.model.grandTotal = (parseFloat(this.model.totalPrice) + parseFloat(this.model.deliveryCharge)).toFixed(2);
    // this.model.grandTotal = this.model.totalPrice;
    // if(this.model.totalItem === 0) {
    //   this.model.totalItem = 0;
    //   this.model.totalPrice = 0;
    //   this.model.grandTotal = 0;
    //   await this.clearCart();
    //   this.model = {} as Cart;
    // }
    // console.log('cart: ', this.model);
  }

  async clearCart() {
    //this.global.showLoader();
    await this.storage.deleteKey('cart');
    this._cart.next(null);
    //this.global.hideLoader();
  }

  saveCart(model?) {
    if(model) {this.model = model;}
    this.storage.setKey('cart', JSON.stringify(this.model));
  }

  saveCartOrder(model) {
    this.storage.setKey('order', JSON.stringify(model));
  }


  //Modal to open cart
  async openCart(cartData, saleItem){
    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      componentProps:{
        cartData, saleItem,
        rootPage: PaymentPage
      },
      cssClass: 'cart-modal'
    });
    await modal.present();
  }

  //Clear cart
  async clearCartOrder() {
    await this.storage.deleteKey('order');
  }


  async checkout(cartData:any){
    const modal = await this.modalCtrl.create({
      component: CheckoutComponent,
      componentProps:{
        cartData
      }
    });
    modal.present();
  }

  makePayment(payform: any){
    this.repo.makePayment(payform).subscribe(
      {
        next: (data) => {
          console.log(payform);
          console.log(data);
        }
      }
    )
   }

}
