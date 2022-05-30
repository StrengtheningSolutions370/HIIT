"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_employee_employee_module_ts"],{

/***/ 17786:
/*!***********************************************************!*\
  !*** ./src/app/pages/employee/employee-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePageRoutingModule": () => (/* binding */ EmployeePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _employee_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee.page */ 98613);




const routes = [
    {
        path: 'tabs',
        component: _employee_page__WEBPACK_IMPORTED_MODULE_0__.EmployeePage,
        children: [
            {
                path: 'employee-page',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_employee_employee-page_employee-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./employee-page/employee-page.module */ 26023)).then(m => m.EmployeePagePageModule)
            },
            {
                path: 'employee-type',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_employee_employee-type_employee-type_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./employee-type/employee-type.module */ 13067)).then(m => m.EmployeeTypePageModule)
            },
            {
                path: 'qualification',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_employee_qualification_qualification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./qualification/qualification.module */ 29644)).then(m => m.QualificationPageModule)
            },
            {
                path: 'qualification-type',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_employee_qualification-type_qualification-type_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./qualification-type/qualification-type.module */ 79915)).then(m => m.QualificationTypePageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/employee-page',
        pathMatch: 'full'
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

/***/ 53354:
/*!***************************************************!*\
  !*** ./src/app/pages/employee/employee.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePageModule": () => (/* binding */ EmployeePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-routing.module */ 17786);
/* harmony import */ var _employee_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.page */ 98613);







//import { HeaderComponent } from 'src/app/components/header/header.component';
let EmployeePageModule = class EmployeePageModule {
};
EmployeePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeePageRoutingModule
        ],
        declarations: [_employee_page__WEBPACK_IMPORTED_MODULE_1__.EmployeePage] //, HeaderComponent]
    })
], EmployeePageModule);



/***/ }),

/***/ 98613:
/*!*************************************************!*\
  !*** ./src/app/pages/employee/employee.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePage": () => (/* binding */ EmployeePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _employee_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee.page.html?ngResource */ 71872);
/* harmony import */ var _employee_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.page.scss?ngResource */ 72626);
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

/***/ 72626:
/*!**************************************************************!*\
  !*** ./src/app/pages/employee/employee.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-tab-bar {\n  color: #E0E0E0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJlbXBsb3llZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhcntcclxuICAgIGNvbG9yOiAjRTBFMEUwO1xyXG59Il19 */";

/***/ }),

/***/ 71872:
/*!**************************************************************!*\
  !*** ./src/app/pages/employee/employee.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <!--Menu toggle button that will display the menu-->\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button menu=\"mainMenu\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title slot=\"\">Employees</ion-title>\r\n      <img src=\"../../assets/BSC.png\" width=\"80px\" height=\"80px\" alt=\"logo\" slot=\"end\">\r\n      <!--Can we change this dynamically when switching between tabs?-->\r\n    <!-- </ion-item> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"top\" >\r\n      <ion-tab-button tab=\"employee-page\">\r\n        <ion-label>Employee</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"employee-type\">\r\n        <ion-label>Employee Type</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"qualification\">\r\n        <ion-label>Qualification</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"qualification-type\">\r\n        <ion-label>Qualification Type</ion-label>\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n\r\n<!-- <ion-footer style=\"margin-left:20px;margin-bottom: 10px;\">\r\n  Bester Strength and Conditioning | info@besterstrengthandconditioning.co.za\r\n  <br>\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee_employee_module_ts.js.map