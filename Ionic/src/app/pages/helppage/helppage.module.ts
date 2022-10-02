import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelppagePageRoutingModule } from './helppage-routing.module';

import { HelppagePage } from './helppage.page';
import { HelpLoginComponent } from './account/help-login/help-login.component';
import { HelpLogoutComponent } from './account/help-logout/help-logout.component';
import { HelpRegisterComponent } from './account/help-register/help-register.component';
import { HelpForgotpasswordComponent } from './account/help-forgotpassword/help-forgotpassword.component';
import { HelpChangepasswordComponent } from './account/help-changepassword/help-changepassword.component';
import { HelpResetpasswordComponent } from './account/help-resetpassword/help-resetpassword.component';
import { HelpHomeComponent } from './home/help-home/help-home.component';
import { HelpSchedulecalendarComponent } from './bookingmanagement/help-schedulecalendar/help-schedulecalendar.component';
import { HelpBookingtypeComponent } from './bookingmanagement/help-bookingtype/help-bookingtype.component';
import { HelpClientbookingsComponent } from './bookingmanagement/help-clientbookings/help-clientbookings.component';
import { HelpEmployeeComponent } from './employeemanagement/help-employee/help-employee.component';
import { HelpEmployeetypeComponent } from './employeemanagement/help-employeetype/help-employeetype.component';
import { HelpQualificationComponent } from './employeemanagement/help-qualification/help-qualification.component';
import { HelpQualificationtypeComponent } from './employeemanagement/help-qualificationtype/help-qualificationtype.component';
import { HelpExerciseComponent } from './exercise/help-exercise/help-exercise.component';
import { HelpExercisecategoryComponent } from './exercise/help-exercisecategory/help-exercisecategory.component';
import { HelpLessonsComponent } from './lessons/help-lessons/help-lessons.component';
import { HelpTrainerreportComponent } from './reports/help-trainerreport/help-trainerreport.component';
import { HelpClientreportComponent } from './reports/help-clientreport/help-clientreport.component';
import { HelpBookingreportComponent } from './reports/help-bookingreport/help-bookingreport.component';
import { HelpSalereportComponent } from './reports/help-salereport/help-salereport.component';
import { HelpIncomereportComponent } from './reports/help-incomereport/help-incomereport.component';
import { HelpRefundrequestsComponent } from './refundrequests/help-refundrequests/help-refundrequests.component';
import { HelpSaleitemComponent } from './salesmanagement/help-saleitem/help-saleitem.component';
import { HelpSalecategoryComponent } from './salesmanagement/help-salecategory/help-salecategory.component';
import { HelpRefundreasonComponent } from './salesmanagement/help-refundreason/help-refundreason.component';
import { HelpVatComponent } from './salesmanagement/help-vat/help-vat.component';
import { HelpWriteoffComponent } from './salesmanagement/help-writeoff/help-writeoff.component';
import { HelpWriteoffreasonComponent } from './salesmanagement/help-writeoffreason/help-writeoffreason.component';
import { HelpShopComponent } from './shop/help-shop/help-shop.component';
import { HelpStockComponent } from './stock/help-stock/help-stock.component';
import { HelpSuppliersComponent } from './suppliers/help-suppliers/help-suppliers.component';
import { HelpClientsComponent } from './usermanagement/help-clients/help-clients.component';
import { HelpTitleComponent } from './usermanagement/help-title/help-title.component';
import { HelpVenuesComponent } from './venues/help-venues/help-venues.component';
import { HelpEventcalendarComponent } from './clientbookings/help-eventcalendar/help-eventcalendar.component';
import { HelpMybookingsComponent } from './clientbookings/help-mybookings/help-mybookings.component';
import { HelpMeasurementsComponent } from './measurements/help-measurements/help-measurements.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelppagePageRoutingModule,

    
  ],
  declarations: [
    
    HelppagePage,
  
    // /account
    HelpLoginComponent,
    HelpLogoutComponent,
    HelpRegisterComponent,
    HelpForgotpasswordComponent,
    HelpChangepasswordComponent,
    HelpResetpasswordComponent,

    // /home
    HelpHomeComponent,

    // /bookingmanagement
    HelpSchedulecalendarComponent,
    HelpBookingtypeComponent,
    HelpClientbookingsComponent,

    // /employeemanagement
    HelpEmployeeComponent,
    HelpEmployeetypeComponent,
    HelpQualificationComponent,
    HelpQualificationtypeComponent,

    // /exercise
    HelpExerciseComponent,
    HelpExercisecategoryComponent,

    // /lessons
    HelpLessonsComponent,

    // /reports
    HelpTrainerreportComponent,
    HelpClientreportComponent,
    HelpBookingreportComponent,
    HelpSalereportComponent,
    HelpIncomereportComponent,

    // /refundrequests
    HelpRefundrequestsComponent,

    // /salesmanagement
    HelpSaleitemComponent,
    HelpSalecategoryComponent,
    HelpRefundreasonComponent,
    HelpVatComponent,
    HelpWriteoffComponent,
    HelpWriteoffreasonComponent,

    // /shop
    HelpShopComponent,

    // /stock
    HelpStockComponent,

    // /suppliers
    HelpSuppliersComponent,

    // /usermanagement
    HelpClientsComponent,
    HelpTitleComponent,

    // /venues
    HelpVenuesComponent,

    // /clientbookings
    HelpEventcalendarComponent,
    HelpMybookingsComponent,

    // /measurements
    HelpMeasurementsComponent

  ]
})
export class HelppagePageModule {}
