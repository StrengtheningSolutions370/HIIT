"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_employee_qualification_qualification_module_ts"],{

/***/ 2335:
/*!******************************************************************************!*\
  !*** ./src/app/pages/employee/qualification/qualification-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationPageRoutingModule": () => (/* binding */ QualificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _qualification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qualification.page */ 9073);




const routes = [
    {
        path: '',
        component: _qualification_page__WEBPACK_IMPORTED_MODULE_0__.QualificationPage
    }
];
let QualificationPageRoutingModule = class QualificationPageRoutingModule {
};
QualificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QualificationPageRoutingModule);



/***/ }),

/***/ 9644:
/*!**********************************************************************!*\
  !*** ./src/app/pages/employee/qualification/qualification.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationPageModule": () => (/* binding */ QualificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _qualification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qualification-routing.module */ 2335);
/* harmony import */ var _qualification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qualification.page */ 9073);







let QualificationPageModule = class QualificationPageModule {
};
QualificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _qualification_routing_module__WEBPACK_IMPORTED_MODULE_0__.QualificationPageRoutingModule
        ],
        declarations: [_qualification_page__WEBPACK_IMPORTED_MODULE_1__.QualificationPage]
    })
], QualificationPageModule);



/***/ }),

/***/ 9073:
/*!********************************************************************!*\
  !*** ./src/app/pages/employee/qualification/qualification.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationPage": () => (/* binding */ QualificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _qualification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qualification.page.html?ngResource */ 5213);
/* harmony import */ var _qualification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qualification.page.scss?ngResource */ 7692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let QualificationPage = class QualificationPage {
    constructor() { }
    ngOnInit() {
    }
};
QualificationPage.ctorParameters = () => [];
QualificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-qualification',
        template: _qualification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_qualification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QualificationPage);



/***/ }),

/***/ 7692:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/qualification/qualification.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWFsaWZpY2F0aW9uLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5213:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/qualification/qualification.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>qualification</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee_qualification_qualification_module_ts.js.map