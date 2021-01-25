(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/primeng/api.js":
/*!*************************************!*\
  !*** ./node_modules/primeng/api.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/common/api */ "./node_modules/primeng/components/common/api.js"));

/***/ }),

/***/ "./node_modules/primeng/components/common/api.js":
/*!*******************************************************!*\
  !*** ./node_modules/primeng/components/common/api.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
exports.DomHandler = domhandler_1.DomHandler;
var treedragdropservice_1 = __webpack_require__(/*! ./treedragdropservice */ "./node_modules/primeng/components/common/treedragdropservice.js");
exports.TreeDragDropService = treedragdropservice_1.TreeDragDropService;
var confirmationservice_1 = __webpack_require__(/*! ./confirmationservice */ "./node_modules/primeng/components/common/confirmationservice.js");
exports.ConfirmationService = confirmationservice_1.ConfirmationService;
var messageservice_1 = __webpack_require__(/*! ./messageservice */ "./node_modules/primeng/components/common/messageservice.js");
exports.MessageService = messageservice_1.MessageService;
var dialogservice_1 = __webpack_require__(/*! ../dynamicdialog/dialogservice */ "./node_modules/primeng/components/dynamicdialog/dialogservice.js");
exports.DialogService = dialogservice_1.DialogService;
var dynamicdialog_config_1 = __webpack_require__(/*! ../dynamicdialog/dynamicdialog-config */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-config.js");
exports.DynamicDialogConfig = dynamicdialog_config_1.DynamicDialogConfig;
var dynamicdialog_ref_1 = __webpack_require__(/*! ../dynamicdialog/dynamicdialog-ref */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-ref.js");
exports.DynamicDialogRef = dynamicdialog_ref_1.DynamicDialogRef;
var filterutils_1 = __webpack_require__(/*! ../utils/filterutils */ "./node_modules/primeng/components/utils/filterutils.js");
exports.FilterUtils = filterutils_1.FilterUtils;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/primeng/components/common/confirmationservice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/primeng/components/common/confirmationservice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var ConfirmationService = /** @class */ (function () {
    function ConfirmationService() {
        this.requireConfirmationSource = new rxjs_1.Subject();
        this.acceptConfirmationSource = new rxjs_1.Subject();
        this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
        this.accept = this.acceptConfirmationSource.asObservable();
    }
    ConfirmationService.prototype.confirm = function (confirmation) {
        this.requireConfirmationSource.next(confirmation);
        return this;
    };
    ConfirmationService.prototype.onAccept = function () {
        this.acceptConfirmationSource.next();
    };
    ConfirmationService = __decorate([
        core_1.Injectable()
    ], ConfirmationService);
    return ConfirmationService;
}());
exports.ConfirmationService = ConfirmationService;
//# sourceMappingURL=confirmationservice.js.map

/***/ }),

/***/ "./node_modules/primeng/components/common/treedragdropservice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/primeng/components/common/treedragdropservice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var TreeDragDropService = /** @class */ (function () {
    function TreeDragDropService() {
        this.dragStartSource = new rxjs_1.Subject();
        this.dragStopSource = new rxjs_1.Subject();
        this.dragStart$ = this.dragStartSource.asObservable();
        this.dragStop$ = this.dragStopSource.asObservable();
    }
    TreeDragDropService.prototype.startDrag = function (event) {
        this.dragStartSource.next(event);
    };
    TreeDragDropService.prototype.stopDrag = function (event) {
        this.dragStopSource.next(event);
    };
    TreeDragDropService = __decorate([
        core_1.Injectable()
    ], TreeDragDropService);
    return TreeDragDropService;
}());
exports.TreeDragDropService = TreeDragDropService;
//# sourceMappingURL=treedragdropservice.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dialogservice.js":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dialogservice.js ***!
  \************************************************************************/
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
var dynamicdialog_1 = __webpack_require__(/*! ./dynamicdialog */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog.js");
var dynamicdialog_injector_1 = __webpack_require__(/*! ./dynamicdialog-injector */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-injector.js");
var dynamicdialog_config_1 = __webpack_require__(/*! ./dynamicdialog-config */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-config.js");
var dynamicdialog_ref_1 = __webpack_require__(/*! ./dynamicdialog-ref */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-ref.js");
var DialogService = /** @class */ (function () {
    function DialogService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DialogService.prototype.open = function (componentType, config) {
        var dialogRef = this.appendDialogComponentToBody(config);
        this.dialogComponentRef.instance.childComponentType = componentType;
        return dialogRef;
    };
    DialogService.prototype.appendDialogComponentToBody = function (config) {
        var _this = this;
        var map = new WeakMap();
        map.set(dynamicdialog_config_1.DynamicDialogConfig, config);
        var dialogRef = new dynamicdialog_ref_1.DynamicDialogRef();
        map.set(dynamicdialog_ref_1.DynamicDialogRef, dialogRef);
        var sub = dialogRef.onClose.subscribe(function () {
            _this.removeDialogComponentFromBody();
            sub.unsubscribe();
        });
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(dynamicdialog_1.DynamicDialogComponent);
        var componentRef = componentFactory.create(new dynamicdialog_injector_1.DynamicDialogInjector(this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        this.dialogComponentRef = componentRef;
        return dialogRef;
    };
    DialogService.prototype.removeDialogComponentFromBody = function () {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    };
    DialogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, core_1.ApplicationRef, core_1.Injector])
    ], DialogService);
    return DialogService;
}());
exports.DialogService = DialogService;
//# sourceMappingURL=dialogservice.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-config.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dynamicdialog-config.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicDialogConfig = /** @class */ (function () {
    function DynamicDialogConfig() {
    }
    return DynamicDialogConfig;
}());
exports.DynamicDialogConfig = DynamicDialogConfig;
//# sourceMappingURL=dynamicdialog-config.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-injector.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dynamicdialog-injector.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicDialogInjector = /** @class */ (function () {
    function DynamicDialogInjector(_parentInjector, _additionalTokens) {
        this._parentInjector = _parentInjector;
        this._additionalTokens = _additionalTokens;
    }
    DynamicDialogInjector.prototype.get = function (token, notFoundValue, flags) {
        var value = this._additionalTokens.get(token);
        if (value)
            return value;
        return this._parentInjector.get(token, notFoundValue);
    };
    return DynamicDialogInjector;
}());
exports.DynamicDialogInjector = DynamicDialogInjector;
//# sourceMappingURL=dynamicdialog-injector.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-ref.js":
/*!****************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dynamicdialog-ref.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var DynamicDialogRef = /** @class */ (function () {
    function DynamicDialogRef() {
        this._onClose = new rxjs_1.Subject();
        this.onClose = this._onClose.asObservable();
    }
    DynamicDialogRef.prototype.close = function (result) {
        this._onClose.next(result);
    };
    return DynamicDialogRef;
}());
exports.DynamicDialogRef = DynamicDialogRef;
//# sourceMappingURL=dynamicdialog-ref.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dynamicdialog.js":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dynamicdialog.js ***!
  \************************************************************************/
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
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var dynamicdialogcontent_1 = __webpack_require__(/*! ./dynamicdialogcontent */ "./node_modules/primeng/components/dynamicdialog/dynamicdialogcontent.js");
var dynamicdialog_config_1 = __webpack_require__(/*! ./dynamicdialog-config */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-config.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var dynamicdialog_ref_1 = __webpack_require__(/*! ./dynamicdialog-ref */ "./node_modules/primeng/components/dynamicdialog/dynamicdialog-ref.js");
var DynamicDialogComponent = /** @class */ (function () {
    function DynamicDialogComponent(componentFactoryResolver, cd, renderer, config, dialogRef, zone) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.renderer = renderer;
        this.config = config;
        this.dialogRef = dialogRef;
        this.zone = zone;
        this.visible = true;
    }
    DynamicDialogComponent.prototype.ngAfterViewInit = function () {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    };
    DynamicDialogComponent.prototype.onOverlayClicked = function (evt) {
        this.dialogRef.close();
    };
    DynamicDialogComponent.prototype.onDialogClicked = function (evt) {
        evt.stopPropagation();
    };
    DynamicDialogComponent.prototype.loadChildComponent = function (componentType) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        var viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    };
    DynamicDialogComponent.prototype.moveOnTop = function () {
        if (this.config.autoZIndex !== false) {
            var zIndex = this.config.baseZIndex || 0 + (++domhandler_1.DomHandler.zindex);
            this.container.style.zIndex = String(zIndex);
            this.maskViewChild.nativeElement.style.zIndex = String(zIndex - 1);
        }
    };
    DynamicDialogComponent.prototype.onAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.moveOnTop();
                this.bindGlobalListeners();
                domhandler_1.DomHandler.addClass(document.body, 'ui-overflow-hidden');
                break;
            case 'void':
                this.onContainerDestroy();
                break;
        }
    };
    DynamicDialogComponent.prototype.onAnimationEnd = function (event) {
        if (event.toState === 'void') {
            this.dialogRef.close();
        }
    };
    DynamicDialogComponent.prototype.onContainerDestroy = function () {
        domhandler_1.DomHandler.removeClass(document.body, 'ui-overflow-hidden');
        this.unbindGlobalListeners();
        this.container = null;
    };
    DynamicDialogComponent.prototype.close = function () {
        this.visible = false;
    };
    DynamicDialogComponent.prototype.onMaskClick = function () {
        if (this.config.dismissableMask) {
            this.close();
        }
    };
    DynamicDialogComponent.prototype.bindGlobalListeners = function () {
        if (this.config.closeOnEscape !== false && this.config.closable !== false) {
            this.bindDocumentEscapeListener();
        }
    };
    DynamicDialogComponent.prototype.unbindGlobalListeners = function () {
        this.unbindDocumentEscapeListener();
    };
    DynamicDialogComponent.prototype.bindDocumentEscapeListener = function () {
        var _this = this;
        this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
            if (event.which == 27) {
                if (parseInt(_this.container.style.zIndex) == domhandler_1.DomHandler.zindex) {
                    _this.close();
                }
            }
        });
    };
    DynamicDialogComponent.prototype.unbindDocumentEscapeListener = function () {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    };
    DynamicDialogComponent.prototype.ngOnDestroy = function () {
        this.onContainerDestroy();
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    __decorate([
        core_1.ViewChild(dynamicdialogcontent_1.DynamicDialogContent, { static: false }),
        __metadata("design:type", dynamicdialogcontent_1.DynamicDialogContent)
    ], DynamicDialogComponent.prototype, "insertionPoint", void 0);
    __decorate([
        core_1.ViewChild('mask', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], DynamicDialogComponent.prototype, "maskViewChild", void 0);
    DynamicDialogComponent = __decorate([
        core_1.Component({
            selector: 'p-dynamicDialog',
            template: "\n\t\t<div #mask class=\"ui-widget-overlay ui-dialog-mask ui-dialog-mask-scrollblocker\" *ngIf=\"visible\" (click)=\"onMaskClick()\"></div>\n\t\t<div [ngClass]=\"{'ui-dialog ui-dynamicdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true, 'ui-dialog-rtl': config.rtl}\" [ngStyle]=\"config.style\" [class]=\"config.styleClass\"\n\t\t\t[@animation]=\"{value: 'visible', params: {transitionParams: config.transitionOptions || '150ms cubic-bezier(0, 0, 0.2, 1)'}}\" \n\t\t\t(@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" *ngIf=\"visible\"\n\t\t\t[style.width]=\"config.width\" [style.height]=\"config.height\">\n            <div class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\" *ngIf=\"config.showHeader === false ? false: true\">\n                <span class=\"ui-dialog-title\">{{config.header}}</span>\n                <a [ngClass]=\"'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all'\" tabindex=\"0\" role=\"button\" (click)=\"close()\" (keydown.enter)=\"close()\" *ngIf=\"config.closable === false ? false : true\">\n                    <span class=\"pi pi-times\"></span>\n                </a>\n            </div>\n            <div class=\"ui-dialog-content ui-widget-content\" [ngStyle]=\"config.contentStyle\">\n\t\t\t\t<ng-template pDynamicDialogContent></ng-template>\n\t\t\t</div>\n\t\t\t<div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"config.footer\">\n\t\t\t\t{{config.footer}}\n            </div>\n\t\t</div>\n\t",
            animations: [
                animations_1.trigger('animation', [
                    animations_1.state('void', animations_1.style({
                        transform: 'translateX(-50%) translateY(-50%) scale(0.7)',
                        opacity: 0
                    })),
                    animations_1.state('visible', animations_1.style({
                        transform: 'translateX(-50%) translateY(-50%) scale(1)',
                        opacity: 1
                    })),
                    animations_1.transition('* => *', animations_1.animate('{{transitionParams}}'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, core_1.ChangeDetectorRef, core_1.Renderer2,
            dynamicdialog_config_1.DynamicDialogConfig, dynamicdialog_ref_1.DynamicDialogRef, core_1.NgZone])
    ], DynamicDialogComponent);
    return DynamicDialogComponent;
}());
exports.DynamicDialogComponent = DynamicDialogComponent;
var DynamicDialogModule = /** @class */ (function () {
    function DynamicDialogModule() {
    }
    DynamicDialogModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [DynamicDialogComponent, dynamicdialogcontent_1.DynamicDialogContent],
            entryComponents: [DynamicDialogComponent]
        })
    ], DynamicDialogModule);
    return DynamicDialogModule;
}());
exports.DynamicDialogModule = DynamicDialogModule;
//# sourceMappingURL=dynamicdialog.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dynamicdialog/dynamicdialogcontent.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/primeng/components/dynamicdialog/dynamicdialogcontent.js ***!
  \*******************************************************************************/
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
var DynamicDialogContent = /** @class */ (function () {
    function DynamicDialogContent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    DynamicDialogContent = __decorate([
        core_1.Directive({
            selector: '[pDynamicDialogContent]'
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef])
    ], DynamicDialogContent);
    return DynamicDialogContent;
}());
exports.DynamicDialogContent = DynamicDialogContent;
//# sourceMappingURL=dynamicdialogcontent.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/calculatorDash/calculatordash.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/calculatorDash/calculatordash.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [ngModel]=\"formattedTokens\" class=\"form-control-sm form-control text-right\" readonly>\n\n<input type=\"text\" [ngModel]=\"input\" class=\"form-control form-control-lg text-right\" readonly>\n\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"reset()\">AC</button>\n\t</div>\n\t<div class=\"col-3\">\n    <button class=\"btn btn-primary btn-block\" (click)=\"execOperator('(')\">(</button>\n  </div>\n\t<div class=\"col-3\">\n    <button class=\"btn btn-primary btn-block\" (click)=\"execOperator(')')\">)</button>\n  </div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('/')\">/</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('1')\">1</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('2')\">2</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('3')\">3</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('*')\">x</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('4')\">4</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('5')\">5</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('6')\">6</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('+')\">+</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('7')\">7</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('8')\">8</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('9')\">9</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('-')\">-</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-6\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('0')\">0</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('.')\">,</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button autofocus class=\"btn btn-primary btn-block\" (click)=\"evaluate()\">=</button>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/calculatorpage/calculatorpage.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/calculatorpage/calculatorpage.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"></h4>\r\n\r\n<div class=\"container\" >\r\n\r\n  <div class=\"row row-cols-1 row-cols-sm-4 row-cols-md-4 g-3 p-3\">\r\n    <div class=\"col\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n\r\n                <form id=\"userForm\" method=\"post\" name=\"percent_off\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\">$</span>\r\n                        </div>\r\n                        <input type=\"number\" name=\"list\" value=\"52\" class=\"form-control\"\r\n                          aria-label=\"Amount (to the nearest dollar)\" [(ngModel)]=\"num1\" >\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"control-label required\" for=\"percent_off_p\">Percent Off</label>\r\n                      <div class=\"input-group mb-3\">\r\n\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\" id=\"basic-addon1\">%</span>\r\n                        </div>\r\n                        <select class=\"form-control\" name=\"disc\" [(ngModel)]=\"num2\">\r\n                          <option value=\"10\">10</option>\r\n                          <option value=\"15\">15</option>\r\n                          <option value=\"20\">20</option>\r\n                          <option value=\"25\">25</option>\r\n                          <option value=\"30\">30</option>\r\n                        </select>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <br>\r\n                        <button type=\"submit\" id=\"percent_off_save\" name=\"percent_off[save]\"\r\n                          class=\"button btn-lg btn btn-primary btn-block btn\">Calculate Percent Off</button>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <div id=\"result\" style=\"height: auto !important;\">\r\n                        <label class=\"control-label required\" for=\"percent_off_p\">Result :</label> {{ ConvertToInt(num1)  -( ConvertToInt(num1)*ConvertToInt(num2)/100)  }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n  <ng-calculator></ng-calculator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"></h4>\r\n\r\n<div class=\"container\" *ngIf=\"menuexpectedrole=='Admin'\">\r\n\r\n  <div class=\"row row-cols-1 row-cols-sm-4 row-cols-md-4 g-3 p-3\">\r\n    <div class=\"col\">\r\n     <a [routerLink]=\"['/superadmin/userlist']\">\r\n      <figure class=\"figure\">\r\n        <img src=\"../../assets/img/conversation.png\" class=\"figure-img img-fluid rounded\" >\r\n        <figcaption class=\"figure-caption text-center\">Users</figcaption>\r\n      </figure>\r\n    </a>\r\n    </div>\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/superadmin/interviews']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/schedule.png\" class=\"figure-img img-fluid rounded\">\r\n          <figcaption class=\"figure-caption text-center\">Interview Schedule</figcaption>\r\n        </figure>\r\n      </a>\r\n\r\n    </div>\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/superadmin/documents']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/download-btn.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Download Center</figcaption>\r\n        </figure>\r\n      </a>\r\n\r\n    </div>\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/superadmin/sumissionlist']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/work-from-home.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Bench Sales <br>Submissions</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row row-cols-1 row-cols-sm-4 row-cols-md-4 g-3 p-3\">\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/superadmin/consultantlist']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/consultation.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Head Hunters</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/calculator']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/calculator.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Calculater</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/superadmin/hotlist']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/search.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Hot List</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/jobs/list']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/businessman.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Jobs</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"menuexpectedrole=='BenchSales'\">\r\n\r\n  <div class=\"row row-cols-1 row-cols-sm-4 row-cols-md-4 g-3 p-3\">\r\n\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/benchsales/interviews']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/schedule.png\" class=\"figure-img img-fluid rounded\">\r\n          <figcaption class=\"figure-caption text-center\">Interview Schedule</figcaption>\r\n        </figure>\r\n      </a>\r\n\r\n    </div>\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/benchsales/documentlist']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/download-btn.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Download Center</figcaption>\r\n        </figure>\r\n      </a>\r\n\r\n    </div>\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/benchsales/list']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/work-from-home.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Submissions</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/benchsales/hotlist']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/search.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Hot List</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/calculator']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/calculator.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Calculater</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row row-cols-1 row-cols-sm-4 row-cols-md-4 g-3 p-3\">\r\n\r\n  </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"menuexpectedrole=='HeadHuntersAdmin'\">\r\n\r\n  <div class=\"row row-cols-1 row-cols-sm-4 row-cols-md-4 g-3 p-3\">\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/headadminconsultants/list']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/consultation.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Head Hunters</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/headadminconsultants/hotlist']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/search.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Hot List</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/calculator']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/calculator.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Calculater</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n<div class=\"container\" *ngIf=\"menuexpectedrole=='HeadHunters'\">\r\n\r\n  <div class=\"row row-cols-1 row-cols-sm-4 row-cols-md-4 g-3 p-3\">\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/huntersconsultants/list']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/consultation.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Head Hunters</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/huntersconsultants/hotlist']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/search.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Hot List</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/calculator']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/calculator.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Calculater</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"menuexpectedrole=='Accountmanager'\">\r\n\r\n  <div class=\"row row-cols-1 row-cols-sm-4 row-cols-md-4 g-3 p-3\">\r\n\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/jobs/list']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/businessman.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Jobs</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <a [routerLink]=\"['/calculator']\">\r\n        <figure class=\"figure\">\r\n          <img src=\"../../assets/img/calculator.png\" class=\"figure-img img-fluid rounded\" >\r\n          <figcaption class=\"figure-caption text-center\">Calculater</figcaption>\r\n        </figure>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row row-cols-1 row-cols-sm-4 row-cols-md-4 g-3 p-3\">\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user/user.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user/user.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\" >\r\n  <div class=\"col-md-12\">\r\n          <h4 class=\"remove-margin\">Edit User Detail </h4>\r\n          <p-toast position=\"bottom-right\"></p-toast>\r\n          <div class=\"card\" *ngIf=\"user | async; else loading\">\r\n            <div class=\"card-header\">\r\n              <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\r\n            </div>\r\n            <div class=\"card-body\" >\r\n              <form [formGroup]=\"updateUser\" (ngSubmit)=\"updateUserDetails()\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"hidden\" name=\"_method\" value=\"PUT\">\r\n                        <label> Name</label>\r\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\" Name\" required>\r\n                        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\r\n                                class=\"form-text text-muted\">\r\n                              <div *ngIf=\"name.errors?.required\">\r\n                                Name is required.\r\n                              </div>\r\n                              <div *ngIf=\"name.errors?.minlength\">\r\n                                Name must be at least 5 characters long.\r\n                              </div>\r\n                        </div>\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.name }}</small>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                  <div class=\"row\">\r\n                    <!-- <div class=\"col-md-6 pr-1\">\r\n                      <div class=\"form-group\">\r\n                        <label>User Name</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n                      </div>\r\n                    </div> -->\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\">Email address</label>\r\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" required>\r\n\r\n                        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\r\n                                class=\"form-text text-muted\">\r\n                              <div *ngIf=\"email.errors?.required\">\r\n                                Email is required.\r\n                              </div>\r\n                              <div *ngIf=\"email.errors?.email\">\r\n                                Invalid email address.\r\n                              </div>\r\n                        </div>\r\n\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.email }}</small>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                        <label>Change Password</label>\r\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" >\r\n\r\n                        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\r\n                                class=\"form-text text-muted\">\r\n\r\n                              <div *ngIf=\"password.errors?.minlength\">\r\n                                Password must be at least 5 characters long.\r\n                              </div>\r\n                        </div>\r\n\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.password }}</small>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                  <input type=\"hidden\" formControlName=\"id\" class=\"form-control\" placeholder=\"id\" >\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"update ml-auto mr-auto\">\r\n                      <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!updateUser.valid\">Update</button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n            </div>\r\n          </div>\r\n          <ng-template #loading>\r\n            Loading ...\r\n          </ng-template>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_common_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/common-auth.service */ "./src/app/auth/common-auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.isAuthonticated().then(function (authSuccess) {
            if (authSuccess) {
                return true;
            }
            else {
                _this.router.navigate(['/home']);
            }
        });
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_common_auth_service__WEBPACK_IMPORTED_MODULE_3__["CommonAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_calculatorpage_calculatorpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/calculatorpage/calculatorpage.component */ "./src/app/pages/calculatorpage/calculatorpage.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _user_serviuce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user.serviuce */ "./src/app/layouts/admin-layout/user.serviuce.ts");
/* harmony import */ var _pages_calculatorDash_calculatordash_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/calculatorDash/calculatordash.component */ "./src/app/pages/calculatorDash/calculatordash.component.ts");














var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"]
            ],
            declarations: [
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _pages_calculatorpage_calculatorpage_component__WEBPACK_IMPORTED_MODULE_7__["CalculatorPageComponent"],
                _pages_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _pages_calculatorDash_calculatordash_component__WEBPACK_IMPORTED_MODULE_12__["CalculatorDashComponent"]
            ],
            providers: [_user_serviuce__WEBPACK_IMPORTED_MODULE_11__["UserService"]],
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var app_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var app_rout_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/rout-guard.service */ "./src/app/rout-guard.service.ts");
/* harmony import */ var _pages_calculatorpage_calculatorpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/calculatorpage/calculatorpage.component */ "./src/app/pages/calculatorpage/calculatorpage.component.ts");





var AdminLayoutRoutes = [
    { path: 'dashboard', canActivate: [app_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]], component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'profile', canActivate: [app_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]], component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"] },
    { path: 'calculator', canActivate: [app_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]], component: _pages_calculatorpage_calculatorpage_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorPageComponent"] },
    /*{
      path: 'consultantdocuments', canActivateChild: [AuthGuardService],
  
      loadChildren: () => import('../../admin/consultantDocuments/documents.module').then(m => m.DocumentsModule),
    },
    {
      path: 'admindocuments', canActivateChild: [RouteGuardService],
      data: {
        expectedRole: 'Admin'
      },
      loadChildren: () => import('../../admin/adminDocuments/documents.module').then(m => m.DocumentsModule),
    },
    {
      path: 'adminInDocuments', canActivateChild: [RouteGuardService],
      data: {
        expectedRole: 'Admin'
      },
      loadChildren: () => import('../../admin/adminInDocuments/documents.module').then(m => m.DocumentsInModule),
    },
    {
      path: 'hotlist', canActivateChild: [AuthGuardService],
      loadChildren: () => import('../../admin/hotlist/documents.module').then(m => m.DocumentsModule),
    },
    {
      path: 'contacts', canActivateChild: [AuthGuardService],
      loadChildren: () => import('../../admin/contacts/documents.module').then(m => m.DocumentsModule),
    },
  
    {
      path: 'interviews', canActivateChild: [AuthGuardService],
      loadChildren: () => import('../../admin/interviews/user.module').then(m => m.UserModule),
    },
    {
      path: 'consultants', canActivateChild: [RouteGuardService],
      data: {
        expectedRole: 'Admin'
      },
      loadChildren: () => import('../../admin/consultants/user.module').then(m => m.UserModule),
    },
    {
      path: 'vendorlist', canActivateChild: [RouteGuardService],
      data: {
        expectedRole: 'Admin'
      },
      loadChildren: () => import('../../admin/vendorlist/user.module').then(m => m.UserModule),
    },
    {
      path: 'headadminconsultants', canActivateChild: [RouteGuardService],
      data: {
        expectedRole: 'HeadHuntersAdmin'
      },
      loadChildren: () => import('../../admin/headAdminconsultants/user.module').then(m => m.UserModule),
    },
    {
      path: 'jobs', canActivateChild: [AuthGuardService],
  
      loadChildren: () => import('../../admin/accountmanager/user.module').then(m => m.UserModule),
    },
    {
      path: 'submissions', canActivateChild: [RouteGuardService],
      data: {
        expectedRole: 'Recruiters'
      },
      loadChildren: () => import('../../admin/submissions/user.module').then(m => m.UserModule),
    },
    {
      path: 'benchsales', canActivateChild: [RouteGuardService],
      data: {
        expectedRole: 'BenchSales'
      },
      loadChildren: () => import('../../admin/benchsales/user.module').then(m => m.UserModule),
    },
    {
      path: 'recruiters', canActivateChild: [AuthGuardService],
  
      loadChildren: () => import('../../admin/recruiters/user.module').then(m => m.UserModule),
    },
  
  
    {
      path: 'users', canActivateChild: [RouteGuardService],
       data: {
        expectedRole: 'Admin'
      },
      loadChildren: () => import('../../admin/users/user.module').then(m => m.UserModule),
    },
  */
    {
        path: 'vendorlist', canActivateChild: [app_rout_guard_service__WEBPACK_IMPORTED_MODULE_3__["RouteGuardService"]],
        data: {
            expectedRole: 'Admin'
        },
        loadChildren: function () { return Promise.all(/*! import() | admin-vendorlist-user-module */[__webpack_require__.e("default~admin-accountmanager-user-module~admin-benchsales-user-module~admin-headAdminconsultants-use~650afdf7"), __webpack_require__.e("default~admin-accountmanager-user-module~admin-benchsales-user-module~admin-headAdminconsultants-use~169c0da3"), __webpack_require__.e("default~admin-benchsales-user-module~admin-vendorlist-user-module"), __webpack_require__.e("admin-vendorlist-user-module")]).then(__webpack_require__.bind(null, /*! ../../admin/vendorlist/user.module */ "./src/app/admin/vendorlist/user.module.ts")).then(function (m) { return m.UserModule; }); },
    },
    {
        path: 'superadmin', canActivateChild: [app_rout_guard_service__WEBPACK_IMPORTED_MODULE_3__["RouteGuardService"]],
        data: {
            expectedRole: 'Admin'
        },
        loadChildren: function () { return Promise.all(/*! import() | admin-superadmin-superAdmin-module */[__webpack_require__.e("default~admin-accountmanager-user-module~admin-benchsales-user-module~admin-headAdminconsultants-use~650afdf7"), __webpack_require__.e("default~admin-benchsales-user-module~admin-headAdminconsultants-user-module~admin-huntersconsultants~70431177"), __webpack_require__.e("default~admin-accountmanager-user-module~admin-superadmin-superAdmin-module"), __webpack_require__.e("admin-superadmin-superAdmin-module")]).then(__webpack_require__.bind(null, /*! ../../admin/superadmin/superAdmin.module */ "./src/app/admin/superadmin/superAdmin.module.ts")).then(function (m) { return m.SuperAdminModule; }); },
    }, {
        path: 'jobs', canActivateChild: [app_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        loadChildren: function () { return Promise.all(/*! import() | admin-accountmanager-user-module */[__webpack_require__.e("default~admin-accountmanager-user-module~admin-benchsales-user-module~admin-headAdminconsultants-use~650afdf7"), __webpack_require__.e("default~admin-accountmanager-user-module~admin-benchsales-user-module~admin-headAdminconsultants-use~169c0da3"), __webpack_require__.e("default~admin-accountmanager-user-module~admin-superadmin-superAdmin-module"), __webpack_require__.e("admin-accountmanager-user-module")]).then(__webpack_require__.bind(null, /*! ../../admin/accountmanager/user.module */ "./src/app/admin/accountmanager/user.module.ts")).then(function (m) { return m.UserModule; }); },
    },
    {
        path: 'benchsales', canActivateChild: [app_rout_guard_service__WEBPACK_IMPORTED_MODULE_3__["RouteGuardService"]],
        data: {
            expectedRole: ['BenchSales', 'Admin']
        },
        loadChildren: function () { return Promise.all(/*! import() | admin-benchsales-user-module */[__webpack_require__.e("default~admin-accountmanager-user-module~admin-benchsales-user-module~admin-headAdminconsultants-use~650afdf7"), __webpack_require__.e("default~admin-accountmanager-user-module~admin-benchsales-user-module~admin-headAdminconsultants-use~169c0da3"), __webpack_require__.e("default~admin-benchsales-user-module~admin-headAdminconsultants-user-module~admin-huntersconsultants~70431177"), __webpack_require__.e("default~admin-benchsales-user-module~admin-headAdminconsultants-user-module~admin-huntersconsultants~53627867"), __webpack_require__.e("default~admin-benchsales-user-module~admin-vendorlist-user-module"), __webpack_require__.e("common"), __webpack_require__.e("admin-benchsales-user-module")]).then(__webpack_require__.bind(null, /*! ../../admin/benchsales/user.module */ "./src/app/admin/benchsales/user.module.ts")).then(function (m) { return m.UserModule; }); },
    },
    {
        path: 'huntersconsultants', canActivateChild: [app_rout_guard_service__WEBPACK_IMPORTED_MODULE_3__["RouteGuardService"]],
        data: {
            expectedRole: 'HeadHunters'
        },
        loadChildren: function () { return Promise.all(/*! import() | admin-huntersconsultants-hunter-module */[__webpack_require__.e("default~admin-accountmanager-user-module~admin-benchsales-user-module~admin-headAdminconsultants-use~650afdf7"), __webpack_require__.e("default~admin-accountmanager-user-module~admin-benchsales-user-module~admin-headAdminconsultants-use~169c0da3"), __webpack_require__.e("default~admin-benchsales-user-module~admin-headAdminconsultants-user-module~admin-huntersconsultants~70431177"), __webpack_require__.e("default~admin-benchsales-user-module~admin-headAdminconsultants-user-module~admin-huntersconsultants~53627867"), __webpack_require__.e("admin-huntersconsultants-hunter-module")]).then(__webpack_require__.bind(null, /*! ../../admin/huntersconsultants/hunter.module */ "./src/app/admin/huntersconsultants/hunter.module.ts")).then(function (m) { return m.HunterModule; }); },
    },
    {
        path: 'headadminconsultants', canActivateChild: [app_rout_guard_service__WEBPACK_IMPORTED_MODULE_3__["RouteGuardService"]],
        data: {
            expectedRole: 'HeadHuntersAdmin'
        },
        loadChildren: function () { return Promise.all(/*! import() | admin-headAdminconsultants-user-module */[__webpack_require__.e("default~admin-accountmanager-user-module~admin-benchsales-user-module~admin-headAdminconsultants-use~650afdf7"), __webpack_require__.e("default~admin-accountmanager-user-module~admin-benchsales-user-module~admin-headAdminconsultants-use~169c0da3"), __webpack_require__.e("default~admin-benchsales-user-module~admin-headAdminconsultants-user-module~admin-huntersconsultants~70431177"), __webpack_require__.e("default~admin-benchsales-user-module~admin-headAdminconsultants-user-module~admin-huntersconsultants~53627867"), __webpack_require__.e("common"), __webpack_require__.e("admin-headAdminconsultants-user-module")]).then(__webpack_require__.bind(null, /*! ../../admin/headAdminconsultants/user.module */ "./src/app/admin/headAdminconsultants/user.module.ts")).then(function (m) { return m.UserModule; }); },
    },
];


/***/ }),

/***/ "./src/app/layouts/admin-layout/user.serviuce.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/admin-layout/user.serviuce.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.loadUser = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/user-list/create").pipe();
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/pages/calculatorDash/calculatordash.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/calculatorDash/calculatordash.component.ts ***!
  \******************************************************************/
/*! exports provided: CalculatorDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorDashComponent", function() { return CalculatorDashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rpn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rpn */ "./src/app/pages/calculatorDash/rpn.ts");
/* harmony import */ var _yard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yard */ "./src/app/pages/calculatorDash/yard.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "./src/app/pages/calculatorDash/format.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model */ "./src/app/pages/calculatorDash/model.ts");






var CalculatorDashComponent = /** @class */ (function () {
    function CalculatorDashComponent() {
        this.tokens = [];
        this.showResult = false;
    }
    CalculatorDashComponent.prototype.insertChar = function (character) {
        var lastToken = this.lastToken;
        var doubleMin = lastToken === '-' && Object(_model__WEBPACK_IMPORTED_MODULE_5__["isOperator"])(this.beforeLastToken);
        if (lastToken === undefined || (Object(_model__WEBPACK_IMPORTED_MODULE_5__["isOperator"])(lastToken) && !doubleMin)) {
            if (character === '.') {
                character = '0' + character;
            }
            this.tokens.push(character);
        }
        else if (this.showResult) {
            this.tokens = [character];
        }
        else {
            this.tokens[this.tokens.length - 1] = lastToken + character;
        }
        this.showResult = false;
    };
    Object.defineProperty(CalculatorDashComponent.prototype, "lastToken", {
        get: function () {
            return this.tokens[this.tokens.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalculatorDashComponent.prototype, "beforeLastToken", {
        get: function () {
            return this.tokens[this.tokens.length - 2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalculatorDashComponent.prototype, "input", {
        get: function () {
            if (this.showResult) {
                try {
                    //return format(math.eval(this.tokens.join(' ')).toString());
                    return Object(_format__WEBPACK_IMPORTED_MODULE_4__["format"])(Object(_rpn__WEBPACK_IMPORTED_MODULE_2__["rpn"])(Object(_yard__WEBPACK_IMPORTED_MODULE_3__["yard"])(this.tokens)).toString());
                }
                catch (e) {
                    return 'Je hebt iets verkeerd gedaan.';
                }
            }
            return Object(_format__WEBPACK_IMPORTED_MODULE_4__["format"])(this.tokens
                .slice()
                .reverse()
                .find(function (t) { return !Object(_model__WEBPACK_IMPORTED_MODULE_5__["isOperator"])(t); }) || '0');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalculatorDashComponent.prototype, "formattedTokens", {
        get: function () {
            return this.tokens.map(_format__WEBPACK_IMPORTED_MODULE_4__["format"]).join(' ').replace(/\*/g, 'x') || '0';
        },
        enumerable: true,
        configurable: true
    });
    CalculatorDashComponent.prototype.reset = function () {
        this.tokens = [];
        this.showResult = false;
    };
    CalculatorDashComponent.prototype.evaluate = function () {
        // repeat last action
        if (this.showResult && this.tokens.length >= 2) {
            this.tokens = this.tokens.concat(this.tokens.slice(-2));
        }
        this.showResult = true;
    };
    CalculatorDashComponent.prototype.execOperator = function (operator) {
        // ANS support
        if (this.showResult) {
            this.tokens = [Object(_rpn__WEBPACK_IMPORTED_MODULE_2__["rpn"])(Object(_yard__WEBPACK_IMPORTED_MODULE_3__["yard"])(this.tokens)).toString()];
        }
        if (!this.lastToken && operator !== '(') {
            this.tokens.push('0');
        }
        this.tokens.push(operator);
        this.showResult = false;
    };
    // KEYBOARD SUPPORT
    CalculatorDashComponent.prototype.onKeyDown = function (event) {
        var key = event.key.toLowerCase();
        // event.preventDefault();
        if (key === 'c' || key === 'backspace') {
            this.reset();
        }
        else if (key === ',' || key === '.') {
            this.insertChar('.');
        }
        else if (!isNaN(parseInt(key))) {
            this.insertChar(key);
        }
        else if (key === 'enter') {
            this.evaluate();
        }
        else if (Object(_model__WEBPACK_IMPORTED_MODULE_5__["isOperator"])(key)) {
            this.execOperator(key);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CalculatorDashComponent.prototype, "onKeyDown", null);
    CalculatorDashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-calculator',
            template: __webpack_require__(/*! raw-loader!./calculatordash.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/calculatorDash/calculatordash.component.html")
        })
    ], CalculatorDashComponent);
    return CalculatorDashComponent;
}());



/***/ }),

/***/ "./src/app/pages/calculatorDash/format.ts":
/*!************************************************!*\
  !*** ./src/app/pages/calculatorDash/format.ts ***!
  \************************************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/pages/calculatorDash/model.ts");

function format(input) {
    if (Object(_model__WEBPACK_IMPORTED_MODULE_0__["isOperator"])(input)) {
        return input;
    }
    else {
        return input.replace('.', ',');
    }
}


/***/ }),

/***/ "./src/app/pages/calculatorDash/model.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/calculatorDash/model.ts ***!
  \***********************************************/
/*! exports provided: isOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOperator", function() { return isOperator; });
function isOperator(token) {
    return token === '-' || token === '+' || token === '*' || token === '/' || token === '(' || token === ')';
}


/***/ }),

/***/ "./src/app/pages/calculatorDash/rpn.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/calculatorDash/rpn.ts ***!
  \*********************************************/
/*! exports provided: rpn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rpn", function() { return rpn; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/pages/calculatorDash/model.ts");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);


function rpn(tokens) {
    var stack = [];
    tokens.forEach(function (token) {
        if (!Object(_model__WEBPACK_IMPORTED_MODULE_0__["isOperator"])(token)) {
            stack.push(big_js__WEBPACK_IMPORTED_MODULE_1___default()(token));
        }
        else if (stack.length < 2) {
            throw new Error('Syntax error.');
        }
        else {
            var val2 = stack.pop();
            var val1 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(val1.add(val2));
                    break;
                case '*':
                    stack.push(val1.mul(val2));
                    break;
                case '/':
                    if (val2.eq(0)) {
                        throw new Error('Division by zero.');
                    }
                    stack.push(val1.div(val2));
                    break;
                case '-':
                    stack.push(val1.minus(val2));
                    break;
            }
        }
    });
    return stack.pop().round(10);
}


/***/ }),

/***/ "./src/app/pages/calculatorDash/yard.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/calculatorDash/yard.ts ***!
  \**********************************************/
/*! exports provided: yard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yard", function() { return yard; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/pages/calculatorDash/model.ts");

function yard(infix) {
    var ops = { '+': 1, '-': 1, '*': 2, '/': 2 };
    var peek = function (arr) { return arr[arr.length - 1]; };
    var stack = [];
    return infix.reduce(function (output, token) {
        if (!Object(_model__WEBPACK_IMPORTED_MODULE_0__["isOperator"])(token)) {
            output.push(token);
        }
        else {
            if (token in ops) {
                while (peek(stack) && ops[token] <= ops[peek(stack)]) {
                    output.push(stack.pop());
                }
                stack.push(token);
            }
            if (token === '(') {
                stack.push(token);
            }
            if (token === ')') {
                while (stack.length > 0 && peek(stack) !== '(') {
                    output.push(stack.pop());
                }
                stack.pop();
            }
        }
        return output;
    }, []).concat(stack.reverse());
}


/***/ }),

/***/ "./src/app/pages/calculatorpage/calculatorpage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/calculatorpage/calculatorpage.component.ts ***!
  \******************************************************************/
/*! exports provided: CalculatorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageComponent", function() { return CalculatorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalculatorPageComponent = /** @class */ (function () {
    function CalculatorPageComponent() {
        this.num1 = 52;
        this.num2 = 20;
    }
    CalculatorPageComponent.prototype.ngOnInit = function () {
        this.menuexpectedrole = localStorage.getItem('role');
        console.log(this.menuexpectedrole);
    };
    CalculatorPageComponent.prototype.showCalculator = function () {
        this.calculatorModal = true;
    };
    CalculatorPageComponent.prototype.showCalculator1 = function () {
        this.calculatorModal1 = true;
    };
    CalculatorPageComponent.prototype.ConvertToInt = function (val) {
        return parseFloat(val);
    };
    CalculatorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'calculatorpage-cmp',
            template: __webpack_require__(/*! raw-loader!./calculatorpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/calculatorpage/calculatorpage.component.html")
        })
    ], CalculatorPageComponent);
    return CalculatorPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.menuexpectedrole = localStorage.getItem('role');
        console.log(this.menuexpectedrole);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard-cmp',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_admin_layout_user_serviuce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/admin-layout/user.serviuce */ "./src/app/layouts/admin-layout/user.serviuce.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var UserComponent = /** @class */ (function () {
    function UserComponent(userService, messageService, http, route, router) {
        var _this = this;
        this.userService = userService;
        this.messageService = messageService;
        this.http = http;
        this.route = route;
        this.router = router;
        this.serverErrors = [];
        this.routerChanged = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                // Show loading indicator
                _this.routerChanged = false;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // Hide loading indicator
                _this.timeout = setTimeout(function () {
                    clearTimeout(_this.timeout);
                    _this.routerChanged = true;
                }, 1000);
            }
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.user = this.userService.loadUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (user) { return _this.updateUser.patchValue(user); }));
                this.updateUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                    'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]),
                    'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
                    'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                    'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
                });
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(UserComponent.prototype, "name", {
        get: function () { return this.updateUser.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "email", {
        get: function () { return this.updateUser.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "password", {
        get: function () { return this.updateUser.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "id", {
        get: function () { return this.updateUser.get('id'); },
        enumerable: true,
        configurable: true
    });
    UserComponent.prototype.updateUserDetails = function () {
        var _this = this;
        var id = this.updateUser.get('id').value;
        this.http.put('${environment.api}/user-list/' + id, this.updateUser.value).subscribe(function (response) {
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Your Profile Updated ', detail: 'successfull' });
            _this.router.navigate(['profile']);
        }, function (error) { return console.log(error); }, function () { return console.log('completed'); });
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-cmp',
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user/user.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_layouts_admin_layout_user_serviuce__WEBPACK_IMPORTED_MODULE_6__["UserService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/rout-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/rout-guard.service.ts ***!
  \***************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_common_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/common-auth.service */ "./src/app/auth/common-auth.service.ts");




var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RouteGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        var expectedRole = route.data.expectedRole;
        var role = localStorage.getItem('role');
        return this.auth.isAuthonticated().then(function (authSuccess) {
            if (authSuccess) {
                if (expectedRole.includes(role)) {
                    return true;
                }
                else {
                    console.log("role" + role);
                    console.log("expected role" + expectedRole);
                    _this.router.navigate(['/dashboard']);
                }
            }
            else {
                _this.router.navigate(['/home']);
            }
        });
    };
    RouteGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_common_auth_service__WEBPACK_IMPORTED_MODULE_3__["CommonAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module-es5.js.map