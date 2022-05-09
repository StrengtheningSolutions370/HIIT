"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_employee_employee-page_employee-page_module_ts"],{

/***/ 6176:
/*!******************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/employee-page-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePagePageRoutingModule": () => (/* binding */ EmployeePagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _employee_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-page.page */ 391);




const routes = [
    {
        path: '',
        component: _employee_page_page__WEBPACK_IMPORTED_MODULE_0__.EmployeePagePage
    }
];
let EmployeePagePageRoutingModule = class EmployeePagePageRoutingModule {
};
EmployeePagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmployeePagePageRoutingModule);



/***/ }),

/***/ 6023:
/*!**********************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/employee-page.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePagePageModule": () => (/* binding */ EmployeePagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _employee_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-page-routing.module */ 6176);
/* harmony import */ var _employee_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-page.page */ 391);







let EmployeePagePageModule = class EmployeePagePageModule {
};
EmployeePagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _employee_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeePagePageRoutingModule
        ],
        declarations: [_employee_page_page__WEBPACK_IMPORTED_MODULE_1__.EmployeePagePage]
    })
], EmployeePagePageModule);



/***/ }),

/***/ 391:
/*!********************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/employee-page.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePagePage": () => (/* binding */ EmployeePagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _employee_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-page.page.html?ngResource */ 2492);
/* harmony import */ var _employee_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-page.page.scss?ngResource */ 8514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let EmployeePagePage = class EmployeePagePage {
    constructor() { }
    ngOnInit() {
    }
};
EmployeePagePage.ctorParameters = () => [];
EmployeePagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-employee-page',
        template: _employee_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_employee_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmployeePagePage);



/***/ }),

/***/ 8514:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/employee-page.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1wYWdlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2492:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/employee-page.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>employee-page</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee_employee-page_employee-page_module_ts.js.map