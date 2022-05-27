"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reports_member-report_member-report_module_ts"],{

/***/ 7941:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/reports/member-report/member-report-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberReportPageRoutingModule": () => (/* binding */ MemberReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _member_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-report.page */ 85750);




const routes = [
    {
        path: '',
        component: _member_report_page__WEBPACK_IMPORTED_MODULE_0__.MemberReportPage
    }
];
let MemberReportPageRoutingModule = class MemberReportPageRoutingModule {
};
MemberReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MemberReportPageRoutingModule);



/***/ }),

/***/ 41983:
/*!*********************************************************************!*\
  !*** ./src/app/pages/reports/member-report/member-report.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberReportPageModule": () => (/* binding */ MemberReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _member_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-report-routing.module */ 7941);
/* harmony import */ var _member_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-report.page */ 85750);







let MemberReportPageModule = class MemberReportPageModule {
};
MemberReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _member_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.MemberReportPageRoutingModule
        ],
        declarations: [_member_report_page__WEBPACK_IMPORTED_MODULE_1__.MemberReportPage]
    })
], MemberReportPageModule);



/***/ }),

/***/ 85750:
/*!*******************************************************************!*\
  !*** ./src/app/pages/reports/member-report/member-report.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberReportPage": () => (/* binding */ MemberReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _member_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-report.page.html?ngResource */ 76290);
/* harmony import */ var _member_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-report.page.scss?ngResource */ 85245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MemberReportPage = class MemberReportPage {
    constructor() { }
    ngOnInit() {
    }
};
MemberReportPage.ctorParameters = () => [];
MemberReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-member-report',
        template: _member_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_member_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MemberReportPage);



/***/ }),

/***/ 85245:
/*!********************************************************************************!*\
  !*** ./src/app/pages/reports/member-report/member-report.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItcmVwb3J0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 76290:
/*!********************************************************************************!*\
  !*** ./src/app/pages/reports/member-report/member-report.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>memberReport</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reports_member-report_member-report_module_ts.js.map