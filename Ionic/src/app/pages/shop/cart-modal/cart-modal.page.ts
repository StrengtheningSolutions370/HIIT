import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, ModalController, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { SaleItem } from 'src/app/models/sale-item';
import { CartService } from 'src/app/services/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements ViewWillEnter {
  rootPage: any;
  level = 0;
  nextPage = CartModalPage;

  @ViewChild(IonContent, {static: false}) content: IonContent;
  @Input() model = {} as Cart;
  @Input() saleItem = {} as SaleItem;
  cartSub: Subscription;

  payForm! : UntypedFormGroup;

  emptyCart = false;

  constructor( private httpComms : HttpClient,
     private cartService: CartService,
      private global: GlobalService,
      public formBuilder: UntypedFormBuilder,
      private router: Router
          ) {
    this.getData();

    this.payForm = this.formBuilder.group({
      merchant_id: ['10026801'],
      amount: ['100.00'],
      merchant_key: ['08fsf78tsgq70'],
      item_name: ['Pomodoro subscription']
    });
   }

  //  goForward() {
  //   this.nav.push(this.nextPage, { level: this.level + 1 });
  // }

  // goRoot() {
  //   this.nav.popToRoot();
  // }
  
   submit(){
    console.log('submitting payment')
   }

  async getData() {
    await this.cartService.getCartData();
  }

  quantityPlus(index) {
    this.cartService.quantityPlus(index);
    this.cartService.calculate();
  }

  quantityMinus(index) {
    this.cartService.quantityMinus(index);
    this.cartService.calculate();
    if(this.model?.totalItem === 0){
      this.model.items = null;
    }
    console.log('Quantiy Minus: Null:', this.model.items);

  }

  async makePayment() {
    // try {
    //   console.log('model: ', this.model);
    //   const data = {
    //     order: this.model.items,
    //     time: moment().format('lll'),
    //     total: this.model.totalPrice,
    //     grandTotal: this.model.grandTotal,
    //     status: 'Created',
    //     paid: 'COD'
    //   };
    //   console.log('order: ', data);
    //   await this.cartService.saveCartOrder(data);
    try{
      console.log('Leaving to payment page');
      this.global.dismissModal();
      this.router.navigate([this.router.url, 'payment']);

    } catch(e) {
      console.log(e);
    }
  }
  

  ionViewWillEnter() {
    this.cartSub = this.cartService.cart.subscribe(cart => {
      console.log('cart page: ', cart);
      this.model = cart;
      console.log('cart page model: ', this.model);
    });
    this.getData();
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave CartPage');
    if(this.model?.items && this.model?.items.length > 0) {
      this.cartService.saveCart();
    }
    this.cartSub.unsubscribe();
  }


}
