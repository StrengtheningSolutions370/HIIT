"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reports_income-report_income-report_module_ts"],{

/***/ 82658:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/reports/income-report/income-report-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomeReportPageRoutingModule": () => (/* binding */ IncomeReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _income_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./income-report.page */ 14182);




const routes = [
    {
        path: '',
        component: _income_report_page__WEBPACK_IMPORTED_MODULE_0__.IncomeReportPage
    }
];
let IncomeReportPageRoutingModule = class IncomeReportPageRoutingModule {
};
IncomeReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IncomeReportPageRoutingModule);



/***/ }),

/***/ 82053:
/*!*********************************************************************!*\
  !*** ./src/app/pages/reports/income-report/income-report.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomeReportPageModule": () => (/* binding */ IncomeReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _income_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./income-report-routing.module */ 82658);
/* harmony import */ var _income_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./income-report.page */ 14182);







let IncomeReportPageModule = class IncomeReportPageModule {
};
IncomeReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _income_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.IncomeReportPageRoutingModule
        ],
        declarations: [_income_report_page__WEBPACK_IMPORTED_MODULE_1__.IncomeReportPage]
    })
], IncomeReportPageModule);



/***/ }),

/***/ 14182:
/*!*******************************************************************!*\
  !*** ./src/app/pages/reports/income-report/income-report.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomeReportPage": () => (/* binding */ IncomeReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _income_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./income-report.page.html?ngResource */ 8643);
/* harmony import */ var _income_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./income-report.page.scss?ngResource */ 50843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let IncomeReportPage = class IncomeReportPage {
    constructor() { }
    ngOnInit() {
    }
};
IncomeReportPage.ctorParameters = () => [];
IncomeReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-income-report',
        template: _income_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_income_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IncomeReportPage);



/***/ }),

/***/ 50843:
/*!********************************************************************************!*\
  !*** ./src/app/pages/reports/income-report/income-report.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmNvbWUtcmVwb3J0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8643:
/*!********************************************************************************!*\
  !*** ./src/app/pages/reports/income-report/income-report.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>incomeReport</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reports_income-report_income-report_module_ts.js.map