(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-hotlist-documents-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/hotlist/user-index/user-index.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/hotlist/user-index/user-index.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/hotlist/user-list/user-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/hotlist/user-list/user-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"> Hot List </h4>\r\n<p-table #dt [columns]=\"cols\" [value]=\"products\" [autoLayout]=\"true\" [resizableColumns]=\"true\" columnResizeMode=\"expand\" selectionMode=\"multiple\" [(selection)]=\"selectedProducts\">\r\n  <ng-template pTemplate=\"caption\">\r\n    <div class=\"p-d-flex\">\r\n      <button type=\"button\" pButton pRipple icon=\"pi pi-file-o\" (click)=\"dt.exportCSV()\" class=\"p-mr-2\" pTooltip=\"CSV\"\r\n        tooltipPosition=\"bottom\"></button>\r\n      <!-- <button type=\"button\" pButton pRipple icon=\"pi pi-file-excel\" (click)=\"exportExcel()\" class=\"p-button-success p-mr-2\"  pTooltip=\"XLS\" tooltipPosition=\"bottom\"></button> -->\r\n\r\n      <button type=\"button\" pButton pRipple icon=\"pi pi-filter\" (click)=\"dt.exportCSV({selectionOnly:true})\"\r\n        class=\"p-button-info p-ml-auto\" pTooltip=\"Selection Only\" tooltipPosition=\"bottom\"></button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n      <th>Request Resume</th>\r\n\r\n    </tr>\r\n    <tr>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"Experience\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'startsWith')\"\r\n          placeholder=\"State\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"Relocate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'startsWith')\"\r\n          placeholder=\"Visa Type\" class=\"p-column-filter\">\r\n      </th>\r\n      <th></th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n    <tr [pSelectableRow]=\"rowData\">\r\n      <td *ngFor=\"let col of columns\">\r\n        {{rowData[col.field]}}\r\n      </td>\r\n      <td><a >Request Resume</a></td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n"

/***/ }),

/***/ "./src/app/admin/hotlist/documents.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/hotlist/documents.module.ts ***!
  \***************************************************/
/*! exports provided: DocumentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsModule", function() { return DocumentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/hotlist/user-routing.module.ts");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/hotlist/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/hotlist/user-list/user-list.component.ts");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-rest.service */ "./src/app/admin/hotlist/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/contextmenu.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_contextmenu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm5/ngx-dropzone.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inplace */ "./node_modules/primeng/inplace.js");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_inplace__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _field2_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../field2.pipe */ "./src/app/field2.pipe.ts");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__);



























var DocumentsModule = /** @class */ (function () {
    function DocumentsModule() {
    }
    DocumentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__["UserIndexComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], _field2_pipe__WEBPACK_IMPORTED_MODULE_23__["FieldPipe2"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_9__["MultiSelectModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_11__["SliderModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_9__["MultiSelectModule"],
                primeng_contextmenu__WEBPACK_IMPORTED_MODULE_12__["ContextMenuModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressBarModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_17__["TabMenuModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__["FileUploadModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_20__["NgxDropzoneModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_22__["InplaceModule"]
            ],
            providers: [
                _user_rest_service__WEBPACK_IMPORTED_MODULE_6__["UserRestService"]
            ]
        })
    ], DocumentsModule);
    return DocumentsModule;
}());



/***/ }),

/***/ "./src/app/admin/hotlist/user-index/user-index.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/hotlist/user-index/user-index.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvdGxpc3QvdXNlci1pbmRleC91c2VyLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/hotlist/user-index/user-index.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/hotlist/user-index/user-index.component.ts ***!
  \******************************************************************/
/*! exports provided: UserIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIndexComponent", function() { return UserIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserIndexComponent = /** @class */ (function () {
    function UserIndexComponent(route, router) {
        this.route = route;
        this.router = router;
        this.userList = [];
        this.timeSheets = [];
        this.loading = true;
    }
    UserIndexComponent.prototype.ngOnInit = function () {
    };
    UserIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-index',
            template: __webpack_require__(/*! raw-loader!./user-index.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/hotlist/user-index/user-index.component.html"),
            styles: [__webpack_require__(/*! ./user-index.component.scss */ "./src/app/admin/hotlist/user-index/user-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserIndexComponent);
    return UserIndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/hotlist/user-list/user-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/hotlist/user-list/user-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaG90bGlzdC91c2VyLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXHNlcC1iYXJcXGFuZ3VsYXIvc3JjXFxhcHBcXGFkbWluXFxob3RsaXN0XFx1c2VyLWxpc3RcXHVzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vaG90bGlzdC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvdGxpc3QvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4uZGlzYWJsZS10ZHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUtdGQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/hotlist/user-list/user-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/hotlist/user-list/user-list.component.ts ***!
  \****************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/hotlist/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);







var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};
var UserListComponent = /** @class */ (function () {
    function UserListComponent(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getConsultants().subscribe(function (response) { console.log(_this.products = response.timesheet); }, function (error) { console.log(error); });
        this.cols = [
            { field: 'consultatName', header: 'Name' },
            { field: 'technology', header: 'Technology' },
            //   { field: 'consultatMobileNumber', header: 'MobileNumber' },
            //  { field: 'consultantEmail', header: 'Email' },
            { field: 'experience', header: 'Experience' },
            { field: 'state', header: 'state' },
            { field: 'willingLocation', header: 'Relocate', width: '20%', editable: false },
            { field: 'visaType', header: 'visa Type', width: '20%', editable: false },
        ];
        this.exportColumns = this.cols.map(function (col) { return ({ title: col.header, dataKey: col.field }); });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/hotlist/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/hotlist/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/admin/hotlist/user-rest.service.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/hotlist/user-rest.service.ts ***!
  \****************************************************/
/*! exports provided: UserRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRestService", function() { return UserRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserRestService = /** @class */ (function () {
    function UserRestService(http) {
        this.http = http;
        this.users = [];
    }
    UserRestService.prototype.getConsultants = function () {
        return this.http.get('http://portal.webmobilez.com/public/api/getHotlistConsultants/');
    };
    UserRestService.prototype.statusChangeConsultant = function (index) {
        var body = 'index=' + index;
        return this.http.post('http://portal.webmobilez.com/public/api/status-consultant', JSON.stringify({
            cmd: "sa",
            data: "sd"
        }));
    };
    UserRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserRestService);
    return UserRestService;
}());



/***/ }),

/***/ "./src/app/admin/hotlist/user-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/hotlist/user-routing.module.ts ***!
  \******************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/hotlist/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/hotlist/user-list/user-list.component.ts");





var routes = [
    // { path: 'list', component: UserListComponent, outlet: 'users' },
    {
        path: '',
        component: _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__["UserIndexComponent"],
        children: [
            { path: 'list', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/field2.pipe.ts":
/*!********************************!*\
  !*** ./src/app/field2.pipe.ts ***!
  \********************************/
/*! exports provided: FieldPipe2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldPipe2", function() { return FieldPipe2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FieldPipe2 = /** @class */ (function () {
    /**
     *
     */
    function FieldPipe2() {
    }
    FieldPipe2.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var column = args[0];
        var result = value;
        // addressModel.City.Name
        column.field.split(".").forEach(function (f) { return (result = result[f]); });
        return result ? result : '-';
    };
    FieldPipe2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "field"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FieldPipe2);
    return FieldPipe2;
}());



/***/ })

}]);
//# sourceMappingURL=admin-hotlist-documents-module-es5.js.map