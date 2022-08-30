import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigToken } from '@ionic/angular/providers/config';
import { CartService } from 'src/app/services/cart.service';
import { RepoService } from 'src/app/services/repo.service';
import { StoreService } from 'src/app/services/storage/store.service';
import { YocoService } from 'src/app/services/yoco/yoco.service';
import { IYoco } from './IYoco';

declare var YocoSDK;
const axios = require('axios')
declare let window : IYoco;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  yoco : any = new YocoSDK({
    publicKey: 'pk_test_55b09fdfnZwXnm2a7584',
  });

  token = '';

  username! : string;

  constructor(private storage : StoreService, public cartService: CartService, private http : HttpClient, private repo : RepoService, private y : YocoService) { }

  ngOnInit() {

    this.storage.getKey('user').then((usr : any) => {
      const obj = JSON.parse(usr)
      this.username = `${obj.firstName} ${obj.lastName}`;
    })

    window.charge = (token_card : any, payload) => {
      this.repo.chargeYOCO(payload).subscribe(res => {
        console.log(JSON.parse(res));
        this.yoco.showPopup(JSON.parse(res));
      });
    }

  }


  pay() {
    
    this.yoco.showPopup({
      amountInCents: 1000,
      currency: 'ZAR',
      name: 'Bester Strength and Conditioning',
      description: 'HIIT',
      image: 'https://localhost:44383/Resources/Logo.jpg',
      customer: {
        name: 'Shannon'
      },
      callback: function (result) {
        if (result.error) {
          const errorMessage = result.error.message;
          alert("error occured: " + errorMessage);
        } else {
          console.log('card token = ', result.id);
          this.token = result.id;
          const httpOptions = {
            headers: new HttpHeaders({
              Accept: 'application/json',
              ContentType: 'application/json'
            }),
          };
          const payload = { token: result.id, amount: 1000}
          window.charge(this.token, payload);
        }
      }
    });
    
  }

  captureCharge(token_card : any) {
    
  }

}
