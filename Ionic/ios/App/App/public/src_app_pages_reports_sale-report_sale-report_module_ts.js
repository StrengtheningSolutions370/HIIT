"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reports_sale-report_sale-report_module_ts"],{

/***/ 90559:
/*!*************************************************************************!*\
  !*** ./src/app/pages/reports/sale-report/sale-report-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleReportPageRoutingModule": () => (/* binding */ SaleReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sale_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale-report.page */ 8236);




const routes = [
    {
        path: '',
        component: _sale_report_page__WEBPACK_IMPORTED_MODULE_0__.SaleReportPage
    }
];
let SaleReportPageRoutingModule = class SaleReportPageRoutingModule {
};
SaleReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SaleReportPageRoutingModule);



/***/ }),

/***/ 11438:
/*!*****************************************************************!*\
  !*** ./src/app/pages/reports/sale-report/sale-report.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleReportPageModule": () => (/* binding */ SaleReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sale_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale-report-routing.module */ 90559);
/* harmony import */ var _sale_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale-report.page */ 8236);







let SaleReportPageModule = class SaleReportPageModule {
};
SaleReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sale_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaleReportPageRoutingModule
        ],
        declarations: [_sale_report_page__WEBPACK_IMPORTED_MODULE_1__.SaleReportPage]
    })
], SaleReportPageModule);



/***/ }),

/***/ 8236:
/*!***************************************************************!*\
  !*** ./src/app/pages/reports/sale-report/sale-report.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleReportPage": () => (/* binding */ SaleReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sale_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale-report.page.html?ngResource */ 45226);
/* harmony import */ var _sale_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale-report.page.scss?ngResource */ 29418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SaleReportPage = class SaleReportPage {
    constructor() { }
    ngOnInit() {
    }
};
SaleReportPage.ctorParameters = () => [];
SaleReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sale-report',
        template: _sale_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sale_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SaleReportPage);



/***/ }),

/***/ 29418:
/*!****************************************************************************!*\
  !*** ./src/app/pages/reports/sale-report/sale-report.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlLXJlcG9ydC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 45226:
/*!****************************************************************************!*\
  !*** ./src/app/pages/reports/sale-report/sale-report.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>saleReport</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reports_sale-report_sale-report_module_ts.js.map