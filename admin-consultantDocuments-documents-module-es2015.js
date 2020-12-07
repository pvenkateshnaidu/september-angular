(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-consultantDocuments-documents-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/consultantDocuments/user-create/user-create.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/consultantDocuments/user-create/user-create.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Add Consultant </h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant First Name:</label>\n                <input type=\"text\" formControlName=\"consultatName\" class=\"form-control\" placeholder=\"First Name\" required>\n                <div *ngIf=\"consultatName.invalid && (consultatName.dirty || consultatName.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"consultatName.errors?.required\">\n                    First Name is required.\n                  </div>\n                  <div *ngIf=\"consultatName.errors?.minlength\">\n                    First Name must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultatName }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Last Name:</label>\n                <input type=\"text\" formControlName=\"consultantLastName\" class=\"form-control\" placeholder=\"Last Name\" required>\n                <div *ngIf=\"consultantLastName.invalid && (consultantLastName.dirty || consultantLastName.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"consultantLastName.errors?.required\">\n                    Last Name is required.\n                  </div>\n                  <div *ngIf=\"consultantLastName.errors?.minlength\">\n                    Last Name must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultantLastName }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Consultant Email</label>\n                <input type=\"email\" formControlName=\"consultantEmail\" class=\"form-control\" placeholder=\"Email\" required>\n\n                <div *ngIf=\"consultantEmail.invalid && (consultantEmail.dirty || consultantEmail.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"consultantEmail.errors?.required\">\n                    Email is required.\n                  </div>\n                  <div *ngIf=\"consultantEmail.errors?.email\">\n                    Invalid email address.\n                  </div>\n                </div>\n\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultantEmail }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Mobile Number:</label>\n                <input type=\"text\" formControlName=\"consultatMobileNumber\" class=\"form-control\" placeholder=\"Mobile Number\" required>\n                <div *ngIf=\"consultatMobileNumber.invalid && (consultatMobileNumber.dirty || consultatMobileNumber.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"consultatMobileNumber.errors?.required\">\n                    Mobile is required.\n                  </div>\n                  <div *ngIf=\"consultatMobileNumber.errors?.minlength\">\n                    Mobile must be at least 10 number long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultatMobileNumber }}</small>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Technology</label>\n\n                <select  class=\"form-control\" formControlName=\"technology\">\n                  <option [ngValue]=\"null\" disabled>Choose your profile</option>\n                  <option *ngFor=\"let prf of allProfiles\" [ngValue]=\"prf\">\n                   {{ prf.prName }}\n                  </option>\n                </select>\n                <div *ngIf=\"technology.invalid && (technology.dirty || technology.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"technology.errors?.required\">\n                    Technology is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.technology }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Other Technology:</label>\n                <input type=\"text\" formControlName=\"otherTechnologies\" class=\"form-control\" placeholder=\"Other Technology\" required>\n                <div *ngIf=\"otherTechnologies.invalid && (otherTechnologies.dirty || otherTechnologies.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"otherTechnologies.errors?.required\">\n                    Other Technology is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.otherTechnologies }}</small>\n\n              </div>\n            </div>\n\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Expected Rate:</label>\n                <input type=\"text\" formControlName=\"rate\" class=\"form-control\" placeholder=\"Rate\" required>\n                <div *ngIf=\"rate.invalid && (rate.dirty || rate.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"rate.errors?.required\">\n                    Rate is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.rate }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Experience:</label>\n                <input type=\"text\" formControlName=\"experience\" class=\"form-control\" placeholder=\"exp\" required>\n                <div *ngIf=\"experience.invalid && (experience.dirty || experience.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"experience.errors?.required\">\n                    Experience is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.experience }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>City:</label>\n                <input type=\"text\" formControlName=\"city\" class=\"form-control\" placeholder=\"City\" required>\n                <div *ngIf=\"city.invalid && (city.dirty || city.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"city.errors?.required\">\n                    City is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.city }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>State:</label>\n                <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required>\n                <div *ngIf=\"state.invalid && (state.dirty || state.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"state.errors?.required\">\n                    State is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.state }}</small>\n\n              </div>\n            </div>\n\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Willing to Reloacate:</label>\n                <input type=\"text\" formControlName=\"willingLocation\" class=\"form-control\" placeholder=\"Relocate\" required>\n                <div *ngIf=\"willingLocation.invalid && (willingLocation.dirty || willingLocation.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"willingLocation.errors?.required\">\n                    First Name is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.willingLocation }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Documents collected:</label>\n                <input type=\"text\" formControlName=\"documentsCollected\" class=\"form-control\"  required>\n                <div *ngIf=\"documentsCollected.invalid && (documentsCollected.dirty || documentsCollected.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"documentsCollected.errors?.required\">\n                    Documents is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.documentsCollected }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Resource:</label>\n                <input type=\"text\" formControlName=\"resource\" class=\"form-control\" placeholder=\"Email\" required>\n\n                <div *ngIf=\"resource.invalid && (resource.dirty || resource.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"resource.errors?.required\">\n                    Resource is required.\n                  </div>\n\n                </div>\n\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.resource }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Status</label>\n                <input type=\"text\" formControlName=\"reportStatus\" class=\"form-control\" placeholder=\"Status\" required>\n                <div *ngIf=\"reportStatus.invalid && (reportStatus.dirty || reportStatus.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"reportStatus.errors?.required\">\n                    Mobile is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.reportStatus }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Last 4 digits of SSN :</label>\n                <input type=\"text\" formControlName=\"ssn\" class=\"form-control\" placeholder=\"SSN\" required>\n                <div *ngIf=\"ssn.invalid && (ssn.dirty || ssn.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"ssn.errors?.required\">\n                    Mobile is required.\n                  </div>\n                  <div *ngIf=\"ssn.errors?.minlength\">\n                    Mobile must be at least 4 number long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.ssn }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Best Contact Number</label>\n                <input type=\"text\" formControlName=\"bestContactNumber\" class=\"form-control\" placeholder=\"Best Contact Number\"\n                  required>\n                <div *ngIf=\"bestContactNumber.invalid && (bestContactNumber.dirty || bestContactNumber.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"bestContactNumber.errors?.required\">\n                    Best ContactNumber is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.bestContactNumber }}</small>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Skype ID:</label>\n                <input type=\"text\" formControlName=\"skypeId\" class=\"form-control\" placeholder=\"SkypeId\" required>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>linked In Url:</label>\n                <input type=\"text\" formControlName=\"linkedInUrl\" class=\"form-control\" placeholder=\"Linkedin Url\" required>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Availability:</label>\n                <input type=\"text\" formControlName=\"availability\" class=\"form-control\" placeholder=\"availability\" required>\n\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Priority</label>\n                <input type=\"text\" formControlName=\"priority\" class=\"form-control\" placeholder=\"Priority\" required>\n                <div *ngIf=\"priority.invalid && (priority.dirty || priority.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"priority.errors?.required\">\n                    priority is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.priority }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Visa Type:</label>\n                <input type=\"text\" formControlName=\"visaType\" class=\"form-control\" placeholder=\"Visa Type\" required>\n                <div *ngIf=\"visaType.invalid && (visaType.dirty || visaType.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"visaType.errors?.required\">\n                    Visa Type is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.visaType }}</small>\n\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Submit\n                Consultant</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/consultantDocuments/user-index/user-index.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/consultantDocuments/user-index/user-index.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/consultantDocuments/user-list/user-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/consultantDocuments/user-list/user-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\">Consultant Documents </h4>\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" [value]=\"timeSheets\" [scrollable]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" [loading]=\"loading\"\r\n  [reorderableColumns]=\"true\" autoLayout=\"true\" [loading]=\"loading\" (onRowSelect)=\"onRowSelected($event)\" dataKey=\"reportId\" editMode=\"row\"\r\n  [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [scrollable]=\"true\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:100px\">\r\n      <col style=\"width:60px\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Submissions</th>\r\n      <th>Bench Days</th>\r\n      <th>Docs</th>\r\n      <th>Consultant Name</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n\r\n    </tr>\r\n    <tr>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'contains')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n\r\n      </th>\r\n\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultantEmail', 'startsWith')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'startsWith')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"exp\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'startsWith')\"\r\n          placeholder=\"Visa Type\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'city', 'startsWith')\" placeholder=\"City\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'startsWith')\"\r\n          placeholder=\"State\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"Relocate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'documentsCollected', 'startsWith')\"\r\n          placeholder=\"Document Collected\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'resource', 'startsWith')\"\r\n          placeholder=\"Resource\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'ssn', 'startsWith')\" placeholder=\"SSN\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'bestContactNumber', 'startsWith')\"\r\n          placeholder=\"Best Contact Number\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'linkedInUrl', 'startsWith')\"\r\n          placeholder=\"LinkedIn\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'skypeId', 'startsWith')\"\r\n          placeholder=\"SkypeId\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'reportStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n    <tr [pEditableRow]=\"rowData\">\r\n\r\n      <td class=\"text-center\">\r\n\r\n        <span *ngIf=\"rowData.priority=='High'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:Green;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Medium'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:#ffc107;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Low'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:red;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span>\r\n          <a class=\"btn-length\" (click)=\"showModalDialogVendor(rowData.reportId)\" *ngIf=\"rowData.vendor_add.length\">\r\n            <img src=\"./assets/img/eye.png\"></a>\r\n        </span>\r\n\r\n        <a (click)=\"showModalDialog1(rowData.note)\" tabindex=\"0\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"\"\r\n          data-content=\"Srija note\" data-original-title=\"Note\"><img\r\n            src=\"./assets/img/sticky.png\"></a>\r\n        <br>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.vendor_add.length}} Submissions\" class=\"btn-length\"\r\n          style=\"color:white;background:#007bff;border:none\">{{rowData.vendor_add.length}}</button>\r\n\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.sclients}} Submitted to Client\" class=\"btn-length\"\r\n          style=\"color:white;background:purple;border:none\">{{rowData.sclients}}</button>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.interviews}} Interview Schedule\"\r\n          style=\"color:white;background:green;border:none\">{{rowData.interviews}}</button>\r\n        <!-- <button pButton pRipple data-toggle=\"tooltip\" title=\"Status Change\" icon=\"pi  pi-tag \"\r\n          (click)=\"showModalDialog(rowData.note,rowData.priority,rowData.wStatus)\"\r\n          class=\"p-button-outlined p-button-secondary\" style=\"color:#007bff;background:#fff;border: none;\"></button><br> -->\r\n\r\n\r\n        <!-- <button pButton pRipple data-toggle=\"tooltip\" title=\"Note\" icon=\"pi pi-bookmark\"\r\n          (click)=\"showModalDialog1(rowData.note)\" class=\"p-button-outlined p-button-secondary\"\r\n          style=\"color:#007bff;background:#fff;border: none;\"></button> -->\r\n\r\n      </td>\r\n      <td style=\"color:#17a2b8;\">\r\n        {{calculateDiff(rowData.created_at)}}\r\n\r\n      </td>\r\n      <td>\r\n        <p>\r\n          <a href=\"https://portal.webmobilez.com/storage/app/uploads/resume/{{rowData.resume}}\" download\r\n          *ngIf=\"rowData.resume\"><img src=\"./assets/img/word.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/otherDocument/{{rowData.otherDocument}}\"  download *ngIf=\"rowData.otherDocument\"><img\r\n              src=\"./assets/img/idcard.png\"></a>\r\n          <a href=\"https://portal.webmobilez.com/storage/app/uploads/workauthorization/{{rowData.workAuthorization}}\"   download *ngIf=\"rowData.workAuthorization\"><img\r\n              src=\"./assets/img/suitcase.png\"></a>\r\n        </p>\r\n\r\n\r\n\r\n        {{rowData.created_at | date }}\r\n      </td>\r\n      <td>\r\n        {{rowData.consultatName }}\r\n      </td>\r\n      <td *ngFor=\"let col of columns\">\r\n        <div *ngIf=\"!col.editable\">\r\n          {{rowData|field:col}}\r\n        </div>\r\n\r\n        <p-cellEditor *ngIf=\"col.editable\">\r\n          <ng-template pTemplate=\"input\">\r\n            <div *ngIf=\"rowData|field:col as variable\">\r\n              <input pInputText type=\"text\" [(ngModel)]=\"variable\" required>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n\r\n            {{rowData|field:col}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\"\r\n  [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n<p-dialog header=\"Status Change\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"priority\">Priority:</label>\r\n        <input type=\"hidden\" name=\"reportidnote\" id=\"reportidnote\" value=\"224\">\r\n        <select class=\"form-control\" name=\"prioritypop\" [(ngModel)]=\"priority\">\r\n          <option value=\"\">--select--</option>\r\n          <option value=\"High\">High</option>\r\n          <option value=\"Medium\">Medium</option>\r\n          <option value=\"Low\">Low</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"wStatus\">Status of Consultant:</label>\r\n        <select [(ngModel)]=\"wStatus\" class=\"form-control\" name=\"wStatus\" id=\"wStatus\">\r\n          <option value=\"\">--select--</option>\r\n          <option value=\"A\">Active</option>\r\n          <option value=\"R\">Removed From Webmobilez</option>\r\n          <option value=\"S\">selected from WebmobileZ</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"form-group\">\r\n      <label for=\"notepop\">Note:</label>\r\n      <textarea class=\"form-control\" id=\"notepop\" name=\"notepop\">{{note}} </textarea>\r\n\r\n    </div>\r\n  </div>\r\n  <button type=\"button\" class=\"btn btn-primary\" id=\"openpopupsubmit\">Submit</button>\r\n\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"Note\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\r\n  [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>{{note}}</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"View Vendors\" [(visible)]=\"displayModalVendor\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>Vendors</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n\r\n<p-dialog [style]=\"{width: '75vw'}\" position=\"top\" [(visible)]=\"showDialog\" header=\"View Vendors Details\" [closable]=\"true\"\r\n  [modal]=\"true\" [resizable]=\"true\">\r\n  <div class=\"flexcolumn container\">\r\n    <p-table class=\"flexcolumn\" [value]=\"data\" [scrollable]=\"true\" [responsive]=\"false\">\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th><span>Created By</span></th>\r\n          <th><span>Vendor Company</span></th>\r\n          <th><span>Contact Name</span></th>\r\n          <th><span>End Client</span></th>\r\n          <th><span>Submission Rate</span></th>\r\n          <th><span>Status</span></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-record>\r\n        <tr>\r\n          <td><span *ngIf=\"record.user_details\">{{record.user_details.name}}</span></td>\r\n          <td>{{record.vendorCompanyName}}</td>\r\n         <td>{{record.vendorName}}</td>\r\n          <td>{{record.endClientName}}</td>\r\n          <td>{{record.submissionRate}}</td>\r\n          <td>{{record.vendorStatus}}</td>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"summary\">\r\n        {{data.length}} Records\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"showDialog=false\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/admin/consultantDocuments/documents.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/consultantDocuments/documents.module.ts ***!
  \***************************************************************/
/*! exports provided: DocumentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsModule", function() { return DocumentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/consultantDocuments/user-routing.module.ts");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/consultantDocuments/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/consultantDocuments/user-list/user-list.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/consultantDocuments/user-create/user-create.component.ts");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-rest.service */ "./src/app/admin/consultantDocuments/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/contextmenu.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inplace */ "./node_modules/primeng/inplace.js");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_inplace__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _field1_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../field1.pipe */ "./src/app/field1.pipe.ts");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/dynamicdialog.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_26__);




























let DocumentsModule = class DocumentsModule {
};
DocumentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__["UserIndexComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__["UserCreateComponent"], _field1_pipe__WEBPACK_IMPORTED_MODULE_24__["FieldPipe1"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__["MultiSelectModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_12__["SliderModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__["MultiSelectModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__["ContextMenuModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__["InputTextModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_25__["ConfirmDialogModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_26__["DynamicDialogModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__["ProgressBarModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_18__["TabMenuModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_20__["FileUploadModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_21__["NgxDropzoneModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_23__["InplaceModule"]
        ],
        providers: [
            _user_rest_service__WEBPACK_IMPORTED_MODULE_7__["UserRestService"]
        ]
    })
], DocumentsModule);



/***/ }),

/***/ "./src/app/admin/consultantDocuments/user-create/user-create.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/consultantDocuments/user-create/user-create.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbnN1bHRhbnREb2N1bWVudHMvdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/consultantDocuments/user-create/user-create.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/consultantDocuments/user-create/user-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: Profile, UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/consultantDocuments/user-rest.service.ts");
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
        this.allProfiles = [
            new Profile('dev', 'AEM(Adobe Experience manger)'),
            new Profile('man', 'Manager'),
            new Profile('dir', 'Director')
        ];
        this.serverErrors = [];
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'consultatName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
            'consultantLastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
            'consultantEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'consultatMobileNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]),
            'technology': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'otherTechnologies': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'visaType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'willingLocation': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'documentsCollected': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'resource': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'ssn': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'bestContactNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'linkedInUrl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'skypeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            //   'comments': new FormControl(null, [Validators.required]),
            //   'note': new FormControl(null, [Validators.required]),
            'reportStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'experience': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'availability': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    get consultatName() { return this.registerForm.get('consultatName'); }
    get consultantEmail() { return this.registerForm.get('consultantEmail'); }
    get visaType() { return this.registerForm.get('visaType'); }
    get consultantLastName() { return this.registerForm.get('consultantLastName'); }
    get consultatMobileNumber() { return this.registerForm.get('consultatMobileNumber'); }
    get technology() { return this.registerForm.get('technology'); }
    get otherTechnologies() { return this.registerForm.get('otherTechnologies'); }
    get rate() { return this.registerForm.get('rate'); }
    get ravisaTypete() { return this.registerForm.get('visaType'); }
    get city() { return this.registerForm.get('city'); }
    get state() { return this.registerForm.get('state'); }
    get willingLocation() { return this.registerForm.get('willingLocation'); }
    get documentsCollected() { return this.registerForm.get('documentsCollected'); }
    get resource() { return this.registerForm.get('resource'); }
    get ssn() { return this.registerForm.get('ssn'); }
    get bestContactNumber() { return this.registerForm.get('bestContactNumber'); }
    get linkedInUrl() { return this.registerForm.get('linkedInUrl'); }
    get skypeId() { return this.registerForm.get('skypeId'); }
    get comments() { return this.registerForm.get('comments'); }
    get note() { return this.registerForm.get('note'); }
    get reportStatus() { return this.registerForm.get('reportStatus'); }
    get experience() { return this.registerForm.get('experience'); }
    get availability() { return this.registerForm.get('availability'); }
    get priority() { return this.registerForm.get('priority'); }
    registerUser() {
        console.log(this.registerForm);
        this.userRest.storeUser(this.registerForm).subscribe(response => {
            console.log(response),
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Consultant is added' });
            this.router.navigate(['consultants/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
};
UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-create',
        template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/consultantDocuments/user-create/user-create.component.html"),
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
        styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/consultantDocuments/user-create/user-create.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserCreateComponent);



/***/ }),

/***/ "./src/app/admin/consultantDocuments/user-index/user-index.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/consultantDocuments/user-index/user-index.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbnN1bHRhbnREb2N1bWVudHMvdXNlci1pbmRleC91c2VyLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/consultantDocuments/user-index/user-index.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/consultantDocuments/user-index/user-index.component.ts ***!
  \******************************************************************************/
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
        template: __webpack_require__(/*! raw-loader!./user-index.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/consultantDocuments/user-index/user-index.component.html"),
        styles: [__webpack_require__(/*! ./user-index.component.scss */ "./src/app/admin/consultantDocuments/user-index/user-index.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserIndexComponent);



/***/ }),

/***/ "./src/app/admin/consultantDocuments/user-list/user-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin/consultantDocuments/user-list/user-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.1rem;\n  margin-right: 0.1rem;\n}\n\n.btn-length {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29uc3VsdGFudERvY3VtZW50cy91c2VyLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXHNlcC1iYXJcXGFuZy9zcmNcXGFwcFxcYWRtaW5cXGNvbnN1bHRhbnREb2N1bWVudHNcXHVzZXItbGlzdFxcdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb25zdWx0YW50RG9jdW1lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtBQ0VGOztBREFBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQ0dGOztBRERBO0VBRUUsaUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbnN1bHRhbnREb2N1bWVudHMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4uZGlzYWJsZS10ZHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4udWktYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMC4xMHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMTByZW07XHJcbn1cclxuLmJ0bi1sZW5ndGhcclxue1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiIsIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uZGlzYWJsZS10ZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udWktYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjFyZW07XG59XG5cbi5idG4tbGVuZ3RoIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/consultantDocuments/user-list/user-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/consultantDocuments/user-list/user-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/consultantDocuments/user-rest.service.ts");
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
    showModalDialog(note, priority, status) {
        this.displayModal = true;
        this.note = note;
        this.priority = priority;
        this.wStatus = status;
    }
    showModalDialog1(value) {
        this.note = value;
        console.log(value);
        this.displayModal1 = true;
    }
    showModalDialogVendor(reportId) {
        this.showDialog = true;
        this.userRest.EditDocument(reportId).subscribe((response) => { console.log(this.data = response.submissions); this.loading = false; }, (error) => { console.log(error); });
        //  this.displayModalVendor = true;
    }
    calculateDiff(dateSent) {
        let currentDate = new Date();
        dateSent = new Date(dateSent);
        return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
    }
    getIntervIew(index) {
        let count = 0;
        const formData = new FormData();
        formData.append("index", index);
        console.log(formData);
        this.userRest.getTotalInterviewShecdules(formData).subscribe((response) => {
            console.log(response);
            this.loading = false;
            count = response.interviews;
        }, (error) => { console.log(error); });
        return count;
    }
    ngOnInit() {
        this.userRest.getConsultants().subscribe((response) => { console.log(this.timeSheets = response.timesheet); this.loading = false; }, (error) => { console.log(error); });
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
            { field: 'resource', header: 'Resource', width: '20%', editable: false },
            { field: 'ssn', header: 'Last 4 SSN', width: '20%', editable: false },
            { field: 'bestContactNumber', header: 'Best Contact Number', width: '20%', editable: false },
            { field: 'linkedInUrl', header: 'LinkedIn', width: '20%', editable: false },
            { field: 'skypeId', header: 'skypeId', width: '20%', editable: false },
            //  { field: 'priority', header: 'priority', width: '20%' ,editable: false},
            { field: 'reportStatus', header: 'Status', width: '20%', editable: false }
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
    onRowSelected(evt) {
        console.log("Content of the selected row...", evt.data);
    }
    onDateSelect(value) {
        this.table.filter(this.formatDate(value), 'created_at', 'equals');
    }
    formatDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return date.getFullYear() + '-' + month + '-' + day;
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
        this.userRest.statusChangeConsultant(index).subscribe((response) => {
            console.log(response);
            this.loading = false;
            alert("Aproved");
        }, (error) => { console.log(error); });
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
        template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/consultantDocuments/user-list/user-list.component.html"),
        styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/consultantDocuments/user-list/user-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserListComponent);



/***/ }),

/***/ "./src/app/admin/consultantDocuments/user-rest.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/consultantDocuments/user-rest.service.ts ***!
  \****************************************************************/
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
    EditDocument(id) {
        return this.http.get('https://portal.webmobilez.com/public/api/submissions/' + id);
    }
    getTotalInterviewShecdules(index) {
        return this.http.post('https://portal.webmobilez.com/public/api/getTotalInterviewShecdules', index);
    }
    getConsultants() {
        return this.http.get('https://portal.webmobilez.com/public/api/getAllConsultants/');
    }
    storeUser(form) {
        return this.http.post('https://portal.webmobilez.com/public/api/store-consultant', form.value);
    }
    statusChangeConsultant(index) {
        var body = 'index=' + index;
        return this.http.post('https://portal.webmobilez.com/public/api/status-consultant', JSON.stringify({
            cmd: "sa",
            data: "sd"
        }));
    }
};
UserRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserRestService);



/***/ }),

/***/ "./src/app/admin/consultantDocuments/user-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/consultantDocuments/user-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/consultantDocuments/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/consultantDocuments/user-list/user-list.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/consultantDocuments/user-create/user-create.component.ts");






const routes = [
    // { path: 'list', component: UserListComponent, outlet: 'users' },
    {
        path: '',
        component: _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__["UserIndexComponent"],
        children: [
            { path: 'list', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
            { path: 'inactivelist', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
            { path: 'create', component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"] }
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

/***/ "./src/app/field1.pipe.ts":
/*!********************************!*\
  !*** ./src/app/field1.pipe.ts ***!
  \********************************/
/*! exports provided: FieldPipe1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldPipe1", function() { return FieldPipe1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FieldPipe1 = class FieldPipe1 {
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
FieldPipe1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "field"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FieldPipe1);



/***/ })

}]);
//# sourceMappingURL=admin-consultantDocuments-documents-module-es2015.js.map