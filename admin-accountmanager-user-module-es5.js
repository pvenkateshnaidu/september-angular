(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-accountmanager-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/accountmanager/user-create/user-create.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/accountmanager/user-create/user-create.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Add Job Requirement </h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\" enctype=\"multipart/form-data\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n\n                <label>Job Title:</label>\n                <input type=\"text\" formControlName=\"jobTitle\" class=\"form-control\" placeholder=\"Job Title\">\n                <div *ngIf=\"jobTitle.invalid && (jobTitle.dirty || jobTitle.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobTitle.errors?.required\">\n                    Title is required.\n                  </div>\n                  <div *ngIf=\"jobTitle.errors?.minlength\">\n                    Title must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobTitle }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Experience:</label>\n                <input type=\"number\" formControlName=\"jobExperience\" class=\"form-control\" placeholder=\"Exp\"\n                  required>\n                <div *ngIf=\"jobExperience.invalid && (jobExperience.dirty || jobExperience.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobExperience.errors?.required\">\n                    Experience is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobExperience }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <label>Technology</label>\n              <p-dropdown #dd [options]=\"cars\" [(ngModel)]=\"selectedCar\" formControlName=\"jobTechnology\"\n                [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"test($event)\">\n              </p-dropdown>\n              <div *ngIf=\"jobTechnology.invalid && (jobTechnology.dirty || jobTechnology.touched)\" class=\"form-text text-muted\">\n                <div *ngIf=\"jobTechnology.errors?.required\">\n                  Technology is required.\n                </div>\n\n              </div>\n              <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobTechnology }}</small>\n             </div>\n             <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Visa Type:</label>\n                <select class=\"form-control\" formControlName=\"jobVisaType\">\n                  <option value=\"null\" disabled>Choose visaType</option>\n                  <option value=\"H4 EAD\">H4 EAD\n                  </option>\n                  <option value=\"H1B-Transfer\">H1B-Transfer\n                  </option>\n                  <option value=\"CPT\">CPT\n                  </option>\n                  <option value=\"OPT\">OPT\n                  </option>\n                  <option value=\"H1-B\">H1-B\n                  </option>\n                  <option value=\"GC-EAD\">GC-EAD\n                  </option>\n                  <option value=\"Green Card\">Green Card\n                  </option>\n                  <option value=\"US Citizen\">US Citizen\n                  </option>\n\n                </select>\n                <div *ngIf=\"jobVisaType.invalid && (jobVisaType.dirty || jobVisaType.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"jobVisaType.errors?.required\">\n                    Visa Type is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobVisaType }}</small>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Work Type:</label>\n                <select class=\"form-control\" formControlName=\"workType\">\n                  <option value=\"null\" disabled>Choose Type</option>\n                  <option value=\"Remote\">Remote\n                  </option>\n                  <option value=\"In person\">In person\n                  </option>\n                </select>\n                <div *ngIf=\"workType.invalid && (workType.dirty || workType.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"workType.errors?.required\">\n                    Work Type is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.workType }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Rate:</label>\n                <input type=\"number\" formControlName=\"rate\" class=\"form-control\" placeholder=\"Rate\"\n                required>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"rate.invalid && (mainRequirement.dirty || rate.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"rate.errors?.required\">\n                    Rate is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.rate }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Duration (Years):</label>\n                <input type=\"number\" formControlName=\"duration\" class=\"form-control\" placeholder=\"Duration\"\n                required>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"duration.invalid && (duration.dirty || duration.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"duration.errors?.required\">\n                    Duration is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.duration }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Client:</label>\n                <input type=\"text\" formControlName=\"client\" class=\"form-control\" placeholder=\"Client\"\n                required>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"client.invalid && (client.dirty || client.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"client.errors?.required\">\n                    Client is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.client }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>Main Requirement:</label>\n                <input type=\"text\" formControlName=\"mainRequirement\" class=\"form-control\" placeholder=\"Main Requirement\"\n                required>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"mainRequirement.invalid && (mainRequirement.dirty || mainRequirement.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"mainRequirement.errors?.required\">\n                    Main Requirement is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.mainRequirement }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Location:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"jobLocation\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"jobLocation.invalid && (jobLocation.dirty || jobLocation.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"jobLocation.errors?.required\">\n                    Location is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobLocation }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Status</label>\n                <select class=\"form-control\" formControlName=\"jobStatus\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"A\">Active</option>\n                  <option value=\"I\">InActive</option>\n                </select>\n                <div *ngIf=\"jobStatus.invalid && (jobStatus.dirty || jobStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobStatus.errors?.required\">\n                    Status is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobStatus }}</small>\n\n              </div>\n            </div>\n\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Job Description</label>\n                <angular-editor formControlName=\"jobDescription\" [config]=\"config\"></angular-editor>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Job Responsibilities:</label>\n                <angular-editor formControlName=\"jobResponsibility\" [config]=\"config\"></angular-editor>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Submit\n                Job</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/accountmanager/user-edit/user-create.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/accountmanager/user-edit/user-create.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Edit Job Requirement </h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"updateUserDetails()\" enctype=\"multipart/form-data\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n\n                <label>Job Title:</label>\n                <input type=\"text\" formControlName=\"jobTitle\" class=\"form-control\" placeholder=\"Job Title\">\n                <div *ngIf=\"jobTitle.invalid && (jobTitle.dirty || jobTitle.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobTitle.errors?.required\">\n                    Title is required.\n                  </div>\n                  <div *ngIf=\"jobTitle.errors?.minlength\">\n                    Title must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobTitle }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Experience:</label>\n                <input type=\"number\" formControlName=\"jobExperience\" class=\"form-control\" placeholder=\"Exp\"\n                  required>\n                <div *ngIf=\"jobExperience.invalid && (jobExperience.dirty || jobExperience.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobExperience.errors?.required\">\n                    Experience is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobExperience }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <label>Technology</label>\n              <p-dropdown #dd [options]=\"cars\" [(ngModel)]=\"selectedCar\" formControlName=\"jobTechnology\"\n                [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"test($event)\">\n              </p-dropdown>\n              <div *ngIf=\"jobTechnology.invalid && (jobTechnology.dirty || jobTechnology.touched)\" class=\"form-text text-muted\">\n                <div *ngIf=\"jobTechnology.errors?.required\">\n                  Technology is required.\n                </div>\n\n              </div>\n              <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobTechnology }}</small>\n             </div>\n             <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Visa Type:</label>\n                <select class=\"form-control\" formControlName=\"jobVisaType\">\n                  <option value=\"null\" disabled>Choose visaType</option>\n                  <option value=\"H4 EAD\">H4 EAD\n                  </option>\n                  <option value=\"H1B-Transfer\">H1B-Transfer\n                  </option>\n                  <option value=\"CPT\">CPT\n                  </option>\n                  <option value=\"OPT\">OPT\n                  </option>\n                  <option value=\"H1-B\">H1-B\n                  </option>\n                  <option value=\"GC-EAD\">GC-EAD\n                  </option>\n                  <option value=\"Green Card\">Green Card\n                  </option>\n                  <option value=\"US Citizen\">US Citizen\n                  </option>\n\n                </select>\n                <div *ngIf=\"jobVisaType.invalid && (jobVisaType.dirty || jobVisaType.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"jobVisaType.errors?.required\">\n                    Visa Type is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobVisaType }}</small>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Work Type:</label>\n                <select class=\"form-control\" formControlName=\"workType\">\n                  <option value=\"null\" disabled>Choose Type</option>\n                  <option value=\"Remote\">Remote\n                  </option>\n                  <option value=\"In person\">In person\n                  </option>\n                </select>\n                <div *ngIf=\"workType.invalid && (workType.dirty || workType.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"workType.errors?.required\">\n                    Work Type is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.workType }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Rate:</label>\n                <input type=\"number\" formControlName=\"rate\" class=\"form-control\" placeholder=\"Rate\"\n                required>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"rate.invalid && (mainRequirement.dirty || rate.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"rate.errors?.required\">\n                    Rate is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.rate }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Duration (Years):</label>\n                <input type=\"number\" formControlName=\"duration\" class=\"form-control\" placeholder=\"Duration\"\n                required>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"duration.invalid && (duration.dirty || duration.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"duration.errors?.required\">\n                    Duration is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.duration }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Client:</label>\n                <input type=\"text\" formControlName=\"client\" class=\"form-control\" placeholder=\"Client\"\n                required>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"client.invalid && (client.dirty || client.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"client.errors?.required\">\n                    Client is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.client }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>Main Requirement:</label>\n                <input type=\"text\" formControlName=\"mainRequirement\" class=\"form-control\" placeholder=\"Main Requirement\"\n                required>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"mainRequirement.invalid && (mainRequirement.dirty || mainRequirement.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"mainRequirement.errors?.required\">\n                    Main Requirement is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.mainRequirement }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Location:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"jobLocation\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"jobLocation.invalid && (jobLocation.dirty || jobLocation.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"jobLocation.errors?.required\">\n                    Location is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobLocation }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Status</label>\n                <select class=\"form-control\" formControlName=\"jobStatus\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"A\">Active</option>\n                  <option value=\"I\">InActive</option>\n                </select>\n                <div *ngIf=\"jobStatus.invalid && (jobStatus.dirty || jobStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobStatus.errors?.required\">\n                    Status is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobStatus }}</small>\n\n              </div>\n            </div>\n\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Job Description</label>\n                <angular-editor formControlName=\"jobDescription\" [config]=\"config\"></angular-editor>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Job Responsibilities:</label>\n                <angular-editor formControlName=\"jobResponsibility\" [config]=\"config\"></angular-editor>\n\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Update\n                Job</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/accountmanager/user-index/user-index.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/accountmanager/user-index/user-index.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/accountmanager/user-list/user-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/accountmanager/user-list/user-list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"> Jobs List <a routerLink=\"/jobs/create\" class=\"btn btn-primary\">\r\n    Add Job Requirment\r\n  </a></h4>\r\n\r\n\r\n<!--\r\n<p-table #dt [responsive]=\"true\" [value]=\"timeSheets\" [frozenColumns]=\"frozenCols\" [scrollable]=\"true\"\r\n  scrollHeight=\"200px\" appendTo=\"body\" filterMatchMode=\"equals\" columnResizeMode=\"expand\" dataKey=\"id\" [rows]=\"10\"\r\n  [showCurrentPageReport]=\"true\" tableStyleClass=\"fixtable\" [rowsPerPageOptions]=\"[5,10,20,30]\" [loading]=\"loading\"\r\n  styleClass=\"p-datatable-customers\" [paginator]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['created_at','consultatName','consultantEmail','consultatMobileNumber','experience','rate','reportStatus']\">\r\n\r\n  <ng-template pTemplate=\"header\">\r\n    <tr>\r\n\r\n      <th>Consultant Name</th>\r\n      <th>Created At</th>\r\n      <th>Email</th>\r\n      <th>Phone number</th>\r\n\r\n      <th>Exp </th>\r\n      <th>Rate</th>\r\n      <th>Status</th>\r\n      <th>Action</th>\r\n\r\n    </tr>\r\n    <tr>\r\n\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <p-calendar (onSelect)=\"onDateSelect($event)\" (onClearClick)=\"dt.filter('', 'created_at', 'equals')\"\r\n          [showButtonBar]=\"true\" [style]=\"{'width':'300px'}\" styleClass=\"p-column-filter\" placeholder=\"Date\"\r\n          [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\"></p-calendar>\r\n      </th>\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultantEmail', 'startsWith')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'startsWith')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"exp\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'reportStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-customer>\r\n    <tr>\r\n\r\n\r\n      <td>\r\n        {{customer.consultatName}}\r\n      </td>\r\n      <td>\r\n        {{customer.created_at | date}}\r\n      </td>\r\n      <td>\r\n        {{customer.consultantEmail}}\r\n      </td>\r\n      <td>\r\n        {{customer.consultatMobileNumber}}\r\n      </td>\r\n\r\n      <td>\r\n        {{customer.experience}}\r\n      </td>\r\n      <td>\r\n        {{customer.rate}}\r\n      </td>\r\n      <td>\r\n        {{customer.reportStatus}}\r\n      </td>\r\n      <td>\r\n        -\r\n      </td>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"emptymessage\">\r\n    <tr>\r\n      <td colspan=\"6\">No Consultants found.</td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table> -->\r\n<!--\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n          <h4 class=\"remove-margin\"> Timesheet List </h4>\r\n    <div class=\"card\">\r\n\r\n      <div class=\"card-body\">\r\n        <p-table #dt [value]=\"timeSheets\" dataKey=\"id\"\r\n        [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,20]\" [loading]=\"loading\" styleClass=\"p-datatable-customers\"\r\n        [paginator]=\"false\"\r\n        [filterDelay]=\"0\" [globalFilterFields]=\"['fromDate','duration','assignment','serviceCode']\">\r\n\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Employee</th>\r\n                <th>Date</th>\r\n                <th>Duration</th>\r\n                <th>Assignment</th>\r\n                <th>Service Code</th>\r\n            </tr>\r\n\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-customer>\r\n            <tr>\r\n              <td>\r\n                {{customer.user_details.name}}\r\n              </td>\r\n                <td>\r\n                    {{customer.fromDate | date}}\r\n                </td>\r\n                <td>\r\n                   {{customer.duration}}\r\n                </td>\r\n                <td>\r\n                  {{customer.assignment}}\r\n               </td>\r\n               <td>\r\n                {{customer.serviceCode}}\r\n             </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <tr>\r\n                <td colspan=\"6\">No Users found.</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p-inplace>\r\n  <ng-template pTemplate=\"display\">\r\n    Click to Edit\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n    <input type=\"text\" value=\"PrimeNG\" pInputText>\r\n  </ng-template>\r\n</p-inplace>\r\n\r\n<p-table #dt [value]=\"timeSheets\" dataKey=\"id\"\r\n        [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\" styleClass=\"p-datatable-customers\"\r\n        [paginator]=\"true\" currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\"\r\n        [filterDelay]=\"0\" [globalFilterFields]=\"['consultatName']\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div class=\"table-header\">\r\n                List of Consultants\r\n                <span class=\"p-input-icon-left\">\r\n                    <i class=\"pi pi-search\"></i>\r\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" placeholder=\"Global Search\" />\r\n                </span>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Name</th>\r\n\r\n            </tr>\r\n            <tr>\r\n                <th>\r\n                    <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'startsWith')\" placeholder=\"Search by Name\" class=\"p-column-filter\">\r\n                </th>\r\n\r\n\r\n\r\n\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-customer>\r\n            <tr>\r\n                <td>\r\n                    {{customer.consultatName}}\r\n                </td>\r\n\r\n\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <tr>\r\n                <td colspan=\"6\">No Consultants found.</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n {{rowData|field:col}}\r\n  -->\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" [autoLayout]=\"true\" [value]=\"timeSheets\" [scrollable]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"\r\n  [reorderableColumns]=\"true\" autoLayout=\"true\" dataKey=\"reportId\" editMode=\"row\" [paginator]=\"true\" [rows]=\"10\"\r\n  [showCurrentPageReport]=\"true\"\r\n  [rowsPerPageOptions]=\"[10,25,50]\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Action</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'jobTitle', 'startsWith')\"\r\n          placeholder=\"Title\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'jobTechnology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'jobExperience', 'startsWith')\"\r\n          placeholder=\"Experience\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'jobLocation', 'startsWith')\"\r\n          placeholder=\"Location\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'jobVisaType', 'startsWith')\"\r\n          placeholder=\"VisaType\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'jobStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.reportStatus,rowData.adminStatus)}\">\r\n      <td style=\"text-align:center\">\r\n        <a (click)=\"editUser(rowData.jobId)\" class=\"btn btn-warning btn-sm\">Edit</a>\r\n        <a (click)=\"showModalDialog(rowData)\" class=\"btn btn-primary btn-sm\">View</a>\r\n      </td>\r\n      <td *ngFor=\"let col of columns\">\r\n        <div *ngIf=\"!col.editable\">\r\n          {{rowData|field:col}}\r\n        </div>\r\n        <p-cellEditor *ngIf=\"col.editable\">\r\n          <ng-template pTemplate=\"input\">\r\n            <div *ngIf=\"rowData|field:col as variable\">\r\n              <input pInputText type=\"text\" [(ngModel)]=\"variable\" required>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n            {{rowData|field:col}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\"\r\n  [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n<p-dialog header=\"View Job Details\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '75vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"true\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Job Title :{{jobTitle}}</label><br>\r\n        <label>Job Location : {{jobLocation}}</label><br>\r\n        <label>Client : {{client}}</label><br>\r\n        <label>Duration : {{duration}} Years</label><br>\r\n        <label>Work Type : {{workType}}</label><br>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Description:</label><br>\r\n        <div [innerHTML]=\"jobDescription\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Responsibilities:</label><br>\r\n        <div [innerHTML]=\"jobResponsibility\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/admin/accountmanager/user-create/user-create.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/accountmanager/user-create/user-create.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FjY291bnRtYW5hZ2VyL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/accountmanager/user-create/user-create.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/accountmanager/user-create/user-create.component.ts ***!
  \***************************************************************************/
/*! exports provided: Profile, UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/accountmanager/user-rest.service.ts");
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

var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(route, messageService, userRest, router) {
        this.route = route;
        this.messageService = messageService;
        this.userRest = userRest;
        this.router = router;
        this.htmlContent = '';
        this.config = {
            editable: true,
            spellcheck: true,
            height: '15rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            defaultParagraphSeparator: 'p',
            defaultFontName: 'Arial',
            toolbarHiddenButtons: [
                ['bold']
            ],
            customClasses: [
                {
                    name: "quote",
                    class: "quote",
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1",
                },
            ]
        };
        this.counter = 0;
        this.serverErrors = [];
        this.text1 = '<span style="color: red">red text</span>' + '<br>' +
            '<span style="text-decoration: line-through">crossed out text</span>' + '<br>' +
            '<span style="text-decoration: overline">overline text</span>' + '<br>' +
            '<span style="text-decoration: underline">underline text</span>';
    }
    UserCreateComponent.prototype.ngOnInit = function () {
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
            'jobTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
            'jobVisaType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobLocation': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobExperience': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobTechnology': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobDescription': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'workType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'mainRequirement': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'duration': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'client': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobResponsibility': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    UserCreateComponent.prototype.imagesPreviewResume = function (event) {
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
    UserCreateComponent.prototype.imagesPreviewOtherDoc = function (event) {
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
    UserCreateComponent.prototype.imagesPreviewWorkAuth = function (event) {
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
    UserCreateComponent.prototype.OnFocus = function () {
        if (this.cars.length > this.totalNumberOfCars) {
            this.cars.shift();
        }
    };
    UserCreateComponent.prototype.OnBlur = function () {
        console.log("OnBlur");
    };
    UserCreateComponent.prototype.test = function (event) {
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
    UserCreateComponent.prototype.statesUi = function (event) {
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
    Object.defineProperty(UserCreateComponent.prototype, "jobTitle", {
        get: function () { return this.registerForm.get('jobTitle'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "jobDescription", {
        get: function () { return this.registerForm.get('jobDescription'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "jobTechnology", {
        get: function () { return this.registerForm.get('jobTechnology'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "jobExperience", {
        get: function () { return this.registerForm.get('jobExperience'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "jobLocation", {
        get: function () { return this.registerForm.get('jobLocation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "jobVisaType", {
        get: function () { return this.registerForm.get('jobVisaType'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "jobStatus", {
        get: function () { return this.registerForm.get('jobStatus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "workType", {
        get: function () { return this.registerForm.get('workType'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "mainRequirement", {
        get: function () { return this.registerForm.get('mainRequirement'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "rate", {
        get: function () { return this.registerForm.get('rate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "duration", {
        get: function () { return this.registerForm.get('duration'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "client", {
        get: function () { return this.registerForm.get('duration'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "jobResponsibility", {
        get: function () { return this.registerForm.get('jobResponsibility'); },
        enumerable: true,
        configurable: true
    });
    UserCreateComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registerForm);
        //formData.append('myImageToSend', this.imageFile.file);
        this.userRest.storeUser(this.registerForm).subscribe(function (response) {
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Job is added' });
            _this.router.navigate(['jobs/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dd', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserCreateComponent.prototype, "dropdown", void 0);
    UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/accountmanager/user-create/user-create.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/accountmanager/user-create/user-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/accountmanager/user-edit/user-create.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/accountmanager/user-edit/user-create.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FjY291bnRtYW5hZ2VyL3VzZXItZWRpdC91c2VyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/accountmanager/user-edit/user-edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/accountmanager/user-edit/user-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: Profile, UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/accountmanager/user-rest.service.ts");
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

var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(route, messageService, userRest, router) {
        this.route = route;
        this.messageService = messageService;
        this.userRest = userRest;
        this.router = router;
        this.htmlContent = '';
        this.config = {
            editable: true,
            spellcheck: true,
            height: '15rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            defaultParagraphSeparator: 'p',
            defaultFontName: 'Arial',
            toolbarHiddenButtons: [
                ['bold']
            ],
            customClasses: [
                {
                    name: "quote",
                    class: "quote",
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1",
                },
            ]
        };
        this.counter = 0;
        this.serverErrors = [];
    }
    UserEditComponent.prototype.ngOnInit = function () {
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
            'jobTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
            'jobVisaType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobLocation': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobExperience': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobTechnology': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobDescription': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'workType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'mainRequirement': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'duration': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'client': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobResponsibility': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        var id = this.route.snapshot.params.id;
        this.userRest.editUser(id).subscribe(function (response) {
            _this.registerForm.patchValue({
                'jobTitle': response.user.jobTitle,
                'jobVisaType': response.user.jobVisaType,
                'jobLocation': response.user.jobLocation,
                'jobExperience': response.user.jobExperience,
                'jobTechnology': response.user.jobTechnology,
                'jobDescription': response.user.jobDescription,
                'jobStatus': response.user.jobStatus,
                'workType': response.user.workType,
                'mainRequirement': response.user.mainRequirement,
                'rate': response.user.rate,
                'duration': response.user.duration,
                'client': response.user.client,
                'jobResponsibility': response.user.jobResponsibility,
            });
        }, function (error) { return console.log(error); });
    };
    UserEditComponent.prototype.imagesPreviewResume = function (event) {
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
    UserEditComponent.prototype.imagesPreviewOtherDoc = function (event) {
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
    UserEditComponent.prototype.imagesPreviewWorkAuth = function (event) {
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
    UserEditComponent.prototype.OnFocus = function () {
        if (this.cars.length > this.totalNumberOfCars) {
            this.cars.shift();
        }
    };
    UserEditComponent.prototype.OnBlur = function () {
        console.log("OnBlur");
    };
    UserEditComponent.prototype.test = function (event) {
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
    UserEditComponent.prototype.statesUi = function (event) {
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
    Object.defineProperty(UserEditComponent.prototype, "jobTitle", {
        get: function () { return this.registerForm.get('jobTitle'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobDescription", {
        get: function () { return this.registerForm.get('jobDescription'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobTechnology", {
        get: function () { return this.registerForm.get('jobTechnology'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobExperience", {
        get: function () { return this.registerForm.get('jobExperience'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobLocation", {
        get: function () { return this.registerForm.get('jobLocation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobVisaType", {
        get: function () { return this.registerForm.get('jobVisaType'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobStatus", {
        get: function () { return this.registerForm.get('jobStatus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "workType", {
        get: function () { return this.registerForm.get('workType'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "mainRequirement", {
        get: function () { return this.registerForm.get('mainRequirement'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "rate", {
        get: function () { return this.registerForm.get('rate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "duration", {
        get: function () { return this.registerForm.get('duration'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "client", {
        get: function () { return this.registerForm.get('duration'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobResponsibility", {
        get: function () { return this.registerForm.get('jobResponsibility'); },
        enumerable: true,
        configurable: true
    });
    UserEditComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registerForm);
        //formData.append('myImageToSend', this.imageFile.file);
        this.userRest.storeUser(this.registerForm).subscribe(function (response) {
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Consultant is added' });
            _this.router.navigate(['jobs/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    UserEditComponent.prototype.updateUserDetails = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.userRest.updateUser(this.registerForm, id).subscribe(function (response) {
            console.log(response),
                _this.router.navigate(['jobs/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        }, function () { return console.log('completed'); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dd', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserEditComponent.prototype, "dropdown", void 0);
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/accountmanager/user-edit/user-create.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/accountmanager/user-edit/user-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/accountmanager/user-index/user-index.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/accountmanager/user-index/user-index.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FjY291bnRtYW5hZ2VyL3VzZXItaW5kZXgvdXNlci1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/accountmanager/user-index/user-index.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/accountmanager/user-index/user-index.component.ts ***!
  \*************************************************************************/
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
            template: __webpack_require__(/*! raw-loader!./user-index.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/accountmanager/user-index/user-index.component.html"),
            styles: [__webpack_require__(/*! ./user-index.component.scss */ "./src/app/admin/accountmanager/user-index/user-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserIndexComponent);
    return UserIndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/accountmanager/user-list/user-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/accountmanager/user-list/user-list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWNjb3VudG1hbmFnZXIvdXNlci1saXN0L0M6XFx4YW1wcFxcaHRkb2NzXFxzZXAtYmFyXFxhbmcvc3JjXFxhcHBcXGFkbWluXFxhY2NvdW50bWFuYWdlclxcdXNlci1saXN0XFx1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FjY291bnRtYW5hZ2VyL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtBQ0VGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWNjb3VudG1hbmFnZXIvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4uZGlzYWJsZS10ZHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4udWktYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNhYmxlLXRkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi51aS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/accountmanager/user-list/user-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/accountmanager/user-list/user-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/accountmanager/user-rest.service.ts");
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
    function UserListComponent(confirmation, fb, messageService, route, userRest, router) {
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
    UserListComponent.prototype.showModalDialog = function (data) {
        this.jobTitle = data.jobTitle;
        this.jobLocation = data.jobLocation;
        this.client = data.client;
        this.workType = data.workType;
        this.jobResponsibility = data.jobResponsibility;
        this.jobDescription = data.jobDescription;
        this.duration = data.duration;
        this.displayModal = true;
    };
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getConsultants().subscribe(function (response) { console.log(_this.timeSheets = response.jobs); _this.loading = false; }, function (error) { console.log(error); });
        this.frozenCols = [
            { field: 'consultatName', header: 'Name' },
        ];
        this.scrollableCols = [
            { field: 'user_details.name', header: 'Created By', width: '20%', editable: false },
            { field: 'jobTitle', header: 'Job Title', width: '20%', editable: true },
            //  { field: 'jobDescription', header: 'DESC', width: '40%',editable: true },
            { field: 'jobTechnology', header: 'Technology', width: '20%', editable: true },
            { field: 'jobExperience', header: 'Exp', width: '20%', editable: true },
            { field: 'jobLocation', header: 'Location', width: '20%', editable: false },
            { field: 'jobVisaType', header: 'Visa Type', width: '20%', editable: false },
            { field: 'jobStatus', header: 'Status', width: '20%', editable: false },
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
    UserListComponent.prototype.onActivityChange = function (event) {
        var value = event.target.value;
        if (value && value.trim().length) {
            var activity = parseInt(value);
            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    };
    UserListComponent.prototype.onRowEditInit = function (product) {
        console.log(product);
        this.clonedProducts[product.reportId] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, product);
    };
    UserListComponent.prototype.onRowEditSave = function (product, index) {
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
    UserListComponent.prototype.onRowEditCancel = function (product, index) {
        this.timeSheets[index] = this.clonedProducts[product.reportId];
        delete this.timeSheets[product.reportId];
    };
    UserListComponent.prototype.onDateSelect = function (value) {
        this.table.filter(this.formatDate(value), 'created_at', 'equals');
    };
    UserListComponent.prototype.formatDate = function (date) {
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
    UserListComponent.prototype.onRepresentativeChange = function (event) {
        if (event.value) {
            console.log(event.value);
            this.table.filter(event.value, 'technology', 'in');
        }
    };
    UserListComponent.prototype.dropDatabase = function (event, index) {
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
    UserListComponent.prototype._dropDatabase = function (index) {
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
    UserListComponent.prototype.download = function (event, url) {
        window.open('https://portal.webmobilez.com/public/storage/' + url);
    };
    UserListComponent.prototype.editUser = function (id) {
        this.router.navigate(['jobs/edit', id]);
    };
    UserListComponent.prototype.getColor = function (status, adminStatus) {
        if (adminStatus == "A") {
            return "#d4edda";
        }
        else if (status == "not interested") {
            return "#f8d7da";
        }
    };
    UserListComponent.prototype.viewUser = function (id) {
        alert();
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
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/accountmanager/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/accountmanager/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/admin/accountmanager/user-rest.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/accountmanager/user-rest.service.ts ***!
  \***********************************************************/
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
    UserRestService.prototype.getTimeSheet = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getAllTimesheets");
    };
    UserRestService.prototype.getConsultants = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/jobs/");
    };
    UserRestService.prototype.storeUser = function (form) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/jobs", form.value);
    };
    UserRestService.prototype.statusChangeConsultant = function (index) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/status-consultant", index);
    };
    UserRestService.prototype.editUser = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/jobs/" + id);
    };
    UserRestService.prototype.updateUser = function (form, id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/jobs/" + id, form.value);
    };
    UserRestService.prototype.storeDocument = function (document) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/saveDocument", document);
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

/***/ "./src/app/admin/accountmanager/user-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/accountmanager/user-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/accountmanager/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/accountmanager/user-list/user-list.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/accountmanager/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/accountmanager/user-edit/user-edit.component.ts");







var routes = [
    // { path: 'list', component: UserListComponent, outlet: 'users' },
    {
        path: '',
        component: _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__["UserIndexComponent"],
        children: [
            /*  {path: 'list', component: UserListComponent,data: {
                expectedRole: 'Accountmanager'
              }},
              {path: 'inactivelist', component: UserListComponent,data: {
                expectedRole: 'Accountmanager'
              }},
              {path: 'create', component: UserCreateComponent,data: {
                expectedRole: 'Accountmanager'
              }},
              {path: 'edit/:id', component: UserEditComponent,data: {
                expectedRole: 'Accountmanager'
              }}, */
            { path: 'list', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
            { path: 'inactivelist', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
            { path: 'create', component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"] },
            { path: 'edit/:id', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"] },
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

/***/ "./src/app/admin/accountmanager/user.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/accountmanager/user.module.ts ***!
  \*****************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/accountmanager/user-routing.module.ts");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/accountmanager/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/accountmanager/user-list/user-list.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/accountmanager/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/accountmanager/user-edit/user-edit.component.ts");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-rest.service */ "./src/app/admin/accountmanager/user-rest.service.ts");
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
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm5/ngx-dropzone.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/inplace */ "./node_modules/primeng/inplace.js");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_inplace__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _field2_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../field2.pipe */ "./src/app/field2.pipe.ts");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");





























var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__["UserIndexComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__["UserCreateComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"], _field2_pipe__WEBPACK_IMPORTED_MODULE_25__["FieldPipe2"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_27__["AngularEditorModule"],
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
    return UserModule;
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
//# sourceMappingURL=admin-accountmanager-user-module-es5.js.map