"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_employee_qualification_qualification_module_ts"],{

/***/ 12335:
/*!******************************************************************************!*\
  !*** ./src/app/pages/employee/qualification/qualification-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationPageRoutingModule": () => (/* binding */ QualificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _qualification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qualification.page */ 99073);




const routes = [
    {
        path: '',
        component: _qualification_page__WEBPACK_IMPORTED_MODULE_0__.QualificationPage
    }
];
let QualificationPageRoutingModule = class QualificationPageRoutingModule {
};
QualificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QualificationPageRoutingModule);



/***/ }),

/***/ 29644:
/*!**********************************************************************!*\
  !*** ./src/app/pages/employee/qualification/qualification.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationPageModule": () => (/* binding */ QualificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _qualification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qualification-routing.module */ 12335);
/* harmony import */ var _qualification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qualification.page */ 99073);







let QualificationPageModule = class QualificationPageModule {
};
QualificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _qualification_routing_module__WEBPACK_IMPORTED_MODULE_0__.QualificationPageRoutingModule
        ],
        declarations: [_qualification_page__WEBPACK_IMPORTED_MODULE_1__.QualificationPage]
    })
], QualificationPageModule);



/***/ }),

/***/ 99073:
/*!********************************************************************!*\
  !*** ./src/app/pages/employee/qualification/qualification.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationPage": () => (/* binding */ QualificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _qualification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qualification.page.html?ngResource */ 55213);
/* harmony import */ var _qualification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qualification.page.scss?ngResource */ 27692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let QualificationPage = class QualificationPage {
    constructor() {
        this.qualifications = [
            { description: 'Fitness Instructing' },
            { description: 'Personal Training' },
            { description: 'Sport Management' },
            { description: 'Fitness Science' }
        ];
    }
    ngOnInit() {
    }
};
QualificationPage.ctorParameters = () => [];
QualificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-qualification',
        template: _qualification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_qualification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QualificationPage);



/***/ }),

/***/ 27692:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/qualification/qualification.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-searchbar {\n  --background: white;\n  --color: #221f1f;\n  --clear-button-color: #ff5b71;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nion-card {\n  background-color: white;\n  border-radius: 50px;\n}\n\nion-button {\n  border-radius: 10px;\n}\n\np {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YWxpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKIiwiZmlsZSI6InF1YWxpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgIG1hcmdpbi1yaWdodDozMCVcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhcntcclxuICAgIC0tYmFja2dyb3VuZCA6IHdoaXRlO1xyXG4gICAgLS1jb2xvcjogIzIyMWYxZjtcclxuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yIDogI2ZmNWI3MTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcblxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufSJdfQ== */";

/***/ }),

/***/ 55213:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/qualification/qualification.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content>\r\n\r\n  <br/>\r\n  <!--Searchbar (must make function to search)-->\r\n  <ion-searchbar expand=\"block\" placeholder='Search Qualifications...'></ion-searchbar>\r\n  <br/><br/>\r\n\r\n  <div class=\"ion-text-center\">\r\n    <!-- (click)=\"addQualificationModal()\" -->\r\n    <ion-button color=\"success\" style=\"margin-left:30%;margin-right:30%\" >\r\n      Add Qualification\r\n      <ion-icon name=\"add\" size=\"medium\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <br/>\r\n\r\n  <ion-grid *ngFor=\"let qualification of qualifications\">\r\n    <ion-list > \r\n      <ion-item-sliding >\r\n        <!-- (click)=\"viewQualificationInfoModal()\"  -->\r\n        <ion-item button >\r\n          <ion-label>\r\n            <!--Qualification Description-->\r\n            <h2>{{qualification.description}}</h2> <br/>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\" >\r\n          <!--(click)=\"updateQualificationModal()\"-->\r\n          <ion-item-option color=\"secondary\" ><ion-icon name=\"refresh\"></ion-icon>Update </ion-item-option>\r\n          <!--(click)=\"deleteQualificationModal()\"-->\r\n          <ion-item-option color=\"danger\" ><ion-icon name=\"trash\" size=\"medium\"></ion-icon>Delete </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee_qualification_qualification_module_ts.js.map