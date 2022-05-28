"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_suppliers_supplier-page_supplier-page_module_ts"],{

/***/ 58542:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/suppliers/supplier-page/supplier-page-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierPagePageRoutingModule": () => (/* binding */ SupplierPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _supplier_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-page.page */ 71847);




const routes = [
    {
        path: '',
        component: _supplier_page_page__WEBPACK_IMPORTED_MODULE_0__.SupplierPagePage
    }
];
let SupplierPagePageRoutingModule = class SupplierPagePageRoutingModule {
};
SupplierPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupplierPagePageRoutingModule);



/***/ }),

/***/ 1249:
/*!***********************************************************************!*\
  !*** ./src/app/pages/suppliers/supplier-page/supplier-page.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierPagePageModule": () => (/* binding */ SupplierPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _supplier_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-page-routing.module */ 58542);
/* harmony import */ var _supplier_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-page.page */ 71847);







let SupplierPagePageModule = class SupplierPagePageModule {
};
SupplierPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _supplier_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupplierPagePageRoutingModule
        ],
        declarations: [_supplier_page_page__WEBPACK_IMPORTED_MODULE_1__.SupplierPagePage]
    })
], SupplierPagePageModule);



/***/ }),

/***/ 71847:
/*!*********************************************************************!*\
  !*** ./src/app/pages/suppliers/supplier-page/supplier-page.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierPagePage": () => (/* binding */ SupplierPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _supplier_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-page.page.html?ngResource */ 69775);
/* harmony import */ var _supplier_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-page.page.scss?ngResource */ 17873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SupplierPagePage = class SupplierPagePage {
    constructor() { }
    ngOnInit() {
    }
};
SupplierPagePage.ctorParameters = () => [];
SupplierPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-supplier-page',
        template: _supplier_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_supplier_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SupplierPagePage);



/***/ }),

/***/ 17873:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/suppliers/supplier-page/supplier-page.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllci1wYWdlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 69775:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/suppliers/supplier-page/supplier-page.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>supplier-page</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_suppliers_supplier-page_supplier-page_module_ts.js.map