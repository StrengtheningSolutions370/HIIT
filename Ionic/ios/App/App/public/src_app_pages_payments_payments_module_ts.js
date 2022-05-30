"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_payments_payments_module_ts"],{

/***/ 66568:
/*!***********************************************************!*\
  !*** ./src/app/pages/payments/payments-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageRoutingModule": () => (/* binding */ PaymentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments.page */ 42061);




const routes = [
    {
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_0__.PaymentsPage
    }
];
let PaymentsPageRoutingModule = class PaymentsPageRoutingModule {
};
PaymentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentsPageRoutingModule);



/***/ }),

/***/ 15795:
/*!***************************************************!*\
  !*** ./src/app/pages/payments/payments.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageModule": () => (/* binding */ PaymentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments-routing.module */ 66568);
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.page */ 42061);







let PaymentsPageModule = class PaymentsPageModule {
};
PaymentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentsPageRoutingModule
        ],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_1__.PaymentsPage]
    })
], PaymentsPageModule);



/***/ }),

/***/ 42061:
/*!*************************************************!*\
  !*** ./src/app/pages/payments/payments.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPage": () => (/* binding */ PaymentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments.page.html?ngResource */ 18198);
/* harmony import */ var _payments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.page.scss?ngResource */ 66701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PaymentsPage = class PaymentsPage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentsPage.ctorParameters = () => [];
PaymentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-payments',
        template: _payments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentsPage);



/***/ }),

/***/ 66701:
/*!**************************************************************!*\
  !*** ./src/app/pages/payments/payments.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 18198:
/*!**************************************************************!*\
  !*** ./src/app/pages/payments/payments.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <!--Menu toggle button that will display the menu-->\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button menu=\"mainMenu\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title slot=\"\">Payments</ion-title>\r\n      <img src=\"../../assets/BSC.png\" width=\"80px\" height=\"80px\" alt=\"logo\" slot=\"end\">\r\n      <!--Can we change this dynamically when switching between tabs?-->\r\n    <!-- </ion-item> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<!-- </ion-content>\r\n<ion-footer style=\"margin-left:20px;margin-bottom: 10px;\">\r\n  Bester Strength and Conditioning | info@besterstrengthandconditioning.co.za\r\n  <br>\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payments_payments_module_ts.js.map