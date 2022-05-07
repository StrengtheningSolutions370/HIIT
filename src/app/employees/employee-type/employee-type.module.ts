import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeTypePageRoutingModule } from './employee-type-routing.module';

import { EmployeeTypePage } from './employee-type.page';

import { AddEtypeComponent } from './add-etype/add-etype.component';
import { UpdateEtypeComponent } from './update-etype/update-etype.component';
import { DeleteEtypeComponent } from './delete-etype/delete-etype.component';
import { ViewEtypeComponent } from './view-etype/view-etype.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeTypePageRoutingModule
  ],
  declarations: [EmployeeTypePage, AddEtypeComponent, UpdateEtypeComponent
                ,DeleteEtypeComponent , ViewEtypeComponent]
})
export class EmployeeTypePageModule {}
