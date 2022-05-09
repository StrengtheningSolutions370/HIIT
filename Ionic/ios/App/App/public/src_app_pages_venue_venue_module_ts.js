"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_venue_venue_module_ts"],{

/***/ 2740:
/*!*****************************************************!*\
  !*** ./src/app/pages/venue/venue-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenuePageRoutingModule": () => (/* binding */ VenuePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _venue_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venue.page */ 9694);




const routes = [
    {
        path: '',
        component: _venue_page__WEBPACK_IMPORTED_MODULE_0__.VenuePage
    }
];
let VenuePageRoutingModule = class VenuePageRoutingModule {
};
VenuePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VenuePageRoutingModule);



/***/ }),

/***/ 1126:
/*!*********************************************!*\
  !*** ./src/app/pages/venue/venue.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenuePageModule": () => (/* binding */ VenuePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _venue_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venue-routing.module */ 2740);
/* harmony import */ var _venue_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venue.page */ 9694);
/* harmony import */ var src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/header/header.component */ 3646);








let VenuePageModule = class VenuePageModule {
};
VenuePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _venue_routing_module__WEBPACK_IMPORTED_MODULE_0__.VenuePageRoutingModule
        ],
        declarations: [_venue_page__WEBPACK_IMPORTED_MODULE_1__.VenuePage, src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
    })
], VenuePageModule);



/***/ }),

/***/ 9694:
/*!*******************************************!*\
  !*** ./src/app/pages/venue/venue.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenuePage": () => (/* binding */ VenuePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _venue_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venue.page.html?ngResource */ 6142);
/* harmony import */ var _venue_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venue.page.scss?ngResource */ 8016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/venue/venue.service */ 9401);





let VenuePage = class VenuePage {
    constructor(venueService) {
        this.venueService = venueService;
    }
    ionViewWillEnter() {
    }
};
VenuePage.ctorParameters = () => [
    { type: src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__.VenueService }
];
VenuePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-venue',
        template: _venue_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_venue_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VenuePage);



/***/ }),

/***/ 8016:
/*!********************************************************!*\
  !*** ./src/app/pages/venue/venue.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  margin-left: 30%;\n  margin-right: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJ2ZW51ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6MzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjMwJVxyXG59Il19 */";

/***/ }),

/***/ 6142:
/*!********************************************************!*\
  !*** ./src/app/pages/venue/venue.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<app-header></app-header>\r\n\r\n<ion-content>\r\n  <br>\r\n  <!--Searchbar (must make function to search)-->\r\n  <ion-searchbar showCancelButton=\"focus\" expand=\"block\" placeholder='Search Venue'\r\n  animated=\"true\"\r\n  debounce=\"800\"\r\n  #searchInput></ion-searchbar>\r\n  <br/>\r\n\r\n  <div class=\"ion-text-center\">\r\n    <ion-button color=\"success\" (click)=\"venueService.addVenueInfoModal()\">\r\n      Add Venue\r\n      <ion-icon name=\"add\" size=\"medium\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <br/>\r\n  <ion-grid *ngIf=\"venueService.getVenues().length > 0\">\r\n    <ion-list *ngFor=\"let venue of venueService.getVenues(), let i = index\"> \r\n      <ion-item-sliding >\r\n        <ion-item button (click)=\"venueService.viewVenueInfoModal(venue)\">\r\n          <ion-label>\r\n            <h1>{{venue.VENUE_NAME}}</h1> <br/>\r\n            <p>\r\n              Location:  {{venue.VENUE_ADDRESS}}<br/>\r\n              Postal Code: {{venue.VENUE_POSTAL_CODE}} <br/>\r\n              Capacity: {{venue.VENUE_CAPACITY}} \r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\" >\r\n          <ion-item-option color=\"secondary\" (click)=\"venueService.updateVenueInfoModal(venue)\"><ion-icon name=\"refresh\"></ion-icon> Update </ion-item-option>\r\n          <ion-item-option color=\"danger\" (click)=\"venueService.deleteVenueInfoModal(venue)\"><ion-icon name=\"trash\" size=\"medium\"></ion-icon> Delete </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n    </ion-grid>\r\n  \r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_venue_venue_module_ts.js.map