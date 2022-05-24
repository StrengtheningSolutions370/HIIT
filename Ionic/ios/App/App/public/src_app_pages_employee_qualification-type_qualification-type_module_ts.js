"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_employee_qualification-type_qualification-type_module_ts"],{

/***/ 47769:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/qualification-type-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationTypePageRoutingModule": () => (/* binding */ QualificationTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _qualification_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qualification-type.page */ 66911);




const routes = [
    {
        path: '',
        component: _qualification_type_page__WEBPACK_IMPORTED_MODULE_0__.QualificationTypePage
    }
];
let QualificationTypePageRoutingModule = class QualificationTypePageRoutingModule {
};
QualificationTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QualificationTypePageRoutingModule);



/***/ }),

/***/ 79915:
/*!********************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/qualification-type.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationTypePageModule": () => (/* binding */ QualificationTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _qualification_type_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qualification-type-routing.module */ 47769);
/* harmony import */ var _qualification_type_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qualification-type.page */ 66911);








let QualificationTypePageModule = class QualificationTypePageModule {
};
QualificationTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _qualification_type_routing_module__WEBPACK_IMPORTED_MODULE_1__.QualificationTypePageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule
        ],
        declarations: [_qualification_type_page__WEBPACK_IMPORTED_MODULE_2__.QualificationTypePage]
    })
], QualificationTypePageModule);



/***/ }),

/***/ 66911:
/*!******************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/qualification-type.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationTypePage": () => (/* binding */ QualificationTypePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _qualification_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qualification-type.page.html?ngResource */ 96080);
/* harmony import */ var _qualification_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qualification-type.page.scss?ngResource */ 696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/repo.service */ 56181);
/* harmony import */ var src_app_services_qualification_qualification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/qualification/qualification.service */ 45159);






let QualificationTypePage = class QualificationTypePage {
    constructor(qualificationService, repo) {
        this.qualificationService = qualificationService;
        this.repo = repo;
        //Create local venue array to be populated onInit.
        this.qualificationTypeList = [];
        this.isLoading = true;
    }
    ngOnInit() {
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //Populate the qualificationtype list within the qualificationtype page, with the qulificationtype list from the qualification service.
            this.qualificationTypeSub = this.qualificationService.qualificationtypeList.subscribe(results => {
                this.qualificationTypeList = results;
                console.log('Qualification type Page Init -> qualification type List');
                console.log(this.qualificationTypeList);
            });
        }));
        this.getQualificationTypes();
    }
    //Receive qualification type list from the repo in local page.
    getQualificationTypes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.isLoading = false;
                yield this.repo.getQualificationTypes();
                console.log('Qualification type Page -> Get qualification types');
                console.log(this.qualificationTypeList);
            }), 1500);
        });
    }
};
QualificationTypePage.ctorParameters = () => [
    { type: src_app_services_qualification_qualification_service__WEBPACK_IMPORTED_MODULE_3__.QualificationService },
    { type: src_app_services_repo_service__WEBPACK_IMPORTED_MODULE_2__.RepoService }
];
QualificationTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-qualification-type',
        template: _qualification_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_qualification_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QualificationTypePage);



/***/ }),

/***/ 696:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/qualification-type.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-searchbar {\n  --background: white;\n  --color: #221f1f;\n  --clear-button-color: #ff5b71;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nion-card {\n  background-color: white;\n  border-radius: 50px;\n}\n\nion-button {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YWxpZmljYXRpb24tdHlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSiIsImZpbGUiOiJxdWFsaWZpY2F0aW9uLXR5cGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgIG1hcmdpbi1yaWdodDozMCVcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhcntcclxuICAgIC0tYmFja2dyb3VuZCA6IHdoaXRlO1xyXG4gICAgLS1jb2xvcjogIzIyMWYxZjtcclxuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yIDogI2ZmNWI3MTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcblxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDEwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 96080:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/employee/qualification-type/qualification-type.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <!-- <ion-item mode=\"ios\" lines=\"none\" padding-top=\"0px\"> -->\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button menu=\"mainMenu\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title slot=\"\">Qualification Types</ion-title>\r\n      <img src=\"../../assets/BSC.png\" width=\"80px\" height=\"80px\" alt=\"logo\" slot=\"end\">\r\n      <!--Can we change this dynamically when switching between tabs?-->\r\n    <!-- </ion-item> -->\r\n  </ion-toolbar>\r\n\r\n\r\n    <!--Menu toggle button that will display the menu-->\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!--Searchbar [(ngModel)] is used to bind the searchTerm to the class, to be called when filtering.-->\r\n  <ion-searchbar showCancelButton=\"focus\" expand=\"block\" placeholder='Search Venue' [(ngModel)]=\"filter\"\r\n    animated=\"true\" debounce=\"200\"></ion-searchbar>\r\n\r\n  <div class=\"ion-text-center\">\r\n    <ion-button color=\"success\" (click)=\"qualificationService.addQualificationTypeInfoModal()\">\r\n      Add Qualification Type\r\n      <ion-icon name=\"add\" size=\"medium\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <br/>\r\n  <ion-grid *ngIf=\"!isLoading\">\r\n    <ion-list *ngFor=\"let qualificationType of qualificationTypeList | filter:filter, let i = index\"> \r\n      <ion-item-sliding>\r\n        <!-- Sending through the venue object to the venue service, to be viewed in the modal -->\r\n        <ion-item button (click)=\"qualificationService.viewQualificationTypeInfoModal(qualificationType)\">\r\n          <ion-label>\r\n            <h1>{{qualificationType.name}}</h1> <br/>\r\n          </ion-label>\r\n          <ion-icon name=\"chevron-back-outline\" size=\"small\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\" >\r\n          <ion-item-option color=\"secondary\" (click)=\"qualificationService.updateQualificationTypeInfoModal(qualificationType)\">Update<ion-icon name=\"refresh\" size=\"large\"></ion-icon></ion-item-option>\r\n          <ion-item-option color=\"danger\" (click)=\"qualificationService.deleteQualificationTypeInfoModal(qualificationType)\">Delete<ion-icon name=\"trash\" size=\"large\"></ion-icon></ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </ion-grid>   \r\n\r\n  <div class=\"ion-text-center \" *ngIf=\"isLoading\">\r\n    <ion-spinner name=\"circles\"></ion-spinner>\r\n  </div>\r\n\r\n  <!-- <div style=\"width:40%;margin-left:30%;margin-right: 30%;\" class=\"ion-text-center\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <img src=\"../../assets/NoSearch.png\" style=\"width: 40%;\">\r\n        <h1><strong>Sorry! No Results Found :( </strong></h1>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <br/>\r\n        <h3>Your search for \" \" did not return any results.</h3>\r\n        <h3>Please check your spelling or try a different search criteria. </h3>\r\n        <br/>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div> -->\r\n\r\n\r\n</ion-content>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee_qualification-type_qualification-type_module_ts.js.map