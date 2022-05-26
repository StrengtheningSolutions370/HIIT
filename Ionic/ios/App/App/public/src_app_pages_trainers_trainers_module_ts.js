"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_trainers_trainers_module_ts"],{

/***/ 66152:
/*!***********************************************************!*\
  !*** ./src/app/pages/trainers/trainers-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainersPageRoutingModule": () => (/* binding */ TrainersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _trainers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainers.page */ 76666);




const routes = [
    {
        path: '',
        component: _trainers_page__WEBPACK_IMPORTED_MODULE_0__.TrainersPage
    }
];
let TrainersPageRoutingModule = class TrainersPageRoutingModule {
};
TrainersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrainersPageRoutingModule);



/***/ }),

/***/ 6968:
/*!***************************************************!*\
  !*** ./src/app/pages/trainers/trainers.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainersPageModule": () => (/* binding */ TrainersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _trainers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainers-routing.module */ 66152);
/* harmony import */ var _trainers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainers.page */ 76666);







let TrainersPageModule = class TrainersPageModule {
};
TrainersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _trainers_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainersPageRoutingModule
        ],
        declarations: [_trainers_page__WEBPACK_IMPORTED_MODULE_1__.TrainersPage]
    })
], TrainersPageModule);



/***/ }),

/***/ 76666:
/*!*************************************************!*\
  !*** ./src/app/pages/trainers/trainers.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainersPage": () => (/* binding */ TrainersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _trainers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainers.page.html?ngResource */ 36131);
/* harmony import */ var _trainers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainers.page.scss?ngResource */ 20546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TrainersPage = class TrainersPage {
    constructor() { }
    ngOnInit() {
    }
};
TrainersPage.ctorParameters = () => [];
TrainersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-trainers',
        template: _trainers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_trainers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrainersPage);



/***/ }),

/***/ 20546:
/*!**************************************************************!*\
  !*** ./src/app/pages/trainers/trainers.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmVycy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 36131:
/*!**************************************************************!*\
  !*** ./src/app/pages/trainers/trainers.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <!--Menu toggle button that will display the menu-->\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button menu=\"mainMenu\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title slot=\"\">Trainers</ion-title>\r\n      <img src=\"../../assets/BSC.png\" width=\"80px\" height=\"80px\" alt=\"logo\" slot=\"end\">\r\n      <!--Can we change this dynamically when switching between tabs?-->\r\n    <!-- </ion-item> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_trainers_trainers_module_ts.js.map