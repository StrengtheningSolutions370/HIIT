"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_employee_employee_module_ts"],{

/***/ 7786:
/*!***********************************************************!*\
  !*** ./src/app/pages/employee/employee-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePageRoutingModule": () => (/* binding */ EmployeePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _employee_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee.page */ 8613);




const routes = [
    {
        path: '',
        component: _employee_page__WEBPACK_IMPORTED_MODULE_0__.EmployeePage,
        children: [
            {
                path: 'employee-type',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_employee_employee-type_employee-type_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./employee-type/employee-type.module */ 3067)).then(m => m.EmployeeTypePageModule)
            },
            {
                path: 'qualification',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_employee_qualification_qualification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./qualification/qualification.module */ 9644)).then(m => m.QualificationPageModule)
            },
            {
                path: 'qualification-type',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_employee_qualification-type_qualification-type_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./qualification-type/qualification-type.module */ 9915)).then(m => m.QualificationTypePageModule)
            },
            {
                path: 'employee-page',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_employee_employee-page_employee-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./employee-page/employee-page.module */ 6023)).then(m => m.EmployeePagePageModule)
            },
            {
                path: '',
                redirectTo: '/employee/employee-page',
                pathMatch: 'full'
            }
        ]
    }
];
let EmployeePageRoutingModule = class EmployeePageRoutingModule {
};
EmployeePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmployeePageRoutingModule);



/***/ }),

/***/ 3354:
/*!***************************************************!*\
  !*** ./src/app/pages/employee/employee.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePageModule": () => (/* binding */ EmployeePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-routing.module */ 7786);
/* harmony import */ var _employee_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.page */ 8613);
/* harmony import */ var src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/header/header.component */ 3646);








let EmployeePageModule = class EmployeePageModule {
};
EmployeePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeePageRoutingModule
        ],
        declarations: [_employee_page__WEBPACK_IMPORTED_MODULE_1__.EmployeePage, src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
    })
], EmployeePageModule);



/***/ }),

/***/ 8613:
/*!*************************************************!*\
  !*** ./src/app/pages/employee/employee.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePage": () => (/* binding */ EmployeePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _employee_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee.page.html?ngResource */ 1872);
/* harmony import */ var _employee_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.page.scss?ngResource */ 2626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let EmployeePage = class EmployeePage {
    constructor() { }
    ngOnInit() {
    }
};
EmployeePage.ctorParameters = () => [];
EmployeePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-employee',
        template: _employee_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_employee_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmployeePage);



/***/ }),

/***/ 2626:
/*!**************************************************************!*\
  !*** ./src/app/pages/employee/employee.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1872:
/*!**************************************************************!*\
  !*** ./src/app/pages/employee/employee.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<app-header></app-header>\r\n\r\n<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"top\">\r\n      <ion-tab-button tab=\"employee-page\">\r\n        <ion-label>Employee</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"employee-type\">\r\n        <ion-label>Employee Type</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"qualification\">\r\n        <ion-label>Qualification</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"qualification-type\">\r\n        <ion-label>Qualification Type</ion-label>\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee_employee_module_ts.js.map