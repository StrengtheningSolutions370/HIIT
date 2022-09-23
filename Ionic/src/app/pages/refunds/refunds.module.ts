import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefundsPageRoutingModule } from './refunds-routing.module';

import { RefundsPage } from './refunds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefundsPageRoutingModule
  ],
  declarations: [RefundsPage]
})
export class RefundsPageModule {}
