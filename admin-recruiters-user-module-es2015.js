(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-recruiters-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/recruiters/calculator/calculator.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/recruiters/calculator/calculator.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [ngModel]=\"formattedTokens\" class=\"form-control-sm form-control text-right\" readonly>\n\n<input type=\"text\" [ngModel]=\"input\" class=\"form-control form-control-lg text-right\" readonly>\n\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"reset()\">AC</button>\n\t</div>\n\t<div class=\"col-3\">\n    <button class=\"btn btn-primary btn-block\" (click)=\"execOperator('(')\">(</button>\n  </div>\n\t<div class=\"col-3\">\n    <button class=\"btn btn-primary btn-block\" (click)=\"execOperator(')')\">)</button>\n  </div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('/')\">/</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('1')\">1</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('2')\">2</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('3')\">3</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('*')\">x</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('4')\">4</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('5')\">5</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('6')\">6</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('+')\">+</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('7')\">7</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('8')\">8</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('9')\">9</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('-')\">-</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-6\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('0')\">0</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('.')\">,</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button autofocus class=\"btn btn-primary btn-block\" (click)=\"evaluate()\">=</button>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/recruiters/user-create/user-create.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/recruiters/user-create/user-create.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Add Submissions </h4>\n    <button type=\"button\" class=\"btn btn-primary btn-round btn-length\" (click)=\"showCalculator()\">Percentage Calculator</button>\n    <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"showCalculator1()\">Calculator</button>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Choose Consultant:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"state\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (onChange)=\"onChange($event)\"\n                  (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"state.invalid && (state.dirty || state.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"state.errors?.required\">\n                    Consultant is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.state }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Rate:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{crate}}\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Email:</label>\n                <input type=\"email\" class=\"form-control\" value=\"{{cemail}}\" readonly>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Consultant Number:</label>\n                <input type=\"text\" value=\"{{cmobile}}\" class=\"form-control\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Technology:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{ctechnology}}\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Choose Vendor:</label>\n                <p-dropdown #df [options]=\"vendors\" [(ngModel)]=\"selectedVendors\" formControlName=\"vid\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeVendor($event)\" (keydown)=\"vendorsUi($event)\">\n                </p-dropdown>\n\n              </div>\n              <p-button (click)=\"showModalDialog()\" icon=\"pi pi-external-link\" label=\"Add Vendor\"></p-button>\n\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"df.value\">\n              <div class=\"form-group\">\n                <label>Choose Vendor Contacts:</label>\n                <p-dropdown [options]=\"contacts\" [(ngModel)]=\"selectedContacts\" formControlName=\"vendorDetailId\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeContacts($event)\" (keydown)=\"contactsUi($event)\">\n                </p-dropdown>\n                <div *ngIf=\"vendorDetailId.invalid && (vendorDetailId.dirty || vendorDetailId.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"vendorDetailId.errors?.required\">\n                    Contact is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorDetailId }}</small>\n\n              </div>\n              <p-button (click)=\"showModalDialog1()\" icon=\"pi pi-external-link\" label=\"Add Contact\"></p-button>\n\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"vcname\">\n              <div class=\"form-group\">\n                <label>Vendor Contact Name:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{vcname}}\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"vmobile\">\n              <div class=\"form-group\">\n                <label>Vendor Mobile Number:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{vmobile}}\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Choose End CLient:</label>\n                <p-dropdown #dfrf [options]=\"clients\" [(ngModel)]=\"selectedClients\" formControlName=\"clientId\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeClients($event)\" (keydown)=\"clientsUi($event)\">\n                </p-dropdown>\n                <div *ngIf=\"clientId.invalid && (clientId.dirty || clientId.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"clientId.errors?.required\">\n                    Client is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.clientId }}</small>\n                <p-button (click)=\"showModalDialogClient()\" icon=\"pi pi-external-link\" label=\"Add Client\"></p-button>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>End CLient Location:</label>\n                <input type=\"text\" formControlName=\"endClientLocation\" class=\"form-control\"\n                  placeholder=\"End Client Location\">\n                <div *ngIf=\"endClientLocation.invalid && (endClientLocation.dirty || endClientLocation.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"endClientLocation.errors?.required\">\n                    End ClientLocation is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.endClientLocation }}</small>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Actual Rate:</label>\n                <input type=\"number\" formControlName=\"actualRate\" class=\"form-control\" placeholder=\"Actual Rate\">\n                <div *ngIf=\"actualRate.invalid && (actualRate.dirty || actualRate.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"actualRate.errors?.required\">\n                    ActualRate is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Submission Rate:</label>\n                <input type=\"number\" formControlName=\"submissionRate\" class=\"form-control\" placeholder=\"Submit   Rate\">\n                <div *ngIf=\"submissionRate.invalid && (submissionRate.dirty || submissionRate.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"submissionRate.errors?.required\">\n                    submissionRate is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.submissionRate }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Vendor Status</label>\n                <select #statusvalue class=\"form-control\" formControlName=\"vendorStatus\">\n                  <option value=\"\">--select--</option>\n                  <option value=\"Interview scheduled\">Interview scheduled</option>\n                  <option value=\"Submitted to Client\">Submitted to Client</option>\n                  <option value=\"Submitted to Vendor\">Submitted to Vendor</option>\n                  <option value=\"Disqualified\">Disqualified</option>\n                  <option value=\"Client rejected\">Client rejected</option>\n                  <option value=\"Vendor Rejected\">Vendor Rejected</option>\n                  <option value=\"Vendor screening call\">Vendor screening call</option>\n                  <option value=\"Waiting for Evaluation\">Waiting for Evaluation</option>\n                </select>\n                <div *ngIf=\"vendorStatus.invalid && (vendorStatus.dirty || vendorStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"vendorStatus.errors?.required\">\n                    vendorStatus is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorStatus }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"(statusvalue.value=='Interview scheduled')\">\n              <div class=\"form-group\">\n                <label>Interview Schedule Date :</label>\n                <input type=\"date\" class=\"form-control\" formControlName=\"scheduleDate\" placeholder=\"Interview Schedule Date\">\n              </div>\n            </div>\n            <div class=\"col-md-2\" formControlName=\"timezone\" *ngIf=\"(statusvalue.value=='Interview scheduled')\">\n              <div class=\"form-group\">\n                <label> Time Zone :</label>\n                <select class=\"form-control\">\n                  <option value=\"EST\">EST</option>\n                  <option value=\"PST\">PST</option>\n                  <option value=\"CST\">CST</option>\n                  <option value=\"MST\">MST</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Comments:</label>\n                <textarea formControlName=\"vendorComments\" class=\"form-control\"></textarea>\n                <div *ngIf=\"vendorComments.invalid && (vendorComments.dirty || vendorComments.touched)\"\n                  class=\"form-text text-muted\">\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ vendorComments.jobExperience }}</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Submit\n                Consultant</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<p-dialog header=\"Add New Vendor Contact\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n  <form [formGroup]=\"registerContact\" (ngSubmit)=\"registerContactForm()\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"vendorcontactName\" placeholder=\"Vendor Contact Name\">\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label> Email:</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"vendorcontactEmail\"\n            placeholder=\"Vendor Contact Email\">\n          <div *ngIf=\"vendorcontactEmail.invalid && (vendorcontactEmail.dirty || vendorcontactEmail.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"vendorcontactEmail.errors?.required\">\n              Email is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorcontactEmail }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Mobile Number:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"vendorcontactMobile\" placeholder=\"Mobile Number\">\n\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label> EXT:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"vendorext\" placeholder=\"EXT\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerContact.valid\">Add Vendor\n      Contact</button>\n  </form>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n<p-dialog header=\"Add New Vendor\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerVendorCompany()\">\n\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Vendor Company Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"vendorCompanyName\" placeholder=\"Vendor Company Name\">\n          <div *ngIf=\"vendorCompanyName.invalid && (vendorCompanyName.dirty || vendorCompanyName.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"vendorCompanyName.errors?.required\">\n              Company Name is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorCompanyName }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"contactName\" placeholder=\"Vendor Contact Name\">\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label> Email:</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"contactEmail\" placeholder=\"Vendor Contact Email\">\n          <div *ngIf=\"contactEmail.invalid && (contactEmail.dirty || contactEmail.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"contactEmail.errors?.required\">\n              Email is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.contactEmail }}</small>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Mobile Number:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"contactMobile\" placeholder=\"Mobile Number\">\n          <div *ngIf=\"contactMobile.invalid && (contactEmail.dirty || contactMobile.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"contactMobile.errors?.required\">\n              Mobile Number is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.contactMobile }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label> EXT:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"ext\" placeholder=\"EXT\">\n        </div>\n      </div>\n\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerVendor.valid\">Add Vendor</button>\n  </form>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n<p-dialog header=\"percentage Off\" [(visible)]=\"calculatorModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n\n            <form id=\"userForm\" method=\"post\" name=\"percent_off\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"number\" name=\"list\" value=\"52\" class=\"form-control\"\n                      aria-label=\"Amount (to the nearest dollar)\" [(ngModel)]=\"num1\" >\n                  </div>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label class=\"control-label required\" for=\"percent_off_p\">Percent Off</label>\n                  <div class=\"input-group mb-3\">\n\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">%</span>\n                    </div>\n                    <select class=\"form-control\" name=\"disc\" [(ngModel)]=\"num2\">\n                      <option value=\"10\">10</option>\n                      <option value=\"15\">15</option>\n                      <option value=\"20\">20</option>\n                      <option value=\"25\">25</option>\n                      <option value=\"30\">30</option>\n                    </select>\n                  </div>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <br>\n                    <button type=\"submit\" id=\"percent_off_save\" name=\"percent_off[save]\"\n                      class=\"button btn-lg btn btn-primary btn-block btn\">Calculate Percent Off</button>\n                  </div>\n\n                </div>\n              </div>\n            </form>\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <div id=\"result\" style=\"height: auto !important;\">\n                    <label class=\"control-label required\" for=\"percent_off_p\">Result :</label> {{ ConvertToInt(num1)  -( ConvertToInt(num1)*ConvertToInt(num2)/100)  }}\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n<p-dialog header=\"Calculator\" [(visible)]=\"calculatorModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n<ng-calculator></ng-calculator>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n<p-dialog header=\"Add Client\" [(visible)]=\"displayModalClient\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n  <form [formGroup]=\"registerClient\" (ngSubmit)=\"registerClientForm()\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Client Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"clientName\" placeholder=\"Client Name\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerClient.valid\">Add Client</button>\n  </form>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/recruiters/user-edit/user-create.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/recruiters/user-edit/user-create.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Edit Job Requirement </h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"updateUserDetails()\" enctype=\"multipart/form-data\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n\n                <label>Job Title:</label>\n                <input type=\"text\" formControlName=\"jobTitle\" class=\"form-control\" placeholder=\"Job Title\">\n                <div *ngIf=\"jobTitle.invalid && (jobTitle.dirty || jobTitle.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobTitle.errors?.required\">\n                    Title is required.\n                  </div>\n                  <div *ngIf=\"jobTitle.errors?.minlength\">\n                    Title must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobTitle }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Experience:</label>\n                <input type=\"number\" formControlName=\"jobExperience\" class=\"form-control\" placeholder=\"Exp\"\n                  required>\n                <div *ngIf=\"jobExperience.invalid && (jobExperience.dirty || jobExperience.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobExperience.errors?.required\">\n                    Experience is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobExperience }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <label>Technology</label>\n              <p-dropdown #dd [options]=\"cars\" [(ngModel)]=\"selectedCar\" formControlName=\"jobTechnology\"\n                [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"test($event)\">\n              </p-dropdown>\n              <div *ngIf=\"jobTechnology.invalid && (jobTechnology.dirty || jobTechnology.touched)\" class=\"form-text text-muted\">\n                <div *ngIf=\"jobTechnology.errors?.required\">\n                  Technology is required.\n                </div>\n\n              </div>\n              <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobTechnology }}</small>\n             </div>\n             <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Visa Type:</label>\n                <select class=\"form-control\" formControlName=\"jobVisaType\">\n                  <option value=\"null\" disabled>Choose visaType</option>\n                  <option value=\"H4 EAD\">H4 EAD\n                  </option>\n                  <option value=\"H1B-Transfer\">H1B-Transfer\n                  </option>\n                  <option value=\"CPT\">CPT\n                  </option>\n                  <option value=\"OPT\">OPT\n                  </option>\n                  <option value=\"H1-B\">H1-B\n                  </option>\n                  <option value=\"GC-EAD\">GC-EAD\n                  </option>\n                  <option value=\"Green Card\">Green Card\n                  </option>\n                  <option value=\"US Citizen\">US Citizen\n                  </option>\n\n                </select>\n                <div *ngIf=\"jobVisaType.invalid && (jobVisaType.dirty || jobVisaType.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"jobVisaType.errors?.required\">\n                    Visa Type is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobVisaType }}</small>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n\n\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Location:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"jobLocation\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"jobLocation.invalid && (jobLocation.dirty || jobLocation.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"jobLocation.errors?.required\">\n                    Location is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobLocation }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Status</label>\n                <select class=\"form-control\" formControlName=\"jobStatus\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"A\">Active</option>\n                  <option value=\"I\">InActive</option>\n                </select>\n                <div *ngIf=\"jobStatus.invalid && (jobStatus.dirty || jobStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobStatus.errors?.required\">\n                    Status is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobStatus }}</small>\n\n              </div>\n            </div>\n\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Job Description</label>\n                <textarea formControlName=\"jobDescription\" class=\"form-control\"></textarea>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Update\n                Job</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/recruiters/user-index/user-index.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/recruiters/user-index/user-index.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/recruiters/user-list/user-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/recruiters/user-list/user-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\r\n<h4 class=\"remove-margin\"> Consultant Submissions  <a routerLink=\"/recruiters/create\" class=\"btn btn-primary\">\r\n  Add Submission\r\n </a></h4>\r\n<!--\r\n<p-table #dt [responsive]=\"true\" [value]=\"timeSheets\" [frozenColumns]=\"frozenCols\" [scrollable]=\"true\"\r\n  scrollHeight=\"200px\" appendTo=\"body\" filterMatchMode=\"equals\" columnResizeMode=\"expand\" dataKey=\"id\" [rows]=\"10\"\r\n  [showCurrentPageReport]=\"true\" tableStyleClass=\"fixtable\" [rowsPerPageOptions]=\"[5,10,20,30]\" [loading]=\"loading\"\r\n  styleClass=\"p-datatable-customers\" [paginator]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['created_at','consultatName','consultantEmail','consultatMobileNumber','experience','rate','reportStatus']\">\r\n\r\n  <ng-template pTemplate=\"header\">\r\n    <tr>\r\n\r\n      <th>Consultant Name</th>\r\n      <th>Created At</th>\r\n      <th>Email</th>\r\n      <th>Phone number</th>\r\n\r\n      <th>Exp </th>\r\n      <th>Rate</th>\r\n      <th>Status</th>\r\n      <th>Action</th>\r\n\r\n    </tr>\r\n    <tr>\r\n\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <p-calendar (onSelect)=\"onDateSelect($event)\" (onClearClick)=\"dt.filter('', 'created_at', 'equals')\"\r\n          [showButtonBar]=\"true\" [style]=\"{'width':'300px'}\" styleClass=\"p-column-filter\" placeholder=\"Date\"\r\n          [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\"></p-calendar>\r\n      </th>\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultantEmail', 'startsWith')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'startsWith')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"exp\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'reportStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-customer>\r\n    <tr>\r\n\r\n\r\n      <td>\r\n        {{customer.consultatName}}\r\n      </td>\r\n      <td>\r\n        {{customer.created_at | date}}\r\n      </td>\r\n      <td>\r\n        {{customer.consultantEmail}}\r\n      </td>\r\n      <td>\r\n        {{customer.consultatMobileNumber}}\r\n      </td>\r\n\r\n      <td>\r\n        {{customer.experience}}\r\n      </td>\r\n      <td>\r\n        {{customer.rate}}\r\n      </td>\r\n      <td>\r\n        {{customer.reportStatus}}\r\n      </td>\r\n      <td>\r\n        -\r\n      </td>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"emptymessage\">\r\n    <tr>\r\n      <td colspan=\"6\">No Consultants found.</td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table> -->\r\n<!--\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n          <h4 class=\"remove-margin\"> Timesheet List </h4>\r\n    <div class=\"card\">\r\n\r\n      <div class=\"card-body\">\r\n        <p-table #dt [value]=\"timeSheets\" dataKey=\"id\"\r\n        [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,20]\" [loading]=\"loading\" styleClass=\"p-datatable-customers\"\r\n        [paginator]=\"false\"\r\n        [filterDelay]=\"0\" [globalFilterFields]=\"['fromDate','duration','assignment','serviceCode']\">\r\n\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Employee</th>\r\n                <th>Date</th>\r\n                <th>Duration</th>\r\n                <th>Assignment</th>\r\n                <th>Service Code</th>\r\n            </tr>\r\n\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-customer>\r\n            <tr>\r\n              <td>\r\n                {{customer.user_details.name}}\r\n              </td>\r\n                <td>\r\n                    {{customer.fromDate | date}}\r\n                </td>\r\n                <td>\r\n                   {{customer.duration}}\r\n                </td>\r\n                <td>\r\n                  {{customer.assignment}}\r\n               </td>\r\n               <td>\r\n                {{customer.serviceCode}}\r\n             </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <tr>\r\n                <td colspan=\"6\">No Users found.</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p-inplace>\r\n  <ng-template pTemplate=\"display\">\r\n    Click to Edit\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n    <input type=\"text\" value=\"PrimeNG\" pInputText>\r\n  </ng-template>\r\n</p-inplace>\r\n\r\n<p-table #dt [value]=\"timeSheets\" dataKey=\"id\"\r\n        [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\" styleClass=\"p-datatable-customers\"\r\n        [paginator]=\"true\" currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\"\r\n        [filterDelay]=\"0\" [globalFilterFields]=\"['consultatName']\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div class=\"table-header\">\r\n                List of Consultants\r\n                <span class=\"p-input-icon-left\">\r\n                    <i class=\"pi pi-search\"></i>\r\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" placeholder=\"Global Search\" />\r\n                </span>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Name</th>\r\n\r\n            </tr>\r\n            <tr>\r\n                <th>\r\n                    <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'startsWith')\" placeholder=\"Search by Name\" class=\"p-column-filter\">\r\n                </th>\r\n\r\n\r\n\r\n\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-customer>\r\n            <tr>\r\n                <td>\r\n                    {{customer.consultatName}}\r\n                </td>\r\n\r\n\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <tr>\r\n                <td colspan=\"6\">No Consultants found.</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n {{rowData|field:col}}\r\n  -->\r\n\r\n<p-table #dt1 [columns]=\"scrollableCols\" [autoLayout]=\"true\"  [value]=\"timeSheets\" [scrollable]=\"true\"\r\n  autoLayout=\"true\"  dataKey=\"reportId\"  [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\"  [loading]=\"loading\" >\r\n\t<ng-template pTemplate=\"emptymessage\">\r\n\t\t<tr>\r\n\t\t\t<td colspan=\"7\">No Submissions found.</td>\r\n\t\t</tr>\r\n\t</ng-template>\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:70px\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Action</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'user_details.name', 'startsWith')\"\r\n          placeholder=\"Created By\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultant.consultatName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'vendorStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultant.technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'vendorlist.vendorCompanyName', 'startsWith')\"\r\n          placeholder=\"Company Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'vendor_detail.contactName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'vendor_detail.contactEmail', 'startsWith')\"\r\n          placeholder=\"Vendor Email\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'vendor_detail.contactMobile', 'startsWith')\"\r\n          placeholder=\"Vendor Mobile\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'clients.clientName', 'startsWith')\"\r\n          placeholder=\"End Clinet\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'actualRate', 'startsWith')\"\r\n          placeholder=\"actualRate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'submissionRate', 'startsWith')\"\r\n          placeholder=\"submissionRate\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.reportStatus,rowData.adminStatus)}\"  >\r\n      <td style=\"text-align:center\">\r\n\r\n       <a (click)=\"showModalDialog(rowData)\"  class=\"btn btn-warning btn-sm\">Edit</a>\r\n       <a (click)=\"showModalDialog1(rowData.vendorComments)\" tabindex=\"0\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"\"\r\n       data-original-title=\"Note\"><img\r\n         src=\"./assets/img/sticky.png\"></a>\r\n        </td>\r\n\r\n      <td *ngFor=\"let col of columns\" >\r\n\r\n              {{rowData|field:col}}\r\n\r\n\r\n      </td>\r\n\r\n    </tr>\r\n  </ng-template>\r\n\r\n</p-table>\r\n\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\" [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n\r\n  <p-dialog header=\"{{heading1}}\" [(visible)]=\"displayModal\" [modal]=\"true\"\r\n  [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"  [draggable]=\"false\" [resizable]=\"false\">\r\n<h5> </h5>\r\n<form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerUser(submissionId)\">\r\n    <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"form-group\">\r\n            <select class=\"form-control\"  #seleectevalue formControlName=\"vendorStatus\">\r\n                 <option value=\"\">--select--</option>\r\n                                        <option value=\"Placed\">Placed</option>\r\n                                        <option value=\"Interview scheduled\">Interview scheduled</option>\r\n                                        <option value=\"Submitted to Client\">Submitted to Client</option>\r\n                                        <option value=\"Submitted to Vendor\">Submitted to Vendor</option>\r\n                                        <option value=\"Disqualified\">Disqualified</option>\r\n                                        <option value=\"Client rejected\">Client rejected</option>\r\n                                        <option value=\"Vendor Rejected\">Vendor Rejected</option>\r\n                                        <option value=\"Vendor screening call\">Vendor screening call</option>\r\n                                        <option value=\"Waiting for Evaluation\">Waiting for Evaluation</option>\r\n                                        </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-8\" *ngIf=\"seleectevalue.value == 'Interview scheduled'\">\r\n        <div class=\"form-group schedulepopdiv\" >\r\n            <label for=\"schedulepop\">Schedule Date:</label>\r\n            <input type=\"date\" class=\"form-control\" formControlName=\"scheduleDate\"  value=\"2020-11-21 10:43:17\"><br>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4\" *ngIf=\"seleectevalue.value == 'Interview scheduled'\">\r\n        <div class=\"form-group schedulepopdiv\">\r\n            <label for=\"timezone\">Time Zone:</label>\r\n            <select class=\"form-control\" formControlName=\"timezone\">\r\n              <option value=\"\">Choose Time Zone</option>\r\n                <option value=\"EST\" >EST</option>\r\n                <option value=\"PST\">PST</option>\r\n                <option value=\"CST\">CST</option>\r\n                <option value=\"MST\">MST</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"form-group\">\r\n            <label for=\"notepop\">Comment:</label>\r\n            <textarea class=\"form-control\"  formControlName=\"vendorComments\"></textarea>\r\n\r\n        </div>\r\n    </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary btn-round\">Update</button>\r\n</form>\r\n\r\n\r\n           <ng-template pTemplate=\"footer\">\r\n               <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n               <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n           </ng-template>\r\n   </p-dialog>\r\n\r\n   <p-dialog header=\"Note\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\r\n   [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n   <p>{{comment}}</p>\r\n   <ng-template pTemplate=\"footer\">\r\n     <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n     <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n   </ng-template>\r\n </p-dialog>\r\n"

/***/ }),

/***/ "./src/app/admin/recruiters/calculator/calculator.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/recruiters/calculator/calculator.component.ts ***!
  \*********************************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rpn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rpn */ "./src/app/admin/recruiters/calculator/rpn.ts");
/* harmony import */ var _yard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yard */ "./src/app/admin/recruiters/calculator/yard.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "./src/app/admin/recruiters/calculator/format.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model */ "./src/app/admin/recruiters/calculator/model.ts");






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
        template: __webpack_require__(/*! raw-loader!./calculator.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/recruiters/calculator/calculator.component.html")
    })
], CalculatorComponent);



/***/ }),

/***/ "./src/app/admin/recruiters/calculator/format.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/recruiters/calculator/format.ts ***!
  \*******************************************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/admin/recruiters/calculator/model.ts");

function format(input) {
    if (Object(_model__WEBPACK_IMPORTED_MODULE_0__["isOperator"])(input)) {
        return input;
    }
    else {
        return input.replace('.', ',');
    }
}


/***/ }),

/***/ "./src/app/admin/recruiters/calculator/model.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/recruiters/calculator/model.ts ***!
  \******************************************************/
/*! exports provided: isOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOperator", function() { return isOperator; });
function isOperator(token) {
    return token === '-' || token === '+' || token === '*' || token === '/' || token === '(' || token === ')';
}


/***/ }),

/***/ "./src/app/admin/recruiters/calculator/rpn.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/recruiters/calculator/rpn.ts ***!
  \****************************************************/
/*! exports provided: rpn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rpn", function() { return rpn; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/admin/recruiters/calculator/model.ts");
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

/***/ "./src/app/admin/recruiters/calculator/yard.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/recruiters/calculator/yard.ts ***!
  \*****************************************************/
/*! exports provided: yard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yard", function() { return yard; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/admin/recruiters/calculator/model.ts");

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

/***/ "./src/app/admin/recruiters/user-create/user-create.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/recruiters/user-create/user-create.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-length {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVjcnVpdGVycy91c2VyLWNyZWF0ZS9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhZG1pblxccmVjcnVpdGVyc1xcdXNlci1jcmVhdGVcXHVzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9yZWNydWl0ZXJzL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsaUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlY3J1aXRlcnMvdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWxlbmd0aFxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIiwiLmJ0bi1sZW5ndGgge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/recruiters/user-create/user-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/recruiters/user-create/user-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: Profile, UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/recruiters/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






class Profile {
    constructor(prId, prName) {
        this.prId = prId;
        this.prName = prName;
    }
}
let UserCreateComponent = class UserCreateComponent {
    constructor(route, messageService, userRest, router) {
        this.route = route;
        this.messageService = messageService;
        this.userRest = userRest;
        this.router = router;
        this.num1 = 52;
        this.num2 = 20;
        this.counter = 0;
        this.serverErrors = [];
    }
    ngOnInit() {
        this.userRest.getConsultantsList().subscribe((response) => {
            console.log(this.states = response.submissions);
            console.log(this.vendors = response.vendorslist);
            console.log(this.clients = response.clients);
        }, (error) => { console.log(error); });
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
    }
    ConvertToInt(val) {
        return parseFloat(val);
    }
    showModalDialogClient() {
        this.displayModalClient = true;
    }
    showModalDialog() {
        this.displayModal = true;
    }
    showCalculator() {
        this.calculatorModal = true;
    }
    showCalculator1() {
        this.calculatorModal1 = true;
    }
    showModalDialog1() {
        this.registerContact.addControl('cvid', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.registerForm.value.vid, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
        this.displayModal1 = true;
    }
    OnFocus() {
        if (this.cars.length > this.totalNumberOfCars) {
            this.cars.shift();
        }
    }
    OnBlur() {
        console.log("OnBlur");
    }
    test(event) {
        const charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedCar = this.cars.find(car => {
                return car.label.toLowerCase().includes(this.str.toLowerCase());
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
    }
    onChange(event) {
        this.crate = '';
        this.cemail = '';
        this.cmobile = '';
        this.ctechnology = '';
        console.log(event.value);
        this.userRest.editConsultant(event.value).subscribe((response) => {
            this.crate = response.user.rate;
            this.cemail = response.user.consultantEmail;
            this.cmobile = response.user.consultatMobileNumber;
            this.ctechnology = response.user.technology;
        }, (error) => console.log(error));
    }
    ChangeClients(event) {
        //   this.clients=[];
        /* this.userRest.editVenodr(event.value).subscribe(
           (response) => {
             this.contacts =  response.contacts;
           },
           (error) => console.log(error)
         ); */
    }
    ChangeVendor(event) {
        this.vmobile = '';
        this.vcname = '';
        this.contacts = [];
        this.userRest.editVenodr(event.value).subscribe((response) => {
            this.contacts = response.contacts;
        }, (error) => console.log(error));
    }
    ChangeContactsInner(value) {
        this.vmobile = '';
        this.vcname = '';
        const formData = new FormData();
        formData.append("index", value);
        this.userRest.getContactDetails(formData).subscribe((response) => {
            console.log(response);
            this.vmobile = response.contactDetails.contactMobile;
            this.vcname = response.contactDetails.contactName;
        }, (error) => console.log(error));
    }
    ChangeContacts(event) {
        this.vmobile = '';
        this.vcname = '';
        const formData = new FormData();
        formData.append("index", event.value);
        this.userRest.getContactDetails(formData).subscribe((response) => {
            console.log(response);
            this.vmobile = response.contactDetails.contactMobile;
            this.vcname = response.contactDetails.contactName;
        }, (error) => console.log(error));
    }
    vendorsUi(event) {
    }
    statesUi(event) {
        const charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedStates = this.states.find(car => {
                return car.label.toLowerCase().includes(this.str.toLowerCase());
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
    }
    get actualRate() { return this.registerForm.get('actualRate'); }
    get clientName() { return this.registerClient.get('clientName'); }
    get vendorStatus() { return this.registerForm.get('vendorStatus'); }
    get vendorComments() { return this.registerForm.get('vendorComments'); }
    get submissionRate() { return this.registerForm.get('submissionRate'); }
    get state() { return this.registerForm.get('state'); }
    get vendorDetailId() { return this.registerForm.get('vendorDetailId'); }
    get vid() { return this.registerForm.get('vid'); }
    get clientId() { return this.registerForm.get('clientId'); }
    get endClientLocation() { return this.registerForm.get('vid'); }
    get vendorCompanyName() { return this.registerVendor.get('vendorCompanyName'); }
    get contactName() { return this.registerVendor.get('contactName'); }
    get contactMobile() { return this.registerVendor.get('contactMobile'); }
    get contactEmail() { return this.registerVendor.get('contactEmail'); }
    get ext() { return this.registerVendor.get('ext'); }
    get vendorcontactName() { return this.registerContact.get('vendorcontactName'); }
    get vendorcontactMobile() { return this.registerContact.get('vendorcontactMobile'); }
    get vendorcontactEmail() { return this.registerContact.get('vendorcontactEmail'); }
    get vendorext() { return this.registerContact.get('vendorext'); }
    get scheduleDate() { return this.registerContact.get('scheduleDate'); }
    get timezone() { return this.registerContact.get('timezone'); }
    registerClientForm() {
        this.userRest.storeClient(this.registerClient).subscribe(response => {
            this.displayModalClient = false;
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Client Added' });
            this.clients = response.clients;
            this.selectedClients = response.clientId;
            // this.ChangeContactsInner(response.contactId)
            // this.router.navigate(['benchsales/list'])
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
    registerContactForm() {
        this.userRest.storeContact(this.registerContact).subscribe(response => {
            this.displayModal1 = false;
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Vendor Contact Details Added' });
            // this.selectedContacts = response.contactId;
            this.userRest.editVenodr(this.registerForm.value.vid).subscribe((response2) => {
                this.contacts = response2.contacts;
                this.selectedContacts = response.contactId;
                this.ChangeContactsInner(response.contactId);
            }, (error) => console.log(error));
            // this.ChangeContactsInner(response.contactId)
            // this.router.navigate(['benchsales/list'])
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
    registerVendorCompany() {
        console.log(this.registerVendor);
        this.userRest.storeVendor(this.registerVendor).subscribe(response => {
            console.log(response),
                console.log(response.vendorId);
            this.displayModal = false;
            this.selectedVendors = response.vendorId;
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Vendor Company Details Added' });
            this.userRest.getConsultantsList().subscribe((response1) => {
                // console.log(this.states = response.submissions);
                console.log(this.vendors = response1.vendorslist);
                // console.log( this.clients =  response1.clients);
            }, (error) => { console.log(error); });
            this.userRest.editVenodr(response.vendorId).subscribe((response2) => {
                this.contacts = response2.contacts;
                this.selectedContacts = response.contactId;
                this.ChangeContactsInner(response.contactId);
            }, (error) => console.log(error));
            // this.router.navigate(['benchsales/list'])
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
    registerUser() {
        console.log(this.registerForm);
        //formData.append('myImageToSend', this.imageFile.file);
        this.userRest.storeUser(this.registerForm).subscribe(response => {
            console.log(response),
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submission Completed' });
            this.router.navigate(['benchsales/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dd', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserCreateComponent.prototype, "dropdown", void 0);
UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-create',
        template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/recruiters/user-create/user-create.component.html"),
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
        styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/recruiters/user-create/user-create.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserCreateComponent);



/***/ }),

/***/ "./src/app/admin/recruiters/user-edit/user-create.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/recruiters/user-edit/user-create.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlY3J1aXRlcnMvdXNlci1lZGl0L3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/recruiters/user-edit/user-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/recruiters/user-edit/user-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: Profile, UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/recruiters/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






class Profile {
    constructor(prId, prName) {
        this.prId = prId;
        this.prName = prName;
    }
}
let UserEditComponent = class UserEditComponent {
    constructor(route, messageService, userRest, router) {
        this.route = route;
        this.messageService = messageService;
        this.userRest = userRest;
        this.router = router;
        this.counter = 0;
        this.serverErrors = [];
    }
    ngOnInit() {
        this.states = [
            { label: "Choose State", value: "" },
            { label: "Alabama", value: "Alabama" },
            { label: 'Alaska', value: 'Alaska' },
            { label: 'Alabama', value: 'Alabama' },
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
            'jobTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
            'jobVisaType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobLocation': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobExperience': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'jobTechnology': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'jobDescription': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'jobStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
        let id = this.route.snapshot.params.id;
        this.userRest.editUser(id).subscribe((response) => {
            this.registerForm.patchValue({
                'jobTitle': response.user.jobTitle,
                'jobVisaType': response.user.jobVisaType,
                'jobLocation': response.user.jobLocation,
                'jobExperience': response.user.jobExperience,
                'jobTechnology': response.user.jobTechnology,
                'jobDescription': response.user.jobDescription,
                'jobStatus': response.user.jobStatus,
            });
        }, (error) => console.log(error));
    }
    imagesPreviewResume(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (_event) => {
                this.imageFile = {
                    link: _event.target.result,
                    file: event.srcElement.files[0],
                    name: event.srcElement.files[0].name
                };
            };
            reader.readAsDataURL(event.target.files[0]);
            const formData = new FormData();
            formData.append("resume", event.target.files[0]);
            this.userRest.storeDocument(formData).subscribe((response) => {
                console.log(response);
                this.registerForm.patchValue({
                    resume: response.path,
                });
            }, (error) => { console.log(error); });
        }
    }
    imagesPreviewOtherDoc(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (_event) => {
                this.imageFile = {
                    link: _event.target.result,
                    file: event.srcElement.files[0],
                    name: event.srcElement.files[0].name
                };
            };
            reader.readAsDataURL(event.target.files[0]);
            const formData = new FormData();
            formData.append("otherDocument", event.target.files[0]);
            this.userRest.storeDocument(formData).subscribe((response) => {
                console.log(response);
                this.registerForm.patchValue({
                    otherDocument: response.path,
                });
            }, (error) => { console.log(error); });
        }
    }
    imagesPreviewWorkAuth(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (_event) => {
                this.imageFile = {
                    link: _event.target.result,
                    file: event.srcElement.files[0],
                    name: event.srcElement.files[0].name
                };
            };
            reader.readAsDataURL(event.target.files[0]);
            const formData = new FormData();
            formData.append("workAuthorization", event.target.files[0]);
            this.userRest.storeDocument(formData).subscribe((response) => {
                console.log(response);
                this.registerForm.patchValue({
                    workAuthorization: response.path,
                });
            }, (error) => { console.log(error); });
        }
    }
    OnFocus() {
        if (this.cars.length > this.totalNumberOfCars) {
            this.cars.shift();
        }
    }
    OnBlur() {
        console.log("OnBlur");
    }
    test(event) {
        const charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedCar = this.cars.find(car => {
                return car.label.toLowerCase().includes(this.str.toLowerCase());
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
    }
    statesUi(event) {
        const charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedStates = this.states.find(car => {
                return car.label.toLowerCase().includes(this.str.toLowerCase());
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
    }
    get jobTitle() { return this.registerForm.get('jobTitle'); }
    get jobDescription() { return this.registerForm.get('jobDescription'); }
    get jobTechnology() { return this.registerForm.get('jobTechnology'); }
    get jobExperience() { return this.registerForm.get('jobExperience'); }
    get jobLocation() { return this.registerForm.get('jobLocation'); }
    get jobVisaType() { return this.registerForm.get('jobVisaType'); }
    get jobStatus() { return this.registerForm.get('jobStatus'); }
    registerUser() {
        console.log(this.registerForm);
        //formData.append('myImageToSend', this.imageFile.file);
        this.userRest.storeUser(this.registerForm).subscribe(response => {
            console.log(response),
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Consultant is added' });
            this.router.navigate(['jobs/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
    updateUserDetails() {
        let id = this.route.snapshot.params.id;
        this.userRest.updateUser(this.registerForm, id).subscribe((response) => {
            console.log(response),
                this.router.navigate(['jobs/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        }, () => console.log('completed'));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dd', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserEditComponent.prototype, "dropdown", void 0);
UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-create',
        template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/recruiters/user-edit/user-create.component.html"),
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
        styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/recruiters/user-edit/user-create.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserEditComponent);



/***/ }),

/***/ "./src/app/admin/recruiters/user-index/user-index.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/recruiters/user-index/user-index.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlY3J1aXRlcnMvdXNlci1pbmRleC91c2VyLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/recruiters/user-index/user-index.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/recruiters/user-index/user-index.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIndexComponent", function() { return UserIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let UserIndexComponent = class UserIndexComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.userList = [];
        this.timeSheets = [];
        this.loading = true;
    }
    ngOnInit() {
    }
};
UserIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-index',
        template: __webpack_require__(/*! raw-loader!./user-index.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/recruiters/user-index/user-index.component.html"),
        styles: [__webpack_require__(/*! ./user-index.component.scss */ "./src/app/admin/recruiters/user-index/user-index.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserIndexComponent);



/***/ }),

/***/ "./src/app/admin/recruiters/user-list/user-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/recruiters/user-list/user-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVjcnVpdGVycy91c2VyLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXHNlcC1iYXJcXGFuZy9zcmNcXGFwcFxcYWRtaW5cXHJlY3J1aXRlcnNcXHVzZXItbGlzdFxcdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9yZWNydWl0ZXJzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtBQ0VGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcmVjcnVpdGVycy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNhYmxlLXRke1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi51aS1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUtdGQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnVpLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/recruiters/user-list/user-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/recruiters/user-list/user-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/recruiters/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);








const colors = {
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
let UserListComponent = class UserListComponent {
    constructor(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.timeSheets = [];
        this.confirmDropDatabaseDialogVisible = false;
        this.loading = true;
        this.serverErrors = [];
        this.clonedProducts = {};
    }
    showModalDialog(data) {
        console.log(data);
        this.displayModal = true;
        this.heading1 = data.consultant.consultatName + " " + data.consultant.consultantLastName + " submiting to " + data.vendorCompanyName;
        this.submissionId = data.vendorId;
        this.registerVendor.patchValue({
            vendorComments: data.vendorComments,
            vendorStatus: data.vendorStatus,
            timezone: data.timezone,
            scheduleDate: this.formatDate(data.scheduleDate),
        });
    }
    showModalDialog1(data) {
        this.displayModal1 = true;
        this.comment = data;
    }
    ngOnInit() {
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'vendorStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'vendorComments': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'scheduleDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'timezone': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.userRest.getConsultants().subscribe((response) => { console.log(this.timeSheets = response.submissions); this.loading = false; }, (error) => { console.log(error); });
        this.frozenCols = [
            { field: 'consultatName', header: 'Name' },
        ];
        this.scrollableCols = [
            { field: 'user_details.name', header: 'Created By', width: '20%', editable: false },
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
    }
    onActivityChange(event) {
        const value = event.target.value;
        if (value && value.trim().length) {
            const activity = parseInt(value);
            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    }
    onRowEditInit(product) {
        console.log(product);
        this.clonedProducts[product.reportId] = Object.assign({}, product);
    }
    onRowEditSave(product, index) {
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
    }
    onRowEditCancel(product, index) {
        this.timeSheets[index] = this.clonedProducts[product.reportId];
        delete this.timeSheets[product.reportId];
    }
    onDateSelect(value) {
        this.table.filter(this.formatDate(value), 'created_at', 'equals');
    }
    formatDate(date) {
        if (date) {
            const d = new Date(date);
            let month = '' + (d.getMonth() + 1);
            let day = '' + d.getDate();
            const year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            return [year, month, day].join('-');
        }
        else {
            const d = new Date();
            let month = '' + (d.getMonth() + 1);
            let day = '' + d.getDate();
            const year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            return [year, month, day].join('-');
        }
    }
    onRepresentativeChange(event) {
        if (event.value) {
            console.log(event.value);
            this.table.filter(event.value, 'technology', 'in');
        }
    }
    dropDatabase(event, index) {
        if (event.defaultPrevented)
            return;
        event.preventDefault();
        this.confirmation.confirm({
            key: 'confirm-drop-database',
            message: 'Are you sure to Aprove for Hotlist',
            accept: () => { this._dropDatabase(index); },
        });
    }
    _dropDatabase(index) {
        const formData = new FormData();
        formData.append("index", index);
        console.log(formData);
        this.userRest.statusChangeConsultant(formData).subscribe((response) => {
            console.log(response);
            this.loading = false;
            this.timeSheets = response.timesheet;
        }, (error) => { console.log(error); });
    }
    download(event, url) {
        window.open('http://localhost:8000/storage/' + url);
    }
    editUser(id) {
        this.router.navigate(['jobs/edit', id]);
    }
    getColor(status, adminStatus) {
        if (adminStatus == "A") {
            return "#d4edda";
        }
        else if (status == "not interested") {
            return "#f8d7da";
        }
    }
    get vendorStatus() { return this.registerVendor.get('vendorStatus'); }
    get vendorComments() { return this.registerVendor.get('vendorComments'); }
    get scheduleDate() { return this.registerVendor.get('scheduleDate'); }
    get timezone() { return this.registerVendor.get('timezone'); }
    registerUser(submissionId) {
        console.log(this.registerVendor);
        this.userRest.updateSubmission(this.registerVendor, submissionId).subscribe(response => {
            this.displayModal = false;
            console.log(response),
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submision Updated' });
            this.timeSheets = response.submissions;
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
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
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
        template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/recruiters/user-list/user-list.component.html"),
        styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/recruiters/user-list/user-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserListComponent);



/***/ }),

/***/ "./src/app/admin/recruiters/user-rest.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/recruiters/user-rest.service.ts ***!
  \*******************************************************/
/*! exports provided: UserRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRestService", function() { return UserRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserRestService = class UserRestService {
    constructor(http) {
        this.http = http;
        this.users = [];
    }
    getConsultants() {
        return this.http.get('https://portal.webmobilez.com/public/api/submissions/');
    }
    storeUser(form) {
        return this.http.post('https://portal.webmobilez.com/public/api/submissions', form.value);
    }
    updateSubmission(form, id) {
        return this.http.put('https://portal.webmobilez.com/public/api/submissions/' + id, form.value);
    }
    storeVendor(form) {
        return this.http.post('https://portal.webmobilez.com/public/api/vendorlist', form.value);
    }
    storeContact(form) {
        return this.http.post('https://portal.webmobilez.com/public/api/contactslist', form.value);
    }
    storeClient(form) {
        return this.http.post('https://portal.webmobilez.com/public/api/clients', form.value);
    }
    statusChangeConsultant(index) {
        return this.http.post('https://portal.webmobilez.com/public/api/status-consultant', index);
    }
    getConsultantsList() {
        return this.http.get('https://portal.webmobilez.com/public/api/getConsultantsList/');
    }
    editUser(id) {
        return this.http.get('https://portal.webmobilez.com/public/api/jobs/' + id);
    }
    editVenodr(id) {
        return this.http.get('https://portal.webmobilez.com/public/api/contacts/' + id);
    }
    editConsultant(id) {
        return this.http.get('https://portal.webmobilez.com/public/api/store-consultant/' + id);
    }
    updateUser(form, id) {
        return this.http.put('https://portal.webmobilez.com/public/api/jobs/' + id, form.value);
    }
    storeDocument(document) {
        return this.http.post('https://portal.webmobilez.com/public/api/saveDocument', document);
    }
    getContactDetails(index) {
        return this.http.post('https://portal.webmobilez.com/public/api/contactsDetails', index);
    }
};
UserRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserRestService);



/***/ }),

/***/ "./src/app/admin/recruiters/user-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/recruiters/user-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/recruiters/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/recruiters/user-list/user-list.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/recruiters/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/recruiters/user-edit/user-edit.component.ts");







const routes = [
    // { path: 'list', component: UserListComponent, outlet: 'users' },
    {
        path: '',
        component: _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__["UserIndexComponent"],
        children: [
            { path: 'list', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
            { path: 'create', component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"] },
            { path: 'edit/:id', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"] },
        ]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/admin/recruiters/user.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/recruiters/user.module.ts ***!
  \*************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/recruiters/user-routing.module.ts");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/recruiters/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/recruiters/user-list/user-list.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/recruiters/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/recruiters/user-edit/user-edit.component.ts");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-rest.service */ "./src/app/admin/recruiters/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
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
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/inplace */ "./node_modules/primeng/inplace.js");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_inplace__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _field10_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../field10.pipe */ "./src/app/field10.pipe.ts");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/admin/recruiters/calculator/calculator.component.ts");





























let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__["UserIndexComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__["UserCreateComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"], _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_27__["CalculatorComponent"], _field10_pipe__WEBPACK_IMPORTED_MODULE_25__["FieldPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__["MultiSelectModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_13__["SliderModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__["MultiSelectModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__["ContextMenuModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_16__["ButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__["ConfirmDialogModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19__["TabMenuModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__["FileUploadModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_22__["NgxDropzoneModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_24__["InplaceModule"]
        ],
        providers: [
            _user_rest_service__WEBPACK_IMPORTED_MODULE_8__["UserRestService"]
        ]
    })
], UserModule);



/***/ }),

/***/ "./src/app/field10.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/field10.pipe.ts ***!
  \*********************************/
/*! exports provided: FieldPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldPipe", function() { return FieldPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FieldPipe = class FieldPipe {
    /**
     *
     */
    constructor() { }
    transform(value, ...args) {
        const column = args[0];
        let result = value;
        // addressModel.City.Name
        column.field.split(".").forEach(f => (result = result[f]));
        return result ? result : '-';
    }
};
FieldPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "field"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FieldPipe);



/***/ })

}]);
//# sourceMappingURL=admin-recruiters-user-module-es2015.js.map