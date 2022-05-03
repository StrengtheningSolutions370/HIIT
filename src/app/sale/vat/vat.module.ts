import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VATPageRoutingModule } from './vat-routing.module';

import { VATPage } from './vat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VATPageRoutingModule
  ],
  declarations: [VATPage]
})
export class VATPageModule {}
