(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule)
    },
    {
        path: 'employee',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_employee_employee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/employee/employee.module */ 3354)).then(m => m.EmployeePageModule)
    },
    {
        path: 'venue',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_venue_venue_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/venue/venue.module */ 1126)).then(m => m.VenuePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/venue/venue.service */ 9401);





let AppComponent = class AppComponent {
    constructor(venueService) { }
};
AppComponent.ctorParameters = () => [
    { type: _services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__.VenueService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _pages_venue_add_venue_add_venue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/venue/add-venue/add-venue.component */ 8157);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _pages_venue_update_venue_update_venue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/venue/update-venue/update-venue.component */ 4795);
/* harmony import */ var _pages_venue_view_venue_info_view_venue_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/venue/view-venue-info/view-venue-info.component */ 8407);
/* harmony import */ var _pages_venue_delete_venue_delete_venue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/venue/delete-venue/delete-venue.component */ 7717);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);













let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _pages_venue_add_venue_add_venue_component__WEBPACK_IMPORTED_MODULE_2__.AddVenueComponent, _pages_venue_update_venue_update_venue_component__WEBPACK_IMPORTED_MODULE_3__.UpdateVenueComponent, _pages_venue_view_venue_info_view_venue_info_component__WEBPACK_IMPORTED_MODULE_4__.ViewVenueInfoComponent, _pages_venue_delete_venue_delete_venue_component__WEBPACK_IMPORTED_MODULE_5__.DeleteVenueComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 8257:
/*!*********************************!*\
  !*** ./src/app/models/venue.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VENUE": () => (/* binding */ VENUE)
/* harmony export */ });
class VENUE {
}


/***/ }),

/***/ 8157:
/*!**************************************************************!*\
  !*** ./src/app/pages/venue/add-venue/add-venue.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVenueComponent": () => (/* binding */ AddVenueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-venue.component.html?ngResource */ 3900);
/* harmony import */ var _add_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-venue.component.scss?ngResource */ 148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/venue/venue.service */ 9401);








let AddVenueComponent = class AddVenueComponent {
    constructor(modalCtrl, alertCtrl, formBuilder, venueService, router, currentRoute) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.venueService = venueService;
        this.router = router;
        this.currentRoute = currentRoute;
        this.cVenueForm = this.formBuilder.group({
            venueName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4)]],
            capacity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(12), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]]
        });
        this.isSubmitted = false;
    }
    get errorControl() {
        return this.cVenueForm.controls;
    }
    ngOnInit() {
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.cVenueForm.valid) {
            console.log('Please provide all required fields');
            return false;
        }
        else {
            console.log(this.cVenueForm.value);
            var temp = {
                VENUE_NAME: this.cVenueForm.value['venueName'],
                VENUE_ADDRESS: this.cVenueForm.value['location'],
                VENUE_POSTAL_CODE: this.cVenueForm.value['postalCode'],
                VENUE_CAPACITY: this.cVenueForm.value['capacity']
            };
            this.venueService.createVenue(temp);
            this.dismissModal();
            this.sucAdd();
            console.log("CurrentRoute:ADD");
            console.log(this.currentRoute.url);
        }
    }
    sucAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.alertCtrl.create({
                //what message should display
                message: 'The Venue has been successfully added!',
                //how long should the message be present
                duration: 2000
            });
            //display the toast notification
            toast.present();
        });
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    ;
};
AddVenueComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__.VenueService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
AddVenueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-venue',
        template: _add_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddVenueComponent);



/***/ }),

/***/ 7717:
/*!********************************************************************!*\
  !*** ./src/app/pages/venue/delete-venue/delete-venue.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteVenueComponent": () => (/* binding */ DeleteVenueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _delete_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-venue.component.html?ngResource */ 1163);
/* harmony import */ var _delete_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-venue.component.scss?ngResource */ 5769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/venue/venue.service */ 9401);








let DeleteVenueComponent = class DeleteVenueComponent {
    constructor(modalCtrl, alertCtrl, formBuilder, venueService, router, route) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.venueService = venueService;
        this.router = router;
        this.route = route;
    }
    ionViewWillEnter() {
        console.log("DeleteVenue - ViewWillEnter");
        console.log(this.venue);
    }
    delete(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log("DeleteVenue-BtnClick(" + id + ")");
            this.venueService.deleteVenue(id);
            yield this.dismissModal();
        });
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss();
            console.log(this.route);
            yield this.router.navigate(['../venue'], { relativeTo: this.route });
        });
    }
};
DeleteVenueComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__.VenueService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
DeleteVenueComponent.propDecorators = {
    venue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
DeleteVenueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-delete-venue',
        template: _delete_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteVenueComponent);



/***/ }),

/***/ 4795:
/*!********************************************************************!*\
  !*** ./src/app/pages/venue/update-venue/update-venue.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateVenueComponent": () => (/* binding */ UpdateVenueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _update_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-venue.component.html?ngResource */ 6861);
/* harmony import */ var _update_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-venue.component.scss?ngResource */ 6371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/venue/venue.service */ 9401);



/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */




let UpdateVenueComponent = class UpdateVenueComponent {
    constructor(modalCtrl, alertCtrl, fb, venueService) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.venueService = venueService;
        this.uVenueForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            venueName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4)]),
            capacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(12), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)])
        });
    }
    get errorControl() {
        return this.uVenueForm.controls;
    }
    ionViewWillEnter() {
        console.log("UpdateVenue-ViewWillEnter");
        console.log(this.venue);
        this.uVenueForm.controls.venueName.setValue(this.venue.VENUE_NAME);
        this.uVenueForm.controls.location.setValue(this.venue.VENUE_ADDRESS);
        this.uVenueForm.controls.postalCode.setValue(this.venue.VENUE_POSTAL_CODE);
        this.uVenueForm.controls.capacity.setValue(this.venue.VENUE_CAPACITY);
    }
    submitForm() {
        if (!this.uVenueForm.valid) {
            console.log('Please provide all required fields');
            return false;
        }
        else {
            console.log('InsideUpdateSubmit:');
            var temp = {
                VENUE_ID: this.venue.VENUE_ID,
                VENUE_NAME: this.uVenueForm.value['venueName'],
                VENUE_ADDRESS: this.uVenueForm.value['location'],
                VENUE_POSTAL_CODE: this.uVenueForm.value['postalCode'],
                VENUE_CAPACITY: this.uVenueForm.value['capacity']
            };
            this.venueService.updateVenue(temp);
            this.dismissModal();
            this.sucUpdate();
            this.ionViewWillEnter();
        }
    }
    sucUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.alertCtrl.create({
                //what message should display
                message: 'The Venue has been successfully updated!',
                //how long should the message be present
                duration: 2000
            });
            //display the toast notification
            toast.present();
        });
    }
    dismissModal() {
        this.modalCtrl.dismiss(this.venue);
    }
};
UpdateVenueComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_venue_venue_service__WEBPACK_IMPORTED_MODULE_2__.VenueService }
];
UpdateVenueComponent.propDecorators = {
    venue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
UpdateVenueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-update-venue',
        template: _update_venue_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_venue_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateVenueComponent);



/***/ }),

/***/ 8407:
/*!**************************************************************************!*\
  !*** ./src/app/pages/venue/view-venue-info/view-venue-info.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewVenueInfoComponent": () => (/* binding */ ViewVenueInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_venue_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-venue-info.component.html?ngResource */ 1401);
/* harmony import */ var _view_venue_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-venue-info.component.scss?ngResource */ 9436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);






let ViewVenueInfoComponent = class ViewVenueInfoComponent {
    constructor(modalCtrl, fb) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
    }
    ionViewWillEnter() {
        console.log("viewSpecificVenue-ViewWillEnter");
        console.log(this.venue);
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
ViewVenueInfoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
ViewVenueInfoComponent.propDecorators = {
    venue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ViewVenueInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-view-venue-info',
        template: _view_venue_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_venue_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewVenueInfoComponent);



/***/ }),

/***/ 6181:
/*!******************************************!*\
  !*** ./src/app/services/repo.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepoService": () => (/* binding */ RepoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);



let RepoService = class RepoService {
    constructor(http) {
        this.http = http;
        this.base = 'https://localhost:44353/api/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                Accept: 'application/json',
                ContentType: 'application/json'
            }),
        };
    }
    //Venue:
    createVenue(venue) {
        return this.http.post(`${this.base}postVenue`, venue, this.httpOptions);
    }
    getVenues() {
        return this.http.get(`${this.base}getVenues`, this.httpOptions);
    }
    updateVenue(venueId, venue) {
        return this.http.put(`${this.base}putVenue?id=${venueId}`, venue, this.httpOptions);
    }
    deleteVenue(venueId) {
        return this.http.delete(`${this.base}deleteVenue?id=${venueId}`, this.httpOptions);
    }
};
RepoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
RepoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RepoService);



/***/ }),

/***/ 9401:
/*!*************************************************!*\
  !*** ./src/app/services/venue/venue.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenueService": () => (/* binding */ VenueService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_models_venue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/venue */ 8257);
/* harmony import */ var src_app_pages_venue_add_venue_add_venue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/venue/add-venue/add-venue.component */ 8157);
/* harmony import */ var src_app_pages_venue_delete_venue_delete_venue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/venue/delete-venue/delete-venue.component */ 7717);
/* harmony import */ var src_app_pages_venue_update_venue_update_venue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/venue/update-venue/update-venue.component */ 4795);
/* harmony import */ var src_app_pages_venue_view_venue_info_view_venue_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/venue/view-venue-info/view-venue-info.component */ 8407);
/* harmony import */ var _repo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../repo.service */ 6181);









let VenueService = class VenueService {
    constructor(repo, modalCtrl, alertCtrl) {
        this.repo = repo;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.venueList = [];
        this.repo.getVenues().subscribe(result => {
            this.venueList = [];
            this.tempVenueList = [];
            this.tempVenueList = Object.assign(result);
            this.tempVenueList.forEach(element => {
                this.tempVenue = new src_app_models_venue__WEBPACK_IMPORTED_MODULE_0__.VENUE();
                this.tempVenue.SCHEDULEs = element['SCHEDULEs'];
                this.tempVenue.VENUE_ID = element['VENUE_ID'];
                this.tempVenue.VENUE_NAME = element['VENUE_NAME'];
                this.tempVenue.VENUE_ADDRESS = element['VENUE_ADDRESS'];
                this.tempVenue.VENUE_POSTAL_CODE = element['VENUE_POSTAL_CODE'];
                this.tempVenue.VENUE_CAPACITY = element['VENUE_CAPACITY'];
                this.venueList.push(this.tempVenue);
            });
            console.log("VenueService: subscribe -GetVenue()", this.venueList);
        });
    }
    getVenues() {
        return this.venueList;
    }
    createVenue(venue) {
        console.log("venueService: Repo-Createvenue");
        console.log(venue);
        this.repo.createVenue(venue).subscribe(res => {
            console.log(res);
        });
    }
    updateVenue(venue) {
        console.log("venueService: Repo-UpdateVenue");
        console.log(venue);
        this.repo.updateVenue(venue['VENUE_ID'], venue).subscribe(result => console.log(result));
    }
    deleteVenue(id) {
        console.log("venueService: Repo-DeleteVenue");
        this.repo.deleteVenue(id).subscribe(result => console.log(result));
    }
    addVenueInfoModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_venue_add_venue_add_venue_component__WEBPACK_IMPORTED_MODULE_1__.AddVenueComponent
            });
            yield modal.present();
        });
    }
    updateVenueInfoModal(venue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("VenueService: UpdateVenueModalCall");
            this.tempVenue = new src_app_models_venue__WEBPACK_IMPORTED_MODULE_0__.VENUE();
            this.tempVenue = Object.assign(venue);
            console.log(this.tempVenue);
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_venue_update_venue_update_venue_component__WEBPACK_IMPORTED_MODULE_3__.UpdateVenueComponent,
                componentProps: {
                    venue: this.tempVenue
                }
            });
            yield modal.present();
        });
    }
    //just testing 
    deleteVenueInfoModal(venue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("VenueService: DeleteVenueModalCall");
            this.tempVenue = new src_app_models_venue__WEBPACK_IMPORTED_MODULE_0__.VENUE();
            this.tempVenue = Object.assign(venue);
            console.log(this.tempVenue);
            console.log(this.tempVenue);
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_venue_delete_venue_delete_venue_component__WEBPACK_IMPORTED_MODULE_2__.DeleteVenueComponent,
                componentProps: {
                    venue: this.tempVenue
                }
            });
            yield modal.present();
        });
    }
    viewVenueInfoModal(venue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("VenueService: ViewVenueModalCall");
            this.tempVenue = new src_app_models_venue__WEBPACK_IMPORTED_MODULE_0__.VENUE();
            this.tempVenue = Object.assign(venue);
            console.log(this.tempVenue);
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_venue_view_venue_info_view_venue_info_component__WEBPACK_IMPORTED_MODULE_4__.ViewVenueInfoComponent,
                componentProps: {
                    venue: this.tempVenue
                }
            });
            yield modal.present();
        });
    }
};
VenueService.ctorParameters = () => [
    { type: _repo_service__WEBPACK_IMPORTED_MODULE_5__.RepoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
VenueService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], VenueService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 148:
/*!***************************************************************************!*\
  !*** ./src/app/pages/venue/add-venue/add-venue.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdmVudWUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 5769:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/venue/delete-venue/delete-venue.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtdmVudWUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6371:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/venue/update-venue/update-venue.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtdmVudWUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9436:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/venue/view-venue-info/view-venue-info.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXZlbnVlLWluZm8uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  \r\n  <ion-menu menuId=\"mainMenu\" contentId=\"main\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"../../assets/avatar.jpg\" alt=\"avatar\">\r\n        </ion-avatar>\r\n        <ion-label>Stacey Steward </ion-label>\r\n      </ion-item>\r\n\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"/home\">\r\n            <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Home</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"/user\">\r\n            <ion-icon name=\"list-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>User Information</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"/employee\">\r\n            <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Employees</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-item routerLink=\"/trainers\">\r\n            <ion-icon name=\"barbell-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Trainers</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle> -->\r\n\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"/venue\">\r\n            <ion-icon name=\"business-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Venues</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        \r\n        <!-- <ion-menu-toggle>\r\n          <ion-item routerLink=\"/members\">\r\n            <ion-icon name=\"people-circle-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Members</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle> -->\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-item routerLink=\"/clients\">\r\n            <ion-icon name=\"happy-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Clients</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle> -->\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-item routerLink=\"/payments\">\r\n            <ion-icon name=\"cash-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Payment</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle> -->\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-item routerLink=\"/sale\">\r\n            <ion-icon name=\"cart-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Sale</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle> -->\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-item routerLink=\"/inventory\">\r\n            <ion-icon name=\"file-tray-full-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Inventory</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle> -->\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-item routerLink=\"/suppliers\">\r\n            <ion-icon name=\"clipboard-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Suppliers</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle> -->\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-item routerLink=\"/stock\">\r\n            <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Stock</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle> -->\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-item routerLink=\"/reports\">\r\n            <ion-icon name=\"bar-chart-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>Reports</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle> -->\r\n\r\n        <!-- <ion-menu-toggle>\r\n          <ion-item routerLink=\"/reports\">\r\n            <ion-icon name=\"arrow-back\" slot=\"start\"></ion-icon>\r\n            <ion-label>Logout</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle> -->\r\n\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ }),

/***/ 3900:
/*!***************************************************************************!*\
  !*** ./src/app/pages/venue/add-venue/add-venue.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Create Venue</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!--<form #cVenueForm=\"ngForm\" (ngSubmit)=\"onSubmit(cVenueForm)\">-->\r\n  <form [formGroup]=\"cVenueForm\" (ngSubmit)=\"submitForm()\"> \r\n    <br/>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Venue Name:</ion-label>\r\n      <ion-input placeholder=\"Venue Name\" formControlName=\"venueName\" type=\"text\" required=\"\"></ion-input>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.venueName.errors?.required\">\r\n      Venue name is required.\r\n    </span>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Venue Location:</ion-label>\r\n      <ion-input placeholder=\"Location\" formControlName=\"location\" type=\"text\" required=\"\"></ion-input>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.location.errors?.required\">\r\n      Address is required.\r\n    </span>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Venue Postal Code:</ion-label>\r\n      <ion-input placeholder=\"0000\" formControlName=\"postalCode\" type=\"text\" required=\"\"></ion-input>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.postalCode.errors?.required\">\r\n      Postal code is required.\r\n    </span>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.postalCode.errors?.minLength\">\r\n      Please enter a valid postal code of 4 digits.\r\n    </span>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Venue Capacity:</ion-label>\r\n      <ion-input placeholder=\"0\" formControlName=\"capacity\" type=\"number\" required=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.capacity.errors?.required\">\r\n      Venue capacity is required.\r\n    </div>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.capacity.errors?.min\">\r\n      Please enter capacity above 0.\r\n    </span>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.capacity.errors?.max\">\r\n      The capacity has a maximum of 12.\r\n    </span>\r\n    <br>\r\n\r\n    <!--<ion-button [disabled]=\"!cVenueForm.valid\" *ngIf=\"!isValidVenue\" expand=\"block\" shape=\"round\" type=\"submit\">Login</ion-button>-->\r\n    <ion-button expand=\"block\" type=\"submit\" color=\"success\">Create Venue</ion-button>\r\n  </form>\r\n</ion-content>\r\n";

/***/ }),

/***/ 1163:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/venue/delete-venue/delete-venue.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Delete Venue</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item > \r\n      <ion-label position=\"stacked\">Venue Name:</ion-label>\r\n      <p class=\"ion-text-start\">{{venue.VENUE_NAME}}</p>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Venue Location:</ion-label>\r\n      <p class=\"ion-text-start\">{{venue.VENUE_ADDRESS}}</p>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Venue Postal Code:</ion-label>\r\n      <p class=\"ion-text-start\">{{venue.VENUE_POSTAL_CODE}}</p>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Venue Capacity:</ion-label>\r\n      <p class=\"ion-text-start\">{{venue.VENUE_CAPACITY}}</p>\r\n    </ion-item>\r\n    <br>\r\n    <ion-button expand=\"block\" type=\"ion-button\" (click)=\"delete(venue.VENUE_ID)\" color=\"danger\">Delete Venue</ion-button>\r\n</ion-content>\r\n\r\n\r\n\r\n";

/***/ }),

/***/ 6861:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/venue/update-venue/update-venue.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Update Venue</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"uVenueForm\" (ngSubmit)=\"submitForm()\"> \r\n    <br/>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Venue Name:</ion-label>\r\n      <ion-input formControlName=\"venueName\"  type=\"text\" required=\"\"></ion-input>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.venueName.errors?.required\">\r\n      Venue name is required.\r\n    </span>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Venue Location:</ion-label>\r\n      <ion-input formControlName=\"location\" type=\"text\" required=\"\"></ion-input>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.location.errors?.required\">\r\n      Address is required.\r\n    </span>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Venue Postal Code:</ion-label>\r\n      <ion-input formControlName=\"postalCode\" type=\"text\" required=\"\"></ion-input>\r\n    </ion-item>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.postalCode.errors?.required\">\r\n      Postal code is required.\r\n    </span>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.postalCode.errors?.minLength\">\r\n      Please enter a valid postal code of 4 digits.\r\n    </span>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Venue Capacity:</ion-label>\r\n      <ion-input placeholder=\"0\" formControlName=\"capacity\" type=\"number\" required=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"error ion-padding\" *ngIf=\"errorControl.capacity.errors?.required\">\r\n      Venue capacity is required.\r\n    </div>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.capacity.errors?.min\">\r\n      Please enter capacity above 0.\r\n    </span>\r\n    <span class=\"error ion-padding\" *ngIf=\"errorControl.capacity.errors?.max\">\r\n      The capacity has a maximum of 12.\r\n    </span>\r\n    <br>\r\n    <ion-button expand=\"block\" type=\"submit\" color=\"success\">Update Venue</ion-button>\r\n  </form>\r\n</ion-content>\r\n\r\n\r\n";

/***/ }),

/***/ 1401:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/venue/view-venue-info/view-venue-info.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View Venue: {{venue.VENUE_NAME}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item > \r\n      <ion-label position=\"stacked\">Venue Name:</ion-label>\r\n      <p class=\"ion-text-start\">{{venue.VENUE_NAME}}</p>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Venue Location:</ion-label>\r\n      <p class=\"ion-text-start\">{{venue.VENUE_ADDRESS}}</p>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Venue Postal Code:</ion-label>\r\n      <p class=\"ion-text-start\">{{venue.VENUE_POSTAL_CODE}}</p>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Venue Capacity:</ion-label>\r\n      <p class=\"ion-text-start\">{{venue.VENUE_CAPACITY}}</p>\r\n    </ion-item>\r\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map