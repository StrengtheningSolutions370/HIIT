import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventBookingsPageRoutingModule } from './event-bookings-routing.module';

import { EventBookingsPage } from './event-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventBookingsPageRoutingModule
  ],
  declarations: [EventBookingsPage]
})
export class EventBookingsPageModule {}
