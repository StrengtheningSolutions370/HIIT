"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user_user_module_ts"],{

/***/ 78873:
/*!***************************************************!*\
  !*** ./src/app/pages/user/user-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageRoutingModule": () => (/* binding */ UserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page */ 87449);




const routes = [
    {
        path: 'tabs',
        component: _user_page__WEBPACK_IMPORTED_MODULE_0__.UserPage,
        children: [
            {
                path: 'user-roles',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_user_user-roles_user-roles_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./user-roles/user-roles.module */ 30722)).then(m => m.UserRolesPageModule)
            },
            {
                path: 'titles',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_user_titles_titles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./titles/titles.module */ 31186)).then(m => m.TitlesPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/user-roles',
        pathMatch: 'full'
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserPageRoutingModule);



/***/ }),

/***/ 99321:
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageModule": () => (/* binding */ UserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 78873);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page */ 87449);







let UserPageModule = class UserPageModule {
};
UserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_1__.UserPage]
    })
], UserPageModule);



/***/ }),

/***/ 87449:
/*!*****************************************!*\
  !*** ./src/app/pages/user/user.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPage": () => (/* binding */ UserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page.html?ngResource */ 3407);
/* harmony import */ var _user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page.scss?ngResource */ 94667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let UserPage = class UserPage {
    constructor() { }
    ngOnInit() {
    }
};
UserPage.ctorParameters = () => [];
UserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-user',
        template: _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserPage);



/***/ }),

/***/ 94667:
/*!******************************************************!*\
  !*** ./src/app/pages/user/user.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3407:
/*!******************************************************!*\
  !*** ./src/app/pages/user/user.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <!--Menu toggle button that will display the menu-->\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button menu=\"mainMenu\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title slot=\"\">User Information</ion-title>\r\n      <img src=\"../../assets/BSC.png\" width=\"80px\" height=\"80px\" alt=\"logo\" slot=\"end\">\r\n      <!--Can we change this dynamically when switching between tabs?-->\r\n    <!-- </ion-item> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"top\" style=\"color: #E0E0E0;\">\r\n      <ion-tab-button tab=\"user-roles\">\r\n        <ion-label>User Roles</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"titles\">\r\n        <ion-label>Titles</ion-label>\r\n      </ion-tab-button>\r\n     \r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user_user_module_ts.js.map