"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user_titles_titles_module_ts"],{

/***/ 97590:
/*!************************************************************!*\
  !*** ./src/app/pages/user/titles/titles-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitlesPageRoutingModule": () => (/* binding */ TitlesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _titles_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./titles.page */ 70740);




const routes = [
    {
        path: '',
        component: _titles_page__WEBPACK_IMPORTED_MODULE_0__.TitlesPage
    }
];
let TitlesPageRoutingModule = class TitlesPageRoutingModule {
};
TitlesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TitlesPageRoutingModule);



/***/ }),

/***/ 31186:
/*!****************************************************!*\
  !*** ./src/app/pages/user/titles/titles.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitlesPageModule": () => (/* binding */ TitlesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _titles_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titles-routing.module */ 97590);
/* harmony import */ var _titles_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./titles.page */ 70740);








let TitlesPageModule = class TitlesPageModule {
};
TitlesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _titles_routing_module__WEBPACK_IMPORTED_MODULE_1__.TitlesPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule
        ],
        declarations: [_titles_page__WEBPACK_IMPORTED_MODULE_2__.TitlesPage]
    })
], TitlesPageModule);



/***/ }),

/***/ 70740:
/*!**************************************************!*\
  !*** ./src/app/pages/user/titles/titles.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitlesPage": () => (/* binding */ TitlesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _titles_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./titles.page.html?ngResource */ 56210);
/* harmony import */ var _titles_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titles.page.scss?ngResource */ 3592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_repo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/repo.service */ 56181);
/* harmony import */ var src_app_services_title_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/title/title.service */ 90978);






let TitlesPage = class TitlesPage {
    // titles = [
    //   {name : 'Mr.',
    //    description : 'a designation for a man'},
    //   {name : 'Mrs',
    //    description : 'a designation for a woman who is married'},
    //   {name : 'Miss.',
    //   description : 'a designation for a young woman '},
    //   {name : 'Ms.',
    //   description : 'a designation for a woman who is unmarried'},
    //   {name : 'Dr.',
    //   description : 'a designation for a person who has obtained a doctorate (commonly a PhD)'},
    //   {name : 'Prof.',
    //   description : 'a designation for a person who is a teacher of the highest rank, or is a expert in their field'},
    // ];
    constructor(titleService, repo) {
        this.titleService = titleService;
        this.repo = repo;
        //Create local title array to be populated onInit.
        this.titleList = [];
        this.isLoading = true;
    }
    ngOnInit() {
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //Populate the venue list within the venue page, with the venue list from the venue service.
            this.titleSub = this.titleService.titleList.subscribe(results => {
                this.titleList = results;
                console.log('Title Page Init -> Title List');
                console.log(this.titleList);
            });
        }));
        this.getTitles();
    }
    //Receive venues from the repo in local page.
    getTitles() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.isLoading = false;
                yield this.repo.getTitles();
                console.log('Title Page -> Get Titles');
                console.log(this.titleList);
            }), 2000);
        });
    }
};
TitlesPage.ctorParameters = () => [
    { type: src_app_services_title_title_service__WEBPACK_IMPORTED_MODULE_3__.TitleService },
    { type: src_app_services_repo_service__WEBPACK_IMPORTED_MODULE_2__.RepoService }
];
TitlesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-titles',
        template: _titles_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_titles_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TitlesPage);



/***/ }),

/***/ 3592:
/*!***************************************************************!*\
  !*** ./src/app/pages/user/titles/titles.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-searchbar {\n  --background: white;\n  --color: #221f1f;\n  --clear-button-color: #ff5b71;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nion-card {\n  background-color: white;\n  border-radius: 50px;\n}\n\nion-button {\n  border-radius: 10px;\n}\n\np {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUoiLCJmaWxlIjoidGl0bGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDozMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MzAlXHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQgOiB3aGl0ZTtcclxuICAgIC0tY29sb3I6ICMyMjFmMWY7XHJcbiAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvciA6ICNmZjViNzE7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG5cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 56210:
/*!***************************************************************!*\
  !*** ./src/app/pages/user/titles/titles.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n  <br/>\r\n  <!--Searchbar (must make function to search)-->\r\n  <ion-searchbar showCancelButton=\"focus\" expand=\"block\" placeholder='Search Title' [(ngModel)]=\"filter\"\r\n    animated=\"true\" debounce=\"200\"></ion-searchbar>\r\n    <br/><br>\r\n\r\n  <div class=\"ion-text-center\">\r\n    <ion-button color=\"success\" (click)=\"titleService.addTitleInfoModal()\">\r\n      Add Title\r\n      <ion-icon name=\"add\" size=\"medium\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <br/>\r\n\r\n  <ion-grid *ngIf=\"!isLoading\">\r\n    <ion-list *ngFor=\"let title of titleList | filter:filter, let i = index\"> \r\n      <ion-item-sliding>\r\n        <!-- Sending through the title object to the title service, to be viewed in the modal -->\r\n        <ion-item button (click)=\"titleService.viewTitleInfoModal(title)\">\r\n          <ion-label>\r\n            <h1>{{title.description}}</h1> <br/> \r\n            <!-- <p> -->\r\n              <!--Title Description-->\r\n              <!-- {{title.description}}<br/>\r\n            </p> -->\r\n          </ion-label>\r\n          <ion-icon name=\"chevron-back-outline\" size=\"small\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\" >\r\n          <ion-item-option color=\"secondary\" (click)=\"titleService.updateTitleInfoModal(title)\">Update<ion-icon name=\"refresh\" size=\"large\"></ion-icon></ion-item-option>\r\n          <ion-item-option color=\"danger\" (click)=\"titleService.deleteTitleInfoModal(title)\">Delete<ion-icon name=\"trash\" size=\"large\"></ion-icon></ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </ion-grid>   \r\n\r\n  <div class=\"ion-text-center \" *ngIf=\"isLoading\">\r\n    <ion-spinner name=\"circles\"></ion-spinner>\r\n  </div>\r\n\r\n  <!-- <div style=\"width:40%;margin-left:30%;margin-right: 30%;\" class=\"ion-text-center\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <img src=\"../../assets/NoSearch.png\" style=\"width: 40%;\">\r\n        <h1><strong>Sorry! No Results Found :( </strong></h1>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <br/>\r\n        <h3>Your search for \" \" did not return any results.</h3>\r\n        <h3>Please check your spelling or try a different search criteria. </h3>\r\n        <br/>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div> -->\r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user_titles_titles_module_ts.js.map