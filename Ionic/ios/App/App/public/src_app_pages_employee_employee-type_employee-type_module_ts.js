"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_employee_employee-type_employee-type_module_ts"],{

/***/ 501:
/*!******************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/employee-type-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeTypePageRoutingModule": () => (/* binding */ EmployeeTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _employee_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-type.page */ 5721);




const routes = [
    {
        path: '',
        component: _employee_type_page__WEBPACK_IMPORTED_MODULE_0__.EmployeeTypePage
    }
];
let EmployeeTypePageRoutingModule = class EmployeeTypePageRoutingModule {
};
EmployeeTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmployeeTypePageRoutingModule);



/***/ }),

/***/ 3067:
/*!**********************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/employee-type.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeTypePageModule": () => (/* binding */ EmployeeTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _employee_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-type-routing.module */ 501);
/* harmony import */ var _employee_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-type.page */ 5721);







let EmployeeTypePageModule = class EmployeeTypePageModule {
};
EmployeeTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _employee_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeTypePageRoutingModule
        ],
        declarations: [_employee_type_page__WEBPACK_IMPORTED_MODULE_1__.EmployeeTypePage]
    })
], EmployeeTypePageModule);



/***/ }),

/***/ 5721:
/*!********************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/employee-type.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeTypePage": () => (/* binding */ EmployeeTypePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _employee_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-type.page.html?ngResource */ 5182);
/* harmony import */ var _employee_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-type.page.scss?ngResource */ 1179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let EmployeeTypePage = class EmployeeTypePage {
    constructor() { }
    ngOnInit() {
    }
};
EmployeeTypePage.ctorParameters = () => [];
EmployeeTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-employee-type',
        template: _employee_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_employee_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmployeeTypePage);



/***/ }),

/***/ 1179:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/employee-type.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS10eXBlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5182:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/employee-type.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>employee-type</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee_employee-type_employee-type_module_ts.js.map