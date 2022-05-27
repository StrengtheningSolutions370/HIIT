"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_employee_employee-type_employee-type_module_ts"],{

/***/ 78392:
/*!****************************************!*\
  !*** ./src/app/models/employeeType.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeType": () => (/* binding */ EmployeeType)
/* harmony export */ });
class EmployeeType {
}


/***/ }),

/***/ 74536:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/add-etype/add-etype.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEtypeComponent": () => (/* binding */ AddEtypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_etype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-etype.component.html?ngResource */ 15875);
/* harmony import */ var _add_etype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-etype.component.scss?ngResource */ 68271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employee/employee.service */ 95192);








let AddEtypeComponent = class AddEtypeComponent {
    constructor(modalCtrl, toastCtrl, formBuilder, employeeService, router, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.employeeService = employeeService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        //Creating the form to add the new venue details, that will be displayed in the HTML component
        this.cEmployeeTypeForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    //Used for validation within the form, if there are errors in the control, this method will return the errors.
    get errorControl() {
        return this.cEmployeeTypeForm.controls;
    }
    ionViewWillEnter() {
        console.log('Add Employee Type - View Will Enter');
        console.log(this.employeeType);
        if (this.employeeType != null) {
            this.cEmployeeTypeForm.controls.name.setValue(this.employeeType.name);
            this.cEmployeeTypeForm.controls.description.setValue(this.employeeType.description);
        }
    }
    submitForm() {
        if (!this.cEmployeeTypeForm.valid) {
            console.log('Please provide all required fields');
            return false;
        }
        else {
            const temp = {
                name: this.cEmployeeTypeForm.value.name,
                description: this.cEmployeeTypeForm.value.description,
                employees: []
            };
            this.employeeService.confirmEmployeeTypeModal(1, temp);
            this.dismissModal();
            // this.sucAdd();
            // console.log("CurrentRoute:ADD");
            // console.log(this.currentRoute.url);
        }
    }
    sucAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The Venue has been successfully added!',
                duration: 2000
            });
            toast.present();
        });
    }
    //Once the modal has been dismissed.
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    ;
    duplicateAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Employee Type Already Exists',
                message: 'The Employee Type Information entered already exists on the system',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    failureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not create employee type',
                message: 'There was an error updating the venue. Please try again',
                buttons: ['OK']
            });
            alert.present();
        });
    }
};
AddEtypeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
AddEtypeComponent.propDecorators = {
    employeeType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
AddEtypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-etype',
        template: _add_etype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_etype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEtypeComponent);



/***/ }),

/***/ 38375:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/associative-etype/associative-etype.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociativeEtypeComponent": () => (/* binding */ AssociativeEtypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _associative_etype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associative-etype.component.html?ngResource */ 72635);
/* harmony import */ var _associative_etype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./associative-etype.component.scss?ngResource */ 88828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AssociativeEtypeComponent = class AssociativeEtypeComponent {
    constructor() { }
    ngOnInit() { }
};
AssociativeEtypeComponent.ctorParameters = () => [];
AssociativeEtypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-associative-etype',
        template: _associative_etype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_associative_etype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AssociativeEtypeComponent);



/***/ }),

/***/ 93814:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/confirm-etype/confirm-etype.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmEtypeComponent": () => (/* binding */ ConfirmEtypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _confirm_etype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-etype.component.html?ngResource */ 16970);
/* harmony import */ var _confirm_etype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-etype.component.scss?ngResource */ 7452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employee/employee.service */ 95192);







let ConfirmEtypeComponent = class ConfirmEtypeComponent {
    constructor(modalCtrl, employeeService, router, activated) {
        this.modalCtrl = modalCtrl;
        this.employeeService = employeeService;
        this.router = router;
        this.activated = activated;
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(['../employees'], { relativeTo: this.activated });
            this.modalCtrl.dismiss();
        });
    }
    ;
    //1 = confirm ADD
    //2 = confirm UPDATE
    confirmChanges(employeeType) {
        console.log(this.choice);
        if (this.choice === 1) {
            //search duplicates
            if (this.employeeService.matchingEmployeeType(employeeType.name) != null ||
                this.employeeService.matchingEmployeeType(employeeType.description) != null) {
                console.log('Existing Employee Type: ' + employeeType.name + ' <-Name ++ Description -> ' + employeeType.description);
                //display duplicate alert
                //failure alert
                return;
            }
            else {
                console.log('Add Employee Type from confirm:');
                //CallRepoToCreate
                this.employeeService.createEmployeeType(employeeType);
            }
        }
        else if (this.choice === 2) {
            console.log('Update Employee Type from confirm:');
            //CallRepoToUpdate
            this.employeeService.updateEmployeeType(employeeType.employeeTypeID, employeeType);
        }
        //dismiss modal
        this.dismissModal();
    }
};
ConfirmEtypeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
ConfirmEtypeComponent.propDecorators = {
    choice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    employeeType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ConfirmEtypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-confirm-etype',
        template: _confirm_etype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_confirm_etype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmEtypeComponent);



/***/ }),

/***/ 98980:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/delete-etype/delete-etype.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteEtypeComponent": () => (/* binding */ DeleteEtypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_etype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-etype.component.html?ngResource */ 47096);
/* harmony import */ var _delete_etype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-etype.component.scss?ngResource */ 95290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employee/employee.service */ 95192);








let DeleteEtypeComponent = class DeleteEtypeComponent {
    constructor(modalCtrl, toastCtrl, formBuilder, employeeService, router, route, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.employeeService = employeeService;
        this.router = router;
        this.route = route;
        this.alertCtrl = alertCtrl;
    }
    ionViewWillEnter() {
        console.log('Delete Employee Type - View Will Enter');
        console.log(this.employeeType);
    }
    //Send through the id of the selected venue to be deleted in the venue service.
    delete(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.employeeService.deleteEmployeeType(id);
            yield this.dismissModal();
            this.sucDelete();
        });
    }
    sucDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The Employee Type has been successfully deleted!',
                duration: 2000
            });
            toast.present();
        });
    }
    failureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not delete Employee Type',
                message: 'There was an error deleting the venue, please try again.',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    //Close the modal and navigate back to the venue page.
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss();
            console.log(this.route);
            yield this.router.navigate(['../employee-type'], { relativeTo: this.route });
        });
    }
};
DeleteEtypeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
DeleteEtypeComponent.propDecorators = {
    employeeType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
DeleteEtypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-delete-etype',
        template: _delete_etype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_etype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteEtypeComponent);



/***/ }),

/***/ 80501:
/*!******************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/employee-type-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeTypePageRoutingModule": () => (/* binding */ EmployeeTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _employee_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-type.page */ 85721);




const routes = [
    {
        path: '',
        component: _employee_type_page__WEBPACK_IMPORTED_MODULE_0__.EmployeeTypePage
    }
];
let EmployeeTypePageRoutingModule = class EmployeeTypePageRoutingModule {
};
EmployeeTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmployeeTypePageRoutingModule);



/***/ }),

/***/ 13067:
/*!**********************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/employee-type.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeTypePageModule": () => (/* binding */ EmployeeTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _employee_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-type-routing.module */ 80501);
/* harmony import */ var _employee_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-type.page */ 85721);







let EmployeeTypePageModule = class EmployeeTypePageModule {
};
EmployeeTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _employee_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeTypePageRoutingModule
        ],
        declarations: [_employee_type_page__WEBPACK_IMPORTED_MODULE_1__.EmployeeTypePage]
    })
], EmployeeTypePageModule);



/***/ }),

/***/ 85721:
/*!********************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/employee-type.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeTypePage": () => (/* binding */ EmployeeTypePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _employee_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-type.page.html?ngResource */ 5182);
/* harmony import */ var _employee_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-type.page.scss?ngResource */ 81179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employee/employee.service */ 95192);
/* harmony import */ var src_app_services_repo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/repo.service */ 56181);






let EmployeeTypePage = class EmployeeTypePage {
    constructor(employeeService, repo) {
        this.employeeService = employeeService;
        this.repo = repo;
        //Create local venue array to be populated onInit.
        this.employeeTypeList = [];
        this.isLoading = true;
    }
    ngOnInit() {
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //Populate the venue list within the venue page, with the venue list from the venue service.
            this.employeeTypeSub = this.employeeService.employeeTypeList.subscribe(results => {
                this.employeeTypeList = results;
                console.log('Venue Page Init -> Venue List');
                console.log(this.employeeTypeList);
            });
        }));
        this.getEmployeeTypes();
    }
    //Receive venues from the repo in local page.
    getEmployeeTypes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.isLoading = false;
                this.repo.getEmployeeTypes();
                console.log('Employee Type Page -> Get Employee Types');
                console.log(this.employeeTypeList);
            }), 1500);
        });
    }
};
EmployeeTypePage.ctorParameters = () => [
    { type: src_app_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeService },
    { type: src_app_services_repo_service__WEBPACK_IMPORTED_MODULE_3__.RepoService }
];
EmployeeTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-employee-type',
        template: _employee_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_employee_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmployeeTypePage);



/***/ }),

/***/ 57112:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/update-etype/update-etype.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateEtypeComponent": () => (/* binding */ UpdateEtypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_etype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-etype.component.html?ngResource */ 11567);
/* harmony import */ var _update_etype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-etype.component.scss?ngResource */ 45186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_employeeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/employeeType */ 78392);
/* harmony import */ var src_app_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/employee/employee.service */ 95192);



/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */





let UpdateEtypeComponent = class UpdateEtypeComponent {
    constructor(modalCtrl, toastCtrl, fb, employeeService, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.employeeService = employeeService;
        this.alertCtrl = alertCtrl;
        this.uEmployeeTypeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        });
    }
    //Used for validation within the form, if there are errors in the control, this method will return the errors.
    get errorControl() {
        return this.uEmployeeTypeForm.controls;
    }
    ionViewWillEnter() {
        console.log('Update Employee Type -View Will Enter');
        console.log(this.employeeType);
        this.uEmployeeTypeForm.controls.venueName.setValue(this.employeeType.name);
        this.uEmployeeTypeForm.controls.location.setValue(this.employeeType.description);
        //Populate the update venue form with the values received from the selected venue object in the main page.
    }
    submitForm() {
        if (!this.uEmployeeTypeForm.valid) { //If the form has any validation errors, the form will not be submitted.
            console.log('Please provide all required fields');
            this.InvalidAlert();
            return false;
        }
        else {
            console.log('InsideUpdateSubmit:');
            let temp = new src_app_models_employeeType__WEBPACK_IMPORTED_MODULE_2__.EmployeeType();
            const choice = 2;
            temp = {
                employeeTypeID: this.employeeType.employeeTypeID,
                name: this.uEmployeeTypeForm.value['name'],
                description: this.uEmployeeTypeForm.value['description'],
                employees: []
            };
            console.log(temp);
            this.employeeService.confirmEmployeeTypeModal(choice, temp);
            this.dismissModal();
        }
    }
    sucUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'The Employee Type has been successfully updated!',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    dismissModal() {
        this.modalCtrl.dismiss(this.employeeType);
    }
    InvalidAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Invalid Input',
                message: 'Please provide all required fields and ensure that the information is in the correct format',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    DuplicateAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Employee Type Already Exists',
                message: 'The Employee Type Information entered already exists on the system',
                buttons: ['OK']
            });
            alert.present();
        });
    }
    FailureAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Could not update Employee Type',
                subHeader: 'There was an error updating the Employee Type. Please try again',
                //Enter SQL Code Error here
                message: 'SQL Code Error',
                buttons: ['OK']
            });
            alert.present();
        });
    }
};
UpdateEtypeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
UpdateEtypeComponent.propDecorators = {
    employeeType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
UpdateEtypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-update-etype',
        template: _update_etype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_etype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateEtypeComponent);



/***/ }),

/***/ 93650:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/view-etype/view-etype.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewEtypeComponent": () => (/* binding */ ViewEtypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_etype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-etype.component.html?ngResource */ 11398);
/* harmony import */ var _view_etype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-etype.component.scss?ngResource */ 11819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);






let ViewEtypeComponent = class ViewEtypeComponent {
    constructor(modalCtrl, fb) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
    }
    ionViewWillEnter() {
        console.log('view Specific Employee Type -View Will Enter');
        console.log(this.employeeType);
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
ViewEtypeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
ViewEtypeComponent.propDecorators = {
    employeeType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ViewEtypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-view-etype',
        template: _view_etype_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_etype_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewEtypeComponent);



/***/ }),

/***/ 95192:
/*!*******************************************************!*\
  !*** ./src/app/services/employee/employee.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeService": () => (/* binding */ EmployeeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_app_models_employeeType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/employeeType */ 78392);
/* harmony import */ var src_app_pages_employee_employee_type_add_etype_add_etype_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/employee/employee-type/add-etype/add-etype.component */ 74536);
/* harmony import */ var src_app_pages_employee_employee_type_associative_etype_associative_etype_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/employee/employee-type/associative-etype/associative-etype.component */ 38375);
/* harmony import */ var src_app_pages_employee_employee_type_confirm_etype_confirm_etype_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/employee/employee-type/confirm-etype/confirm-etype.component */ 93814);
/* harmony import */ var src_app_pages_employee_employee_type_delete_etype_delete_etype_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/employee/employee-type/delete-etype/delete-etype.component */ 98980);
/* harmony import */ var src_app_pages_employee_employee_type_update_etype_update_etype_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/employee/employee-type/update-etype/update-etype.component */ 57112);
/* harmony import */ var src_app_pages_employee_employee_type_view_etype_view_etype_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/employee/employee-type/view-etype/view-etype.component */ 93650);
/* harmony import */ var _repo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../repo.service */ 56181);

/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */











let EmployeeService = class EmployeeService {
    constructor(repo, modalCtrl, alertCtrl) {
        this.repo = repo;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        //Creating a venueList for all the venues in the service.
        this._employeeTypeList = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
        //Receive the venues from the repo (API).
        this.repo.getEmployeeTypes().subscribe(result => {
            console.log('Employee Type List: Employee Service -> Get Employee Type');
            console.log(result);
            const tempResult = Object.assign(result);
            this._employeeTypeList.next(tempResult);
            console.log('Employee Type List: Employee Service -> Updated Employee Types');
            console.log(this._employeeTypeList);
        });
    }
    //Return the venue list as an observable.
    get employeeTypeList() {
        return this._employeeTypeList.asObservable();
    }
    //Methods
    //Add a venue to the venue list within the venue service.
    createEmployeeType(employeeType) {
        console.log('Employee Service: Repo -> Create Employee Type');
        console.log(JSON.stringify(employeeType));
        this.repo.createEmployeeType(employeeType).subscribe(res => {
            const tempResult = Object.assign(res);
            console.log('Employee Service: Create Employee Type');
            console.log(res);
            this._employeeTypeList.next(tempResult.data);
        });
    }
    //Receives a venue to update in the service venue list.
    updateEmployeeType(id, employeeType) {
        console.log('Employee Service: Repo -> Update Employee Type');
        console.log(employeeType);
        const currentEmployee = this._employeeTypeList.value;
        const index = currentEmployee.findIndex(et => et.employeeTypeID === id);
        this.repo.updateVenue(employeeType.employeeTypeID, employeeType).subscribe(result => console.log(result));
    }
    //Receives a venue to delete in the service venue list.
    deleteEmployeeType(id) {
        this.repo.deleteEmployeeType(id).subscribe(result => console.log(result));
    }
    matchingEmployeeType(input) {
        console.log('Employee Service: Repo -> Matching Employee Type');
        this.repo.getMatchEmployeeType(input);
    }
    existingEmployeeType(id) {
        console.log('Employee Service: Repo -> Existing Employee Type');
        this.repo.existsEmployeeType(id).subscribe(result => console.log(result));
    }
    //Modals
    addEmployeeTypeInfoModal(employeeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_employee_employee_type_add_etype_add_etype_component__WEBPACK_IMPORTED_MODULE_1__.AddEtypeComponent,
                componentProps: {
                    employeeType
                }
            });
            yield modal.present();
        });
    }
    //Display the update venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
    updateEmployeeTypeInfoModal(employeeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Employee Service: Update Employee Modal Call');
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_employee_employee_type_update_etype_update_etype_component__WEBPACK_IMPORTED_MODULE_5__.UpdateEtypeComponent,
                componentProps: {
                    employeeType
                }
            });
            yield modal.present();
        });
    }
    //Display the delete venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
    deleteVenueInfoModal(employeeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Employee Service: Delete Employee Type Modal Call');
            let tempEmployee = new src_app_models_employeeType__WEBPACK_IMPORTED_MODULE_0__.EmployeeType();
            tempEmployee = Object.assign(employeeType);
            console.log(tempEmployee);
            if (tempEmployee.employees != null && tempEmployee.employees.length > 0) {
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_employee_employee_type_associative_etype_associative_etype_component__WEBPACK_IMPORTED_MODULE_2__.AssociativeEtypeComponent,
                    componentProps: {
                        employeeType: tempEmployee
                    }
                });
                yield modal.present();
            }
            else {
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_employee_employee_type_delete_etype_delete_etype_component__WEBPACK_IMPORTED_MODULE_4__.DeleteEtypeComponent,
                    componentProps: {
                        employeeType: tempEmployee
                    }
                });
                //Update the current venue list with the venue list from the delete modal.
                modal.onDidDismiss().then(() => {
                    this.repo.getEmployeeTypes().subscribe(result => {
                        const tempResult = Object.assign(result);
                        this._employeeTypeList.next(tempResult);
                        console.log('Updated employee type list: Employee Service: delete employee type');
                        console.log(this._employeeTypeList);
                    });
                });
                yield modal.present();
            }
        });
    }
    //Display the view venue modal.
    //This method receives the selected venue object, from the venue page, in the modal through the componentProps.
    viewEmployeeTypeInfoModal(employeeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Employee Service: View Employee Type Modal Call');
            let tempEmployeeType = new src_app_models_employeeType__WEBPACK_IMPORTED_MODULE_0__.EmployeeType();
            tempEmployeeType = Object.assign(employeeType);
            console.log(tempEmployeeType);
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_employee_employee_type_view_etype_view_etype_component__WEBPACK_IMPORTED_MODULE_6__.ViewEtypeComponent,
                componentProps: {
                    employeeType: tempEmployeeType
                }
            });
            yield modal.present();
        });
    }
    //Display the confirm create/update modal
    //Receives the selected venue from the venue page
    confirmEmployeeTypeModal(selection, employeeType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Employee Service: Confirm Employee Type Modal Call');
            console.log(selection);
            if (selection === 1) {
                console.log('Performing ADD');
                let tempEmployeeType = new src_app_models_employeeType__WEBPACK_IMPORTED_MODULE_0__.EmployeeType();
                tempEmployeeType.employeeTypeID = 0;
                tempEmployeeType = Object.assign(employeeType);
                console.log(tempEmployeeType);
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_employee_employee_type_confirm_etype_confirm_etype_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmEtypeComponent,
                    componentProps: {
                        employeeType: tempEmployeeType,
                        choice: selection
                    }
                });
                //Update the current venue list with the venue list from the confirm modal.
                modal.onDidDismiss().then(() => {
                    this.repo.getEmployeeTypes().subscribe(result => {
                        const tempResult = Object.assign(result);
                        this._employeeTypeList.next(tempResult);
                        console.log('Updated employee type list: Employee Service: confirm employee');
                        console.log(this._employeeTypeList);
                    });
                });
                yield modal.present();
            }
            else if (selection === 2) {
                console.log('Performing UPDATE');
                let tempEmployeeType = new src_app_models_employeeType__WEBPACK_IMPORTED_MODULE_0__.EmployeeType();
                tempEmployeeType = Object.assign(employeeType);
                console.log(tempEmployeeType);
                const modal = yield this.modalCtrl.create({
                    component: src_app_pages_employee_employee_type_confirm_etype_confirm_etype_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmEtypeComponent,
                    componentProps: {
                        employeeType: tempEmployeeType,
                        choice: selection
                    }
                });
                modal.onDidDismiss().then(() => {
                    this.repo.getEmployeeTypes().subscribe(result => {
                        const tempResult = Object.assign(result);
                        this._employeeTypeList.next(tempResult);
                        console.log('Updated employee type list: Employee Service: Update confirm employee');
                        console.log(this._employeeTypeList);
                    });
                });
                yield modal.present();
            }
            else {
                console.log('BadOption: ' + selection);
            }
        });
    }
};
EmployeeService.ctorParameters = () => [
    { type: _repo_service__WEBPACK_IMPORTED_MODULE_7__.RepoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController }
];
EmployeeService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ 68271:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/add-etype/add-etype.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZXR5cGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 88828:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/associative-etype/associative-etype.component.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NvY2lhdGl2ZS1ldHlwZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7452:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/confirm-etype/confirm-etype.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWV0eXBlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 95290:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/delete-etype/delete-etype.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtZXR5cGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 81179:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/employee-type.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-searchbar {\n  --background: white;\n  --color: #221f1f;\n  --clear-button-color: #ff5b71;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nion-card {\n  background-color: white;\n  border-radius: 50px;\n}\n\nion-button {\n  border-radius: 10px;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\np {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLXR5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSiIsImZpbGUiOiJlbXBsb3llZS10eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDozMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MzAlXHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQgOiB3aGl0ZTtcclxuICAgIC0tY29sb3I6ICMyMjFmMWY7XHJcbiAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvciA6ICNmZjViNzE7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG5cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjMwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59Il19 */";

/***/ }),

/***/ 45186:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/update-etype/update-etype.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtZXR5cGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 11819:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/view-etype/view-etype.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWV0eXBlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 15875:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/add-etype/add-etype.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<p>\r\n  add-etype works!\r\n</p>\r\n";

/***/ }),

/***/ 72635:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/associative-etype/associative-etype.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "<p>\r\n  associative-etype works!\r\n</p>\r\n";

/***/ }),

/***/ 16970:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/confirm-etype/confirm-etype.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<p>\r\n  confirm-etype works!\r\n</p>\r\n";

/***/ }),

/***/ 47096:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/delete-etype/delete-etype.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<p>\r\n  delete-etype works!\r\n</p>\r\n";

/***/ }),

/***/ 5182:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/employee-type.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content>\r\n  <!--Searchbar (must make function to search)-->\r\n  <ion-searchbar expand=\"block\" placeholder='Search Employee Types...'></ion-searchbar>\r\n  <div class=\"ion-text-center\">\r\n    <!--(click)=\"addEmployeeTypeModal()\"-->\r\n    <ion-button color=\"success\">\r\n      Add Employee Type\r\n    </ion-button>\r\n  </div>\r\n  <br/>\r\n\r\n  <ion-grid *ngFor=\"let employeeType of employeeTypeList\">\r\n    <ion-list > \r\n      <ion-item-sliding >\r\n        <!--(click)=\"viewEmployeeTypeInfoModal()\"-->\r\n        <ion-item button >\r\n          <ion-label>\r\n            <!--Employee Name-->\r\n            <h1>{{employeeType.name}}</h1> \r\n            <p>\r\n              <!--Employee Description-->\r\n              {{employeeType.description}}<br/>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\" >\r\n          <!-- (click)=\"updateEmployeeTypeModal()\" -->\r\n          <ion-item-option color=\"secondary\" >Update<ion-icon name=\"refresh\" size=\"large\"></ion-icon></ion-item-option>\r\n          <!--(click)=\"deleteEmployeeTypeModal()\"-->\r\n          <ion-item-option color=\"danger\" >Delete<ion-icon name=\"trash\" size=\"large\"></ion-icon></ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 11567:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/update-etype/update-etype.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<p>\r\n  update-etype works!\r\n</p>\r\n";

/***/ }),

/***/ 11398:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-type/view-etype/view-etype.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<p>\r\n  view-etype works!\r\n</p>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee_employee-type_employee-type_module_ts.js.map