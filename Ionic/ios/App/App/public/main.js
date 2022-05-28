(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 57994)).then(m => m.HomePageModule)
    },
    {
        path: 'employees',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_employee_employee_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/employee/employee.module */ 53354)).then(m => m.EmployeePageModule)
    },
    {
        path: 'trainers',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_trainers_trainers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/trainers/trainers.module */ 6968)).then(m => m.TrainersPageModule)
    },
    {
        path: 'venues',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_venue_venue_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/venue/venue.module */ 81126)).then(m => m.VenuePageModule)
    },
    {
        path: 'members',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_members_members_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/members/members.module */ 68309)).then(m => m.MembersPageModule)
    },
    {
        path: 'clients',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_clients_clients_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/clients/clients.module */ 78663)).then(m => m.ClientsPageModule)
    },
    {
        path: 'payments',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payments_payments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payments/payments.module */ 15795)).then(m => m.PaymentsPageModule)
    },
    {
        path: 'sales',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sale_sale_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sale/sale.module */ 72128)).then(m => m.SalePageModule)
    },
    {
        path: 'inventory',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_inventory_inventory_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/inventory/inventory.module */ 45512)).then(m => m.InventoryPageModule)
    },
    {
        path: 'suppliers',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_suppliers_suppliers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/suppliers/suppliers.module */ 63330)).then(m => m.SuppliersPageModule)
    },
    {
        path: 'stock',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_stock_stock_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/stock/stock.module */ 86706)).then(m => m.StockPageModule)
    },
    {
        path: 'reports',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reports_reports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reports/reports.module */ 82234)).then(m => m.ReportsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'user',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_user_user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/user/user.module */ 99321)).then(m => m.UserPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/venue/venue.service */ 29401);





let AppComponent = class AppComponent {
    constructor(venueService) { }
};
AppComponent.ctorParameters = () => [
    { type: _services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__.VenueService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _pages_venue_add_venue_add_venue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/venue/add-venue/add-venue.component */ 8157);
/* harmony import */ var _pages_venue_update_venue_update_venue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/venue/update-venue/update-venue.component */ 44795);
/* harmony import */ var _pages_venue_view_venue_info_view_venue_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/venue/view-venue-info/view-venue-info.component */ 58407);
/* harmony import */ var _pages_venue_delete_venue_delete_venue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/venue/delete-venue/delete-venue.component */ 97717);
/* harmony import */ var _pages_venue_confirm_venue_confirm_venue_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/venue/confirm-venue/confirm-venue.component */ 71013);
/* harmony import */ var _pages_venue_associative_venue_associative_venue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/venue/associative-venue/associative-venue.component */ 55783);
/* harmony import */ var _pages_sale_vat_add_vat_add_vat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/sale/vat/add-vat/add-vat.component */ 7874);
/* harmony import */ var _pages_sale_vat_update_vat_update_vat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/sale/vat/update-vat/update-vat.component */ 79561);
/* harmony import */ var _pages_sale_vat_delete_vat_delete_vat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/sale/vat/delete-vat/delete-vat.component */ 87888);
/* harmony import */ var _pages_sale_vat_view_vat_view_vat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/sale/vat/view-vat/view-vat.component */ 88613);
/* harmony import */ var _pages_user_user_roles_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/user/user-roles/add-role/add-role.component */ 66476);
/* harmony import */ var _pages_user_user_roles_update_role_update_role_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/user/user-roles/update-role/update-role.component */ 62205);
/* harmony import */ var _pages_user_user_roles_delete_role_delete_role_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/user/user-roles/delete-role/delete-role.component */ 32268);
/* harmony import */ var _pages_user_user_roles_view_role_view_role_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/user/user-roles/view-role/view-role.component */ 65506);
/* harmony import */ var _pages_user_titles_add_title_add_title_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/user/titles/add-title/add-title.component */ 94678);
/* harmony import */ var _pages_user_titles_update_title_update_title_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/user/titles/update-title/update-title.component */ 92742);
/* harmony import */ var _pages_user_titles_delete_title_delete_title_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/user/titles/delete-title/delete-title.component */ 42291);
/* harmony import */ var _pages_user_titles_view_titles_view_titles_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/user/titles/view-titles/view-titles.component */ 92856);
/* harmony import */ var _pages_user_titles_confirm_title_confirm_title_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/user/titles/confirm-title/confirm-title.component */ 65291);
/* harmony import */ var _pages_employee_qualification_type_add_qtype_add_qtype_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/employee/qualification-type/add-qtype/add-qtype.component */ 93313);
/* harmony import */ var _pages_employee_qualification_type_update_qtype_update_qtype_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/employee/qualification-type/update-qtype/update-qtype.component */ 56928);
/* harmony import */ var _pages_employee_qualification_type_delete_qtype_delete_qtype_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/employee/qualification-type/delete-qtype/delete-qtype.component */ 55005);
/* harmony import */ var _pages_employee_qualification_type_view_qtype_view_qtype_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/employee/qualification-type/view-qtype/view-qtype.component */ 4493);
/* harmony import */ var _pages_employee_qualification_type_confirm_qtype_confirm_qtype_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/employee/qualification-type/confirm-qtype/confirm-qtype.component */ 11869);

































let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _pages_venue_add_venue_add_venue_component__WEBPACK_IMPORTED_MODULE_2__.AddVenueComponent, _pages_venue_update_venue_update_venue_component__WEBPACK_IMPORTED_MODULE_3__.UpdateVenueComponent, _pages_venue_view_venue_info_view_venue_info_component__WEBPACK_IMPORTED_MODULE_4__.ViewVenueInfoComponent, _pages_venue_delete_venue_delete_venue_component__WEBPACK_IMPORTED_MODULE_5__.DeleteVenueComponent, _pages_venue_confirm_venue_confirm_venue_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmVenueComponent, _pages_venue_associative_venue_associative_venue_component__WEBPACK_IMPORTED_MODULE_7__.AssociativeVenueComponent,
            _pages_sale_vat_add_vat_add_vat_component__WEBPACK_IMPORTED_MODULE_8__.AddVatComponent, _pages_sale_vat_update_vat_update_vat_component__WEBPACK_IMPORTED_MODULE_9__.UpdateVatComponent, _pages_sale_vat_delete_vat_delete_vat_component__WEBPACK_IMPORTED_MODULE_10__.DeleteVatComponent, _pages_sale_vat_view_vat_view_vat_component__WEBPACK_IMPORTED_MODULE_11__.ViewVatComponent,
            _pages_user_user_roles_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_12__.AddRoleComponent, _pages_user_user_roles_update_role_update_role_component__WEBPACK_IMPORTED_MODULE_13__.UpdateRoleComponent, _pages_user_user_roles_delete_role_delete_role_component__WEBPACK_IMPORTED_MODULE_14__.DeleteRoleComponent, _pages_user_user_roles_view_role_view_role_component__WEBPACK_IMPORTED_MODULE_15__.ViewRoleComponent,
            _pages_user_titles_add_title_add_title_component__WEBPACK_IMPORTED_MODULE_16__.AddTitleComponent, _pages_user_titles_update_title_update_title_component__WEBPACK_IMPORTED_MODULE_17__.UpdateTitleComponent, _pages_user_titles_delete_title_delete_title_component__WEBPACK_IMPORTED_MODULE_18__.DeleteTitleComponent, _pages_user_titles_view_titles_view_titles_component__WEBPACK_IMPORTED_MODULE_19__.ViewTitlesComponent, _pages_user_titles_confirm_title_confirm_title_component__WEBPACK_IMPORTED_MODULE_20__.ConfirmTitleComponent,
            _pages_employee_qualification_type_add_qtype_add_qtype_component__WEBPACK_IMPORTED_MODULE_21__.AddQtypeComponent, _pages_employee_qualification_type_update_qtype_update_qtype_component__WEBPACK_IMPORTED_MODULE_22__.UpdateQtypeComponent, _pages_employee_qualification_type_delete_qtype_delete_qtype_component__WEBPACK_IMPORTED_MODULE_23__.DeleteQtypeComponent, _pages_employee_qualification_type_view_qtype_view_qtype_component__WEBPACK_IMPORTED_MODULE_24__.ViewQtypeComponent, _pages_employee_qualification_type_confirm_qtype_confirm_qtype_component__WEBPACK_IMPORTED_MODULE_25__.ConfirmQtypeComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_32__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 27641:
/*!**********************************************!*\
  !*** ./src/app/models/qualification-type.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationType": () => (/* binding */ QualificationType)
/* harmony export */ });
class QualificationType {
}


/***/ }),

/***/ 97937:
/*!*********************************!*\
  !*** ./src/app/models/title.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Title": () => (/* binding */ Title)
/* harmony export */ });
class Title {
}


/***/ }),

/***/ 21882:
/*!************************************!*\
  !*** ./src/app/models/userRole.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRole": () => (/* binding */ UserRole)
/* harmony export */ });
class UserRole {
}


/***/ }),

/***/ 98257:
/*!*********************************!*\
  !*** ./src/app/models/venue.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Venue": () => (/* binding */ Venue)
/* harmony export */ });
class Venue {
}


/***/ }),

/***/ 93313:
/*!************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/add-qtype/add-qtype.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddQtypeComponent": () => (/* binding */ AddQtypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_qtype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-qtype.component.html?ngResource */ 40470);
/* harmony import */ var _add_qtype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-qtype.component.scss?ngResource */ 23899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_qualification_qualification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/qualification/qualification.service */ 45159);





/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */



let AddQtypeComponent = class AddQtypeComponent {
    constructor(modalCtrl, toastCtrl, formBuilder, qualificationService, router, currentRoute, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.qualificationService = qualificationService;
        this.router = router;
        this.currentRoute = currentRoute;
        this.alertCtrl = alertCtrl;
        //Creating the form to add the new venue details, that will be displayed in the HTML component
        this.cQTypeForm = this.formBuilder.group({
            qualificationTypeName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    //Used for validation within the form, if there are errors in the control, this method will return the errors.
    get errorControl() {
        return this.cQTypeForm.controls;
    }
    ionViewWillEnter() {
        console.log("AddQualificationType-ViewWillEnter");
        console.log(this.qualificationType);
        if (this.qualificationType != null) {
            this.cQTypeForm.controls.qualificationTypeName.setValue(this.qualificationType.name);
        }
    }
    submitForm() {
        if (!this.cQTypeForm.valid) {
            console.log('Please provide all required fields');
            return false;
        }
        else {
            const temp = {
                name: this.cQTypeForm.value['qualificationTypeName'],
                qualifications: []
            };
            this.qualificationService.confirmQualificationTypeModal(1, temp);
            this.dismissModal();
            // this.sucAdd();
            // console.log("CurrentRoute:ADD");
            // console.log(this.currentRoute.url);
        }
    }
    sucAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The Qualification Type has been successfully added!',
                duration: 2000
            });
            toast.present();
        });
    }
    //Once the modal has been dismissed.
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    ;
    duplicateAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Qualification Type Already Exists',
                message: 'The Qualificaion Type Information entered already exists on the system',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    failureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not create qualification type',
                message: 'There was an error updating the qualification type. Please try again',
                buttons: ['OK']
            });
            alert.present();
        });
    }
};
AddQtypeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_qualification_qualification_service__WEBPACK_IMPORTED_MODULE_2__.QualificationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
AddQtypeComponent.propDecorators = {
    qualificationType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
AddQtypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-qtype',
        template: _add_qtype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_qtype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddQtypeComponent);



/***/ }),

/***/ 71269:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/associative-qtype/associative-qtype.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociativeQtypeComponent": () => (/* binding */ AssociativeQtypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _associative_qtype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associative-qtype.component.html?ngResource */ 4353);
/* harmony import */ var _associative_qtype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./associative-qtype.component.scss?ngResource */ 71115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AssociativeQtypeComponent = class AssociativeQtypeComponent {
    constructor() { }
    ngOnInit() { }
};
AssociativeQtypeComponent.ctorParameters = () => [];
AssociativeQtypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-associative-qtype',
        template: _associative_qtype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_associative_qtype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AssociativeQtypeComponent);



/***/ }),

/***/ 11869:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/confirm-qtype/confirm-qtype.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmQtypeComponent": () => (/* binding */ ConfirmQtypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _confirm_qtype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-qtype.component.html?ngResource */ 94720);
/* harmony import */ var _confirm_qtype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-qtype.component.scss?ngResource */ 70573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_qualification_qualification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/qualification/qualification.service */ 45159);







let ConfirmQtypeComponent = class ConfirmQtypeComponent {
    constructor(modalCtrl, qualificationService, router, activated) {
        this.modalCtrl = modalCtrl;
        this.qualificationService = qualificationService;
        this.router = router;
        this.activated = activated;
    }
    //1 = confirm ADD
    //2 = confirm UPDATE
    confirmChanges(qualificationType) {
        console.log(this.choice);
        if (this.choice === 1) {
            //search duplicates
            if (this.qualificationService.matchingQualificationType(qualificationType.name) != null) {
                console.log('Existing QualificationType: ' + qualificationType.name);
                //display duplicate alert
                //failure alert
                return;
            }
            else {
                console.log('Add Qualification Type from confirm:');
                //CallRepoToCreate
                this.qualificationService.createQualificationType(qualificationType);
            }
        }
        else if (this.choice === 2) {
            console.log('Update Qualification Type from confirm:');
            //CallRepoToUpdate
            this.qualificationService.updateQualificationType(qualificationType.qualificationTypeID, qualificationType);
        }
        //dismiss modal
        this.dismissModal();
    }
    returnFrom() {
        //1 = return to ADD
        //2 = return to UPDATE
        if (this.choice === 1) {
            console.log(this.qualificationType);
            this.dismissModal();
            this.qualificationService.addQualificationTypeInfoModal(this.qualificationType);
        }
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss();
        });
    }
    ;
};
ConfirmQtypeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_qualification_qualification_service__WEBPACK_IMPORTED_MODULE_2__.QualificationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
ConfirmQtypeComponent.propDecorators = {
    choice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    qualificationType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ConfirmQtypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-confirm-qtype',
        template: _confirm_qtype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_confirm_qtype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmQtypeComponent);



/***/ }),

/***/ 55005:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/delete-qtype/delete-qtype.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteQtypeComponent": () => (/* binding */ DeleteQtypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_qtype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-qtype.component.html?ngResource */ 97157);
/* harmony import */ var _delete_qtype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-qtype.component.scss?ngResource */ 38916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_qualification_qualification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/qualification/qualification.service */ 45159);








let DeleteQtypeComponent = class DeleteQtypeComponent {
    constructor(modalCtrl, toastCtrl, formBuilder, qualificationService, router, route, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.qualificationService = qualificationService;
        this.router = router;
        this.route = route;
        this.alertCtrl = alertCtrl;
    }
    ionViewWillEnter() {
        console.log("DeleteQualificationType - ViewWillEnter");
        console.log(this.qualificationType);
    }
    //Send through the id of the selected venue to be deleted in the venue service.
    delete(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.qualificationService.deleteQualificationType(id);
            yield this.dismissModal();
            this.sucDelete();
        });
    }
    sucDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The Qualification Type has been successfully deleted!',
                duration: 2000
            });
            toast.present();
        });
    }
    failureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not delete Qualification Type',
                message: 'There was an error deleting the qualification type, please try again.',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    //Close the modal and navigate back to the venue page.
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss();
            console.log(this.route);
            yield this.router.navigate(['../qualification-type'], { relativeTo: this.route });
        });
    }
};
DeleteQtypeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_qualification_qualification_service__WEBPACK_IMPORTED_MODULE_2__.QualificationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
DeleteQtypeComponent.propDecorators = {
    qualificationType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
DeleteQtypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-delete-qtype',
        template: _delete_qtype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_qtype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteQtypeComponent);



/***/ }),

/***/ 56928:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/update-qtype/update-qtype.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateQtypeComponent": () => (/* binding */ UpdateQtypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_qtype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-qtype.component.html?ngResource */ 44698);
/* harmony import */ var _update_qtype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-qtype.component.scss?ngResource */ 42809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_qualification_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/qualification-type */ 27641);
/* harmony import */ var src_app_services_qualification_qualification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/qualification/qualification.service */ 45159);








let UpdateQtypeComponent = class UpdateQtypeComponent {
    constructor(modalCtrl, toastCtrl, fb, qualificationService, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.qualificationService = qualificationService;
        this.alertCtrl = alertCtrl;
        this.uQTypeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            qualificationTypeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
        });
    }
    //Used for validation within the form, if there are errors in the control, this method will return the errors.
    get errorControl() {
        return this.uQTypeForm.controls;
    }
    ionViewWillEnter() {
        console.log('UpdateQualificationType-ViewWillEnter');
        console.log(this.qualificationType);
        this.uQTypeForm.controls.qualificationTypeName.setValue(this.qualificationType.name);
        //Populate the update qualification type form with the values received from the selected qualification type object in the main page.
    }
    submitForm() {
        if (!this.uQTypeForm.valid) { //If the form has any validation errors, the form will not be submitted.
            console.log('Please provide all required fields');
            this.InvalidAlert();
            return false;
        }
        else {
            console.log('InsideUpdateSubmit:');
            var temp = new src_app_models_qualification_type__WEBPACK_IMPORTED_MODULE_2__.QualificationType();
            const choice = 2;
            temp = {
                qualificationTypeID: this.qualificationType.qualificationTypeID,
                name: this.uQTypeForm.value['qualificationTypeName'],
                qualifications: []
            };
            console.log(temp);
            this.qualificationService.confirmQualificationTypeModal(choice, temp);
            this.dismissModal();
        }
    }
    sucUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The Qualification Type has been successfully updated!',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    dismissModal() {
        this.modalCtrl.dismiss(this.qualificationType);
    }
    InvalidAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Invalid Input',
                message: 'Please provide all required fields and ensure that the information is in the correct format',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    DuplicateAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Qualification Type Already Exists',
                message: 'The Qualification Type Information entered already exists on the system',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    FailureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not update qualification type',
                subHeader: 'There was an error updating the qualification type. Please try again',
                //Enter SQL Code Error here
                message: 'SQL Code Error',
                buttons: ['OK']
            });
            alert.present();
        });
    }
};
UpdateQtypeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_qualification_qualification_service__WEBPACK_IMPORTED_MODULE_3__.QualificationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
UpdateQtypeComponent.propDecorators = {
    qualificationType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
UpdateQtypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-update-qtype',
        template: _update_qtype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_qtype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateQtypeComponent);



/***/ }),

/***/ 4493:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/view-qtype/view-qtype.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewQtypeComponent": () => (/* binding */ ViewQtypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_qtype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-qtype.component.html?ngResource */ 66291);
/* harmony import */ var _view_qtype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-qtype.component.scss?ngResource */ 60975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);






let ViewQtypeComponent = class ViewQtypeComponent {
    constructor(modalCtrl, fb) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
    }
    ionViewWillEnter() {
        console.log("viewSpecificQualificationType-ViewWillEnter");
        console.log(this.qualificationType);
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
ViewQtypeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
ViewQtypeComponent.propDecorators = {
    qualificationType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ViewQtypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-view-qtype',
        template: _view_qtype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_qtype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewQtypeComponent);



/***/ }),

/***/ 7874:
/*!*************************************************************!*\
  !*** ./src/app/pages/sale/vat/add-vat/add-vat.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVatComponent": () => (/* binding */ AddVatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_vat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-vat.component.html?ngResource */ 31787);
/* harmony import */ var _add_vat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-vat.component.scss?ngResource */ 57330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);






let AddVatComponent = class AddVatComponent {
    constructor(modalCtrl, formBuilder) {
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.cVATForm = this.formBuilder.group({
            percentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    get errorControl() {
        return this.cVATForm.controls;
    }
    ngOnInit() {
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.cVATForm.valid) {
                console.log('Please provide all required fields');
            }
            else {
                console.log(this.cVATForm.value);
                //this.vatService.confirmVATModal(this.cVATForm.value.percentage);
            }
        });
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
AddVatComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
AddVatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-vat',
        template: _add_vat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_vat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddVatComponent);



/***/ }),

/***/ 87888:
/*!*******************************************************************!*\
  !*** ./src/app/pages/sale/vat/delete-vat/delete-vat.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteVatComponent": () => (/* binding */ DeleteVatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_vat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-vat.component.html?ngResource */ 20519);
/* harmony import */ var _delete_vat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-vat.component.scss?ngResource */ 437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let DeleteVatComponent = class DeleteVatComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
DeleteVatComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
DeleteVatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-delete-vat',
        template: _delete_vat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_vat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteVatComponent);



/***/ }),

/***/ 79561:
/*!*******************************************************************!*\
  !*** ./src/app/pages/sale/vat/update-vat/update-vat.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateVatComponent": () => (/* binding */ UpdateVatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_vat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-vat.component.html?ngResource */ 51834);
/* harmony import */ var _update_vat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-vat.component.scss?ngResource */ 80928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let UpdateVatComponent = class UpdateVatComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
UpdateVatComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
UpdateVatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-update-vat',
        template: _update_vat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_vat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateVatComponent);



/***/ }),

/***/ 88613:
/*!***************************************************************!*\
  !*** ./src/app/pages/sale/vat/view-vat/view-vat.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewVatComponent": () => (/* binding */ ViewVatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_vat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-vat.component.html?ngResource */ 8362);
/* harmony import */ var _view_vat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-vat.component.scss?ngResource */ 93395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let ViewVatComponent = class ViewVatComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
ViewVatComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ViewVatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-view-vat',
        template: _view_vat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_vat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewVatComponent);



/***/ }),

/***/ 94678:
/*!********************************************************************!*\
  !*** ./src/app/pages/user/titles/add-title/add-title.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTitleComponent": () => (/* binding */ AddTitleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-title.component.html?ngResource */ 1024);
/* harmony import */ var _add_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-title.component.scss?ngResource */ 97769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_title_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/title/title.service */ 90978);






/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */


let AddTitleComponent = class AddTitleComponent {
    constructor(modalCtrl, toastCtrl, formBuilder, titleService, router, currentRoute, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.titleService = titleService;
        this.router = router;
        this.currentRoute = currentRoute;
        this.alertCtrl = alertCtrl;
        //Creating the form to add the new venue details, that will be displayed in the HTML component
        this.cTitleForm = this.formBuilder.group({
            titleDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    //Used for validation within the form, if there are errors in the control, this method will return the errors.
    get errorControl() {
        return this.cTitleForm.controls;
    }
    ionViewWillEnter() {
        console.log("AddTitle-ViewWillEnter");
        console.log(this.title);
        if (this.title != null) {
            this.cTitleForm.controls.titleDescription.setValue(this.title.description);
        }
    }
    submitForm() {
        if (!this.cTitleForm.valid) {
            console.log('Please provide all required fields');
            return false;
        }
        else {
            var temp = {
                description: this.cTitleForm.value['titleDescription'],
                users: []
            };
            this.dismissModal();
            this.titleService.confirmTitleModal(1, temp);
            // this.sucAdd();
            // console.log("CurrentRoute:ADD");
            // console.log(this.currentRoute.url);
        }
    }
    sucAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The Title has been successfully added!',
                duration: 2000
            });
            toast.present();
        });
    }
    //Once the modal has been dismissed.
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    ;
    duplicateAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Title Already Exists',
                message: 'The Title Information entered already exists on the system',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    failureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not create title',
                message: 'There was an error creating the title. Please try again',
                buttons: ['OK']
            });
            alert.present();
        });
    }
};
AddTitleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_title_title_service__WEBPACK_IMPORTED_MODULE_2__.TitleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
AddTitleComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
AddTitleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-title',
        template: _add_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddTitleComponent);



/***/ }),

/***/ 36017:
/*!************************************************************************************!*\
  !*** ./src/app/pages/user/titles/associative-title/associative-title.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociativeTitleComponent": () => (/* binding */ AssociativeTitleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _associative_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associative-title.component.html?ngResource */ 67997);
/* harmony import */ var _associative_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./associative-title.component.scss?ngResource */ 53417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AssociativeTitleComponent = class AssociativeTitleComponent {
    constructor() { }
    ngOnInit() { }
};
AssociativeTitleComponent.ctorParameters = () => [];
AssociativeTitleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-associative-title',
        template: _associative_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_associative_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AssociativeTitleComponent);



/***/ }),

/***/ 65291:
/*!****************************************************************************!*\
  !*** ./src/app/pages/user/titles/confirm-title/confirm-title.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmTitleComponent": () => (/* binding */ ConfirmTitleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _confirm_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-title.component.html?ngResource */ 12405);
/* harmony import */ var _confirm_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-title.component.scss?ngResource */ 60729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_title_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/title/title.service */ 90978);







let ConfirmTitleComponent = class ConfirmTitleComponent {
    constructor(modalCtrl, titleService, router, activated) {
        this.modalCtrl = modalCtrl;
        this.titleService = titleService;
        this.router = router;
        this.activated = activated;
    }
    dismissModal() {
        //await this.router.navigate(['../titles'],{relativeTo:this.activated});
        this.modalCtrl.dismiss();
    }
    ;
    //1 = confirm ADD
    //2 = confirm UPDATE
    confirmChanges(title) {
        console.log(this.choice);
        if (this.choice === 1) {
            //search duplicates
            if (this.titleService.matchingTitle(title.description) != null) {
                console.log('Existing Title: ' + title.description);
                //display duplicate alert
                //failure alert
                return;
            }
            else {
                console.log('Add Title from confirm:');
                //CallRepoToCreate
                this.titleService.createTitle(title);
            }
        }
        else if (this.choice === 2) {
            console.log('Update Title from confirm:');
            //CallRepoToUpdate
            this.titleService.updateTitle(title.titleID, title);
        }
        //dismiss modal
        this.dismissModal();
    }
    returnFrom() {
        //1 = return to ADD
        //2 = return to UPDATE
        if (this.choice === 1) {
            console.log(this.title);
            this.dismissModal();
            this.titleService.addTitleInfoModal(this.title);
        }
        else if (this.choice === 2) {
            console.log(this.title);
            this.dismissModal();
            this.titleService.updateTitleInfoModal(this.title);
        }
    }
};
ConfirmTitleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: src_app_services_title_title_service__WEBPACK_IMPORTED_MODULE_2__.TitleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
ConfirmTitleComponent.propDecorators = {
    choice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ConfirmTitleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-confirm-title',
        template: _confirm_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_confirm_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmTitleComponent);



/***/ }),

/***/ 42291:
/*!**************************************************************************!*\
  !*** ./src/app/pages/user/titles/delete-title/delete-title.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteTitleComponent": () => (/* binding */ DeleteTitleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-title.component.html?ngResource */ 72945);
/* harmony import */ var _delete_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-title.component.scss?ngResource */ 36953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_title_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/title/title.service */ 90978);








let DeleteTitleComponent = class DeleteTitleComponent {
    constructor(modalCtrl, toastCtrl, formBuilder, titleService, router, route, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.titleService = titleService;
        this.router = router;
        this.route = route;
        this.alertCtrl = alertCtrl;
    }
    ionViewWillEnter() {
        console.log("DeleteTitle - ViewWillEnter");
        console.log(this.title);
    }
    //Send through the id of the selected title to be deleted in the title service.
    delete(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.titleService.deleteTitle(id);
            yield this.dismissModal();
            this.sucDelete();
        });
    }
    sucDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The Title has been successfully deleted!',
                duration: 2000
            });
            toast.present();
        });
    }
    failureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not delete Title',
                message: 'There was an error deleting the title, please try again.',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    //Close the modal and navigate back to the venue page.
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
DeleteTitleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_title_title_service__WEBPACK_IMPORTED_MODULE_2__.TitleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
DeleteTitleComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
DeleteTitleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-delete-title',
        template: _delete_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteTitleComponent);



/***/ }),

/***/ 92742:
/*!**************************************************************************!*\
  !*** ./src/app/pages/user/titles/update-title/update-title.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateTitleComponent": () => (/* binding */ UpdateTitleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-title.component.html?ngResource */ 68191);
/* harmony import */ var _update_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-title.component.scss?ngResource */ 70103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/title */ 97937);
/* harmony import */ var src_app_services_title_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/title/title.service */ 90978);








let UpdateTitleComponent = class UpdateTitleComponent {
    constructor(modalCtrl, toastCtrl, fb, titleService, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.titleService = titleService;
        this.alertCtrl = alertCtrl;
        this.uTitleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            titleDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
        });
    }
    //Used for validation within the form, if there are errors in the control, this method will return the errors.
    get errorControl() {
        return this.uTitleForm.controls;
    }
    ionViewWillEnter() {
        console.log('UpdateVenue-ViewWillEnter');
        console.log(this.title);
        this.uTitleForm.controls.titleDescription.setValue(this.title.description);
        //Populate the update ttile form with the values received from the selected title object in the main page.
    }
    submitForm() {
        if (!this.uTitleForm.valid) { //If the form has any validation errors, the form will not be submitted.
            console.log('Please provide all required fields');
            this.InvalidAlert();
            return false;
        }
        else {
            console.log('InsideUpdateSubmit:');
            var temp = new src_app_models_title__WEBPACK_IMPORTED_MODULE_2__.Title();
            const choice = 2;
            temp = {
                titleID: this.title.titleID,
                description: this.uTitleForm.value['titleDescription'],
                users: []
            };
            console.log(temp);
            this.titleService.confirmTitleModal(choice, temp);
            this.dismissModal();
        }
    }
    sucUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The Title has been successfully updated!',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    InvalidAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Invalid Input',
                message: 'Please provide all required fields and ensure that the information is in the correct format',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    DuplicateAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Title Already Exists',
                message: 'The Title Information entered already exists on the system',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    FailureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not update title',
                subHeader: 'There was an error updating the title. Please try again',
                //Enter SQL Code Error here
                message: 'SQL Code Error',
                buttons: ['OK']
            });
            alert.present();
        });
    }
};
UpdateTitleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_title_title_service__WEBPACK_IMPORTED_MODULE_3__.TitleService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
UpdateTitleComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
UpdateTitleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-update-title',
        template: _update_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateTitleComponent);



/***/ }),

/***/ 92856:
/*!************************************************************************!*\
  !*** ./src/app/pages/user/titles/view-titles/view-titles.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTitlesComponent": () => (/* binding */ ViewTitlesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_titles_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-titles.component.html?ngResource */ 30341);
/* harmony import */ var _view_titles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-titles.component.scss?ngResource */ 73980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);






let ViewTitlesComponent = class ViewTitlesComponent {
    constructor(modalCtrl, fb) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
    }
    ionViewWillEnter() {
        console.log("viewSpecificTitle-ViewWillEnter");
        console.log(this.title);
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
ViewTitlesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
ViewTitlesComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ViewTitlesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-view-titles',
        template: _view_titles_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_titles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewTitlesComponent);



/***/ }),

/***/ 66476:
/*!**********************************************************************!*\
  !*** ./src/app/pages/user/user-roles/add-role/add-role.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRoleComponent": () => (/* binding */ AddRoleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-role.component.html?ngResource */ 99446);
/* harmony import */ var _add_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-role.component.scss?ngResource */ 65380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);



/* eslint-disable @typescript-eslint/dot-notation */





let AddRoleComponent = class AddRoleComponent {
    constructor(modalCtrl, toastCtrl, formBuilder, userService, router, currentRoute, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.currentRoute = currentRoute;
        this.alertCtrl = alertCtrl;
        //Creating the form to add the new venue details, that will be displayed in the HTML component
        this.cUserRoleForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        this.permissions = [
            {
                des: 'Create employee accounts'
            },
            {
                des: 'Update profile information'
            },
            {
                des: 'View Access to client data '
            },
            {
                des: 'Run as-hoc reporting'
            }
        ];
    }
    //Used for validation within the form, if there are errors in the control, this method will return the errors.
    get errorControl() {
        return this.cUserRoleForm.controls;
    }
    ionViewWillEnter() {
        console.log('Add User Role - View Will Enter');
        if (this.userRole != null) {
            this.cUserRoleForm.controls.name.setValue(this.userRole.name);
            this.cUserRoleForm.controls.description.setValue(this.userRole.description);
            this.cUserRoleForm.controls.permission.setValue(this.userRole.permissions);
        }
    }
    submitForm() {
        if (!this.cUserRoleForm.valid) {
            console.log('Please provide all required fields');
            return false;
        }
        else {
            const temp = {
                name: this.cUserRoleForm.value['name'],
                description: this.cUserRoleForm.value['description'],
                permissions: [],
                users: []
            };
            this.userService.confirmUserRoleModal(1, temp);
            this.dismissModal();
        }
    }
    sucAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The User Role has been successfully added!',
                duration: 2000
            });
            toast.present();
        });
    }
    duplicateAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'User Role Exists',
                message: 'The User Role Information entered already exists on the system',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    failureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not create user role',
                message: 'There was an error updating the user role. Please try again',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
AddRoleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
AddRoleComponent.propDecorators = {
    userRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
AddRoleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-role',
        template: _add_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddRoleComponent);



/***/ }),

/***/ 82008:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/associative-role/associative-role.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociativeRoleComponent": () => (/* binding */ AssociativeRoleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _associative_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associative-role.component.html?ngResource */ 91494);
/* harmony import */ var _associative_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./associative-role.component.scss?ngResource */ 73524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AssociativeRoleComponent = class AssociativeRoleComponent {
    constructor() { }
    ngOnInit() { }
};
AssociativeRoleComponent.ctorParameters = () => [];
AssociativeRoleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-associative-role',
        template: _associative_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_associative_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AssociativeRoleComponent);



/***/ }),

/***/ 6162:
/*!******************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/confirm-role/confirm-role.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmRoleComponent": () => (/* binding */ ConfirmRoleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _confirm_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-role.component.html?ngResource */ 34696);
/* harmony import */ var _confirm_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-role.component.scss?ngResource */ 64495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ConfirmRoleComponent = class ConfirmRoleComponent {
    constructor() { }
    ngOnInit() { }
};
ConfirmRoleComponent.ctorParameters = () => [];
ConfirmRoleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-confirm-role',
        template: _confirm_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_confirm_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmRoleComponent);



/***/ }),

/***/ 32268:
/*!****************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/delete-role/delete-role.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteRoleComponent": () => (/* binding */ DeleteRoleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-role.component.html?ngResource */ 85599);
/* harmony import */ var _delete_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-role.component.scss?ngResource */ 83648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let DeleteRoleComponent = class DeleteRoleComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.permissions = [
            {
                des: 'Create employee accounts'
            },
            {
                des: 'Update profile information'
            },
            {
                des: 'View Access to client data '
            },
            {
                des: 'Run as-hoc reporting'
            }
        ];
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
DeleteRoleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
DeleteRoleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-delete-role',
        template: _delete_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteRoleComponent);



/***/ }),

/***/ 62205:
/*!****************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/update-role/update-role.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateRoleComponent": () => (/* binding */ UpdateRoleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-role.component.html?ngResource */ 12918);
/* harmony import */ var _update_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-role.component.scss?ngResource */ 48667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let UpdateRoleComponent = class UpdateRoleComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.permissions = [
            {
                des: 'Create employee accounts'
            },
            {
                des: 'Update profile information'
            },
            {
                des: 'View Access to client data '
            },
            {
                des: 'Run as-hoc reporting'
            }
        ];
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
UpdateRoleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
UpdateRoleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-update-role',
        template: _update_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateRoleComponent);



/***/ }),

/***/ 65506:
/*!************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/view-role/view-role.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewRoleComponent": () => (/* binding */ ViewRoleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-role.component.html?ngResource */ 64298);
/* harmony import */ var _view_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-role.component.scss?ngResource */ 5676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let ViewRoleComponent = class ViewRoleComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.permissions = [
            {
                des: 'Create employee accounts'
            },
            {
                des: 'Update profile information'
            },
            {
                des: 'View Access to client data '
            },
            {
                des: 'Run as-hoc reporting'
            }
        ];
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
ViewRoleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ViewRoleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-view-role',
        template: _view_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewRoleComponent);



/***/ }),

/***/ 8157:
/*!**************************************************************!*\
  !*** ./src/app/pages/venue/add-venue/add-venue.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVenueComponent": () => (/* binding */ AddVenueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-venue.component.html?ngResource */ 23900);
/* harmony import */ var _add_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-venue.component.scss?ngResource */ 50148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/venue/venue.service */ 29401);



/* eslint-disable no-var */
/* eslint-disable no-trailing-spaces */


/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */



let AddVenueComponent = class AddVenueComponent {
    constructor(modalCtrl, toastCtrl, formBuilder, venueService, router, currentRoute, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.venueService = venueService;
        this.router = router;
        this.currentRoute = currentRoute;
        this.alertCtrl = alertCtrl;
        //Creating the form to add the new venue details, that will be displayed in the HTML component
        this.cVenueForm = this.formBuilder.group({
            venueName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[0-9]{4}')]],
            capacity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]]
        });
    }
    //Used for validation within the form, if there are errors in the control, this method will return the errors.
    get errorControl() {
        return this.cVenueForm.controls;
    }
    ionViewWillEnter() {
        console.log("AddVenue-ViewWillEnter");
        console.log(this.venue);
        if (this.venue != null) {
            this.cVenueForm.controls.venueName.setValue(this.venue.name);
            this.cVenueForm.controls.location.setValue(this.venue.address);
            this.cVenueForm.controls.postalCode.setValue(this.venue.postalCode);
            this.cVenueForm.controls.capacity.setValue(this.venue.capacity);
        }
    }
    submitForm() {
        if (!this.cVenueForm.valid) {
            console.log('Please provide all required fields');
            return false;
        }
        else {
            var temp = {
                name: this.cVenueForm.value['venueName'],
                address: this.cVenueForm.value['location'],
                postalCode: this.cVenueForm.value['postalCode'],
                capacity: this.cVenueForm.value['capacity'],
                schedules: []
            };
            this.venueService.confirmVenueModal(1, temp);
            this.dismissModal();
            // this.sucAdd();
            // console.log("CurrentRoute:ADD");
            // console.log(this.currentRoute.url);
        }
    }
    sucAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The Venue has been successfully added!',
                duration: 2000
            });
            toast.present();
        });
    }
    //Once the modal has been dismissed.
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    ;
    duplicateAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Venue Already Exists',
                message: 'The Venue Information entered already exists on the system',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    failureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not create venue',
                message: 'There was an error updating the venue. Please try again',
                buttons: ['OK']
            });
            alert.present();
        });
    }
};
AddVenueComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__.VenueService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
AddVenueComponent.propDecorators = {
    venue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
AddVenueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-venue',
        template: _add_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddVenueComponent);



/***/ }),

/***/ 55783:
/*!******************************************************************************!*\
  !*** ./src/app/pages/venue/associative-venue/associative-venue.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociativeVenueComponent": () => (/* binding */ AssociativeVenueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _associative_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associative-venue.component.html?ngResource */ 3236);
/* harmony import */ var _associative_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./associative-venue.component.scss?ngResource */ 16069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AssociativeVenueComponent = class AssociativeVenueComponent {
    constructor() { }
    ngOnInit() { }
};
AssociativeVenueComponent.ctorParameters = () => [];
AssociativeVenueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-associative-venue',
        template: _associative_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_associative_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AssociativeVenueComponent);



/***/ }),

/***/ 71013:
/*!**********************************************************************!*\
  !*** ./src/app/pages/venue/confirm-venue/confirm-venue.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmVenueComponent": () => (/* binding */ ConfirmVenueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _confirm_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-venue.component.html?ngResource */ 19523);
/* harmony import */ var _confirm_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-venue.component.scss?ngResource */ 83242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/venue/venue.service */ 29401);







let ConfirmVenueComponent = class ConfirmVenueComponent {
    constructor(modalCtrl, venueService, router, activated) {
        this.modalCtrl = modalCtrl;
        this.venueService = venueService;
        this.router = router;
        this.activated = activated;
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(['../venues'], { relativeTo: this.activated });
            this.modalCtrl.dismiss();
        });
    }
    ;
    //1 = confirm ADD
    //2 = confirm UPDATE
    confirmChanges(venue) {
        console.log(this.choice);
        if (this.choice === 1) {
            //search duplicates
            if (this.venueService.matchingVenue(venue.address) != null || this.venueService.matchingVenue(venue.name) != null) {
                console.log('Existing Venue: ' + venue.address + ' <-Address ++ Name -> ' + venue.name);
                //display duplicate alert
                //failure alert
                return;
            }
            else {
                console.log('Add Venue from confirm:');
                //CallRepoToCreate
                this.venueService.createVenue(venue);
            }
        }
        else if (this.choice === 2) {
            console.log('Update Venue from confirm:');
            //CallRepoToUpdate
            this.venueService.updateVenue(this.choice, venue);
        }
        //dismiss modal
        this.dismissModal();
    }
    returnFrom() {
        //1 = return to ADD
        //2 = return to UPDATE
        if (this.choice === 1) {
            console.log(this.venue);
            this.dismissModal();
            this.venueService.addVenueInfoModal(this.venue);
        }
        else if (this.choice === 2) {
            console.log(this.venue);
            this.dismissModal();
            this.venueService.updateVenueInfoModal(this.venue);
        }
    }
};
ConfirmVenueComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__.VenueService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
ConfirmVenueComponent.propDecorators = {
    choice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    venue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ConfirmVenueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-confirm-venue',
        template: _confirm_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_confirm_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmVenueComponent);



/***/ }),

/***/ 97717:
/*!********************************************************************!*\
  !*** ./src/app/pages/venue/delete-venue/delete-venue.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteVenueComponent": () => (/* binding */ DeleteVenueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-venue.component.html?ngResource */ 41163);
/* harmony import */ var _delete_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-venue.component.scss?ngResource */ 75769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/venue/venue.service */ 29401);



/* eslint-disable @typescript-eslint/quotes */





let DeleteVenueComponent = class DeleteVenueComponent {
    constructor(modalCtrl, toastCtrl, formBuilder, venueService, router, route, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.venueService = venueService;
        this.router = router;
        this.route = route;
        this.alertCtrl = alertCtrl;
    }
    ionViewWillEnter() {
        console.log("DeleteVenue - ViewWillEnter");
        console.log(this.venue);
    }
    //Send through the id of the selected venue to be deleted in the venue service.
    delete(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.venueService.deleteVenue(id);
            yield this.dismissModal();
            this.sucDelete();
        });
    }
    sucDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The Venue has been successfully deleted!',
                duration: 2000
            });
            toast.present();
        });
    }
    failureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not delete Venue',
                message: 'There was an error deleting the venue, please try again.',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    //Close the modal and navigate back to the venue page.
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss();
            console.log(this.route);
            yield this.router.navigate(['../venues'], { relativeTo: this.route });
        });
    }
};
DeleteVenueComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__.VenueService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
DeleteVenueComponent.propDecorators = {
    venue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
DeleteVenueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-delete-venue',
        template: _delete_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteVenueComponent);



/***/ }),

/***/ 44795:
/*!********************************************************************!*\
  !*** ./src/app/pages/venue/update-venue/update-venue.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateVenueComponent": () => (/* binding */ UpdateVenueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-venue.component.html?ngResource */ 16861);
/* harmony import */ var _update_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-venue.component.scss?ngResource */ 76371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_venue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/venue */ 98257);
/* harmony import */ var src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/venue/venue.service */ 29401);



/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */





let UpdateVenueComponent = class UpdateVenueComponent {
    constructor(modalCtrl, toastCtrl, fb, venueService, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.venueService = venueService;
        this.alertCtrl = alertCtrl;
        this.uVenueForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            venueName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[0-9]{4}')]),
            capacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1)])
        });
    }
    //Used for validation within the form, if there are errors in the control, this method will return the errors.
    get errorControl() {
        return this.uVenueForm.controls;
    }
    ionViewWillEnter() {
        console.log('UpdateVenue-ViewWillEnter');
        console.log(this.venue);
        this.uVenueForm.controls.venueName.setValue(this.venue.name);
        this.uVenueForm.controls.location.setValue(this.venue.address);
        this.uVenueForm.controls.postalCode.setValue(this.venue.postalCode);
        this.uVenueForm.controls.capacity.setValue(this.venue.capacity);
        //Populate the update venue form with the values received from the selected venue object in the main page.
    }
    submitForm() {
        if (!this.uVenueForm.valid) { //If the form has any validation errors, the form will not be submitted.
            console.log('Please provide all required fields');
            this.InvalidAlert();
            return false;
        }
        else {
            console.log('InsideUpdateSubmit:');
            let temp = new src_app_models_venue__WEBPACK_IMPORTED_MODULE_2__.Venue();
            const choice = 2;
            temp = {
                venueID: this.venue.venueID,
                name: this.uVenueForm.value['venueName'],
                address: this.uVenueForm.value['location'],
                postalCode: this.uVenueForm.value['postalCode'],
                capacity: this.uVenueForm.value['capacity'],
                schedules: []
            };
            console.log(temp);
            this.venueService.confirmVenueModal(choice, temp);
            this.dismissModal();
        }
    }
    sucUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The Venue has been successfully updated!',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    dismissModal() {
        this.modalCtrl.dismiss(this.venue);
    }
    InvalidAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Invalid Input',
                message: 'Please provide all required fields and ensure that the information is in the correct format',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    DuplicateAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Venue Already Exists',
                message: 'The Venue Information entered already exists on the system',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    FailureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not update venue',
                subHeader: 'There was an error updating the venue. Please try again',
                //Enter SQL Code Error here
                message: 'SQL Code Error',
                buttons: ['OK']
            });
            alert.present();
        });
    }
};
UpdateVenueComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_3__.VenueService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
UpdateVenueComponent.propDecorators = {
    venue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
UpdateVenueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-update-venue',
        template: _update_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateVenueComponent);



/***/ }),

/***/ 58407:
/*!**************************************************************************!*\
  !*** ./src/app/pages/venue/view-venue-info/view-venue-info.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewVenueInfoComponent": () => (/* binding */ ViewVenueInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_venue_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-venue-info.component.html?ngResource */ 41401);
/* harmony import */ var _view_venue_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-venue-info.component.scss?ngResource */ 79436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);






let ViewVenueInfoComponent = class ViewVenueInfoComponent {
    constructor(modalCtrl, fb) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
    }
    ionViewWillEnter() {
        console.log("viewSpecificVenue-ViewWillEnter");
        console.log(this.venue);
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
ViewVenueInfoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
ViewVenueInfoComponent.propDecorators = {
    venue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ViewVenueInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-view-venue-info',
        template: _view_venue_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_venue_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewVenueInfoComponent);



/***/ }),

/***/ 45159:
/*!*****************************************************************!*\
  !*** ./src/app/services/qualification/qualification.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationService": () => (/* binding */ QualificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_qualification_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/qualification-type */ 27641);
/* harmony import */ var _repo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repo.service */ 56181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_app_pages_employee_qualification_type_add_qtype_add_qtype_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/employee/qualification-type/add-qtype/add-qtype.component */ 93313);
/* harmony import */ var src_app_pages_employee_qualification_type_delete_qtype_delete_qtype_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/employee/qualification-type/delete-qtype/delete-qtype.component */ 55005);
/* harmony import */ var src_app_pages_employee_qualification_type_update_qtype_update_qtype_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/employee/qualification-type/update-qtype/update-qtype.component */ 56928);
/* harmony import */ var src_app_pages_employee_qualification_type_view_qtype_view_qtype_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/employee/qualification-type/view-qtype/view-qtype.component */ 4493);
/* harmony import */ var src_app_pages_employee_qualification_type_confirm_qtype_confirm_qtype_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/employee/qualification-type/confirm-qtype/confirm-qtype.component */ 11869);
/* harmony import */ var src_app_pages_employee_qualification_type_associative_qtype_associative_qtype_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/employee/qualification-type/associative-qtype/associative-qtype.component */ 71269);












let QualificationService = class QualificationService {
    constructor(repo, modalCtrl, alertCtrl) {
        this.repo = repo;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        //QUALIFICATION-TYPE:
        //Creating a qtypeList for all the qtypes in the service.
        this._qualificationtypeList = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
        //Receive the qtypes from the repo (API).
        this.repo.getQualificationTypes().subscribe(result => {
            console.log('QualificationType List: QualificationType Service -> Get QualificationType');
            console.log(result);
            var tempResult = Object.assign(result);
            this._qualificationtypeList.next(tempResult);
            console.log('QualificationType List: qualification type Service -> Updated qualification types');
            console.log(this._qualificationtypeList);
        });
    }
    //Return the qtype list as an observable.
    get qualificationtypeList() {
        return this._qualificationtypeList.asObservable();
    }
    //Methods
    //Add a qualificationtype to the qualificationtype list within the qualification service.
    createQualificationType(qualificationType) {
        console.log('qualificationService: Repo -> Create QualificationType');
        console.log(JSON.stringify(qualificationType));
        this.repo.createQualificationType(qualificationType).subscribe(res => {
            var tempResult = Object.assign(res);
            console.log("Qualification Service: Create qualificationtype");
            console.log(res);
            this._qualificationtypeList.next(tempResult.data);
        });
    }
    //Receives a qualificationtype to update in the service qualificationtype list.
    updateQualificationType(id, qualificationType) {
        console.log('qualificationService: Repo -> Update qualificationtype');
        console.log(qualificationType);
        const currentQualificationType = this._qualificationtypeList.value;
        const index = currentQualificationType.findIndex(x => x.qualificationTypeID === id);
        this.repo.updateQualificationType(qualificationType.qualificationTypeID, qualificationType).subscribe(result => console.log(result));
    }
    //Receives a venue to delete in the service venue list.
    deleteQualificationType(id) {
        this.repo.deleteQualificationType(id).subscribe(result => console.log(result));
    }
    matchingQualificationType(input) {
        console.log('qualificationService: Repo -> Matching qualificationtype');
        this.repo.getMatchQualificationType(input);
    }
    existingQualificationType(id) {
        console.log('qualificationService: Repo -> Existing qualificationtype');
        this.repo.existsQualificationType(id).subscribe(result => console.log(result));
    }
    //Modals
    addQualificationTypeInfoModal(qualificationType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_employee_qualification_type_add_qtype_add_qtype_component__WEBPACK_IMPORTED_MODULE_2__.AddQtypeComponent,
                componentProps: {
                    qualificationType
                }
            });
            yield modal.present();
        });
    }
    //Display the update venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
    updateQualificationTypeInfoModal(qualificationType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("qualificationService: UpdateQualificationTypeModalCall");
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_employee_qualification_type_update_qtype_update_qtype_component__WEBPACK_IMPORTED_MODULE_4__.UpdateQtypeComponent,
                componentProps: {
                    qualificationType
                }
            });
            yield modal.present();
        });
    }
    //Display the delete venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
    deleteQualificationTypeInfoModal(qualificationType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("qualificationService: DeleteQualificationTypeModalCall");
            let tempQualificationType = new src_app_models_qualification_type__WEBPACK_IMPORTED_MODULE_0__.QualificationType();
            tempQualificationType = Object.assign(qualificationType);
            console.log(tempQualificationType);
            if (tempQualificationType.qualifications != null && tempQualificationType.qualifications.length > 0) {
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_employee_qualification_type_associative_qtype_associative_qtype_component__WEBPACK_IMPORTED_MODULE_7__.AssociativeQtypeComponent,
                    componentProps: {
                        qualificationType: tempQualificationType
                    }
                });
                yield modal.present();
            }
            else {
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_employee_qualification_type_delete_qtype_delete_qtype_component__WEBPACK_IMPORTED_MODULE_3__.DeleteQtypeComponent,
                    componentProps: {
                        qualificationType: tempQualificationType
                    }
                });
                //Update the current qualificationtype list with the qualificationtype list from the delete modal.
                modal.onDidDismiss().then(() => {
                    this.repo.getQualificationTypes().subscribe(result => {
                        var tempResult = Object.assign(result);
                        this._qualificationtypeList.next(tempResult);
                        console.log("Updated qualificationtype list: Qualification Service: delete qualificationtype");
                        console.log(this._qualificationtypeList);
                    });
                });
                yield modal.present();
            }
        });
    }
    //Display the view qualificationtype modal.
    //This method receives the selected qualificationtye object, from the qualificationtype page, in the modal through the componentProps.
    viewQualificationTypeInfoModal(qualificationtype) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("QualificationTypeService: ViewQualificationTypeModalCall");
            let tempQualificationType = new src_app_models_qualification_type__WEBPACK_IMPORTED_MODULE_0__.QualificationType();
            tempQualificationType = Object.assign(qualificationtype);
            console.log(tempQualificationType);
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_employee_qualification_type_view_qtype_view_qtype_component__WEBPACK_IMPORTED_MODULE_5__.ViewQtypeComponent,
                componentProps: {
                    qualificationType: tempQualificationType
                }
            });
            yield modal.present();
        });
    }
    //Display the confirm create/update modal
    //Receives the selected qualificationtype from the qualificationtype page
    confirmQualificationTypeModal(selection, qualificationType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('QualificationService: ConfirmQualificationTypeModalCall');
            console.log(selection);
            if (selection === 1) {
                console.log("Performing ADD");
                let tempQualificationType = new src_app_models_qualification_type__WEBPACK_IMPORTED_MODULE_0__.QualificationType();
                tempQualificationType.qualificationTypeID = 0;
                tempQualificationType = Object.assign(qualificationType);
                console.log(tempQualificationType);
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_employee_qualification_type_confirm_qtype_confirm_qtype_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmQtypeComponent,
                    componentProps: {
                        qualificationType: tempQualificationType,
                        choice: selection
                    }
                });
                //Update the current venue list with the venue list from the confirm modal.
                modal.onDidDismiss().then(() => {
                    this.repo.getQualificationTypes().subscribe(result => {
                        var tempResult = Object.assign(result);
                        this._qualificationtypeList.next(tempResult);
                        console.log("Updated qualificationtype list: Qualification Service: confirm qualificationtype");
                        console.log(this._qualificationtypeList);
                    });
                });
                yield modal.present();
            }
            else if (selection === 2) {
                console.log("Performing UPDATE");
                let tempQualificationType = new src_app_models_qualification_type__WEBPACK_IMPORTED_MODULE_0__.QualificationType();
                tempQualificationType = Object.assign(qualificationType);
                console.log(tempQualificationType);
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_employee_qualification_type_confirm_qtype_confirm_qtype_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmQtypeComponent,
                    componentProps: {
                        qualificationType: tempQualificationType,
                        choice: selection
                    }
                });
                modal.onDidDismiss().then(() => {
                    this.repo.getQualificationTypes().subscribe(result => {
                        var tempResult = Object.assign(result);
                        this._qualificationtypeList.next(tempResult);
                        console.log("Updated qualificationtype list: Qualification Service: Update confirm qualificationtype");
                        console.log(this._qualificationtypeList);
                    });
                });
                yield modal.present();
            }
            else {
                console.log("BadOption: " + selection);
            }
        });
    }
};
QualificationService.ctorParameters = () => [
    { type: _repo_service__WEBPACK_IMPORTED_MODULE_1__.RepoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController }
];
QualificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], QualificationService);



/***/ }),

/***/ 56181:
/*!******************************************!*\
  !*** ./src/app/services/repo.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepoService": () => (/* binding */ RepoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);

/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/naming-convention */


let RepoService = class RepoService {
    constructor(http) {
        this.http = http;
        this.base = 'https://localhost:44383/api/';
        this.VenueController = 'Venue/';
        this.UserRoleController = 'UserRole/';
        this.EmployeeTypeController = 'EmployeeType/';
        this.TitleController = 'Title/';
        this.QualificationTypeController = 'QualificationType/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                Accept: 'application/json',
                ContentType: 'application/json'
            }),
        };
        //CRUDS in this repo file need to be used by subscribing to them in the relevant service.
        //E.g to use getVenues(); it must be subscribed to in the venue service
    }
    //UserRole:
    //------
    //Create
    createUserRole(user_role) {
        return this.http.post(`${this.base + this.UserRoleController}add`, user_role, this.httpOptions);
    }
    //Read
    getUserRoles() {
        return this.http.get(`${this.base + this.UserRoleController}getAll`, this.httpOptions);
    }
    //Update
    updateUserRole(userId, user_role) {
        return this.http.put(`${this.base + this.UserRoleController}update?id=${userId}`, user_role, this.httpOptions);
    }
    //Delete
    deleteUserRole(userId) {
        return this.http.delete(`${this.base + this.UserRoleController}delete?id=${userId}`, this.httpOptions);
    }
    //Exists
    userRoleExists(userId) {
        return this.http.delete(`${this.base + this.UserRoleController}exists?id=${userId}`, this.httpOptions);
    }
    //GetMatch
    getMatchUserRole(input) {
        return this.http.get(`${this.base + this.UserRoleController}getMatch?input=${input}`, this.httpOptions);
    }
    //Exists
    existsUserRole(id) {
        return this.http.get(`${this.base + this.UserRoleController}exists?id=${id}`, this.httpOptions);
    }
    //Venue:
    //------
    //Create
    createVenue(venue) {
        return this.http.post(`${this.base + this.VenueController}add`, venue, this.httpOptions);
    }
    //Update
    updateVenue(venueId, venue) {
        return this.http.put(`${this.base + this.VenueController}update?id=${venueId}`, venue, this.httpOptions);
    }
    //Delete
    deleteVenue(venueId) {
        return this.http.delete(`${this.base + this.VenueController}delete?id=${venueId}`, this.httpOptions);
    }
    //GetAll
    getVenues() {
        return this.http.get(`${this.base + this.VenueController}getAll`, this.httpOptions);
    }
    //GetMatch
    getMatchVenue(input) {
        return this.http.get(`${this.base + this.VenueController}getMatch?input=${input}`, this.httpOptions);
    }
    //Exists
    existsVenue(id) {
        return this.http.get(`${this.base + this.VenueController}exists?id=${id}`, this.httpOptions);
    }
    //EmployeeType:
    //------
    //Create
    createEmployeeType(employeeType) {
        return this.http.post(`${this.base + this.EmployeeTypeController}postemployeetype`, employeeType, this.httpOptions);
    }
    //Read
    getEmployeeTypes() {
        return this.http.get(`${this.base + this.EmployeeTypeController}getemployeetypes`, this.httpOptions);
    }
    //Update
    updateEmployeeType(employeeTypeId, employeeType) {
        return this.http.put(`${this.base + this.EmployeeTypeController}
    putemployeetype?id=${employeeTypeId}`, employeeTypeId, this.httpOptions);
    }
    //Delete
    deleteEmployeeType(employeeTypeId) {
        return this.http.delete(`${this.base + this.EmployeeTypeController}deleteemployeetype?id=${employeeTypeId}`, this.httpOptions);
    }
    getMatchEmployeeType(input) {
        return this.http.get(`${this.base + this.EmployeeTypeController}getMatch?input=${input}`, this.httpOptions);
    }
    //Exists
    existsEmployeeType(id) {
        return this.http.get(`${this.base + this.EmployeeTypeController}exists?id=${id}`, this.httpOptions);
    }
    // Title:
    // ------
    // Create
    createTitle(title) {
        return this.http.post(`${this.base + this.TitleController}add`, title, this.httpOptions);
    }
    //Update
    updateTitle(titleId, title) {
        return this.http.put(`${this.base + this.TitleController}update?id=${titleId}`, title, this.httpOptions);
    }
    //Delete
    deleteTitle(titleId) {
        return this.http.delete(`${this.base + this.TitleController}delete?id=${titleId}`, this.httpOptions);
    }
    //GetAll
    getTitles() {
        return this.http.get(`${this.base + this.TitleController}getAll`, this.httpOptions);
    }
    //GetMatch
    getMatchTitle(input) {
        return this.http.get(`${this.base + this.TitleController}getMatch?input=${input}`, this.httpOptions);
    }
    //Exists
    existsTitle(id) {
        return this.http.get(`${this.base + this.TitleController}exists?id=${id}`, this.httpOptions);
    }
    //QualificationType:
    //------
    // Create
    createQualificationType(qualificationType) {
        return this.http.post(`${this.base + this.QualificationTypeController}add`, qualificationType, this.httpOptions);
    }
    //Update
    updateQualificationType(qualificationTypeId, qualificationType) {
        return this.http.put(`${this.base + this.QualificationTypeController}update?id=${qualificationTypeId}`, qualificationType, this.httpOptions);
    }
    //Delete
    deleteQualificationType(qualificationTypeId) {
        return this.http.delete(`${this.base + this.QualificationTypeController}delete?id=${qualificationTypeId}`, this.httpOptions);
    }
    //GetAll
    getQualificationTypes() {
        return this.http.get(`${this.base + this.QualificationTypeController}getAll`, this.httpOptions);
    }
    //GetMatch
    getMatchQualificationType(input) {
        return this.http.get(`${this.base + this.QualificationTypeController}getMatch?input=${input}`, this.httpOptions);
    }
    //Exists
    existsQualificationType(id) {
        return this.http.get(`${this.base + this.QualificationTypeController}exists?id=${id}`, this.httpOptions);
    }
};
RepoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
RepoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RepoService);



/***/ }),

/***/ 90978:
/*!*************************************************!*\
  !*** ./src/app/services/title/title.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleService": () => (/* binding */ TitleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/title */ 97937);
/* harmony import */ var src_app_pages_user_titles_add_title_add_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/user/titles/add-title/add-title.component */ 94678);
/* harmony import */ var src_app_pages_user_titles_delete_title_delete_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/user/titles/delete-title/delete-title.component */ 42291);
/* harmony import */ var src_app_pages_user_titles_update_title_update_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/user/titles/update-title/update-title.component */ 92742);
/* harmony import */ var src_app_pages_user_titles_view_titles_view_titles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/user/titles/view-titles/view-titles.component */ 92856);
/* harmony import */ var src_app_pages_user_titles_confirm_title_confirm_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/user/titles/confirm-title/confirm-title.component */ 65291);
/* harmony import */ var src_app_pages_user_titles_associative_title_associative_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/user/titles/associative-title/associative-title.component */ 36017);
/* harmony import */ var _repo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../repo.service */ 56181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 84505);

/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/semi */











let TitleService = class TitleService {
    constructor(repo, modalCtrl, alertCtrl) {
        this.repo = repo;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        //Creating a titleList for all the titles in the service.
        this._titleList = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
        //Receive the venues from the repo (API).
        this.repo.getTitles().subscribe(result => {
            console.log('Title List: Title Service -> Get Titles');
            console.log(result);
            var tempResult = Object.assign(result);
            this._titleList.next(tempResult);
            console.log('Title List: Title Service -> Updated Titles');
            console.log(this._titleList);
        });
    }
    //Return the venue list as an observable.
    get titleList() {
        return this._titleList.asObservable();
    }
    //Methods
    //Add a title to the title list within the title service.
    createTitle(title) {
        console.log('titleService: Repo -> Create Title');
        console.log(JSON.stringify(title));
        this.repo.createTitle(title).subscribe(res => {
            var tempResult = Object.assign(res);
            console.log("Title Service: Create title");
            console.log(res);
            this._titleList.next(tempResult.data);
        });
    }
    //Receives a title to update in the service title list.
    updateTitle(id, title) {
        console.log('titleService: Repo -> Update Title');
        console.log(title);
        const currentTitle = this._titleList.value;
        const index = currentTitle.findIndex(x => x.titleID === id);
        this.repo.updateTitle(title.titleID, title).subscribe(result => console.log(result));
    }
    //Receives a title to delete in the service title list.
    deleteTitle(id) {
        this.repo.deleteTitle(id).subscribe(result => console.log(result));
    }
    matchingTitle(input) {
        console.log('titleService: Repo -> Matching Title');
        this.repo.getMatchTitle(input);
    }
    existingTitle(id) {
        console.log('titleService: Repo -> Existing Title');
        this.repo.existsTitle(id).subscribe(result => console.log(result));
    }
    //Modals
    addTitleInfoModal(title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_user_titles_add_title_add_title_component__WEBPACK_IMPORTED_MODULE_1__.AddTitleComponent,
                componentProps: {
                    title
                }
            });
            yield modal.present();
        });
    }
    //Display the update venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
    updateTitleInfoModal(title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("TitleService: UpdateTitleModalCall");
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_user_titles_update_title_update_title_component__WEBPACK_IMPORTED_MODULE_3__.UpdateTitleComponent,
                componentProps: {
                    title
                }
            });
            yield modal.present();
        });
    }
    //Display the delete title modal.
    //This method receives the selected title object, from the title page, in the modal through the componentProps.
    deleteTitleInfoModal(title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("TitleService: DeleteTitleModalCall");
            if (title.users != null && title.users.length > 0) {
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_user_titles_associative_title_associative_title_component__WEBPACK_IMPORTED_MODULE_6__.AssociativeTitleComponent,
                    componentProps: {
                        title
                    }
                });
                yield modal.present();
            }
            else {
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_user_titles_delete_title_delete_title_component__WEBPACK_IMPORTED_MODULE_2__.DeleteTitleComponent,
                    componentProps: {
                        title
                    }
                });
                //Update the current title list with the title list from the delete modal.
                modal.onDidDismiss().then(() => {
                    this.repo.getTitles().subscribe(result => {
                        var tempResult = Object.assign(result);
                        this._titleList.next(tempResult);
                        console.log("Updated title list: Title Service: delete title");
                        console.log(this._titleList);
                    });
                });
                yield modal.present();
            }
        });
    }
    //Display the view title modal.
    //This method receives the selected title object, from the title page, in the modal through the componentProps.
    viewTitleInfoModal(title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("TitleService: ViewTitleModalCall");
            let tempTitle = new src_app_models_title__WEBPACK_IMPORTED_MODULE_0__.Title();
            tempTitle = Object.assign(title);
            console.log(tempTitle);
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_user_titles_view_titles_view_titles_component__WEBPACK_IMPORTED_MODULE_4__.ViewTitlesComponent,
                componentProps: {
                    title: tempTitle
                }
            });
            yield modal.present();
        });
    }
    //Display the confirm create/update modal
    //Receives the selected title from the title page
    confirmTitleModal(choice, title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('TitleService: ConfirmTitleModalCall');
            console.log(choice);
            if (choice === 1) {
                console.log("Performing ADD");
                // let tempTitle = new Title();
                // tempTitle.titleID = 0;
                // tempTitle = Object.assign(title);
                // console.log(tempTitle);
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_user_titles_confirm_title_confirm_title_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmTitleComponent,
                    componentProps: {
                        title,
                        choice
                    }
                });
                //Update the current venue list with the venue list from the confirm modal.
                modal.onDidDismiss().then(() => {
                    this.repo.getTitles().subscribe(result => {
                        var tempResult = Object.assign(result);
                        this._titleList.next(tempResult);
                        console.log("Updated title list: Title Service: confirm title");
                        console.log(this._titleList);
                    });
                });
                yield modal.present();
            }
            else if (choice === 2) {
                console.log("Performing UPDATE");
                let tempTitle = new src_app_models_title__WEBPACK_IMPORTED_MODULE_0__.Title();
                tempTitle = Object.assign(title);
                console.log(tempTitle);
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_user_titles_confirm_title_confirm_title_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmTitleComponent,
                    componentProps: {
                        title,
                        choice
                    }
                });
                modal.onDidDismiss().then(() => {
                    this.repo.getTitles().subscribe(result => {
                        var tempResult = Object.assign(result);
                        this._titleList.next(tempResult);
                        console.log("Updated title list: Title Service: Update confirm title");
                        console.log(this._titleList);
                    });
                });
                yield modal.present();
            }
            else {
                console.log("BadOption: " + choice);
            }
        });
    }
};
TitleService.ctorParameters = () => [
    { type: _repo_service__WEBPACK_IMPORTED_MODULE_7__.RepoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController }
];
TitleService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], TitleService);



/***/ }),

/***/ 9709:
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_app_models_userRole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/userRole */ 21882);
/* harmony import */ var src_app_pages_user_user_roles_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/user/user-roles/add-role/add-role.component */ 66476);
/* harmony import */ var src_app_pages_user_user_roles_associative_role_associative_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/user/user-roles/associative-role/associative-role.component */ 82008);
/* harmony import */ var src_app_pages_user_user_roles_confirm_role_confirm_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/user/user-roles/confirm-role/confirm-role.component */ 6162);
/* harmony import */ var src_app_pages_user_user_roles_delete_role_delete_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/user/user-roles/delete-role/delete-role.component */ 32268);
/* harmony import */ var src_app_pages_user_user_roles_update_role_update_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/user/user-roles/update-role/update-role.component */ 62205);
/* harmony import */ var src_app_pages_user_user_roles_view_role_view_role_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/user/user-roles/view-role/view-role.component */ 65506);
/* harmony import */ var _repo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../repo.service */ 56181);

/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */











let UserService = class UserService {
    constructor(repo, modalCtrl, alertCtrl) {
        this.repo = repo;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        //Creating a user role list for all the venues in the service.
        this._userRoleList = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
        //Receive the user roles from the repo (API).
        this.repo.getUserRoles().subscribe(result => {
            console.log('User Role List: User Service -> Get User Roles');
            console.log(result);
            const tempResult = Object.assign(result);
            this._userRoleList.next(tempResult);
            console.log('User Role List: User Service -> Updated User Roles');
            console.log(this._userRoleList);
        });
    }
    //Return the user role list as an observable.
    get userRoleList() {
        return this._userRoleList.asObservable();
    }
    //Methods
    //Add a user role to the user role list within the user service.
    createUserRole(userRole) {
        console.log('User Service: Repo -> Create User Role');
        console.log(JSON.stringify(userRole));
        this.repo.createVenue(userRole).subscribe(res => {
            const tempResult = Object.assign(res);
            console.log('User Role Service: Create User Role');
            console.log(res);
            this._userRoleList.next(tempResult.data);
        });
    }
    //Receives a venue to update in the service venue list.
    updateUserRole(id, userRole) {
        console.log('venueService: Repo -> Update Venue');
        console.log(userRole);
        const currentVenue = this._userRoleList.value;
        const index = currentVenue.findIndex(x => x.userRoleID === id);
        this.repo.updateVenue(userRole.userRoleID, userRole).subscribe(result => console.log(result));
    }
    //Receives a venue to delete in the service venue list.
    deleteUserRole(id) {
        this.repo.deleteUserRole(id).subscribe(result => console.log(result));
    }
    matchingUserRole(input) {
        console.log('User Service: Repo -> Matching User Role');
        this.repo.getMatchUserRole(input);
    }
    existingUserRole(id) {
        console.log('User Service: Repo -> Existing User Role');
        this.repo.existsUserRole(id).subscribe(result => console.log(result));
    }
    //Modals
    addUserRoleInfoModal(userRole) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_user_user_roles_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_1__.AddRoleComponent,
                componentProps: {
                    userRole
                }
            });
            yield modal.present();
        });
    }
    //Display the update user role modal.
    //This method receives the selected user role object, from the user role page, in the modal through the componentProps.
    updateUserRoleInfoModal(userRole) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('User Service: Update User Role Modal Call');
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_user_user_roles_update_role_update_role_component__WEBPACK_IMPORTED_MODULE_5__.UpdateRoleComponent,
                componentProps: {
                    userRole
                }
            });
            yield modal.present();
        });
    }
    //Display the delete venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
    deleteVenueInfoModal(userRole) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('User Service: Delete User Role Modal Call');
            let tempUserRole = new src_app_models_userRole__WEBPACK_IMPORTED_MODULE_0__.UserRole();
            tempUserRole = Object.assign(userRole);
            console.log(tempUserRole);
            if (tempUserRole.users != null && tempUserRole.users.length > 0 ||
                tempUserRole.permissions != null && tempUserRole.permissions.length > 0) {
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_user_user_roles_associative_role_associative_role_component__WEBPACK_IMPORTED_MODULE_2__.AssociativeRoleComponent,
                    componentProps: {
                        userRole: tempUserRole
                    }
                });
                yield modal.present();
            }
            else {
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_user_user_roles_delete_role_delete_role_component__WEBPACK_IMPORTED_MODULE_4__.DeleteRoleComponent,
                    componentProps: {
                        userRole: tempUserRole
                    }
                });
                //Update the current venue list with the venue list from the delete modal.
                modal.onDidDismiss().then(() => {
                    this.repo.getUserRoles().subscribe(result => {
                        const tempResult = Object.assign(result);
                        this._userRoleList.next(tempResult);
                        console.log('Updated user role list: User Service: delete user role');
                        console.log(this._userRoleList);
                    });
                });
                yield modal.present();
            }
        });
    }
    //Display the view venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
    viewUserRoleInfoModal(userRole) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('User Service: View User Role  Modal Call');
            let tempUserRole = new src_app_models_userRole__WEBPACK_IMPORTED_MODULE_0__.UserRole();
            tempUserRole = Object.assign(userRole);
            console.log(tempUserRole);
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_user_user_roles_view_role_view_role_component__WEBPACK_IMPORTED_MODULE_6__.ViewRoleComponent,
                componentProps: {
                    userRole: tempUserRole
                }
            });
            yield modal.present();
        });
    }
    //Display the confirm create/update modal
    //Receives the selected venue from the venue page
    confirmUserRoleModal(selection, userRole) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('User Service: Confirm User Role Modal Call');
            console.log(selection);
            if (selection === 1) {
                console.log('Performing ADD');
                let tempUserRole = new src_app_models_userRole__WEBPACK_IMPORTED_MODULE_0__.UserRole();
                tempUserRole.userRoleID = 0;
                tempUserRole = Object.assign(tempUserRole);
                console.log(tempUserRole);
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_user_user_roles_confirm_role_confirm_role_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmRoleComponent,
                    componentProps: {
                        userRole: tempUserRole,
                        choice: selection
                    }
                });
                //Update the current venue list with the venue list from the confirm modal.
                modal.onDidDismiss().then(() => {
                    this.repo.getVenues().subscribe(result => {
                        const tempResult = Object.assign(result);
                        this._userRoleList.next(tempResult);
                        console.log('Updated user role list: Employee Service: confirm venue');
                        console.log(this._userRoleList);
                    });
                });
                yield modal.present();
            }
            else if (selection === 2) {
                console.log('Performing UPDATE');
                let tempUserRole = new src_app_models_userRole__WEBPACK_IMPORTED_MODULE_0__.UserRole();
                tempUserRole = Object.assign(userRole);
                console.log(tempUserRole);
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_user_user_roles_confirm_role_confirm_role_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmRoleComponent,
                    componentProps: {
                        userRole: tempUserRole,
                        choice: selection
                    }
                });
                modal.onDidDismiss().then(() => {
                    this.repo.getUserRoles().subscribe(result => {
                        const tempResult = Object.assign(result);
                        this._userRoleList.next(tempResult);
                        console.log('Updated user role list: User Service: Update confirm user role');
                        console.log(this._userRoleList);
                    });
                });
                yield modal.present();
            }
            else {
                console.log('BadOption: ' + selection);
            }
        });
    }
};
UserService.ctorParameters = () => [
    { type: _repo_service__WEBPACK_IMPORTED_MODULE_7__.RepoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 29401:
/*!*************************************************!*\
  !*** ./src/app/services/venue/venue.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenueService": () => (/* binding */ VenueService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_venue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/venue */ 98257);
/* harmony import */ var src_app_pages_venue_add_venue_add_venue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/venue/add-venue/add-venue.component */ 8157);
/* harmony import */ var src_app_pages_venue_delete_venue_delete_venue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/venue/delete-venue/delete-venue.component */ 97717);
/* harmony import */ var src_app_pages_venue_update_venue_update_venue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/venue/update-venue/update-venue.component */ 44795);
/* harmony import */ var src_app_pages_venue_view_venue_info_view_venue_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/venue/view-venue-info/view-venue-info.component */ 58407);
/* harmony import */ var src_app_pages_venue_confirm_venue_confirm_venue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/venue/confirm-venue/confirm-venue.component */ 71013);
/* harmony import */ var src_app_pages_venue_associative_venue_associative_venue_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/venue/associative-venue/associative-venue.component */ 55783);
/* harmony import */ var _repo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../repo.service */ 56181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 84505);

/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/semi */











let VenueService = class VenueService {
    constructor(repo, modalCtrl, alertCtrl) {
        this.repo = repo;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        //Creating a venueList for all the venues in the service.
        this._venueList = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
        //Receive the venues from the repo (API).
        this.repo.getVenues().subscribe(result => {
            console.log('Venue List: Venue Service -> Get Venues');
            console.log(result);
            var tempResult = Object.assign(result);
            this._venueList.next(tempResult);
            console.log('Venue List: Venue Service -> Updated Venues');
            console.log(this._venueList);
        });
    }
    //Return the venue list as an observable.
    get venueList() {
        return this._venueList.asObservable();
    }
    //Methods
    //Add a venue to the venue list within the venue service.
    createVenue(venue) {
        console.log('venueService: Repo -> Create Venue');
        console.log(JSON.stringify(venue));
        this.repo.createVenue(venue).subscribe(res => {
            var tempResult = Object.assign(res);
            console.log("Venue Service: Create venue");
            console.log(res);
            this._venueList.next(tempResult.data);
        });
    }
    //Receives a venue to update in the service venue list.
    updateVenue(id, venue) {
        console.log('venueService: Repo -> Update Venue');
        console.log(venue);
        const currentVenue = this._venueList.value;
        const index = currentVenue.findIndex(x => x.venueID === id);
        this.repo.updateVenue(venue.venueID, venue).subscribe(result => console.log(result));
    }
    //Receives a venue to delete in the service venue list.
    deleteVenue(id) {
        this.repo.deleteVenue(id).subscribe(result => console.log(result));
    }
    matchingVenue(input) {
        console.log('venueService: Repo -> Matching Venue');
        this.repo.getMatchVenue(input);
    }
    existingVenue(id) {
        console.log('venueService: Repo -> Existing Venue');
        this.repo.existsVenue(id).subscribe(result => console.log(result));
    }
    //Modals
    addVenueInfoModal(venue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_venue_add_venue_add_venue_component__WEBPACK_IMPORTED_MODULE_1__.AddVenueComponent,
                componentProps: {
                    venue
                }
            });
            yield modal.present();
        });
    }
    //Display the update venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
    updateVenueInfoModal(venue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("VenueService: UpdateVenueModalCall");
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_venue_update_venue_update_venue_component__WEBPACK_IMPORTED_MODULE_3__.UpdateVenueComponent,
                componentProps: {
                    venue
                }
            });
            yield modal.present();
        });
    }
    //Display the delete venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
    deleteVenueInfoModal(venue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("VenueService: DeleteVenueModalCall");
            let tempVenue = new src_app_models_venue__WEBPACK_IMPORTED_MODULE_0__.Venue();
            tempVenue = Object.assign(venue);
            console.log(tempVenue);
            if (tempVenue.schedules != null && tempVenue.schedules.length > 0) {
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_venue_associative_venue_associative_venue_component__WEBPACK_IMPORTED_MODULE_6__.AssociativeVenueComponent,
                    componentProps: {
                        venue: tempVenue
                    }
                });
                yield modal.present();
            }
            else {
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_venue_delete_venue_delete_venue_component__WEBPACK_IMPORTED_MODULE_2__.DeleteVenueComponent,
                    componentProps: {
                        venue: tempVenue
                    }
                });
                //Update the current venue list with the venue list from the delete modal.
                modal.onDidDismiss().then(() => {
                    this.repo.getVenues().subscribe(result => {
                        var tempResult = Object.assign(result);
                        this._venueList.next(tempResult);
                        console.log("Updated venue list: Venue Service: delete venue");
                        console.log(this._venueList);
                    });
                });
                yield modal.present();
            }
        });
    }
    //Display the view venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
    viewVenueInfoModal(venue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("VenueService: ViewVenueModalCall");
            let tempVenue = new src_app_models_venue__WEBPACK_IMPORTED_MODULE_0__.Venue();
            tempVenue = Object.assign(venue);
            console.log(tempVenue);
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_venue_view_venue_info_view_venue_info_component__WEBPACK_IMPORTED_MODULE_4__.ViewVenueInfoComponent,
                componentProps: {
                    venue: tempVenue
                }
            });
            yield modal.present();
        });
    }
    //Display the confirm create/update modal
    //Receives the selected venue from the venue page
    confirmVenueModal(selection, venue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('VenueService: ConfirmVenueModalCall');
            console.log(selection);
            if (selection === 1) {
                console.log("Performing ADD");
                let tempVenue = new src_app_models_venue__WEBPACK_IMPORTED_MODULE_0__.Venue();
                tempVenue.venueID = 0;
                tempVenue = Object.assign(venue);
                console.log(tempVenue);
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_venue_confirm_venue_confirm_venue_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmVenueComponent,
                    componentProps: {
                        venue: tempVenue,
                        choice: selection
                    }
                });
                //Update the current venue list with the venue list from the confirm modal.
                modal.onDidDismiss().then(() => {
                    this.repo.getVenues().subscribe(result => {
                        var tempResult = Object.assign(result);
                        this._venueList.next(tempResult);
                        console.log("Updated venue list: Venue Service: ADD confirm venue");
                        console.log(this._venueList);
                    });
                });
                yield modal.present();
            }
            else if (selection === 2) {
                console.log("Performing UPDATE");
                let tempVenue = new src_app_models_venue__WEBPACK_IMPORTED_MODULE_0__.Venue();
                tempVenue = Object.assign(venue);
                console.log(tempVenue);
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_venue_confirm_venue_confirm_venue_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmVenueComponent,
                    componentProps: {
                        venue: tempVenue,
                        choice: selection
                    }
                });
                modal.onDidDismiss().then(() => {
                    this.repo.getVenues().subscribe(result => {
                        var tempResult = Object.assign(result);
                        this._venueList.next(tempResult);
                        console.log("Updated venue list: Venue Service: Update confirm venue");
                        console.log(this._venueList);
                    });
                });
                yield modal.present();
            }
            else {
                console.log("BadOption: " + selection);
            }
        });
    }
};
VenueService.ctorParameters = () => [
    { type: _repo_service__WEBPACK_IMPORTED_MODULE_7__.RepoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController }
];
VenueService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], VenueService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 23899:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/add-qtype/add-qtype.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nspan {\n  color: tertiary;\n  font-size: large;\n  margin-left: 12%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1xdHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJhZGQtcXR5cGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjs7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yIDogdGVydGlhcnk7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyJTsgIFxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 71115:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/associative-qtype/associative-qtype.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NvY2lhdGl2ZS1xdHlwZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 70573:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/confirm-qtype/confirm-qtype.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\np {\n  font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tcXR5cGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJjb25maXJtLXF0eXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemUgOiAxMTAlO1xyXG59Il19 */";

/***/ }),

/***/ 38916:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/delete-qtype/delete-qtype.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\np {\n  font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1xdHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImRlbGV0ZS1xdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplIDogMTEwJTtcclxufSJdfQ== */";

/***/ }),

/***/ 42809:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/update-qtype/update-qtype.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n}\n\nspan {\n  color: danger;\n  font-size: large;\n  padding-bottom: 20px;\n  margin-left: 12%;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1xdHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdFQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InVwZGF0ZS1xdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogQ2FiaW4sSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yIDogZGFuZ2VyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyJTsgXHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn0iXX0= */";

/***/ }),

/***/ 60975:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/view-qtype/view-qtype.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\np {\n  font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcXR5cGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJ2aWV3LXF0eXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemUgOiAxMTAlO1xyXG59Il19 */";

/***/ }),

/***/ 57330:
/*!**************************************************************************!*\
  !*** ./src/app/pages/sale/vat/add-vat/add-vat.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nspan {\n  color: tertiary;\n  font-size: large;\n  margin-left: 12%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC12YXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLXZhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgY29sb3IgOiB0ZXJ0aWFyeTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTIlOyAgXHJcbn0iXX0= */";

/***/ }),

/***/ 437:
/*!********************************************************************************!*\
  !*** ./src/app/pages/sale/vat/delete-vat/delete-vat.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS12YXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnRUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6ImRlbGV0ZS12YXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IENhYmluLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Il19 */";

/***/ }),

/***/ 80928:
/*!********************************************************************************!*\
  !*** ./src/app/pages/sale/vat/update-vat/update-vat.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS12YXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnRUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6InVwZGF0ZS12YXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IENhYmluLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Il19 */";

/***/ }),

/***/ 93395:
/*!****************************************************************************!*\
  !*** ./src/app/pages/sale/vat/view-vat/view-vat.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctdmF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0VBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJ2aWV3LXZhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogQ2FiaW4sSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0iXX0= */";

/***/ }),

/***/ 97769:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/user/titles/add-title/add-title.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nspan {\n  color: tertiary;\n  font-size: large;\n  margin-left: 12%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJhZGQtdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjs7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yIDogdGVydGlhcnk7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyJTsgIFxyXG59Il19 */";

/***/ }),

/***/ 53417:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/user/titles/associative-title/associative-title.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NvY2lhdGl2ZS10aXRsZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 60729:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/user/titles/confirm-title/confirm-title.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\np {\n  font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJjb25maXJtLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemUgOiAxMTAlO1xyXG59Il19 */";

/***/ }),

/***/ 36953:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/user/titles/delete-title/delete-title.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\np {\n  font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS10aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImRlbGV0ZS10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplIDogMTEwJTtcclxufSJdfQ== */";

/***/ }),

/***/ 70103:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/user/titles/update-title/update-title.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS10aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoidXBkYXRlLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBDYWJpbixIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSJdfQ== */";

/***/ }),

/***/ 73980:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/user/titles/view-titles/view-titles.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\np {\n  font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctdGl0bGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoidmlldy10aXRsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjs7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZSA6IDExMCU7XHJcbn0iXX0= */";

/***/ }),

/***/ 65380:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/add-role/add-role.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nspan {\n  color: tertiary;\n  font-size: large;\n  margin-left: 12%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1yb2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6ImFkZC1yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvciA6IHRlcnRpYXJ5O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMiU7ICBcclxufSJdfQ== */";

/***/ }),

/***/ 73524:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/associative-role/associative-role.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NvY2lhdGl2ZS1yb2xlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 64495:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/confirm-role/confirm-role.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLXJvbGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 83648:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/delete-role/delete-role.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1yb2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0VBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJkZWxldGUtcm9sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogQ2FiaW4sSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0iXX0= */";

/***/ }),

/***/ 48667:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/update-role/update-role.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1yb2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0VBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJ1cGRhdGUtcm9sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogQ2FiaW4sSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0iXX0= */";

/***/ }),

/***/ 5676:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/view-role/view-role.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoidmlldy1yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBDYWJpbixIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSJdfQ== */";

/***/ }),

/***/ 50148:
/*!***************************************************************************!*\
  !*** ./src/app/pages/venue/add-venue/add-venue.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nspan {\n  color: tertiary;\n  font-size: large;\n  margin-left: 12%;\n}\n\np {\n  font-size: large;\n}\n\nion-button {\n  margin-left: 2%;\n  margin-right: 10%;\n  width: 55%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC12ZW51ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0MsaUJBQUE7RUFDQSxVQUFBO0FBQ0wiLCJmaWxlIjoiYWRkLXZlbnVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvciA6IHRlcnRpYXJ5O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMiU7ICBcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDoyJTtcclxuICAgICBtYXJnaW4tcmlnaHQ6MTAlOyBcclxuICAgICB3aWR0aDo1NSU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 16069:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/venue/associative-venue/associative-venue.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc29jaWF0aXZlLXZlbnVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJhc3NvY2lhdGl2ZS12ZW51ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn0iXX0= */";

/***/ }),

/***/ 83242:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/venue/confirm-venue/confirm-venue.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\np {\n  font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tdmVudWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJjb25maXJtLXZlbnVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemUgOiAxMTAlO1xyXG59Il19 */";

/***/ }),

/***/ 75769:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/venue/delete-venue/delete-venue.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\np {\n  font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS12ZW51ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImRlbGV0ZS12ZW51ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplIDogMTEwJTtcclxufSJdfQ== */";

/***/ }),

/***/ 76371:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/venue/update-venue/update-venue.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n}\n\nspan {\n  color: danger;\n  font-size: large;\n  padding-bottom: 20px;\n  margin-left: 12%;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS12ZW51ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdFQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InVwZGF0ZS12ZW51ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogQ2FiaW4sSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yIDogZGFuZ2VyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyJTsgXHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn0iXX0= */";

/***/ }),

/***/ 79436:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/venue/view-venue-info/view-venue-info.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n}\n\nion-item {\n  font-size: large;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\np {\n  font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctdmVudWUtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InZpZXctdmVudWUtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplIDogMTEwJTtcclxufSJdfQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  \r\n  <ion-menu menuId=\"mainMenu\" contentId=\"main\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"../assets/avatar.jpg\" alt text=\"BSC\">\r\n        </ion-avatar>\r\n        <ion-label>Stacey Steward</ion-label>\r\n      </ion-item>\r\n\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"/home\">\r\n            <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Home</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"user\">\r\n            <ion-icon name=\"list-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Users</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"employees\">\r\n            <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Employees</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"trainers\">\r\n            <ion-icon name=\"barbell-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Trainers</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"venues\">\r\n            <ion-icon name=\"business-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Venues</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"member\">\r\n            <ion-icon name=\"people-circle-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Members</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"clients\">\r\n            <ion-icon name=\"happy-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Clients</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"payments\">\r\n            <ion-icon name=\"cash-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Payment</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"sales\">\r\n            <ion-icon name=\"cart-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Sale</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"inventory\">\r\n            <ion-icon name=\"file-tray-full-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Inventory</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"suppliers\">\r\n            <ion-icon name=\"clipboard-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Suppliers</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"stock\">\r\n            <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Stock</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"reports\">\r\n            <ion-icon name=\"bar-chart-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Reports</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"login\">\r\n            <ion-icon name=\"arrow-back\" slot=\"start\"></ion-icon>\r\n            <ion-label>Logout</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n\r\n";

/***/ }),

/***/ 40470:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/add-qtype/add-qtype.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>New Qualification Type Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <!--<form #cQTypeForm=\"ngForm\" (ngSubmit)=\"onSubmit(cQTypeForm)\">-->\r\n  <form [formGroup]=\"cQTypeForm\" (ngSubmit)=\"submitForm()\"> \r\n    <br/>\r\n    <div class=\"ion-text-center\">\r\n      <p style=\"font-size:large\">Please fill in the qualification type information below.</p>\r\n    </div>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Name:</ion-label>\r\n      <ion-input formControlName=\"qualificationTypeName\" type=\"text\" required=\"\" id=\"qualificationTypeName\" ></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.venueName.errors?.required && cQTypeForm.get('qualificationTypeName').touched\">\r\n      Qualification Type name is required.<br/>\r\n    </span>\r\n\r\n    <br/><br/>\r\n\r\n    <ion-button type=\"submit\" color=\"success\" [disabled]=\"!cQTypeForm.valid\" class=\"ion-float-right\" style=\"margin-left:2%; margin-right:10%; width:55% ;\">Create Qualification Type</ion-button>\r\n    <ion-button color=\"light\" class=\"ion-float-left\" style=\"margin-left:10%;width: 20%;\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n    \r\n  </form>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4353:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/associative-qtype/associative-qtype.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\r\n  associative-qtype works!\r\n</p>\r\n";

/***/ }),

/***/ 94720:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/confirm-qtype/confirm-qtype.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Confirm Qualification Type Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br/>\r\n  <div class=\"ion-text-center\">\r\n    <p style=\"font-size:large\">Please confirm the following qualification type information?</p>\r\n  </div>\r\n\r\n    <ion-item > \r\n      <ion-label>\r\n        <h2>Name:</h2>\r\n        <p class=\"ion-text-start\">{{qualificationType.name}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n    <br/><BR/>\r\n\r\n    <ion-button color=\"success\" class=\"ion-float-right\" style=\"margin-left:2%; margin-right:10%; width:55%;\" (click)=\"confirmChanges(qualificationType)\">Confirm</ion-button>\r\n    <ion-button color=\"light\" class=\"ion-float-left\" style=\"margin-left:10%;width: 20%;\" (click)=\"returnFrom()\">Return</ion-button>\r\n\r\n</ion-content>\r\n\r\n";

/***/ }),

/***/ 97157:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/delete-qtype/delete-qtype.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Delete Qualification Type Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <br/><br/>\r\n    <ion-label class=\"ion-text-center\">\r\n      <p style=\"font-size:large; color: white;\">Are you sure you want to delete the following qualification type?</p>\r\n    </ion-label>\r\n    <br/>\r\n\r\n    <ion-item > \r\n      <ion-label>\r\n        <h2>Qualification Type Name: </h2>\r\n        <p class=\"ion-text-start\">{{qualificationType.name}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <br>\r\n    <ion-button expand=\"block\" type=\"ion-button\" (click)=\"delete(qualificationType.qualificationTypeID)\" color=\"danger\">Delete Qualification Type</ion-button>\r\n</ion-content>\r\n\r\n";

/***/ }),

/***/ 44698:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/update-qtype/update-qtype.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Qualification Type Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"uQTypeForm\" (ngSubmit)=\"submitForm()\"> \r\n    <br/><br/>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Name:</ion-label>\r\n      <ion-input formControlName=\"qualificationTypeName\"  type=\"text\" required=\"\"></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.qualificationTypeName.errors?.required\">\r\n      Qualification Type name is required.\r\n      <br/>\r\n    </span>\r\n\r\n    <br><br/>\r\n    <ion-button type=\"submit\" color=\"secondary\" [disabled]=\"!uQTypeForm.valid\" class=\"ion-float-right\" style=\"margin-left:2%; margin-right:10%; width:55% ;\">Update Qualification Type</ion-button>\r\n    <ion-button color=\"light\" class=\"ion-float-left\" style=\"margin-left:10%;width: 20%;\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n  </form>\r\n</ion-content>\r\n";

/***/ }),

/***/ 66291:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/view-qtype/view-qtype.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View {{qualificationType.name}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br/>\r\n  <div class=\"ion-text-center\">\r\n    <p style=\"font-size:large; color: white;margin-left: 10%;margin-right: 10%;\">The following information is associated with the <br/> \"{{qualificationType.name}}\" qualification type</p>\r\n  \r\n\r\n    <ion-item > \r\n      <ion-label>\r\n        <h2>Qualification Type Name:</h2>\r\n        <p class=\"ion-text-start\">{{qualificationType.name}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n  <br>\r\n  <ion-button color=\"light\" class=\"ion-float-right\" style=\"margin-right:10%;width:30% \" (click)=\"dismissModal()\">Return</ion-button>\r\n</ion-content>\r\n";

/***/ }),

/***/ 31787:
/*!**************************************************************************!*\
  !*** ./src/app/pages/sale/vat/add-vat/add-vat.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>New VAT Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!--This modal is not complete, please check if it displays like \"AddVenue\"-->\r\n<!--Check the SCSS, TS AND HTML-->\r\n\r\n<ion-content>\r\n<form [formGroup]=\"cVATForm\" (ngSubmit)=\"submitForm()\"> \r\n  <br/>\r\n  <div class=\"ion-text-center\">\r\n    <p style=\"font-size:large\">Please fill in the VAT information below.</p>\r\n  </div>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Percentage :</ion-label>\r\n    <ion-input formControlName=\"percentage\" type=\"text\" required=\"\" id=\"percentage\" ></ion-input>\r\n    <br/>\r\n  </ion-item>\r\n  <span class=\"error ion-padding\" *ngIf=\"errorControl.percentage.errors?.required && cVATForm.get('percentage').touched\">\r\n    VAT Percentage is required.<br/>\r\n  </span>\r\n\r\n  <br/><br/>\r\n\r\n  <ion-button type=\"submit\" color=\"success\" [disabled]=\"!cVATForm.valid\" class=\"ion-float-right\" style=\"margin-left:2%; margin-right:10%; width:55% ;\">Create Venue</ion-button>\r\n  <ion-button color=\"light\" class=\"ion-float-left\" style=\"margin-left:10%;width: 20%;\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n  \r\n</form>\r\n</ion-content>\r\n\r\n";

/***/ }),

/***/ 20519:
/*!********************************************************************************!*\
  !*** ./src/app/pages/sale/vat/delete-vat/delete-vat.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Delete VAT</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\">Return</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!--This modal is not complete, please check if it displays like \"DeleteVenue\"-->\r\n<!--Check the SCSS, TS AND HTML-->\r\n\r\n<ion-content>\r\n  <!--<form #dVATForm=\"ngForm\" (ngSubmit)=\"onSubmit(dVATForm)\">-->\r\n  <form #dVATForm=\"ngForm\">\r\n    <br/>\r\n    <ion-label class=\"ion-text-center\">\r\n      <h3>Are you sure you want to delete the following VAT?</h3>\r\n    </ion-label>\r\n    <br/>\r\n\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>VAT Percentage : </h2>\r\n        <br/>\r\n        <!--Insert DESCRIPTION Here-->\r\n        <p>10%</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"block\" type=\"submit\" color=\"tertiary\">Delete VAT</ion-button>\r\n  </form>\r\n</ion-content>\r\n\r\n\r\n\r\n";

/***/ }),

/***/ 51834:
/*!********************************************************************************!*\
  !*** ./src/app/pages/sale/vat/update-vat/update-vat.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Update VAT Percentage</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!--This modal is not complete, please check if it displays like \"UpdateVenue\"-->\r\n<!--Check the SCSS, TS AND HTML-->\r\n\r\n<ion-content>\r\n  <!--<form #uVATForm=\"ngForm\" (ngSubmit)=\"onSubmit(uVATForm)\">-->\r\n  <form #uVATForm=\"ngForm\">\r\n\r\n    <br/>     \r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">VAT Percentage</ion-label>\r\n      <ion-input required ngModel name #nameCtrl=\"ngModel\" placeholder=\"10%\"></ion-input>\r\n    </ion-item>\r\n    <ion-text color=\"danger\" *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\r\n      <p>Please enter a valid VAT percentage</p>\r\n    </ion-text>\r\n      \r\n    <br/>\r\n\r\n    <ion-button expand=\"block\" color=\"secondary\">Update VAT percentage</ion-button>\r\n</form>\r\n</ion-content>\r\n\r\n";

/***/ }),

/***/ 8362:
/*!****************************************************************************!*\
  !*** ./src/app/pages/sale/vat/view-vat/view-vat.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!--'Fitness Instructing' must be replaced by the qualification_description Attribute-->\r\n    <ion-title>View VAT Percentage</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button  (click)=\"dismissModal()\" color=\"tertiary\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!--This modal is not complete, please check if it displays like \"ViewVenue\"-->\r\n<!--Check the SCSS, TS AND HTML-->\r\n\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item>\r\n\r\n        <ion-label>\r\n          <h2>VAT Percentage : </h2>\r\n          <br/>\r\n          <!--Insert VAT Percentage Here-->\r\n          <p>10%</p>\r\n        </ion-label>\r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label>\r\n          <h2>Creation Date : </h2>\r\n          <br/>\r\n          <!--Insert Creation Date Here-->\r\n          <p>1993</p>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n";

/***/ }),

/***/ 1024:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/user/titles/add-title/add-title.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>New Title Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!--This modal is not complete, please check if it displays like \"AddVenue\"-->\r\n<!--Check the SCSS, TS AND HTML-->\r\n<ion-content>\r\n  <!--<form #cVenueForm=\"ngForm\" (ngSubmit)=\"onSubmit(cVenueForm)\">-->\r\n  <form [formGroup]=\"cTitleForm\" (ngSubmit)=\"submitForm()\"> \r\n    <br/>\r\n    <div class=\"ion-text-center\">\r\n      <p style=\"font-size:large\">Please fill in the title information below.</p>\r\n    </div>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Description:</ion-label>\r\n      <ion-input formControlName=\"titleDescription\" type=\"text\" required=\"\" id=\"titleDescription\" ></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.titleDescription.errors?.required && cTitleForm.get('titleDescription').touched\">\r\n      Title Description is required.<br/>\r\n    </span>\r\n    <br>\r\n    <br>\r\n    <ion-button type=\"submit\" color=\"success\" [disabled]=\"!cTitleForm.valid\" class=\"ion-float-right\" style=\"margin-left:2%; margin-right:10%; width:55% ;\">Create Title</ion-button>\r\n    <ion-button color=\"light\" class=\"ion-float-left\" style=\"margin-left:10%;width: 20%;\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n    \r\n  </form>\r\n</ion-content>\r\n<!-- <ion-content>\r\n  <form #cTitleForm=\"ngForm\">\r\n\r\n    <br/>     \r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Title :</ion-label>\r\n      <ion-input required ngModel name #titleCtrl=\"ngModel\"></ion-input>\r\n    </ion-item>\r\n    <ion-text color=\"danger\" *ngIf=\"!titleCtrl.valid && titleCtrl.touched\">\r\n      <p>Please enter a valid title</p>\r\n    </ion-text>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Description :</ion-label>\r\n      <ion-textarea required ngModel name #desCtrl=\"ngModel\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-text color=\"danger\" *ngIf=\"!desCtrl.valid && desCtrl.touched\">\r\n      <p>Please enter a valid title description</p>\r\n    </ion-text> -->\r\n      \r\n    <!-- <br/>\r\n\r\n    <ion-button expand=\"block\" color=\"success\">Create Title</ion-button>\r\n</form>\r\n</ion-content> -->\r\n\r\n";

/***/ }),

/***/ 67997:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/user/titles/associative-title/associative-title.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\r\n  associative-title works!\r\n</p>\r\n";

/***/ }),

/***/ 12405:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/user/titles/confirm-title/confirm-title.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Confirm Title Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br/>\r\n  <div class=\"ion-text-center\">\r\n    <p style=\"font-size:large\">Please confirm the following title information?</p>\r\n  </div>\r\n\r\n    <ion-item > \r\n      <ion-label>\r\n        <h2>Description</h2>\r\n        <p class=\"ion-text-start\">{{title.description}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n    <br/><BR/>\r\n\r\n    <ion-button color=\"success\" class=\"ion-float-right\" style=\"margin-left:2%; margin-right:10%; width:55%;\" (click)=\"confirmChanges(title)\">Confirm</ion-button>\r\n    <ion-button color=\"light\" class=\"ion-float-left\" style=\"margin-left:10%;width: 20%;\" (click)=\"returnFrom()\">Return</ion-button>\r\n\r\n</ion-content>";

/***/ }),

/***/ 72945:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/user/titles/delete-title/delete-title.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Delete Title Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <br/><br/>\r\n    <ion-label class=\"ion-text-center\">\r\n      <p style=\"font-size:large; color: white;\">Are you sure you want to delete the following title?</p>\r\n    </ion-label>\r\n    <br/>\r\n\r\n    <ion-item > \r\n      <ion-label>\r\n        <h2>Title Description: </h2>\r\n        <p class=\"ion-text-start\">{{title.description}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <br>\r\n    <ion-button expand=\"block\" type=\"ion-button\" (click)=\"delete(title.titleID)\" color=\"danger\">Delete Title</ion-button>\r\n</ion-content>\r\n\r\n\r\n";

/***/ }),

/***/ 68191:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/user/titles/update-title/update-title.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Title Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"uTitleForm\" (ngSubmit)=\"submitForm()\"> \r\n    <br/><br/>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Description:</ion-label>\r\n      <ion-input formControlName=\"titleDescription\"  type=\"text\" required=\"\"></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.titleDescription.errors?.required\">\r\n      Title Description is required.\r\n      <br/>\r\n    </span>\r\n\r\n   \r\n    <br><br/>\r\n    <ion-button type=\"submit\" color=\"secondary\" [disabled]=\"!uTitleForm.valid\" class=\"ion-float-right\" style=\"margin-left:2%; margin-right:10%; width:55% ;\">Update Title</ion-button>\r\n    <ion-button color=\"light\" class=\"ion-float-left\" style=\"margin-left:10%;width: 20%;\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n  </form>\r\n</ion-content>\r\n";

/***/ }),

/***/ 30341:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/user/titles/view-titles/view-titles.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View {{title.description}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br/>\r\n  <div class=\"ion-text-center\">\r\n    <p style=\"font-size:large; color: white;margin-left: 10%;margin-right: 10%;\">The following information is associated with the <br/> \"{{title.description}}\" title</p>\r\n  \r\n\r\n    <ion-item > \r\n      <ion-label>\r\n        <h2>Title Description:</h2>\r\n        <p class=\"ion-text-start\">{{title.description}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n  <br>\r\n  <ion-button color=\"light\" class=\"ion-float-right\" style=\"margin-right:10%;width:30% \" (click)=\"dismissModal()\">Return</ion-button>\r\n</ion-content>\r\n";

/***/ }),

/***/ 99446:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/add-role/add-role.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>New User Role Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"cUserRoleForm\" (ngSubmit)=\"submitForm()\">\r\n\r\n    <br/>    \r\n    \r\n    <div class=\"ion-text-center\">\r\n      <p style=\"font-size:large\">Please fill in the User Role information below.</p>\r\n    </div>\r\n        \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Name:</ion-label>\r\n      <ion-input formControlName=\"name\" type=\"text\" required=\"\" id=\"name\"></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.userRoleName.errors?.required && cUserRoleForm.get('name').touched\">\r\n      User role name is required.<br/>\r\n    </span>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Description:</ion-label>\r\n      <ion-textarea formControlName=\"description\" required=\"\" id=\"description\"></ion-textarea>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.description.errors?.required && cUserRoleForm.get('description').touched\">\r\n      User role description is required.<br/>\r\n    </span>\r\n\r\n    <!-- <br/>\r\n    <div class=\"ion-text-left\">\r\n      <p style=\"font-size:large\">Please choose what the user will have access too.</p>\r\n    </div>\r\n    <br/>\r\n    <ion-item *ngFor=\"let permission of permissions\">\r\n      <ion-checkbox slot=\"start\" >{{permission.des}}</ion-checkbox>\r\n    </ion-item> -->\r\n      \r\n    <br/>\r\n    <ion-button type=\"submit\" color=\"success\" [disabled]=\"!cUserRoleForm.valid\" class=\"ion-float-right\" style=\"margin-left:2%; margin-right:10%; width:55% ;\">Create User Role</ion-button>\r\n    <ion-button color=\"light\" class=\"ion-float-left\" style=\"margin-left:10%;width: 20%;\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n  </form>\r\n</ion-content>\r\n";

/***/ }),

/***/ 91494:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/associative-role/associative-role.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\r\n  associative-role works!\r\n</p>\r\n";

/***/ }),

/***/ 34696:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/confirm-role/confirm-role.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\r\n  confirm-role works!\r\n</p>\r\n";

/***/ }),

/***/ 85599:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/delete-role/delete-role.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Delete User Role</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!--This modal is not complete, please check if it displays like \"DeleteVenue\"-->\r\n<!--Check the SCSS, TS AND HTML-->\r\n\r\n<ion-content>\r\n  <form #dUserRoleForm=\"ngForm\">\r\n    <br/>\r\n    <ion-label class=\"ion-text-center\">\r\n      <h3>Are you sure you want to delete the following user role?</h3>\r\n    </ion-label>\r\n    <br/>    \r\n        \r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>User Role Name : </h2>\r\n        <!--Insert User Role Name Here-->\r\n        <p>Administrator</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>User Role Description : </h2>\r\n        <!--Insert Description Here-->\r\n        <p>a person responsible for carrying out administration of a business or organization</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>User Role Permissions :</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngFor=\"let permission of permissions\">\r\n    <ul >\r\n      <li slot=\"start\" style=\"color:#bfbfbf\">{{permission.des}}</li>\r\n    </ul>\r\n  </ion-item>\r\n      \r\n    <br/>\r\n    <ion-button expand=\"block\" color=\"tertiary\"> Delete User Role </ion-button>\r\n</form>\r\n</ion-content>\r\n\r\n\r\n";

/***/ }),

/***/ 12918:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/update-role/update-role.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Update User Role</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!--This modal is not complete, please check if it displays like \"UpdateVenue\"-->\r\n<!--Check the SCSS, TS AND HTML-->\r\n\r\n<ion-content>\r\n  <form #uUserRoleForm=\"ngForm\">\r\n\r\n    <br/>     \r\n        \r\n    <ion-item>\r\n      <ion-label position=\"stacked\">User Role Name:</ion-label>\r\n      <ion-input required ngModel name #nameCtrl=\"ngModel\" placeholder=\"Administrator\"></ion-input>\r\n    </ion-item>\r\n    <ion-text color=\"danger\" *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\r\n      <p>Please enter a valid user role name</p>\r\n    </ion-text>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">User Role Description:</ion-label>\r\n      <ion-textarea required ngModel description #desCtrl=\"ngModel\"\r\n      placeholder=\"a person responsible for carrying out administration of a business or organization\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-text color=\"danger\" *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\r\n      <p>Please enter a valid user role description</p>\r\n    </ion-text>\r\n\r\n    <br/>\r\n    <ion-label class=\"ion-text-center\">\r\n      <h3>Choose what this user will have access too</h3>\r\n    </ion-label>\r\n    <br/>\r\n    <ion-item *ngFor=\"let permission of permissions\">\r\n      <ion-checkbox slot=\"start\" ></ion-checkbox>{{permission.des}}\r\n    </ion-item>\r\n      \r\n    <br/>\r\n    <ion-button expand=\"block\" color=\"secondary\">Update User Role</ion-button>\r\n</form>\r\n</ion-content>\r\n\r\n";

/***/ }),

/***/ 64298:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/user/user-roles/view-role/view-role.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View User Role</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!--This modal is not complete, please check if it displays like \"ViewVenue\"-->\r\n<!--Check the SCSS, TS AND HTML-->\r\n<ion-content>\r\n     \r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>User Role Name : </h2>\r\n        <!--Insert User Role Name Here-->\r\n        <p>Administrator</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>User Role Description : </h2>\r\n        <!--Insert Description Here-->\r\n        <p>a person responsible for carrying out administration of a business or organization</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>User Role Permissions :</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngFor=\"let permission of permissions\">\r\n    <ul >\r\n      <li slot=\"start\" style=\"color:#bfbfbf\">{{permission.des}}</li>\r\n    </ul>\r\n  </ion-item>\r\n      \r\n</ion-content>\r\n\r\n\r\n\r\n";

/***/ }),

/***/ 23900:
/*!***************************************************************************!*\
  !*** ./src/app/pages/venue/add-venue/add-venue.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>New Venue Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <!--<form #cVenueForm=\"ngForm\" (ngSubmit)=\"onSubmit(cVenueForm)\">-->\r\n  <form [formGroup]=\"cVenueForm\" (ngSubmit)=\"submitForm()\"> \r\n    <br/>\r\n    <div class=\"ion-text-center\">\r\n      <p>Please fill in the venue information below.</p>\r\n    </div>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Name:</ion-label>\r\n      <ion-input formControlName=\"venueName\" type=\"text\" required=\"\" id=\"venueName\" ></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.venueName.errors?.required && cVenueForm.get('venueName').touched\">\r\n      Venue name is required.<br/>\r\n    </span>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Address:</ion-label>\r\n      <ion-input formControlName=\"location\" type=\"text\" required=\"\" id=\"location\"></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.location.errors?.required && cVenueForm.get('location').touched\">\r\n      Address is required.\r\n      <br/>\r\n    </span>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Postal Code:</ion-label>\r\n      <ion-input formControlName=\"postalCode\" type=\"numeric\" required=\"\" maxlength=\"4\" id=\"postalCode\"></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.postalCode.errors?.required && cVenueForm.get('postalCode').touched\">\r\n      Postal code is required.\r\n      <br/>\r\n    </span>\r\n    <span class=\"error ion-padding\" *ngIf=\"cVenueForm.controls['postalCode'].hasError('pattern')\">\r\n      Please enter a valid postal code of 4 digits.\r\n      <br/>\r\n    </span>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Capacity:</ion-label>\r\n      <ion-input formControlName=\"capacity\" type=\"number\" required=\"\" id=\"capacity\"></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.capacity.errors?.required && cVenueForm.get('capacity').touched\">\r\n      Venue capacity is required.\r\n      <br/>\r\n    </span>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.capacity.errors?.min\">\r\n      Please enter capacity above 0.\r\n      <br/>\r\n    </span>\r\n\r\n    <br/><br/>\r\n\r\n    <ion-button type=\"submit\" color=\"success\" [disabled]=\"!cVenueForm.valid\" class=\"ion-float-right\">Create Venue</ion-button>\r\n    <ion-button color=\"light\" class=\"ion-float-left\" style=\"margin-left:10%;width: 20%;\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n    \r\n  </form>\r\n</ion-content>\r\n";

/***/ }),

/***/ 3236:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/venue/associative-venue/associative-venue.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 19523:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/venue/confirm-venue/confirm-venue.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Confirm Venue Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br/>\r\n  <div class=\"ion-text-center\">\r\n    <p style=\"font-size:large\">Please confirm the following venue information?</p>\r\n  </div>\r\n\r\n    <ion-item > \r\n      <ion-label>\r\n        <h2>Name:</h2>\r\n        <p class=\"ion-text-start\">{{venue.name}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Address:</h2>\r\n        <p class=\"ion-text-start\">{{venue.address}}</p>\r\n    </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Postal Code:</h2>\r\n        <p class=\"ion-text-start\">{{venue.postalCode}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Capacity:</h2>\r\n        <p class=\"ion-text-start\">{{venue.capacity}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <br/><BR/>\r\n\r\n    <ion-button color=\"success\" class=\"ion-float-right\" style=\"margin-left:2%; margin-right:10%; width:55%;\" (click)=\"confirmChanges(venue)\">Confirm</ion-button>\r\n    <ion-button color=\"light\" class=\"ion-float-left\" style=\"margin-left:10%;width: 20%;\" (click)=\"returnFrom()\">Return</ion-button>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 41163:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/venue/delete-venue/delete-venue.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Delete Venue Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <br/><br/>\r\n    <ion-label class=\"ion-text-center\">\r\n      <p style=\"font-size:large; color: white;\">Are you sure you want to delete the following venue?</p>\r\n    </ion-label>\r\n    <br/>\r\n\r\n    <ion-item > \r\n      <ion-label>\r\n        <h2>Venue Name: </h2>\r\n        <p class=\"ion-text-start\">{{venue.name}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Venue Location:</h2>\r\n        <p class=\"ion-text-start\">{{venue.address}}</p>\r\n    </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Venue Postal Code:</h2>\r\n        <p class=\"ion-text-start\">{{venue.postalCode}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Venue Capacity:</h2>\r\n        <p class=\"ion-text-start\">{{venue.capacity}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <br>\r\n    <ion-button expand=\"block\" type=\"ion-button\" (click)=\"delete(venue.venueID)\" color=\"danger\">Delete Venue</ion-button>\r\n</ion-content>\r\n\r\n\r\n\r\n";

/***/ }),

/***/ 16861:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/venue/update-venue/update-venue.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Venue Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"uVenueForm\" (ngSubmit)=\"submitForm()\"> \r\n    <br/><br/>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Name:</ion-label>\r\n      <ion-input formControlName=\"venueName\"  type=\"text\" required=\"\"></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.venueName.errors?.required\">\r\n      Venue name is required.\r\n      <br/>\r\n    </span>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Address:</ion-label>\r\n      <ion-input formControlName=\"location\" type=\"text\" required=\"\"></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.location.errors?.required\">\r\n      Address is required.\r\n    </span>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Postal Code:</ion-label>\r\n      <ion-input formControlName=\"postalCode\" type=\"text\" required=\"\" maxlength=\"4\" minlength=\"4\"></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.postalCode.errors?.required\">\r\n      Postal code is required.\r\n    </span>\r\n    <span class=\"error ion-padding\" *ngIf=\"uVenueForm.controls['postalCode'].hasError('pattern')\">\r\n      Please enter a valid postal code of 4 digits.\r\n    </span>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Capacity:</ion-label>\r\n      <ion-input placeholder=\"0\" formControlName=\"capacity\" type=\"number\" required=\"\"></ion-input>\r\n      <br/>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.capacity.errors?.required\">\r\n      Venue capacity is required.\r\n    </span>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.capacity.errors?.min\">\r\n      Please enter capacity above 0.\r\n    </span>\r\n    <br><br/>\r\n    <ion-button type=\"submit\" color=\"secondary\" [disabled]=\"!uVenueForm.valid\" class=\"ion-float-right\" style=\"margin-left:2%; margin-right:10%; width:55% ;\">Update Venue</ion-button>\r\n    <ion-button color=\"light\" class=\"ion-float-left\" style=\"margin-left:10%;width: 20%;\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n  </form>\r\n</ion-content>\r\n\r\n\r\n";

/***/ }),

/***/ 41401:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/venue/view-venue-info/view-venue-info.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View {{venue.name}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\"><ion-icon name=\"close-outline\" size=\"large\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br/>\r\n  <div class=\"ion-text-center\">\r\n    <p style=\"font-size:large; color: white;margin-left: 10%;margin-right: 10%;\">The following information is associated with the <br/> \"{{venue.name}}\" venue</p>\r\n  \r\n\r\n    <ion-item > \r\n      <ion-label>\r\n        <h2>Venue Name:</h2>\r\n        <p class=\"ion-text-start\">{{venue.name}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Venue Location:</h2>\r\n        <p class=\"ion-text-start\">{{venue.address}}</p>\r\n    </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Venue Postal Code:</h2>\r\n        <p class=\"ion-text-start\">{{venue.postalCode}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Venue Capacity:</h2>\r\n        <p class=\"ion-text-start\">{{venue.capacity}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n  <br>\r\n  <ion-button color=\"light\" class=\"ion-float-right\" style=\"margin-right:10%;width:30% \" (click)=\"dismissModal()\">Return</ion-button>\r\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map