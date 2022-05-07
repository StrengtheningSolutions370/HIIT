import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePageRoutingModule } from './employee-routing.module';

import { EmployeePage } from './employee.page';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ViewEmployeeInfoComponent } from './view-employee-info/view-employee-info.component';
import { ConfirmEmployeeComponent } from './confirm-employee/confirm-employee.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeePageRoutingModule
  ],
  declarations: [EmployeePage, AddEmployeeComponent , UpdateEmployeeComponent ,
                DeleteEmployeeComponent, ViewEmployeeInfoComponent, ConfirmEmployeeComponent]
})
export class EmployeePageModule {}
