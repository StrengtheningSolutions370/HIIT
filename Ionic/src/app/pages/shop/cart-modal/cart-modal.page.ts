import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { SaleItem } from 'src/app/models/sale-item';
import { CartService } from 'src/app/services/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { CartBookingItemComponent } from 'src/app/components/cart-booking-item/cart-booking-item.component';
import * as moment from 'moment';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements ViewWillEnter {
  rootPage: any;
  level = 0;
  nextPage = CartModalPage;//Not sure of this purpose

  @ViewChild(IonContent, {static: false}) content: IonContent;//Not sure of this purpose
  @Input() model = {} as Cart;
  @Input() saleItem = {} as SaleItem;
  cartSub: Subscription;

  payForm! : UntypedFormGroup;

  //emptyCart = false; //Not currently being used

  constructor( private cartService: CartService,
      public global: GlobalService,
      public formBuilder: UntypedFormBuilder
          ) {}

   async ionViewWillEnter() {
    await this.getData();
    this.cartSub = this.cartService.cart.subscribe(cart => {
      console.log('Loading cart subscription into local model:', cart);
      this.model = cart;
      //console.log('cart page model: ', this.model);
    });

  }

  async getData(): Promise<any> {
    await this.cartService.getCartData().then((model)=>{
      console.log("Getting data from cartService");
      console.log(model);
      this.model = model;
    });
  }



   checkout(){
    console.log(this.model);
    this.cartService.checkout(this.model);
   }

  quantityPlus(index) {
    this.cartService.quantityPlus(index);
    //this.cartService.calculate();
  }

  quantityMinus(index) {
    //where does it update the local model?
    this.cartService.quantityMinus(index);
    console.log('Quantiy Minus:', this.model.sales);
    //this.cartService.calculate();
    if(this.model?.sales.length === 0){
      console.log("empty the sales basket of the cart");
      this.model.sales = null;
    }
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave CartPage');
    if(this.model?.sales && this.model?.sales.length > 0) {
      this.cartService.saveCart();
    } else if (this.model?.bookings && this.model?.bookings.length > 0)
    this.cartSub.unsubscribe();
  }
}

       // this.payForm = this.formBuilder.group({
    //   merchant_id: ['10026801'],
    //   amount: ['100.00'],
    //   merchant_key: ['08fsf78tsgq70'],
    //   item_name: ['Pomodoro subscription']
    // });
  //  goForward() {
  //   this.nav.push(this.nextPage, { level: this.level + 1 });
  // }

  // goRoot() {
  //   this.nav.popToRoot();
  // }

  //  submit(){
  //   console.log('submitting payment')
  //  }

    // async makePayment() {
  //   // try {
  //   //   console.log('model: ', this.model);
  //   //   const data = {
  //   //     order: this.model.items,
  //   //     time: moment().format('lll'),
  //   //     total: this.model.totalPrice,
  //   //     grandTotal: this.model.grandTotal,
  //   //     status: 'Created',
  //   //     paid: 'COD'
  //   //   };
  //   //   console.log('order: ', data);
  //   //   await this.cartService.saveCartOrder(data);
  //   try{
  //     console.log('Leaving to payment page');
  //     this.global.dismissModal();
  //     this.router.navigate([this.router.url, 'payment']);

  //   } catch(e) {
  //     console.log(e);
  //   }
  // }
