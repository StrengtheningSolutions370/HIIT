"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sale_sale_module_ts"],{

/***/ 61614:
/*!***************************************************!*\
  !*** ./src/app/pages/sale/sale-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalePageRoutingModule": () => (/* binding */ SalePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sale_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale.page */ 812);




const routes = [
    {
        path: 'tabs',
        component: _sale_page__WEBPACK_IMPORTED_MODULE_0__.SalePage,
        children: [
            {
                path: 'sale-item',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sale_sale-item_sale-item_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sale-item/sale-item.module */ 47309)).then(m => m.SaleItemPageModule)
            },
            {
                path: 'sale-category',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sale_sale-category_sale-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sale-category/sale-category.module */ 23007)).then(m => m.SaleCategoryPageModule)
            },
            {
                path: 'vat',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sale_vat_vat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vat/vat.module */ 61047)).then(m => m.VATPageModule)
            },
            {
                path: 'refund-reason',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sale_refund-reason_refund-reason_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./refund-reason/refund-reason.module */ 7227)).then(m => m.RefundReasonPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/sale-item',
        pathMatch: 'full'
    }
];
let SalePageRoutingModule = class SalePageRoutingModule {
};
SalePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SalePageRoutingModule);



/***/ }),

/***/ 72128:
/*!*******************************************!*\
  !*** ./src/app/pages/sale/sale.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalePageModule": () => (/* binding */ SalePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sale_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale-routing.module */ 61614);
/* harmony import */ var _sale_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale.page */ 812);







let SalePageModule = class SalePageModule {
};
SalePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sale_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalePageRoutingModule
        ],
        declarations: [_sale_page__WEBPACK_IMPORTED_MODULE_1__.SalePage]
    })
], SalePageModule);



/***/ }),

/***/ 812:
/*!*****************************************!*\
  !*** ./src/app/pages/sale/sale.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalePage": () => (/* binding */ SalePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sale_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale.page.html?ngResource */ 19808);
/* harmony import */ var _sale_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale.page.scss?ngResource */ 34530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SalePage = class SalePage {
    constructor() { }
    ngOnInit() {
    }
};
SalePage.ctorParameters = () => [];
SalePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sale',
        template: _sale_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sale_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SalePage);



/***/ }),

/***/ 34530:
/*!******************************************************!*\
  !*** ./src/app/pages/sale/sale.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 19808:
/*!******************************************************!*\
  !*** ./src/app/pages/sale/sale.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <!--Menu toggle button that will display the menu-->\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button menu=\"mainMenu\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title slot=\"\">Sales</ion-title>\r\n      <img src=\"../../assets/BSC.png\" width=\"80px\" height=\"80px\" alt=\"logo\" slot=\"end\">\r\n      <!--Can we change this dynamically when switching between tabs?-->\r\n    <!-- </ion-item> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"top\" style=\"color: #E0E0E0;\">\r\n      <ion-tab-button tab=\"sale-item\">\r\n        <ion-label>Sale Item</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"sale-category\">\r\n        <ion-label>Sale Category</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"refund-reason\">\r\n        <ion-label>Refund Reason</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"vat\">\r\n        <ion-label>VAT</ion-label>\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n\r\n</ion-content>\r\n<!-- <ion-footer style=\"margin-left:20px;margin-bottom: 10px;\">\r\n  Bester Strength and Conditioning | info@besterstrengthandconditioning.co.za\r\n  <br>\r\n</ion-footer> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sale_sale_module_ts.js.map