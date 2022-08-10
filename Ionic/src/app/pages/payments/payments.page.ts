import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { appUser } from 'src/app/models/appUser';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { RazorpayService } from 'src/app/services/razorpay/razorpay.service';
import { StoreService } from 'src/app/services/storage/store.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  userMail!: string;
  userPhone!: string;
  profile = {} as appUser;
  order = {} as Order;
  profileSub: Subscription;

  constructor(public cartService: CartService,
    public router: Router,
    private global: GlobalService,
    private razorpay: RazorpayService,
    private storage: StoreService) { }

    ngOnInit(): void {
      this.storage.getKey('user').then((usr : any) => {
        const obj = JSON.parse(usr)
        this.userMail = `${obj.email}`.toString();
        this.userPhone = `${obj.phoneNumber}`.toString();
        console.log(this.userMail, this.userPhone);
      })
    }

  async getData() {
    try {
      //await this.checkUrl();
      const order = await this.cartService.getCartOrder();
      console.log(order);
      this.order = JSON.parse(order?.value);
    } catch(e) {
      console.log(e);
      // this.global.errorToast();
    }
  }


    async ngOnDestroy() {
      await this.cartService.clearCartOrder();
    }
  }


