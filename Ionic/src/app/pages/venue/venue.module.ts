import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenuePageRoutingModule } from './venue-routing.module';

import { VenuePage } from './venue.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenuePageRoutingModule
  ],
  declarations: [VenuePage, HeaderComponent]
})
export class VenuePageModule {}
