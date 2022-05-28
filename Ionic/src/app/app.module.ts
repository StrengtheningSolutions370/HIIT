import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AddVenueComponent } from './pages/venue/add-venue/add-venue.component';
import { UpdateVenueComponent } from './pages/venue/update-venue/update-venue.component';
import { ViewVenueInfoComponent } from './pages/venue/view-venue-info/view-venue-info.component';
import { DeleteVenueComponent } from './pages/venue/delete-venue/delete-venue.component';
import { ConfirmVenueComponent } from './pages/venue/confirm-venue/confirm-venue.component';
import { AssociativeVenueComponent } from './pages/venue/associative-venue/associative-venue.component';

import { AddRoleComponent } from './pages/user/user-roles/add-role/add-role.component';
import { UpdateRoleComponent } from './pages/user/user-roles/update-role/update-role.component';
import { DeleteRoleComponent } from './pages/user/user-roles/delete-role/delete-role.component';
import { ViewRoleComponent } from './pages/user/user-roles/view-role/view-role.component';

import { AddTitleComponent } from './pages/user/titles/add-title/add-title.component';
import { UpdateTitleComponent } from './pages/user/titles/update-title/update-title.component';
import { DeleteTitleComponent } from './pages/user/titles/delete-title/delete-title.component';
import { ViewTitlesComponent } from './pages/user/titles/view-titles/view-titles.component';
import { ConfirmTitleComponent } from './pages/user/titles/confirm-title/confirm-title.component';


import { AddCategoryComponent } from './pages/sale/sale-category/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/sale/sale-category/update-category/update-category.component';
import { DeleteCategoryComponent } from './pages/sale/sale-category/delete-category/delete-category.component';
import { ViewCategoryComponent } from './pages/sale/sale-category/view-category/view-category.component';
import { ConfirmCategoryComponent } from './pages/sale/sale-category/confirm-category/confirm-category.component';

import { AddQtypeComponent } from './pages/employee/qualification-type/add-qtype/add-qtype.component';
import { UpdateQtypeComponent } from './pages/employee/qualification-type/update-qtype/update-qtype.component';
import { DeleteQtypeComponent } from './pages/employee/qualification-type/delete-qtype/delete-qtype.component';
import { ViewQtypeComponent } from './pages/employee/qualification-type/view-qtype/view-qtype.component';
import { ConfirmQtypeComponent } from './pages/employee/qualification-type/confirm-qtype/confirm-qtype.component';
import { AuthInterceptor } from './authentication/auth.interceptor';
import { ConfirmRoleComponent } from './pages/user/user-roles/confirm-role/confirm-role.component';
import { AddEtypeComponent } from './pages/employee/employee-type/add-etype/add-etype.component';
import { ConfirmEtypeComponent } from './pages/employee/employee-type/confirm-etype/confirm-etype.component';
import { UpdateEtypeComponent } from './pages/employee/employee-type/update-etype/update-etype.component';
import { ViewEtypeComponent } from './pages/employee/employee-type/view-etype/view-etype.component';
import { DeleteEtypeComponent } from './pages/employee/employee-type/delete-etype/delete-etype.component';

import { AddVatComponent } from './pages/sale/vat/add-vat/add-vat.component';
import { UpdateVatComponent } from './pages/sale/vat/update-vat/update-vat.component';
import { DeleteVatComponent } from './pages/sale/vat/delete-vat/delete-vat.component';
import { ViewVatComponent } from './pages/sale/vat/view-vat/view-vat.component';
import { ConfirmVatComponent } from './pages/sale/vat/confirm-vat/confirm-vat.component';
import { AssociativeQtypeComponent } from './pages/employee/qualification-type/associative-qtype/associative-qtype.component';

@NgModule({
  declarations: [AppComponent,
  //Venue
  AddVenueComponent, UpdateVenueComponent, ViewVenueInfoComponent, DeleteVenueComponent, ConfirmVenueComponent,AssociativeVenueComponent,
  //UserRole
  AddRoleComponent, UpdateRoleComponent, DeleteRoleComponent, ViewRoleComponent, ConfirmRoleComponent,
  //Title
  AddTitleComponent, UpdateTitleComponent, DeleteTitleComponent, ViewTitlesComponent, ConfirmTitleComponent,
  //QualificationType
  AddQtypeComponent, UpdateQtypeComponent, DeleteQtypeComponent, ViewQtypeComponent, ConfirmQtypeComponent, AssociativeQtypeComponent,
  //VAT 
  AddVatComponent, UpdateVatComponent, DeleteVatComponent, ViewVatComponent, ConfirmVatComponent,
  //EmployeeType
  AddEtypeComponent, ConfirmEtypeComponent, UpdateEtypeComponent, ViewEtypeComponent, DeleteEtypeComponent],

  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
