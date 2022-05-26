"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reports_group-session-report_group-session-report_module_ts"],{

/***/ 40886:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/reports/group-session-report/group-session-report-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupSessionReportPageRoutingModule": () => (/* binding */ GroupSessionReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _group_session_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-session-report.page */ 80318);




const routes = [
    {
        path: '',
        component: _group_session_report_page__WEBPACK_IMPORTED_MODULE_0__.GroupSessionReportPage
    }
];
let GroupSessionReportPageRoutingModule = class GroupSessionReportPageRoutingModule {
};
GroupSessionReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GroupSessionReportPageRoutingModule);



/***/ }),

/***/ 9322:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/reports/group-session-report/group-session-report.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupSessionReportPageModule": () => (/* binding */ GroupSessionReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _group_session_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-session-report-routing.module */ 40886);
/* harmony import */ var _group_session_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-session-report.page */ 80318);







let GroupSessionReportPageModule = class GroupSessionReportPageModule {
};
GroupSessionReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _group_session_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.GroupSessionReportPageRoutingModule
        ],
        declarations: [_group_session_report_page__WEBPACK_IMPORTED_MODULE_1__.GroupSessionReportPage]
    })
], GroupSessionReportPageModule);



/***/ }),

/***/ 80318:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/reports/group-session-report/group-session-report.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupSessionReportPage": () => (/* binding */ GroupSessionReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _group_session_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-session-report.page.html?ngResource */ 92822);
/* harmony import */ var _group_session_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-session-report.page.scss?ngResource */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let GroupSessionReportPage = class GroupSessionReportPage {
    constructor() { }
    ngOnInit() {
    }
};
GroupSessionReportPage.ctorParameters = () => [];
GroupSessionReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-group-session-report',
        template: _group_session_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_group_session_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GroupSessionReportPage);



/***/ }),

/***/ 57314:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/reports/group-session-report/group-session-report.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1zZXNzaW9uLXJlcG9ydC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 92822:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/reports/group-session-report/group-session-report.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>groupSessionReport</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reports_group-session-report_group-session-report_module_ts.js.map