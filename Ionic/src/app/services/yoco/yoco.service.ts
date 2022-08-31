import { Injectable } from '@angular/core';
import { IYoco } from './IYoco';

declare var YocoSDK;
declare let window : IYoco;

@Injectable({
  providedIn: 'root'
})
export class YocoService {

  PK_LIVE = 'pk_live_63e34c8fnZwXnm28d4b4';
  SK_LIVE = 'sk_live_ff87d83fxWpR8vQ554040e287f3c';

  PK_TEST = 'sk_live_ff87d83fxWpR8vQ554040e287f3c';
  SK_TEST = 'sk_test_cc0f5683xWpR8vQ65b14d8a99f19';

  yoco : any = new YocoSDK({
    publicKey: this.PK_TEST,
  });

  constructor(private repo : RepoService) { }
    window.charge = (token_card : any, payload) => {
      this.repo.chargeYOCO(payload).subscribe(res => {
        console.log(JSON.parse(res));
        this.yoco.showPopup(JSON.parse(res));
      });
    }
  }

  

}
