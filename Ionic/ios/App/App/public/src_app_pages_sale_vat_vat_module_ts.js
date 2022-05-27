"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sale_vat_vat_module_ts"],{

/***/ 65017:
/*!******************************************************!*\
  !*** ./src/app/pages/sale/vat/vat-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VATPageRoutingModule": () => (/* binding */ VATPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _vat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vat.page */ 2622);




const routes = [
    {
        path: '',
        component: _vat_page__WEBPACK_IMPORTED_MODULE_0__.VATPage
    }
];
let VATPageRoutingModule = class VATPageRoutingModule {
};
VATPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VATPageRoutingModule);



/***/ }),

/***/ 61047:
/*!**********************************************!*\
  !*** ./src/app/pages/sale/vat/vat.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VATPageModule": () => (/* binding */ VATPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _vat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vat-routing.module */ 65017);
/* harmony import */ var _vat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vat.page */ 2622);







let VATPageModule = class VATPageModule {
};
VATPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vat_routing_module__WEBPACK_IMPORTED_MODULE_0__.VATPageRoutingModule
        ],
        declarations: [_vat_page__WEBPACK_IMPORTED_MODULE_1__.VATPage]
    })
], VATPageModule);



/***/ }),

/***/ 2622:
/*!********************************************!*\
  !*** ./src/app/pages/sale/vat/vat.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VATPage": () => (/* binding */ VATPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vat.page.html?ngResource */ 49930);
/* harmony import */ var _vat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vat.page.scss?ngResource */ 66517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let VATPage = class VATPage {
    constructor() {
        this.vats = [
            { percentage: '10%',
                year: '1991' },
            { percentage: '14%',
                year: '1993' },
            { percentage: '15%',
                year: '2018' }
        ];
    }
};
VATPage.ctorParameters = () => [];
VATPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-vat',
        template: _vat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VATPage);



/***/ }),

/***/ 66517:
/*!*********************************************************!*\
  !*** ./src/app/pages/sale/vat/vat.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-searchbar {\n  --background: white;\n  --color: #221f1f;\n  --clear-button-color: #ff5b71;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nion-card {\n  background-color: white;\n  border-radius: 50px;\n}\n\nion-button {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSiIsImZpbGUiOiJ2YXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgIG1hcmdpbi1yaWdodDozMCVcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhcntcclxuICAgIC0tYmFja2dyb3VuZCA6IHdoaXRlO1xyXG4gICAgLS1jb2xvcjogIzIyMWYxZjtcclxuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yIDogI2ZmNWI3MTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcblxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDEwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 49930:
/*!*********************************************************!*\
  !*** ./src/app/pages/sale/vat/vat.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content>\r\n\r\n    <br/>\r\n    <!--Searchbar (must make function to search)-->\r\n    <ion-searchbar expand=\"block\" placeholder='Search VAT...'></ion-searchbar>\r\n    <br/><br/>\r\n  \r\n    <div class=\"ion-text-center\">\r\n      <!-- (click)=\"addVATModal()\" -->\r\n      <ion-button color=\"success\" style=\"margin-left:30%;margin-right:30%\" > \r\n        Add VAT\r\n        <ion-icon name=\"add\" size=\"medium\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n    <br/>\r\n  \r\n    <ion-grid *ngFor=\"let vat of vats\">\r\n      <ion-list > \r\n        <ion-item-sliding >\r\n          <!-- (click)=\"viewVATModal()\" -->\r\n          <ion-item button  >\r\n            <ion-icon name=\"calculator-outline\" size=\"large\" style=\"padding-left:5%\"></ion-icon>\r\n            <ion-label style=\"padding-left:2% ;\">\r\n              <h1>{{vat.percentage}}</h1>\r\n              <p style=\"font-size:large\">Creation Date :  {{vat.year}}</p>\r\n            </ion-label >\r\n            <ion-icon name=\"chevron-back-outline\" size=\"small\"></ion-icon>\r\n          </ion-item>\r\n          <ion-item-options side=\"end\" >\r\n            <!-- (click)=\"updateVATModal()\" -->\r\n            <ion-item-option color=\"secondary\" >Update<ion-icon name=\"refresh\" size=\"large\"></ion-icon></ion-item-option>\r\n            <!-- (click)=\"deleteVATModal()\" -->\r\n            <ion-item-option color=\"danger\" >Delete<ion-icon name=\"trash\" size=\"large\"></ion-icon></ion-item-option>\r\n          </ion-item-options>\r\n        </ion-item-sliding>\r\n      </ion-list>\r\n    </ion-grid>\r\n\r\n    <div style=\"width:40%;margin-left:30%;margin-right: 30%;\" class=\"ion-text-center\">\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <img src=\"../../assets/NoSearch.png\" style=\"width: 40%;\">\r\n          <h1><strong>Sorry! No Results Found :( </strong></h1>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <br/>\r\n          <h3>Your search for \" \" did not return any results.</h3>\r\n          <h3>Please check your spelling or try a different search criteria. </h3>\r\n          <br/>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n\r\n  </ion-content>\r\n  \r\n  \r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sale_vat_vat_module_ts.js.map