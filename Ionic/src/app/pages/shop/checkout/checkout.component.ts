import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { bookingLine, Cart, saleLine } from 'src/app/models/cart';
import { Vat } from 'src/app/models/vat';
import { Yoco } from 'src/app/models/yoco';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { RepoService } from 'src/app/services/repo.service';
import { StoreService } from 'src/app/services/storage/store.service';
import { VatService } from 'src/app/services/vat/vat.service';
import { YocoService } from 'src/app/services/yoco/yoco.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements ViewWillEnter {
  @Input() cartData = {} as Cart;
  currentMethod = undefined;
  priceExcVat: number;
  vatList: Vat [] = [];
  logged = false;
  role! : string;
  client = false;
  member = false;
  admin = false;
  superuser = false;
  trainer = false;



  constructor(public global: GlobalService,
    private router : Router,
    public repo: RepoService,
    public cartService: CartService,
    public storage: StoreService,
    private yoco : YocoService,
    public vatService: VatService,
    public auth: AuthService) { }

  ionViewWillEnter() {
    console.log(this.cartData);
    this.auth.isLoggedIn.subscribe(log => {
      this.logged = log;
    });

    this.auth.isLoggedIn.subscribe(log => { //runs once logged in

      if (log) { //check if logged in

        this.storage.getKey('token').then(token => { //fetch token from storage

          if (token == null) { //no token was found

            this.router.navigate(['login']);
            this.auth.logout();
            return;

          } else {

            this.repo.getUserRole(token).subscribe({

              next: (data : any) => { //token was valid
                this.role = data.role;
                //OVERRIDE TESTING:
                //this.superuser = true;
                if (this.role == 'client')
                  this.client = true;
                  this.currentMethod = 'card'
                if (this.role == 'member')
                  this.member = true;
                  this.currentMethod = 'card'
                if (this.role == 'admin')
                  this.admin = true;
                if (this.role == 'superuser')
                  this.superuser = true;
                if (this.role == 'trainer')
                  this.trainer = true;
              },

              error: (er) => { //token was not valid
                console.log('token in storage is expired', er);
                this.storage.deleteKey('token');
                this.router.navigate(['login']);
                this.auth.logout();
                return;
              }

            });

          }
        })
      }

    })

    this.vatService.getAllVats().subscribe({
      next: (vatVal) => {
        console.log(vatVal);
        this.vatList = vatVal.result;
        let tempPrice = this.cartData.grandPriceTotal;
        let percentage = 100-(this.vatList[this.vatList.length-1].percentage);
        console.log(percentage);
        tempPrice = tempPrice * (percentage/100);
        console.log(tempPrice);
        this.priceExcVat = this.cartData.grandPriceTotal - tempPrice;
      }
    })
  }


  async returnFrom(){
      this.global.dismissModal();
      this.cartService.openCart();
  }

  handleChange(e) {
    this.currentMethod = e.target.value;
  }

  async cashPay(){
    console.log(this.cartData);
    var saleItemArr: any[] = null;
    if (this.cartData['sales'] != null)
      if (this.cartData.sales.length>0){
        saleItemArr = [];
        this.cartData.sales.forEach(saleLine => {
          let tempSale = {
            saleItemID: saleLine.saleItemID,
            quantity: saleLine.quantity
          }
          saleItemArr.push(tempSale);
        })
      }
    console.log("Cash pay, sale item arr: ");
    console.log(saleItemArr);

    var bookingItemArr: bookingLine[] = null;
    if (this.cartData['bookings'] != null)
      if (this.cartData.bookings.length>0){
        bookingItemArr = [];
        this.cartData.bookings.forEach(bookingLine => {
          let tempBook = {
            scheduleID: bookingLine.scheduleID
          }
          bookingItemArr.push(tempBook);
        });
      }
    console.log("Cash pay, booking item arr: ");
    console.log(bookingItemArr);

    var payObj = { // Object to record sale on API
      userID: this.cartData.userId,
      paymentTypeID: 1,
      sales: saleItemArr,
      bookings: bookingItemArr,
      //clientID: this.cartData.userId
    }

    console.log(payObj);
    this.cartService.makePayment(payObj);
    this.global.dismissModal();
    await this.global.showToast(this.currentMethod + " sale successfully recorded");
    location.reload();
  }

  // async proceedToPayment(){
  //   console.log(this.cartData);
  //   this.global.nativeLoad("Processing Payment...");
  //   this.global.endNativeLoad();
  //   this.global.dismissModal();
  //   await this.global.showToast(this.currentMethod + " sale successfully recorded");


  // }

 async cardPay() {
    const pl = new Yoco(this.cartData.grandPriceTotal * 100, 'ZAR', '');
    this.yoco
      .pay(pl)
      .subscribe(res => {
        if (res) {
          console.log(this.cartData);
          var saleItemArr: any[] = null;
          if (this.cartData['sales'] != null)
            if (this.cartData.sales.length>0){
              saleItemArr = [];
              this.cartData.sales.forEach(saleLine => {
                let tempSale = {
                  saleItemID: saleLine.saleItemID,
                  quantity: saleLine.quantity
                }
                saleItemArr.push(tempSale);
              })
            }
          console.log("Cash pay, sale item arr: ");
          console.log(saleItemArr);

          var bookingItemArr: bookingLine[] = null;
          if (this.cartData['bookings'] != null)
            if (this.cartData.bookings.length>0){
              bookingItemArr = [];
              this.cartData.bookings.forEach(bookingLine => {
                let tempBook = {
                  scheduleID: bookingLine.scheduleID
                }
                bookingItemArr.push(tempBook);
              });
            }
          console.log("Cash pay, booking item arr: ");
          console.log(bookingItemArr);

          var payObj = { // Object to record sale on API
            userID: this.cartData.userId,
            paymentTypeID: 2,
            sales: saleItemArr,
            bookings: bookingItemArr,
            //clientID: this.cartData.userId
          }

          console.log(payObj);
          this.cartService.makePayment(payObj);
          // this.global.dismissModal();
          // this.global.showToast(this.currentMethod + " sale successfully recorded");
          //location.reload();
        }
        else
          this.global.showAlert('Payment Failed, Please try again');
      });
  }

}
