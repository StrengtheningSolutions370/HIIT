"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reports_reports_module_ts"],{

/***/ 59837:
/*!*********************************************************!*\
  !*** ./src/app/pages/reports/reports-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPageRoutingModule": () => (/* binding */ ReportsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.page */ 57795);




const routes = [
    {
        path: 'tabs',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_0__.ReportsPage,
        children: [
            {
                path: 'sale-report',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reports_sale-report_sale-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sale-report/sale-report.module */ 11438)).then(m => m.SaleReportPageModule)
            },
            {
                path: 'member-report',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reports_member-report_member-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./member-report/member-report.module */ 41983)).then(m => m.MemberReportPageModule)
            },
            {
                path: 'group-session-report',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reports_group-session-report_group-session-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./group-session-report/group-session-report.module */ 9322)).then(m => m.GroupSessionReportPageModule)
            },
            {
                path: 'trainer-report',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reports_trainer-report_trainer-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./trainer-report/trainer-report.module */ 7210)).then(m => m.TrainerReportPageModule)
            },
            {
                path: 'income-report',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reports_income-report_income-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./income-report/income-report.module */ 82053)).then(m => m.IncomeReportPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/sale-report',
        pathMatch: 'full'
    }
];
let ReportsPageRoutingModule = class ReportsPageRoutingModule {
};
ReportsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportsPageRoutingModule);



/***/ }),

/***/ 82234:
/*!*************************************************!*\
  !*** ./src/app/pages/reports/reports.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPageModule": () => (/* binding */ ReportsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-routing.module */ 59837);
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.page */ 57795);







let ReportsPageModule = class ReportsPageModule {
};
ReportsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsPageRoutingModule
        ],
        declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_1__.ReportsPage]
    })
], ReportsPageModule);



/***/ }),

/***/ 57795:
/*!***********************************************!*\
  !*** ./src/app/pages/reports/reports.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsPage": () => (/* binding */ ReportsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.page.html?ngResource */ 78909);
/* harmony import */ var _reports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.page.scss?ngResource */ 85413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ReportsPage = class ReportsPage {
    constructor() { }
    ngOnInit() {
    }
};
ReportsPage.ctorParameters = () => [];
ReportsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-reports',
        template: _reports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportsPage);



/***/ }),

/***/ 85413:
/*!************************************************************!*\
  !*** ./src/app/pages/reports/reports.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 78909:
/*!************************************************************!*\
  !*** ./src/app/pages/reports/reports.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <!--Menu toggle button that will display the menu-->\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button menu=\"mainMenu\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title slot=\"\">Reports</ion-title>\r\n      <img src=\"../../assets/BSC.png\" width=\"80px\" height=\"80px\" alt=\"logo\" slot=\"end\">\r\n      <!--Can we change this dynamically when switching between tabs?-->\r\n    <!-- </ion-item> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"top\" style=\"color: #E0E0E0;\">\r\n      <ion-tab-button tab=\"sale-report\">\r\n        <ion-label>Sale Report</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"member-report\">\r\n        <ion-label>Member Report</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"group-session-report\">\r\n        <ion-label>Group Session Report</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"trainer-report\">\r\n        <ion-label>Trainer Report</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"income-report\">\r\n        <ion-label>Income Report</ion-label>\r\n      </ion-tab-button>\r\n  \r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n\r\n</ion-content>\r\n\r\n<!-- <ion-footer style=\"margin-left:20px;margin-bottom: 10px;\">\r\n  Bester Strength and Conditioning | info@besterstrengthandconditioning.co.za\r\n  <br>\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reports_reports_module_ts.js.map