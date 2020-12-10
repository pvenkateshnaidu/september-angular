(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sidebar-cmp></sidebar-cmp>\r\n<div class=\"wrapper\">\r\n  <div class=\"container-fluid\">  <router-outlet></router-outlet></div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/welcome-layout/welcome-layout.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/welcome-layout/welcome-layout.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <br>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/common/navbar/navbar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/common/navbar/navbar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <a class=\"navbar-brand\" routerLink=\"/dashboard\">Webmobilez</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a class=\"nav-link\" routerLink=\"/home/login\">Login</a>\r\n        </li>\r\n\r\n        </ul>\r\n    </div>\r\n</nav>\r\n-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/fixedplugin/fixedplugin.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-plugin\">\r\n    <div class=\"show-dropdown\" ngbDropdown>\r\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\r\n          <i class=\"fa fa-cog fa-2x\"> </i>\r\n        </a>\r\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\r\n            <li class=\"header-title\">Sidebar Background</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\r\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\r\n                </a>\r\n            </li>\r\n\r\n\t          <li class=\"header-title\">Sidebar Active Color</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\r\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\r\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\r\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\r\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\r\n                </a>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n\r\n        <div class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}}\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-toggle\">\r\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\r\n          <span class=\"navbar-toggler-bar bar1\"></span>\r\n          <span class=\"navbar-toggler-bar bar2\"></span>\r\n          <span class=\"navbar-toggler-bar bar3\"></span>\r\n        </button>\r\n      </div>\r\n      <!-- <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a> -->\r\n    </div>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\r\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n      <!-- <form>\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <div class=\"input-group-append\">\r\n            <div class=\"input-group-text\">\r\n              <i class=\"nc-icon nc-zoom-split\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form> -->\r\n      <ul class=\"navbar-nav\">\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link btn-magnify\" href=\"javascript:void(0)\">\r\n            <i class=\"nc-icon nc-layout-11\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Stats</span>\r\n            </p>\r\n          </a>\r\n        </li> -->\r\n\r\n        <!-- <li class=\"nav-item btn-rotate\" ngbDropdown placement=\"bottom-left\">\r\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdownMenuLink\" >\r\n            <i class=\"nc-icon nc-bell-55\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n            </p>\r\n          </a>\r\n          <div ngbDropdownMenu aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\">\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Action</a>\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Another action</a>\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Something else here</a>\r\n          </div>\r\n        </li> -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"logout()\">\r\n            logout\r\n            <!-- <p>\r\n              <span class=\"d-lg-none d-md-block\">Account</span>\r\n            </p> -->\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/calculator/calculator.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/calculator/calculator.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [ngModel]=\"formattedTokens\" class=\"form-control-sm form-control text-right\" readonly>\n\n<input type=\"text\" [ngModel]=\"input\" class=\"form-control form-control-lg text-right\" readonly>\n\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"reset()\">AC</button>\n\t</div>\n\t<div class=\"col-3\">\n    <button class=\"btn btn-primary btn-block\" (click)=\"execOperator('(')\">(</button>\n  </div>\n\t<div class=\"col-3\">\n    <button class=\"btn btn-primary btn-block\" (click)=\"execOperator(')')\">)</button>\n  </div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('/')\">/</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('1')\">1</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('2')\">2</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('3')\">3</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('*')\">x</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('4')\">4</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('5')\">5</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('6')\">6</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('+')\">+</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('7')\">7</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('8')\">8</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('9')\">9</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('-')\">-</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-6\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('0')\">0</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('.')\">,</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button autofocus class=\"btn btn-primary btn-block\" (click)=\"evaluate()\">=</button>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- MENU Start -->\r\n\r\n <div class=\"navbar-custom\" >\r\n    <a routerLink=\"/dashboard\" class=\"logo\" style=\"color: #fff; padding-left:80px;padding-right:80px ;\">\r\n      <img  src=\"../../assets/img/group.png\"\r\n       class=\"svg-content\">\r\n  </a>\r\n\r\n  <p-menubar [model]=\"items\" >\r\n\r\n    <span class=\"txt-color txt-center\" style=\"text-align: center;\">&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; {{clock| date:'mediumTime':'EST'}}</span><br>\r\n    <span class=\"txt-color\">{{clock| date:'fullDate':'EST'}}</span>\r\n\r\n  </p-menubar>\r\n\r\n\r\n\r\n</div> <!-- end navbar-custom -->\r\n<p-dialog header=\"percentage Off\" [(visible)]=\"calculatorModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n\r\n            <form id=\"userForm\" method=\"post\" name=\"percent_off\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"input-group mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">$</span>\r\n                    </div>\r\n                    <input type=\"number\" name=\"list\" value=\"52\" class=\"form-control\"\r\n                      aria-label=\"Amount (to the nearest dollar)\" [(ngModel)]=\"num1\" >\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <label class=\"control-label required\" for=\"percent_off_p\">Percent Off</label>\r\n                  <div class=\"input-group mb-3\">\r\n\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">%</span>\r\n                    </div>\r\n                    <select class=\"form-control\" name=\"disc\" [(ngModel)]=\"num2\">\r\n                      <option value=\"10\">10</option>\r\n                      <option value=\"15\">15</option>\r\n                      <option value=\"20\">20</option>\r\n                      <option value=\"25\">25</option>\r\n                      <option value=\"30\">30</option>\r\n                    </select>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <br>\r\n                    <button type=\"submit\" id=\"percent_off_save\" name=\"percent_off[save]\"\r\n                      class=\"button btn-lg btn btn-primary btn-block btn\">Calculate Percent Off</button>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <div id=\"result\" style=\"height: auto !important;\">\r\n                    <label class=\"control-label required\" for=\"percent_off_p\">Result :</label> {{ ConvertToInt(num1)  -( ConvertToInt(num1)*ConvertToInt(num2)/100)  }}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"Calculator\" [(visible)]=\"calculatorModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n<ng-calculator></ng-calculator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n            @media(max-width:767.9px){\r\n                [role=\"main\"] .py-1{\r\n                    font-size: 1.5rem;\r\n                }\r\n                [role=\"main\"] mark{\r\n                    background-color: #ff0;\r\n                    padding: 0 .6rem;\r\n                }\r\n            }\r\n            .navbar-brand img{\r\n                width:250px;\r\n            }\r\n            footer {\r\n                padding: 20px 0;\r\n            }\r\n            .bg-darkColor {\r\n                background-color: #fff!important;\r\n            }\r\n            .btn.btn-success.openpopup{\r\n                font-size:14px;\r\n                White-space:nowrap;\r\n            }\r\n            .table-bordered thead td, .table-bordered thead th {\r\n\r\n                color: #fff;\r\n                background-color: #428bca;\r\n            }\r\n            /* our code */\r\n            /*\r\n            *\r\n            * ==========================================\r\n            * CUSTOM UTIL CLASSES\r\n            * ==========================================\r\n            *\r\n            */\r\n            table {\r\n\r\n                border-collapse: collapse;\r\n                width:100%\r\n            }\r\n            td,th{\r\n                text-align: left;\r\n                border:1px solid #e2e2e2;\r\n            }\r\n            .btn-web {\r\n    color: #fff;\r\n    background-color: #d94c27;\r\n    border-color: #d94c27;\r\n}\r\n            .btn-web:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    }\r\n            .select2-container .select2-selection--single{\r\n    height:34px !important;\r\n}\r\n            .select2-container--default .select2-selection--single{\r\n         border: 1px solid #ccc !important;\r\n     border-radius: 0px !important;\r\n}\r\n            .select2-selection__rendered{\r\n    padding: 0 !important;\r\n        font-size: 1rem !important;\r\n    font-weight: 400 !important;\r\n\r\n}\r\n            #digit_clock_time {\r\n  font-family: 'Work Sans', sans-serif;\r\n  color: #d94c27;\r\n  text-align: center;\r\n  padding-top: 20px;\r\n}\r\n            #digit_clock_date {\r\n  font-family: 'Work Sans', sans-serif;\r\n  color: #d94c27;\r\n  text-align: center;\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJO29CQUNJLGlCQUFpQjtnQkFDckI7Z0JBQ0E7b0JBQ0ksc0JBQXNCO29CQUN0QixnQkFBZ0I7Z0JBQ3BCO1lBQ0o7WUFDQTtnQkFDSSxXQUFXO1lBQ2Y7WUFDQTtnQkFDSSxlQUFlO1lBQ25CO1lBQ0E7Z0JBQ0ksZ0NBQWdDO1lBQ3BDO1lBQ0E7Z0JBQ0ksY0FBYztnQkFDZCxrQkFBa0I7WUFDdEI7WUFDQTs7Z0JBRUksV0FBVztnQkFDWCx5QkFBeUI7WUFDN0I7WUFFQSxhQUFhO1lBQ2I7Ozs7OzthQU1DO1lBQ0Q7O2dCQUVJLHlCQUF5QjtnQkFDekI7WUFDSjtZQUdBO2dCQUNJLGdCQUFnQjtnQkFDaEIsd0JBQXdCO1lBQzVCO1lBRUo7SUFDSixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtZQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQjtZQUNIO0lBQ0csc0JBQXNCO0FBQzFCO1lBQ0E7U0FDUyxpQ0FBaUM7S0FDckMsNkJBQTZCO0FBQ2xDO1lBQ0E7SUFDSSxxQkFBcUI7UUFDakIsMEJBQTBCO0lBQzlCLDJCQUEyQjs7QUFFL0I7WUFHQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtZQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxrQkFBa0I7OztBQUdwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY3LjlweCl7XHJcbiAgICAgICAgICAgICAgICBbcm9sZT1cIm1haW5cIl0gLnB5LTF7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBbcm9sZT1cIm1haW5cIl0gbWFya3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgLjZyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhci1icmFuZCBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iZy1kYXJrQ29sb3Ige1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi5idG4tc3VjY2Vzcy5vcGVucG9wdXB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgICAgIFdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGFibGUtYm9yZGVyZWQgdGhlYWQgdGQsIC50YWJsZS1ib3JkZXJlZCB0aGVhZCB0aCB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBvdXIgY29kZSAqL1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICogQ1VTVE9NIFVUSUwgQ0xBU1NFU1xyXG4gICAgICAgICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRhYmxlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdGQsdGh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZTJlMmUyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4td2ViIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NGMyNztcclxuICAgIGJvcmRlci1jb2xvcjogI2Q5NGMyNztcclxufVxyXG4uYnRuLXdlYjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZXtcclxuICAgIGhlaWdodDozNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xle1xyXG4gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG4jZGlnaXRfY2xvY2tfdGltZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZDk0YzI3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4jZGlnaXRfY2xvY2tfZGF0ZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZDk0YzI3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/sidebar/sidebar.module */ "./src/app/shared/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "./src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_welcome_layout_welcome_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/welcome-layout/welcome-layout.component */ "./src/app/layouts/welcome-layout/welcome-layout.component.ts");
/* harmony import */ var _shared_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/common/navbar/navbar.component */ "./src/app/shared/common/navbar/navbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth-interceptor.interceptor */ "./src/app/auth/auth-interceptor.interceptor.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/contextmenu.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_contextmenu__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js");






























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
            _layouts_welcome_layout_welcome_layout_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeLayoutComponent"],
            _shared_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutes"], {
                useHash: true
            }),
            _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_18__["TableModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_28__["CalendarModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_20__["SliderModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_23__["DialogModule"],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__["MultiSelectModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_22__["ContextMenuModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__["DropdownModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_24__["ButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_27__["InputTextModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_26__["ProgressBarModule"],
            _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
            _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_8__["FixedPluginModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_28__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_28__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_29__["adapterFactory"],
            }),
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_welcome_layout_welcome_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/welcome-layout/welcome-layout.component */ "./src/app/layouts/welcome-layout/welcome-layout.component.ts");


const AppRoutes = [
    {
        path: '',
        redirectTo: '/home/login',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | layouts-admin-layout-admin-layout-module */ "layouts-admin-layout-admin-layout-module").then(__webpack_require__.bind(null, /*! ./layouts/admin-layout/admin-layout.module */ "./src/app/layouts/admin-layout/admin-layout.module.ts")).then(m => m.AdminLayoutModule)
            }
        ]
    }, {
        path: 'home',
        component: _layouts_welcome_layout_welcome_layout_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | layouts-welcome-layout-welcome-layout-module */ "layouts-welcome-layout-welcome-layout-module").then(__webpack_require__.bind(null, /*! ./layouts/welcome-layout/welcome-layout.module */ "./src/app/layouts/welcome-layout/welcome-layout.module.ts")).then(m => m.WelcomeLayoutModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];


/***/ }),

/***/ "./src/app/auth/auth-interceptor.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/auth-interceptor.interceptor.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthInterceptor = class AuthInterceptor {
    intercept(req, next) {
        // note add this header for CORS pass
        let token = localStorage.getItem('token');
        let headers = null;
        if (token) {
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                //  'Content-Type' : 'application/form-data; charset=UTF-8, application/json',
                'Authorization': `Bearer ${token}`,
            });
        }
        else {
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            //    'Content-Type' : 'application/form-data; charset=UTF-8, application/json'
            });
        }
        const requestChange = req.clone({ headers });
        console.log(requestChange);
        return next.handle(requestChange);
    }
};
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthInterceptor);



/***/ }),

/***/ "./src/app/auth/common-auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/common-auth.service.ts ***!
  \*********************************************/
/*! exports provided: CommonAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAuthService", function() { return CommonAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CommonAuthService = class CommonAuthService {
    constructor(http) {
        this.http = http;
        this.loggedIn = false;
    }
    registerUser(form) {
        console.log(form.value);
        return this.http.post('https://portal.webmobilez.com/public/api/register', form.value);
    }
    isAuthonticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let t = localStorage.getItem('token');
                if (t) {
                    this.loggedIn = true;
                    resolve(this.loggedIn);
                }
                else {
                    this.loggedIn = false;
                    reject();
                }
            }, 800);
        });
        return promise;
    }
    logIn(form) {
        return this.http.post('https://portal.webmobilez.com/public/api/login', form.value);
        //return result;
    }
    logout(token) {
        return this.http.post('https://portal.webmobilez.com/public/api/logout', { 'token': token });
        //return result;
    }
};
CommonAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CommonAuthService);



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminLayoutComponent = class AdminLayoutComponent {
    ngOnInit() { }
};
AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-layout',
        template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html"),
        styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
    })
], AdminLayoutComponent);



/***/ }),

/***/ "./src/app/layouts/welcome-layout/welcome-layout.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/welcome-layout/welcome-layout.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvd2VsY29tZS1sYXlvdXQvd2VsY29tZS1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/welcome-layout/welcome-layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/welcome-layout/welcome-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: WelcomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeLayoutComponent", function() { return WelcomeLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let WelcomeLayoutComponent = class WelcomeLayoutComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
};
WelcomeLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome-layout',
        template: __webpack_require__(/*! raw-loader!./welcome-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/welcome-layout/welcome-layout.component.html"),
        styles: [__webpack_require__(/*! ./welcome-layout.component.scss */ "./src/app/layouts/welcome-layout/welcome-layout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], WelcomeLayoutComponent);



/***/ }),

/***/ "./src/app/shared/common/navbar/navbar.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/common/navbar/navbar.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21tb24vbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/common/navbar/navbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/common/navbar/navbar.component.ts ***!
  \**********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/common/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/common/navbar/navbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FixedPluginComponent = class FixedPluginComponent {
    constructor() {
        this.sidebarColor = "white";
        this.sidebarActiveColor = "danger";
        this.state = true;
    }
    changeSidebarColor(color) {
        var sidebar = document.querySelector('.sidebar');
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data-color', color);
        }
    }
    changeSidebarActiveColor(color) {
        var sidebar = document.querySelector('.sidebar');
        this.sidebarActiveColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data-active-color', color);
        }
    }
    ngOnInit() { }
};
FixedPluginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fixedplugin-cmp',
        template: __webpack_require__(/*! raw-loader!./fixedplugin.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/fixedplugin/fixedplugin.component.html")
    })
], FixedPluginComponent);



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedPluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function() { return FixedPluginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixedplugin.component */ "./src/app/shared/fixedplugin/fixedplugin.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let FixedPluginModule = class FixedPluginModule {
};
FixedPluginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
        exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
    })
], FixedPluginModule);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'footer-cmp',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html")
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");





let FooterModule = class FooterModule {
};
FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
    })
], FooterModule);



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var app_auth_common_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/auth/common-auth.service */ "./src/app/auth/common-auth.service.ts");






let NavbarComponent = class NavbarComponent {
    constructor(location, renderer, element, router, auth) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.auth = auth;
        this.isCollapsed = true;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(listTitle => listTitle);
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
        });
    }
    logout() {
        let token = localStorage.getItem('token');
        this.auth.logout(token).subscribe((resp) => {
            console.log("Logged Out Success");
            localStorage.clear();
            this.router.navigate(['/home/login']);
            console.log(resp);
        }, (error) => {
            //this.router.navigate(['/home/login'])
            console.log("Logged Out with error");
        });
    }
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
    ;
    collapse() {
        this.isCollapsed = !this.isCollapsed;
        const navbar = document.getElementsByTagName('nav')[0];
        console.log(navbar);
        if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        }
        else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("navbar-cmp", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'navbar-cmp',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_auth_common_auth_service__WEBPACK_IMPORTED_MODULE_5__["CommonAuthService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let NavbarModule = class NavbarModule {
};
NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
    })
], NavbarModule);



/***/ }),

/***/ "./src/app/shared/sidebar/calculator/calculator.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/sidebar/calculator/calculator.component.ts ***!
  \*******************************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rpn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rpn */ "./src/app/shared/sidebar/calculator/rpn.ts");
/* harmony import */ var _yard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yard */ "./src/app/shared/sidebar/calculator/yard.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "./src/app/shared/sidebar/calculator/format.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model */ "./src/app/shared/sidebar/calculator/model.ts");






let CalculatorComponent = class CalculatorComponent {
    constructor() {
        this.tokens = [];
        this.showResult = false;
    }
    insertChar(character) {
        const lastToken = this.lastToken;
        const doubleMin = lastToken === '-' && Object(_model__WEBPACK_IMPORTED_MODULE_5__["isOperator"])(this.beforeLastToken);
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
    }
    get lastToken() {
        return this.tokens[this.tokens.length - 1];
    }
    get beforeLastToken() {
        return this.tokens[this.tokens.length - 2];
    }
    get input() {
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
            .find(t => !Object(_model__WEBPACK_IMPORTED_MODULE_5__["isOperator"])(t)) || '0');
    }
    get formattedTokens() {
        return this.tokens.map(_format__WEBPACK_IMPORTED_MODULE_4__["format"]).join(' ').replace(/\*/g, 'x') || '0';
    }
    reset() {
        this.tokens = [];
        this.showResult = false;
    }
    evaluate() {
        // repeat last action
        if (this.showResult && this.tokens.length >= 2) {
            this.tokens = this.tokens.concat(this.tokens.slice(-2));
        }
        this.showResult = true;
    }
    execOperator(operator) {
        // ANS support
        if (this.showResult) {
            this.tokens = [Object(_rpn__WEBPACK_IMPORTED_MODULE_2__["rpn"])(Object(_yard__WEBPACK_IMPORTED_MODULE_3__["yard"])(this.tokens)).toString()];
        }
        if (!this.lastToken && operator !== '(') {
            this.tokens.push('0');
        }
        this.tokens.push(operator);
        this.showResult = false;
    }
    // KEYBOARD SUPPORT
    onKeyDown(event) {
        const key = event.key.toLowerCase();
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
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], CalculatorComponent.prototype, "onKeyDown", null);
CalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ng-calculator',
        template: __webpack_require__(/*! raw-loader!./calculator.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/calculator/calculator.component.html")
    })
], CalculatorComponent);



/***/ }),

/***/ "./src/app/shared/sidebar/calculator/format.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/calculator/format.ts ***!
  \*****************************************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/shared/sidebar/calculator/model.ts");

function format(input) {
    if (Object(_model__WEBPACK_IMPORTED_MODULE_0__["isOperator"])(input)) {
        return input;
    }
    else {
        return input.replace('.', ',');
    }
}


/***/ }),

/***/ "./src/app/shared/sidebar/calculator/model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/sidebar/calculator/model.ts ***!
  \****************************************************/
/*! exports provided: isOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOperator", function() { return isOperator; });
function isOperator(token) {
    return token === '-' || token === '+' || token === '*' || token === '/' || token === '(' || token === ')';
}


/***/ }),

/***/ "./src/app/shared/sidebar/calculator/rpn.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/sidebar/calculator/rpn.ts ***!
  \**************************************************/
/*! exports provided: rpn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rpn", function() { return rpn; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/shared/sidebar/calculator/model.ts");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);


function rpn(tokens) {
    const stack = [];
    tokens.forEach(token => {
        if (!Object(_model__WEBPACK_IMPORTED_MODULE_0__["isOperator"])(token)) {
            stack.push(big_js__WEBPACK_IMPORTED_MODULE_1___default()(token));
        }
        else if (stack.length < 2) {
            throw new Error('Syntax error.');
        }
        else {
            const val2 = stack.pop();
            const val1 = stack.pop();
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

/***/ "./src/app/shared/sidebar/calculator/yard.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/sidebar/calculator/yard.ts ***!
  \***************************************************/
/*! exports provided: yard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yard", function() { return yard; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/shared/sidebar/calculator/model.ts");

function yard(infix) {
    const ops = { '+': 1, '-': 1, '*': 2, '/': 2 };
    const peek = arr => arr[arr.length - 1];
    const stack = [];
    return infix.reduce((output, token) => {
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

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: ROUTES, HeadHunterROUTES, RecruitersROUTES, BenchSalesROUTES, AdminROUTES, headhuntersAdminROUTES, AccountsROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadHunterROUTES", function() { return HeadHunterROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitersROUTES", function() { return RecruitersROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenchSalesROUTES", function() { return BenchSalesROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminROUTES", function() { return AdminROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headhuntersAdminROUTES", function() { return headhuntersAdminROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsROUTES", function() { return AccountsROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_auth_common_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/auth/common-auth.service */ "./src/app/auth/common-auth.service.ts");




const ROUTES = [
    {
        path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '',
        childMenu: null
    },
    { path: '/profile', title: 'Your Profile', icon: 'nc-single-02', class: '', childMenu: null },
];
const HeadHunterROUTES = [
    {
        path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '',
        childMenu: null
    },
    { path: '/huntersconsultants/list', title: 'Consultants', icon: 'nc-calendar-60', class: '', childMenu: null },
    { path: '/huntersconsultants/hotlist', title: 'Hot List', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/profile', title: 'Your Profile', icon: 'nc-single-02', class: '', childMenu: null },
];
const RecruitersROUTES = [
    { path: '/recruiters/list', title: 'Submissions ', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/consultantdocuments/list', title: 'Documents', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/hotlist/list', title: 'Hot List', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/profile', title: 'Your Profile', icon: 'nc-single-02', class: '', childMenu: null },
];
const BenchSalesROUTES = [
    { path: '/benchsales/list', title: 'Submissions', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/benchsales/interviews', title: 'Schedule Interviews', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/benchsales/documentlist', title: 'Documents', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/benchsales/contacts', title: 'Contacts', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/benchsales/hotlist', title: 'Hot List', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/profile', title: 'Your Profile', icon: 'nc-single-02', class: '', childMenu: null },
];
const AdminROUTES = [
    { path: '/superadmin/userlist', title: 'Users', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/superadmin/consultantlist', title: 'Consultants', icon: 'nc-calendar-60', class: '', childMenu: null },
    // { path: '/consultants/inactivelist',        title: 'InActive Consultants', icon:'nc-calendar-60',  class: '' ,childMenu: null},
    { path: '/superadmin/documents', title: 'Documents', icon: 'nc-calendar-60', class: '', childMenu: null },
    { path: '/superadmin/hotlist', title: 'Hot List', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/superadmin/interviews', title: 'Interviews', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/jobs/list', title: 'Jobs', icon: 'nc-single-02', class: '', childMenu: null },
    // { path: '/profile', title: 'Your Profile', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/superadmin/sumissionlist', title: 'Submissions', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/superadmin/documentsinactive', title: 'In Act List', icon: 'nc-calendar-60', class: '', childMenu: null },
];
const headhuntersAdminROUTES = [
    { path: '/headadminconsultants/list', title: 'Consultant List', icon: 'nc-calendar-60', class: '', childMenu: null },
    { path: '/headadminconsultants/hotlist', title: 'Hot List', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/profile', title: 'Your Profile', icon: 'nc-single-02', class: '', childMenu: null },
];
const AccountsROUTES = [
    { path: '/jobs/list', title: 'Jobs', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/hotlist/list', title: 'Hot List', icon: 'nc-single-02', class: '', childMenu: null },
    { path: '/profile', title: 'Your Profile', icon: 'nc-single-02', class: '', childMenu: null },
];
// [
//     { path: '/users',         title: 'User List',         icon:'nc-bank',       class: '' },
//     { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
//     { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
//     { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
//     { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
//     { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
//     { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
//     { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' }
// ];HeadHuntersAdmin
let SidebarComponent = class SidebarComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.num1 = 52;
        this.num2 = 20;
        this.clock = "";
    }
    showCalculator() {
        this.calculatorModal = true;
    }
    showCalculator1() {
        this.calculatorModal1 = true;
    }
    ConvertToInt(val) {
        return parseFloat(val);
    }
    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-fw pi-power-off',
                label: 'My Account',
                items: [
                    { label: 'Profile', routerLink: "/profile" },
                    { label: 'logout', command: (event) => {
                            //event.originalEvent: Browser event
                            //event.item: menuitem metadata
                            this.logout();
                        } },
                ]
            },
        ];
        this.adminMenu = [
            {
                label: 'Submissions',
                // routerLink: "/benchsales/list",
                items: [
                    { label: 'Add Submissions', routerLink: "/superadmin/sumissioncreate" },
                    { label: 'Schedule Interviews', routerLink: "/superadmin/interviews" },
                    { label: 'All Submissions', routerLink: "/superadmin/sumissionlist" },
                ]
            },
            {
                icon: 'pi pi-fw pi-user',
                label: 'Consultants',
                routerLink: "/superadmin/consultantlist",
            },
            {
                icon: 'pi pi-fw pi-key',
                label: 'Jobs',
                routerLink: "/jobs/list",
            },
            {
                icon: 'pi pi-fw pi-file-o',
                label: 'Documents',
                items: [
                    { label: 'Document List', routerLink: "/superadmin/documents" },
                    { label: 'In Active Docs', routerLink: "/superadmin/documentsinactive" },
                    { label: 'Hot List', routerLink: "/superadmin/hotlist" },
                ]
            },
            {
                icon: 'pi pi-fw pi-users',
                label: 'Users',
                routerLink: "/superadmin/userlist",
            },
            {
                icon: 'pi pi-fw pi-dollar',
                label: 'Calculations',
                items: [
                    { label: 'Percentage Off', command: (event) => {
                            //event.originalEvent: Browser event
                            //event.item: menuitem metadata
                            this.calculatorModal = true;
                        },
                    },
                    { label: 'Calculator', command: (event) => {
                            //event.originalEvent: Browser event
                            //event.item: menuitem metadata
                            this.calculatorModal1 = true;
                        },
                    },
                ]
            },
            {
                icon: 'pi pi-fw pi-power-off',
                label: 'My Account',
                items: [
                    { label: 'Profile', routerLink: "/profile" },
                    { label: 'logout', command: (event) => {
                            //event.originalEvent: Browser event
                            //event.item: menuitem metadata
                            this.logout();
                        } },
                ]
            },
        ];
        this.benchsaleMenu = [
            {
                label: 'Submissions',
                // routerLink: "/benchsales/list",
                items: [
                    { label: 'Add Submissions', routerLink: "/benchsales/create" },
                    { label: 'Schedule Interviews', routerLink: "/benchsales/interviews" },
                    { label: 'All Submissions', routerLink: "/benchsales/list" },
                    { label: 'All Contacts', routerLink: "/benchsales/contacts" },
                ]
            },
            {
                icon: 'pi pi-fw pi-file-o',
                label: 'Documents',
                routerLink: "/benchsales/documentlist",
            },
            {
                icon: 'pi pi-fw pi-dollar',
                label: 'Calculations',
                items: [
                    { label: 'Percentage Off', command: (event) => {
                            //event.originalEvent: Browser event
                            //event.item: menuitem metadata
                            this.calculatorModal = true;
                        },
                    },
                    { label: 'Calculator', command: (event) => {
                            //event.originalEvent: Browser event
                            //event.item: menuitem metadata
                            this.calculatorModal1 = true;
                        },
                    },
                ]
            },
            {
                icon: 'pi pi-fw pi-cloud',
                label: 'Hotlist',
                routerLink: "/benchsales/hotlist",
            },
            {
                icon: 'pi pi-fw pi-power-off',
                label: 'My Account',
                items: [
                    { label: 'Profile', routerLink: "/profile" },
                    { label: 'logout', command: (event) => {
                            //event.originalEvent: Browser event
                            //event.item: menuitem metadata
                            this.logout();
                        } },
                ]
            },
        ];
        this.headHunterAdminMenu = [
            {
                label: 'Consultants',
                items: [
                    { label: 'Consultants List', routerLink: "/headadminconsultants/list" },
                    { label: 'Add Consultant', routerLink: "/headadminconsultants/create" },
                ]
            },
            {
                icon: 'pi pi-fw pi-dollar',
                label: 'Calculations',
                items: [
                    { label: 'Percentage Off', command: (event) => {
                            //event.originalEvent: Browser event
                            //event.item: menuitem metadata
                            this.calculatorModal = true;
                        },
                    },
                    { label: 'Calculator', command: (event) => {
                            //event.originalEvent: Browser event
                            //event.item: menuitem metadata
                            this.calculatorModal1 = true;
                        },
                    },
                ]
            },
            {
                icon: 'pi pi-fw pi-power-off',
                label: 'My Account',
                items: [
                    { label: 'Profile', routerLink: "/profile" },
                    { label: 'logout', command: (event) => {
                            //event.originalEvent: Browser event
                            //event.item: menuitem metadata
                            this.logout();
                        } },
                ]
            },
        ];
        this.clockHandle = setInterval(() => {
            this.clock = new Date().toLocaleString();
        }, 1000);
        this.menuexpectedrole = localStorage.getItem('role');
        console.log(this.menuexpectedrole);
        if (this.menuexpectedrole == 'Admin') {
            // this.menuItems = AdminROUTES.filter(menuItem => menuItem);
            this.items = this.adminMenu;
        }
        else if (this.menuexpectedrole == 'HeadHunters') {
            this.items = this.headHunderMenu;
            // this.menuItems = HeadHunterROUTES.filter(menuItem => menuItem);
        }
        else if (this.menuexpectedrole == 'Recruiters') {
            this.items = this.benchsaleMenu;
            //  this.menuItems = RecruitersROUTES.filter(menuItem => menuItem);
        }
        else if (this.menuexpectedrole == 'BenchSales') {
            this.items = this.benchsaleMenu;
            //   this.menuItems = BenchSalesROUTES.filter(menuItem => menuItem);
        }
        else if (this.menuexpectedrole == 'HeadHuntersAdmin') {
            this.items = this.headHunterAdminMenu;
            //  this.menuItems = headhuntersAdminROUTES.filter(menuItem => menuItem);
        }
        else if (this.menuexpectedrole == 'Accountmanager') {
            this.items = this.jobMenu;
            // this.menuItems = AccountsROUTES.filter(menuItem => menuItem);
        }
        else {
            //  this.menuItems = ROUTES.filter(menuItem => menuItem);
        }
    }
    logout() {
        let token = localStorage.getItem('token');
        this.auth.logout(token).subscribe((resp) => {
            console.log("Logged Out Success");
            localStorage.clear();
            this.router.navigate(['/home/login']);
            console.log(resp);
        }, (error) => {
            //this.router.navigate(['/home/login'])
            console.log("Logged Out with error");
        });
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sidebar-cmp',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html"),
        styles: [".pd-top { padding-top: 17px; } .txt-color{ color:#d94c27} .logo img{ width:160px; } .ui-menubar-root-list{ padding-top:9px !important; } .ui-menubar\t {  mouseover: #ff0000; background-color: #A80000;}.ui-state-hover {cursor:hand;}"]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_auth_common_auth_service__WEBPACK_IMPORTED_MODULE_3__["CommonAuthService"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.module.ts ***!
  \**************************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/menubar.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_menubar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/shared/sidebar/calculator/calculator.component.ts");





//import {MegaMenuModule} from 'primeng/megamenu';





let SidebarModule = class SidebarModule {
};
SidebarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_menubar__WEBPACK_IMPORTED_MODULE_5__["MenubarModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogModule"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_9__["CalculatorComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
    })
], SidebarModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*!

=========================================================
* Paper Dashboard Angular - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\sep-bar\ang\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map