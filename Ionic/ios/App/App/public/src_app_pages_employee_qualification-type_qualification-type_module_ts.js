"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_employee_qualification-type_qualification-type_module_ts"],{

/***/ 7769:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/qualification-type-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationTypePageRoutingModule": () => (/* binding */ QualificationTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _qualification_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qualification-type.page */ 6911);




const routes = [
    {
        path: '',
        component: _qualification_type_page__WEBPACK_IMPORTED_MODULE_0__.QualificationTypePage
    }
];
let QualificationTypePageRoutingModule = class QualificationTypePageRoutingModule {
};
QualificationTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QualificationTypePageRoutingModule);



/***/ }),

/***/ 9915:
/*!********************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/qualification-type.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationTypePageModule": () => (/* binding */ QualificationTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _qualification_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qualification-type-routing.module */ 7769);
/* harmony import */ var _qualification_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qualification-type.page */ 6911);







let QualificationTypePageModule = class QualificationTypePageModule {
};
QualificationTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _qualification_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.QualificationTypePageRoutingModule
        ],
        declarations: [_qualification_type_page__WEBPACK_IMPORTED_MODULE_1__.QualificationTypePage]
    })
], QualificationTypePageModule);



/***/ }),

/***/ 6911:
/*!******************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/qualification-type.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationTypePage": () => (/* binding */ QualificationTypePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _qualification_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qualification-type.page.html?ngResource */ 6080);
/* harmony import */ var _qualification_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qualification-type.page.scss?ngResource */ 696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let QualificationTypePage = class QualificationTypePage {
    constructor() { }
    ngOnInit() {
    }
};
QualificationTypePage.ctorParameters = () => [];
QualificationTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-qualification-type',
        template: _qualification_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_qualification_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QualificationTypePage);



/***/ }),

/***/ 696:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/qualification-type.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWFsaWZpY2F0aW9uLXR5cGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6080:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/qualification-type.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>qualification-type</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee_qualification-type_qualification-type_module_ts.js.map