/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart';
import { cartLine } from '../models/cart-line';
import { SaleItem } from '../models/sale-item';
import { CartModalPage } from '../pages/shop/cart-modal/cart-modal.page';
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
    private global: GlobalService,
    private modalCtrl: ModalController,
    public repo: RepoService
  ) { }

  getCart() {
    return this.storage.getKey('cart');
  }

  async getCartData() {
    console.log('Cart Service: getCartData()');
    const data: any = await this.getCart();
    console.log('cart data: ', data);
    if(data?.value) {
      this.model = await JSON.parse(data.value);
      console.log('cart model: ', this.model);
      await this.calculate();
      this._cart.next(this.model);
    }
  }

  alertClearCart(index, items, data) {
    this.global.showAlert(
      'Your cart contain items from a different restaurant. Would you like to reset your cart before browsing the restaurant?',
      'Items already in Cart');
  }

  async quantityPlus(index, items?) {
    console.log('Cart Service: quantityPlus()');
    try {
      if(items) {this.model.items = [...items];}
      console.log('Quantity plus: ', this.model.items[index]);
      // this.model.items[index].quantity += 1;
      if(!this.model.items[index].quantityChange || this.model.items[index].quantityChange === 0) {
        this.model.items[index].quantityChange = 1;
      } else {
        this.model.items[index].quantityChange += 1; // this.model.items[index].quantity = this.model.items[index].quantity + 1
      }
      await this.calculate();
      this._cart.next(this.model);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  async quantityMinus(index, items?: cartLine[]) {
    try {
      if(items) {
        console.log('model: ', this.model);
        this.model.items = [...items];
      }
      console.log('item: ', this.model.items[index]);
      if(this.model.items[index].quantityChange && this.model.items[index].quantityChange !== 0) {
        this.model.items[index].quantityChange -= 1; // this.model.items[index].quantity = this.model.items[index].quantity - 1
      } else {
        this.model.items[index].quantityChange = 0;
      }
      await this.calculate();
      this._cart.next(this.model);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  async calculate() {
    const item = this.model.items.filter(x => x.quantityChange > 0);
    this.model.items = item;
    this.model.totalPrice = 0;
    this.model.totalItem = 0;
    this.model.grandTotal = 0;
    item.forEach(element => {
      this.model.totalItem += element.quantityChange;
      // this.model.totalPrice += (parseFloat(element.price) * parseFloat(element.quantity));
      this.model.totalPrice += (element.price * element.quantityChange);
    });
    // this.model.totalPrice = parseFloat(this.model.totalPrice).toFixed(2);
    // this.model.grandTotal = (parseFloat(this.model.totalPrice) + parseFloat(this.model.deliveryCharge)).toFixed(2);
    this.model.grandTotal = this.model.totalPrice;
    if(this.model.totalItem === 0) {
      this.model.totalItem = 0;
      this.model.totalPrice = 0;
      this.model.grandTotal = 0;
      await this.clearCart();
      this.model = {} as Cart;
    }
    console.log('cart: ', this.model);
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
    // this._cart.next(this.model);
  }

  async openCart(cartData, saleItem){
    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      componentProps:{
        cartData, saleItem
      },
      cssClass: 'cart-modal'
    });
    modal.present();
  }

  makePayment(payform: any){
    this.repo.makePayment(payform).subscribe(
      {
        next: () => {
          console.log(payform);
        }
      }
    )
   }

}
