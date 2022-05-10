import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VATPageRoutingModule } from './vat-routing.module';

import { VATPage } from './vat.page';

import { AddVatComponent } from './add-vat/add-vat.component';
import { UpdateVatComponent } from './update-vat/update-vat.component';
import { DeleteVatComponent } from './delete-vat/delete-vat.component';
import { ViewVatComponent } from './view-vat/view-vat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VATPageRoutingModule
  ],
  declarations: [VATPage, AddVatComponent, UpdateVatComponent, DeleteVatComponent, ViewVatComponent ]
})
export class VATPageModule {}
