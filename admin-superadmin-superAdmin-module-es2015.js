(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-superadmin-superAdmin-module"],{

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

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Add Submissions </h4>\n     <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Choose Consultant:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"state\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (onChange)=\"onChange($event)\"\n                  (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"state.invalid && (state.dirty || state.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"state.errors?.required\">\n                    Consultant is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.state }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Rate:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{crate}}\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Email:</label>\n                <input type=\"email\" class=\"form-control\" value=\"{{cemail}}\" readonly>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Consultant Number:</label>\n                <input type=\"text\" value=\"{{cmobile}}\" class=\"form-control\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Technology:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{ctechnology}}\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Choose Vendor:</label>\n                <p-dropdown #df [options]=\"vendors\" [(ngModel)]=\"selectedVendors\" formControlName=\"vid\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeVendor($event)\" (keydown)=\"vendorsUi($event)\">\n                </p-dropdown>\n\n              </div>\n              <p-button (click)=\"showModalDialog()\" icon=\"pi pi-external-link\" label=\"Add Vendor\"></p-button>\n\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"df.value\">\n              <div class=\"form-group\">\n                <label>Choose Vendor Contacts:</label>\n                <p-dropdown [options]=\"contacts\" [(ngModel)]=\"selectedContacts\" formControlName=\"vendorDetailId\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeContacts($event)\" (keydown)=\"contactsUi($event)\">\n                </p-dropdown>\n                <div *ngIf=\"vendorDetailId.invalid && (vendorDetailId.dirty || vendorDetailId.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"vendorDetailId.errors?.required\">\n                    Contact is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorDetailId }}</small>\n\n              </div>\n              <p-button (click)=\"showModalDialog1()\" icon=\"pi pi-external-link\" label=\"Add Contact\"></p-button>\n\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"vcname\">\n              <div class=\"form-group\">\n                <label>Vendor Contact Name:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{vcname}}\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"vmobile\">\n              <div class=\"form-group\">\n                <label>Vendor Mobile Number:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{vmobile}}\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Choose End CLient:</label>\n                <p-dropdown #dfrf [options]=\"clients\" [(ngModel)]=\"selectedClients\" formControlName=\"clientId\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeClients($event)\" (keydown)=\"clientsUi($event)\">\n                </p-dropdown>\n                <div *ngIf=\"clientId.invalid && (clientId.dirty || clientId.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"clientId.errors?.required\">\n                    Client is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.clientId }}</small>\n                <p-button (click)=\"showModalDialogClient()\" icon=\"pi pi-external-link\" label=\"Add Client\"></p-button>\n\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>End CLient Location:</label>\n                <input type=\"text\" formControlName=\"endClientLocation\" class=\"form-control\"\n                  placeholder=\"End Client Location\">\n                <div *ngIf=\"endClientLocation.invalid && (endClientLocation.dirty || endClientLocation.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"endClientLocation.errors?.required\">\n                    End ClientLocation is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.endClientLocation }}</small>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Actual Rate:</label>\n                <input type=\"number\" formControlName=\"actualRate\" class=\"form-control\" placeholder=\"Actual Rate\">\n                <div *ngIf=\"actualRate.invalid && (actualRate.dirty || actualRate.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"actualRate.errors?.required\">\n                    ActualRate is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Submission Rate:</label>\n                <input type=\"number\" formControlName=\"submissionRate\" class=\"form-control\" placeholder=\"Submit   Rate\">\n                <div *ngIf=\"submissionRate.invalid && (submissionRate.dirty || submissionRate.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"submissionRate.errors?.required\">\n                    submissionRate is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.submissionRate }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Vendor Status</label>\n                <select #statusvalue class=\"form-control\" formControlName=\"vendorStatus\">\n                  <option value=\"\">--select--</option>\n                  <option value=\"Interview scheduled\">Interview scheduled</option>\n                  <option value=\"Submitted to Client\">Submitted to Client</option>\n                  <option value=\"Submitted to Vendor\">Submitted to Vendor</option>\n                  <option value=\"Disqualified\">Disqualified</option>\n                  <option value=\"Client rejected\">Client rejected</option>\n                  <option value=\"Vendor Rejected\">Vendor Rejected</option>\n                  <option value=\"Vendor screening call\">Vendor screening call</option>\n                  <option value=\"Waiting for Evaluation\">Waiting for Evaluation</option>\n                </select>\n                <div *ngIf=\"vendorStatus.invalid && (vendorStatus.dirty || vendorStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"vendorStatus.errors?.required\">\n                    vendorStatus is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorStatus }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"(statusvalue.value=='Interview scheduled')\">\n              <div class=\"form-group\">\n                <label>Interview Schedule Date :</label>\n                <input type=\"date\" class=\"form-control\" formControlName=\"scheduleDate\" placeholder=\"Interview Schedule Date\">\n              </div>\n            </div>\n            <div class=\"col-md-2\" formControlName=\"timezone\" *ngIf=\"(statusvalue.value=='Interview scheduled')\">\n              <div class=\"form-group\">\n                <label> Time Zone :</label>\n                <select class=\"form-control\">\n                  <option value=\"EST\">EST</option>\n                  <option value=\"PST\">PST</option>\n                  <option value=\"CST\">CST</option>\n                  <option value=\"MST\">MST</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Comments:</label>\n                <textarea formControlName=\"vendorComments\" class=\"form-control\"></textarea>\n                <div *ngIf=\"vendorComments.invalid && (vendorComments.dirty || vendorComments.touched)\"\n                  class=\"form-text text-muted\">\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ vendorComments.jobExperience }}</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Submit\n                Consultant</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<p-dialog header=\"Add New Vendor Contact\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n  <form [formGroup]=\"registerContact\" (ngSubmit)=\"registerContactForm()\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"vendorcontactName\" placeholder=\"Vendor Contact Name\">\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label> Email:</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"vendorcontactEmail\"\n            placeholder=\"Vendor Contact Email\">\n          <div *ngIf=\"vendorcontactEmail.invalid && (vendorcontactEmail.dirty || vendorcontactEmail.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"vendorcontactEmail.errors?.required\">\n              Email is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorcontactEmail }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Mobile Number:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"vendorcontactMobile\" placeholder=\"Mobile Number\">\n\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label> EXT:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"vendorext\" placeholder=\"EXT\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerContact.valid\">Add Vendor\n      Contact</button>\n  </form>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n<p-dialog header=\"Add New Vendor\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerVendorCompany()\">\n\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Vendor Company Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"vendorCompanyName\" placeholder=\"Vendor Company Name\">\n          <div *ngIf=\"vendorCompanyName.invalid && (vendorCompanyName.dirty || vendorCompanyName.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"vendorCompanyName.errors?.required\">\n              Company Name is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorCompanyName }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"contactName\" placeholder=\"Vendor Contact Name\">\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label> Email:</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"contactEmail\" placeholder=\"Vendor Contact Email\">\n          <div *ngIf=\"contactEmail.invalid && (contactEmail.dirty || contactEmail.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"contactEmail.errors?.required\">\n              Email is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.contactEmail }}</small>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Mobile Number:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"contactMobile\" placeholder=\"Mobile Number\">\n          <div *ngIf=\"contactMobile.invalid && (contactEmail.dirty || contactMobile.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"contactMobile.errors?.required\">\n              Mobile Number is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.contactMobile }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label> EXT:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"ext\" placeholder=\"EXT\">\n        </div>\n      </div>\n\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerVendor.valid\">Add Vendor</button>\n  </form>\n\n\n\n\n\n\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n\n\n<p-dialog header=\"Add Client\" [(visible)]=\"displayModalClient\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n  <form [formGroup]=\"registerClient\" (ngSubmit)=\"registerClientForm()\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Client Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"clientName\" placeholder=\"Client Name\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerClient.valid\">Add Client</button>\n  </form>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/benchsales/user-list/user-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/benchsales/user-list/user-list.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\r\n<h4 class=\"remove-margin\"> Consultant Submissions  <a routerLink=\"/superadmin/sumissioncreate\" class=\"btn btn-primary\">\r\n  Add Submission\r\n </a></h4>\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" [autoLayout]=\"true\"  [value]=\"timeSheets\" [scrollable]=\"true\"\r\n   [filterDelay]=\"0\" [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\" [reorderableColumns]=\"true\"\r\n  autoLayout=\"true\"  dataKey=\"reportId\"  [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\r\n   [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:70px\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Action</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'user_details.name', 'startsWith')\"\r\n          placeholder=\"Created By\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultant.consultatName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'vendorStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultant.technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'vendorCompanyName', 'startsWith')\"\r\n          placeholder=\"Company Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'vendorName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'vendorEmail', 'startsWith')\"\r\n          placeholder=\"Vendor Email\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'vendorMobileNumber', 'startsWith')\"\r\n          placeholder=\"Vendor Mobile\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'endClientName', 'startsWith')\"\r\n          placeholder=\"End Clinet\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'actualRate', 'startsWith')\"\r\n          placeholder=\"actualRate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'submissionRate', 'startsWith')\"\r\n          placeholder=\"submissionRate\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.reportStatus,rowData.adminStatus)}\"  >\r\n      <td style=\"text-align:center\">\r\n\r\n       <a (click)=\"showModalDialog(rowData)\"  class=\"btn btn-warning btn-sm\">Edit</a>\r\n       <a (click)=\"showModalDialog1(rowData.vendorComments)\" tabindex=\"0\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"\"\r\n       data-original-title=\"Note\"><img\r\n         src=\"./assets/img/sticky.png\"></a>\r\n        </td>\r\n\r\n      <td *ngFor=\"let col of columns\" >\r\n\r\n              {{rowData|field:col}}\r\n\r\n\r\n      </td>\r\n\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\" [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n\r\n  <p-dialog header=\"Status Change\" [(visible)]=\"displayModal\" [modal]=\"true\"\r\n  [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"  [draggable]=\"false\" [resizable]=\"false\">\r\n<h5> {{heading1}}</h5>\r\n<form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerUser(submissionId)\">\r\n    <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"form-group\">\r\n            <label for=\"popstatus\">Status:</label>\r\n\r\n            <select class=\"form-control\"  #seleectevalue formControlName=\"vendorStatus\">\r\n                 <option value=\"\">--select--</option>\r\n                                        <option value=\"Placed\">Placed</option>\r\n                                        <option value=\"Interview scheduled\">Interview scheduled</option>\r\n                                        <option value=\"Submitted to Client\">Submitted to Client</option>\r\n                                        <option value=\"Submitted to Vendor\">Submitted to Vendor</option>\r\n                                        <option value=\"Disqualified\">Disqualified</option>\r\n                                        <option value=\"Client rejected\">Client rejected</option>\r\n                                        <option value=\"Vendor Rejected\">Vendor Rejected</option>\r\n                                        <option value=\"Vendor screening call\">Vendor screening call</option>\r\n                                        <option value=\"Waiting for Evaluation\">Waiting for Evaluation</option>\r\n                                        </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-8\" *ngIf=\"seleectevalue.value == 'Interview scheduled'\">\r\n        <div class=\"form-group schedulepopdiv\" >\r\n            <label for=\"schedulepop\">Schedule Date:</label>\r\n            <input type=\"date\" class=\"form-control\" formControlName=\"scheduleDate\"  value=\"2020-11-21 10:43:17\"><br>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4\" *ngIf=\"seleectevalue.value == 'Interview scheduled'\">\r\n        <div class=\"form-group schedulepopdiv\">\r\n            <label for=\"timezone\">Time Zone:</label>\r\n            <select class=\"form-control\" formControlName=\"timezone\">\r\n              <option value=\"\">Choose Time Zone</option>\r\n                <option value=\"EST\" >EST</option>\r\n                <option value=\"PST\">PST</option>\r\n                <option value=\"CST\">CST</option>\r\n                <option value=\"MST\">MST</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"form-group\">\r\n            <label for=\"notepop\">Comment:</label>\r\n            <textarea class=\"form-control\"  formControlName=\"vendorComments\"></textarea>\r\n\r\n        </div>\r\n    </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary btn-round\">Update</button>\r\n</form>\r\n\r\n\r\n           <ng-template pTemplate=\"footer\">\r\n               <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n               <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n           </ng-template>\r\n   </p-dialog>\r\n\r\n   <p-dialog header=\"Note\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\r\n   [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n   <p>{{comment}}</p>\r\n   <ng-template pTemplate=\"footer\">\r\n     <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n     <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n   </ng-template>\r\n </p-dialog>\r\n"

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

module.exports = "<h4 class=\"remove-margin\"> Consultant List  <a routerLink=\"/superadmin/consultantcreate\" class=\"btn btn-primary\">\r\n  Add Consultant\r\n </a></h4>\r\n<p-table #dt [columns]=\"scrollableCols\" [autoLayout]=\"true\"  [value]=\"timeSheets\" [scrollable]=\"true\"\r\n   [filterDelay]=\"0\" [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\" [reorderableColumns]=\"true\" [loading]=\"loading\"\r\n  autoLayout=\"true\"  dataKey=\"reportId\" editMode=\"row\" [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Action</th>\r\n      <th>Docs</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'user_details.name', 'startsWith')\"\r\n          placeholder=\"Created By\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <i class=\"pi pi-download\"></i>\r\n      </th>\r\n\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultantEmail', 'startsWith')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'startsWith')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"exp\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'technology', 'startsWith')\" placeholder=\"technology\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'startsWith')\"\r\n          placeholder=\"visaType\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'city', 'startsWith')\"\r\n          placeholder=\"city\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'startsWith')\"\r\n          placeholder=\"state\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"willingLocation\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'documentsCollected', 'startsWith')\"\r\n          placeholder=\"documentsCollected\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'resource', 'startsWith')\"\r\n          placeholder=\"resource\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'ssn', 'startsWith')\"\r\n          placeholder=\"SSN\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'bestContactNumber', 'startsWith')\"\r\n          placeholder=\"bestContactNumber\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'linkedInUrl', 'startsWith')\"\r\n          placeholder=\"linkedInUrl\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'skypeId', 'startsWith')\"\r\n          placeholder=\"skypeId\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'priority', 'startsWith')\"\r\n          placeholder=\"priority\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'reportStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.reportStatus,rowData.adminStatus)}\"  >\r\n      <td style=\"text-align:center\">\r\n\r\n        <button  *ngIf=\"rowData.adminStatus=='D'\" pRipple pButton type=\"button\"  icon=\"pi pi-thumbs-up\" (click)=\"dropDatabase($event,rowData.reportId);\"  class=\"p-button-rounded p-button-text \"></button>\r\n        <!--  <button  *ngIf=\"!editing\" pButton pRipple type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" (click)=\"onRowEditInit(rowData)\" class=\"p-button-rounded p-button-text \"></button>\r\n            <button   *ngIf=\"editing\" pButton pRipple type=\"button\" pSaveEditableRow icon=\"pi pi-check\" (click)=\"onRowEditSave(rowData,ri)\" class=\"p-button-rounded p-button-text p-button-success p-mr-2\"></button>\r\n            <button   *ngIf=\"editing\" pButton pRipple type=\"button\" pCancelEditableRow icon=\"pi pi-times\" (click)=\"onRowEditCancel(rowData, ri)\" class=\"p-button-rounded p-button-text p-button-danger\"></button> -->\r\n            <a (click)=\"editUser(rowData.reportId)\"  class=\"btn btn-warning btn-sm\">Edit</a>\r\n            {{rowData.user_details.name}}\r\n        </td>\r\n      <td>\r\n\r\n        <p>\r\n          <a href=\"https://portal.webmobilez.com/storage/app/uploads/resume/{{rowData.resume}}\" download\r\n          *ngIf=\"rowData.resume\"><img src=\"./assets/img/word.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/otherDocument/{{rowData.otherDocument}}\"  download *ngIf=\"rowData.otherDocument\"><img\r\n              src=\"./assets/img/idcard.png\"></a>\r\n          <a href=\"https://portal.webmobilez.com/storage/app/uploads/workauthorization/{{rowData.workAuthorization}}\"   download *ngIf=\"rowData.workAuthorization\"><img\r\n              src=\"./assets/img/suitcase.png\"></a>\r\n        </p>\r\n\r\n{{rowData.created_at | date }}\r\n      </td>\r\n      <td *ngFor=\"let col of columns\" >\r\n            <div *ngIf=\"!col.editable\">\r\n              {{rowData|field:col}}\r\n            </div>\r\n            <p-cellEditor *ngIf=\"col.editable\">\r\n                    <ng-template pTemplate=\"input\" >\r\n                      <div *ngIf=\"rowData|field:col as variable\">\r\n                         <input pInputText type=\"text\"  [(ngModel)]=\"variable\" required>\r\n                                                </div>\r\n                    </ng-template>\r\n                    <ng-template pTemplate=\"output\">\r\n\r\n                        {{rowData|field:col}}\r\n                    </ng-template>\r\n            </p-cellEditor>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\" [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/documents-inactive/documents-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/documents-inactive/documents-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\">Consultant Documents </h4>\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" [value]=\"timeSheets\" [scrollable]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"\r\n  [reorderableColumns]=\"true\" autoLayout=\"true\" (onRowSelect)=\"onRowSelected($event)\" dataKey=\"reportId\" editMode=\"row\"\r\n  [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [scrollable]=\"true\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:100px\">\r\n      <col style=\"width:60px\">\r\n      <col style=\"width:100px\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Submissions</th>\r\n      <th>Days in</th>\r\n      <th>Docs</th>\r\n      <th>Consultant Name</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n\r\n    </tr>\r\n    <tr>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n        Bench\r\n      </th>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'contains')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n\r\n      </th>\r\n\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultantEmail', 'startsWith')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'startsWith')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"exp\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'startsWith')\"\r\n          placeholder=\"Visa Type\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'city', 'startsWith')\" placeholder=\"City\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'startsWith')\"\r\n          placeholder=\"State\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"Relocate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'documentsCollected', 'startsWith')\"\r\n          placeholder=\"Document Collected\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'resource', 'startsWith')\"\r\n          placeholder=\"Resource\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'ssn', 'startsWith')\" placeholder=\"SSN\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'bestContactNumber', 'startsWith')\"\r\n          placeholder=\"Best Contact Number\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'linkedInUrl', 'startsWith')\"\r\n          placeholder=\"LinkedIn\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'skypeId', 'startsWith')\"\r\n          placeholder=\"SkypeId\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'reportStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n    <tr [pEditableRow]=\"rowData\">\r\n\r\n      <td class=\"text-center\">\r\n\r\n        <span *ngIf=\"rowData.priority=='High'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:Green;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Medium'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:#ffc107;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Low'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:red;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span>\r\n          <a class=\"btn-length\" (click)=\"showModalDialogVendor(rowData)\" *ngIf=\"rowData.vendor_add.length\">\r\n            <img src=\"./assets/img/eye.png\"></a>\r\n        </span>\r\n\r\n        <a (click)=\"showModalDialog1(rowData.note)\" tabindex=\"0\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"\"\r\n          data-content=\"Srija note\" data-original-title=\"Note\"><img src=\"./assets/img/sticky.png\"></a>\r\n        <br>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.vendor_add.length}} Submissions\" class=\"btn-length\"\r\n          style=\"color:white;background:#007bff;border:none\">{{rowData.vendor_add.length}}</button>\r\n\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.sclients}} Submitted to Client\" class=\"btn-length\"\r\n          style=\"color:white;background:purple;border:none\">{{rowData.sclients}}</button>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.interviews}} Interview Schedule\"\r\n          style=\"color:white;background:green;border:none\">{{rowData.interviews}}</button>\r\n\r\n        <!-- <button pButton pRipple data-toggle=\"tooltip\" title=\"Note\" icon=\"pi pi-bookmark\"\r\n          (click)=\"showModalDialog1(rowData.note)\" class=\"p-button-outlined p-button-secondary\"\r\n          style=\"color:#007bff;background:#fff;border: none;\"></button> -->\r\n\r\n      </td>\r\n      <td style=\"color:#17a2b8;\">\r\n        {{calculateDiff(rowData.created_at)}}\r\n\r\n      </td>\r\n      <td>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/resume/{{rowData.resume}}\" download\r\n          *ngIf=\"rowData.resume\"><img src=\"./assets/img/word.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/otherDocument/{{rowData.otherDocument}}\" download\r\n          *ngIf=\"rowData.otherDocument\"><img src=\"./assets/img/idcard.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/workauthorization/{{rowData.workAuthorization}}\"\r\n          download *ngIf=\"rowData.workAuthorization\"><img src=\"./assets/img/suitcase.png\"></a>\r\n        <br>\r\n        <button pButton pRipple data-toggle=\"tooltip\" title=\"Status Change\" (click)=\"showModalDialog(rowData)\"\r\n          class=\"p-button-outlined p-button-secondary\" label=\"Write Note\"\r\n          style=\"color:#007bff;background:#fff;border: none;\"></button>\r\n      </td>\r\n      <td>\r\n        {{rowData.consultatName }}<br>\r\n        {{rowData.created_at | date }}\r\n      </td>\r\n      <td *ngFor=\" let col of columns\">\r\n        <div *ngIf=\"!col.editable\">\r\n          {{rowData|field:col}}\r\n        </div>\r\n\r\n        <p-cellEditor *ngIf=\"col.editable\">\r\n          <ng-template pTemplate=\"input\">\r\n            <div *ngIf=\"rowData|field:col as variable\">\r\n              <input pInputText type=\"text\" [(ngModel)]=\"variable\" required>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n\r\n            {{rowData|field:col}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\"\r\n  [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n<p-dialog header=\"Status Change\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerUser(submissionId)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"priority\">Priority:</label>\r\n          <select class=\"form-control\" formControlName=\"priority\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"High\">High</option>\r\n            <option value=\"Medium\">Medium</option>\r\n            <option value=\"Low\">Low</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"wStatus\">Status of Consultant:</label>\r\n          <select class=\"form-control\" formControlName=\"wStatus\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"A\">Active</option>\r\n            <option value=\"R\">Removed From Webmobilez</option>\r\n            <option value=\"S\">selected from WebmobileZ</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"form-group\">\r\n        <label for=\"notepop\">Note:</label>\r\n        <textarea class=\"form-control\" formControlName=\"note\"></textarea>\r\n\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"Note\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\r\n  [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>{{valuenote}}</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"View Vendors\" [(visible)]=\"displayModalVendor\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>Vendors</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n\r\n<p-dialog [style]=\"{width: '75vw'}\" position=\"top\" [(visible)]=\"showDialog\" header=\"View Vendors Details\"\r\n  [closable]=\"true\" [resizable]=\"true\">\r\n  <div class=\"flexcolumn container\">\r\n    <p-table class=\"flexcolumn\" [value]=\"data\" [scrollable]=\"true\" [responsive]=\"true\">\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th><span>Created By</span></th>\r\n          <th><span>Vendor Company</span></th>\r\n          <th><span>Vendor Contact Name</span></th>\r\n\r\n          <th><span>End Client</span></th>\r\n          <th><span>Submission Rate</span></th>\r\n          <th><span>Status</span></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-record>\r\n        <tr>\r\n          <td><span *ngIf=\"record.user_details\">{{record.user_details.name}}</span></td>\r\n          <td>{{record.vendorCompanyName}}</td>\r\n          <td>{{record.vendorName}}</td>\r\n          <td>{{record.endClientName}}</td>\r\n          <td>{{record.submissionRate}}</td>\r\n          <td>{{record.vendorStatus}}</td>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"summary\">\r\n        {{data.length}} Records\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"showDialog=false\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/documents-list/documents-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/documents-list/documents-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\">Consultant Documents </h4>\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" [value]=\"timeSheets\" [scrollable]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"\r\n  [reorderableColumns]=\"true\" autoLayout=\"true\" (onRowSelect)=\"onRowSelected($event)\" dataKey=\"reportId\" editMode=\"row\"\r\n  [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [scrollable]=\"true\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:100px\">\r\n      <col style=\"width:60px\">\r\n      <col style=\"width:100px\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Submissions</th>\r\n      <th>Days in</th>\r\n      <th>Docs</th>\r\n      <th>Consultant Name</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n\r\n    </tr>\r\n    <tr>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n        Bench\r\n      </th>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'contains')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n\r\n      </th>\r\n\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultantEmail', 'startsWith')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'startsWith')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"exp\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'startsWith')\"\r\n          placeholder=\"Visa Type\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'city', 'startsWith')\" placeholder=\"City\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'startsWith')\"\r\n          placeholder=\"State\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"Relocate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'documentsCollected', 'startsWith')\"\r\n          placeholder=\"Document Collected\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'resource', 'startsWith')\"\r\n          placeholder=\"Resource\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'ssn', 'startsWith')\" placeholder=\"SSN\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'bestContactNumber', 'startsWith')\"\r\n          placeholder=\"Best Contact Number\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'linkedInUrl', 'startsWith')\"\r\n          placeholder=\"LinkedIn\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'skypeId', 'startsWith')\"\r\n          placeholder=\"SkypeId\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'reportStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n    <tr [pEditableRow]=\"rowData\">\r\n\r\n      <td class=\"text-center\">\r\n\r\n        <span *ngIf=\"rowData.priority=='High'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:Green;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Medium'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:#ffc107;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Low'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:red;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span>\r\n          <a class=\"btn-length\" (click)=\"showModalDialogVendor(rowData)\" *ngIf=\"rowData.vendor_add.length\">\r\n            <img src=\"./assets/img/eye.png\"></a>\r\n        </span>\r\n\r\n        <a (click)=\"showModalDialog1(rowData.note)\" tabindex=\"0\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"\"\r\n          data-content=\"Srija note\" data-original-title=\"Note\"><img src=\"./assets/img/sticky.png\"></a>\r\n        <br>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.vendor_add.length}} Submissions\" class=\"btn-length\"\r\n          style=\"color:white;background:#007bff;border:none\">{{rowData.vendor_add.length}}</button>\r\n\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.sclients}} Submitted to Client\" class=\"btn-length\"\r\n          style=\"color:white;background:purple;border:none\">{{rowData.sclients}}</button>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.interviews}} Interview Schedule\"\r\n          style=\"color:white;background:green;border:none\">{{rowData.interviews}}</button>\r\n\r\n        <!-- <button pButton pRipple data-toggle=\"tooltip\" title=\"Note\" icon=\"pi pi-bookmark\"\r\n          (click)=\"showModalDialog1(rowData.note)\" class=\"p-button-outlined p-button-secondary\"\r\n          style=\"color:#007bff;background:#fff;border: none;\"></button> -->\r\n\r\n      </td>\r\n      <td style=\"color:#17a2b8;\">\r\n        {{calculateDiff(rowData.created_at)}}\r\n\r\n      </td>\r\n      <td>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/resume/{{rowData.resume}}\" download\r\n          *ngIf=\"rowData.resume\"><img src=\"./assets/img/word.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/otherDocument/{{rowData.otherDocument}}\" download\r\n          *ngIf=\"rowData.otherDocument\"><img src=\"./assets/img/idcard.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/workauthorization/{{rowData.workAuthorization}}\"\r\n          download *ngIf=\"rowData.workAuthorization\"><img src=\"./assets/img/suitcase.png\"></a>\r\n        <br>\r\n        <button pButton pRipple data-toggle=\"tooltip\" title=\"Status Change\" (click)=\"showModalDialog(rowData)\"\r\n          class=\"p-button-outlined p-button-secondary\" label=\"Write Note\"\r\n          style=\"color:#007bff;background:#fff;border: none;\"></button>\r\n      </td>\r\n      <td>\r\n        {{rowData.consultatName }}<br>\r\n        {{rowData.created_at | date }}\r\n      </td>\r\n      <td *ngFor=\" let col of columns\">\r\n        <div *ngIf=\"!col.editable\">\r\n          {{rowData|field:col}}\r\n        </div>\r\n\r\n        <p-cellEditor *ngIf=\"col.editable\">\r\n          <ng-template pTemplate=\"input\">\r\n            <div *ngIf=\"rowData|field:col as variable\">\r\n              <input pInputText type=\"text\" [(ngModel)]=\"variable\" required>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n\r\n            {{rowData|field:col}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\"\r\n  [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n<p-dialog header=\"Status Change\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerUser(submissionId)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"priority\">Priority:</label>\r\n          <select class=\"form-control\" formControlName=\"priority\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"High\">High</option>\r\n            <option value=\"Medium\">Medium</option>\r\n            <option value=\"Low\">Low</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"wStatus\">Status of Consultant:</label>\r\n          <select class=\"form-control\" formControlName=\"wStatus\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"A\">Active</option>\r\n            <option value=\"R\">Removed From Webmobilez</option>\r\n            <option value=\"S\">selected from WebmobileZ</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"form-group\">\r\n        <label for=\"notepop\">Note:</label>\r\n        <textarea class=\"form-control\" formControlName=\"note\"></textarea>\r\n\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"Note\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\r\n  [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>{{valuenote}}</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"View Vendors\" [(visible)]=\"displayModalVendor\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>Vendors</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n\r\n<p-dialog [style]=\"{width: '75vw'}\" position=\"top\" [(visible)]=\"showDialog\" header=\"View Vendors Details\"\r\n  [closable]=\"true\" [resizable]=\"true\">\r\n  <div class=\"flexcolumn container\">\r\n    <p-table class=\"flexcolumn\" [value]=\"data\" [scrollable]=\"true\" [responsive]=\"true\">\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th><span>Created By</span></th>\r\n          <th><span>Vendor Company</span></th>\r\n          <th><span>Vendor Contact Name</span></th>\r\n\r\n          <th><span>End Client</span></th>\r\n          <th><span>Submission Rate</span></th>\r\n          <th><span>Status</span></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-record>\r\n        <tr>\r\n          <td><span *ngIf=\"record.user_details\">{{record.user_details.name}}</span></td>\r\n          <td>{{record.vendorCompanyName}}</td>\r\n          <td>{{record.vendorName}}</td>\r\n          <td>{{record.endClientName}}</td>\r\n          <td>{{record.submissionRate}}</td>\r\n          <td>{{record.vendorStatus}}</td>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"summary\">\r\n        {{data.length}} Records\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"showDialog=false\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/hotlist/user-list/user-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/hotlist/user-list/user-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"> Hot List </h4>\r\n<p-table #dt [columns]=\"cols\" [value]=\"products\" [loading]=\"loading\" [autoLayout]=\"true\" [resizableColumns]=\"true\" columnResizeMode=\"expand\" selectionMode=\"multiple\" [(selection)]=\"selectedProducts\">\r\n  <ng-template pTemplate=\"caption\">\r\n    <div class=\"p-d-flex\">\r\n      <button type=\"button\" pButton pRipple icon=\"pi pi-file-o\" (click)=\"dt.exportCSV()\" class=\"p-mr-2\" pTooltip=\"CSV\"\r\n        tooltipPosition=\"bottom\"></button>\r\n      <!-- <button type=\"button\" pButton pRipple icon=\"pi pi-file-excel\" (click)=\"exportExcel()\" class=\"p-button-success p-mr-2\"  pTooltip=\"XLS\" tooltipPosition=\"bottom\"></button> -->\r\n\r\n      <button type=\"button\" pButton pRipple icon=\"pi pi-filter\" (click)=\"dt.exportCSV({selectionOnly:true})\"\r\n        class=\"p-button-info p-ml-auto\" pTooltip=\"Selection Only\" tooltipPosition=\"bottom\"></button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n      <th>Request Resume</th>\r\n\r\n    </tr>\r\n    <tr>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"Experience\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'startsWith')\"\r\n          placeholder=\"State\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"Relocate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'startsWith')\"\r\n          placeholder=\"Visa Type\" class=\"p-column-filter\">\r\n      </th>\r\n      <th></th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n    <tr [pSelectableRow]=\"rowData\">\r\n      <td *ngFor=\"let col of columns\">\r\n        {{rowData[col.field]}}\r\n      </td>\r\n      <td><a >Request Resume</a></td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/interviews/user-list/user-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/superadmin/interviews/user-list/user-list.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"> Schedule Interviews </h4>\r\n\r\n<p-table #dt1 [columns]=\"scrollableCols\" [autoLayout]=\"true\"  [value]=\"timeSheets\" [scrollable]=\"true\"\r\n[filterDelay]=\"0\" [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\" [reorderableColumns]=\"true\"\r\nautoLayout=\"true\"  dataKey=\"reportId\" editMode=\"row\" [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\r\n[rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Interview Date</th>\r\n      <th>Consultant Name</th>\r\n      <th>Created By</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th> </th>\r\n      <th>  <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'consultant.consultatName', 'startsWith')\"\r\n        placeholder=\"Consultant Name\" class=\"p-column-filter\"></th>\r\n      <th>  <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'user_details.name', 'startsWith')\"\r\n        placeholder=\"Created By\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'vendorCompanyName', 'startsWith')\"\r\n          placeholder=\"Company Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'endClientName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th> <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'consultant.technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'endClientLocation', 'startsWith')\"\r\n          placeholder=\"End Client\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'submissionRate', 'startsWith')\"\r\n          placeholder=\"Submission Rate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'actualRate', 'startsWith')\"\r\n          placeholder=\"Actual Rate\" class=\"p-column-filter\">\r\n      </th>\r\n      </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.reportStatus,rowData.adminStatus)}\"  >\r\n\r\n<td>{{rowData.scheduleDate | date }} {{rowData.timezone}} </td>\r\n<td>{{rowData.consultant.consultatName }} {{rowData.consultant.consultantLastName }}</td>\r\n<td>{{rowData.user_details.name}}<br>{{rowData.created_at | date}}</td>\r\n      <td *ngFor=\"let col of columns\" >\r\n\r\n              {{rowData|field:col}}\r\n\r\n\r\n      </td>\r\n\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\" [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/benchsales/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






class Profile {
    constructor(prId, prName) {
        this.prId = prId;
        this.prName = prName;
    }
}
let BenchCreateComponent = class BenchCreateComponent {
    constructor(route, messageService, userRest, router) {
        this.route = route;
        this.messageService = messageService;
        this.userRest = userRest;
        this.router = router;
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
    showModalDialog() {
        this.displayModal = true;
    }
    showModalDialogClient() {
        this.displayModalClient = true;
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
    get clientName() { return this.registerClient.get('clientName'); }
    get actualRate() { return this.registerForm.get('actualRate'); }
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
            this.router.navigate(['superadmin/sumissionlist']);
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
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



/***/ }),

/***/ "./src/app/admin/superadmin/benchsales/user-list/user-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/superadmin/benchsales/user-list/user-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9iZW5jaHNhbGVzL3VzZXItbGlzdC9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhZG1pblxcc3VwZXJhZG1pblxcYmVuY2hzYWxlc1xcdXNlci1saXN0XFx1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vYmVuY2hzYWxlcy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vYmVuY2hzYWxlcy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNhYmxlLXRke1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi51aS1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUtdGQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnVpLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/benchsales/user-rest.service.ts");
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
let BenchListComponent = class BenchListComponent {
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
        this.serverErrors = [];
        this.clonedProducts = {};
    }
    ;
    ngOnInit() {
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'vendorStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'vendorComments': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'scheduleDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'timezone': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.userRest.getConsultants().subscribe((response) => {
            console.log(this.timeSheets = response.submissions);
            this.totalRecords = this.timeSheets.length;
            this.loading = false;
        }, (error) => { console.log(error); });
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
        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }
    showModalDialog(data) {
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
    }
    showModalDialog1(data) {
        this.displayModal1 = true;
        this.comment = data;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserRestService = class UserRestService {
    constructor(http) {
        this.http = http;
        this.users = [];
    }
    getConsultants() {
        return this.http.get('http://localhost:8000/api/submissions/');
    }
    storeUser(form) {
        return this.http.post('http://localhost:8000/api/submissions', form.value);
    }
    storeClient(form) {
        return this.http.post('http://localhost:8000/api/clients', form.value);
    }
    updateSubmission(form, id) {
        return this.http.put('http://localhost:8000/api/submissions/' + id, form.value);
    }
    storeVendor(form) {
        return this.http.post('http://localhost:8000/api/vendorlist', form.value);
    }
    storeContact(form) {
        return this.http.post('http://localhost:8000/api/contactslist', form.value);
    }
    statusChangeConsultant(index) {
        return this.http.post('http://localhost:8000/api/status-consultant', index);
    }
    getConsultantsList() {
        return this.http.get('http://localhost:8000/api/getConsultantsList/');
    }
    editUser(id) {
        return this.http.get('http://localhost:8000/api/jobs/' + id);
    }
    editVenodr(id) {
        return this.http.get('http://localhost:8000/api/contacts/' + id);
    }
    editConsultant(id) {
        return this.http.get('http://localhost:8000/api/store-consultant/' + id);
    }
    updateUser(form, id) {
        return this.http.put('http://localhost:8000/api/jobs/' + id, form.value);
    }
    storeDocument(document) {
        return this.http.post('http://localhost:8000/api/saveDocument', document);
    }
    getContactDetails(index) {
        return this.http.post('http://localhost:8000/api/contactsDetails', index);
    }
};
UserRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserRestService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/consultants/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






class Profile {
    constructor(prId, prName) {
        this.prId = prId;
        this.prName = prName;
    }
}
let ConsultantCreateComponent = class ConsultantCreateComponent {
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
    get resume() { return this.registerForm.get('resume'); }
    get otherDocument() { return this.registerForm.get('otherDocument'); }
    get workAuthorization() { return this.registerForm.get('workAuthorization'); }
    registerUser() {
        console.log(this.registerForm);
        //formData.append('myImageToSend', this.imageFile.file);
        this.userRest.storeUser(this.registerForm).subscribe(response => {
            console.log(response),
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Consultant is added' });
            this.router.navigate(['consultants/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/consultants/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






class Profile {
    constructor(prId, prName) {
        this.prId = prId;
        this.prName = prName;
    }
}
let ConsultantEditComponent = class ConsultantEditComponent {
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
        let id = this.route.snapshot.params.id;
        this.userRest.editUser(id).subscribe((response) => {
            this.path = response.path;
            this.registerForm.patchValue({
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
        }, (error) => console.log(error));
    }
    removeFile(name) {
        let id = this.route.snapshot.params.id;
        const formData = new FormData();
        formData.append(name, "yes");
        formData.append("id", id);
        this.userRest.removeFile(formData).subscribe((response) => {
            console.log(response);
            this.registerForm.patchValue({
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
        }, error => {
            // this.serverErrors = error.error.errors
        }, () => console.log('completed'));
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
    get resume() { return this.registerForm.get('resume'); }
    get otherDocument() { return this.registerForm.get('otherDocument'); }
    get workAuthorization() { return this.registerForm.get('workAuthorization'); }
    registerUser() {
        console.log(this.registerForm);
        //formData.append('myImageToSend', this.imageFile.file);
        this.userRest.storeUser(this.registerForm).subscribe(response => {
            console.log(response),
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Consultant is added' });
            this.router.navigate(['consultants/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
    updateUserDetails() {
        let id = this.route.snapshot.params.id;
        this.userRest.updateUser(this.registerForm, id).subscribe((response) => {
            console.log(response),
                this.router.navigate(['consultants/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        }, () => console.log('completed'));
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/consultants/user-rest.service.ts");
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
let ConsultantListComponent = class ConsultantListComponent {
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
    }
    ;
    ngOnInit() {
        this.userRest.getConsultants().subscribe((response) => { console.log(this.timeSheets = response.timesheet); this.loading = false; }, (error) => { console.log(error); });
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
        const formData = new FormData();
        formData.append("index", index);
        console.log(formData);
        this.userRest.statusChangeConsultant(formData).subscribe((response) => {
            console.log(response);
            this.loading = false;
            this.timeSheets = response.timesheet;
        }, (error) => { console.log(error); });
    }
    editUser(id) {
        this.router.navigate(['superadmin/consultantedit', id]);
    }
    getColor(status, adminStatus) {
        if (adminStatus == "A") {
            return "#d4edda";
        }
        else if (status == "not interested") {
            return "#f8d7da";
        }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserRestService = class UserRestService {
    constructor(http) {
        this.http = http;
        this.users = [];
    }
    getTimeSheet() {
        return this.http.get('http://localhost:8000/api/getAllTimesheets');
    }
    getConsultants() {
        return this.http.get('http://localhost:8000/api/getAllConsultants/');
    }
    storeUser(form) {
        return this.http.post('http://localhost:8000/api/store-consultant', form.value);
    }
    statusChangeConsultant(index) {
        return this.http.post('http://localhost:8000/api/status-consultant', index);
    }
    editUser(id) {
        return this.http.get('http://localhost:8000/api/store-consultant/' + id);
    }
    updateUser(form, id) {
        return this.http.put('http://localhost:8000/api/store-consultant/' + id, form.value);
    }
    storeDocument(document) {
        return this.http.post('http://localhost:8000/api/saveDocument', document);
    }
    removeFile(document) {
        return this.http.post('http://localhost:8000/api/removeDocument', document);
    }
};
UserRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserRestService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");
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
let DocumentsInactiveComponent = class DocumentsInactiveComponent {
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
    showModalDialog(data) {
        this.displayModal = true;
        this.submissionId = data.reportId;
        this.registerVendor.patchValue({
            priority: data.priority,
            wStatus: data.wStatus,
            note: data.note,
        });
    }
    showModalDialog1(value) {
        console.log(value);
        this.displayModal1 = true;
        this.valuenote = value;
    }
    showModalDialogVendor(data) {
        this.showDialog = true;
        this.userRest.EditDocument(data.reportId).subscribe((response) => { console.log(this.data = response.submissions); this.loading = false; }, (error) => { console.log(error); });
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
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'note': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'wStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
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
    registerUser(submissionId) {
        this.userRest.updateConsultantStatus(this.registerVendor, submissionId).subscribe(response => {
            this.displayModal = false;
            console.log(response),
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submision Updated' });
            this.timeSheets = response.timesheet;
        }, error => {
            //  this.serverErrors = error.error.errors
        });
    }
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



/***/ }),

/***/ "./src/app/admin/superadmin/documents-list/documents-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/superadmin/documents-list/documents-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.1rem;\n  margin-right: 0.1rem;\n}\n\n.btn-length {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9kb2N1bWVudHMtbGlzdC9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhZG1pblxcc3VwZXJhZG1pblxcZG9jdW1lbnRzLWxpc3RcXGRvY3VtZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9zdXBlcmFkbWluL2RvY3VtZW50cy1saXN0L2RvY3VtZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUNHRjs7QUREQTtFQUVFLGlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9zdXBlcmFkbWluL2RvY3VtZW50cy1saXN0L2RvY3VtZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNhYmxlLXRke1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi51aS1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjEwcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC4xMHJlbTtcclxufVxyXG4uYnRuLWxlbmd0aFxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNhYmxlLXRkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi51aS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMXJlbTtcbn1cblxuLmJ0bi1sZW5ndGgge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");
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
let DocumentsListComponent = class DocumentsListComponent {
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
    showModalDialog(data) {
        this.displayModal = true;
        this.submissionId = data.reportId;
        this.registerVendor.patchValue({
            priority: data.priority,
            wStatus: data.wStatus,
            note: data.note,
        });
    }
    showModalDialog1(value) {
        console.log(value);
        this.displayModal1 = true;
        this.valuenote = value;
    }
    showModalDialogVendor(data) {
        this.showDialog = true;
        this.userRest.EditDocument(data.reportId).subscribe((response) => { console.log(this.data = response.submissions); this.loading = false; }, (error) => { console.log(error); });
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
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'note': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'wStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
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
    registerUser(submissionId) {
        this.userRest.updateConsultantStatus(this.registerVendor, submissionId).subscribe(response => {
            this.displayModal = false;
            console.log(response),
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submision Updated' });
            this.timeSheets = response.timesheet;
        }, error => {
            //  this.serverErrors = error.error.errors
        });
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



/***/ }),

/***/ "./src/app/admin/superadmin/hotlist/user-list/user-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/superadmin/hotlist/user-list/user-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3VwZXJhZG1pbi9ob3RsaXN0L3VzZXItbGlzdC9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhZG1pblxcc3VwZXJhZG1pblxcaG90bGlzdFxcdXNlci1saXN0XFx1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vaG90bGlzdC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N1cGVyYWRtaW4vaG90bGlzdC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNhYmxlLXRke1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbiIsIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uZGlzYWJsZS10ZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/hotlist/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);







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
let HotListComponent = class HotListComponent {
    constructor(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.loading = true;
    }
    ngOnInit() {
        this.userRest.getConsultants().subscribe((response) => { console.log(this.products = response.timesheet); this.loading = false; }, (error) => { console.log(error); });
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
        this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserRestService = class UserRestService {
    constructor(http) {
        this.http = http;
        this.users = [];
    }
    getConsultants() {
        return this.http.get('http://localhost:8000/api/getHotlistConsultants/');
    }
    statusChangeConsultant(index) {
        var body = 'index=' + index;
        return this.http.post('http://localhost:8000/api/status-consultant', JSON.stringify({
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/interviews/user-rest.service.ts");
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
let InterviewComponent = class InterviewComponent {
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
    }
    ;
    ngOnInit() {
        this.userRest.getConsultants().subscribe((response) => { console.log(this.timeSheets = response.submissions); this.loading = false; }, (error) => { console.log(error); });
        this.frozenCols = [
            { field: 'consultatName', header: 'Name' },
        ];
        this.scrollableCols = [
            // { field: 'user_details.name', header: 'Created By', width: '20%',editable: false},
            // { field: 'consultant.consultatName', header: 'Consultant Name', width: '20%',editable: false},
            // { field: 'scheduleDate', header: 'Shedule Date', width: '20%',editable: false},
            { field: 'vendorCompanyName', header: 'Company Name', width: '20%', editable: false },
            { field: 'endClientName', header: 'End Client', width: '20%', editable: false },
            { field: 'consultant.technology', header: 'Technology', width: '20%', editable: false },
            { field: 'endClientLocation', header: 'End Client', width: '20%', editable: false },
            { field: 'submissionRate', header: 'Submissio Rate', width: '20%', editable: true },
            { field: 'actualRate', header: 'Actual Rate', width: '20%', editable: true },
            { field: 'vendorStatus', header: 'Status', width: '40%', editable: true },
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
    getColor(status, adminStatus) {
        if (adminStatus == "A") {
            return "#d4edda";
        }
        else if (status == "not interested") {
            return "#f8d7da";
        }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserRestService = class UserRestService {
    constructor(http) {
        this.http = http;
        this.users = [];
    }
    getConsultants() {
        return this.http.get('http://localhost:8000/api/interviewsubmissions/');
    }
    storeUser(form) {
        return this.http.post('http://localhost:8000/api/submissions', form.value);
    }
    statusChangeConsultant(index) {
        return this.http.post('http://localhost:8000/api/status-consultant', index);
    }
    getConsultantsList() {
        return this.http.get('http://localhost:8000/api/getConsultantsList/');
    }
    editUser(id) {
        return this.http.get('http://localhost:8000/api/jobs/' + id);
    }
    editVenodr(id) {
        return this.http.get('http://localhost:8000/api/contacts/' + id);
    }
    editConsultant(id) {
        return this.http.get('http://localhost:8000/api/store-consultant/' + id);
    }
    updateUser(form, id) {
        return this.http.put('http://localhost:8000/api/jobs/' + id, form.value);
    }
    storeDocument(document) {
        return this.http.post('http://localhost:8000/api/saveDocument', document);
    }
    getContactDetails(index) {
        return this.http.post('http://localhost:8000/api/contactsDetails', index);
    }
};
UserRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserRestService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/superadmin/user-routing.module.ts");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/superadmin/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/superadmin/user-list/user-list.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/superadmin/user-edit/user-edit.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/superadmin/user-create/user-create.component.ts");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");
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
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");
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
/* harmony import */ var _consultants_consultant_list_consultant_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./consultants/consultant-list/consultant-list.component */ "./src/app/admin/superadmin/consultants/consultant-list/consultant-list.component.ts");
/* harmony import */ var _consultants_consultant_create_consultant_create_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./consultants/consultant-create/consultant-create.component */ "./src/app/admin/superadmin/consultants/consultant-create/consultant-create.component.ts");
/* harmony import */ var _consultants_consultant_edit_consultant_edit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./consultants/consultant-edit/consultant-edit.component */ "./src/app/admin/superadmin/consultants/consultant-edit/consultant-edit.component.ts");
/* harmony import */ var _benchsales_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./benchsales/user-list/user-list.component */ "./src/app/admin/superadmin/benchsales/user-list/user-list.component.ts");
/* harmony import */ var _benchsales_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./benchsales/user-create/user-create.component */ "./src/app/admin/superadmin/benchsales/user-create/user-create.component.ts");
/* harmony import */ var _interviews_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./interviews/user-list/user-list.component */ "./src/app/admin/superadmin/interviews/user-list/user-list.component.ts");
/* harmony import */ var _hotlist_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./hotlist/user-list/user-list.component */ "./src/app/admin/superadmin/hotlist/user-list/user-list.component.ts");
/* harmony import */ var _field_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../field.pipe */ "./src/app/field.pipe.ts");





































let SuperAdminModule = class SuperAdminModule {
};
SuperAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__["UserIndexComponent"], _field_pipe__WEBPACK_IMPORTED_MODULE_35__["FieldPipe"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_7__["UserCreateComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], _documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_26__["DocumentsListComponent"], _consultants_consultant_list_consultant_list_component__WEBPACK_IMPORTED_MODULE_28__["ConsultantListComponent"], _consultants_consultant_create_consultant_create_component__WEBPACK_IMPORTED_MODULE_29__["ConsultantCreateComponent"], _consultants_consultant_edit_consultant_edit_component__WEBPACK_IMPORTED_MODULE_30__["ConsultantEditComponent"],
            _benchsales_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_31__["BenchListComponent"], _benchsales_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_32__["BenchCreateComponent"], _hotlist_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_34__["HotListComponent"], _interviews_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_33__["InterviewComponent"], _documents_inactive_documents_list_component__WEBPACK_IMPORTED_MODULE_27__["DocumentsInactiveComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__["MultiSelectModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_25__["DynamicDialogModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_13__["SliderModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__["MultiSelectModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__["ContextMenuModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_16__["ButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19__["TabMenuModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_21__["NgxDropzoneModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_23__["InplaceModule"]
        ],
        providers: [
            _user_rest_service__WEBPACK_IMPORTED_MODULE_8__["UserRestService"]
        ]
    })
], SuperAdminModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let UserCreateComponent = class UserCreateComponent {
    constructor(route, userRest, router) {
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.serverErrors = [];
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'role': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])
        });
    }
    get name() { return this.registerForm.get('name'); }
    get email() { return this.registerForm.get('email'); }
    get password() { return this.registerForm.get('password'); }
    get confirm_password() { return this.registerForm.get('confirm_password'); }
    get role() { return this.registerForm.get('role'); }
    registerUser() {
        console.log(this.registerForm);
        this.userRest.storeUser(this.registerForm).subscribe(response => {
            console.log(response),
                this.router.navigate(['users/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
};
UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-create',
        template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/user-create/user-create.component.html"),
        styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/superadmin/user-create/user-create.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserCreateComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");





let UserEditComponent = class UserEditComponent {
    constructor(route, userRest, router) {
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.serverErrors = [];
    }
    ngOnInit() {
        let id = this.route.snapshot.params.id;
        this.userRest.editUser(id).subscribe((response) => {
            this.updateUser.patchValue({
                'name': response.user.name,
                'email': response.user.email,
                'role': response.user.role
            });
        }, (error) => console.log(error));
        console.log(this.data);
        this.updateUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            'role': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
    }
    get name() { return this.updateUser.get('name'); }
    get email() { return this.updateUser.get('email'); }
    get password() { return this.updateUser.get('password'); }
    get role() { return this.updateUser.get('role'); }
    updateUserDetails() {
        let id = this.route.snapshot.params.id;
        this.userRest.updateUser(this.updateUser, id).subscribe((response) => {
            console.log(response),
                this.router.navigate(['users/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        }, () => console.log('completed'));
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);





let UserIndexComponent = class UserIndexComponent {
    constructor(route, userRest, router) {
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.userList = [];
        this.timeSheets = [];
        this.loading = true;
    }
    ngOnInit() {
        this.userRest.getUsers().subscribe((response) => { console.log(this.userList = response.user); this.loading = false; }, (error) => { console.log(error); });
    }
    deleteUser(id) {
        if (confirm("Are you sure to delete ")) {
            this.userRest.deleteUser(id).subscribe((response) => console.log(response), (error) => console.log(error));
        }
    }
    editUser(id) {
        this.router.navigate(['users/edit', id]);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
], UserIndexComponent.prototype, "table", void 0);
UserIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-index',
        template: __webpack_require__(/*! raw-loader!./user-index.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/user-index/user-index.component.html"),
        styles: [__webpack_require__(/*! ./user-index.component.scss */ "./src/app/admin/superadmin/user-index/user-index.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserIndexComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/superadmin/user-rest.service.ts");
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
    constructor(fb, messageService, route, userRest, router) {
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.timeSheets = [];
        this.loading = true;
    }
    ngOnInit() {
        this.userRest.getUsers().subscribe((response) => { console.log(this.timeSheets = response.user); this.loading = false; }, (error) => { console.log(error); });
    }
    deleteUser(id) {
        if (confirm("Are you sure to delete ")) {
            this.userRest.deleteUser(id).subscribe((response) => console.log(response), (error) => console.log(error));
        }
    }
    editUser(id) {
        this.router.navigate(['superadmin/useredit', id]);
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
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/superadmin/user-list/user-list.component.html"),
        styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/superadmin/user-list/user-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserListComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserRestService = class UserRestService {
    constructor(http) {
        this.http = http;
        this.users = [];
    }
    /* get User Services */
    getUsers() {
        return this.http.get('http://localhost:8000/api/user-list');
    }
    editUser(id) {
        return this.http.get('http://localhost:8000/api/user-list/' + id);
    }
    updateUser(form, id) {
        return this.http.put('http://localhost:8000/api/user-list/' + id, form.value);
    }
    storeUser(form) {
        return this.http.post('http://localhost:8000/api/user-list', form.value);
    }
    deleteUser(id) {
        return this.http.delete('http://localhost:8000/api/user-list/' + id);
    }
    /* Documents */
    getTotalInterviewShecdules(index) {
        return this.http.post('http://localhost:8000/api/getTotalInterviewShecdules', index);
    }
    EditDocument(id) {
        return this.http.get('http://localhost:8000/api/submissions/' + id);
    }
    getConsultants() {
        return this.http.get('http://localhost:8000/api/getAllConsultantsAdmin/');
    }
    updateConsultantStatus(form, id) {
        return this.http.put('http://localhost:8000/api/admin-store-consultant/' + id, form.value);
    }
};
UserRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserRestService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
















const routes = [
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
//# sourceMappingURL=admin-superadmin-superAdmin-module-es2015.js.map