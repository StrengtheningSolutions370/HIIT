"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user_user-roles_user-roles_module_ts"],{

/***/ 16734:
/*!********************************************************************!*\
  !*** ./src/app/pages/user/user-roles/user-roles-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRolesPageRoutingModule": () => (/* binding */ UserRolesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _user_roles_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-roles.page */ 61229);




const routes = [
    {
        path: '',
        component: _user_roles_page__WEBPACK_IMPORTED_MODULE_0__.UserRolesPage
    }
];
let UserRolesPageRoutingModule = class UserRolesPageRoutingModule {
};
UserRolesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserRolesPageRoutingModule);



/***/ }),

/***/ 30722:
/*!************************************************************!*\
  !*** ./src/app/pages/user/user-roles/user-roles.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRolesPageModule": () => (/* binding */ UserRolesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _user_roles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-roles-routing.module */ 16734);
/* harmony import */ var _user_roles_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-roles.page */ 61229);







let UserRolesPageModule = class UserRolesPageModule {
};
UserRolesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_roles_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRolesPageRoutingModule
        ],
        declarations: [_user_roles_page__WEBPACK_IMPORTED_MODULE_1__.UserRolesPage]
    })
], UserRolesPageModule);



/***/ }),

/***/ 61229:
/*!**********************************************************!*\
  !*** ./src/app/pages/user/user-roles/user-roles.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRolesPage": () => (/* binding */ UserRolesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_roles_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-roles.page.html?ngResource */ 62058);
/* harmony import */ var _user_roles_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-roles.page.scss?ngResource */ 54901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/repo.service */ 56181);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);






let UserRolesPage = class UserRolesPage {
    constructor(userService, repo) {
        this.userService = userService;
        this.repo = repo;
        //Create local venue array to be populated onInit.
        this.userRoleList = [];
        this.isLoading = true;
    }
    ngOnInit() {
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //Populate the venue list within the venue page, with the venue list from the venue service.
            this.userRoleSub = this.userService.userRoleList.subscribe(results => {
                this.userRoleList = results;
                console.log('User Role Page Init -> User Role List');
                console.log(this.userRoleList);
            });
        }));
        this.getUserRoles();
    }
    //Receive venues from the repo in local page.
    getUserRoles() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.isLoading = false;
                yield this.repo.getUserRoles();
                console.log('User Role Page -> Get User Roles');
                console.log(this.userRoleList);
            }), 1500);
        });
    }
};
UserRolesPage.ctorParameters = () => [
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_repo_service__WEBPACK_IMPORTED_MODULE_2__.RepoService }
];
UserRolesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-roles',
        template: _user_roles_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_roles_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserRolesPage);



/***/ }),

/***/ 54901:
/*!***********************************************************************!*\
  !*** ./src/app/pages/user/user-roles/user-roles.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-searchbar {\n  --background: white;\n  --color: #221f1f;\n  --clear-button-color: #ff5b71;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nion-card {\n  background-color: white;\n  border-radius: 50px;\n}\n\nion-button {\n  border-radius: 10px;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\np {\n  font-size: large;\n}\n\nion-icon {\n  padding-left: 5%;\n}\n\nion-label {\n  padding-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcm9sZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKIiwiZmlsZSI6InVzZXItcm9sZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgIG1hcmdpbi1yaWdodDozMCVcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhcntcclxuICAgIC0tYmFja2dyb3VuZCA6IHdoaXRlO1xyXG4gICAgLS1jb2xvcjogIzIyMWYxZjtcclxuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yIDogI2ZmNWI3MTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcblxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDozMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MzAlO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctbGVmdDo1JTtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgcGFkZGluZy1sZWZ0OjIlO1xyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 62058:
/*!***********************************************************************!*\
  !*** ./src/app/pages/user/user-roles/user-roles.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <!--Searchbar (must make function to search)-->\r\n  <ion-searchbar expand=\"block\" placeholder='Search User Roles'></ion-searchbar>\r\n\r\n  <div class=\"ion-text-center\">\r\n    <ion-button color=\"success\" (click)=\"userService.addUserRoleInfoModal()\">\r\n      Add User Role\r\n    </ion-button>\r\n  </div>\r\n \r\n  <ion-grid *ngFor=\"let user of userRoleList\">\r\n    <ion-list > \r\n      <ion-item-sliding>\r\n        <ion-item button> <!--(click)=\"\"-->\r\n          <ion-icon name=\"list-outline\" size=\"large\"></ion-icon>\r\n          <ion-label>\r\n            <!--User Role Name-->\r\n            <h1>{{user.name}}</h1> \r\n            <p>\r\n              <!--User Roles Description-->\r\n              {{user.description}}<br/>\r\n            </p>\r\n          </ion-label>\r\n          <ion-icon name=\"chevron-back-outline\" size=\"small\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\" >\r\n          <ion-item-option color=\"secondary\">Update<ion-icon name=\"refresh\" size=\"large\"></ion-icon></ion-item-option> <!--(click)=\"\"-->\r\n          <ion-item-option color=\"danger\" >Delete<ion-icon name=\"trash\" size=\"large\"></ion-icon></ion-item-option> <!--(click)=\"\"-->\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </ion-grid>\r\n  <br>\r\n  \r\n  <div class=\"ion-text-center \" *ngIf=\"isLoading\">\r\n    <ion-spinner name=\"circles\"></ion-spinner>\r\n  </div>\r\n\r\n  <!-- <div style=\"width:40%;margin-left:30%;margin-right: 30%;\" class=\"ion-text-center\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <img src=\"../../assets/NoSearch.png\" style=\"width: 40%;\">\r\n        <h1><strong>Sorry! No Results Found :( </strong></h1>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <br/>\r\n        <h3>Your search for \" \" did not return any results.</h3>\r\n        <h3>Please check your spelling or try a different search criteria. </h3>\r\n        <br/>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div> -->\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user_user-roles_user-roles_module_ts.js.map