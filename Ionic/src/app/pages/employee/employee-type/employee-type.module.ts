import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeTypePageRoutingModule } from './employee-type-routing.module';

import { EmployeeTypePage } from './employee-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeTypePageRoutingModule
  ],
  declarations: [EmployeeTypePage]
})
export class EmployeeTypePageModule {}
