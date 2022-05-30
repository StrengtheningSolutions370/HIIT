"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_employee_employee-page_employee-page_module_ts"],{

/***/ 75995:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/add-employee/add-employee.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEmployeeComponent": () => (/* binding */ AddEmployeeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_employee_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-employee.component.html?ngResource */ 11015);
/* harmony import */ var _add_employee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-employee.component.scss?ngResource */ 97188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let AddEmployeeComponent = class AddEmployeeComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.titles = [
            { name: 'Mr.' },
            { name: 'Mrs' },
            { name: 'Miss.' },
            { name: 'Ms.' },
            { name: 'Dr.' },
            { name: 'Prof.' }
        ];
        this.employeeTypes = [
            { name: 'Administrator' },
            { name: 'Trainer' }
        ];
        this.qualificationTypes = [
            { name: 'Diploma' },
            { name: 'Certificate' },
            { name: 'Postgraduate Study' },
            { name: 'Bachelors degree' }
        ];
        this.qualifications = [
            { description: 'Fitness Instructing' },
            { description: 'Personal Training' },
            { description: 'Sport Management' },
            { description: 'Fitness Science' }
        ];
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
AddEmployeeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
AddEmployeeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-employee',
        template: _add_employee_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_employee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEmployeeComponent);



/***/ }),

/***/ 86207:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/delete-employee/delete-employee.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteEmployeeComponent": () => (/* binding */ DeleteEmployeeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_employee_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-employee.component.html?ngResource */ 74652);
/* harmony import */ var _delete_employee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-employee.component.scss?ngResource */ 39831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let DeleteEmployeeComponent = class DeleteEmployeeComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
DeleteEmployeeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
DeleteEmployeeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-delete-employee',
        template: _delete_employee_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_employee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteEmployeeComponent);



/***/ }),

/***/ 56176:
/*!******************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/employee-page-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePagePageRoutingModule": () => (/* binding */ EmployeePagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _employee_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-page.page */ 90391);




const routes = [
    {
        path: '',
        component: _employee_page_page__WEBPACK_IMPORTED_MODULE_0__.EmployeePagePage
    }
];
let EmployeePagePageRoutingModule = class EmployeePagePageRoutingModule {
};
EmployeePagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmployeePagePageRoutingModule);



/***/ }),

/***/ 26023:
/*!**********************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/employee-page.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePagePageModule": () => (/* binding */ EmployeePagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _employee_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-page-routing.module */ 56176);
/* harmony import */ var _employee_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-page.page */ 90391);
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-employee/add-employee.component */ 75995);
/* harmony import */ var _delete_employee_delete_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-employee/delete-employee.component */ 86207);
/* harmony import */ var _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-employee/update-employee.component */ 75998);
/* harmony import */ var _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-employee/view-employee.component */ 76881);











let EmployeePagePageModule = class EmployeePagePageModule {
};
EmployeePagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _employee_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeePagePageRoutingModule
        ],
        declarations: [_employee_page_page__WEBPACK_IMPORTED_MODULE_1__.EmployeePagePage, _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_2__.AddEmployeeComponent, _delete_employee_delete_employee_component__WEBPACK_IMPORTED_MODULE_3__.DeleteEmployeeComponent,
            _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_4__.UpdateEmployeeComponent, _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_5__.ViewEmployeeComponent]
    })
], EmployeePagePageModule);



/***/ }),

/***/ 90391:
/*!********************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/employee-page.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePagePage": () => (/* binding */ EmployeePagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _employee_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-page.page.html?ngResource */ 12492);
/* harmony import */ var _employee_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-page.page.scss?ngResource */ 78514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-employee/add-employee.component */ 75995);
/* harmony import */ var _delete_employee_delete_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-employee/delete-employee.component */ 86207);
/* harmony import */ var _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-employee/update-employee.component */ 75998);
/* harmony import */ var _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-employee/view-employee.component */ 76881);









let EmployeePagePage = class EmployeePagePage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.employees = [
            {
                name: 'Juan',
                surname: 'Zonneveld',
                type: 'Trainer',
                cell: '078 569 5894',
                email: 'zz.zonneveld@gmail.com',
                title: 'Mr.'
            },
            {
                name: 'Sonali',
                surname: 'Marais',
                type: 'Trainer',
                cell: ' 079 584 4523',
                email: 'sonalimarais001@icloud.com',
                title: 'Mrs.'
            },
            {
                name: 'Stacey',
                surname: 'Scott',
                type: 'Administrator',
                cell: '178 963 4123',
                email: 'staceyscot@icloud.com',
                title: 'Prof.'
            },
            {
                name: 'Luhan',
                surname: 'Smith',
                type: 'Trainer',
                cell: '078 987 7412',
                email: 'smith.luhan@gmail.com',
                title: 'Mr.'
            },
            {
                name: 'Ruben',
                surname: 'Haddow',
                type: 'Trainer',
                cell: '089 546 4125',
                email: 'ruben.haddow@gmail.com',
                title: 'Mr.'
            },
            {
                name: 'Chiante',
                surname: 'Brits',
                type: 'Administrator',
                email: 'brits550chiante@gmail.com',
                cell: '128 456 8952',
                title: 'Miss.'
            },
            {
                name: 'Juan',
                surname: 'Zonneveld',
                type: 'Trainer',
                cell: '089 564 2563',
                email: 'zz.zonneveld@gmail.com',
                title: 'Mr.'
            },
            {
                name: 'Sonali',
                surname: 'Marais',
                type: 'Trainer',
                cell: '078 962 2658',
                email: 'sonalimarais001@icloud.com',
                title: 'Mrs.'
            },
            {
                name: 'Stacey',
                surname: 'Scott',
                type: 'Administrator',
                cell: '089 549 5123',
                email: 'staceyscot@icloud.com',
                title: 'Prof.'
            },
            {
                name: 'Luhan',
                surname: 'Smith',
                type: 'Trainer',
                cell: '078 965 1236',
                email: 'smith.luhan@gmail.com',
                title: 'Mr.'
            }
        ];
    }
    addEmployeeInfoModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_2__.AddEmployeeComponent
            });
            yield modal.present();
        });
    }
    updateEmployeeInfoModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_4__.UpdateEmployeeComponent
            });
            yield modal.present();
        });
    }
    deleteEmployeeInfoModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _delete_employee_delete_employee_component__WEBPACK_IMPORTED_MODULE_3__.DeleteEmployeeComponent
            });
            yield modal.present();
        });
    }
    viewEmployeeInfoModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_5__.ViewEmployeeComponent
            });
            yield modal.present();
        });
    }
};
EmployeePagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
EmployeePagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-employee-page',
        template: _employee_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_employee_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmployeePagePage);



/***/ }),

/***/ 75998:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/update-employee/update-employee.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateEmployeeComponent": () => (/* binding */ UpdateEmployeeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_employee_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-employee.component.html?ngResource */ 84627);
/* harmony import */ var _update_employee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-employee.component.scss?ngResource */ 47713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let UpdateEmployeeComponent = class UpdateEmployeeComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.titles = [
            { name: 'Mr.' },
            { name: 'Mrs' },
            { name: 'Miss.' },
            { name: 'Ms.' },
            { name: 'Dr.' },
            { name: 'Prof.' }
        ];
        this.employeeTypes = [
            { name: 'Administrator' },
            { name: 'Trainer' }
        ];
        this.qualificationTypes = [
            { name: 'Diploma' },
            { name: 'Certificate' },
            { name: 'Postgraduate Study' },
            { name: 'Bachelors degree' }
        ];
        this.qualifications = [
            { description: 'Fitness Instructing' },
            { description: 'Personal Training' },
            { description: 'Sport Management' },
            { description: 'Fitness Science' }
        ];
    }
    ngOnInit() { }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
UpdateEmployeeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
UpdateEmployeeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-update-employee',
        template: _update_employee_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_employee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateEmployeeComponent);



/***/ }),

/***/ 76881:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/view-employee/view-employee.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewEmployeeComponent": () => (/* binding */ ViewEmployeeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_employee_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-employee.component.html?ngResource */ 5768);
/* harmony import */ var _view_employee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-employee.component.scss?ngResource */ 75147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let ViewEmployeeComponent = class ViewEmployeeComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
    ngOnInit() { }
};
ViewEmployeeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ViewEmployeeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-view-employee',
        template: _view_employee_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_employee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewEmployeeComponent);



/***/ }),

/***/ 97188:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/add-employee/add-employee.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6ImFkZC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogQ2FiaW4sSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSJdfQ== */";

/***/ }),

/***/ 39831:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/delete-employee/delete-employee.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6ImRlbGV0ZS1lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogQ2FiaW4sSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSJdfQ== */";

/***/ }),

/***/ 78514:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/employee-page.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\nion-searchbar {\n  --background: white;\n  --color: #221f1f;\n  --clear-button-color: #ff5b71;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nion-button {\n  border-radius: 10px;\n}\n\np {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKIiwiZmlsZSI6ImVtcGxveWVlLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgIG1hcmdpbi1yaWdodDozMCVcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhcntcclxuICAgIC0tYmFja2dyb3VuZCA6IHdoaXRlO1xyXG4gICAgLS1jb2xvcjogIzIyMWYxZjtcclxuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yIDogI2ZmNWI3MTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcblxyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 47713:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/update-employee/update-employee.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6InVwZGF0ZS1lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogQ2FiaW4sSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSJdfQ== */";

/***/ }),

/***/ 75147:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/view-employee/view-employee.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  font-family: Cabin, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnRUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJ2aWV3LWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBDYWJpbixIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Il19 */";

/***/ }),

/***/ 11015:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/add-employee/add-employee.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Create Employee</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- This modal is not complete, please compare with \"Advenue\" for the correct format -->\r\n<!-- Looks at the html, scss and typescript -->\r\n\r\n<ion-content>\r\n  <form #cEmployeeForm=\"ngForm\">\r\n\r\n    <br/>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Upload Profile Photo</ion-label>\r\n        <ion-input type=\"file\" ></ion-input>\r\n      </ion-item>\r\n        \r\n      <ion-row>\r\n        <ion-col>\r\n         \r\n          <ion-item>\r\n            <ion-label position=\"floating\">Name:</ion-label>\r\n            <ion-input required ngModel name #nameCtrl=\"ngModel\"></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\r\n            <p>Please enter a valid employee name</p>\r\n          </ion-text>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Surname:</ion-label>\r\n            <ion-input required ngModel surname #surnameCtrl=\"ngModel\"></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"!surnameCtrl.valid && surnameCtrl.touched\">\r\n            <p>Please enter a valid employee surname</p>\r\n          </ion-text>\r\n      \r\n          <!--Dropdown for title-->\r\n          <ion-item>\r\n            <ion-label>Titles</ion-label>\r\n            <ion-select placeholder=\"Select Title\">\r\n              <ion-select-option *ngFor=\"let title of titles\" [value]=\"title\">{{title.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>  \r\n      \r\n          <ion-item>\r\n            <ion-label position=\"floating\">ID Number:</ion-label>\r\n            <ion-input minlength=\"13\" maxlength=\"13\" required ngModel id #idCtrl=\"ngModel\"></ion-input>\r\n          </ion-item>   \r\n          <ion-text color=\"danger\" *ngIf=\"!idCtrl.valid && idCtrl.touched\">\r\n            <p>Please enter a valid ID Number</p>\r\n          </ion-text>\r\n          \r\n          <ion-item>\r\n            <ion-label position=\"floating\">Mobile Number:</ion-label>\r\n            <ion-input minlength=\"10\" maxlength=\"10\" required=\"true\" required ngModel num #numCtrl=\"ngModel\"></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"!numCtrl.valid && numCtrl.touched\">\r\n            <p>Please enter a valid mobile number</p>\r\n          </ion-text>\r\n            \r\n          <ion-item>\r\n            <ion-label position=\"floating\">Email:</ion-label>\r\n              <ion-input required ngModel email #emailCtrl=\"ngModel\"></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"!emailCtrl.valid && emailCtrl.touched\">\r\n            <p>Please enter a valid email address</p>\r\n          </ion-text>\r\n\r\n          <!--Dropdown for qualification-->\r\n          <ion-item>\r\n            <ion-label>Qualification</ion-label>\r\n            <ion-select placeholder=\"Select Qualification\">\r\n              <ion-select-option *ngFor=\"let qualification of qualifications\" [value]=\"qualification\">{{qualification.description}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <!--Dropdown for qualificationType-->\r\n          <ion-item>\r\n            <ion-label>Qualification Type</ion-label>\r\n              <ion-select placeholder=\"Select Qualification Type\">\r\n                <ion-select-option *ngFor=\"let qType of qualificationTypes\" [value]=\"qType\">{{qType.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item> \r\n\r\n          <!--Dropdown for employeeTypes-->\r\n          <ion-item>\r\n            <ion-label>Employee Type</ion-label>\r\n            <ion-select placeholder=\"Select Employee Type\">\r\n              <ion-select-option *ngFor=\"let eType of employeeTypes\" [value]=\"eType\">{{eType.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Employee Contract:</ion-label>\r\n        <ion-input required=\"true\" type=\"file\"></ion-input>\r\n      </ion-item>\r\n\r\n      <br/>\r\n      <!--(click)=\"employeeAdd()\"-->\r\n      <ion-button expand=\"block\" color=\"success\">Create Employee</ion-button>\r\n\r\n</form>\r\n</ion-content>\r\n\r\n\r\n<!-- <ion-content>\r\n  <form [Formgroup]=\"cEmployeeForm\" (ngSubmit) = \"submitForm()\">\r\n\r\n    <br/>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Upload Profile Photo</ion-label>\r\n        <ion-input type=\"file\" formControlName=\"contract\" required=\"\"></ion-input>\r\n      </ion-item>\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.contract.errors?.required\">\r\n        Profile Photo is required.\r\n      </span>\r\n        \r\n      <ion-row>\r\n        <ion-col>\r\n         \r\n          <ion-item>\r\n            <ion-label position=\"floating\">Name:</ion-label>\r\n            <ion-input required=\"\" formControlName=\"name\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.required\">\r\n            Employee name is required.\r\n          </span>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Surname:</ion-label>\r\n            <ion-input required=\"\" formControlName=\"surname\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.surname.errors?.required\">\r\n            Employee surname is required.\r\n          </span> -->\r\n      \r\n          <!-- Dropdown for title-->\r\n          <!-- <ion-item>\r\n            <ion-label>Titles</ion-label>\r\n            <ion-select placeholder=\"Select Title\">\r\n              <ion-select-option *ngFor=\"let title of titles\" [value]=\"title\">{{title.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>   -->\r\n      \r\n          <!-- <ion-item>\r\n            <ion-label position=\"floating\">ID Number:</ion-label>\r\n            <ion-input minlength=\"13\" maxlength=\"13\" required=\"\" formControlName=\"id\" type=\"text\"></ion-input>\r\n          </ion-item>   \r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.id.errors?.required\">\r\n            Employee ID number is required.\r\n          </span> -->\r\n          \r\n          <!-- <ion-item>\r\n            <ion-label position=\"floating\">Mobile Number:</ion-label>\r\n            <ion-input minlength=\"10\" maxlength=\"10\" required=\"\" formControlName=\"mobile\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.mobile.errors?.required\">\r\n            Employee mobile number is required.\r\n          </span> -->\r\n            \r\n          <!-- <ion-item>\r\n            <ion-label position=\"floating\">Email:</ion-label>\r\n              <ion-input required=\"\" formControlName=\"email\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\r\n            Employee email address is required.\r\n          </span> -->\r\n\r\n          <!--Dropdown for qualification-->\r\n          <!-- <ion-item>\r\n            <ion-label>Qualification</ion-label>\r\n            <ion-select placeholder=\"Select Qualification\">\r\n              <ion-select-option *ngFor=\"let qualification of qualifications\" [value]=\"qualification\">{{qualification.description}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item> -->\r\n\r\n          <!--Dropdown for qualificationType-->\r\n          <!-- <ion-item>\r\n            <ion-label>Qualification Type</ion-label>\r\n              <ion-select placeholder=\"Select Qualification Type\">\r\n                <ion-select-option *ngFor=\"let qType of qualificationTypes\" [value]=\"qType\">{{qType.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>  -->\r\n\r\n          <!--Dropdown for employeeTypes-->\r\n          <!-- <ion-item>\r\n            <ion-label>Employee Type</ion-label>\r\n            <ion-select placeholder=\"Select Employee Type\">\r\n              <ion-select-option *ngFor=\"let eType of employeeTypes\" [value]=\"eType\">{{eType.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item> -->\r\n\r\n        <!-- </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Employee Contract:</ion-label>\r\n        <ion-input required=\"\" formControlName=\"contract\" type=\"file\"></ion-input>\r\n      </ion-item>\r\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.contract.errors?.required\">\r\n        Employee contract is required.\r\n      </span>\r\n\r\n      <br/>\r\n      <ion-button expand=\"block\" color=\"success\">Create Employee</ion-button>\r\n\r\n</form>\r\n</ion-content> --> -->\r\n\r\n";

/***/ }),

/***/ 74652:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/delete-employee/delete-employee.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Delete Employee</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\">Return</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- This modal is not complete, please compare with \"Deletevenue\" for the correct format -->\r\n<!-- Looks at the html, scss and typescript -->\r\n\r\n<ion-content>\r\n  <form #dEmployeeForm=\"ngForm\">\r\n    <br/>\r\n    <ion-label class=\"ion-text-center\">\r\n      <h3>Are you sure you want to delete the following employee?</h3>\r\n    </ion-label>\r\n    <br/>\r\n    <ion-row>\r\n      <ion-col>\r\n  \r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>Name : </h2>\r\n            <!--Insert Name Here-->\r\n            <p>Juan</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>Title :</h2>\r\n            <!--Insert Title Here-->\r\n            <p>Mr</p>\r\n          </ion-label>\r\n        </ion-item>          \r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>ID Number : </h2>\r\n            <!--Insert ID Here-->\r\n            <p>0584695874561</p>\r\n          </ion-label>\r\n        </ion-item>          \r\n    \r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>Email : </h2>\r\n            <!--Insert email Here-->\r\n            <p>zz.zonneveld@gmail.com</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>Qualification Type : </h2>\r\n            <!--Insert Cell Here-->\r\n            <p>Diploma</p>\r\n          </ion-label>\r\n        </ion-item>  \r\n        \r\n      </ion-col>\r\n      <ion-col>\r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>Surname : </h2>\r\n            <!--Insert Surname Here-->\r\n            <p>Zonneveld</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>Gender : </h2>\r\n            <!--Insert Gender Here-->\r\n            <p>Male</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>Mobile Number : </h2>\r\n            <!--Insert Cell Here-->\r\n            <p>079 589 4589</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>Qualification : </h2>\r\n            <!--Insert Qualification Here-->\r\n            <p>Personal Trainer</p>\r\n          </ion-label>\r\n        </ion-item> \r\n          \r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>Employee Type : </h2>\r\n            <!--Insert Employee Type Here-->\r\n            <p>Trainer</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-button expand=\"block\" type=\"submit\" color=\"tertiary\">Delete Employee</ion-button>\r\n  </form>\r\n</ion-content>\r\n\r\n\r\n";

/***/ }),

/***/ 12492:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/employee-page.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  \r\n  <br/>\r\n  <ion-searchbar expand=\"block\" placeholder='I am looking for...' cancelButtonText=\"Close\"></ion-searchbar>\r\n\r\n  <br/>\r\n  <br/>\r\n\r\n  <div class=\"ion-text-center\">\r\n    <ion-button color=\"success\" style=\"margin-left:30%;margin-right:30%\" (click)=\"addEmployeeInfoModal()\">\r\n      Add Employee \r\n      <ion-icon name=\"add\" size=\"medium\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  \r\n  <ion-grid>\r\n    <div style=\"display: inline-block;width: 350px;height: 200px;margin-bottom: 5px;\" >\r\n     <ion-col size=\"4\" *ngFor=\"let employee of employees\">\r\n      <ion-card>\r\n        <div>\r\n          <ion-card-header >\r\n            <ion-avatar item-start button (click)=\"viewEmployeeInfoModal()\">\r\n              <!--Employee Image-->\r\n              <img src=\"../../assets/avatar.jpg\">\r\n            </ion-avatar>\r\n              <ion-card-title style=\"color:#e7e8ec;\">\r\n                <!--Employee_Name ' ' Employee_Surname-->\r\n                {{employee.title}} {{employee.name}}  {{employee.surname}}\r\n              </ion-card-title>\r\n            </ion-card-header>\r\n         </div>\r\n          <ion-card-content style=\"color:#b1b2b6;\">\r\n            <ion-row>\r\n              <!--Employee_Type-->\r\n              {{employee.type}}\r\n            </ion-row>\r\n            <ion-row>\r\n              <!--Employee Gender-->\r\n              {{employee.cell}}\r\n            </ion-row>\r\n            <ion-row>\r\n              <!--Employee email-->\r\n              {{employee.email}}\r\n            </ion-row>\r\n            <br/>\r\n            <ion-row>\r\n              <ion-button color=\"secondary\" (click)=\"updateEmployeeInfoModal()\"><ion-icon name=\"refresh\"></ion-icon>Update</ion-button>\r\n              <ion-button color=\"tertiary\" (click)=\"deleteEmployeeInfoModal()\"> <ion-icon name=\"trash\" size=\"medium\"></ion-icon>Delete </ion-button>\r\n            </ion-row>\r\n          </ion-card-content>\r\n      </ion-card>\r\n     </ion-col>\r\n     \r\n    <!--<mat-paginator [pageSize]=\"3\" [pageSizeOptions]=\"[3, 5, 10]\" showFirstLastButtons> </mat-paginator-->\r\n    </div>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n";

/***/ }),

/***/ 84627:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/update-employee/update-employee.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Update Employee</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <!--(click)=\"dismissModal()-->\r\n      <ion-button color=\"tertiary\" (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- This modal is not complete, please compare with \"updatevenue\" for the correct format -->\r\n<!-- Looks at the html, scss and typescript -->\r\n\r\n<ion-content>\r\n  <!--<form #uEmployeeForm=\"ngForm\" (ngSubmit)=\"onSubmit(uEmployeeForm)\">-->\r\n  <form #uEmployeeForm=\"ngForm\">\r\n\r\n    <br/>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Upload Profile Photo</ion-label>\r\n        <!--Show selected picture-->\r\n        <ion-input type=\"file\" ></ion-input>\r\n      </ion-item>\r\n        \r\n      <ion-row>\r\n        <ion-col>\r\n         \r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Name:</ion-label>\r\n            <ion-input required ngModel name #nameCtrl=\"ngModel\" placeholder=\"Juan\"></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\r\n            <p>Please enter a valid employee name</p>\r\n          </ion-text>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Surname:</ion-label>\r\n            <ion-input required ngModel surname #surnameCtrl=\"ngModel\" placeholder=\"Zonneveld\"></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"!surnameCtrl.valid && surnameCtrl.touched\">\r\n            <p>Please enter a valid employee surname</p>\r\n          </ion-text>\r\n      \r\n          <!--Dropdown for title-->\r\n          <ion-item>\r\n            <ion-label>Titles</ion-label>\r\n            <ion-select placeholder=\"Mr\">\r\n              <ion-select-option *ngFor=\"let title of titles\" [value]=\"title\">{{title.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>  \r\n      \r\n          <ion-item>\r\n            <ion-label position=\"stacked\">ID Number:</ion-label>\r\n            <ion-input minlength=\"13\" maxlength=\"13\" required ngModel id #idCtrl=\"ngModel\" placeholder=\"0589458625458\"></ion-input>\r\n          </ion-item>   \r\n          <ion-text color=\"danger\" *ngIf=\"!idCtrl.valid && idCtrl.touched\">\r\n            <p>Please enter a valid ID Number</p>\r\n          </ion-text>\r\n          \r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Mobile Number:</ion-label>\r\n            <ion-input minlength=\"10\" maxlength=\"10\" required=\"true\" required ngModel num #numCtrl=\"ngModel\" placeholder=\"058 947 569\"></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"!numCtrl.valid && numCtrl.touched\">\r\n            <p>Please enter a valid mobile number</p>\r\n          </ion-text>\r\n            \r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Email:</ion-label>\r\n              <ion-input required ngModel email #emailCtrl=\"ngModel\" placeholder=\"zz.zonneveld@gmail.com\"></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"!emailCtrl.valid && emailCtrl.touched\">\r\n            <p>Please enter a valid email address</p>\r\n          </ion-text>\r\n\r\n          <!--Dropdown for qualification-->\r\n          <ion-item>\r\n            <ion-label>Qualification</ion-label>\r\n            <ion-select placeholder=\"Personal Trainer\">\r\n              <ion-select-option *ngFor=\"let qualification of qualifications\" [value]=\"qualification\">{{qualification.description}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <!--Dropdown for qualificationType-->\r\n          <ion-item>\r\n            <ion-label>Qualification Type</ion-label>\r\n              <ion-select placeholder=\"Diploma\">\r\n                <ion-select-option *ngFor=\"let qType of qualificationTypes\" [value]=\"qType\">{{qType.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item> \r\n\r\n          <!--Dropdown for employeeTypes-->\r\n          <ion-item>\r\n            <ion-label>Employee Type</ion-label>\r\n            <ion-select placeholder=\"Trainer\">\r\n              <ion-select-option *ngFor=\"let eType of employeeTypes\" [value]=\"eType\">{{eType.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <br/>\r\n      <!--(click)=\"employeeAdd()\"-->\r\n      <ion-button expand=\"block\" color=\"secondary\">Update Employee</ion-button>\r\n\r\n</form>\r\n</ion-content>";

/***/ }),

/***/ 5768:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/employee/employee-page/view-employee/view-employee.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View Employee</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button  (click)=\"dismissModal()\" color=\"tertiary\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- This modal is not complete, please compare with \"Advenue\" for the correct format -->\r\n<!-- Looks at the html, scss and typescript -->\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-grid>\r\n      \r\n      <ion-item>\r\n        <!--Employee Image-->\r\n        <img src=\"../../assets/avatar.jpg\" width=\"40%\" height=\"150px\" style=\"margin-left:30%;\">\r\n      </ion-item>\r\n        \r\n      <ion-row>\r\n        <ion-col>\r\n    \r\n          <ion-item>\r\n            <ion-label>\r\n              <h2>Name : </h2>\r\n              <!--Insert Name Here-->\r\n              <p>Juan</p>\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>\r\n              <h2>Title :</h2>\r\n              <!--Insert Title Here-->\r\n              <p>Mr</p>\r\n            </ion-label>\r\n          </ion-item>          \r\n\r\n          <ion-item>\r\n            <ion-label>\r\n              <h2>ID Number : </h2>\r\n              <!--Insert ID Here-->\r\n              <p>0584695874561</p>\r\n            </ion-label>\r\n          </ion-item>          \r\n      \r\n          <ion-item>\r\n            <ion-label>\r\n              <h2>Email : </h2>\r\n              <!--Insert email Here-->\r\n              <p>zz.zonneveld@gmail.com</p>\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>\r\n              <h2>Qualification Type : </h2>\r\n              <!--Insert Cell Here-->\r\n              <p>Diploma</p>\r\n            </ion-label>\r\n          </ion-item>  \r\n          \r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-item>\r\n            <ion-label>\r\n              <h2>Surname : </h2>\r\n              <!--Insert Surname Here-->\r\n              <p>Zonneveld</p>\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>\r\n              <h2>Date of Birth : </h2>\r\n              <!--Insert dob Here, extract from ID-->\r\n              <p>14 August 2001</p>\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>\r\n              <h2>Mobile Number : </h2>\r\n              <!--Insert Cell Here-->\r\n              <p>079 589 4589</p>\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>\r\n              <h2>Qualification : </h2>\r\n              <!--Insert Qualification Here-->\r\n              <p>Personal Trainer</p>\r\n            </ion-label>\r\n          </ion-item> \r\n            \r\n          <ion-item>\r\n            <ion-label>\r\n              <h2>Employee Type : </h2>\r\n              <!--Insert Employee Type Here-->\r\n              <p>Trainer</p>\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee_employee-page_employee-page_module_ts.js.map