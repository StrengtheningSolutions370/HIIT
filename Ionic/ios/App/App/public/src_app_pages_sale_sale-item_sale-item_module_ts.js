"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sale_sale-item_sale-item_module_ts"],{

/***/ 83518:
/*!******************************************************************!*\
  !*** ./src/app/pages/sale/sale-item/sale-item-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleItemPageRoutingModule": () => (/* binding */ SaleItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sale_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale-item.page */ 46378);




const routes = [
    {
        path: '',
        component: _sale_item_page__WEBPACK_IMPORTED_MODULE_0__.SaleItemPage
    }
];
let SaleItemPageRoutingModule = class SaleItemPageRoutingModule {
};
SaleItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SaleItemPageRoutingModule);



/***/ }),

/***/ 47309:
/*!**********************************************************!*\
  !*** ./src/app/pages/sale/sale-item/sale-item.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleItemPageModule": () => (/* binding */ SaleItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sale_item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale-item-routing.module */ 83518);
/* harmony import */ var _sale_item_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale-item.page */ 46378);







let SaleItemPageModule = class SaleItemPageModule {
};
SaleItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sale_item_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaleItemPageRoutingModule
        ],
        declarations: [_sale_item_page__WEBPACK_IMPORTED_MODULE_1__.SaleItemPage]
    })
], SaleItemPageModule);



/***/ }),

/***/ 46378:
/*!********************************************************!*\
  !*** ./src/app/pages/sale/sale-item/sale-item.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleItemPage": () => (/* binding */ SaleItemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sale_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale-item.page.html?ngResource */ 9772);
/* harmony import */ var _sale_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale-item.page.scss?ngResource */ 91679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SaleItemPage = class SaleItemPage {
    constructor() { }
    ngOnInit() {
    }
};
SaleItemPage.ctorParameters = () => [];
SaleItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sale-item',
        template: _sale_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sale_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SaleItemPage);



/***/ }),

/***/ 91679:
/*!*********************************************************************!*\
  !*** ./src/app/pages/sale/sale-item/sale-item.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-searchbar {\n  --background: white;\n  --color: #221f1f;\n  --clear-button-color: #ff5b71;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGUtaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InNhbGUtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6MzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjMwJVxyXG59XHJcblxyXG5pb24tc2VhcmNoYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kIDogd2hpdGU7XHJcbiAgICAtLWNvbG9yOiAjMjIxZjFmO1xyXG4gICAgLS1jbGVhci1idXR0b24tY29sb3IgOiAjZmY1YjcxO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuXHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9772:
/*!*********************************************************************!*\
  !*** ./src/app/pages/sale/sale-item/sale-item.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n    <br/>\r\n    <!--Searchbar (must make function to search)-->\r\n    <ion-searchbar expand=\"block\" placeholder='Search Sale Items...'></ion-searchbar>\r\n    <br/><br/>\r\n  \r\n    <div class=\"ion-text-center\">\r\n      <!-- (click)=\"addVATModal()\" -->\r\n      <ion-button color=\"success\" style=\"margin-left:30%;margin-right:30%\" > \r\n        Add Sale Item\r\n        <ion-icon name=\"add\" size=\"medium\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n    <br/>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sale_sale-item_sale-item_module_ts.js.map