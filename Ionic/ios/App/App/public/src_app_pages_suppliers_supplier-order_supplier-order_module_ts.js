"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_suppliers_supplier-order_supplier-order_module_ts"],{

/***/ 92120:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/suppliers/supplier-order/supplier-order-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierOrderPageRoutingModule": () => (/* binding */ SupplierOrderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _supplier_order_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-order.page */ 65847);




const routes = [
    {
        path: '',
        component: _supplier_order_page__WEBPACK_IMPORTED_MODULE_0__.SupplierOrderPage
    }
];
let SupplierOrderPageRoutingModule = class SupplierOrderPageRoutingModule {
};
SupplierOrderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupplierOrderPageRoutingModule);



/***/ }),

/***/ 9618:
/*!*************************************************************************!*\
  !*** ./src/app/pages/suppliers/supplier-order/supplier-order.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierOrderPageModule": () => (/* binding */ SupplierOrderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _supplier_order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-order-routing.module */ 92120);
/* harmony import */ var _supplier_order_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-order.page */ 65847);







let SupplierOrderPageModule = class SupplierOrderPageModule {
};
SupplierOrderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _supplier_order_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupplierOrderPageRoutingModule
        ],
        declarations: [_supplier_order_page__WEBPACK_IMPORTED_MODULE_1__.SupplierOrderPage]
    })
], SupplierOrderPageModule);



/***/ }),

/***/ 65847:
/*!***********************************************************************!*\
  !*** ./src/app/pages/suppliers/supplier-order/supplier-order.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierOrderPage": () => (/* binding */ SupplierOrderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _supplier_order_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-order.page.html?ngResource */ 67778);
/* harmony import */ var _supplier_order_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-order.page.scss?ngResource */ 97301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SupplierOrderPage = class SupplierOrderPage {
    constructor() { }
    ngOnInit() {
    }
};
SupplierOrderPage.ctorParameters = () => [];
SupplierOrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-supplier-order',
        template: _supplier_order_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_supplier_order_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SupplierOrderPage);



/***/ }),

/***/ 97301:
/*!************************************************************************************!*\
  !*** ./src/app/pages/suppliers/supplier-order/supplier-order.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllci1vcmRlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 67778:
/*!************************************************************************************!*\
  !*** ./src/app/pages/suppliers/supplier-order/supplier-order.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>supplier-order</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_suppliers_supplier-order_supplier-order_module_ts.js.map