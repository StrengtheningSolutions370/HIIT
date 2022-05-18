import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.page.html',
  styleUrls: ['./vat.page.scss'],
})
export class VATPage {

  vats = [
    {percentage : '10%',
     year : '1991'},
    {percentage : '14%',
     year : '1993'},
     {percentage : '15%',
     year : '2018'}
  ];

  constructor() { }

}
