"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_signup_signup_module_ts"],{

/***/ 35975:
/*!*************************************************************!*\
  !*** ./src/app/pages/login/signup/signup-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 93649);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 19415:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/signup/signup.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 35975);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 93649);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 93649:
/*!***************************************************!*\
  !*** ./src/app/pages/login/signup/signup.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 40982);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 15000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SignupPage = class SignupPage {
    constructor() {
        this.isLoading = false;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        // this.register(form)
    }
};
SignupPage.ctorParameters = () => [];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 15000:
/*!****************************************************************!*\
  !*** ./src/app/pages/login/signup/signup.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-avatar {\n  height: 30vh;\n  width: 30vw;\n  align-self: center;\n}\nion-avatar ion-img {\n  height: 100%;\n  width: 100%;\n}\nion-item {\n  --background: white;\n  --color: #363636;\n}\nion-button {\n  --background: #4570e9;\n  --color: white;\n}\nion-card {\n  --background: #202020;\n  --color: white;\n  padding-bottom: 40PX;\n  padding-top: 40PX;\n  box-sizing: border-box;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  margin-left: 30%;\n  margin-right: 30%;\n  margin-top: 5%;\n}\nh1 {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  margin: 0 0 35px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRVI7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVBO0VBQ0ksZ0VBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyIHtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgaW9uLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1jb2xvcjogIzM2MzYzNjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzQ1NzBlOTtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIC0tYmFja2dyb3VuZDogIzIwMjAyMDtcclxuICAgIC0tY29sb3I6IHdoaXRlOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MFBYO1xyXG4gICAgcGFkZGluZy10b3A6IDQwUFg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC1mYW1pbHk6IENhYmluLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMCAwIDM1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgIl19 */";

/***/ }),

/***/ 40982:
/*!****************************************************************!*\
  !*** ./src/app/pages/login/signup/signup.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row justify-content-center>\r\n      <ion-col width=\"200px\">\r\n        <ion-card class=\"centerLogin\" >\r\n          <ion-card-content>\r\n            <div class=\"ion-text-center\">\r\n              <h1 style=\"font-family: inherit; border:1px\">REGISTER</h1>\r\n            </div>\r\n            <br/>\r\n\r\n            <form #regForm=\"ngForm\" (ngSubmit)=\"onSubmit(regForm)\">\r\n              <div padding>\r\n                <ion-item>\r\n                  <ion-icon name=\"person\" slot=\"start\" color=\"#282828\"></ion-icon>\r\n                  <ion-input \r\n                  type=\"text\" \r\n                  name=\"firstName\" \r\n                  ngModel \r\n                  #firstName=\"ngModel\" \r\n                  placeholder=\"First Name\" \r\n                  required ></ion-input>\r\n                </ion-item>\r\n                <ion-text color=\"danger\" *ngIf=\"!lastName.valid && lastName.touched\">\r\n                  <p>Please enter your first name.</p>\r\n                </ion-text>\r\n                <ion-item>\r\n                  <ion-icon name=\"contact\" slot=\"start\" color=\"#282828\"></ion-icon>\r\n                  <ion-input \r\n                  type=\"text\" \r\n                  name=\"lastName\" \r\n                  ngModel \r\n                  #lastName=\"ngModel\" \r\n                  placeholder=\"Last Name\" \r\n                  required ></ion-input>\r\n                </ion-item>\r\n                <ion-text color=\"danger\" *ngIf=\"!lastName.valid && lastName.touched\">\r\n                  <p>Please enter your last name.</p>\r\n                </ion-text>\r\n                <ion-item>\r\n                  <ion-icon name=\"call\" slot=\"start\" color=\"#282828\"></ion-icon>\r\n                  <ion-input \r\n                  type=\"tel\" \r\n                  name=\"phone\" \r\n                  ngModel \r\n                  #phone=\"ngModel\" \r\n                  placeholder=\"Phone number\" \r\n                  required \r\n                  minlength=\"10\"\r\n                  maxlength=\"10\"></ion-input>\r\n                </ion-item>\r\n                <ion-text color=\"danger\" *ngIf=\"!phone.valid && phone.touched\">\r\n                  <p>Please enter a valid phone number.</p>\r\n                </ion-text>\r\n                <ion-item>\r\n                  <ion-icon name=\"mail\" slot=\"start\" color=\"#282828\"></ion-icon>\r\n                  <ion-input \r\n                  type=\"email\" \r\n                  name=\"mail\" \r\n                  ngModel email \r\n                  #emailCtrl=\"ngModel\" \r\n                  placeholder=\"Email\" \r\n                  required ></ion-input>\r\n                </ion-item>\r\n                <ion-text color=\"danger\" *ngIf=\"!emailCtrl.valid && emailCtrl.touched\">\r\n                  <p>Please enter a valid email address</p>\r\n                </ion-text>\r\n                <ion-item>\r\n                  <ion-icon name=\"key\" slot=\"start\" color=\"#282828\"></ion-icon>\r\n                  <ion-input \r\n                  type=\"password\" \r\n                  name=\"password\" \r\n                  ngModel \r\n                  #passCtrl=\"ngModel\" \r\n                  placeholder=\"Password\" \r\n                  required \r\n                  minlength=\"8\"></ion-input>\r\n                </ion-item>\r\n                <ion-text color=\"danger\" *ngIf=\"!passCtrl.valid && passCtrl.touched\">\r\n                  <p>Password should be minimum of 8 characters</p>\r\n                </ion-text>\r\n                <div>\r\n                  <ion-item>\r\n                    <ion-icon name=\"key\" slot=\"start\" color=\"#282828\"></ion-icon>\r\n                    <ion-input \r\n                    type=\"text\" \r\n                    name=\"c_pass\" \r\n                    ngModel \r\n                    #c_passCtrl=\"ngModel\" \r\n                    placeholder=\"Confirm Password\" \r\n                    required \r\n                    minlength=\"8\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\" *ngIf=\"!c_passCtrl.valid && c_passCtrl.touched\">\r\n                    <p>Confirm Password should be minimum of 8 characters</p>\r\n                  </ion-text>\r\n                  <ion-text color=\"danger\" *ngIf=\"c_passCtrl.valid && c_passCtrl.value !== passCtrl.value\">\r\n                    <p>Password mismatch. You have entered passwords that do not match.</p>\r\n                  </ion-text>\r\n                <br/>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <br/>\r\n                <ion-button [disabled]=\"!regForm.valid || (c_passCtrl.value !== passCtrl.value)\" *ngIf=\"!isLoading\" expand=\"block\" shape=\"round\" type=\"submit\">Create Account</ion-button>\r\n                <div class=\"ion-text-center\" *ngIf=\"isLoading\">\r\n                  <ion-button shape=\"round\">\r\n                    <ion-spinner name=\"circles\"></ion-spinner>\r\n                  </ion-button>   \r\n                </div> \r\n              </div>  \r\n            </form>\r\n            <b><a routerLink=\"/login\"><p style=\"color:#717274\">Cancel</p></a></b>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_signup_signup_module_ts.js.map