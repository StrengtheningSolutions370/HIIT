"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reports_trainer-report_trainer-report_module_ts"],{

/***/ 10403:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/reports/trainer-report/trainer-report-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainerReportPageRoutingModule": () => (/* binding */ TrainerReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _trainer_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainer-report.page */ 90508);




const routes = [
    {
        path: '',
        component: _trainer_report_page__WEBPACK_IMPORTED_MODULE_0__.TrainerReportPage
    }
];
let TrainerReportPageRoutingModule = class TrainerReportPageRoutingModule {
};
TrainerReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrainerReportPageRoutingModule);



/***/ }),

/***/ 7210:
/*!***********************************************************************!*\
  !*** ./src/app/pages/reports/trainer-report/trainer-report.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainerReportPageModule": () => (/* binding */ TrainerReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _trainer_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainer-report-routing.module */ 10403);
/* harmony import */ var _trainer_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainer-report.page */ 90508);







let TrainerReportPageModule = class TrainerReportPageModule {
};
TrainerReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _trainer_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainerReportPageRoutingModule
        ],
        declarations: [_trainer_report_page__WEBPACK_IMPORTED_MODULE_1__.TrainerReportPage]
    })
], TrainerReportPageModule);



/***/ }),

/***/ 90508:
/*!*********************************************************************!*\
  !*** ./src/app/pages/reports/trainer-report/trainer-report.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainerReportPage": () => (/* binding */ TrainerReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _trainer_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainer-report.page.html?ngResource */ 45686);
/* harmony import */ var _trainer_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainer-report.page.scss?ngResource */ 93245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TrainerReportPage = class TrainerReportPage {
    constructor() { }
    ngOnInit() {
    }
};
TrainerReportPage.ctorParameters = () => [];
TrainerReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-trainer-report',
        template: _trainer_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_trainer_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrainerReportPage);



/***/ }),

/***/ 93245:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/reports/trainer-report/trainer-report.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmVyLXJlcG9ydC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 45686:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/reports/trainer-report/trainer-report.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>trainerReport</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reports_trainer-report_trainer-report_module_ts.js.map