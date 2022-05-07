import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenuesPageRoutingModule } from './venues-routing.module';

import { VenuesPage } from './venues.page';
import { AddVenueComponent } from './add-venue/add-venue.component';
import { UpdateVenueComponent } from './update-venue/update-venue.component';
import { DeleteVenueComponent } from './delete-venue/delete-venue.component';
import { ViewVenueInfoComponent } from './view-venue-info/view-venue-info.component';
import { ConfirmVenueComponent} from './confirm-venue/confirm-venue.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenuesPageRoutingModule
  ],
  declarations: [VenuesPage, AddVenueComponent, UpdateVenueComponent, DeleteVenueComponent, ViewVenueInfoComponent, ConfirmVenueComponent],
  entryComponents: [AddVenueComponent]
})
export class VenuesPageModule {}
