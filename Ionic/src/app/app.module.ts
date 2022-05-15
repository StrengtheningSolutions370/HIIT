import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddVenueComponent } from './pages/venue/add-venue/add-venue.component';
import { UpdateVenueComponent } from './pages/venue/update-venue/update-venue.component';
import { ViewVenueInfoComponent } from './pages/venue/view-venue-info/view-venue-info.component';
import { DeleteVenueComponent } from './pages/venue/delete-venue/delete-venue.component';
import { ConfirmVenueComponent } from './pages/venue/confirm-venue/confirm-venue.component';
import { AssociativeVenueComponent } from './pages/venue/associative-venue/associative-venue.component';

import { HttpClientModule } from '@angular/common/http';


import { AddVatComponent } from './pages/sale/vat/add-vat/add-vat.component';
import { UpdateVatComponent } from './pages/sale/vat/update-vat/update-vat.component';
import { DeleteVatComponent } from './pages/sale/vat/delete-vat/delete-vat.component';
import { ViewVatComponent } from './pages/sale/vat/view-vat/view-vat.component';

@NgModule({
  declarations: [AppComponent, 
  AddVenueComponent, UpdateVenueComponent, ViewVenueInfoComponent, DeleteVenueComponent, ConfirmVenueComponent,AssociativeVenueComponent,
  AddVatComponent, UpdateVatComponent, DeleteVatComponent, ViewVatComponent],

  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
