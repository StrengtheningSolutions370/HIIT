"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_suppliers_suppliers_module_ts"],{

/***/ 9502:
/*!*************************************************************!*\
  !*** ./src/app/pages/suppliers/suppliers-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuppliersPageRoutingModule": () => (/* binding */ SuppliersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _suppliers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suppliers.page */ 45877);




const routes = [
    {
        path: 'tabs',
        component: _suppliers_page__WEBPACK_IMPORTED_MODULE_0__.SuppliersPage,
        children: [
            {
                path: 'supplier-page',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_suppliers_supplier-page_supplier-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./supplier-page/supplier-page.module */ 1249)).then(m => m.SupplierPagePageModule)
            },
            {
                path: 'supplier-order',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_suppliers_supplier-order_supplier-order_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./supplier-order/supplier-order.module */ 9618)).then(m => m.SupplierOrderPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    }
];
let SuppliersPageRoutingModule = class SuppliersPageRoutingModule {
};
SuppliersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SuppliersPageRoutingModule);



/***/ }),

/***/ 63330:
/*!*****************************************************!*\
  !*** ./src/app/pages/suppliers/suppliers.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuppliersPageModule": () => (/* binding */ SuppliersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _suppliers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suppliers-routing.module */ 9502);
/* harmony import */ var _suppliers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suppliers.page */ 45877);







let SuppliersPageModule = class SuppliersPageModule {
};
SuppliersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _suppliers_routing_module__WEBPACK_IMPORTED_MODULE_0__.SuppliersPageRoutingModule
        ],
        declarations: [_suppliers_page__WEBPACK_IMPORTED_MODULE_1__.SuppliersPage]
    })
], SuppliersPageModule);



/***/ }),

/***/ 45877:
/*!***************************************************!*\
  !*** ./src/app/pages/suppliers/suppliers.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuppliersPage": () => (/* binding */ SuppliersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _suppliers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suppliers.page.html?ngResource */ 36762);
/* harmony import */ var _suppliers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suppliers.page.scss?ngResource */ 4156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SuppliersPage = class SuppliersPage {
    constructor() { }
    ngOnInit() {
    }
};
SuppliersPage.ctorParameters = () => [];
SuppliersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-suppliers',
        template: _suppliers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_suppliers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SuppliersPage);



/***/ }),

/***/ 4156:
/*!****************************************************************!*\
  !*** ./src/app/pages/suppliers/suppliers.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllcnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 36762:
/*!****************************************************************!*\
  !*** ./src/app/pages/suppliers/suppliers.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <!--Menu toggle button that will display the menu-->\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button menu=\"mainMenu\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title slot=\"\">Suppliers</ion-title>\r\n      <img src=\"../../assets/BSC.png\" width=\"80px\" height=\"80px\" alt=\"logo\" slot=\"end\">\r\n      <!--Can we change this dynamically when switching between tabs?-->\r\n    <!-- </ion-item> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"top\" style=\"color: #E0E0E0;\">\r\n      <ion-tab-button tab=\"supplier-page\">\r\n        <ion-label>Supplier</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"supplier-order\">\r\n        <ion-label>Supplier Order</ion-label>\r\n      </ion-tab-button>\r\n     \r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n\r\n</ion-content>\r\n\r\n<!-- <ion-footer style=\"margin-left:20px;margin-bottom: 10px;\">\r\n  Bester Strength and Conditioning | info@besterstrengthandconditioning.co.za\r\n  <br>\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_suppliers_suppliers_module_ts.js.map