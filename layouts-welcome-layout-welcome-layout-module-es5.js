(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-welcome-layout-welcome-layout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>forgot-password works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 offset-md-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <h5 class=\"card-title text-center\">Portal Login</h5>\r\n\r\n                <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.error }}</small>\r\n                <hr>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"form-group\">\r\n                        <label>User Name</label>\r\n                        <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n                      </div>\r\n\r\n                      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\r\n                              class=\"form-text text-muted\">\r\n                            <div *ngIf=\"email.errors?.required\">\r\n                              Email is required.\r\n                            </div>\r\n                            <div *ngIf=\"email.errors?.email\">\r\n                              Invalid email address.\r\n                            </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\">Password</label>\r\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                      </div>\r\n\r\n                      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\r\n                              class=\"form-text text-muted\">\r\n                            <div *ngIf=\"password.errors?.required\">\r\n                              password is required.\r\n                            </div>\r\n                            <div *ngIf=\"password.errors?.minlength\">\r\n                              Password must be 5 charcter long\r\n                            </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"update ml-auto mr-auto\">\r\n                      <button type=\"submit\" [disabled] = \"!loginForm.valid\" class=\"btn btn-primary btn-round\">Login</button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n        <div class=\"col-md-4 offset-md-4\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                    <h5 class=\"card-title text-center\">Register</h5>\r\n                    <hr>\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                    <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                            <label>First Name</label>\r\n                            <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"First Name\" required>\r\n                            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\r\n                                    class=\"form-text text-muted\">\r\n                                  <div *ngIf=\"name.errors?.required\">\r\n                                    Name is required.\r\n                                  </div>\r\n                                  <div *ngIf=\"name.errors?.minlength\">\r\n                                    Name must be at least 5 characters long.\r\n                                  </div>\r\n                            </div> \r\n                            <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.name }}</small>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                            \r\n                      <div class=\"row\">\r\n                        <!-- <div class=\"col-md-6 pr-1\">\r\n                          <div class=\"form-group\">\r\n                            <label>User Name</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n                          </div>\r\n                        </div> -->\r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">Email address</label>\r\n                            <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" required>\r\n                            \r\n                            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\r\n                                    class=\"form-text text-muted\">\r\n                                  <div *ngIf=\"email.errors?.required\">\r\n                                    Email is required.\r\n                                  </div>\r\n                                  <div *ngIf=\"email.errors?.email\">\r\n                                    Invalid email address.\r\n                                  </div>\r\n                            </div> \r\n\r\n                            <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.email }}</small>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      \r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n                            \r\n                            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\r\n                                    class=\"form-text text-muted\">\r\n                                  <div *ngIf=\"password.errors?.required\">\r\n                                    Password is required.\r\n                                  </div>\r\n                                  <div *ngIf=\"password.errors?.minlength\">\r\n                                    Password must be at least 5 characters long.\r\n                                  </div>\r\n                            </div>\r\n\r\n                            <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.password }}</small>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                            <label>Confirm Password</label>\r\n                            <input type=\"password\" formControlName=\"confirm_password\" class=\"form-control\" placeholder=\"Confirm Password\" required>\r\n                            \r\n                            <div *ngIf=\"confirm_password.invalid && (confirm_password.dirty || confirm_password.touched)\"\r\n                                    class=\"form-text text-muted\">\r\n                                  <div *ngIf=\"confirm_password.errors?.required\">\r\n                                    Confirm Password is required.\r\n                                  </div>\r\n                                  <div *ngIf=\"confirm_password.errors?.minlength\">\r\n                                    Confirm Password must be at least 5 characters long.\r\n                                  </div>\r\n                            </div>\r\n\r\n                            <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.confirm_password }}</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"update ml-auto mr-auto\">\r\n                          <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Register</button>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/common-auth-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/common-auth-routing.module.ts ***!
  \****************************************************/
/*! exports provided: CommonAuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAuthRoutingModule", function() { return CommonAuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"] }
];
var CommonAuthRoutingModule = /** @class */ (function () {
    function CommonAuthRoutingModule() {
    }
    CommonAuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ]
        })
    ], CommonAuthRoutingModule);
    return CommonAuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/common-auth.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/common-auth.module.ts ***!
  \********************************************/
/*! exports provided: CommonAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAuthModule", function() { return CommonAuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-auth-routing.module */ "./src/app/auth/common-auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common-auth.service */ "./src/app/auth/common-auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth-interceptor.interceptor */ "./src/app/auth/auth-interceptor.interceptor.ts");










var CommonAuthModule = /** @class */ (function () {
    function CommonAuthModule() {
    }
    CommonAuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommonAuthRoutingModule"],
            ],
            providers: [
                _common_auth_service__WEBPACK_IMPORTED_MODULE_7__["CommonAuthService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"], multi: true }
            ]
        })
    ], CommonAuthModule);
    return CommonAuthModule;
}());



/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/auth/forgot-password/forgot-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-muted {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhdXRoXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LW11dGVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiLnRleHQtbXV0ZWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-auth.service */ "./src/app/auth/common-auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.serverErrors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)])
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () { return this.loginForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.loginForm);
        this.auth.logIn(this.loginForm).subscribe(function (response) {
            console.log(response.token);
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.setItem('token', response.token);
            localStorage.setItem('role', response.role);
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            _this.serverErrors = error.error;
            console.log(_this.serverErrors);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_auth_service__WEBPACK_IMPORTED_MODULE_2__["CommonAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-auth.service */ "./src/app/auth/common-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, route) {
        this.auth = auth;
        this.route = route;
        this.serverErrors = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "name", {
        get: function () { return this.registerForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.registerForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirm_password", {
        get: function () { return this.registerForm.get('confirm_password'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.auth.registerUser(this.registerForm).subscribe(function (success) {
            //console.log(success);
            _this.route.navigate(['home/login']);
        }, function (error) {
            //console.log(error);
            _this.serverErrors = error.error.errors;
            console.log(_this.serverErrors);
            ;
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_auth_service__WEBPACK_IMPORTED_MODULE_3__["CommonAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/welcome-layout/welcome-layout-routing.routing.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/welcome-layout/welcome-layout-routing.routing.ts ***!
  \**************************************************************************/
/*! exports provided: WelcomeLayoutRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeLayoutRouting", function() { return WelcomeLayoutRouting; });
var WelcomeLayoutRouting = [
    {
        path: '',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../auth/common-auth.module */ "./src/app/auth/common-auth.module.ts")).then(function (m) { return m.CommonAuthModule; }); }
    }
];


/***/ }),

/***/ "./src/app/layouts/welcome-layout/welcome-layout.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/welcome-layout/welcome-layout.module.ts ***!
  \*****************************************************************/
/*! exports provided: WelcomeLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeLayoutModule", function() { return WelcomeLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _welcome_layout_routing_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-layout-routing.routing */ "./src/app/layouts/welcome-layout/welcome-layout-routing.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_auth_common_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/auth/common-auth.module */ "./src/app/auth/common-auth.module.ts");





var WelcomeLayoutModule = /** @class */ (function () {
    function WelcomeLayoutModule() {
    }
    WelcomeLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                app_auth_common_auth_module__WEBPACK_IMPORTED_MODULE_4__["CommonAuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_welcome_layout_routing_routing__WEBPACK_IMPORTED_MODULE_2__["WelcomeLayoutRouting"])
            ]
        })
    ], WelcomeLayoutModule);
    return WelcomeLayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-welcome-layout-welcome-layout-module-es5.js.map