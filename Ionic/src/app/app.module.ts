/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authentication/auth.interceptor';

//VENUE IMPORTS:
import { AddVenueComponent } from './pages/venue/add-venue/add-venue.component';
import { UpdateVenueComponent } from './pages/venue/update-venue/update-venue.component';
import { ViewVenueInfoComponent } from './pages/venue/view-venue-info/view-venue-info.component';
import { DeleteVenueComponent } from './pages/venue/delete-venue/delete-venue.component';
import { ConfirmVenueComponent } from './pages/venue/confirm-venue/confirm-venue.component';
import { AssociativeVenueComponent } from './pages/venue/associative-venue/associative-venue.component';

//USER ROLE IMPORTS:
import { AddRoleComponent } from './pages/user/user-roles/add-role/add-role.component';
import { UpdateRoleComponent } from './pages/user/user-roles/update-role/update-role.component';
import { DeleteRoleComponent } from './pages/user/user-roles/delete-role/delete-role.component';
import { ViewRoleComponent } from './pages/user/user-roles/view-role/view-role.component';
import { ConfirmRoleComponent } from './pages/user/user-roles/confirm-role/confirm-role.component';

//TITLE IMPORTS:
import { AddTitleComponent } from './pages/user/titles/add-title/add-title.component';
import { UpdateTitleComponent } from './pages/user/titles/update-title/update-title.component';
import { DeleteTitleComponent } from './pages/user/titles/delete-title/delete-title.component';
import { ViewTitlesComponent } from './pages/user/titles/view-titles/view-titles.component';
import { ConfirmTitleComponent } from './pages/user/titles/confirm-title/confirm-title.component';
import { AssociativeTitleComponent } from './pages/user/titles/associative-title/associative-title.component';

//SALE CATEGORY IMPORTS:
import { AddCategoryComponent } from './pages/sale/sale-category/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/sale/sale-category/update-category/update-category.component';
import { DeleteCategoryComponent } from './pages/sale/sale-category/delete-category/delete-category.component';
import { ViewCategoryComponent } from './pages/sale/sale-category/view-category/view-category.component';
import { ConfirmCategoryComponent } from './pages/sale/sale-category/confirm-category/confirm-category.component';

//SALE ITEM IMPORTS:
import { AddSitemComponent } from './pages/sale/sale-item/add-sitem/add-sitem.component';
import { UpdateSitemComponent } from './pages/sale/sale-item/update-sitem/update-sitem.component';
import { DeleteSitemComponent } from './pages/sale/sale-item/delete-sitem/delete-sitem.component';
import { ViewSitemComponent } from './pages/sale/sale-item/view-sitem/view-sitem.component';
import { ConfirmSitemComponent } from './pages/sale/sale-item/confirm-sitem/confirm-sitem.component';

//EMPLOYEE_QUALIFICATION_TYPE IMPORTS:
import { AddQtypeComponent } from './pages/employee/qualification-type/add-qtype/add-qtype.component';
import { UpdateQtypeComponent } from './pages/employee/qualification-type/update-qtype/update-qtype.component';
import { DeleteQtypeComponent } from './pages/employee/qualification-type/delete-qtype/delete-qtype.component';
import { ViewQtypeComponent } from './pages/employee/qualification-type/view-qtype/view-qtype.component';
import { ConfirmQtypeComponent } from './pages/employee/qualification-type/confirm-qtype/confirm-qtype.component';
import { AssociativeQtypeComponent } from './pages/employee/qualification-type/associative-qtype/associative-qtype.component';

//EMPLOYEE_TYPE IMPORTS:
import { AddEtypeComponent } from './pages/employee/employee-type/add-etype/add-etype.component';
import { UpdateEtypeComponent } from './pages/employee/employee-type/update-etype/update-etype.component';
import { DeleteEtypeComponent } from './pages/employee/employee-type/delete-etype/delete-etype.component';
import { ViewEtypeComponent } from './pages/employee/employee-type/view-etype/view-etype.component';
import { ConfirmEtypeComponent } from './pages/employee/employee-type/confirm-etype/confirm-etype.component';
import { AssociativeEtypeComponent } from './pages/employee/employee-type/associative-etype/associative-etype.component';

//VAT IMPORTS:
import { AddVatComponent } from './pages/sale/vat/add-vat/add-vat.component';
import { DeleteVatComponent } from './pages/sale/vat/delete-vat/delete-vat.component';
import { ViewVatComponent } from './pages/sale/vat/view-vat/view-vat.component';
import { ConfirmVatComponent } from './pages/sale/vat/confirm-vat/confirm-vat.component';
import { UpdateVatComponent } from './pages/sale/vat/update-vat/update-vat.component';

//SIDEMENU IMPORTS:
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  declarations: [AppComponent,
  //Venue
  AddVenueComponent, UpdateVenueComponent, ViewVenueInfoComponent, DeleteVenueComponent, ConfirmVenueComponent,AssociativeVenueComponent,
  //UserRole
  AddRoleComponent, UpdateRoleComponent, DeleteRoleComponent, ViewRoleComponent, ConfirmRoleComponent,
  //Title
  AddTitleComponent, UpdateTitleComponent, DeleteTitleComponent, ViewTitlesComponent, ConfirmTitleComponent, AssociativeTitleComponent,
  //QualificationType
  AddQtypeComponent, UpdateQtypeComponent, DeleteQtypeComponent, ViewQtypeComponent, ConfirmQtypeComponent, AssociativeQtypeComponent,
  //VAT
  AddVatComponent, DeleteVatComponent, ViewVatComponent, ConfirmVatComponent, UpdateVatComponent,
  //EmployeeType
<<<<<<< HEAD
  AddEtypeComponent, ConfirmEtypeComponent, UpdateEtypeComponent, ViewEtypeComponent, DeleteEtypeComponent,AssociativeEtypeComponent,
  ConfirmRoleComponent, AddEtypeComponent, ConfirmEtypeComponent, UpdateEtypeComponent, ViewEtypeComponent, DeleteEtypeComponent,
  ConfirmCategoryComponent, AddCategoryComponent, ConfirmCategoryComponent, UpdateCategoryComponent, ViewCategoryComponent, DeleteCategoryComponent,
  ConfirmSitemComponent, AddSitemComponent, ConfirmSitemComponent, UpdateSitemComponent, ViewSitemComponent, DeleteSitemComponent,
=======
  AddEtypeComponent, ConfirmEtypeComponent, UpdateEtypeComponent, ViewEtypeComponent, DeleteEtypeComponent,
  //SalesCategory
  AddCategoryComponent, UpdateCategoryComponent, ViewCategoryComponent, DeleteCategoryComponent, ConfirmCategoryComponent,
  //SalesItem
  AddSitemComponent, ConfirmSitemComponent, UpdateSitemComponent, ViewSitemComponent, DeleteSitemComponent,
  //SideMenu
>>>>>>> developer
  SidemenuComponent
],

  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
