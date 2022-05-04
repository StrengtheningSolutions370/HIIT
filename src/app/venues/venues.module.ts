import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenuesPageRoutingModule } from './venues-routing.module';

import { VenuesPage } from './venues.page';
import { AddVenueComponent } from './add-venue/add-venue.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenuesPageRoutingModule
  ],
  declarations: [VenuesPage, AddVenueComponent],
  entryComponents: [AddVenueComponent]
})
export class VenuesPageModule {}
