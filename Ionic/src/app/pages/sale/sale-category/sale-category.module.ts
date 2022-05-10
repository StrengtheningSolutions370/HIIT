import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleCategoryPageRoutingModule } from './sale-category-routing.module';

import { SaleCategoryPage } from './sale-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleCategoryPageRoutingModule
  ],
  declarations: [SaleCategoryPage]
})
export class SaleCategoryPageModule {}
