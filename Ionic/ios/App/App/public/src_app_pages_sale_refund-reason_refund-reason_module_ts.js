"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sale_refund-reason_refund-reason_module_ts"],{

/***/ 51613:
/*!**************************************************************************!*\
  !*** ./src/app/pages/sale/refund-reason/refund-reason-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundReasonPageRoutingModule": () => (/* binding */ RefundReasonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _refund_reason_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refund-reason.page */ 55661);




const routes = [
    {
        path: '',
        component: _refund_reason_page__WEBPACK_IMPORTED_MODULE_0__.RefundReasonPage
    }
];
let RefundReasonPageRoutingModule = class RefundReasonPageRoutingModule {
};
RefundReasonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RefundReasonPageRoutingModule);



/***/ }),

/***/ 7227:
/*!******************************************************************!*\
  !*** ./src/app/pages/sale/refund-reason/refund-reason.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundReasonPageModule": () => (/* binding */ RefundReasonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _refund_reason_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refund-reason-routing.module */ 51613);
/* harmony import */ var _refund_reason_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refund-reason.page */ 55661);







let RefundReasonPageModule = class RefundReasonPageModule {
};
RefundReasonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _refund_reason_routing_module__WEBPACK_IMPORTED_MODULE_0__.RefundReasonPageRoutingModule
        ],
        declarations: [_refund_reason_page__WEBPACK_IMPORTED_MODULE_1__.RefundReasonPage]
    })
], RefundReasonPageModule);



/***/ }),

/***/ 55661:
/*!****************************************************************!*\
  !*** ./src/app/pages/sale/refund-reason/refund-reason.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundReasonPage": () => (/* binding */ RefundReasonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _refund_reason_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refund-reason.page.html?ngResource */ 67709);
/* harmony import */ var _refund_reason_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refund-reason.page.scss?ngResource */ 75056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let RefundReasonPage = class RefundReasonPage {
    constructor() { }
    ngOnInit() {
    }
};
RefundReasonPage.ctorParameters = () => [];
RefundReasonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-refund-reason',
        template: _refund_reason_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_refund_reason_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RefundReasonPage);



/***/ }),

/***/ 75056:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/sale/refund-reason/refund-reason.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtcmVhc29uLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 67709:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/sale/refund-reason/refund-reason.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>refund-reason</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sale_refund-reason_refund-reason_module_ts.js.map