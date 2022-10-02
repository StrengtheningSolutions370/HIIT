import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientBookingPageRoutingModule } from './client-booking-routing.module';

import { ClientBookingPage } from './client-booking.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientBookingPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ClientBookingPage]
})
export class ClientBookingPageModule {}
