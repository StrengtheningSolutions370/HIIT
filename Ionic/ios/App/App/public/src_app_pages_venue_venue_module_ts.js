"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_venue_venue_module_ts"],{

/***/ 22740:
/*!*****************************************************!*\
  !*** ./src/app/pages/venue/venue-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenuePageRoutingModule": () => (/* binding */ VenuePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _venue_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venue.page */ 89694);




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

/***/ 81126:
/*!*********************************************!*\
  !*** ./src/app/pages/venue/venue.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenuePageModule": () => (/* binding */ VenuePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _venue_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venue-routing.module */ 22740);
/* harmony import */ var _venue_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./venue.page */ 89694);








//import { HeaderComponent } from 'src/app/components/header/header.component';
let VenuePageModule = class VenuePageModule {
};
VenuePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _venue_routing_module__WEBPACK_IMPORTED_MODULE_1__.VenuePageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule
        ],
        declarations: [_venue_page__WEBPACK_IMPORTED_MODULE_2__.VenuePage] //, HeaderComponent]
    })
], VenuePageModule);



/***/ }),

/***/ 89694:
/*!*******************************************!*\
  !*** ./src/app/pages/venue/venue.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenuePage": () => (/* binding */ VenuePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _venue_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venue.page.html?ngResource */ 76142);
/* harmony import */ var _venue_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venue.page.scss?ngResource */ 18016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/repo.service */ 56181);
/* harmony import */ var src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/venue/venue.service */ 29401);






let VenuePage = class VenuePage {
    constructor(venueService, repo) {
        this.venueService = venueService;
        this.repo = repo;
        //Create local venue array to be populated onInit.
        this.venueList = [];
        this.isLoading = true;
    }
    ngOnInit() {
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //Populate the venue list within the venue page, with the venue list from the venue service.
            this.venueSub = this.venueService.venueList.subscribe(results => {
                this.venueList = results;
                console.log('Venue Page Init -> Venue List');
                console.log(this.venueList);
            });
        }));
        this.getVenues();
    }
    //Receive venues from the repo in local page.
    getVenues() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.isLoading = false;
                yield this.repo.getVenues();
                console.log('Venue Page -> Get Venues');
                console.log(this.venueList);
            }), 1500);
        });
    }
};
VenuePage.ctorParameters = () => [
    { type: src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_3__.VenueService },
    { type: src_app_services_repo_service__WEBPACK_IMPORTED_MODULE_2__.RepoService }
];
VenuePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-venue',
        template: _venue_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_venue_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VenuePage);



/***/ }),

/***/ 18016:
/*!********************************************************!*\
  !*** ./src/app/pages/venue/venue.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-searchbar {\n  --background: white;\n  --color: #221f1f;\n  --clear-button-color: #554f50;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nion-card {\n  background-color: white;\n  border-radius: 50px;\n}\n\nion-button {\n  border-radius: 10px;\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJ2ZW51ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6MzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjMwJVxyXG59XHJcblxyXG5pb24tc2VhcmNoYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kIDogd2hpdGU7XHJcbiAgICAtLWNvbG9yOiAjMjIxZjFmO1xyXG4gICAgLS1jbGVhci1idXR0b24tY29sb3IgOiAjNTU0ZjUwO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAxMHB4O1xyXG4gICAgd2lkdGggOiAxNSU7XHJcbn1cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 76142:
/*!********************************************************!*\
  !*** ./src/app/pages/venue/venue.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <!--Menu toggle button that will display the menu-->\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button menu=\"mainMenu\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title slot=\"\">Venues</ion-title>\r\n      <img src=\"../../assets/BSC.png\" width=\"80px\" height=\"80px\" alt=\"logo\" slot=\"end\">\r\n      <!--Can we change this dynamically when switching between tabs?-->\r\n    <!-- </ion-item> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!--Searchbar [(ngModel)] is used to bind the searchTerm to the class, to be called when filtering.-->\r\n  <ion-searchbar showCancelButton=\"focus\" expand=\"block\" placeholder='Search Venue' [(ngModel)]=\"filter\"\r\n    animated=\"true\" debounce=\"200\"></ion-searchbar>\r\n\r\n  <div class=\"ion-text-center\">\r\n    <ion-button class=\"ion-text-center\"color=\"success\" (click)=\"venueService.addVenueInfoModal()\">\r\n      Add Venue\r\n      <!-- <ion-icon name=\"add\" size=\"medium\"></ion-icon> -->\r\n    </ion-button>\r\n  </div>\r\n  <br>\r\n  <ion-grid *ngIf=\"!isLoading\">\r\n    <ion-list *ngFor=\"let venue of venueList | filter:filter, let i = index\"> \r\n      \r\n      <ion-item-sliding>\r\n        <!-- Sending through the venue object to the venue service, to be viewed in the modal -->\r\n        <ion-item button (click)=\"venueService.viewVenueInfoModal(venue)\">\r\n          <ion-label>\r\n            <h1>{{venue.name}}</h1> <br/>\r\n            <p>\r\n              Location:  {{venue.address}}<br/>\r\n              Postal Code: {{venue.postalCode}} <br/>\r\n              Capacity: {{venue.capacity}} \r\n            </p>\r\n          </ion-label>\r\n          <ion-icon name=\"chevron-back-outline\" size=\"small\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\" >\r\n          <ion-item-option color=\"secondary\" (click)=\"venueService.updateVenueInfoModal(venue)\">Update<ion-icon name=\"refresh\" size=\"large\"></ion-icon></ion-item-option>\r\n          <ion-item-option color=\"danger\" (click)=\"venueService.deleteVenueInfoModal(venue)\">Delete<ion-icon name=\"trash\" size=\"large\"></ion-icon></ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </ion-grid>   \r\n\r\n  <div class=\"ion-text-center \" *ngIf=\"isLoading\">\r\n    <ion-spinner name=\"circles\"></ion-spinner>\r\n  </div>\r\n\r\n  <!-- <div style=\"width:40%;margin-left:30%;margin-right: 30%;\" class=\"ion-text-center\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <img src=\"../../assets/NoSearch.png\" style=\"width: 40%;\">\r\n        <h1><strong>Sorry! No Results Found :( </strong></h1>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <br/>\r\n        <h3>Your search for \" \" did not return any results.</h3>\r\n        <h3>Please check your spelling or try a different search criteria. </h3>\r\n        <br/>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div> -->\r\n\r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_venue_venue_module_ts.js.map