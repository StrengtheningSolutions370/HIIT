"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_members_members_module_ts"],{

/***/ 21880:
/*!*********************************************************!*\
  !*** ./src/app/pages/members/members-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersPageRoutingModule": () => (/* binding */ MembersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _members_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./members.page */ 29762);




const routes = [
    {
        path: '',
        component: _members_page__WEBPACK_IMPORTED_MODULE_0__.MembersPage
    }
];
let MembersPageRoutingModule = class MembersPageRoutingModule {
};
MembersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MembersPageRoutingModule);



/***/ }),

/***/ 68309:
/*!*************************************************!*\
  !*** ./src/app/pages/members/members.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersPageModule": () => (/* binding */ MembersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _members_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./members-routing.module */ 21880);
/* harmony import */ var _members_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members.page */ 29762);







let MembersPageModule = class MembersPageModule {
};
MembersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _members_routing_module__WEBPACK_IMPORTED_MODULE_0__.MembersPageRoutingModule
        ],
        declarations: [_members_page__WEBPACK_IMPORTED_MODULE_1__.MembersPage]
    })
], MembersPageModule);



/***/ }),

/***/ 29762:
/*!***********************************************!*\
  !*** ./src/app/pages/members/members.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersPage": () => (/* binding */ MembersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _members_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./members.page.html?ngResource */ 89085);
/* harmony import */ var _members_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members.page.scss?ngResource */ 11039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MembersPage = class MembersPage {
    constructor() { }
    ngOnInit() {
    }
};
MembersPage.ctorParameters = () => [];
MembersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-members',
        template: _members_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_members_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MembersPage);



/***/ }),

/***/ 11039:
/*!************************************************************!*\
  !*** ./src/app/pages/members/members.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 89085:
/*!************************************************************!*\
  !*** ./src/app/pages/members/members.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <!--Menu toggle button that will display the menu-->\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button menu=\"mainMenu\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title slot=\"\">Members</ion-title>\r\n      <img src=\"../../assets/BSC.png\" width=\"80px\" height=\"80px\" alt=\"logo\" slot=\"end\">\r\n      <!--Can we change this dynamically when switching between tabs?-->\r\n    <!-- </ion-item> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<!-- </ion-content>\r\n<ion-footer style=\"margin-left:20px;margin-bottom: 10px;\">\r\n  Bester Strength and Conditioning | info@besterstrengthandconditioning.co.za\r\n  <br>\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_members_members_module_ts.js.map