(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-superadmin-superAdmin-module"],{

/***/ "./node_modules/primeng/chips.js":
/*!***************************************!*\
  !*** ./node_modules/primeng/chips.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/chips/chips */ "./node_modules/primeng/components/chips/chips.js"));

/***/ }),

/***/ "./node_modules/primeng/components/chips/chips.js":
/*!********************************************************!*\
  !*** ./node_modules/primeng/components/chips/chips.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var inputtext_1 = __webpack_require__(/*! ../inputtext/inputtext */ "./node_modules/primeng/components/inputtext/inputtext.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
exports.CHIPS_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return Chips; }),
    multi: true
};
var Chips = /** @class */ (function () {
    function Chips(el) {
        this.el = el;
        this.allowDuplicate = true;
        this.onAdd = new core_1.EventEmitter();
        this.onRemove = new core_1.EventEmitter();
        this.onFocus = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
        this.onChipClick = new core_1.EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Chips.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
                default:
                    _this.itemTemplate = item.template;
                    break;
            }
        });
    };
    Chips.prototype.onClick = function (event) {
        this.inputViewChild.nativeElement.focus();
    };
    Chips.prototype.onItemClick = function (event, item) {
        this.onChipClick.emit({
            originalEvent: event,
            value: item
        });
    };
    Chips.prototype.writeValue = function (value) {
        this.value = value;
        this.updateMaxedOut();
    };
    Chips.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Chips.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Chips.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Chips.prototype.resolveFieldData = function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    Chips.prototype.onInputFocus = function (event) {
        this.focus = true;
        this.onFocus.emit(event);
    };
    Chips.prototype.onInputBlur = function (event) {
        this.focus = false;
        if (this.addOnBlur && this.inputViewChild.nativeElement.value) {
            this.addItem(event, this.inputViewChild.nativeElement.value);
            this.inputViewChild.nativeElement.value = '';
        }
        this.onModelTouched();
        this.onBlur.emit(event);
    };
    Chips.prototype.removeItem = function (event, index) {
        if (this.disabled) {
            return;
        }
        var removedItem = this.value[index];
        this.value = this.value.filter(function (val, i) { return i != index; });
        this.onModelChange(this.value);
        this.onRemove.emit({
            originalEvent: event,
            value: removedItem
        });
        this.updateMaxedOut();
    };
    Chips.prototype.addItem = function (event, item) {
        this.value = this.value || [];
        if (item && item.trim().length) {
            if (this.allowDuplicate || this.value.indexOf(item) === -1) {
                this.value = this.value.concat([item]);
                this.onModelChange(this.value);
                this.onAdd.emit({
                    originalEvent: event,
                    value: item
                });
            }
        }
        this.updateMaxedOut();
    };
    Chips.prototype.onKeydown = function (event) {
        switch (event.which) {
            //backspace
            case 8:
                if (this.inputViewChild.nativeElement.value.length === 0 && this.value && this.value.length > 0) {
                    this.value = this.value.slice();
                    var removedItem = this.value.pop();
                    this.onModelChange(this.value);
                    this.onRemove.emit({
                        originalEvent: event,
                        value: removedItem
                    });
                }
                break;
            //enter
            case 13:
                this.addItem(event, this.inputViewChild.nativeElement.value);
                this.inputViewChild.nativeElement.value = '';
                event.preventDefault();
                break;
            case 9:
                if (this.addOnTab && this.inputViewChild.nativeElement.value !== '') {
                    this.addItem(event, this.inputViewChild.nativeElement.value);
                    this.inputViewChild.nativeElement.value = '';
                    event.preventDefault();
                }
                break;
            default:
                if (this.max && this.value && this.max === this.value.length) {
                    event.preventDefault();
                }
                break;
        }
    };
    Chips.prototype.updateMaxedOut = function () {
        if (this.inputViewChild && this.inputViewChild.nativeElement) {
            if (this.max && this.value && this.max === this.value.length)
                this.inputViewChild.nativeElement.disabled = true;
            else
                this.inputViewChild.nativeElement.disabled = this.disabled || false;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Chips.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Chips.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Chips.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Chips.prototype, "field", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Chips.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Chips.prototype, "max", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Chips.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Chips.prototype, "inputId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Chips.prototype, "allowDuplicate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Chips.prototype, "inputStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Chips.prototype, "inputStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Chips.prototype, "addOnTab", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Chips.prototype, "addOnBlur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Chips.prototype, "onAdd", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Chips.prototype, "onRemove", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Chips.prototype, "onFocus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Chips.prototype, "onBlur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Chips.prototype, "onChipClick", void 0);
    __decorate([
        core_1.ViewChild('inputtext', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Chips.prototype, "inputViewChild", void 0);
    __decorate([
        core_1.ContentChildren(shared_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], Chips.prototype, "templates", void 0);
    Chips = __decorate([
        core_1.Component({
            selector: 'p-chips',
            template: "\n        <div [ngClass]=\"'ui-chips ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"onClick($event)\">\n            <ul [ngClass]=\"{'ui-inputtext ui-state-default ui-corner-all':true,'ui-state-focus':focus,'ui-state-disabled':disabled}\">\n                <li #token *ngFor=\"let item of value; let i = index;\" class=\"ui-chips-token ui-state-highlight ui-corner-all\" (click)=\"onItemClick($event, item)\">\n                    <span *ngIf=\"!disabled\" class=\"ui-chips-token-icon pi pi-fw pi-times\" (click)=\"removeItem($event,i)\"></span>\n                    <span *ngIf=\"!itemTemplate\" class=\"ui-chips-token-label\">{{field ? resolveFieldData(item,field) : item}}</span>\n                    <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item}\"></ng-container>\n                </li>\n                <li class=\"ui-chips-input-token\">\n                    <input #inputtext type=\"text\" [attr.id]=\"inputId\" [attr.placeholder]=\"(value && value.length ? null : placeholder)\" [attr.tabindex]=\"tabindex\" (keydown)=\"onKeydown($event)\" \n                        (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" [disabled]=\"disabled\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\">\n                </li>\n            </ul>\n        </div>\n    ",
            providers: [exports.CHIPS_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], Chips);
    return Chips;
}());
exports.Chips = Chips;
var ChipsModule = /** @class */ (function () {
    function ChipsModule() {
    }
    ChipsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, inputtext_1.InputTextModule, shared_1.SharedModule],
            exports: [Chips, inputtext_1.InputTextModule, shared_1.SharedModule],
            declarations: [Chips]
        })
    ], ChipsModule);
    return ChipsModule;
}());
exports.ChipsModule = ChipsModule;
//# sourceMappingURL=chips.js.map

/***/ }),

/***/ "./node_modules/primeng/dynamicdialog.js":
/*!***********************************************!*\
  !*** ./node_modules/primeng/dynamicdialog.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dynamicdialog/dynamicdialog */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog.js"));

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/benchsales/user-create/user-create.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/benchsales/user-create/user-create.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Add Submissions </h4>\n     <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Choose Consultant:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"state\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (onChange)=\"onChange($event)\"\n                  (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"state.invalid && (state.dirty || state.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"state.errors?.required\">\n                    Consultant is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.state }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Rate:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{crate}}\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Email:</label>\n                <input type=\"email\" class=\"form-control\" value=\"{{cemail}}\" readonly>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Consultant Number:</label>\n                <input type=\"text\" value=\"{{cmobile}}\" class=\"form-control\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Technology:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{ctechnology}}\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Choose Vendor:</label>\n                <p-dropdown #df [options]=\"vendors\" [(ngModel)]=\"selectedVendors\" formControlName=\"vid\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeVendor($event)\" (keydown)=\"vendorsUi($event)\">\n                </p-dropdown>\n\n              </div>\n              <p-button (click)=\"showModalDialog()\" icon=\"pi pi-external-link\" label=\"Add Vendor\"></p-button>\n\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"df.value\">\n              <div class=\"form-group\">\n                <label>Choose Vendor Contacts:</label>\n                <p-dropdown [options]=\"contacts\" [(ngModel)]=\"selectedContacts\" formControlName=\"vendorDetailId\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeContacts($event)\" (keydown)=\"contactsUi($event)\">\n                </p-dropdown>\n                <div *ngIf=\"vendorDetailId.invalid && (vendorDetailId.dirty || vendorDetailId.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"vendorDetailId.errors?.required\">\n                    Contact is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorDetailId }}</small>\n\n              </div>\n              <p-button (click)=\"showModalDialog1()\" icon=\"pi pi-external-link\" label=\"Add Contact\"></p-button>\n\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"vcname\">\n              <div class=\"form-group\">\n                <label>Vendor Contact Name:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{vcname}}\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"vmobile\">\n              <div class=\"form-group\">\n                <label>Vendor Mobile Number:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{vmobile}}\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Choose End CLient:</label>\n                <p-dropdown #dfrf [options]=\"clients\" [(ngModel)]=\"selectedClients\" formControlName=\"clientId\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeClients($event)\" (keydown)=\"clientsUi($event)\">\n                </p-dropdown>\n                <div *ngIf=\"clientId.invalid && (clientId.dirty || clientId.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"clientId.errors?.required\">\n                    Client is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.clientId }}</small>\n                <p-button (click)=\"showModalDialogClient()\" icon=\"pi pi-external-link\" label=\"Add Client\"></p-button>\n\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>End CLient Location:</label>\n                <input type=\"text\" formControlName=\"endClientLocation\" class=\"form-control\"\n                  placeholder=\"End Client Location\">\n                <div *ngIf=\"endClientLocation.invalid && (endClientLocation.dirty || endClientLocation.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"endClientLocation.errors?.required\">\n                    End ClientLocation is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.endClientLocation }}</small>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Actual Rate:</label>\n                <input type=\"number\" formControlName=\"actualRate\" class=\"form-control\" placeholder=\"Actual Rate\">\n                <div *ngIf=\"actualRate.invalid && (actualRate.dirty || actualRate.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"actualRate.errors?.required\">\n                    ActualRate is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Submission Rate:</label>\n                <input type=\"number\" formControlName=\"submissionRate\" class=\"form-control\" placeholder=\"Submit   Rate\">\n                <div *ngIf=\"submissionRate.invalid && (submissionRate.dirty || submissionRate.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"submissionRate.errors?.required\">\n                    submissionRate is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.submissionRate }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Vendor Status</label>\n                <select #statusvalue class=\"form-control\" formControlName=\"vendorStatus\">\n                  <option value=\"\">--select--</option>\n                  <option value=\"Interview scheduled\">Interview scheduled</option>\n                  <option value=\"Submitted to Client\">Submitted to Client</option>\n                  <option value=\"Submitted to Vendor\">Submitted to Vendor</option>\n                  <option value=\"Disqualified\">Disqualified</option>\n                  <option value=\"Client rejected\">Client rejected</option>\n                  <option value=\"Vendor Rejected\">Vendor Rejected</option>\n                  <option value=\"Vendor screening call\">Vendor screening call</option>\n                  <option value=\"Waiting for Evaluation\">Waiting for Evaluation</option>\n                  <option value=\"Placed\">Placed</option>\n                </select>\n                <div *ngIf=\"vendorStatus.invalid && (vendorStatus.dirty || vendorStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"vendorStatus.errors?.required\">\n                    vendorStatus is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorStatus }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"(statusvalue.value=='Interview scheduled')\">\n              <div class=\"form-group\">\n                <label>Interview Schedule Date :</label>\n                <input type=\"date\" class=\"form-control\" formControlName=\"scheduleDate\" placeholder=\"Interview Schedule Date\">\n              </div>\n            </div>\n            <div class=\"col-md-2\" formControlName=\"timezone\" *ngIf=\"(statusvalue.value=='Interview scheduled')\">\n              <div class=\"form-group\">\n                <label> Time Zone :</label>\n                <select class=\"form-control\">\n                  <option value=\"EST\">EST</option>\n                  <option value=\"PST\">PST</option>\n                  <option value=\"CST\">CST</option>\n                  <option value=\"MST\">MST</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Comments:</label>\n                <textarea formControlName=\"vendorComments\" class=\"form-control\"></textarea>\n                <div *ngIf=\"vendorComments.invalid && (vendorComments.dirty || vendorComments.touched)\"\n                  class=\"form-text text-muted\">\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ vendorComments.jobExperience }}</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Submit\n                Consultant</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<p-dialog header=\"Add New Vendor Contact\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n  <form [formGroup]=\"registerContact\" (ngSubmit)=\"registerContactForm()\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"vendorcontactName\" placeholder=\"Vendor Contact Name\">\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label> Email:</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"vendorcontactEmail\"\n            placeholder=\"Vendor Contact Email\">\n          <div *ngIf=\"vendorcontactEmail.invalid && (vendorcontactEmail.dirty || vendorcontactEmail.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"vendorcontactEmail.errors?.required\">\n              Email is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorcontactEmail }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Mobile Number:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"vendorcontactMobile\" placeholder=\"Mobile Number\">\n\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label> EXT:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"vendorext\" placeholder=\"EXT\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerContact.valid\">Add Vendor\n      Contact</button>\n  </form>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n<p-dialog header=\"Add New Vendor\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerVendorCompany()\">\n\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Vendor Company Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"vendorCompanyName\" placeholder=\"Vendor Company Name\">\n          <div *ngIf=\"vendorCompanyName.invalid && (vendorCompanyName.dirty || vendorCompanyName.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"vendorCompanyName.errors?.required\">\n              Company Name is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorCompanyName }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"contactName\" placeholder=\"Vendor Contact Name\">\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label> Email:</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"contactEmail\" placeholder=\"Vendor Contact Email\">\n          <div *ngIf=\"contactEmail.invalid && (contactEmail.dirty || contactEmail.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"contactEmail.errors?.required\">\n              Email is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.contactEmail }}</small>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Mobile Number:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"contactMobile\" placeholder=\"Mobile Number\">\n          <div *ngIf=\"contactMobile.invalid && (contactEmail.dirty || contactMobile.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"contactMobile.errors?.required\">\n              Mobile Number is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.contactMobile }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label> EXT:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"ext\" placeholder=\"EXT\">\n        </div>\n      </div>\n\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerVendor.valid\">Add Vendor</button>\n  </form>\n\n\n\n\n\n\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n\n\n<p-dialog header=\"Add Client\" [(visible)]=\"displayModalClient\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n  <form [formGroup]=\"registerClient\" (ngSubmit)=\"registerClientForm()\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Client Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"clientName\" placeholder=\"Client Name\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerClient.valid\">Add Client</button>\n  </form>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/benchsales/user-list/user-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/benchsales/user-list/user-list.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\r\n\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" scrollHeight=\"500px\" [scrollable]=\"true\" [filterDelay]=\"0\" [autoLayout]=\"true\"\r\n  [value]=\"submissions\" [scrollable]=\"true\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"\r\n  [reorderableColumns]=\"true\" [lazy]=\"true\" (onLazyLoad)=\"loadSubmissionLazy($event)\" [paginator]=\"true\" [rows]=\"20\"\r\n  [totalRecords]=\"totalRecords\" [loading]=\"loading\" currentPageReportTemplate=\"Total {{totalRecords}} Records\"\r\n  [showCurrentPageReport]=\"true\">\r\n  <ng-template pTemplate=\"caption\" let-title>\r\n    <span class=\"text-right\" *ngIf=\"totalRecords\">Total {{totalRecords}} Records </span>\r\n    <a routerLink=\"/superadmin/sumissioncreate\" class=\"btn btn-primary\">\r\n      Add Submission\r\n    </a>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:70px\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Action</th>\r\n      <th>\r\n        Created By\r\n      </th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n\r\n\r\n      <th> <button (click)=\"clearFilters(dt)\">Clear Fields</button></th>\r\n\r\n      <th> <input pInputText type=\"date\" [value]=\"dt.filters['created_at'] ? dt.filters['created_at'].value : ''\"\r\n          (input)=\"dt.filter($event.target.value, 'created_at', 'startsWith')\" placeholder=\"Created At\"\r\n          class=\"p-column-filter\"></th>\r\n\r\n      <th>\r\n        <!-- <input pInputText type=\"text\"\r\n            [value]=\"dt.filters['consultant.consultatName'] ? dt.filters['consultant.consultatName'].value : ''\"\r\n            (input)=\"dt.filter($event.target.value, 'consultant.consultatName', 'startsWith')\" placeholder=\"First Name\"\r\n            class=\"p-column-filter\"> -->\r\n        <p-dropdown appendTo=\"body\" [options]=\"cities\" [(ngModel)]=\"selectedCity\" [filter]=\"true\" filterBy=\"label,value\"\r\n          [autoWidth]=\"false\" [style]=\"pDropdownStyle\" (onChange)=\"dt.filter($event.value, 'reportId', 'startsWith')\"\r\n          placeholder=\"Choose Consultant\" class=\"p-column-filter\"></p-dropdown>\r\n      </th>\r\n\r\n      <th>\r\n        <p-multiSelect  appendTo=\"body\" [options]=\"statusesVendor\" [(ngModel)]=\"selectedStatus\" [filter]=\"true\" filterBy=\"label,value\"\r\n          [style]=\"pDropdownStyle\" (onChange)=\"dt.filter($event.value, 'vendorStatus', 'startsWith')\"\r\n          placeholder=\"Choose Status\" class=\"p-column-filter\"></p-multiSelect>\r\n\r\n\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\"\r\n          [value]=\"dt.filters['technology'] ? dt.filters['technology'].value : ''\"\r\n          (input)=\"dt.filter($event.target.value, 'technology', 'startsWith')\" placeholder=\"Technology\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\"\r\n          [value]=\"dt.filters['vendorCompanyName'] ? dt.filters['vendorCompanyName'].value : ''\"\r\n          (input)=\"dt.filter($event.target.value, 'vendorCompanyName', 'startsWith')\" placeholder=\"Company Name\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['vendorName'] ? dt.filters['vendorName'].value : ''\"\r\n          (input)=\"dt.filter($event.target.value, 'vendorName', 'startsWith')\" placeholder=\"Name\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['vendorEmail'] ? dt.filters['vendorEmail'].value : ''\"\r\n          (input)=\"dt.filter($event.target.value, 'vendorEmail', 'startsWith')\" placeholder=\"Vendor Email\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\"\r\n          [value]=\"dt.filters['vendorMobileNumber'] ? dt.filters['vendorMobileNumber'].value : ''\"\r\n          (input)=\"dt.filter($event.target.value, 'vendorMobileNumber', 'startsWith')\" placeholder=\"Vendor Mobile\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['endClientName'] ? dt.filters['endClientName'].value : ''\"\r\n          (input)=\"dt.filter($event.target.value, 'endClientName', 'startsWith')\" placeholder=\"End Clinet\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['actualRate'] ? dt.filters['actualRate'].value : ''\"\r\n          (input)=\"dt.filter($event.target.value, 'actualRate', 'startsWith')\" placeholder=\"actualRate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['submissionRate'] ? dt.filters['submissionRate'].value : ''\"\r\n          (input)=\"dt.filter($event.target.value, 'submissionRate', 'startsWith')\" placeholder=\"submissionRate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.vendorStatus)}\">\r\n      <td style=\"text-align:center\">\r\n        <a (click)=\"showModalDialog(rowData)\" class=\"btn btn-warning btn-sm\">Edit</a>&nbsp;\r\n        <a (click)=\"showModalDialog1(rowData.vendorComments)\" tabindex=\"0\" data-toggle=\"popover\" data-trigger=\"focus\"\r\n          title=\"\" data-original-title=\"Note\"><img src=\"./assets/img/sticky.png\"></a>\r\n      </td>\r\n      <td>{{rowData.user_details.name}} <br>{{rowData.created_at |date}}</td>\r\n      <td *ngFor=\"let col of columns\">\r\n        {{rowData|field:col}}\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n\r\n</p-table>\r\n\r\n\r\n<p-dialog header=\"Status Change\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n  <h5> {{heading1}}</h5>\r\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerUser(submissionId)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"form-group\">\r\n          <label for=\"popstatus\">Status:</label>\r\n\r\n          <select class=\"form-control\" #seleectevalue formControlName=\"vendorStatus\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"Placed\">Placed</option>\r\n            <option value=\"Interview scheduled\">Interview scheduled</option>\r\n            <option value=\"Submitted to Client\">Submitted to Client</option>\r\n            <option value=\"Submitted to Vendor\">Submitted to Vendor</option>\r\n            <option value=\"Disqualified\">Disqualified</option>\r\n            <option value=\"Client rejected\">Client rejected</option>\r\n            <option value=\"Vendor Rejected\">Vendor Rejected</option>\r\n            <option value=\"Vendor screening call\">Vendor screening call</option>\r\n            <option value=\"Waiting for Evaluation\">Waiting for Evaluation</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-8\" *ngIf=\"seleectevalue.value == 'Interview scheduled'\">\r\n        <div class=\"form-group schedulepopdiv\">\r\n          <label for=\"schedulepop\">Schedule Date:</label>\r\n          <input type=\"date\" class=\"form-control\" formControlName=\"scheduleDate\" value=\"2020-11-21 10:43:17\"><br>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\" *ngIf=\"seleectevalue.value == 'Interview scheduled'\">\r\n        <div class=\"form-group schedulepopdiv\">\r\n          <label for=\"timezone\">Time Zone:</label>\r\n          <select class=\"form-control\" formControlName=\"timezone\">\r\n            <option value=\"\">Choose Time Zone</option>\r\n            <option value=\"EST\">EST</option>\r\n            <option value=\"PST\">PST</option>\r\n            <option value=\"CST\">CST</option>\r\n            <option value=\"MST\">MST</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"form-group\">\r\n          <label for=\"notepop\">Comment:</label>\r\n          <textarea class=\"form-control\" formControlName=\"vendorComments\"></textarea>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary btn-round\">Update</button>\r\n  </form>\r\n\r\n\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"Note\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\r\n  [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>{{comment}}</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/consultants/consultant-create/consultant-create.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/consultants/consultant-create/consultant-create.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Add Consultant </h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\" enctype=\"multipart/form-data\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n\n                <label>Consultant First Name:</label>\n                <input type=\"text\" formControlName=\"consultatName\" class=\"form-control\" placeholder=\"First Name\">\n                <div *ngIf=\"consultatName.invalid && (consultatName.dirty || consultatName.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultatName.errors?.required\">\n                    First Name is required.\n                  </div>\n                  <div *ngIf=\"consultatName.errors?.minlength\">\n                    First Name must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultatName }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Last Name:</label>\n                <input type=\"text\" formControlName=\"consultantLastName\" class=\"form-control\" placeholder=\"Last Name\"\n                  required>\n                <div *ngIf=\"consultantLastName.invalid && (consultantLastName.dirty || consultantLastName.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultantLastName.errors?.required\">\n                    Last Name is required.\n                  </div>\n                  <div *ngIf=\"consultantLastName.errors?.minlength\">\n                    Last Name must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultantLastName }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Consultant Email</label>\n                <input type=\"email\" formControlName=\"consultantEmail\" class=\"form-control\" placeholder=\"Email\" required>\n\n                <div *ngIf=\"consultantEmail.invalid && (consultantEmail.dirty || consultantEmail.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultantEmail.errors?.required\">\n                    Email is required.\n                  </div>\n                  <div *ngIf=\"consultantEmail.errors?.email\">\n                    Invalid email address.\n                  </div>\n                </div>\n\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultantEmail }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Mobile Number:</label>\n                <input type=\"text\" formControlName=\"consultatMobileNumber\" class=\"form-control\"\n                  placeholder=\"Mobile Number\" required>\n                <div\n                  *ngIf=\"consultatMobileNumber.invalid && (consultatMobileNumber.dirty || consultatMobileNumber.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultatMobileNumber.errors?.required\">\n                    Mobile is required.\n                  </div>\n                  <div *ngIf=\"consultatMobileNumber.errors?.minlength\">\n                    Mobile must be at least 10 number long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\"\n                  *ngIf=\"serverErrors\">{{ serverErrors.consultatMobileNumber }}</small>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <label>Technology</label>\n              <p-dropdown #dd [options]=\"cars\" [(ngModel)]=\"selectedCar\" formControlName=\"technology\"\n                [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"test($event)\">\n              </p-dropdown>\n              <div *ngIf=\"technology.invalid && (technology.dirty || technology.touched)\" class=\"form-text text-muted\">\n                <div *ngIf=\"technology.errors?.required\">\n                  Technology is required.\n                </div>\n\n              </div>\n              <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.technology }}</small>\n              <!-- <div class=\"form-group\">\n                <label>Technology</label>\n\n                <select  class=\"form-control selectpicker\" formControlName=\"technology\">\n                  <option [ngValue]=\"null\" disabled>Choose Technology</option>\n                  <option *ngFor=\"let prf of allProfiles\" [ngValue]=\"prf\">\n                   {{ prf.prName }}\n                  </option>\n                </select>\n                <div *ngIf=\"technology.invalid && (technology.dirty || technology.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"technology.errors?.required\">\n                    Technology is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.technology }}</small>\n\n              </div> -->\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Visa Type:</label>\n                <select class=\"form-control\" formControlName=\"visaType\">\n                  <option value=\"null\" disabled>Choose visaType</option>\n                  <option value=\"H4 EAD\">H4 EAD\n                  </option>\n                  <option value=\"H1B-Transfer\">H1B-Transfer\n                  </option>\n                  <option value=\"CPT\">CPT\n                  </option>\n                  <option value=\"OPT\">OPT\n                  </option>\n                  <option value=\"H1-B\">H1-B\n                  </option>\n                  <option value=\"GC-EAD\">GC-EAD\n                  </option>\n                  <option value=\"Green Card\">Green Card\n                  </option>\n                  <option value=\"US Citizen\">US Citizen\n                  </option>\n\n                </select>\n                <div *ngIf=\"visaType.invalid && (visaType.dirty || visaType.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"visaType.errors?.required\">\n                    Visa Type is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.visaType }}</small>\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Other Technology:</label>\n                <input type=\"text\" formControlName=\"otherTechnologies\" class=\"form-control\"\n                  placeholder=\"Other Technology\" >\n                <div *ngIf=\"otherTechnologies.invalid && (otherTechnologies.dirty || otherTechnologies.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"otherTechnologies.errors?.required\">\n                    Other Technology is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.otherTechnologies }}</small>\n\n              </div>\n            </div>\n\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Rate:</label>\n                <input type=\"text\" formControlName=\"rate\" class=\"form-control\" placeholder=\"Rate\" required>\n                <div *ngIf=\"rate.invalid && (rate.dirty || rate.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"rate.errors?.required\">\n                    Rate is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.rate }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Experience:</label>\n                <input type=\"text\" formControlName=\"experience\" class=\"form-control\" placeholder=\"exp\" required>\n                <div *ngIf=\"experience.invalid && (experience.dirty || experience.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"experience.errors?.required\">\n                    Experience is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.experience }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>City:</label>\n                <input type=\"text\" formControlName=\"city\" class=\"form-control\" placeholder=\"City\" required>\n                <div *ngIf=\"city.invalid && (city.dirty || city.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"city.errors?.required\">\n                    City is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.city }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>State:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"state\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"state.invalid && (state.dirty || state.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"state.errors?.required\">\n                    State is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.state }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Willing to Reloacate:</label>\n                <select class=\"form-control\" formControlName=\"willingLocation\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"yes\">Yes </option>\n                  <option value=\"no\">No</option>\n                </select>\n                <div *ngIf=\"willingLocation.invalid && (willingLocation.dirty || willingLocation.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"willingLocation.errors?.required\">\n                    Willing to Relocate is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.willingLocation }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Documents collected:</label>\n                <select class=\"form-control\" formControlName=\"documentsCollected\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"yes\">Yes\n                  </option>\n                  <option value=\"no\">No\n                  </option>\n                </select>\n                <div *ngIf=\"documentsCollected.invalid && (documentsCollected.dirty || documentsCollected.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"documentsCollected.errors?.required\">\n                    Documents is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.documentsCollected }}</small>\n\n              </div>\n            </div>\n\n\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Resource:</label>\n                <select class=\"form-control\" formControlName=\"resource\">\n                  <option value=\"\">--select--</option>\n                  <option value=\"LinkedIn\">LinkedIn\n</option>\n                  <option value=\"Dice\">Dice\n</option>\n                </select>\n\n                <div *ngIf=\"resource.invalid && (resource.dirty || resource.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"resource.errors?.required\">\n                    Resource is required.\n                  </div>\n\n                </div>\n\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.resource }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Status</label>\n                <select class=\"form-control\" formControlName=\"reportStatus\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"Interested\">Interested</option>\n                  <option value=\"not interested\">not interested</option>\n                  <option value=\"need to discuss\">need to discuss</option>\n                  <option value=\"Not responding\">Not responding</option>\n                  <option value=\"Employer lift the call\">Employer lift the call</option>\n                  <option value=\"Waiting for documents\">Waiting for documents</option>\n                </select>\n                <div *ngIf=\"reportStatus.invalid && (reportStatus.dirty || reportStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"reportStatus.errors?.required\">\n                    Status is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.reportStatus }}</small>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Last 4 digits of SSN :</label>\n                <input type=\"text\" formControlName=\"ssn\" class=\"form-control\" placeholder=\"SSN\" required>\n                <div *ngIf=\"ssn.invalid && (ssn.dirty || ssn.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"ssn.errors?.required\">\n                    Mobile is required.\n                  </div>\n                  <div *ngIf=\"ssn.errors?.minlength\">\n                    Mobile must be at least 4 number long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.ssn }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Best Contact Number</label>\n                <input type=\"text\" formControlName=\"bestContactNumber\" class=\"form-control\"\n                  placeholder=\"Best Contact Number\" required>\n                <div *ngIf=\"bestContactNumber.invalid && (bestContactNumber.dirty || bestContactNumber.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"bestContactNumber.errors?.required\">\n                    Best ContactNumber is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.bestContactNumber }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Skype ID:</label>\n                <input type=\"text\" formControlName=\"skypeId\" class=\"form-control\" placeholder=\"SkypeId\" required>\n\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>linked In Url:</label>\n                <input type=\"text\" formControlName=\"linkedInUrl\" class=\"form-control\" placeholder=\"Linkedin Url\"\n                  required>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Availability:</label>\n                <input type=\"text\" formControlName=\"availability\" class=\"form-control\" placeholder=\"availability\"\n                  required>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Priority</label>\n                <select class=\"form-control\" formControlName=\"priority\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"High\">High</option>\n                  <option value=\"Medium\">Medium</option>\n                  <option value=\"Low\">Low</option>\n                </select>\n                <div *ngIf=\"priority.invalid && (priority.dirty || priority.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"priority.errors?.required\">\n                    priority is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.priority }}</small>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n\n            <div class=\"col-lg-3\">\n              <div class=\"form-group\">\n                  <label for=\"resume\"> Resume :</label>\n                  <input type=\"file\" class=\"form-control\"  (change)=\"imagesPreviewResume($event)\">\n\n              </div>\n          </div>\n          <div class=\"col-lg-3\">\n            <div class=\"form-group\">\n                <label for=\"otherDocument\"> ID Proof :</label>\n                <input type=\"file\" class=\"form-control\"  (change)=\"imagesPreviewOtherDoc($event)\"  >\n\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"form-group\">\n              <label for=\"workAuthorization\"> Work Authorization :</label>\n              <input type=\"file\" class=\"form-control\" (change)=\"imagesPreviewWorkAuth($event)\" >\n          </div>\n      </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Comments</label>\n                <textarea formControlName=\"comments\" class=\"form-control\"></textarea>\n\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Note</label>\n                <textarea formControlName=\"note\" class=\"form-control\"></textarea>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology1\">1.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology1\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating1\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating1\">\n                  <option value=\"null\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology2\">2.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology2\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating2\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating2\">\n                  <option value=\"null\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology3\">3.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology3\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating3\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating3\">\n                  <option value=\"null\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology4\">4.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology4\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating4\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating4\">\n                  <option value=\"null\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Submit\n                Consultant</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/consultants/consultant-edit/consultant-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/consultants/consultant-edit/consultant-edit.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Edit Consultant </h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"updateUserDetails()\" enctype=\"multipart/form-data\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n\n                <label>Created By:</label>\n                <input type=\"text\" formControlName=\"createdBy\" class=\"form-control\" readonly>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n\n                <label>Consultant First Name:</label>\n                <input type=\"text\" formControlName=\"consultatName\" class=\"form-control\" placeholder=\"First Name\">\n                <div *ngIf=\"consultatName.invalid && (consultatName.dirty || consultatName.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultatName.errors?.required\">\n                    First Name is required.\n                  </div>\n                  <div *ngIf=\"consultatName.errors?.minlength\">\n                    First Name must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultatName }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Consultant Last Name:</label>\n                <input type=\"text\" formControlName=\"consultantLastName\" class=\"form-control\" placeholder=\"Last Name\"\n                  required>\n                <div *ngIf=\"consultantLastName.invalid && (consultantLastName.dirty || consultantLastName.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultantLastName.errors?.required\">\n                    Last Name is required.\n                  </div>\n                  <div *ngIf=\"consultantLastName.errors?.minlength\">\n                    Last Name must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultantLastName }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Consultant Email</label>\n                <input type=\"email\" formControlName=\"consultantEmail\" class=\"form-control\" placeholder=\"Email\" required>\n\n                <div *ngIf=\"consultantEmail.invalid && (consultantEmail.dirty || consultantEmail.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultantEmail.errors?.required\">\n                    Email is required.\n                  </div>\n                  <div *ngIf=\"consultantEmail.errors?.email\">\n                    Invalid email address.\n                  </div>\n                </div>\n\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultantEmail }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Mobile Number:</label>\n                <input type=\"text\" formControlName=\"consultatMobileNumber\" class=\"form-control\"\n                  placeholder=\"Mobile Number\" required>\n                <div\n                  *ngIf=\"consultatMobileNumber.invalid && (consultatMobileNumber.dirty || consultatMobileNumber.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultatMobileNumber.errors?.required\">\n                    Mobile is required.\n                  </div>\n                  <div *ngIf=\"consultatMobileNumber.errors?.minlength\">\n                    Mobile must be at least 10 number long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\"\n                  *ngIf=\"serverErrors\">{{ serverErrors.consultatMobileNumber }}</small>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <label>Technology</label>\n              <p-dropdown #dd [options]=\"cars\" [(ngModel)]=\"selectedCar\" formControlName=\"technology\"\n                [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"test($event)\">\n              </p-dropdown>\n              <div *ngIf=\"technology.invalid && (technology.dirty || technology.touched)\" class=\"form-text text-muted\">\n                <div *ngIf=\"technology.errors?.required\">\n                  Technology is required.\n                </div>\n\n              </div>\n              <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.technology }}</small>\n              <!-- <div class=\"form-group\">\n                <label>Technology</label>\n\n                <select  class=\"form-control selectpicker\" formControlName=\"technology\">\n                  <option [ngValue]=\"null\" disabled>Choose Technology</option>\n                  <option *ngFor=\"let prf of allProfiles\" [ngValue]=\"prf\">\n                   {{ prf.prName }}\n                  </option>\n                </select>\n                <div *ngIf=\"technology.invalid && (technology.dirty || technology.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"technology.errors?.required\">\n                    Technology is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.technology }}</small>\n\n              </div> -->\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Visa Type:</label>\n                <select class=\"form-control\" formControlName=\"visaType\">\n                  <option value=\"null\" disabled>Choose visaType</option>\n                  <option value=\"H4 EAD\">H4 EAD\n                  </option>\n                  <option value=\"H1B-Transfer\">H1B-Transfer\n                  </option>\n                  <option value=\"CPT\">CPT\n                  </option>\n                  <option value=\"OPT\">OPT\n                  </option>\n                  <option value=\"H1-B\">H1-B\n                  </option>\n                  <option value=\"GC-EAD\">GC-EAD\n                  </option>\n                  <option value=\"Green Card\">Green Card\n                  </option>\n                  <option value=\"US Citizen\">US Citizen\n                  </option>\n\n                </select>\n                <div *ngIf=\"visaType.invalid && (visaType.dirty || visaType.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"visaType.errors?.required\">\n                    Visa Type is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.visaType }}</small>\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Other Technology:</label>\n                <input type=\"text\" formControlName=\"otherTechnologies\" class=\"form-control\"\n                  placeholder=\"Other Technology\" >\n                <div *ngIf=\"otherTechnologies.invalid && (otherTechnologies.dirty || otherTechnologies.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"otherTechnologies.errors?.required\">\n                    Other Technology is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.otherTechnologies }}</small>\n\n              </div>\n            </div>\n\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Rate:</label>\n                <input type=\"text\" formControlName=\"rate\" class=\"form-control\" placeholder=\"Rate\" required>\n                <div *ngIf=\"rate.invalid && (rate.dirty || rate.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"rate.errors?.required\">\n                    Rate is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.rate }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Experience:</label>\n                <input type=\"text\" formControlName=\"experience\" class=\"form-control\" placeholder=\"exp\" required>\n                <div *ngIf=\"experience.invalid && (experience.dirty || experience.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"experience.errors?.required\">\n                    Experience is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.experience }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>City:</label>\n                <input type=\"text\" formControlName=\"city\" class=\"form-control\" placeholder=\"City\" required>\n                <div *ngIf=\"city.invalid && (city.dirty || city.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"city.errors?.required\">\n                    City is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.city }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>State:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"state\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"state.invalid && (state.dirty || state.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"state.errors?.required\">\n                    State is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.state }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Willing to Reloacate:</label>\n                <select class=\"form-control\" formControlName=\"willingLocation\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"yes\">Yes </option>\n                  <option value=\"no\">No</option>\n                </select>\n                <div *ngIf=\"willingLocation.invalid && (willingLocation.dirty || willingLocation.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"willingLocation.errors?.required\">\n                    Willing to Relocate is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.willingLocation }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Documents collected:</label>\n                <select class=\"form-control\" formControlName=\"documentsCollected\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"yes\">Yes\n                  </option>\n                  <option value=\"no\">No\n                  </option>\n                </select>\n                <div *ngIf=\"documentsCollected.invalid && (documentsCollected.dirty || documentsCollected.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"documentsCollected.errors?.required\">\n                    Documents is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.documentsCollected }}</small>\n\n              </div>\n            </div>\n\n\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Resource:</label>\n                <select class=\"form-control\" formControlName=\"resource\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"yes\">Yes\n                  </option>\n                  <option value=\"no\">No\n                  </option>\n                </select>\n\n                <div *ngIf=\"resource.invalid && (resource.dirty || resource.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"resource.errors?.required\">\n                    Resource is required.\n                  </div>\n\n                </div>\n\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.resource }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Status</label>\n                <select class=\"form-control\" formControlName=\"reportStatus\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"Interested\">Interested</option>\n                  <option value=\"not interested\">not interested</option>\n                  <option value=\"need to discuss\">need to discuss</option>\n                  <option value=\"Not responding\">Not responding</option>\n                  <option value=\"Employer lift the call\">Employer lift the call</option>\n                  <option value=\"Waiting for documents\">Waiting for documents</option>\n                </select>\n                <div *ngIf=\"reportStatus.invalid && (reportStatus.dirty || reportStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"reportStatus.errors?.required\">\n                    Status is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.reportStatus }}</small>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Last 4 digits of SSN :</label>\n                <input type=\"text\" formControlName=\"ssn\" class=\"form-control\" placeholder=\"SSN\" required>\n                <div *ngIf=\"ssn.invalid && (ssn.dirty || ssn.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"ssn.errors?.required\">\n                    Mobile is required.\n                  </div>\n                  <div *ngIf=\"ssn.errors?.minlength\">\n                    Mobile must be at least 4 number long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.ssn }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Best Contact Number</label>\n                <input type=\"text\" formControlName=\"bestContactNumber\" class=\"form-control\"\n                  placeholder=\"Best Contact Number\" required>\n                <div *ngIf=\"bestContactNumber.invalid && (bestContactNumber.dirty || bestContactNumber.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"bestContactNumber.errors?.required\">\n                    Best ContactNumber is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.bestContactNumber }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Skype ID:</label>\n                <input type=\"text\" formControlName=\"skypeId\" class=\"form-control\" placeholder=\"SkypeId\" required>\n\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>linked In Url:</label>\n                <input type=\"text\" formControlName=\"linkedInUrl\" class=\"form-control\" placeholder=\"Linkedin Url\"\n                  required>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Availability:</label>\n                <input type=\"text\" formControlName=\"availability\" class=\"form-control\" placeholder=\"availability\"\n                  required>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Priority</label>\n                <select class=\"form-control\" formControlName=\"priority\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"High\">High</option>\n                  <option value=\"Medium\">Medium</option>\n                  <option value=\"Low\">Low</option>\n                </select>\n                <div *ngIf=\"priority.invalid && (priority.dirty || priority.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"priority.errors?.required\">\n                    priority is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.priority }}</small>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n\n            <div class=\"col-lg-3\">\n              <div class=\"form-group\">\n               <span *ngIf=\"registerForm.value.resume\">  Remove Resume <i class=\"pi pi-times\" (click)=\"removeFile('resume')\"></i> </span>\n                  <label for=\"resume\"> Resume :</label>\n                  <input type=\"file\" class=\"form-control\"  (change)=\"imagesPreviewResume($event)\">\n\n              </div>\n          </div>\n          <div class=\"col-lg-3\">\n            <div class=\"form-group\">\n              <span *ngIf=\"registerForm.value.otherDocument\">  Remove ID Proof <i class=\"pi pi-times\" (click)=\"removeFile('otherDocument')\"></i> </span>\n                <label for=\"otherDocument\"> ID Proof :</label>\n                <input type=\"file\" class=\"form-control\"  (change)=\"imagesPreviewOtherDoc($event)\"  >\n\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"form-group\">\n            <span *ngIf=\"registerForm.value.workAuthorization\">  Remove workAuthorization <i class=\"pi pi-times\" (click)=\"removeFile('workAuthorization')\"></i> </span>\n              <label for=\"workAuthorization\"> Work Authorization :</label>\n              <input type=\"file\" class=\"form-control\" (change)=\"imagesPreviewWorkAuth($event)\" >\n          </div>\n      </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Comments</label>\n                <textarea formControlName=\"comments\" class=\"form-control\"></textarea>\n\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Note</label>\n                <textarea formControlName=\"note\" class=\"form-control\"></textarea>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology1\">1.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology1\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating1\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating1\">\n                  <option value=\"null\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology2\">2.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology2\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating2\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating2\">\n                  <option value=\"null\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology3\">3.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology3\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating3\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating3\">\n                  <option value=\"null\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology4\">4.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology4\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating4\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating4\">\n                  <option value=\"null\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Update\n                Consultant</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/consultants/consultant-list/consultant-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/consultants/consultant-list/consultant-list.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"> Consultant List  <a routerLink=\"/superadmin/consultantcreate\" class=\"btn btn-primary\">\r\n  Add Consultant\r\n </a></h4>\r\n<p-table #dt [columns]=\"scrollableCols\" [autoLayout]=\"true\"  [value]=\"timeSheets\" [scrollable]=\"true\"\r\n   [filterDelay]=\"0\" [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\" [reorderableColumns]=\"true\" [loading]=\"loading\"\r\n  autoLayout=\"true\"  dataKey=\"reportId\" editMode=\"row\" [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Action</th>\r\n      <th>Docs</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'user_details.name', 'startsWith')\"\r\n          placeholder=\"Created By\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <i class=\"pi pi-download\"></i>\r\n      </th>\r\n\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'contains')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultantEmail', 'startsWith')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'startsWith')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"exp\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'technology', 'startsWith')\" placeholder=\"technology\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'startsWith')\"\r\n          placeholder=\"visaType\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'city', 'startsWith')\"\r\n          placeholder=\"city\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'startsWith')\"\r\n          placeholder=\"state\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"willingLocation\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'documentsCollected', 'startsWith')\"\r\n          placeholder=\"documentsCollected\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'resource', 'startsWith')\"\r\n          placeholder=\"resource\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'ssn', 'startsWith')\"\r\n          placeholder=\"SSN\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'bestContactNumber', 'startsWith')\"\r\n          placeholder=\"bestContactNumber\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'linkedInUrl', 'startsWith')\"\r\n          placeholder=\"linkedInUrl\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'skypeId', 'startsWith')\"\r\n          placeholder=\"skypeId\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'priority', 'startsWith')\"\r\n          placeholder=\"priority\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'reportStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.reportStatus,rowData.adminStatus)}\"  >\r\n      <td style=\"text-align:center\">\r\n\r\n        <button  *ngIf=\"rowData.adminStatus=='D'\" pRipple pButton type=\"button\"  icon=\"pi pi-thumbs-up\" (click)=\"dropDatabase($event,rowData.reportId);\"  class=\"p-button-rounded p-button-text \"></button>\r\n        <!--  <button  *ngIf=\"!editing\" pButton pRipple type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" (click)=\"onRowEditInit(rowData)\" class=\"p-button-rounded p-button-text \"></button>\r\n            <button   *ngIf=\"editing\" pButton pRipple type=\"button\" pSaveEditableRow icon=\"pi pi-check\" (click)=\"onRowEditSave(rowData,ri)\" class=\"p-button-rounded p-button-text p-button-success p-mr-2\"></button>\r\n            <button   *ngIf=\"editing\" pButton pRipple type=\"button\" pCancelEditableRow icon=\"pi pi-times\" (click)=\"onRowEditCancel(rowData, ri)\" class=\"p-button-rounded p-button-text p-button-danger\"></button> -->\r\n            <a (click)=\"editUser(rowData.reportId)\"  class=\"btn btn-warning btn-sm\">Edit</a>\r\n            {{rowData.user_details.name}}<br>\r\n\r\n\r\n        </td>\r\n      <td>\r\n\r\n        <p>\r\n          <a href=\"https://portal.webmobilez.com/storage/app/uploads/resume/{{rowData.resume}}\" download\r\n          *ngIf=\"rowData.resume\"><img src=\"./assets/img/word.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/otherDocument/{{rowData.otherDocument}}\"  download *ngIf=\"rowData.otherDocument\"><img\r\n              src=\"./assets/img/idcard.png\"></a>\r\n          <a href=\"https://portal.webmobilez.com/storage/app/uploads/workauthorization/{{rowData.workAuthorization}}\"   download *ngIf=\"rowData.workAuthorization\"><img\r\n              src=\"./assets/img/suitcase.png\"></a>\r\n        </p>\r\n\r\n{{rowData.created_at | date }}\r\n      </td>\r\n      <td *ngFor=\"let col of columns\" >\r\n            <div *ngIf=\"!col.editable\">\r\n              {{rowData|field:col}}\r\n            </div>\r\n            <p-cellEditor *ngIf=\"col.editable\">\r\n                    <ng-template pTemplate=\"input\" >\r\n                      <div *ngIf=\"rowData|field:col as variable\">\r\n                         <input pInputText type=\"text\"  [(ngModel)]=\"variable\" required>\r\n                                                </div>\r\n                    </ng-template>\r\n                    <ng-template pTemplate=\"output\">\r\n\r\n                        {{rowData|field:col}}\r\n                    </ng-template>\r\n            </p-cellEditor>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\" [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/documents-inactive/documents-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/documents-inactive/documents-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\">Inactive Consultant Documents </h4>\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" [loading]=\"loading\" [value]=\"timeSheets\" [scrollable]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"\r\n  [reorderableColumns]=\"true\" autoLayout=\"true\" (onRowSelect)=\"onRowSelected($event)\" dataKey=\"reportId\" editMode=\"row\"\r\n  [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [scrollable]=\"true\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:160px\">\r\n      <col style=\"width:60px\">\r\n      <col style=\"width:100px\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Submissions</th>\r\n      <th>Days in</th>\r\n      <th>Docs</th>\r\n      <th>Consultant Name</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n\r\n    </tr>\r\n    <tr>\r\n      <th></th>\r\n      <th> Bench  </th>\r\n      <th> </th>\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'contains')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultantEmail', 'contains')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'contains')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'contains')\"\r\n          placeholder=\"exp\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'technology', 'contains')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'contains')\"\r\n          placeholder=\"Visa Type\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'city', 'contains')\" placeholder=\"City\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'contains')\"\r\n          placeholder=\"State\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'contains')\"\r\n          placeholder=\"Relocate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'documentsCollected', 'contains')\"\r\n          placeholder=\"Document Collected\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'resource', 'startsWith')\"\r\n          placeholder=\"Resource\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'ssn', 'startsWith')\" placeholder=\"SSN\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'bestContactNumber', 'startsWith')\"\r\n          placeholder=\"Best Contact Number\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'linkedInUrl', 'contains')\"\r\n          placeholder=\"LinkedIn\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'skypeId', 'contains')\"\r\n          placeholder=\"SkypeId\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'reportStatus', 'contains')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n    <tr [pEditableRow]=\"rowData\">\r\n\r\n      <td class=\"text-center\">\r\n\r\n        <span *ngIf=\"rowData.priority=='High'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:Green;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Medium'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:#ffc107;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Low'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:red;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span>\r\n          <a class=\"btn-length\" (click)=\"showModalDialogVendor(rowData)\" *ngIf=\"rowData.vendor_add.length\">\r\n            <img src=\"./assets/img/eye.png\"></a>\r\n        </span>\r\n\r\n        <a (click)=\"showModalDialog1(rowData.note)\" tabindex=\"0\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"\"\r\n          data-content=\"Srija note\" data-original-title=\"Note\"><img src=\"./assets/img/sticky.png\"></a>\r\n        <br>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.vendor_add.length}} Submissions\" class=\"btn-length\"\r\n          style=\"color:white;background:#007bff;border:none\">{{rowData.vendor_add.length}}</button>\r\n\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.sclients}} Submitted to Client\" class=\"btn-length\"\r\n          style=\"color:white;background:purple;border:none\">{{rowData.sclients}}</button>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.interviews}} Interview Schedule\"\r\n          style=\"color:white;background:green;border:none\">{{rowData.interviews}}</button>\r\n\r\n        <!-- <button pButton pRipple data-toggle=\"tooltip\" title=\"Note\" icon=\"pi pi-bookmark\"\r\n          (click)=\"showModalDialog1(rowData.note)\" class=\"p-button-outlined p-button-secondary\"\r\n          style=\"color:#007bff;background:#fff;border: none;\"></button> -->\r\n\r\n      </td>\r\n      <td style=\"color:#17a2b8;\">\r\n        {{calculateDiff(rowData.created_at)}}\r\n\r\n      </td>\r\n      <td>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/resume/{{rowData.resume}}\" download\r\n          *ngIf=\"rowData.resume\"><img src=\"./assets/img/word.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/otherDocument/{{rowData.otherDocument}}\" download\r\n          *ngIf=\"rowData.otherDocument\"><img src=\"./assets/img/idcard.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/workauthorization/{{rowData.workAuthorization}}\"\r\n          download *ngIf=\"rowData.workAuthorization\"><img src=\"./assets/img/suitcase.png\"></a>\r\n        <br>\r\n        <button pButton pRipple data-toggle=\"tooltip\" title=\"Status Change\" (click)=\"showModalDialog(rowData)\"\r\n          class=\"p-button-outlined p-button-secondary\" label=\"Write Note\"\r\n          style=\"color:#007bff;background:#fff;border: none;\"></button>\r\n      </td>\r\n      <td>\r\n        {{rowData.consultatName }}<br>\r\n        {{rowData.created_at | date }}\r\n      </td>\r\n      <td *ngFor=\" let col of columns\">\r\n        <div *ngIf=\"!col.editable\">\r\n          {{rowData|field:col}}\r\n        </div>\r\n\r\n        <p-cellEditor *ngIf=\"col.editable\">\r\n          <ng-template pTemplate=\"input\">\r\n            <div *ngIf=\"rowData|field:col as variable\">\r\n              <input pInputText type=\"text\" [(ngModel)]=\"variable\" required>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n\r\n            {{rowData|field:col}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\"\r\n  [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n<p-dialog header=\"Status Change\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerUser(submissionId)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"priority\">Priority:</label>\r\n          <select class=\"form-control\" formControlName=\"priority\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"High\">High</option>\r\n            <option value=\"Medium\">Medium</option>\r\n            <option value=\"Low\">Low</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"wStatus\">Status of Consultant:</label>\r\n          <select class=\"form-control\" formControlName=\"wStatus\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"A\">Active</option>\r\n            <option value=\"R\">Removed From Webmobilez</option>\r\n            <option value=\"S\">selected from WebmobileZ</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"form-group\">\r\n        <label for=\"notepop\">Note:</label>\r\n        <textarea class=\"form-control\" formControlName=\"note\"></textarea>\r\n\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"Note\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\r\n  [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>{{valuenote}}</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"View Vendors\" [(visible)]=\"displayModalVendor\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>Vendors</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n\r\n<p-dialog [style]=\"{width: '75vw'}\" position=\"top\" [(visible)]=\"showDialog\" header=\"View Vendors Details\"\r\n  [closable]=\"true\" [resizable]=\"true\">\r\n  <div class=\"flexcolumn container\">\r\n    <p-table class=\"flexcolumn\" [value]=\"data\" [scrollable]=\"true\" [responsive]=\"true\">\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th><span>Created By</span></th>\r\n          <th><span>Vendor Company</span></th>\r\n          <th><span>Vendor Contact Name</span></th>\r\n\r\n          <th><span>End Client</span></th>\r\n          <th><span>Submission Rate</span></th>\r\n          <th><span>Status</span></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-record>\r\n        <tr>\r\n          <td><span *ngIf=\"record.user_details\">{{record.user_details.name}}</span></td>\r\n          <td>{{record.vendorCompanyName}}</td>\r\n          <td>{{record.vendorName}}</td>\r\n          <td>{{record.endClientName}}</td>\r\n          <td>{{record.submissionRate}}</td>\r\n          <td>{{record.vendorStatus}}</td>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"summary\">\r\n        {{data.length}} Records\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"showDialog=false\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/documents-list/documents-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/documents-list/documents-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\">Consultant Documents </h4>\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" [value]=\"timeSheets\" [scrollable]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" [loading]=\"loading\" columnResizeMode=\"expand\"\r\n  [reorderableColumns]=\"true\" autoLayout=\"true\" (onRowSelect)=\"onRowSelected($event)\" dataKey=\"reportId\" editMode=\"row\"\r\n  [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [scrollable]=\"true\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:160px\">\r\n      <col style=\"width:60px\">\r\n      <col style=\"width:120px\">\r\n      <col style=\"width:200px\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Submissions</th>\r\n      <th>Days in</th>\r\n      <th>Docs</th>\r\n      <th>Consultant Name</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n\r\n    </tr>\r\n    <tr>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n        Bench\r\n      </th>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'contains')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n\r\n      </th>\r\n\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultantEmail', 'startsWith')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'startsWith')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input  pInputText  class=\"p-inputtext-sm\" type=\"number\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"exp\" >\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'technology', 'contains')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'contains')\"\r\n          placeholder=\"Visa Type\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'city', 'contains')\" placeholder=\"City\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'contains')\"\r\n          placeholder=\"State\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"Relocate\" class=\"p-column-filter\">\r\n      </th>\r\n      <!--  <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'documentsCollected', 'startsWith')\"\r\n          placeholder=\"Document Collected\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'resource', 'startsWith')\"\r\n          placeholder=\"Resource\" class=\"p-column-filter\">\r\n      </th> -->\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'ssn', 'startsWith')\" placeholder=\"SSN\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <!-- <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'bestContactNumber', 'startsWith')\"\r\n          placeholder=\"Best Contact Number\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'linkedInUrl', 'startsWith')\"\r\n          placeholder=\"LinkedIn\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'skypeId', 'startsWith')\"\r\n          placeholder=\"SkypeId\" class=\"p-column-filter\">\r\n      </th> -->\r\n\r\n\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.wStatus)}\">\r\n\r\n      <td class=\"text-center\">\r\n\r\n        <span *ngIf=\"rowData.priority=='High'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:Green;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Medium'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:#ffc107;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Low'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:red;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span>\r\n          <a class=\"btn-length\" (click)=\"showModalDialogVendor(rowData)\" *ngIf=\"rowData.vendor_add.length\">\r\n            <img src=\"./assets/img/eye.png\"></a>\r\n        </span>\r\n\r\n\r\n\r\n        <a (click)=\"showModalDialog1(rowData.note)\" tabindex=\"0\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"\"\r\n          data-content=\"Srija note\" data-original-title=\"Note\"><img src=\"./assets/img/sticky.png\"></a>\r\n        <br>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.vendor_add.length}} Submissions\" class=\"btn-length\"\r\n          style=\"color:white;background:#007bff;border:none\">{{rowData.vendor_add.length}}</button>\r\n\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.sclients}} Submitted to Client\" class=\"btn-length\"\r\n          style=\"color:white;background:purple;border:none\">{{rowData.sclients}}</button>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.interviews}} Interview Schedule\"\r\n          style=\"color:white;background:green;border:none\">{{rowData.interviews}}</button>\r\n\r\n        <!-- <button pButton pRipple data-toggle=\"tooltip\" title=\"Note\" icon=\"pi pi-bookmark\"\r\n          (click)=\"showModalDialog1(rowData.note)\" class=\"p-button-outlined p-button-secondary\"\r\n          style=\"color:#007bff;background:#fff;border: none;\"></button> -->\r\n\r\n      </td>\r\n      <td style=\"color:#17a2b8;\">\r\n        {{calculateDiff(rowData.created_at)}}\r\n\r\n      </td>\r\n      <td>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/resume/{{rowData.resume}}\" download\r\n          *ngIf=\"rowData.resume\"><img src=\"./assets/img/word.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/otherDocument/{{rowData.otherDocument}}\" download\r\n          *ngIf=\"rowData.otherDocument\"><img src=\"./assets/img/idcard.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/workauthorization/{{rowData.workAuthorization}}\"\r\n          download *ngIf=\"rowData.workAuthorization\"><img src=\"./assets/img/suitcase.png\"></a>\r\n        <br>\r\n        <button pButton pRipple data-toggle=\"tooltip\" title=\"Status Change\" (click)=\"showModalDialog(rowData)\"\r\n          class=\"p-button-outlined p-button-secondary\" label=\"Write Note\"\r\n          style=\"color:#007bff;background:#fff;border: none;\"></button>\r\n      </td>\r\n      <td>\r\n        {{rowData.consultatName }}<br>\r\n        {{rowData.created_at | date }}\r\n      </td>\r\n      <td *ngFor=\" let col of columns\">\r\n        <div *ngIf=\"!col.editable\">\r\n          {{rowData|field:col}}\r\n        </div>\r\n\r\n        <p-cellEditor *ngIf=\"col.editable\">\r\n          <ng-template pTemplate=\"input\">\r\n            <div *ngIf=\"rowData|field:col as variable\">\r\n              <input pInputText type=\"text\" [(ngModel)]=\"variable\" required>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n\r\n            {{rowData|field:col}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\"\r\n  [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n<p-dialog header=\"Status Change\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerUser(submissionId)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"priority\">Priority:</label>\r\n          <select class=\"form-control\" formControlName=\"priority\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"High\">High</option>\r\n            <option value=\"Medium\">Medium</option>\r\n            <option value=\"Low\">Low</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"wStatus\">Status of Consultant:</label>\r\n          <select class=\"form-control\" formControlName=\"wStatus\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"A\">Active</option>\r\n            <option value=\"R\">Removed From Webmobilez</option>\r\n            <option value=\"S\">selected from WebmobileZ</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"form-group\">\r\n        <label for=\"notepop\">Note:</label>\r\n        <textarea class=\"form-control\" formControlName=\"note\"></textarea>\r\n\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"Note\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\r\n  [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>{{valuenote}}</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"View Vendors\" [(visible)]=\"displayModalVendor\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>Vendors</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n\r\n<p-dialog [style]=\"{width: '75vw'}\" position=\"top\" [(visible)]=\"showDialog\" header=\"View Vendors Details\"\r\n  [closable]=\"true\" [resizable]=\"true\">\r\n  <div class=\"flexcolumn container\">\r\n    <p-table class=\"flexcolumn\" [value]=\"data\" [scrollable]=\"true\" [responsive]=\"true\">\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th><span>Created By</span></th>\r\n          <th><span>Vendor Company</span></th>\r\n          <th><span>Vendor Contact Name</span></th>\r\n\r\n          <th><span>End Client</span></th>\r\n          <th><span>Submission Rate</span></th>\r\n          <th><span>Status</span></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-record>\r\n        <tr>\r\n          <td><span *ngIf=\"record.user_details\">{{record.user_details.name}}</span></td>\r\n          <td>{{record.vendorCompanyName}}</td>\r\n          <td>{{record.vendorName}}</td>\r\n          <td>{{record.endClientName}}</td>\r\n          <td>{{record.submissionRate}}</td>\r\n          <td>{{record.vendorStatus}}</td>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"summary\">\r\n        {{data.length}} Records\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"showDialog=false\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/documents-placed/documents-placed.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/documents-placed/documents-placed.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\">Placed Consultant Documents </h4>\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" [value]=\"timeSheets\" [scrollable]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['consultatName']\" [loading]=\"loading\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"\r\n  [reorderableColumns]=\"true\" autoLayout=\"true\" (onRowSelect)=\"onRowSelected($event)\" dataKey=\"reportId\" editMode=\"row\"\r\n  [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [scrollable]=\"true\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:160px\">\r\n      <col style=\"width:60px\">\r\n      <col style=\"width:100px\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Submissions</th>\r\n      <th>Days in</th>\r\n      <th>Docs</th>\r\n      <th>Consultant Name</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n\r\n    </tr>\r\n    <tr>\r\n      <th></th>\r\n      <th> Bench  </th>\r\n      <th> </th>\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'contains')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultantEmail', 'startsWith')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'startsWith')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"exp\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'technology', 'contains')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'contains')\"\r\n          placeholder=\"Visa Type\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'city', 'contains')\" placeholder=\"City\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'contains')\"\r\n          placeholder=\"State\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"Relocate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'documentsCollected', 'contains')\"\r\n          placeholder=\"Document Collected\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'resource', 'contains')\"\r\n          placeholder=\"Resource\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'ssn', 'contains')\" placeholder=\"SSN\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'bestContactNumber', 'contains')\"\r\n          placeholder=\"Best Contact Number\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'linkedInUrl', 'contains')\"\r\n          placeholder=\"LinkedIn\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'skypeId', 'contains')\"\r\n          placeholder=\"SkypeId\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'reportStatus', 'contains')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n    <tr [pEditableRow]=\"rowData\">\r\n\r\n      <td class=\"text-center\">\r\n\r\n        <span *ngIf=\"rowData.priority=='High'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:Green;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Medium'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:#ffc107;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Low'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:red;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span>\r\n          <a class=\"btn-length\" (click)=\"showModalDialogVendor(rowData)\" *ngIf=\"rowData.vendor_add.length\">\r\n            <img src=\"./assets/img/eye.png\"></a>\r\n        </span>\r\n\r\n        <a (click)=\"showModalDialog1(rowData.note)\" tabindex=\"0\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"\"\r\n          data-content=\"Srija note\" data-original-title=\"Note\"><img src=\"./assets/img/sticky.png\"></a>\r\n        <br>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.vendor_add.length}} Submissions\" class=\"btn-length\"\r\n          style=\"color:white;background:#007bff;border:none\">{{rowData.vendor_add.length}}</button>\r\n\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.sclients}} Submitted to Client\" class=\"btn-length\"\r\n          style=\"color:white;background:purple;border:none\">{{rowData.sclients}}</button>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.interviews}} Interview Schedule\"\r\n          style=\"color:white;background:green;border:none\">{{rowData.interviews}}</button>\r\n\r\n        <!-- <button pButton pRipple data-toggle=\"tooltip\" title=\"Note\" icon=\"pi pi-bookmark\"\r\n          (click)=\"showModalDialog1(rowData.note)\" class=\"p-button-outlined p-button-secondary\"\r\n          style=\"color:#007bff;background:#fff;border: none;\"></button> -->\r\n\r\n      </td>\r\n      <td style=\"color:#17a2b8;\">\r\n        {{calculateDiff(rowData.created_at)}}\r\n\r\n      </td>\r\n      <td>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/resume/{{rowData.resume}}\" download\r\n          *ngIf=\"rowData.resume\"><img src=\"./assets/img/word.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/otherDocument/{{rowData.otherDocument}}\" download\r\n          *ngIf=\"rowData.otherDocument\"><img src=\"./assets/img/idcard.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/workauthorization/{{rowData.workAuthorization}}\"\r\n          download *ngIf=\"rowData.workAuthorization\"><img src=\"./assets/img/suitcase.png\"></a>\r\n        <br>\r\n        <button pButton pRipple data-toggle=\"tooltip\" title=\"Status Change\" (click)=\"showModalDialog(rowData)\"\r\n          class=\"p-button-outlined p-button-secondary\" label=\"Write Note\"\r\n          style=\"color:#007bff;background:#fff;border: none;\"></button>\r\n      </td>\r\n      <td>\r\n        {{rowData.consultatName }}<br>\r\n        {{rowData.created_at | date }}\r\n      </td>\r\n      <td *ngFor=\" let col of columns\">\r\n        <div *ngIf=\"!col.editable\">\r\n          {{rowData|field:col}}\r\n        </div>\r\n\r\n        <p-cellEditor *ngIf=\"col.editable\">\r\n          <ng-template pTemplate=\"input\">\r\n            <div *ngIf=\"rowData|field:col as variable\">\r\n              <input pInputText type=\"text\" [(ngModel)]=\"variable\" required>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n\r\n            {{rowData|field:col}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\"\r\n  [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n<p-dialog header=\"Status Change\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerUser(submissionId)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"priority\">Priority:</label>\r\n          <select class=\"form-control\" formControlName=\"priority\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"High\">High</option>\r\n            <option value=\"Medium\">Medium</option>\r\n            <option value=\"Low\">Low</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"wStatus\">Status of Consultant:</label>\r\n          <select class=\"form-control\" formControlName=\"wStatus\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"A\">Active</option>\r\n            <option value=\"R\">Removed From Webmobilez</option>\r\n            <option value=\"S\">selected from WebmobileZ</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"form-group\">\r\n        <label for=\"notepop\">Note:</label>\r\n        <textarea class=\"form-control\" formControlName=\"note\"></textarea>\r\n\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"Note\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\r\n  [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>{{valuenote}}</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"View Vendors\" [(visible)]=\"displayModalVendor\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>Vendors</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n\r\n<p-dialog [style]=\"{width: '75vw'}\" position=\"top\" [(visible)]=\"showDialog\" header=\"View Vendors Details\"\r\n  [closable]=\"true\" [resizable]=\"true\">\r\n  <div class=\"flexcolumn container\">\r\n    <p-table class=\"flexcolumn\" [value]=\"data\" [scrollable]=\"true\" [responsive]=\"true\">\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th><span>Created By</span></th>\r\n          <th><span>Vendor Company</span></th>\r\n          <th><span>Vendor Contact Name</span></th>\r\n\r\n          <th><span>End Client</span></th>\r\n          <th><span>Submission Rate</span></th>\r\n          <th><span>Status</span></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-record>\r\n        <tr>\r\n          <td><span *ngIf=\"record.user_details\">{{record.user_details.name}}</span></td>\r\n          <td>{{record.vendorCompanyName}}</td>\r\n          <td>{{record.vendorName}}</td>\r\n          <td>{{record.endClientName}}</td>\r\n          <td>{{record.submissionRate}}</td>\r\n          <td>{{record.vendorStatus}}</td>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"summary\">\r\n        {{data.length}} Records\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"showDialog=false\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/email/email-create/consultant-create.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/email/email-create/consultant-create.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Send Email </h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\" enctype=\"multipart/form-data\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>CC Email</label>\n\n                <p-chips [addOnTab]=\"true\"\n                [addOnBlur]=\"true\"\n                (keydown)=\"onKeyDown($event)\"\n                [(ngModel)]=\"values\" formControlName=\"cc\" ></p-chips>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Subject</label>\n            <input type=\"text\" formControlName=\"subject\" class=\"form-control\" />\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Message</label>\n                <angular-editor formControlName=\"message\" [config]=\"editorConfig\"></angular-editor>\n\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Send Email</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/hotlist/user-list/user-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/hotlist/user-list/user-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"> Hot List </h4>\r\n<p-table #dt [columns]=\"cols\" [value]=\"products\" [loading]=\"loading\" [autoLayout]=\"true\" [resizableColumns]=\"true\"\r\n  columnResizeMode=\"expand\">\r\n  <ng-template pTemplate=\"caption\">\r\n    <div class=\"p-d-flex\">\r\n      <button type=\"button\" pButton pRipple icon=\"pi pi-file-o\" class=\"btn-length\" (click)=\"dt.exportCSV()\"\r\n        pTooltip=\"CSV\" tooltipPosition=\"bottom\"></button>\r\n      <!-- <button type=\"button\" pButton pRipple icon=\"pi pi-file-excel\" (click)=\"exportExcel()\" class=\"p-button-success p-mr-2\"  pTooltip=\"XLS\" tooltipPosition=\"bottom\"></button> -->\r\n      <button (click)=\"exportPdf()\" pButton class=\"btn-length\" label=\"Export as pdf\"></button>\r\n\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n\r\n\r\n\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n      <th>Request Resume</th>\r\n\r\n    </tr>\r\n    <tr>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'technology', 'contains')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"Experience\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'startsWith')\"\r\n          placeholder=\"State\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"Relocate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'startsWith')\"\r\n          placeholder=\"Visa Type\" class=\"p-column-filter\">\r\n      </th>\r\n      <th></th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n    <tr [pSelectableRow]=\"rowData\">\r\n\r\n      <td *ngFor=\"let col of columns\">\r\n        {{rowData[col.field] | replace : 'others' : ' '}}\r\n      </td>\r\n\r\n      <td><a>Request Resume</a></td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/interviews/user-list/user-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/interviews/user-list/user-list.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"> Schedule Interviews </h4>\r\n\r\n<p-table #dt1 [columns]=\"scrollableCols\" [autoLayout]=\"true\" [value]=\"interviewschedules\" [scrollable]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"\r\n  [reorderableColumns]=\"true\" autoLayout=\"true\" dataKey=\"reportId\" editMode=\"row\" [paginator]=\"true\" [rows]=\"10\"\r\n  [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Interview Date</th>\r\n      <th>Consultant Name</th>\r\n      <th>Created By</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th> </th>\r\n      <th> <input pInputText type=\"text\"\r\n          (input)=\"dt1.filter($event.target.value, 'consultant.consultatName', 'contains')\"\r\n          placeholder=\"Consultant Name\" class=\"p-column-filter\"></th>\r\n      <th> <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'user_details.name', 'contains')\"\r\n          placeholder=\"Created By\" class=\"p-column-filter\"></th>\r\n          <th>\r\n            <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'vendorStatus', 'startsWith')\"\r\n              placeholder=\"Status\" class=\"p-column-filter\">\r\n          </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'vendorCompanyName', 'contains')\"\r\n          placeholder=\"Company Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'endClientName', 'contains')\"\r\n          placeholder=\"End Client\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th> <input pInputText type=\"text\"\r\n          (input)=\"dt1.filter($event.target.value, 'consultant.technology', 'contains')\" placeholder=\"Technology\"\r\n          class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'endClientLocation', 'contains')\"\r\n          placeholder=\"Client Location\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'submissionRate', 'startsWith')\"\r\n          placeholder=\"Submission Rate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'actualRate', 'startsWith')\"\r\n          placeholder=\"Actual Rate\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.vendorStatus)}\" >\r\n\r\n      <td>{{rowData.scheduleDate | date }} {{rowData.timezone}} </td>\r\n      <td><button *ngIf=\"rowData.consultant.employeePortalAccess =='D'\"  class=\"ui-button-success\"  (click)=\"createPortal($event,rowData.consultant.reportId);\" data-toggle=\"tooltip\" title=\"Crteate Employee Login\"  icon=\"pi pi-plus\" iconPos=\"left\" pButton type=\"button\"  ></button>\r\n        <span *ngIf=\"rowData.consultant.employeePortalAccess =='C'\">\r\n        <a class=\"btn-length\" data-toggle=\"tooltip\" title=\"Employee Login Created\" >\r\n          <img src=\"./assets/img/selectlist.png\" width=\"25px\"></a>\r\n      </span> &nbsp; {{rowData.consultant.consultatName }} </td>\r\n      <td>{{rowData.user_details.name}}<br>{{rowData.created_at | date}}</td>\r\n      <td *ngFor=\"let col of columns\">\r\n\r\n        {{rowData|field:col}}\r\n\r\n\r\n      </td>\r\n\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\"\r\n  [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/user-create/user-create.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/user-create/user-create.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-md-12\">\n                <h4 class=\"remove-margin\">Add New User Detail </h4>\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n                  </div>\n                  <div class=\"card-body\">\n                    <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\">\n                      <div class=\"row\">\n                          <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                              <label>First Name</label>\n                              <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"First Name\" required>\n                              <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n                                      class=\"form-text text-muted\">\n                                    <div *ngIf=\"name.errors?.required\">\n                                      Name is required.\n                                    </div>\n                                    <div *ngIf=\"name.errors?.minlength\">\n                                      Name must be at least 5 characters long.\n                                    </div>\n                              </div>\n                              <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.name }}</small>\n\n                              </div>\n                          </div>\n                      </div>\n\n                        <div class=\"row\">\n                          <!-- <div class=\"col-md-6 pr-1\">\n                            <div class=\"form-group\">\n                              <label>User Name</label>\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n                            </div>\n                          </div> -->\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                              <label for=\"exampleInputEmail1\">Email address</label>\n                              <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n\n                              <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                                      class=\"form-text text-muted\">\n                                    <div *ngIf=\"email.errors?.required\">\n                                      Email is required.\n                                    </div>\n                                    <div *ngIf=\"email.errors?.email\">\n                                      Invalid email address.\n                                    </div>\n                              </div>\n\n                              <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.email }}</small>\n                            </div>\n                          </div>\n                        </div>\n\n      <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                    <label>Role</label>\n                    <select formControlName=\"role\" class=\"form-control\">\n                      <option value=\"\">Choose Role</option>\n                      <option value=\"Admin\"> Admin</option>\n                      <option value=\"Accountmanager\">Account Manger</option>\n                      <option value=\"Recruiters\">Recruiters</option>\n                      <option value=\"BenchSales\">Bench Sales</option>\n                      <option value=\"HeadHunters\">Head hunters</option>\n                      <option value=\"HeadHuntersAdmin\">Head hunters Admin</option>\n                    </select>\n                    <div *ngIf=\"role.invalid && (role.dirty || role.touched)\"\n                            class=\"form-text text-muted\">\n                          <div *ngIf=\"role.errors?.required\">\n                            Role is required.\n                          </div>\n\n                    </div>\n                    <small id=\"roleHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.role }}</small>\n\n                    </div>\n                </div>\n            </div>\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                              <label>Password</label>\n                              <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n\n                              <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n                                      class=\"form-text text-muted\">\n                                    <div *ngIf=\"password.errors?.required\">\n                                      Password is required.\n                                    </div>\n                                    <div *ngIf=\"password.errors?.minlength\">\n                                      Password must be at least 5 characters long.\n                                    </div>\n                              </div>\n\n                              <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.password }}</small>\n                              </div>\n                          </div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                              <label>Confirm Password</label>\n                              <input type=\"password\" formControlName=\"confirm_password\" class=\"form-control\" placeholder=\"Confirm Password\" required>\n\n                              <div *ngIf=\"confirm_password.invalid && (confirm_password.dirty || confirm_password.touched)\"\n                                      class=\"form-text text-muted\">\n                                    <div *ngIf=\"confirm_password.errors?.required\">\n                                      Confirm Password is required.\n                                    </div>\n                                    <div *ngIf=\"confirm_password.errors?.minlength\">\n                                      Confirm Password must be at least 5 characters long.\n                                    </div>\n                              </div>\n\n                              <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.confirm_password }}</small>\n                              </div>\n                          </div>\n                      </div>\n\n                        <div class=\"row\">\n                          <div class=\"update ml-auto mr-auto\">\n                            <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Register User</button>\n                          </div>\n                        </div>\n                      </form>\n                  </div>\n                </div>\n              </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/user-edit/user-edit.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/user-edit/user-edit.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n            <h4 class=\"remove-margin\">Edit User Detail </h4>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n              </div>\n              <div class=\"card-body\">\n                <form [formGroup]=\"updateUser\" (ngSubmit)=\"updateUserDetails()\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                            <input type=\"hidden\" name=\"_method\" value=\"PUT\">\n                          <label>First Name</label>\n                          <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"First Name\" required>\n                          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n                                  class=\"form-text text-muted\">\n                                <div *ngIf=\"name.errors?.required\">\n                                  Name is required.\n                                </div>\n                                <div *ngIf=\"name.errors?.minlength\">\n                                  Name must be at least 5 characters long.\n                                </div>\n                          </div>\n                          <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.name }}</small>\n\n                          </div>\n                      </div>\n                  </div>\n\n                    <div class=\"row\">\n                      <!-- <div class=\"col-md-6 pr-1\">\n                        <div class=\"form-group\">\n                          <label>User Name</label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n                        </div>\n                      </div> -->\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                        <label>Role</label>\n                        <select formControlName=\"role\" class=\"form-control\">\n                          <option value=\"null\">Choose Role</option>\n                          <option value=\"Admin\"> Admin</option>\n                          <option value=\"Accountmanager\">Account Manger</option>\n                          <option value=\"Recruiters\">Recruiters</option>\n                          <option value=\"BenchSales\">Bench Sales</option>\n                          <option value=\"HeadHunters\">Head hunters</option>\n                          <option value=\"HeadHuntersAdmin\">Head hunters Admin</option>\n                        </select>\n                        <div *ngIf=\"role.invalid && (role.dirty || role.touched)\"\n                                class=\"form-text text-muted\">\n                              <div *ngIf=\"role.errors?.required\">\n                                Role is required.\n                              </div>\n\n                        </div>\n                        <small id=\"roleHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.role }}</small>\n\n                        </div>\n                    </div>\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Email address</label>\n                          <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n\n                          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                                  class=\"form-text text-muted\">\n                                <div *ngIf=\"email.errors?.required\">\n                                  Email is required.\n                                </div>\n                                <div *ngIf=\"email.errors?.email\">\n                                  Invalid email address.\n                                </div>\n                          </div>\n\n                          <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.email }}</small>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                          <label>Password</label>\n                          <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" >\n\n                          <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n                                  class=\"form-text text-muted\">\n\n                                <div *ngIf=\"password.errors?.minlength\">\n                                  Password must be at least 5 characters long.\n                                </div>\n                          </div>\n\n                          <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.password }}</small>\n                          </div>\n                      </div>\n                    </div>\n\n\n                    <div class=\"row\">\n                      <div class=\"update ml-auto mr-auto\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!updateUser.valid\">Update</button>\n                      </div>\n                    </div>\n                  </form>\n              </div>\n            </div>\n          </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/user-index/user-index.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/user-index/user-index.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/user-list/user-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/user-list/user-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n          <h4 class=\"remove-margin\"> Users Detail </h4>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <!-- <div class=\"float-right\"> -->\r\n          <a routerLink=\"/superadmin/usercreate\" class=\"btn btn-info btn-sm\">Add New</a>\r\n        <!-- </div> -->\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p-table #dt [value]=\"timeSheets\" dataKey=\"id\"\r\n        [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[6,12]\" [loading]=\"loading\" styleClass=\"p-datatable-customers\"\r\n        [paginator]=\"false\"\r\n        [filterDelay]=\"0\" [globalFilterFields]=\"['fromDate','duration','assignment','serviceCode']\">\r\n\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Email</th>\r\n                <th>Role</th>\r\n                <th>Created At</th>\r\n                <th>Action</th>\r\n            </tr>\r\n\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-customer>\r\n            <tr>\r\n              <td>\r\n                {{customer.name}}\r\n              </td>\r\n                <td>\r\n                    {{customer.email}}\r\n                </td>\r\n                <td>\r\n                   {{customer.role}}\r\n                </td>\r\n                <td>\r\n                  {{customer.created_at | date}}\r\n               </td>\r\n               <td>\r\n               <a (click)=\"editUser(customer.id)\"  class=\"btn btn-warning btn-sm\">Edit</a>\r\n               </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <tr>\r\n                <td colspan=\"6\">No Users found.</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-inplace >\r\n  <ng-template pTemplate=\"display\">\r\n      Click to Edit\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n      <input type=\"text\" value=\"PrimeNG\" pInputText>\r\n  </ng-template>\r\n</p-inplace>\r\n"

/***/ }),

/***/ "./src/app/admin/superadmin/benchsales/user-create/user-create.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/admin/superadmin/benchsales/user-create/user-create.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-length {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9iZW5jaHNhbGVzL3VzZXItY3JlYXRlL0M6XFx4YW1wcFxcaHRkb2NzXFxzZXAtYmFyXFxhbmcvc3JjXFxhcHBcXGFkbWluXFxzdXBlcmFkbWluXFxiZW5jaHNhbGVzXFx1c2VyLWNyZWF0ZVxcdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vYmVuY2hzYWxlcy91c2VyLWNyZWF0ZS91c2VyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zdXBlcmFkbWluL2JlbmNoc2FsZXMvdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWxlbmd0aFxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIiwiLmJ0bi1sZW5ndGgge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/superadmin/benchsales/user-create/user-create.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/superadmin/benchsales/user-create/user-create.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Profile, BenchCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenchCreateComponent", function() { return BenchCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/benchsales/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






var Profile = /** @class */ (function () {
    function Profile(prId, prName) {
        this.prId = prId;
        this.prName = prName;
    }
    return Profile;
}());

var BenchCreateComponent = /** @class */ (function () {
    function BenchCreateComponent(route, messageService, userRest, router) {
        this.route = route;
        this.messageService = messageService;
        this.userRest = userRest;
        this.router = router;
        this.counter = 0;
        this.serverErrors = [];
    }
    BenchCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getConsultantsList().subscribe(function (response) {
            console.log(_this.states = response.submissions);
            console.log(_this.vendors = response.vendorslist);
            console.log(_this.clients = response.clients);
        }, function (error) { console.log(error); });
        this.cars = [
            { label: "Choose Technology", value: "" },
            { label: "AEM(Adobe Experience manger)", value: "AEM(Adobe Experience manger)" },
            { label: 'Android Developer', value: 'Android Developer' },
            { label: 'Business Analyst', value: 'Business Analyst' },
            { label: 'Business Intelligence', value: 'Business Intelligence' },
            { label: 'Data Analyst', value: 'Data Analyst' },
            { label: 'Database Administrator', value: 'Database Administrator' },
            { label: 'Devops Engineer', value: 'Devops Engineer' },
            { label: 'Dot net Developer', value: 'Dot net Developer' },
            { label: 'ETL Developer', value: "ETL Developer" },
            { label: 'Hadoop', value: "Hadoop" },
            { label: 'Hadoop Developer/Hadoop Admin', value: "Hadoop Developer/Hadoop Admin" },
            { label: 'IOS Developer', value: "IOS Developer" },
            { label: 'Java Developer', value: "Java Developer" },
            { label: 'Linux Admin', value: "Linux Admin" },
            { label: 'Mainframe Developer', value: "Mainframe Developer" },
            { label: 'Network Engineer', value: "Network Engineer" },
            { label: 'Oracle fusion developer', value: "Oracle fusion developer" },
            { label: 'PEGA', value: "PEGA" },
            { label: 'QA Tester/QA Analyst', value: "QA Tester/QA Analyst" },
            { label: 'SAP Hana', value: "SAP Hana" },
            { label: 'Salesforce', value: "Salesforce" },
            { label: 'Salesforce Admin', value: "Salesforce Admin" },
            { label: 'Salesforce Developer', value: "Salesforce Developer" },
            { label: 'Service now developer', value: "Service now developer" },
            { label: 'Tableau Developer', value: "Tableau Developer" },
            { label: 'UI Developer / Frontend Developer', value: "UI Developer / Frontend Developer" },
            { label: 'VOIP Engineer', value: "VOIP Engineer" },
            { label: 'others', value: "others" },
        ];
        this.totalNumberOfCars = this.cars.length;
        this.str = '';
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'actualRate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorComments': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'submissionRate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vid': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorDetailId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'endClientLocation': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'clientId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'scheduleDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'timezone': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
        this.registerContact = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'vendorcontactName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorcontactMobile': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorcontactEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorext': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'vendorCompanyName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'contactName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'contactMobile': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'contactEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'ext': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.registerClient = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'clientName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    BenchCreateComponent.prototype.ConvertToInt = function (val) {
        return parseFloat(val);
    };
    BenchCreateComponent.prototype.showModalDialog = function () {
        this.displayModal = true;
    };
    BenchCreateComponent.prototype.showModalDialogClient = function () {
        this.displayModalClient = true;
    };
    BenchCreateComponent.prototype.showModalDialog1 = function () {
        this.registerContact.addControl('cvid', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.registerForm.value.vid, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
        this.displayModal1 = true;
    };
    BenchCreateComponent.prototype.OnFocus = function () {
        if (this.cars.length > this.totalNumberOfCars) {
            this.cars.shift();
        }
    };
    BenchCreateComponent.prototype.OnBlur = function () {
        console.log("OnBlur");
    };
    BenchCreateComponent.prototype.test = function (event) {
        var _this = this;
        var charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedCar = this.cars.find(function (car) {
                return car.label.toLowerCase().includes(_this.str.toLowerCase());
            });
            this.cars.unshift(this.selectedCar);
            this.str = '';
        }
        else if (event.key === 'Backspace') {
            this.str = this.str.replace(/.$/, "");
        }
        else if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 8) {
            this.str += event.key;
        }
    };
    BenchCreateComponent.prototype.onChange = function (event) {
        var _this = this;
        this.crate = '';
        this.cemail = '';
        this.cmobile = '';
        this.ctechnology = '';
        console.log(event.value);
        this.userRest.editConsultant(event.value).subscribe(function (response) {
            _this.crate = response.user.rate;
            _this.cemail = response.user.consultantEmail;
            _this.cmobile = response.user.consultatMobileNumber;
            _this.ctechnology = response.user.technology;
        }, function (error) { return console.log(error); });
    };
    BenchCreateComponent.prototype.ChangeClients = function (event) {
        //   this.clients=[];
        /* this.userRest.editVenodr(event.value).subscribe(
           (response) => {
             this.contacts =  response.contacts;
           },
           (error) => console.log(error)
         ); */
    };
    BenchCreateComponent.prototype.ChangeVendor = function (event) {
        var _this = this;
        this.vmobile = '';
        this.vcname = '';
        this.contacts = [];
        this.userRest.editVenodr(event.value).subscribe(function (response) {
            _this.contacts = response.contacts;
        }, function (error) { return console.log(error); });
    };
    BenchCreateComponent.prototype.ChangeContactsInner = function (value) {
        var _this = this;
        this.vmobile = '';
        this.vcname = '';
        var formData = new FormData();
        formData.append("index", value);
        this.userRest.getContactDetails(formData).subscribe(function (response) {
            console.log(response);
            _this.vmobile = response.contactDetails.contactMobile;
            _this.vcname = response.contactDetails.contactName;
        }, function (error) { return console.log(error); });
    };
    BenchCreateComponent.prototype.ChangeContacts = function (event) {
        var _this = this;
        this.vmobile = '';
        this.vcname = '';
        var formData = new FormData();
        formData.append("index", event.value);
        this.userRest.getContactDetails(formData).subscribe(function (response) {
            console.log(response);
            _this.vmobile = response.contactDetails.contactMobile;
            _this.vcname = response.contactDetails.contactName;
        }, function (error) { return console.log(error); });
    };
    BenchCreateComponent.prototype.vendorsUi = function (event) {
    };
    BenchCreateComponent.prototype.statesUi = function (event) {
        var _this = this;
        var charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedStates = this.states.find(function (car) {
                return car.label.toLowerCase().includes(_this.str.toLowerCase());
            });
            this.states.unshift(this.selectedStates);
            this.str = '';
        }
        else if (event.key === 'Backspace') {
            this.str = this.str.replace(/.$/, "");
        }
        else if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 8) {
            this.str += event.key;
        }
    };
    Object.defineProperty(BenchCreateComponent.prototype, "clientName", {
        get: function () { return this.registerClient.get('clientName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "actualRate", {
        get: function () { return this.registerForm.get('actualRate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "vendorStatus", {
        get: function () { return this.registerForm.get('vendorStatus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "vendorComments", {
        get: function () { return this.registerForm.get('vendorComments'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "submissionRate", {
        get: function () { return this.registerForm.get('submissionRate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "state", {
        get: function () { return this.registerForm.get('state'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "vendorDetailId", {
        get: function () { return this.registerForm.get('vendorDetailId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "vid", {
        get: function () { return this.registerForm.get('vid'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "clientId", {
        get: function () { return this.registerForm.get('clientId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "endClientLocation", {
        get: function () { return this.registerForm.get('vid'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "vendorCompanyName", {
        get: function () { return this.registerVendor.get('vendorCompanyName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "contactName", {
        get: function () { return this.registerVendor.get('contactName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "contactMobile", {
        get: function () { return this.registerVendor.get('contactMobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "contactEmail", {
        get: function () { return this.registerVendor.get('contactEmail'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "ext", {
        get: function () { return this.registerVendor.get('ext'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "vendorcontactName", {
        get: function () { return this.registerContact.get('vendorcontactName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "vendorcontactMobile", {
        get: function () { return this.registerContact.get('vendorcontactMobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "vendorcontactEmail", {
        get: function () { return this.registerContact.get('vendorcontactEmail'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "vendorext", {
        get: function () { return this.registerContact.get('vendorext'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "scheduleDate", {
        get: function () { return this.registerContact.get('scheduleDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchCreateComponent.prototype, "timezone", {
        get: function () { return this.registerContact.get('timezone'); },
        enumerable: true,
        configurable: true
    });
    BenchCreateComponent.prototype.registerClientForm = function () {
        var _this = this;
        this.userRest.storeClient(this.registerClient).subscribe(function (response) {
            _this.displayModalClient = false;
            _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Client Added' });
            _this.clients = response.clients;
            _this.selectedClients = response.clientId;
            // this.ChangeContactsInner(response.contactId)
            // this.router.navigate(['benchsales/list'])
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    BenchCreateComponent.prototype.registerContactForm = function () {
        var _this = this;
        this.userRest.storeContact(this.registerContact).subscribe(function (response) {
            _this.displayModal1 = false;
            _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Vendor Contact Details Added' });
            // this.selectedContacts = response.contactId;
            _this.userRest.editVenodr(_this.registerForm.value.vid).subscribe(function (response2) {
                _this.contacts = response2.contacts;
                _this.selectedContacts = response.contactId;
                _this.ChangeContactsInner(response.contactId);
            }, function (error) { return console.log(error); });
            // this.ChangeContactsInner(response.contactId)
            // this.router.navigate(['benchsales/list'])
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    BenchCreateComponent.prototype.registerVendorCompany = function () {
        var _this = this;
        console.log(this.registerVendor);
        this.userRest.storeVendor(this.registerVendor).subscribe(function (response) {
            console.log(response),
                console.log(response.vendorId);
            _this.displayModal = false;
            _this.selectedVendors = response.vendorId;
            _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Vendor Company Details Added' });
            _this.userRest.getConsultantsList().subscribe(function (response1) {
                // console.log(this.states = response.submissions);
                console.log(_this.vendors = response1.vendorslist);
                // console.log( this.clients =  response1.clients);
            }, function (error) { console.log(error); });
            _this.userRest.editVenodr(response.vendorId).subscribe(function (response2) {
                _this.contacts = response2.contacts;
                _this.selectedContacts = response.contactId;
                _this.ChangeContactsInner(response.contactId);
            }, function (error) { return console.log(error); });
            // this.router.navigate(['benchsales/list'])
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    BenchCreateComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registerForm);
        //formData.append('myImageToSend', this.imageFile.file);
        this.userRest.storeUser(this.registerForm).subscribe(function (response) {
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submission Completed' });
            _this.router.navigate(['superadmin/sumissionlist']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dd', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BenchCreateComponent.prototype, "dropdown", void 0);
    BenchCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/benchsales/user-create/user-create.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/superadmin/benchsales/user-create/user-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BenchCreateComponent);
    return BenchCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/benchsales/user-list/user-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/superadmin/benchsales/user-list/user-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\np-table th {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9iZW5jaHNhbGVzL3VzZXItbGlzdC9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhZG1pblxcc3VwZXJhZG1pblxcYmVuY2hzYWxlc1xcdXNlci1saXN0XFx1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vYmVuY2hzYWxlcy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNHRjs7QUREQTtFQUFZLGlCQUFBO0FDS1oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zdXBlcmFkbWluL2JlbmNoc2FsZXMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4uZGlzYWJsZS10ZHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4udWktYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbn1cclxucC10YWJsZSB0aHsgb3ZlcmZsb3c6IHZpc2libGU7fVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUtdGQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnVpLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59XG5cbnAtdGFibGUgdGgge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/superadmin/benchsales/user-list/user-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/superadmin/benchsales/user-list/user-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: BenchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenchListComponent", function() { return BenchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/benchsales/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);








var BenchListComponent = /** @class */ (function () {
    function BenchListComponent(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.submissions = [];
        this.loading = true;
        this.serverErrors = [];
        this.clonedProducts = {};
    }
    BenchListComponent.prototype.clearFilters = function (dt) {
        // reset the table
        dt.reset();
        this.selectedCity = '';
        this.selectedStatus = '';
    };
    BenchListComponent.prototype.loadSubmissionLazy = function (event) {
        var _this = this;
        this.loading = true;
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        setTimeout(function () {
            _this.userRest.getConsultants((event)).subscribe(function (response) {
                console.log(_this.submissions = response.submissions.data);
                _this.totalRecords = response.submissions.total;
                _this.loading = false;
            }, function (error) { console.log(error); });
        }, 1000);
    };
    BenchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cities = [];
        this.statusesVendor = [{ label: 'Select Status', value: null },
            { label: 'Interview scheduled', value: 'Interview scheduled' },
            { label: 'Submitted to Client', value: 'Submitted to Client' },
            { label: 'Submitted to Vendor', value: 'Submitted to Vendor' },
            { label: 'Disqualified', value: 'Disqualified' },
            { label: 'Client rejected', value: 'Client rejected' },
            { label: 'Vendor Rejected', value: 'Vendor Rejected' },
            { label: 'Vendor screening call', value: 'Vendor screening call' },
            { label: 'Waiting for Evaluation', value: 'Waiting for Evaluation' },
            { label: 'Placed', value: 'Placed' }
        ];
        this.userRest.getConsultantsOnly().subscribe(function (response) {
            _this.cities = response.submissions;
        }, function (error) { console.log(error); });
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'vendorStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'vendorComments': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'scheduleDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'timezone': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.frozenCols = [
            { field: 'consultatName', header: 'Name' },
        ];
        this.scrollableCols = [
            //{ field: 'user_details.name', header: 'Created By', width: '20%', editable: false },
            { field: 'consultant.consultatName', header: 'Consultant Name', width: '20%', editable: false },
            { field: 'vendorStatus', header: 'Status', width: '40%', editable: true },
            { field: 'consultant.technology', header: 'Technology', width: '20%', editable: false },
            { field: 'vendorCompanyName', header: 'Company Name', width: '20%', editable: false },
            { field: 'vendorName', header: 'Vendor Name', width: '20%', editable: false },
            { field: 'vendorEmail', header: 'Vendor Email', width: '20%', editable: false },
            { field: 'vendorMobileNumber', header: 'Vendor Mobile', width: '20%', editable: false },
            { field: 'endClientName', header: 'End Client Name', width: '20%', editable: false },
            { field: 'actualRate', header: 'Actual Rate', width: '20%', editable: true },
            { field: 'submissionRate', header: 'Submissio Rate', width: '20%', editable: true },
        ];
        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    };
    BenchListComponent.prototype.showModalDialog = function (data) {
        console.log(data);
        this.heading1 = data.consultant.consultatName + " submiting to " + data.vendorCompanyName;
        this.displayModal = true;
        this.submissionId = data.vendorId;
        this.registerVendor.patchValue({
            vendorComments: data.vendorComments,
            vendorStatus: data.vendorStatus,
            timezone: data.timezone,
            scheduleDate: this.formatDate(data.scheduleDate),
        });
    };
    BenchListComponent.prototype.showModalDialog1 = function (data) {
        this.displayModal1 = true;
        this.comment = data;
    };
    BenchListComponent.prototype.formatDate = function (date) {
        if (date) {
            var d = new Date(date);
            var month = '' + (d.getMonth() + 1);
            var day = '' + d.getDate();
            var year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            return [year, month, day].join('-');
        }
        else {
            var d = new Date();
            var month = '' + (d.getMonth() + 1);
            var day = '' + d.getDate();
            var year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            return [year, month, day].join('-');
        }
    };
    BenchListComponent.prototype.onRepresentativeChange = function (event) {
        if (event.value) {
            console.log(event.value);
            this.table.filter(event.value, 'technology', 'in');
        }
    };
    BenchListComponent.prototype.dropDatabase = function (event, index) {
        var _this = this;
        if (event.defaultPrevented)
            return;
        event.preventDefault();
        this.confirmation.confirm({
            key: 'confirm-drop-database',
            message: 'Are you sure to Aprove for Hotlist',
            accept: function () { _this._dropDatabase(index); },
        });
    };
    BenchListComponent.prototype._dropDatabase = function (index) {
        var _this = this;
        var formData = new FormData();
        formData.append("index", index);
        console.log(formData);
        this.userRest.statusChangeConsultant(formData).subscribe(function (response) {
            console.log(response);
            _this.loading = false;
            _this.submissions = response.timesheet;
        }, function (error) { console.log(error); });
    };
    Object.defineProperty(BenchListComponent.prototype, "vendorStatus", {
        get: function () { return this.registerVendor.get('vendorStatus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchListComponent.prototype, "vendorComments", {
        get: function () { return this.registerVendor.get('vendorComments'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchListComponent.prototype, "scheduleDate", {
        get: function () { return this.registerVendor.get('scheduleDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenchListComponent.prototype, "timezone", {
        get: function () { return this.registerVendor.get('timezone'); },
        enumerable: true,
        configurable: true
    });
    BenchListComponent.prototype.registerUser = function (submissionId) {
        var _this = this;
        console.log(this.registerVendor);
        this.userRest.updateSubmission(this.registerVendor, submissionId).subscribe(function (response) {
            _this.displayModal = false;
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submision Updated' });
            _this.submissions = response.submissions.data;
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    BenchListComponent.prototype.getColor = function (status) {
        if (status == "Placed") {
            return "#d4edda";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
    ], BenchListComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], BenchListComponent.prototype, "modalContent", void 0);
    BenchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/benchsales/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/superadmin/benchsales/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BenchListComponent);
    return BenchListComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/benchsales/user-rest.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/superadmin/benchsales/user-rest.service.ts ***!
  \******************************************************************/
/*! exports provided: UserRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRestService", function() { return UserRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





var UserRestService = /** @class */ (function () {
    function UserRestService(http) {
        this.http = http;
        this.users = [];
    }
    UserRestService.prototype.getConsultants = function (page) {
        var pagenumber = page.first / 20;
        var actionList = page.filters;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('page', pagenumber);
        if (Object.keys(actionList).length) {
            for (var id in actionList) {
                params = params.append(id, actionList[id]['value']);
            }
        }
        var filtersParams = { params: params };
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/submissions", filtersParams);
    };
    UserRestService.prototype.storeUser = function (form) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/submissions", form.value);
    };
    UserRestService.prototype.getConsultantsOnly = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getConsultantsOnly/");
    };
    UserRestService.prototype.storeClient = function (form) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/clients", form.value);
    };
    UserRestService.prototype.updateSubmission = function (form, id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/submissions/" + id, form.value);
    };
    UserRestService.prototype.storeVendor = function (form) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/vendorlist", form.value);
    };
    UserRestService.prototype.storeContact = function (form) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/contactslist", form.value);
    };
    UserRestService.prototype.statusChangeConsultant = function (index) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/status-consultant", index);
    };
    UserRestService.prototype.getConsultantsList = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getConsultantsList/");
    };
    UserRestService.prototype.editUser = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/jobs/" + id);
    };
    UserRestService.prototype.editVenodr = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/contacts/" + id);
    };
    UserRestService.prototype.editConsultant = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/store-consultant/" + id);
    };
    UserRestService.prototype.updateUser = function (form, id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/jobs/" + id, form.value);
    };
    UserRestService.prototype.storeDocument = function (document) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/saveDocument", document);
    };
    UserRestService.prototype.getContactDetails = function (index) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/contactsDetails", index);
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

/***/ "./src/app/admin/superadmin/consultants/consultant-create/consultant-create.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/superadmin/consultants/consultant-create/consultant-create.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vY29uc3VsdGFudHMvY29uc3VsdGFudC1jcmVhdGUvY29uc3VsdGFudC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/superadmin/consultants/consultant-create/consultant-create.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/superadmin/consultants/consultant-create/consultant-create.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: Profile, ConsultantCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantCreateComponent", function() { return ConsultantCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/consultants/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






var Profile = /** @class */ (function () {
    function Profile(prId, prName) {
        this.prId = prId;
        this.prName = prName;
    }
    return Profile;
}());

var ConsultantCreateComponent = /** @class */ (function () {
    function ConsultantCreateComponent(route, messageService, userRest, router) {
        this.route = route;
        this.messageService = messageService;
        this.userRest = userRest;
        this.router = router;
        this.counter = 0;
        this.serverErrors = [];
    }
    ConsultantCreateComponent.prototype.ngOnInit = function () {
        this.states = [
            { label: "Choose State", value: "" },
            { label: "Alabama", value: "Alabama" },
            { label: 'Alaska', value: 'Alaska' },
            { label: 'Arizona', value: 'Arizona' },
            { label: 'Arkansas', value: 'Arkansas' },
            { label: 'California', value: 'California' },
            { label: 'Colorado', value: 'Colorado' },
            { label: 'Connecticut', value: 'Connecticut' },
            { label: 'Delaware', value: "Delaware" },
            { label: 'District of Columbia', value: "District of Columbia" },
            { label: 'Florida', value: "Florida" },
            { label: 'Georgia', value: "Georgia" },
            { label: 'Hawaii', value: "Hawaii" },
            { label: 'Idaho', value: "Idaho" },
            { label: 'Illinois', value: "Illinois" },
            { label: 'Indiana', value: "Indiana" },
            { label: 'Iowa', value: "Iowa" },
            { label: 'Kansas', value: "Kansas" },
            { label: 'Kentucky', value: "Kentucky" },
            { label: 'Louisiana', value: "Louisiana" },
            { label: 'Maine', value: "Maine" },
            { label: 'Maryland', value: "Maryland" },
            { label: 'Michigan', value: "Michigan" },
            { label: 'Minnesota', value: "Minnesota" },
            { label: 'Mississippi', value: "Mississippi" },
            { label: 'Missouri', value: "Missouri" },
            { label: 'Montana', value: "Montana" },
            { label: 'Nebraska', value: "Nebraska" },
            { label: 'Nevada', value: "Nevada" },
            { label: 'New Hampshire', value: "New Hampshire" },
            { label: 'New Jersey', value: "New Jersey" },
            { label: 'New Mexico', value: "New Mexico" },
            { label: 'New York', value: "New York" },
            { label: 'North Carolina', value: "North Carolina" },
            { label: 'North Dakota', value: "North Dakota" },
            { label: 'Ohio', value: "Ohio" },
            { label: 'Oklahoma', value: "Oklahoma" },
            { label: 'Oregon', value: "Oregon" },
            { label: 'Pennsylvania', value: "Pennsylvania" },
            { label: 'Puerto Rico', value: "Puerto Rico" },
            { label: 'Rhode Island', value: "Rhode Island" },
            { label: 'South Carolina', value: "South Carolina" },
            { label: 'South Dakota', value: "South Dakota" },
            { label: 'Tennessee', value: "Tennessee" },
            { label: 'Texas', value: "Texas" },
            { label: 'Utah', value: "Utah" },
            { label: 'Vermont', value: "Vermont" },
            { label: 'Virginia', value: "Virginia" },
            { label: 'Washington', value: "Washington" },
            { label: 'West Virginia', value: "West Virginia" },
            { label: 'Wisconsin', value: "Wisconsin" },
            { label: 'Wyoming', value: "Wyoming" },
        ];
        this.cars = [
            { label: "Choose Technology", value: "" },
            { label: "AEM(Adobe Experience manger)", value: "AEM(Adobe Experience manger)" },
            { label: 'Android Developer', value: 'Android Developer' },
            { label: 'Business Analyst', value: 'Business Analyst' },
            { label: 'Business Intelligence', value: 'Business Intelligence' },
            { label: 'Data Analyst', value: 'Data Analyst' },
            { label: 'Database Administrator', value: 'Database Administrator' },
            { label: 'Devops Engineer', value: 'Devops Engineer' },
            { label: 'Dot net Developer', value: 'Dot net Developer' },
            { label: 'ETL Developer', value: "ETL Developer" },
            { label: 'Hadoop', value: "Hadoop" },
            { label: 'Hadoop Developer/Hadoop Admin', value: "Hadoop Developer/Hadoop Admin" },
            { label: 'IOS Developer', value: "IOS Developer" },
            { label: 'Java Developer', value: "Java Developer" },
            { label: 'Linux Admin', value: "Linux Admin" },
            { label: 'Mainframe Developer', value: "Mainframe Developer" },
            { label: 'Network Engineer', value: "Network Engineer" },
            { label: 'Oracle fusion developer', value: "Oracle fusion developer" },
            { label: 'PEGA', value: "PEGA" },
            { label: 'QA Tester/QA Analyst', value: "QA Tester/QA Analyst" },
            { label: 'SAP Hana', value: "SAP Hana" },
            { label: 'Salesforce', value: "Salesforce" },
            { label: 'Salesforce Admin', value: "Salesforce Admin" },
            { label: 'Salesforce Developer', value: "Salesforce Developer" },
            { label: 'Service now developer', value: "Service now developer" },
            { label: 'Tableau Developer', value: "Tableau Developer" },
            { label: 'UI Developer / Frontend Developer', value: "UI Developer / Frontend Developer" },
            { label: 'VOIP Engineer', value: "VOIP Engineer" },
            { label: 'others', value: "others" },
        ];
        this.totalNumberOfCars = this.cars.length;
        this.str = '';
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'consultatName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
            'consultantLastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
            'consultantEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'consultatMobileNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]),
            'technology': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'otherTechnologies': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'visaType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'willingLocation': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'documentsCollected': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'resource': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'ssn': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'bestContactNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'linkedInUrl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'skypeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'comments': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'note': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'reportStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'experience': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'availability': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'resume': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'otherDocument': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'workAuthorization': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'technology1': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'rating1': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'technology2': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'rating2': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'technology3': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'rating3': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'technology4': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'rating4': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
    };
    ConsultantCreateComponent.prototype.imagesPreviewResume = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (_event) {
                _this.imageFile = {
                    link: _event.target.result,
                    file: event.srcElement.files[0],
                    name: event.srcElement.files[0].name
                };
            };
            reader.readAsDataURL(event.target.files[0]);
            var formData = new FormData();
            formData.append("resume", event.target.files[0]);
            this.userRest.storeDocument(formData).subscribe(function (response) {
                console.log(response);
                _this.registerForm.patchValue({
                    resume: response.path,
                });
            }, function (error) { console.log(error); });
        }
    };
    ConsultantCreateComponent.prototype.imagesPreviewOtherDoc = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (_event) {
                _this.imageFile = {
                    link: _event.target.result,
                    file: event.srcElement.files[0],
                    name: event.srcElement.files[0].name
                };
            };
            reader.readAsDataURL(event.target.files[0]);
            var formData = new FormData();
            formData.append("otherDocument", event.target.files[0]);
            this.userRest.storeDocument(formData).subscribe(function (response) {
                console.log(response);
                _this.registerForm.patchValue({
                    otherDocument: response.path,
                });
            }, function (error) { console.log(error); });
        }
    };
    ConsultantCreateComponent.prototype.imagesPreviewWorkAuth = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (_event) {
                _this.imageFile = {
                    link: _event.target.result,
                    file: event.srcElement.files[0],
                    name: event.srcElement.files[0].name
                };
            };
            reader.readAsDataURL(event.target.files[0]);
            var formData = new FormData();
            formData.append("workAuthorization", event.target.files[0]);
            this.userRest.storeDocument(formData).subscribe(function (response) {
                console.log(response);
                _this.registerForm.patchValue({
                    workAuthorization: response.path,
                });
            }, function (error) { console.log(error); });
        }
    };
    ConsultantCreateComponent.prototype.OnFocus = function () {
        if (this.cars.length > this.totalNumberOfCars) {
            this.cars.shift();
        }
    };
    ConsultantCreateComponent.prototype.OnBlur = function () {
        console.log("OnBlur");
    };
    ConsultantCreateComponent.prototype.test = function (event) {
        var _this = this;
        var charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedCar = this.cars.find(function (car) {
                return car.label.toLowerCase().includes(_this.str.toLowerCase());
            });
            this.cars.unshift(this.selectedCar);
            this.str = '';
        }
        else if (event.key === 'Backspace') {
            this.str = this.str.replace(/.$/, "");
        }
        else if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 8) {
            this.str += event.key;
        }
    };
    ConsultantCreateComponent.prototype.statesUi = function (event) {
        var _this = this;
        var charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedStates = this.states.find(function (car) {
                return car.label.toLowerCase().includes(_this.str.toLowerCase());
            });
            this.states.unshift(this.selectedStates);
            this.str = '';
        }
        else if (event.key === 'Backspace') {
            this.str = this.str.replace(/.$/, "");
        }
        else if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 8) {
            this.str += event.key;
        }
    };
    Object.defineProperty(ConsultantCreateComponent.prototype, "consultatName", {
        get: function () { return this.registerForm.get('consultatName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "consultantEmail", {
        get: function () { return this.registerForm.get('consultantEmail'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "visaType", {
        get: function () { return this.registerForm.get('visaType'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "consultantLastName", {
        get: function () { return this.registerForm.get('consultantLastName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "consultatMobileNumber", {
        get: function () { return this.registerForm.get('consultatMobileNumber'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "technology", {
        get: function () { return this.registerForm.get('technology'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "otherTechnologies", {
        get: function () { return this.registerForm.get('otherTechnologies'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "rate", {
        get: function () { return this.registerForm.get('rate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "ravisaTypete", {
        get: function () { return this.registerForm.get('visaType'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "city", {
        get: function () { return this.registerForm.get('city'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "state", {
        get: function () { return this.registerForm.get('state'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "willingLocation", {
        get: function () { return this.registerForm.get('willingLocation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "documentsCollected", {
        get: function () { return this.registerForm.get('documentsCollected'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "resource", {
        get: function () { return this.registerForm.get('resource'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "ssn", {
        get: function () { return this.registerForm.get('ssn'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "bestContactNumber", {
        get: function () { return this.registerForm.get('bestContactNumber'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "linkedInUrl", {
        get: function () { return this.registerForm.get('linkedInUrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "skypeId", {
        get: function () { return this.registerForm.get('skypeId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "comments", {
        get: function () { return this.registerForm.get('comments'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "note", {
        get: function () { return this.registerForm.get('note'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "reportStatus", {
        get: function () { return this.registerForm.get('reportStatus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "experience", {
        get: function () { return this.registerForm.get('experience'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "availability", {
        get: function () { return this.registerForm.get('availability'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "priority", {
        get: function () { return this.registerForm.get('priority'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "resume", {
        get: function () { return this.registerForm.get('resume'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "otherDocument", {
        get: function () { return this.registerForm.get('otherDocument'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantCreateComponent.prototype, "workAuthorization", {
        get: function () { return this.registerForm.get('workAuthorization'); },
        enumerable: true,
        configurable: true
    });
    ConsultantCreateComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registerForm);
        //formData.append('myImageToSend', this.imageFile.file);
        this.userRest.storeUser(this.registerForm).subscribe(function (response) {
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Consultant is added' });
            _this.router.navigate(['consultants/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dd', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConsultantCreateComponent.prototype, "dropdown", void 0);
    ConsultantCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! raw-loader!./consultant-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/consultants/consultant-create/consultant-create.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            styles: [__webpack_require__(/*! ./consultant-create.component.scss */ "./src/app/admin/superadmin/consultants/consultant-create/consultant-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ConsultantCreateComponent);
    return ConsultantCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/consultants/consultant-edit/consultant-edit.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/superadmin/consultants/consultant-edit/consultant-edit.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vY29uc3VsdGFudHMvY29uc3VsdGFudC1lZGl0L2NvbnN1bHRhbnQtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/superadmin/consultants/consultant-edit/consultant-edit.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/superadmin/consultants/consultant-edit/consultant-edit.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: Profile, ConsultantEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantEditComponent", function() { return ConsultantEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/consultants/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






var Profile = /** @class */ (function () {
    function Profile(prId, prName) {
        this.prId = prId;
        this.prName = prName;
    }
    return Profile;
}());

var ConsultantEditComponent = /** @class */ (function () {
    function ConsultantEditComponent(route, messageService, userRest, router) {
        this.route = route;
        this.messageService = messageService;
        this.userRest = userRest;
        this.router = router;
        this.counter = 0;
        this.serverErrors = [];
    }
    ConsultantEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.states = [
            { label: "Choose State", value: "" },
            { label: "Alabama", value: "Alabama" },
            { label: 'Alaska', value: 'Alaska' },
            { label: 'Arizona', value: 'Arizona' },
            { label: 'Arkansas', value: 'Arkansas' },
            { label: 'California', value: 'California' },
            { label: 'Colorado', value: 'Colorado' },
            { label: 'Connecticut', value: 'Connecticut' },
            { label: 'Delaware', value: "Delaware" },
            { label: 'District of Columbia', value: "District of Columbia" },
            { label: 'Florida', value: "Florida" },
            { label: 'Georgia', value: "Georgia" },
            { label: 'Hawaii', value: "Hawaii" },
            { label: 'Idaho', value: "Idaho" },
            { label: 'Illinois', value: "Illinois" },
            { label: 'Indiana', value: "Indiana" },
            { label: 'Iowa', value: "Iowa" },
            { label: 'Kansas', value: "Kansas" },
            { label: 'Kentucky', value: "Kentucky" },
            { label: 'Louisiana', value: "Louisiana" },
            { label: 'Maine', value: "Maine" },
            { label: 'Maryland', value: "Maryland" },
            { label: 'Michigan', value: "Michigan" },
            { label: 'Minnesota', value: "Minnesota" },
            { label: 'Mississippi', value: "Mississippi" },
            { label: 'Missouri', value: "Missouri" },
            { label: 'Montana', value: "Montana" },
            { label: 'Nebraska', value: "Nebraska" },
            { label: 'Nevada', value: "Nevada" },
            { label: 'New Hampshire', value: "New Hampshire" },
            { label: 'New Jersey', value: "New Jersey" },
            { label: 'New Mexico', value: "New Mexico" },
            { label: 'New York', value: "New York" },
            { label: 'North Carolina', value: "North Carolina" },
            { label: 'North Dakota', value: "North Dakota" },
            { label: 'Ohio', value: "Ohio" },
            { label: 'Oklahoma', value: "Oklahoma" },
            { label: 'Oregon', value: "Oregon" },
            { label: 'Pennsylvania', value: "Pennsylvania" },
            { label: 'Puerto Rico', value: "Puerto Rico" },
            { label: 'Rhode Island', value: "Rhode Island" },
            { label: 'South Carolina', value: "South Carolina" },
            { label: 'South Dakota', value: "South Dakota" },
            { label: 'Tennessee', value: "Tennessee" },
            { label: 'Texas', value: "Texas" },
            { label: 'Utah', value: "Utah" },
            { label: 'Vermont', value: "Vermont" },
            { label: 'Virginia', value: "Virginia" },
            { label: 'Washington', value: "Washington" },
            { label: 'West Virginia', value: "West Virginia" },
            { label: 'Wisconsin', value: "Wisconsin" },
            { label: 'Wyoming', value: "Wyoming" },
        ];
        this.cars = [
            { label: "Choose Technology", value: "" },
            { label: "AEM(Adobe Experience manger)", value: "AEM(Adobe Experience manger)" },
            { label: 'Android Developer', value: 'Android Developer' },
            { label: 'Business Analyst', value: 'Business Analyst' },
            { label: 'Business Intelligence', value: 'Business Intelligence' },
            { label: 'Data Analyst', value: 'Data Analyst' },
            { label: 'Database Administrator', value: 'Database Administrator' },
            { label: 'Devops Engineer', value: 'Devops Engineer' },
            { label: 'Dot net Developer', value: 'Dot net Developer' },
            { label: 'ETL Developer', value: "ETL Developer" },
            { label: 'Hadoop', value: "Hadoop" },
            { label: 'Hadoop Developer/Hadoop Admin', value: "Hadoop Developer/Hadoop Admin" },
            { label: 'IOS Developer', value: "IOS Developer" },
            { label: 'Java Developer', value: "Java Developer" },
            { label: 'Linux Admin', value: "Linux Admin" },
            { label: 'Mainframe Developer', value: "Mainframe Developer" },
            { label: 'Network Engineer', value: "Network Engineer" },
            { label: 'Oracle fusion developer', value: "Oracle fusion developer" },
            { label: 'PEGA', value: "PEGA" },
            { label: 'QA Tester/QA Analyst', value: "QA Tester/QA Analyst" },
            { label: 'SAP Hana', value: "SAP Hana" },
            { label: 'Salesforce', value: "Salesforce" },
            { label: 'Salesforce Admin', value: "Salesforce Admin" },
            { label: 'Salesforce Developer', value: "Salesforce Developer" },
            { label: 'Service now developer', value: "Service now developer" },
            { label: 'Tableau Developer', value: "Tableau Developer" },
            { label: 'UI Developer / Frontend Developer', value: "UI Developer / Frontend Developer" },
            { label: 'VOIP Engineer', value: "VOIP Engineer" },
            { label: 'others', value: "others" },
        ];
        this.totalNumberOfCars = this.cars.length;
        this.str = '';
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'createdBy': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'consultatName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
            'consultantLastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
            'consultantEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'consultatMobileNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]),
            'technology': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'otherTechnologies': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'visaType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'willingLocation': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'documentsCollected': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'resource': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'ssn': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'bestContactNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'linkedInUrl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'skypeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'comments': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'note': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'reportStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'experience': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'availability': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'resume': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'otherDocument': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'workAuthorization': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'technology1': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'rating1': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'technology2': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'rating2': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'technology3': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'rating3': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'technology4': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'rating4': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
        var id = this.route.snapshot.params.id;
        this.userRest.editUser(id).subscribe(function (response) {
            _this.path = response.path;
            _this.registerForm.patchValue({
                'createdBy': response.user.user_details.name,
                'consultatName': response.user.consultatName,
                'consultantLastName': response.user.consultantLastName,
                'consultantEmail': response.user.consultantEmail,
                'consultatMobileNumber': response.user.consultatMobileNumber,
                'technology': response.user.technology,
                'otherTechnologies': response.user.otherTechnologies,
                'rate': response.user.rate,
                'visaType': response.user.visaType,
                'city': response.user.city,
                'state': response.user.state,
                'willingLocation': response.user.willingLocation,
                'documentsCollected': response.user.documentsCollected,
                'resource': response.user.resource,
                'ssn': response.user.ssn,
                'bestContactNumber': response.user.bestContactNumber,
                'linkedInUrl': response.user.linkedInUrl,
                'skypeId': response.user.skypeId,
                'comments': response.user.comments,
                'note': response.user.note,
                'reportStatus': response.user.reportStatus,
                'experience': response.user.experience,
                'availability': response.user.availability,
                'priority': response.user.priority,
                'resume': response.user.resume,
                'otherDocument': response.user.otherDocument,
                'workAuthorization': response.user.workAuthorization,
                'technology1': response.user.technology1,
                'rating1': response.user.rating1,
                'technology2': response.user.technology2,
                'rating2': response.user.rating2,
                'technology3': response.user.technology3,
                'rating3': response.user.rating3,
                'technology4': response.user.technology4,
                'rating4': response.user.rating4,
            });
        }, function (error) { return console.log(error); });
    };
    ConsultantEditComponent.prototype.removeFile = function (name) {
        var _this = this;
        var id = this.route.snapshot.params.id;
        var formData = new FormData();
        formData.append(name, "yes");
        formData.append("id", id);
        this.userRest.removeFile(formData).subscribe(function (response) {
            console.log(response);
            _this.registerForm.patchValue({
                'createdBy': response.user.user_details.name,
                'consultatName': response.user.consultatName,
                'consultantLastName': response.user.consultantLastName,
                'consultantEmail': response.user.consultantEmail,
                'consultatMobileNumber': response.user.consultatMobileNumber,
                'technology': response.user.technology,
                'otherTechnologies': response.user.otherTechnologies,
                'rate': response.user.rate,
                'visaType': response.user.visaType,
                'city': response.user.city,
                'state': response.user.state,
                'willingLocation': response.user.willingLocation,
                'documentsCollected': response.user.documentsCollected,
                'resource': response.user.resource,
                'ssn': response.user.ssn,
                'bestContactNumber': response.user.bestContactNumber,
                'linkedInUrl': response.user.linkedInUrl,
                'skypeId': response.user.skypeId,
                'comments': response.user.comments,
                'note': response.user.note,
                'reportStatus': response.user.reportStatus,
                'experience': response.user.experience,
                'availability': response.user.availability,
                'priority': response.user.priority,
                'resume': response.user.resume,
                'otherDocument': response.user.otherDocument,
                'workAuthorization': response.user.workAuthorization,
                'technology1': response.user.technology1,
                'rating1': response.user.rating1,
                'technology2': response.user.technology2,
                'rating2': response.user.rating2,
                'technology3': response.user.technology3,
                'rating3': response.user.rating3,
                'technology4': response.user.technology4,
                'rating4': response.user.rating4,
            });
            //  this.router.navigate(['consultants/list'])
        }, function (error) {
            // this.serverErrors = error.error.errors
        }, function () { return console.log('completed'); });
    };
    ConsultantEditComponent.prototype.imagesPreviewResume = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (_event) {
                _this.imageFile = {
                    link: _event.target.result,
                    file: event.srcElement.files[0],
                    name: event.srcElement.files[0].name
                };
            };
            reader.readAsDataURL(event.target.files[0]);
            var formData = new FormData();
            formData.append("resume", event.target.files[0]);
            this.userRest.storeDocument(formData).subscribe(function (response) {
                console.log(response);
                _this.registerForm.patchValue({
                    resume: response.path,
                });
            }, function (error) { console.log(error); });
        }
    };
    ConsultantEditComponent.prototype.imagesPreviewOtherDoc = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (_event) {
                _this.imageFile = {
                    link: _event.target.result,
                    file: event.srcElement.files[0],
                    name: event.srcElement.files[0].name
                };
            };
            reader.readAsDataURL(event.target.files[0]);
            var formData = new FormData();
            formData.append("otherDocument", event.target.files[0]);
            this.userRest.storeDocument(formData).subscribe(function (response) {
                console.log(response);
                _this.registerForm.patchValue({
                    otherDocument: response.path,
                });
            }, function (error) { console.log(error); });
        }
    };
    ConsultantEditComponent.prototype.imagesPreviewWorkAuth = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (_event) {
                _this.imageFile = {
                    link: _event.target.result,
                    file: event.srcElement.files[0],
                    name: event.srcElement.files[0].name
                };
            };
            reader.readAsDataURL(event.target.files[0]);
            var formData = new FormData();
            formData.append("workAuthorization", event.target.files[0]);
            this.userRest.storeDocument(formData).subscribe(function (response) {
                console.log(response);
                _this.registerForm.patchValue({
                    workAuthorization: response.path,
                });
            }, function (error) { console.log(error); });
        }
    };
    ConsultantEditComponent.prototype.OnFocus = function () {
        if (this.cars.length > this.totalNumberOfCars) {
            this.cars.shift();
        }
    };
    ConsultantEditComponent.prototype.OnBlur = function () {
        console.log("OnBlur");
    };
    ConsultantEditComponent.prototype.test = function (event) {
        var _this = this;
        var charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedCar = this.cars.find(function (car) {
                return car.label.toLowerCase().includes(_this.str.toLowerCase());
            });
            this.cars.unshift(this.selectedCar);
            this.str = '';
        }
        else if (event.key === 'Backspace') {
            this.str = this.str.replace(/.$/, "");
        }
        else if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 8) {
            this.str += event.key;
        }
    };
    ConsultantEditComponent.prototype.statesUi = function (event) {
        var _this = this;
        var charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedStates = this.states.find(function (car) {
                return car.label.toLowerCase().includes(_this.str.toLowerCase());
            });
            this.states.unshift(this.selectedStates);
            this.str = '';
        }
        else if (event.key === 'Backspace') {
            this.str = this.str.replace(/.$/, "");
        }
        else if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 8) {
            this.str += event.key;
        }
    };
    Object.defineProperty(ConsultantEditComponent.prototype, "consultatName", {
        get: function () { return this.registerForm.get('consultatName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "consultantEmail", {
        get: function () { return this.registerForm.get('consultantEmail'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "visaType", {
        get: function () { return this.registerForm.get('visaType'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "consultantLastName", {
        get: function () { return this.registerForm.get('consultantLastName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "consultatMobileNumber", {
        get: function () { return this.registerForm.get('consultatMobileNumber'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "technology", {
        get: function () { return this.registerForm.get('technology'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "otherTechnologies", {
        get: function () { return this.registerForm.get('otherTechnologies'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "rate", {
        get: function () { return this.registerForm.get('rate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "ravisaTypete", {
        get: function () { return this.registerForm.get('visaType'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "city", {
        get: function () { return this.registerForm.get('city'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "state", {
        get: function () { return this.registerForm.get('state'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "willingLocation", {
        get: function () { return this.registerForm.get('willingLocation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "documentsCollected", {
        get: function () { return this.registerForm.get('documentsCollected'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "resource", {
        get: function () { return this.registerForm.get('resource'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "ssn", {
        get: function () { return this.registerForm.get('ssn'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "bestContactNumber", {
        get: function () { return this.registerForm.get('bestContactNumber'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "linkedInUrl", {
        get: function () { return this.registerForm.get('linkedInUrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "skypeId", {
        get: function () { return this.registerForm.get('skypeId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "comments", {
        get: function () { return this.registerForm.get('comments'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "note", {
        get: function () { return this.registerForm.get('note'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "reportStatus", {
        get: function () { return this.registerForm.get('reportStatus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "experience", {
        get: function () { return this.registerForm.get('experience'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "availability", {
        get: function () { return this.registerForm.get('availability'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "priority", {
        get: function () { return this.registerForm.get('priority'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "resume", {
        get: function () { return this.registerForm.get('resume'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "otherDocument", {
        get: function () { return this.registerForm.get('otherDocument'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsultantEditComponent.prototype, "workAuthorization", {
        get: function () { return this.registerForm.get('workAuthorization'); },
        enumerable: true,
        configurable: true
    });
    ConsultantEditComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registerForm);
        //formData.append('myImageToSend', this.imageFile.file);
        this.userRest.storeUser(this.registerForm).subscribe(function (response) {
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Consultant is added' });
            _this.router.navigate(['consultants/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    ConsultantEditComponent.prototype.updateUserDetails = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.userRest.updateUser(this.registerForm, id).subscribe(function (response) {
            console.log(response),
                _this.router.navigate(['consultants/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        }, function () { return console.log('completed'); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dd', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConsultantEditComponent.prototype, "dropdown", void 0);
    ConsultantEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consultant-edit',
            template: __webpack_require__(/*! raw-loader!./consultant-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/consultants/consultant-edit/consultant-edit.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            styles: [__webpack_require__(/*! ./consultant-edit.component.scss */ "./src/app/admin/superadmin/consultants/consultant-edit/consultant-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ConsultantEditComponent);
    return ConsultantEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/consultants/consultant-list/consultant-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/superadmin/consultants/consultant-list/consultant-list.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9jb25zdWx0YW50cy9jb25zdWx0YW50LWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXHNlcC1iYXJcXGFuZy9zcmNcXGFwcFxcYWRtaW5cXHN1cGVyYWRtaW5cXGNvbnN1bHRhbnRzXFxjb25zdWx0YW50LWxpc3RcXGNvbnN1bHRhbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9jb25zdWx0YW50cy9jb25zdWx0YW50LWxpc3QvY29uc3VsdGFudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vY29uc3VsdGFudHMvY29uc3VsdGFudC1saXN0L2NvbnN1bHRhbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4uZGlzYWJsZS10ZHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4udWktYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNhYmxlLXRkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi51aS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/superadmin/consultants/consultant-list/consultant-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/superadmin/consultants/consultant-list/consultant-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConsultantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantListComponent", function() { return ConsultantListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/consultants/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);








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
var ConsultantListComponent = /** @class */ (function () {
    function ConsultantListComponent(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.timeSheets = [];
        this.confirmDropDatabaseDialogVisible = false;
        this.statusOptions = [
            // {label: "Dot net Developer",value: 'Dot net Developer'},
            { label: "Java Developer", value: 'Java Developer' },
            { label: "QA Tester/QA Analyst", value: 'QA Tester/QA Analyst' },
        ];
        this.loading = true;
        this.clonedProducts = {};
    }
    ;
    ConsultantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getConsultants().subscribe(function (response) { console.log(_this.timeSheets = response.timesheet); _this.loading = false; }, function (error) { console.log(error); });
        this.frozenCols = [
            { field: 'consultatName', header: 'Name' },
        ];
        this.scrollableCols = [
            //   { field: 'user_details.name', header: 'Created By', width: '20%',editable: false},
            { field: 'consultatName', header: 'Consultant Name', width: '20%', editable: true },
            // { field: 'user_details.name', header: 'Created By', width: '20%',editable: false},
            // { field: 'created_at', header: 'Created At' , width: '20%',editable: false},
            { field: 'consultantEmail', header: 'Email', width: '40%', editable: true },
            { field: 'consultatMobileNumber', header: 'Phone number', width: '20%', editable: true },
            { field: 'experience', header: 'Exp', width: '20%', editable: true },
            { field: 'rate', header: 'Rate', width: '20%', editable: false },
            { field: 'technology', header: 'Technology', width: '20%', editable: false },
            { field: 'visaType', header: 'visa Type', width: '20%', editable: false },
            { field: 'city', header: 'City', width: '20%', editable: false },
            { field: 'state', header: 'State', width: '20%', editable: false },
            { field: 'willingLocation', header: 'Relocate', width: '20%', editable: false },
            { field: 'documentsCollected', header: 'Documents Collected', width: '20%', editable: false },
            { field: 'resource', header: 'Resource', width: '20%', editable: false },
            { field: 'ssn', header: 'Last 4 SSN', width: '20%', editable: false },
            { field: 'bestContactNumber', header: 'Best Contact Number', width: '20%', editable: false },
            { field: 'linkedInUrl', header: 'LinkedIn', width: '20%', editable: false },
            { field: 'skypeId', header: 'skypeId', width: '20%', editable: false },
            { field: 'priority', header: 'priority', width: '20%', editable: false },
            { field: 'reportStatus', header: 'Status', width: '20%', editable: false }
        ];
        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    };
    ConsultantListComponent.prototype.onActivityChange = function (event) {
        var value = event.target.value;
        if (value && value.trim().length) {
            var activity = parseInt(value);
            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    };
    ConsultantListComponent.prototype.onRowEditInit = function (product) {
        console.log(product);
        this.clonedProducts[product.reportId] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, product);
    };
    ConsultantListComponent.prototype.onRowEditSave = function (product, index) {
        //alert(product.timeSheetId)
        /*this.loading = true;
        if (product.duration < 16) {
          let updateUser: FormGroup;
          updateUser = new FormGroup({
            'duration': new FormControl(product.duration),
            'fromDate': new FormControl(product.fromDate),
            'assignment': new FormControl(product.assignment),
            'serviceCode': new FormControl(product.serviceCode),
          });
          this.userRest.updateTimeSheet(updateUser, product.timeSheetId).subscribe(
            (response) => {
              this.loading = false;
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Timesheet is updated' });
            },
            (error) => {
              console.log(error)
              this.loading = false;
              this.timeSheets[index] = this.clonedProducts[product.timeSheetId];
              delete this.timeSheets[product.timeSheetId];
              this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
            },
            () => console.log('completed')
          );
      
        }
        else {
          this.loading = false;
          this.timeSheets[index] = this.clonedProducts[product.timeSheetId];
          delete this.timeSheets[product.timeSheetId];
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Duration only 15 hours accepted' });
        } */
    };
    ConsultantListComponent.prototype.onRowEditCancel = function (product, index) {
        this.timeSheets[index] = this.clonedProducts[product.reportId];
        delete this.timeSheets[product.reportId];
    };
    ConsultantListComponent.prototype.onDateSelect = function (value) {
        this.table.filter(this.formatDate(value), 'created_at', 'equals');
    };
    ConsultantListComponent.prototype.formatDate = function (date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return date.getFullYear() + '-' + month + '-' + day;
    };
    ConsultantListComponent.prototype.onRepresentativeChange = function (event) {
        if (event.value) {
            console.log(event.value);
            this.table.filter(event.value, 'technology', 'in');
        }
    };
    ConsultantListComponent.prototype.createPortal = function (event, index) {
        var _this = this;
        if (event.defaultPrevented)
            return;
        event.preventDefault();
        this.confirmation.confirm({
            key: 'confirm-drop-database',
            message: 'Are you sure to Create Employee Login',
            accept: function () { _this._createPortal(index); },
        });
    };
    ConsultantListComponent.prototype.dropDatabase = function (event, index) {
        var _this = this;
        if (event.defaultPrevented)
            return;
        event.preventDefault();
        this.confirmation.confirm({
            key: 'confirm-drop-database',
            message: 'Are you sure to Aprove for Hotlist',
            accept: function () { _this._dropDatabase(index); },
        });
    };
    ConsultantListComponent.prototype._createPortal = function (index) {
        var _this = this;
        var formData = new FormData();
        formData.append("index", index);
        console.log(formData);
        this.userRest.createEmployeePortal(formData).subscribe(function (response) {
            console.log(response);
            _this.loading = false;
            _this.timeSheets = response.timesheet;
        }, function (error) { console.log(error); });
    };
    ConsultantListComponent.prototype._dropDatabase = function (index) {
        var _this = this;
        var formData = new FormData();
        formData.append("index", index);
        console.log(formData);
        this.userRest.statusChangeConsultant(formData).subscribe(function (response) {
            console.log(response);
            _this.loading = false;
            _this.timeSheets = response.timesheet;
        }, function (error) { console.log(error); });
    };
    ConsultantListComponent.prototype.editUser = function (id) {
        this.router.navigate(['superadmin/consultantedit', id]);
    };
    ConsultantListComponent.prototype.getColor = function (status, adminStatus) {
        if (adminStatus == "A") {
            return "#d4edda";
        }
        else if (status == "not interested") {
            return "#f8d7da";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
    ], ConsultantListComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ConsultantListComponent.prototype, "modalContent", void 0);
    ConsultantListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./consultant-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/consultants/consultant-list/consultant-list.component.html"),
            styles: [__webpack_require__(/*! ./consultant-list.component.scss */ "./src/app/admin/superadmin/consultants/consultant-list/consultant-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ConsultantListComponent);
    return ConsultantListComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/consultants/user-rest.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/superadmin/consultants/user-rest.service.ts ***!
  \*******************************************************************/
/*! exports provided: UserRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRestService", function() { return UserRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var UserRestService = /** @class */ (function () {
    function UserRestService(http) {
        this.http = http;
        this.users = [];
    }
    UserRestService.prototype.getTimeSheet = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getAllTimesheets");
    };
    UserRestService.prototype.getConsultants = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getAllConsultants/");
    };
    UserRestService.prototype.storeUser = function (form) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/store-consultant", form.value);
    };
    UserRestService.prototype.createEmployeePortal = function (index) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/createEmployeePortal", index);
    };
    UserRestService.prototype.statusChangeConsultant = function (index) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/status-consultant", index);
    };
    UserRestService.prototype.editUser = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/store-consultant/" + id);
    };
    UserRestService.prototype.updateUser = function (form, id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/store-consultant/" + id, form.value);
    };
    UserRestService.prototype.storeDocument = function (document) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/saveDocument", document);
    };
    UserRestService.prototype.removeFile = function (document) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/removeDocument", document);
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

/***/ "./src/app/admin/superadmin/documents-inactive/documents-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/superadmin/documents-inactive/documents-list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.1rem;\n  margin-right: 0.1rem;\n}\n\n.btn-length {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9kb2N1bWVudHMtaW5hY3RpdmUvQzpcXHhhbXBwXFxodGRvY3NcXHNlcC1iYXJcXGFuZy9zcmNcXGFwcFxcYWRtaW5cXHN1cGVyYWRtaW5cXGRvY3VtZW50cy1pbmFjdGl2ZVxcZG9jdW1lbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vZG9jdW1lbnRzLWluYWN0aXZlL2RvY3VtZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUNHRjs7QUREQTtFQUVFLGlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zdXBlcmFkbWluL2RvY3VtZW50cy1pbmFjdGl2ZS9kb2N1bWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4uZGlzYWJsZS10ZHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4udWktYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMC4xMHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMTByZW07XHJcbn1cclxuLmJ0bi1sZW5ndGhcclxue1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiIsIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uZGlzYWJsZS10ZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udWktYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjFyZW07XG59XG5cbi5idG4tbGVuZ3RoIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/superadmin/documents-inactive/documents-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/superadmin/documents-inactive/documents-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DocumentsInactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsInactiveComponent", function() { return DocumentsInactiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);








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
var DocumentsInactiveComponent = /** @class */ (function () {
    function DocumentsInactiveComponent(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.timeSheets = [];
        this.confirmDropDatabaseDialogVisible = false;
        this.statusOptions = [
            // {label: "Dot net Developer",value: 'Dot net Developer'},
            { label: "Java Developer", value: 'Java Developer' },
            { label: "QA Tester/QA Analyst", value: 'QA Tester/QA Analyst' },
        ];
        this.loading = true;
        this.clonedProducts = {};
        this.data = [];
    }
    ;
    DocumentsInactiveComponent.prototype.showModalDialog = function (data) {
        this.displayModal = true;
        this.submissionId = data.reportId;
        this.registerVendor.patchValue({
            priority: data.priority,
            wStatus: data.wStatus,
            note: data.note,
        });
    };
    DocumentsInactiveComponent.prototype.showModalDialog1 = function (value) {
        console.log(value);
        this.displayModal1 = true;
        this.valuenote = value;
    };
    DocumentsInactiveComponent.prototype.showModalDialogVendor = function (data) {
        var _this = this;
        this.showDialog = true;
        this.userRest.EditDocument(data.reportId).subscribe(function (response) { console.log(_this.data = response.submissions); _this.loading = false; }, function (error) { console.log(error); });
        //  this.displayModalVendor = true;
    };
    DocumentsInactiveComponent.prototype.calculateDiff = function (dateSent) {
        var currentDate = new Date();
        dateSent = new Date(dateSent);
        return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
    };
    DocumentsInactiveComponent.prototype.getIntervIew = function (index) {
        var _this = this;
        var count = 0;
        var formData = new FormData();
        formData.append("index", index);
        console.log(formData);
        this.userRest.getTotalInterviewShecdules(formData).subscribe(function (response) {
            console.log(response);
            _this.loading = false;
            count = response.interviews;
        }, function (error) { console.log(error); });
        return count;
    };
    DocumentsInactiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'note': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'wStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.userRest.getConsultantsInactive().subscribe(function (response) { console.log(_this.timeSheets = response.timesheet); _this.loading = false; }, function (error) { console.log(error); });
        this.frozenCols = [
            { field: 'consultatName', header: 'Name' },
        ];
        this.scrollableCols = [
            // { field: 'consultatName', header: 'Consultant Name', width: '20%',editable: true},
            // { field: 'user_details.name', header: 'Created By', width: '20%',editable: false},
            // { field: 'created_at', header: 'Created At' , width: '20%',editable: false},
            { field: 'consultantEmail', header: 'Email', width: '40%', editable: true },
            { field: 'consultatMobileNumber', header: 'Phone number', width: '20%', editable: true },
            { field: 'experience', header: 'Exp', width: '20%', editable: true },
            { field: 'rate', header: 'Rate', width: '20%', editable: false },
            { field: 'technology', header: 'Technology', width: '20%', editable: false },
            { field: 'visaType', header: 'visa Type', width: '20%', editable: false },
            { field: 'city', header: 'City', width: '20%', editable: false },
            { field: 'state', header: 'State', width: '20%', editable: false },
            { field: 'willingLocation', header: 'Relocate', width: '20%', editable: false },
            { field: 'documentsCollected', header: 'Documents Collected', width: '20%', editable: false },
            //   { field: 'resource', header: 'Resource', width: '20%' ,editable: false},
            { field: 'ssn', header: 'Last 4 SSN', width: '20%', editable: false },
        ];
    };
    DocumentsInactiveComponent.prototype.onActivityChange = function (event) {
        var value = event.target.value;
        if (value && value.trim().length) {
            var activity = parseInt(value);
            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    };
    DocumentsInactiveComponent.prototype.onDateSelect = function (value) {
        this.table.filter(this.formatDate(value), 'created_at', 'equals');
    };
    DocumentsInactiveComponent.prototype.formatDate = function (date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return date.getFullYear() + '-' + month + '-' + day;
    };
    DocumentsInactiveComponent.prototype.onRepresentativeChange = function (event) {
        if (event.value) {
            console.log(event.value);
            this.table.filter(event.value, 'technology', 'in');
        }
    };
    DocumentsInactiveComponent.prototype.registerUser = function (submissionId) {
        var _this = this;
        this.userRest.updateConsultantStatus(this.registerVendor, submissionId).subscribe(function (response) {
            _this.displayModal = false;
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submision Updated' });
            _this.timeSheets = response.timesheet;
        }, function (error) {
            //  this.serverErrors = error.error.errors
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
    ], DocumentsInactiveComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], DocumentsInactiveComponent.prototype, "modalContent", void 0);
    DocumentsInactiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./documents-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/documents-inactive/documents-list.component.html"),
            styles: [__webpack_require__(/*! ./documents-list.component.scss */ "./src/app/admin/superadmin/documents-inactive/documents-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DocumentsInactiveComponent);
    return DocumentsInactiveComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/documents-list/documents-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/superadmin/documents-list/documents-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.1rem;\n  margin-right: 0.1rem;\n}\n\n.btn-length {\n  margin-right: 5px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9kb2N1bWVudHMtbGlzdC9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhZG1pblxcc3VwZXJhZG1pblxcZG9jdW1lbnRzLWxpc3RcXGRvY3VtZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9zdXBlcmFkbWluL2RvY3VtZW50cy1saXN0L2RvY3VtZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUNHRjs7QUREQTtFQUVFLGlCQUFBO0VBQ0EsbUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vZG9jdW1lbnRzLWxpc3QvZG9jdW1lbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpc2FibGUtdGR7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLnVpLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMTByZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjEwcmVtO1xyXG59XHJcbi5idG4tbGVuZ3RoXHJcbntcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNhYmxlLXRkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi51aS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMXJlbTtcbn1cblxuLmJ0bi1sZW5ndGgge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/superadmin/documents-list/documents-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/superadmin/documents-list/documents-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DocumentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsListComponent", function() { return DocumentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);








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
var DocumentsListComponent = /** @class */ (function () {
    function DocumentsListComponent(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.timeSheets = [];
        this.confirmDropDatabaseDialogVisible = false;
        this.statusOptions = [
            // {label: "Dot net Developer",value: 'Dot net Developer'},
            { label: "Java Developer", value: 'Java Developer' },
            { label: "QA Tester/QA Analyst", value: 'QA Tester/QA Analyst' },
        ];
        this.loading = true;
        this.clonedProducts = {};
        this.data = [];
    }
    ;
    DocumentsListComponent.prototype.showModalDialog = function (data) {
        this.displayModal = true;
        this.submissionId = data.reportId;
        this.registerVendor.patchValue({
            priority: data.priority,
            wStatus: data.wStatus,
            note: data.note,
        });
    };
    DocumentsListComponent.prototype.showModalDialog1 = function (value) {
        console.log(value);
        this.displayModal1 = true;
        this.valuenote = value;
    };
    DocumentsListComponent.prototype.showModalDialogVendor = function (data) {
        var _this = this;
        this.showDialog = true;
        this.userRest.EditDocument(data.reportId).subscribe(function (response) { console.log(_this.data = response.submissions); _this.loading = false; }, function (error) { console.log(error); });
        //  this.displayModalVendor = true;
    };
    DocumentsListComponent.prototype.calculateDiff = function (dateSent) {
        var currentDate = new Date();
        dateSent = new Date(dateSent);
        return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
    };
    DocumentsListComponent.prototype.getIntervIew = function (index) {
        var _this = this;
        var count = 0;
        var formData = new FormData();
        formData.append("index", index);
        console.log(formData);
        this.userRest.getTotalInterviewShecdules(formData).subscribe(function (response) {
            console.log(response);
            _this.loading = false;
            count = response.interviews;
        }, function (error) { console.log(error); });
        return count;
    };
    DocumentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'note': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'wStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.userRest.getConsultants().subscribe(function (response) { console.log(_this.timeSheets = response.timesheet); _this.loading = false; }, function (error) { console.log(error); });
        this.frozenCols = [
            { field: 'consultatName', header: 'Name' },
        ];
        this.scrollableCols = [
            // { field: 'consultatName', header: 'Consultant Name', width: '20%',editable: true},
            // { field: 'user_details.name', header: 'Created By', width: '20%',editable: false},
            // { field: 'created_at', header: 'Created At' , width: '20%',editable: false},
            { field: 'consultantEmail', header: 'Email', width: '250px', editable: true },
            { field: 'consultatMobileNumber', header: 'Phone number', width: '200px', editable: true },
            { field: 'experience', header: 'Exp', width: '200px', editable: true },
            { field: 'rate', header: 'Rate', width: '60px', editable: false },
            { field: 'technology', header: 'Technology', width: '150px', editable: false },
            { field: 'visaType', header: 'visa Type', width: '150px%', editable: false },
            { field: 'city', header: 'City', width: '150px', editable: false },
            { field: 'state', header: 'State', width: '150px', editable: false },
            { field: 'willingLocation', header: 'Relocate', width: '150px', editable: false },
            // { field: 'documentsCollected', header: 'Documents Collected', width: '20%' ,editable: false},
            //  { field: 'resource', header: 'Resource', width: '20%' ,editable: false},
            { field: 'ssn', header: 'Last 4 SSN', width: '150px', editable: false },
        ];
        this.representatives = [
            { name: "Dot net Developer" },
            { name: "Java Developer" },
            { name: "QA Tester/QA Analyst" },
            { name: "Devops Engineer" }
        ];
        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    };
    DocumentsListComponent.prototype.onActivityChange = function (event) {
        var value = event.target.value;
        if (value && value.trim().length) {
            var activity = parseInt(value);
            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    };
    DocumentsListComponent.prototype.onDateSelect = function (value) {
        this.table.filter(this.formatDate(value), 'created_at', 'equals');
    };
    DocumentsListComponent.prototype.formatDate = function (date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return date.getFullYear() + '-' + month + '-' + day;
    };
    DocumentsListComponent.prototype.registerUser = function (submissionId) {
        var _this = this;
        this.userRest.updateConsultantStatus(this.registerVendor, submissionId).subscribe(function (response) {
            _this.displayModal = false;
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submision Updated' });
            _this.timeSheets = response.timesheet;
        }, function (error) {
            //  this.serverErrors = error.error.errors
        });
    };
    DocumentsListComponent.prototype.getColor = function (status) {
        if (status == "S") {
            return "#d4edda";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
    ], DocumentsListComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], DocumentsListComponent.prototype, "modalContent", void 0);
    DocumentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./documents-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/documents-list/documents-list.component.html"),
            styles: [__webpack_require__(/*! ./documents-list.component.scss */ "./src/app/admin/superadmin/documents-list/documents-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DocumentsListComponent);
    return DocumentsListComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/documents-placed/documents-placed.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/superadmin/documents-placed/documents-placed.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.1rem;\n  margin-right: 0.1rem;\n}\n\n.btn-length {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9kb2N1bWVudHMtcGxhY2VkL0M6XFx4YW1wcFxcaHRkb2NzXFxzZXAtYmFyXFxhbmcvc3JjXFxhcHBcXGFkbWluXFxzdXBlcmFkbWluXFxkb2N1bWVudHMtcGxhY2VkXFxkb2N1bWVudHMtcGxhY2VkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9zdXBlcmFkbWluL2RvY3VtZW50cy1wbGFjZWQvZG9jdW1lbnRzLXBsYWNlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURDQTtFQUNFLG9CQUFBO0FDRUY7O0FEQUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEREE7RUFFRSxpQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9kb2N1bWVudHMtcGxhY2VkL2RvY3VtZW50cy1wbGFjZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpc2FibGUtdGR7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLnVpLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMTByZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjEwcmVtO1xyXG59XHJcbi5idG4tbGVuZ3RoXHJcbntcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUtdGQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnVpLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjFyZW07XG4gIG1hcmdpbi1yaWdodDogMC4xcmVtO1xufVxuXG4uYnRuLWxlbmd0aCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/superadmin/documents-placed/documents-placed.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/superadmin/documents-placed/documents-placed.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DocumentsPlacedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPlacedComponent", function() { return DocumentsPlacedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);








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
var DocumentsPlacedComponent = /** @class */ (function () {
    function DocumentsPlacedComponent(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.timeSheets = [];
        this.confirmDropDatabaseDialogVisible = false;
        this.statusOptions = [
            // {label: "Dot net Developer",value: 'Dot net Developer'},
            { label: "Java Developer", value: 'Java Developer' },
            { label: "QA Tester/QA Analyst", value: 'QA Tester/QA Analyst' },
        ];
        this.loading = true;
        this.clonedProducts = {};
        this.data = [];
    }
    ;
    DocumentsPlacedComponent.prototype.showModalDialog = function (data) {
        this.displayModal = true;
        this.submissionId = data.reportId;
        this.registerVendor.patchValue({
            priority: data.priority,
            wStatus: data.wStatus,
            note: data.note,
        });
    };
    DocumentsPlacedComponent.prototype.showModalDialog1 = function (value) {
        console.log(value);
        this.displayModal1 = true;
        this.valuenote = value;
    };
    DocumentsPlacedComponent.prototype.showModalDialogVendor = function (data) {
        var _this = this;
        this.showDialog = true;
        this.userRest.EditDocument(data.reportId).subscribe(function (response) { console.log(_this.data = response.submissions); _this.loading = false; }, function (error) { console.log(error); });
        //  this.displayModalVendor = true;
    };
    DocumentsPlacedComponent.prototype.calculateDiff = function (dateSent) {
        var currentDate = new Date();
        dateSent = new Date(dateSent);
        return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
    };
    DocumentsPlacedComponent.prototype.getIntervIew = function (index) {
        var _this = this;
        var count = 0;
        var formData = new FormData();
        formData.append("index", index);
        console.log(formData);
        this.userRest.getTotalInterviewShecdules(formData).subscribe(function (response) {
            console.log(response);
            _this.loading = false;
            count = response.interviews;
        }, function (error) { console.log(error); });
        return count;
    };
    DocumentsPlacedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'note': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'wStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.userRest.getConsultantsPlaced().subscribe(function (response) { console.log(_this.timeSheets = response.timesheet); _this.loading = false; }, function (error) { console.log(error); });
        this.frozenCols = [
            { field: 'consultatName', header: 'Name' },
        ];
        this.scrollableCols = [
            // { field: 'consultatName', header: 'Consultant Name', width: '20%',editable: true},
            // { field: 'user_details.name', header: 'Created By', width: '20%',editable: false},
            // { field: 'created_at', header: 'Created At' , width: '20%',editable: false},
            { field: 'consultantEmail', header: 'Email', width: '40%', editable: true },
            { field: 'consultatMobileNumber', header: 'Phone number', width: '20%', editable: true },
            { field: 'experience', header: 'Exp', width: '20%', editable: true },
            { field: 'rate', header: 'Rate', width: '20%', editable: false },
            { field: 'technology', header: 'Technology', width: '20%', editable: false },
            { field: 'visaType', header: 'visa Type', width: '20%', editable: false },
            { field: 'city', header: 'City', width: '20%', editable: false },
            { field: 'state', header: 'State', width: '20%', editable: false },
            { field: 'willingLocation', header: 'Relocate', width: '20%', editable: false },
            { field: 'documentsCollected', header: 'Documents Collected', width: '20%', editable: false },
            //   { field: 'resource', header: 'Resource', width: '20%' ,editable: false},
            { field: 'ssn', header: 'Last 4 SSN', width: '20%', editable: false },
        ];
    };
    DocumentsPlacedComponent.prototype.onActivityChange = function (event) {
        var value = event.target.value;
        if (value && value.trim().length) {
            var activity = parseInt(value);
            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    };
    DocumentsPlacedComponent.prototype.onDateSelect = function (value) {
        this.table.filter(this.formatDate(value), 'created_at', 'equals');
    };
    DocumentsPlacedComponent.prototype.formatDate = function (date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return date.getFullYear() + '-' + month + '-' + day;
    };
    DocumentsPlacedComponent.prototype.onRepresentativeChange = function (event) {
        if (event.value) {
            console.log(event.value);
            this.table.filter(event.value, 'technology', 'in');
        }
    };
    DocumentsPlacedComponent.prototype.registerUser = function (submissionId) {
        var _this = this;
        this.userRest.updateConsultantStatus(this.registerVendor, submissionId).subscribe(function (response) {
            _this.displayModal = false;
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submision Updated' });
            _this.timeSheets = response.timesheet;
        }, function (error) {
            //  this.serverErrors = error.error.errors
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
    ], DocumentsPlacedComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], DocumentsPlacedComponent.prototype, "modalContent", void 0);
    DocumentsPlacedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./documents-placed.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/documents-placed/documents-placed.component.html"),
            styles: [__webpack_require__(/*! ./documents-placed.component.scss */ "./src/app/admin/superadmin/documents-placed/documents-placed.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DocumentsPlacedComponent);
    return DocumentsPlacedComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/email/email-create/consultant-create.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/superadmin/email/email-create/consultant-create.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vZW1haWwvZW1haWwtY3JlYXRlL2NvbnN1bHRhbnQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/superadmin/email/email-create/email-create.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/superadmin/email/email-create/email-create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmailCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailCreateComponent", function() { return EmailCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../email-rest.service */ "./src/app/admin/superadmin/email/email-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






var EmailCreateComponent = /** @class */ (function () {
    function EmailCreateComponent(route, messageService, userRest, router) {
        this.route = route;
        this.messageService = messageService;
        this.userRest = userRest;
        this.router = router;
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '350px',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            uploadWithCredentials: false,
            sanitize: false,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [
                ['bold', 'italic'],
                ['fontSize']
            ]
        };
        this.serverErrors = [];
    }
    EmailCreateComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'message': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]),
            'subject': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]),
            'cc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    Object.defineProperty(EmailCreateComponent.prototype, "cc", {
        get: function () { return this.registerForm.get('cc'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailCreateComponent.prototype, "message", {
        get: function () { return this.registerForm.get('message'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailCreateComponent.prototype, "subject", {
        get: function () { return this.registerForm.get('subject'); },
        enumerable: true,
        configurable: true
    });
    EmailCreateComponent.prototype.onKeyDown = function (event) {
        if (event.key === ",") {
            event.preventDefault();
            var element = event.target;
            element.blur();
            element.focus();
        }
    };
    EmailCreateComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registerForm);
        this.userRest.emailsent(this.registerForm).subscribe(function (response) {
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Email Sent' });
            _this.router.navigate(['superadmin/email']);
            _this.registerForm.reset();
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    EmailCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! raw-loader!./consultant-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/email/email-create/consultant-create.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            styles: [__webpack_require__(/*! ./consultant-create.component.scss */ "./src/app/admin/superadmin/email/email-create/consultant-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _email_rest_service__WEBPACK_IMPORTED_MODULE_3__["EmailRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmailCreateComponent);
    return EmailCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/email/email-rest.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/superadmin/email/email-rest.service.ts ***!
  \**************************************************************/
/*! exports provided: EmailRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailRestService", function() { return EmailRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var EmailRestService = /** @class */ (function () {
    function EmailRestService(http) {
        this.http = http;
        this.users = [];
    }
    EmailRestService.prototype.emailsent = function (form) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/emailsent", form.value);
    };
    EmailRestService.prototype.getTimeSheet = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getAllTimesheets");
    };
    EmailRestService.prototype.getConsultants = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getAllConsultants/");
    };
    EmailRestService.prototype.storeUser = function (form) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/store-consultant", form.value);
    };
    EmailRestService.prototype.statusChangeConsultant = function (index) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/status-consultant", index);
    };
    EmailRestService.prototype.editUser = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/store-consultant/" + id);
    };
    EmailRestService.prototype.updateUser = function (form, id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/store-consultant/" + id, form.value);
    };
    EmailRestService.prototype.storeDocument = function (document) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/saveDocument", document);
    };
    EmailRestService.prototype.removeFile = function (document) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/removeDocument", document);
    };
    EmailRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmailRestService);
    return EmailRestService;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/hotlist/user-list/user-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/superadmin/hotlist/user-list/user-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.btn-length {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9ob3RsaXN0L3VzZXItbGlzdC9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhZG1pblxcc3VwZXJhZG1pblxcaG90bGlzdFxcdXNlci1saXN0XFx1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vaG90bGlzdC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURBQTtFQUVFLGlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zdXBlcmFkbWluL2hvdGxpc3QvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4uZGlzYWJsZS10ZHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYnRuLWxlbmd0aFxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNhYmxlLXRkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4tbGVuZ3RoIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/superadmin/hotlist/user-list/user-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/superadmin/hotlist/user-list/user-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: HotListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotListComponent", function() { return HotListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/hotlist/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__);









//declare var jsPDF: any;
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
var HotListComponent = /** @class */ (function () {
    function HotListComponent(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.loading = true;
    }
    HotListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getConsultants().subscribe(function (response) { console.log(_this.products = response.timesheet); _this.loading = false; }, function (error) { console.log(error); });
        this.colsax = [
            { field: 'consultatName', header: 'Name' },
            { field: 'technology', header: 'Technology' },
            //   { field: 'consultatMobileNumber', header: 'MobileNumber' },
            //  { field: 'consultantEmail', header: 'Email' },
            { field: 'experience', header: 'Experience' },
            { field: 'state', header: 'state' },
            { field: 'willingLocation', header: 'Relocate', width: '20%', editable: false },
            { field: 'visaType', header: 'visa Type', width: '20%', editable: false },
        ];
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
        // Use of String replace() Method
        this.exportColumns = this.colsax.map(function (col) { return ({ title: col.header, dataKey: (col.field) }); });
    };
    /*
      exportExcel() {
          import("xlsx").then(xlsx => {
              const worksheet = xlsx.utils.json_to_sheet(this.products);
              const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
              const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
              this.saveAsExcelFile(excelBuffer, "Consultants");
          });
      }
    
      saveAsExcelFile(buffer: any, fileName: string): void {
          import("file-saver").then(FileSaver => {
              let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
              let EXCEL_EXTENSION = '.xlsx';
              const data: Blob = new Blob([buffer], {
                  type: EXCEL_TYPE
              });
              FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          }); */
    HotListComponent.prototype.exportPdf = function () {
        //const doc = new jsPDF();
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]('p', 'pt');
        doc['autoTable'](this.exportColumns, this.products);
        // doc.autoTable(this.exportColumns, this.products);
        doc.save("webmobilezhotlist.pdf");
    };
    HotListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/hotlist/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/superadmin/hotlist/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HotListComponent);
    return HotListComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/hotlist/user-rest.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/superadmin/hotlist/user-rest.service.ts ***!
  \***************************************************************/
/*! exports provided: UserRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRestService", function() { return UserRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var UserRestService = /** @class */ (function () {
    function UserRestService(http) {
        this.http = http;
        this.users = [];
    }
    UserRestService.prototype.getConsultants = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getHotlistConsultants/");
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

/***/ "./src/app/admin/superadmin/interviews/user-list/user-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/superadmin/interviews/user-list/user-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9pbnRlcnZpZXdzL3VzZXItbGlzdC9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhZG1pblxcc3VwZXJhZG1pblxcaW50ZXJ2aWV3c1xcdXNlci1saXN0XFx1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vaW50ZXJ2aWV3cy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vaW50ZXJ2aWV3cy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNhYmxlLXRke1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi51aS1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUtdGQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnVpLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/superadmin/interviews/user-list/user-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/superadmin/interviews/user-list/user-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: InterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewComponent", function() { return InterviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/interviews/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);








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
var InterviewComponent = /** @class */ (function () {
    function InterviewComponent(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.interviewschedules = [];
        this.confirmDropDatabaseDialogVisible = false;
        this.loading = true;
        this.clonedProducts = {};
    }
    InterviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getConsultants().subscribe(function (response) { console.log(_this.interviewschedules = response.submissions); _this.loading = false; }, function (error) { console.log(error); });
        this.scrollableCols = [
            // { field: 'user_details.name', header: 'Created By', width: '20%',editable: false},
            // { field: 'consultant.consultatName', header: 'Consultant Name', width: '20%',editable: false},
            // { field: 'scheduleDate', header: 'Shedule Date', width: '20%',editable: false},
            { field: 'vendorStatus', header: 'Status', width: '40%', editable: true },
            { field: 'vendorCompanyName', header: 'Company Name', width: '20%', editable: false },
            { field: 'endClientName', header: 'End Client', width: '20%', editable: false },
            { field: 'consultant.technology', header: 'Technology', width: '20%', editable: false },
            { field: 'endClientLocation', header: 'Client Location', width: '20%', editable: false },
            { field: 'submissionRate', header: 'Submissio Rate', width: '20%', editable: true },
            { field: 'actualRate', header: 'Actual Rate', width: '20%', editable: true },
        ];
    };
    InterviewComponent.prototype.onDateSelect = function (value) {
        this.table.filter(this.formatDate(value), 'created_at', 'equals');
    };
    InterviewComponent.prototype.formatDate = function (date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return date.getFullYear() + '-' + month + '-' + day;
    };
    InterviewComponent.prototype.createPortal = function (event, index) {
        var _this = this;
        if (event.defaultPrevented)
            return;
        event.preventDefault();
        this.confirmation.confirm({
            key: 'confirm-drop-database',
            message: 'Are you sure to Create Employee Login',
            accept: function () { _this._createPortal(index); },
        });
    };
    InterviewComponent.prototype._createPortal = function (index) {
        var _this = this;
        var formData = new FormData();
        formData.append("index", index);
        console.log(formData);
        this.userRest.createEmployeePortal(formData).subscribe(function (response) {
            console.log(response);
            _this.loading = false;
            _this.interviewschedules = response.submissions;
        }, function (error) { console.log(error); });
    };
    InterviewComponent.prototype.getColor = function (status, adminStatus) {
        if (status == "Placed") {
            return "#d4edda";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
    ], InterviewComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], InterviewComponent.prototype, "modalContent", void 0);
    InterviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/interviews/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/superadmin/interviews/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InterviewComponent);
    return InterviewComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/interviews/user-rest.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/superadmin/interviews/user-rest.service.ts ***!
  \******************************************************************/
/*! exports provided: UserRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRestService", function() { return UserRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var UserRestService = /** @class */ (function () {
    function UserRestService(http) {
        this.http = http;
        this.users = [];
    }
    UserRestService.prototype.getConsultants = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/interviewsubmissions/");
    };
    UserRestService.prototype.createEmployeePortal = function (index) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/createEmployeePortal", index);
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

/***/ "./src/app/admin/superadmin/superAdmin.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/superadmin/superAdmin.module.ts ***!
  \*******************************************************/
/*! exports provided: SuperAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminModule", function() { return SuperAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/superadmin/user-routing.module.ts");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/superadmin/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/superadmin/user-list/user-list.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/superadmin/user-edit/user-edit.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/superadmin/user-create/user-create.component.ts");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/contextmenu.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm5/ngx-dropzone.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inplace */ "./node_modules/primeng/inplace.js");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_inplace__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/dynamicdialog.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./documents-list/documents-list.component */ "./src/app/admin/superadmin/documents-list/documents-list.component.ts");
/* harmony import */ var _documents_inactive_documents_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./documents-inactive/documents-list.component */ "./src/app/admin/superadmin/documents-inactive/documents-list.component.ts");
/* harmony import */ var _documents_placed_documents_placed_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./documents-placed/documents-placed.component */ "./src/app/admin/superadmin/documents-placed/documents-placed.component.ts");
/* harmony import */ var _consultants_consultant_list_consultant_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./consultants/consultant-list/consultant-list.component */ "./src/app/admin/superadmin/consultants/consultant-list/consultant-list.component.ts");
/* harmony import */ var _consultants_consultant_create_consultant_create_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./consultants/consultant-create/consultant-create.component */ "./src/app/admin/superadmin/consultants/consultant-create/consultant-create.component.ts");
/* harmony import */ var _consultants_consultant_edit_consultant_edit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./consultants/consultant-edit/consultant-edit.component */ "./src/app/admin/superadmin/consultants/consultant-edit/consultant-edit.component.ts");
/* harmony import */ var _benchsales_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./benchsales/user-list/user-list.component */ "./src/app/admin/superadmin/benchsales/user-list/user-list.component.ts");
/* harmony import */ var _benchsales_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./benchsales/user-create/user-create.component */ "./src/app/admin/superadmin/benchsales/user-create/user-create.component.ts");
/* harmony import */ var _interviews_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./interviews/user-list/user-list.component */ "./src/app/admin/superadmin/interviews/user-list/user-list.component.ts");
/* harmony import */ var _hotlist_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./hotlist/user-list/user-list.component */ "./src/app/admin/superadmin/hotlist/user-list/user-list.component.ts");
/* harmony import */ var _field_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../field.pipe */ "./src/app/field.pipe.ts");
/* harmony import */ var _email_email_create_email_create_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./email/email-create/email-create.component */ "./src/app/admin/superadmin/email/email-create/email-create.component.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/chips */ "./node_modules/primeng/chips.js");
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(primeng_chips__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _replaceadmin_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../replaceadmin-pipe */ "./src/app/replaceadmin-pipe.ts");










































var SuperAdminModule = /** @class */ (function () {
    function SuperAdminModule() {
    }
    SuperAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__["UserIndexComponent"], _field_pipe__WEBPACK_IMPORTED_MODULE_36__["FieldPipe"], _replaceadmin_pipe__WEBPACK_IMPORTED_MODULE_40__["ReplaceAdminPipe"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_7__["UserCreateComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], _documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_26__["DocumentsListComponent"], _consultants_consultant_list_consultant_list_component__WEBPACK_IMPORTED_MODULE_29__["ConsultantListComponent"], _consultants_consultant_create_consultant_create_component__WEBPACK_IMPORTED_MODULE_30__["ConsultantCreateComponent"], _consultants_consultant_edit_consultant_edit_component__WEBPACK_IMPORTED_MODULE_31__["ConsultantEditComponent"],
                _benchsales_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_32__["BenchListComponent"], _benchsales_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_33__["BenchCreateComponent"], _email_email_create_email_create_component__WEBPACK_IMPORTED_MODULE_37__["EmailCreateComponent"], _hotlist_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_35__["HotListComponent"], _interviews_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_34__["InterviewComponent"], _documents_inactive_documents_list_component__WEBPACK_IMPORTED_MODULE_27__["DocumentsInactiveComponent"], _documents_placed_documents_placed_component__WEBPACK_IMPORTED_MODULE_28__["DocumentsPlacedComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_38__["AngularEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__["MultiSelectModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_25__["DynamicDialogModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_13__["SliderModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__["MultiSelectModule"],
                primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__["ContextMenuModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_16__["ButtonModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"], primeng_chips__WEBPACK_IMPORTED_MODULE_39__["ChipsModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19__["TabMenuModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_21__["NgxDropzoneModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_23__["InplaceModule"]
            ],
            providers: [
                _user_rest_service__WEBPACK_IMPORTED_MODULE_8__["UserRestService"]
            ]
        })
    ], SuperAdminModule);
    return SuperAdminModule;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/user-create/user-create.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/superadmin/user-create/user-create.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/superadmin/user-create/user-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/superadmin/user-create/user-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(route, userRest, router) {
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.serverErrors = [];
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'role': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])
        });
    };
    Object.defineProperty(UserCreateComponent.prototype, "name", {
        get: function () { return this.registerForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "password", {
        get: function () { return this.registerForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "confirm_password", {
        get: function () { return this.registerForm.get('confirm_password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "role", {
        get: function () { return this.registerForm.get('role'); },
        enumerable: true,
        configurable: true
    });
    UserCreateComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registerForm);
        this.userRest.storeUser(this.registerForm).subscribe(function (response) {
            console.log(response),
                _this.router.navigate(['users/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/superadmin/user-create/user-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/user-edit/user-edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/superadmin/user-edit/user-edit.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/superadmin/user-edit/user-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/superadmin/user-edit/user-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");





var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(route, userRest, router) {
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.serverErrors = [];
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.userRest.editUser(id).subscribe(function (response) {
            _this.updateUser.patchValue({
                'name': response.user.name,
                'email': response.user.email,
                'role': response.user.role
            });
        }, function (error) { return console.log(error); });
        console.log(this.data);
        this.updateUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            'role': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
    };
    Object.defineProperty(UserEditComponent.prototype, "name", {
        get: function () { return this.updateUser.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "email", {
        get: function () { return this.updateUser.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "password", {
        get: function () { return this.updateUser.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "role", {
        get: function () { return this.updateUser.get('role'); },
        enumerable: true,
        configurable: true
    });
    UserEditComponent.prototype.updateUserDetails = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.userRest.updateUser(this.updateUser, id).subscribe(function (response) {
            console.log(response),
                _this.router.navigate(['users/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        }, function () { return console.log('completed'); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserEditComponent.prototype, "data", void 0);
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/admin/superadmin/user-edit/user-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_4__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/user-index/user-index.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/superadmin/user-index/user-index.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vdXNlci1pbmRleC91c2VyLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/superadmin/user-index/user-index.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/superadmin/user-index/user-index.component.ts ***!
  \*********************************************************************/
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
    }
    UserIndexComponent.prototype.ngOnInit = function () {
    };
    UserIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-index',
            template: __webpack_require__(/*! raw-loader!./user-index.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/user-index/user-index.component.html"),
            styles: [__webpack_require__(/*! ./user-index.component.scss */ "./src/app/admin/superadmin/user-index/user-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserIndexComponent);
    return UserIndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/user-list/user-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/superadmin/user-list/user-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi91c2VyLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXHNlcC1iYXJcXGFuZy9zcmNcXGFwcFxcYWRtaW5cXHN1cGVyYWRtaW5cXHVzZXItbGlzdFxcdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9zdXBlcmFkbWluL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zdXBlcmFkbWluL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/superadmin/user-list/user-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/superadmin/user-list/user-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);







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
    function UserListComponent(fb, messageService, route, userRest, router) {
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.timeSheets = [];
        this.loading = true;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getUsers().subscribe(function (response) { console.log(_this.timeSheets = response.user); _this.loading = false; }, function (error) { console.log(error); });
    };
    UserListComponent.prototype.deleteUser = function (id) {
        if (confirm("Are you sure to delete ")) {
            this.userRest.deleteUser(id).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        }
    };
    UserListComponent.prototype.editUser = function (id) {
        this.router.navigate(['superadmin/useredit', id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
    ], UserListComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], UserListComponent.prototype, "modalContent", void 0);
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/superadmin/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/admin/superadmin/user-rest.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/superadmin/user-rest.service.ts ***!
  \*******************************************************/
/*! exports provided: UserRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRestService", function() { return UserRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var UserRestService = /** @class */ (function () {
    function UserRestService(http) {
        this.http = http;
        this.users = [];
    }
    /* get User Services */
    UserRestService.prototype.getUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/user-list");
    };
    UserRestService.prototype.editUser = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/user-list/" + id);
    };
    UserRestService.prototype.updateUser = function (form, id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/user-list/" + id, form.value);
    };
    UserRestService.prototype.storeUser = function (form) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/user-list", form.value);
    };
    UserRestService.prototype.deleteUser = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/user-list/" + id);
    };
    /* Documents */
    UserRestService.prototype.getTotalInterviewShecdules = function (index) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getTotalInterviewShecdules", index);
    };
    UserRestService.prototype.EditDocument = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/submissions/" + id);
    };
    UserRestService.prototype.getConsultants = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getAllConsultantsAdmin/");
    };
    UserRestService.prototype.getConsultantsInactive = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getAllConsultantsAdminInactive/");
    };
    UserRestService.prototype.getConsultantsPlaced = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getAllConsultantsAdminPlaced/");
    };
    UserRestService.prototype.updateConsultantStatus = function (form, id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/admin-store-consultant/" + id, form.value);
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

/***/ "./src/app/admin/superadmin/user-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/superadmin/user-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/superadmin/user-index/user-index.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/superadmin/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/superadmin/user-edit/user-edit.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/superadmin/user-list/user-list.component.ts");
/* harmony import */ var _consultants_consultant_list_consultant_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consultants/consultant-list/consultant-list.component */ "./src/app/admin/superadmin/consultants/consultant-list/consultant-list.component.ts");
/* harmony import */ var _consultants_consultant_create_consultant_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./consultants/consultant-create/consultant-create.component */ "./src/app/admin/superadmin/consultants/consultant-create/consultant-create.component.ts");
/* harmony import */ var _consultants_consultant_edit_consultant_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./consultants/consultant-edit/consultant-edit.component */ "./src/app/admin/superadmin/consultants/consultant-edit/consultant-edit.component.ts");
/* harmony import */ var _benchsales_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./benchsales/user-list/user-list.component */ "./src/app/admin/superadmin/benchsales/user-list/user-list.component.ts");
/* harmony import */ var _benchsales_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./benchsales/user-create/user-create.component */ "./src/app/admin/superadmin/benchsales/user-create/user-create.component.ts");
/* harmony import */ var _documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./documents-list/documents-list.component */ "./src/app/admin/superadmin/documents-list/documents-list.component.ts");
/* harmony import */ var _interviews_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interviews/user-list/user-list.component */ "./src/app/admin/superadmin/interviews/user-list/user-list.component.ts");
/* harmony import */ var _hotlist_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hotlist/user-list/user-list.component */ "./src/app/admin/superadmin/hotlist/user-list/user-list.component.ts");
/* harmony import */ var _documents_inactive_documents_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./documents-inactive/documents-list.component */ "./src/app/admin/superadmin/documents-inactive/documents-list.component.ts");
/* harmony import */ var _documents_placed_documents_placed_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./documents-placed/documents-placed.component */ "./src/app/admin/superadmin/documents-placed/documents-placed.component.ts");
/* harmony import */ var _email_email_create_email_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./email/email-create/email-create.component */ "./src/app/admin/superadmin/email/email-create/email-create.component.ts");


















var routes = [
    // { path: 'list', component: UserListComponent, outlet: 'users' },
    {
        path: '',
        component: _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__["UserIndexComponent"],
        children: [
            { path: 'usercreate', component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_4__["UserCreateComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'useredit/:id', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_5__["UserEditComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'userlist', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'documents', component: _documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_12__["DocumentsListComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'consultantlist', component: _consultants_consultant_list_consultant_list_component__WEBPACK_IMPORTED_MODULE_7__["ConsultantListComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'consultantcreate', component: _consultants_consultant_create_consultant_create_component__WEBPACK_IMPORTED_MODULE_8__["ConsultantCreateComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'consultantedit/:id', component: _consultants_consultant_edit_consultant_edit_component__WEBPACK_IMPORTED_MODULE_9__["ConsultantEditComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'sumissioncreate', component: _benchsales_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_11__["BenchCreateComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'sumissionlist', component: _benchsales_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__["BenchListComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'interviews', component: _interviews_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__["InterviewComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'hotlist', component: _hotlist_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__["HotListComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'documentsinactive', component: _documents_inactive_documents_list_component__WEBPACK_IMPORTED_MODULE_15__["DocumentsInactiveComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'documentsplaced', component: _documents_placed_documents_placed_component__WEBPACK_IMPORTED_MODULE_16__["DocumentsPlacedComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'email', component: _email_email_create_email_create_component__WEBPACK_IMPORTED_MODULE_17__["EmailCreateComponent"], data: {
                    expectedRole: 'Admin'
                } },
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

/***/ "./src/app/field.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/field.pipe.ts ***!
  \*******************************/
/*! exports provided: FieldPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldPipe", function() { return FieldPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FieldPipe = /** @class */ (function () {
    /**
     *
     */
    function FieldPipe() {
    }
    FieldPipe.prototype.transform = function (value) {
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
    FieldPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "field"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FieldPipe);
    return FieldPipe;
}());



/***/ }),

/***/ "./src/app/replaceadmin-pipe.ts":
/*!**************************************!*\
  !*** ./src/app/replaceadmin-pipe.ts ***!
  \**************************************/
/*! exports provided: ReplaceAdminPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceAdminPipe", function() { return ReplaceAdminPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReplaceAdminPipe = /** @class */ (function () {
    function ReplaceAdminPipe() {
    }
    ReplaceAdminPipe.prototype.transform = function (value, strToReplace, replacementStr) {
        if (!value || !strToReplace || !replacementStr) {
            return value;
        }
        return value.replace(new RegExp(strToReplace, 'g'), replacementStr);
    };
    ReplaceAdminPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'replace' })
    ], ReplaceAdminPipe);
    return ReplaceAdminPipe;
}());



/***/ })

}]);
//# sourceMappingURL=admin-superadmin-superAdmin-module-es5.js.map