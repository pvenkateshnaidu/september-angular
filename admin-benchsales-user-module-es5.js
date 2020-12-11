(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-benchsales-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/contacts/user-list/user-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/contacts/user-list/user-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"> Submission Contact List </h4>\r\n<p-table #dt [columns]=\"cols\" scrollHeight=\"500px\"  [scrollable]=\"true\" [value]=\"products\" [loading]=\"loading\" [autoLayout]=\"true\" [resizableColumns]=\"true\" columnResizeMode=\"expand\" selectionMode=\"multiple\" [(selection)]=\"selectedProducts\">\r\n  <ng-template pTemplate=\"caption\">\r\n    <div class=\"p-d-flex\">\r\n      <button type=\"button\" pButton pRipple icon=\"pi pi-file-o\" (click)=\"dt.exportCSV()\" class=\"p-mr-2\" pTooltip=\"CSV\"\r\n        tooltipPosition=\"bottom\"></button>\r\n      <!-- <button type=\"button\" pButton pRipple icon=\"pi pi-file-excel\" (click)=\"exportExcel()\" class=\"p-button-success p-mr-2\"  pTooltip=\"XLS\" tooltipPosition=\"bottom\"></button> -->\r\n\r\n      <button type=\"button\" pButton pRipple icon=\"pi pi-filter\" (click)=\"dt.exportCSV({selectionOnly:true})\"\r\n        class=\"p-button-info p-ml-auto\" pTooltip=\"Selection Only\" tooltipPosition=\"bottom\"></button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n\r\n    </tr>\r\n\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n    <tr [pSelectableRow]=\"rowData\">\r\n      <td *ngFor=\"let col of columns\">\r\n        {{rowData[col.field]}}\r\n      </td>\r\n\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/documents/user-list/user-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/documents/user-list/user-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\">Consultant Documents </h4>\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" scrollHeight=\"500px\" [value]=\"timeSheets\" [scrollable]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" [loading]=\"loading\" [reorderableColumns]=\"true\"\r\n  autoLayout=\"true\" [loading]=\"loading\" (onRowSelect)=\"onRowSelected($event)\" dataKey=\"reportId\" editMode=\"row\"\r\n  [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [scrollable]=\"true\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:160px\">\r\n      <col style=\"width:60px\">\r\n      <col style=\"width:120px\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Submissions</th>\r\n      <th>Days</th>\r\n      <th>Docs</th>\r\n      <th>First Name</th>\r\n      <th>Last Name</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n\r\n    </tr>\r\n    <tr>\r\n      <th>\r\n        <button (click)=\"clearFilters(dt)\">Clear Fields</button>\r\n      </th>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\"  [value]=\"dt.filters['consultatName'] ? dt.filters['consultatName'].value : ''\" (input)=\"dt.filter($event.target.value, 'consultatName', 'contains')\"\r\n          placeholder=\"First Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['consultantLastName'] ? dt.filters['consultantLastName'].value : ''\" (input)=\"dt.filter($event.target.value, 'consultantLastName', 'contains')\"\r\n          placeholder=\"Last Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th> <input pInputText type=\"text\" [value]=\"dt.filters['consultantEmail'] ? dt.filters['consultantEmail'].value : ''\"  (input)=\"dt.filter($event.target.value, 'consultantEmail', 'startsWith')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['consultatMobileNumber'] ? dt.filters['consultatMobileNumber'].value : ''\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'startsWith')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"number\" [value]=\"dt.filters['experience'] ? dt.filters['experience'].value : ''\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"exp\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['rate'] ? dt.filters['rate'].value : ''\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['technology'] ? dt.filters['technology'].value : ''\" (input)=\"dt.filter($event.target.value, 'technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['visaType'] ? dt.filters['visaType'].value : ''\" (input)=\"dt.filter($event.target.value, 'visaType', 'startsWith')\"\r\n          placeholder=\"Visa Type\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['city'] ? dt.filters['city'].value : ''\" (input)=\"dt.filter($event.target.value, 'city', 'startsWith')\" placeholder=\"City\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['state'] ? dt.filters['state'].value : ''\" (input)=\"dt.filter($event.target.value, 'state', 'startsWith')\"\r\n          placeholder=\"State\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['willingLocation'] ? dt.filters['willingLocation'].value : ''\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"Relocate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['documentsCollected'] ? dt.filters['documentsCollected'].value : ''\" (input)=\"dt.filter($event.target.value, 'documentsCollected', 'startsWith')\"\r\n          placeholder=\"Document Collected\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['consultatName'] ? dt.filters['consultatName'].value : ''\" (input)=\"dt.filter($event.target.value, 'resource', 'startsWith')\"\r\n          placeholder=\"Resource\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['ssn'] ? dt.filters['ssn'].value : ''\" (input)=\"dt.filter($event.target.value, 'ssn', 'startsWith')\" placeholder=\"SSN\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['bestContactNumber'] ? dt.filters['bestContactNumber'].value : ''\" (input)=\"dt.filter($event.target.value, 'bestContactNumber', 'startsWith')\"\r\n          placeholder=\"Best Contact Number\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['linkedInUrl'] ? dt.filters['linkedInUrl'].value : ''\" (input)=\"dt.filter($event.target.value, 'linkedInUrl', 'startsWith')\"\r\n          placeholder=\"LinkedIn\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['skypeId'] ? dt.filters['skypeId'].value : ''\"  (input)=\"dt.filter($event.target.value, 'skypeId', 'startsWith')\"\r\n          placeholder=\"SkypeId\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['reportStatus'] ? dt.filters['reportStatus'].value : ''\" (input)=\"dt.filter($event.target.value, 'reportStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n    <tr [pEditableRow]=\"rowData\">\r\n\r\n      <td class=\"text-center\">\r\n\r\n        <span *ngIf=\"rowData.priority=='High'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:Green;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Medium'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:#ffc107;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span *ngIf=\"rowData.priority=='Low'\">\r\n          <button pButton pRipple data-toggle=\"tooltip\" title=\"{{rowData.priority}} Priority\" icon=\"pi pi-star\"\r\n            class=\"btn-length p-button-rounded p-button-warning\"\r\n            style=\"color:red;background:#fff;border: none;\"></button>\r\n        </span>\r\n        <span>\r\n          <a class=\"btn-length\"  (click)=\"showModalDialogVendor(rowData.reportId)\" *ngIf=\"rowData.vendor_add.length\">\r\n            <img src=\"./assets/img/eye.png\"></a>\r\n        </span>\r\n\r\n        <a (click)=\"showModalDialog1(rowData.note)\" tabindex=\"0\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"\"\r\n          data-content=\"Srija note\" data-original-title=\"Note\"><img src=\"./assets/img/sticky.png\"></a>\r\n        <br>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.vendor_add.length}} Submissions\" class=\"btn-length\"\r\n          style=\"color:white;background:#007bff;border:none\">{{rowData.vendor_add.length}}</button>\r\n\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.sclients}} Submitted to Client\" class=\"btn-length\"\r\n          style=\"color:white;background:purple;border:none\">{{rowData.sclients}}</button>\r\n        <button data-toggle=\"tooltip\" title=\"{{rowData.interviews}} Interview Schedule\"\r\n          style=\"color:white;background:green;border:none\">{{rowData.interviews}}</button>\r\n        <!-- <button pButton pRipple data-toggle=\"tooltip\" title=\"Status Change\" icon=\"pi  pi-tag \"\r\n          (click)=\"showModalDialog(rowData.note,rowData.priority,rowData.wStatus)\"\r\n          class=\"p-button-outlined p-button-secondary\" style=\"color:#007bff;background:#fff;border: none;\"></button><br> -->\r\n\r\n\r\n        <!-- <button pButton pRipple data-toggle=\"tooltip\" title=\"Note\" icon=\"pi pi-bookmark\"\r\n          (click)=\"showModalDialog1(rowData.note)\" class=\"p-button-outlined p-button-secondary\"\r\n          style=\"color:#007bff;background:#fff;border: none;\"></button> -->\r\n\r\n      </td>\r\n      <td style=\"color:#17a2b8;\">\r\n        {{calculateDiff(rowData.created_at)}}\r\n\r\n      </td>\r\n      <td>\r\n        <p>\r\n          <a href=\"https://portal.webmobilez.com/storage/app/uploads/resume/{{rowData.resume}}\" download\r\n            *ngIf=\"rowData.resume\"><img src=\"./assets/img/word.png\"></a>\r\n          <a href=\"https://portal.webmobilez.com/storage/app/uploads/otherDocument/{{rowData.otherDocument}}\" download\r\n            *ngIf=\"rowData.otherDocument\"><img src=\"./assets/img/idcard.png\"></a>\r\n          <a href=\"https://portal.webmobilez.com/storage/app/uploads/workauthorization/{{rowData.workAuthorization}}\"\r\n            download *ngIf=\"rowData.workAuthorization\"><img src=\"./assets/img/suitcase.png\"></a>\r\n        </p>\r\n\r\n\r\n\r\n        {{rowData.created_at | date }}\r\n      </td>\r\n      <td>\r\n        {{rowData.consultatName }}\r\n      </td>\r\n      <td>\r\n        {{rowData.consultantLastName }}\r\n      </td>\r\n      <td *ngFor=\"let col of columns\">\r\n        <div *ngIf=\"!col.editable\">\r\n          {{rowData|field:col}}\r\n        </div>\r\n\r\n        <p-cellEditor *ngIf=\"col.editable\">\r\n          <ng-template pTemplate=\"input\">\r\n            <div *ngIf=\"rowData|field:col as variable\">\r\n              <input pInputText type=\"text\" [(ngModel)]=\"variable\" required>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n\r\n            {{rowData|field:col}}\r\n          </ng-template>\r\n        </p-cellEditor>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\"\r\n  [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n<p-dialog header=\"Status Change\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"priority\">Priority:</label>\r\n        <input type=\"hidden\" name=\"reportidnote\" id=\"reportidnote\" value=\"224\">\r\n        <select class=\"form-control\" name=\"prioritypop\" [(ngModel)]=\"priority\">\r\n          <option value=\"\">--select--</option>\r\n          <option value=\"High\">High</option>\r\n          <option value=\"Medium\">Medium</option>\r\n          <option value=\"Low\">Low</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"wStatus\">Status of Consultant:</label>\r\n        <select [(ngModel)]=\"wStatus\" class=\"form-control\" name=\"wStatus\" id=\"wStatus\">\r\n          <option value=\"\">--select--</option>\r\n          <option value=\"A\">Active</option>\r\n          <option value=\"R\">Removed From Webmobilez</option>\r\n          <option value=\"S\">selected from WebmobileZ</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"form-group\">\r\n      <label for=\"notepop\">Note:</label>\r\n      <textarea class=\"form-control\" id=\"notepop\" name=\"notepop\">{{note}} </textarea>\r\n\r\n    </div>\r\n  </div>\r\n  <button type=\"button\" class=\"btn btn-primary\" id=\"openpopupsubmit\">Submit</button>\r\n\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"Note\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\r\n  [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>{{note}}</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n<p-dialog header=\"View Vendors\" [(visible)]=\"displayModalVendor\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>Vendors</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n\r\n<p-dialog [style]=\"{width: '75vw'}\" position=\"top\" [(visible)]=\"showDialog\" header=\"View Vendors Details\"\r\n  [closable]=\"true\" [modal]=\"true\" [resizable]=\"true\">\r\n  <div class=\"flexcolumn container\">\r\n    <p-table class=\"flexcolumn\" [value]=\"data\" [scrollable]=\"true\" [responsive]=\"false\">\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th><span>Created By</span></th>\r\n          <th><span>Vendor Company</span></th>\r\n          <th><span>Contact Name</span></th>\r\n          <th><span>End Client</span></th>\r\n          <th><span>Submission Rate</span></th>\r\n          <th><span>Status</span></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-record>\r\n        <tr>\r\n          <td><span *ngIf=\"record.user_details\">{{record.user_details.name}}</span></td>\r\n          <td>{{record.vendorCompanyName}}</td>\r\n          <td>{{record.vendorName}}</td>\r\n          <td>{{record.endClientName}}</td>\r\n          <td>{{record.submissionRate}}</td>\r\n          <td>{{record.vendorStatus}}</td>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"summary\">\r\n        {{data.length}} Records\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"showDialog=false\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/hotlist/user-list/user-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/hotlist/user-list/user-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"> Hot List </h4>\r\n<p-table #dt [columns]=\"cols\" scrollHeight=\"500px\"  [scrollable]=\"true\" [value]=\"products\" [loading]=\"loading\" [autoLayout]=\"true\" [resizableColumns]=\"true\" columnResizeMode=\"expand\" selectionMode=\"multiple\" [(selection)]=\"selectedProducts\">\r\n  <ng-template pTemplate=\"caption\">\r\n    <div class=\"p-d-flex\">\r\n      <button type=\"button\" pButton pRipple icon=\"pi pi-file-o\" (click)=\"dt.exportCSV()\" class=\"p-mr-2\" pTooltip=\"CSV\"\r\n        tooltipPosition=\"bottom\"></button>\r\n      <!-- <button type=\"button\" pButton pRipple icon=\"pi pi-file-excel\" (click)=\"exportExcel()\" class=\"p-button-success p-mr-2\"  pTooltip=\"XLS\" tooltipPosition=\"bottom\"></button> -->\r\n\r\n      <button type=\"button\" pButton pRipple icon=\"pi pi-filter\" (click)=\"dt.exportCSV({selectionOnly:true})\"\r\n        class=\"p-button-info p-ml-auto\" pTooltip=\"Selection Only\" tooltipPosition=\"bottom\"></button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n      <th>Request Resume</th>\r\n\r\n    </tr>\r\n    <tr>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"Experience\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'startsWith')\"\r\n          placeholder=\"State\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"Relocate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'startsWith')\"\r\n          placeholder=\"Visa Type\" class=\"p-column-filter\">\r\n      </th>\r\n      <th></th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n    <tr [pSelectableRow]=\"rowData\">\r\n      <td *ngFor=\"let col of columns\">\r\n        {{rowData[col.field]}}\r\n      </td>\r\n      <td><a >Request Resume</a></td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/interviews/user-list/user-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/interviews/user-list/user-list.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"> Schedule Interviews </h4>\r\n\r\n<p-table #dt1 [columns]=\"scrollableCols\" [autoLayout]=\"true\"  [value]=\"timeSheets\" [scrollable]=\"true\"\r\n[filterDelay]=\"0\" [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\" [reorderableColumns]=\"true\"\r\nscrollHeight=\"500px\"  dataKey=\"reportId\" editMode=\"row\" [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\r\n[rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Interview Date</th>\r\n      <th>Consultant Name</th>\r\n      <th>Created By</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th> <input pInputText type=\"date\" (input)=\"dt1.filter($event.target.value, 'scheduleDate', 'startsWith')\"\r\n        placeholder=\"Schedule Date\" class=\"p-column-filter\"> </th>\r\n      <th>  <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'consultant.consultatName', 'startsWith')\"\r\n        placeholder=\"Consultant Name\" class=\"p-column-filter\"></th>\r\n      <th>  <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'user_details.name', 'startsWith')\"\r\n        placeholder=\"Created By\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'vendorCompanyName', 'startsWith')\"\r\n          placeholder=\"Company Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'endClientName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th> <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'consultant.technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'endClientLocation', 'startsWith')\"\r\n          placeholder=\"End Client\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'submissionRate', 'startsWith')\"\r\n          placeholder=\"Submission Rate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, 'actualRate', 'startsWith')\"\r\n          placeholder=\"Actual Rate\" class=\"p-column-filter\">\r\n      </th>\r\n      </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.reportStatus,rowData.adminStatus)}\"  >\r\n\r\n<td>{{rowData.scheduleDate | date }} {{rowData.timezone}} </td>\r\n<td>{{rowData.consultant.consultatName }} {{rowData.consultant.consultantLastName }}</td>\r\n<td>{{rowData.user_details.name}}<br>{{rowData.created_at | date}}</td>\r\n      <td *ngFor=\"let col of columns\" >\r\n\r\n              {{rowData|field:col}}\r\n\r\n\r\n      </td>\r\n\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\" [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-create/user-create.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/user-create/user-create.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Add Submissions </h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Choose Consultant:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"state\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (onChange)=\"onChange($event)\"\n                  (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"state.invalid && (state.dirty || state.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"state.errors?.required\">\n                    Consultant is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.state }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Rate:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{crate}}\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Email:</label>\n                <input type=\"email\" class=\"form-control\" value=\"{{cemail}}\" readonly>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Consultant Number:</label>\n                <input type=\"text\" value=\"{{cmobile}}\" class=\"form-control\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Technology:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{ctechnology}}\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Choose Vendor:</label>\n                <p-dropdown #df [options]=\"vendors\" [(ngModel)]=\"selectedVendors\" formControlName=\"vid\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeVendor($event)\" (keydown)=\"vendorsUi($event)\">\n                </p-dropdown>\n\n              </div>\n              <p-button (click)=\"showModalDialog()\" icon=\"pi pi-external-link\" label=\"Add Vendor\"></p-button>\n\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"df.value\">\n              <div class=\"form-group\">\n                <label>Choose Vendor Contacts:</label>\n                <p-dropdown [options]=\"contacts\" [(ngModel)]=\"selectedContacts\" formControlName=\"vendorDetailId\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeContacts($event)\" (keydown)=\"contactsUi($event)\">\n                </p-dropdown>\n                <div *ngIf=\"vendorDetailId.invalid && (vendorDetailId.dirty || vendorDetailId.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"vendorDetailId.errors?.required\">\n                    Contact is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorDetailId }}</small>\n\n              </div>\n              <p-button (click)=\"showModalDialog1()\" icon=\"pi pi-external-link\" label=\"Add Contact\"></p-button>\n\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"vcname\">\n              <div class=\"form-group\">\n                <label>Vendor Contact Name:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{vcname}}\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"vmobile\">\n              <div class=\"form-group\">\n                <label>Vendor Mobile Number:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{vmobile}}\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Choose End CLient:</label>\n                <p-dropdown #dfrf [options]=\"clients\" [(ngModel)]=\"selectedClients\" formControlName=\"clientId\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeClients($event)\" >\n                </p-dropdown>\n                <div *ngIf=\"clientId.invalid && (clientId.dirty || clientId.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"clientId.errors?.required\">\n                    Client is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.clientId }}</small>\n                <p-button (click)=\"showModalDialogClient()\" icon=\"pi pi-external-link\" label=\"Add Client\"></p-button>\n\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>End CLient Location:</label>\n                <input type=\"text\" formControlName=\"endClientLocation\" class=\"form-control\"\n                  placeholder=\"End Client Location\">\n                <div *ngIf=\"endClientLocation.invalid && (endClientLocation.dirty || endClientLocation.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"endClientLocation.errors?.required\">\n                    End ClientLocation is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.endClientLocation }}</small>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Actual Rate:</label>\n                <input type=\"number\" formControlName=\"actualRate\" class=\"form-control\" placeholder=\"Actual Rate\">\n                <div *ngIf=\"actualRate.invalid && (actualRate.dirty || actualRate.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"actualRate.errors?.required\">\n                    ActualRate is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Submission Rate:</label>\n                <input type=\"number\" formControlName=\"submissionRate\" class=\"form-control\" placeholder=\"Submit   Rate\">\n                <div *ngIf=\"submissionRate.invalid && (submissionRate.dirty || submissionRate.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"submissionRate.errors?.required\">\n                    submissionRate is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.submissionRate }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Vendor Status</label>\n                <select #statusvalue class=\"form-control\" formControlName=\"vendorStatus\">\n                  <option value=\"\">--select--</option>\n                  <option value=\"Interview scheduled\">Interview scheduled</option>\n                  <option value=\"Submitted to Client\">Submitted to Client</option>\n                  <option value=\"Submitted to Vendor\">Submitted to Vendor</option>\n                  <option value=\"Disqualified\">Disqualified</option>\n                  <option value=\"Client rejected\">Client rejected</option>\n                  <option value=\"Vendor Rejected\">Vendor Rejected</option>\n                  <option value=\"Vendor screening call\">Vendor screening call</option>\n                  <option value=\"Waiting for Evaluation\">Waiting for Evaluation</option>\n                </select>\n                <div *ngIf=\"vendorStatus.invalid && (vendorStatus.dirty || vendorStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"vendorStatus.errors?.required\">\n                    vendorStatus is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorStatus }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"(statusvalue.value=='Interview scheduled')\">\n              <div class=\"form-group\">\n                <label>Interview Schedule Date :</label>\n                <input type=\"date\" class=\"form-control\" formControlName=\"scheduleDate\" placeholder=\"Interview Schedule Date\">\n              </div>\n            </div>\n            <div class=\"col-md-2\"  *ngIf=\"(statusvalue.value=='Interview scheduled')\">\n              <div class=\"form-group\">\n                <label> Time Zone :</label>\n                <select class=\"form-control\" formControlName=\"timezone\">\n\n                  <option value=\"EST\">EST</option>\n                  <option value=\"PST\">PST</option>\n                  <option value=\"CST\">CST</option>\n                  <option value=\"MST\">MST</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Comments:</label>\n                <textarea formControlName=\"vendorComments\" class=\"form-control\"></textarea>\n                <div *ngIf=\"vendorComments.invalid && (vendorComments.dirty || vendorComments.touched)\"\n                  class=\"form-text text-muted\">\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ vendorComments.jobExperience }}</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Submit\n                Consultant</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<p-dialog header=\"Add New Vendor Contact\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n  <form [formGroup]=\"registerContact\" (ngSubmit)=\"registerContactForm()\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"vendorcontactName\" placeholder=\"Vendor Contact Name\">\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label> Email:</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"vendorcontactEmail\"\n            placeholder=\"Vendor Contact Email\">\n          <div *ngIf=\"vendorcontactEmail.invalid && (vendorcontactEmail.dirty || vendorcontactEmail.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"vendorcontactEmail.errors?.required\">\n              Email is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorcontactEmail }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Mobile Number:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"vendorcontactMobile\" placeholder=\"Mobile Number\">\n\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label> EXT:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"vendorext\" placeholder=\"EXT\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerContact.valid\">Add Vendor\n      Contact</button>\n  </form>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n<p-dialog header=\"Add New Vendor\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerVendorCompany()\">\n\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Company Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"vendorCompanyName\" placeholder=\"Vendor Company Name\">\n          <div *ngIf=\"vendorCompanyName.invalid && (vendorCompanyName.dirty || vendorCompanyName.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"vendorCompanyName.errors?.required\">\n              Company Name is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorCompanyName }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Vendor Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"contactName\" placeholder=\"Vendor Contact Name\">\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label> Email:</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"contactEmail\" placeholder=\"Vendor Contact Email\">\n          <div *ngIf=\"contactEmail.invalid && (contactEmail.dirty || contactEmail.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"contactEmail.errors?.required\">\n              Email is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.contactEmail }}</small>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Mobile Number:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"contactMobile\" placeholder=\"Mobile Number\">\n          <div *ngIf=\"contactMobile.invalid && (contactEmail.dirty || contactMobile.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"contactMobile.errors?.required\">\n              Mobile Number is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.contactMobile }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label> EXT:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"ext\" placeholder=\"EXT\">\n        </div>\n      </div>\n\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerVendor.valid\">Add Vendor</button>\n  </form>\n\n\n\n\n\n\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n\n<p-dialog header=\"Add Client\" [(visible)]=\"displayModalClient\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n  <form [formGroup]=\"registerClient\" (ngSubmit)=\"registerClientForm()\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Client Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"clientName\" placeholder=\"Client Name\">\n          <div *ngIf=\"clientName.invalid && (clientName.dirty || clientName.touched)\"\n          class=\"form-text text-muted\">\n          <div *ngIf=\"clientName.errors?.required\">\n            Client Name is required.\n          </div>\n        </div>\n        <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.clientName }}</small>\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerClient.valid\">Add Client</button>\n  </form>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n\n<p-table [columns]=\"cols\" [value]=\"data\"  [scrollable]=\"true\"\n[filterDelay]=\"0\"  [resizableColumns]=\"true\" columnResizeMode=\"expand\" [reorderableColumns]=\"true\"\nautoLayout=\"true\">\n  <ng-template pTemplate=\"header\" let-columns>\n      <tr>\n          <th *ngFor=\"let col of columns\">\n              {{col.header}}\n          </th>\n      </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n      <tr>\n          <td *ngFor=\"let col of columns\">\n            {{rowData|field:col}}\n          </td>\n      </tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"summary\">\n      There are {{data?.length}} Submissions\n  </ng-template>\n</p-table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-edit/user-create.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/user-edit/user-create.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Edit Job Requirement </h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"updateUserDetails()\" enctype=\"multipart/form-data\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n\n                <label>Job Title:</label>\n                <input type=\"text\" formControlName=\"jobTitle\" class=\"form-control\" placeholder=\"Job Title\">\n                <div *ngIf=\"jobTitle.invalid && (jobTitle.dirty || jobTitle.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobTitle.errors?.required\">\n                    Title is required.\n                  </div>\n                  <div *ngIf=\"jobTitle.errors?.minlength\">\n                    Title must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobTitle }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Experience:</label>\n                <input type=\"number\" formControlName=\"jobExperience\" class=\"form-control\" placeholder=\"Exp\"\n                  required>\n                <div *ngIf=\"jobExperience.invalid && (jobExperience.dirty || jobExperience.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobExperience.errors?.required\">\n                    Experience is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobExperience }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <label>Technology</label>\n              <p-dropdown #dd [options]=\"cars\" [(ngModel)]=\"selectedCar\" formControlName=\"jobTechnology\"\n                [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"test($event)\">\n              </p-dropdown>\n              <div *ngIf=\"jobTechnology.invalid && (jobTechnology.dirty || jobTechnology.touched)\" class=\"form-text text-muted\">\n                <div *ngIf=\"jobTechnology.errors?.required\">\n                  Technology is required.\n                </div>\n\n              </div>\n              <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobTechnology }}</small>\n             </div>\n             <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Visa Type:</label>\n                <select class=\"form-control\" formControlName=\"jobVisaType\">\n                  <option value=\"null\" disabled>Choose visaType</option>\n                  <option value=\"H4 EAD\">H4 EAD\n                  </option>\n                  <option value=\"H1B-Transfer\">H1B-Transfer\n                  </option>\n                  <option value=\"CPT\">CPT\n                  </option>\n                  <option value=\"OPT\">OPT\n                  </option>\n                  <option value=\"H1-B\">H1-B\n                  </option>\n                  <option value=\"GC-EAD\">GC-EAD\n                  </option>\n                  <option value=\"Green Card\">Green Card\n                  </option>\n                  <option value=\"US Citizen\">US Citizen\n                  </option>\n\n                </select>\n                <div *ngIf=\"jobVisaType.invalid && (jobVisaType.dirty || jobVisaType.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"jobVisaType.errors?.required\">\n                    Visa Type is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobVisaType }}</small>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n\n\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Location:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"jobLocation\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"jobLocation.invalid && (jobLocation.dirty || jobLocation.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"jobLocation.errors?.required\">\n                    Location is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobLocation }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Status</label>\n                <select class=\"form-control\" formControlName=\"jobStatus\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"A\">Active</option>\n                  <option value=\"I\">InActive</option>\n                </select>\n                <div *ngIf=\"jobStatus.invalid && (jobStatus.dirty || jobStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobStatus.errors?.required\">\n                    Status is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobStatus }}</small>\n\n              </div>\n            </div>\n\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Job Description</label>\n                <textarea formControlName=\"jobDescription\" class=\"form-control\"></textarea>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Update\n                Job</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-index/user-index.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/user-index/user-index.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-list/user-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/user-list/user-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\r\n<h4 class=\"remove-margin\"> Consultant Submissions <a routerLink=\"/benchsales/create\" class=\"btn btn-primary\">\r\n    Add Submission\r\n  </a></h4>\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" scrollHeight=\"500px\" [autoLayout]=\"true\" [value]=\"timeSheets\" [scrollable]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"\r\n  [reorderableColumns]=\"true\" autoLayout=\"true\" dataKey=\"reportId\" [paginator]=\"true\" [rows]=\"10\"\r\n  [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:90px\">\r\n\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Action</th>\r\n      <th></th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th> <button (click)=\"clearFilters(dt)\">Clear Fields</button></th>\r\n      <th> <input pInputText type=\"date\" [value]=\"dt.filters['created_at'] ? dt.filters['created_at'].value : ''\" (input)=\"dt.filter($event.target.value, 'created_at', 'startsWith')\"\r\n        placeholder=\"Created At\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['consultant.consultatName'] ? dt.filters['consultant.consultatName'].value : ''\" (input)=\"dt.filter($event.target.value, 'consultant.consultatName', 'startsWith')\"\r\n          placeholder=\"First Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['consultant.consultantLastName'] ? dt.filters['consultant.consultantLastName'].value : ''\" (input)=\"dt.filter($event.target.value, 'consultant.consultantLastName', 'startsWith')\"\r\n          placeholder=\"Last Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['vendorStatus'] ? dt.filters['vendorStatus'].value : ''\" (input)=\"dt.filter($event.target.value, 'vendorStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['consultant.technology'] ? dt.filters['consultant.technology'].value : ''\" (input)=\"dt.filter($event.target.value, 'consultant.technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['vendorCompanyName'] ? dt.filters['vendorCompanyName'].value : ''\" (input)=\"dt.filter($event.target.value, 'vendorCompanyName', 'startsWith')\"\r\n          placeholder=\"Company Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['vendorName'] ? dt.filters['vendorName'].value : ''\" (input)=\"dt.filter($event.target.value, 'vendorName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['vendorEmail'] ? dt.filters['vendorEmail'].value : ''\" (input)=\"dt.filter($event.target.value, 'vendorEmail', 'startsWith')\"\r\n          placeholder=\"Vendor Email\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['vendorMobileNumber'] ? dt.filters['vendorMobileNumber'].value : ''\" (input)=\"dt.filter($event.target.value, 'vendorMobileNumber', 'startsWith')\"\r\n          placeholder=\"Vendor Mobile\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['endClientName'] ? dt.filters['endClientName'].value : ''\"  (input)=\"dt.filter($event.target.value, 'endClientName', 'startsWith')\"\r\n          placeholder=\"End Clinet\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['actualRate'] ? dt.filters['actualRate'].value : ''\" (input)=\"dt.filter($event.target.value, 'actualRate', 'startsWith')\"\r\n          placeholder=\"actualRate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" [value]=\"dt.filters['submissionRate'] ? dt.filters['submissionRate'].value : ''\" (input)=\"dt.filter($event.target.value, 'submissionRate', 'startsWith')\"\r\n          placeholder=\"submissionRate\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.reportStatus,rowData.adminStatus)}\">\r\n      <td style=\"text-align:center\">\r\n\r\n        <a (click)=\"showModalDialog(rowData)\" class=\"btn btn-warning btn-sm\">Edit</a>\r\n        <a (click)=\"showModalDialog1(rowData.vendorComments)\" tabindex=\"0\" data-toggle=\"popover\" data-trigger=\"focus\"\r\n          title=\"\" data-original-title=\"Note\"><img src=\"./assets/img/sticky.png\"></a>\r\n      </td>\r\n      <td>\r\n      {{rowData.created_at|date}}\r\n      </td>\r\n      <td *ngFor=\"let col of columns\">\r\n        {{rowData|field:col}}\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\"\r\n  [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n\r\n<p-dialog header=\"Status Change\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n  <h5> {{heading1}}</h5>\r\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerUser(submissionId)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"form-group\">\r\n          <label for=\"popstatus\">Status:</label>\r\n\r\n          <select class=\"form-control\" #seleectevalue formControlName=\"vendorStatus\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"Placed\">Placed</option>\r\n            <option value=\"Interview scheduled\">Interview scheduled</option>\r\n            <option value=\"Submitted to Client\">Submitted to Client</option>\r\n            <option value=\"Submitted to Vendor\">Submitted to Vendor</option>\r\n            <option value=\"Disqualified\">Disqualified</option>\r\n            <option value=\"Client rejected\">Client rejected</option>\r\n            <option value=\"Vendor Rejected\">Vendor Rejected</option>\r\n            <option value=\"Vendor screening call\">Vendor screening call</option>\r\n            <option value=\"Waiting for Evaluation\">Waiting for Evaluation</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-8\" *ngIf=\"seleectevalue.value == 'Interview scheduled'\">\r\n        <div class=\"form-group schedulepopdiv\">\r\n          <label for=\"schedulepop\">Schedule Date:</label>\r\n          <input type=\"date\" class=\"form-control\" formControlName=\"scheduleDate\" value=\"2020-11-21 10:43:17\"><br>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\" *ngIf=\"seleectevalue.value == 'Interview scheduled'\">\r\n        <div class=\"form-group schedulepopdiv\">\r\n          <label for=\"timezone\">Time Zone:</label>\r\n          <select class=\"form-control\" formControlName=\"timezone\">\r\n            <option value=\"\">Choose Time Zone</option>\r\n            <option value=\"EST\">EST</option>\r\n            <option value=\"PST\">PST</option>\r\n            <option value=\"CST\">CST</option>\r\n            <option value=\"MST\">MST</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"form-group\">\r\n          <label for=\"notepop\">Comment:</label>\r\n          <textarea class=\"form-control\" formControlName=\"vendorComments\"></textarea>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary btn-round\">Update</button>\r\n  </form>\r\n\r\n\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"Note\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\r\n  [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>{{comment}}</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/admin/benchsales/contacts/user-list/user-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin/benchsales/contacts/user-list/user-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVuY2hzYWxlcy9jb250YWN0cy91c2VyLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXHNlcC1iYXJcXGFuZy9zcmNcXGFwcFxcYWRtaW5cXGJlbmNoc2FsZXNcXGNvbnRhY3RzXFx1c2VyLWxpc3RcXHVzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYmVuY2hzYWxlcy9jb250YWN0cy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlbmNoc2FsZXMvY29udGFjdHMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4uZGlzYWJsZS10ZHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUtdGQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/benchsales/contacts/user-list/user-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/benchsales/contacts/user-list/user-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/benchsales/contacts/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);







var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.loading = true;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getVendorContacts().subscribe(function (response) { console.log(_this.products = response.contacts); _this.loading = false; }, function (error) { console.log(error); });
        this.cols = [
            { field: 'contactName', header: 'Name' },
            { field: 'contactMobile', header: 'Mobile Number' },
            //   { field: 'consultatMobileNumber', header: 'MobileNumber' },
            //  { field: 'consultantEmail', header: 'Email' },
            { field: 'contactEmail', header: 'Email' },
        ];
        this.exportColumns = this.cols.map(function (col) { return ({ title: col.header, dataKey: col.field }); });
    };
    ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/contacts/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/benchsales/contacts/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/contacts/user-rest.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/benchsales/contacts/user-rest.service.ts ***!
  \****************************************************************/
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
    UserRestService.prototype.getVendorContacts = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/contacts/");
    };
    UserRestService.prototype.statusChangeConsultant = function (index) {
        var body = 'index=' + index;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/status-consultant", JSON.stringify({
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

/***/ "./src/app/admin/benchsales/documents/user-list/user-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/benchsales/documents/user-list/user-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.1rem;\n  margin-right: 0.1rem;\n}\n\n.btn-length {\n  margin-right: 5px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVuY2hzYWxlcy9kb2N1bWVudHMvdXNlci1saXN0L0M6XFx4YW1wcFxcaHRkb2NzXFxzZXAtYmFyXFxhbmcvc3JjXFxhcHBcXGFkbWluXFxiZW5jaHNhbGVzXFxkb2N1bWVudHNcXHVzZXItbGlzdFxcdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9iZW5jaHNhbGVzL2RvY3VtZW50cy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUNHRjs7QUREQTtFQUVFLGlCQUFBO0VBQ0EsbUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlbmNoc2FsZXMvZG9jdW1lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpc2FibGUtdGR7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLnVpLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMTByZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjEwcmVtO1xyXG59XHJcbi5idG4tbGVuZ3RoXHJcbntcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNhYmxlLXRkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi51aS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMXJlbTtcbn1cblxuLmJ0bi1sZW5ndGgge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/benchsales/documents/user-list/user-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/benchsales/documents/user-list/user-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DocumentBenchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentBenchListComponent", function() { return DocumentBenchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/benchsales/documents/user-rest.service.ts");
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
var DocumentBenchListComponent = /** @class */ (function () {
    function DocumentBenchListComponent(confirmation, fb, messageService, route, userRest, router) {
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
    DocumentBenchListComponent.prototype.showModalDialog = function (note, priority, status) {
        this.displayModal = true;
        this.note = note;
        this.priority = priority;
        this.wStatus = status;
    };
    DocumentBenchListComponent.prototype.showModalDialog1 = function (value) {
        this.note = value;
        console.log(value);
        this.displayModal1 = true;
    };
    DocumentBenchListComponent.prototype.showModalDialogVendor = function (reportId) {
        var _this = this;
        this.showDialog = true;
        this.userRest.EditDocument(reportId).subscribe(function (response) { console.log(_this.data = response.submissions); _this.loading = false; }, function (error) { console.log(error); });
        //  this.displayModalVendor = true;
    };
    DocumentBenchListComponent.prototype.calculateDiff = function (dateSent) {
        var currentDate = new Date();
        dateSent = new Date(dateSent);
        return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
    };
    DocumentBenchListComponent.prototype.getIntervIew = function (index) {
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
    DocumentBenchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getConsultants().subscribe(function (response) { console.log(_this.timeSheets = response.timesheet); _this.loading = false; }, function (error) { console.log(error); });
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
        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    };
    DocumentBenchListComponent.prototype.onActivityChange = function (event) {
        var value = event.target.value;
        if (value && value.trim().length) {
            var activity = parseInt(value);
            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    };
    DocumentBenchListComponent.prototype.clearFilters = function (dt) {
        dt.reset(); // reset the table
    };
    DocumentBenchListComponent.prototype.onRowEditInit = function (product) {
        console.log(product);
        this.clonedProducts[product.reportId] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, product);
    };
    DocumentBenchListComponent.prototype.onRowEditSave = function (product, index) {
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
    DocumentBenchListComponent.prototype.onRowEditCancel = function (product, index) {
        this.timeSheets[index] = this.clonedProducts[product.reportId];
        delete this.timeSheets[product.reportId];
    };
    DocumentBenchListComponent.prototype.onRowSelected = function (evt) {
        console.log("Content of the selected row...", evt.data);
    };
    DocumentBenchListComponent.prototype.onDateSelect = function (value) {
        this.table.filter(this.formatDate(value), 'created_at', 'equals');
    };
    DocumentBenchListComponent.prototype.formatDate = function (date) {
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
    DocumentBenchListComponent.prototype.onRepresentativeChange = function (event) {
        if (event.value) {
            console.log(event.value);
            this.table.filter(event.value, 'technology', 'in');
        }
    };
    DocumentBenchListComponent.prototype.dropDatabase = function (event, index) {
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
    DocumentBenchListComponent.prototype._dropDatabase = function (index) {
        var _this = this;
        this.userRest.statusChangeConsultant(index).subscribe(function (response) {
            console.log(response);
            _this.loading = false;
            alert("Aproved");
        }, function (error) { console.log(error); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
    ], DocumentBenchListComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], DocumentBenchListComponent.prototype, "modalContent", void 0);
    DocumentBenchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/documents/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/benchsales/documents/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DocumentBenchListComponent);
    return DocumentBenchListComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/documents/user-rest.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/benchsales/documents/user-rest.service.ts ***!
  \*****************************************************************/
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
    UserRestService.prototype.EditDocument = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/submissions/" + id);
    };
    UserRestService.prototype.getTotalInterviewShecdules = function (index) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getTotalInterviewShecdules", index);
    };
    UserRestService.prototype.getConsultants = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/getAllConsultants/");
    };
    UserRestService.prototype.storeUser = function (form) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/store-consultant", form.value);
    };
    UserRestService.prototype.statusChangeConsultant = function (index) {
        var body = 'index=' + index;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/status-consultant", JSON.stringify({
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

/***/ "./src/app/admin/benchsales/hotlist/user-list/user-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/benchsales/hotlist/user-list/user-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVuY2hzYWxlcy9ob3RsaXN0L3VzZXItbGlzdC9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhZG1pblxcYmVuY2hzYWxlc1xcaG90bGlzdFxcdXNlci1saXN0XFx1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2JlbmNoc2FsZXMvaG90bGlzdC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlbmNoc2FsZXMvaG90bGlzdC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNhYmxlLXRke1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbiIsIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uZGlzYWJsZS10ZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/benchsales/hotlist/user-list/user-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/benchsales/hotlist/user-list/user-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: HotListBenchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotListBenchComponent", function() { return HotListBenchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/benchsales/hotlist/user-rest.service.ts");
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
var HotListBenchComponent = /** @class */ (function () {
    function HotListBenchComponent(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.loading = true;
    }
    HotListBenchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getConsultants().subscribe(function (response) { console.log(_this.products = response.timesheet); _this.loading = false; }, function (error) { console.log(error); });
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
    HotListBenchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/hotlist/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/benchsales/hotlist/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HotListBenchComponent);
    return HotListBenchComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/hotlist/user-rest.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/benchsales/hotlist/user-rest.service.ts ***!
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
    UserRestService.prototype.statusChangeConsultant = function (index) {
        var body = 'index=' + index;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/status-consultant", JSON.stringify({
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

/***/ "./src/app/admin/benchsales/interviews/user-list/user-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/benchsales/interviews/user-list/user-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVuY2hzYWxlcy9pbnRlcnZpZXdzL3VzZXItbGlzdC9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhZG1pblxcYmVuY2hzYWxlc1xcaW50ZXJ2aWV3c1xcdXNlci1saXN0XFx1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2JlbmNoc2FsZXMvaW50ZXJ2aWV3cy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlbmNoc2FsZXMvaW50ZXJ2aWV3cy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNhYmxlLXRke1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi51aS1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUtdGQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnVpLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/benchsales/interviews/user-list/user-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/benchsales/interviews/user-list/user-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: InterviewBenchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewBenchComponent", function() { return InterviewBenchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/benchsales/interviews/user-rest.service.ts");
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
var InterviewBenchComponent = /** @class */ (function () {
    function InterviewBenchComponent(confirmation, fb, messageService, route, userRest, router) {
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
    InterviewBenchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getConsultants().subscribe(function (response) { console.log(_this.timeSheets = response.submissions); _this.loading = false; }, function (error) { console.log(error); });
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
    };
    InterviewBenchComponent.prototype.onActivityChange = function (event) {
        var value = event.target.value;
        if (value && value.trim().length) {
            var activity = parseInt(value);
            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    };
    InterviewBenchComponent.prototype.onRowEditInit = function (product) {
        console.log(product);
        this.clonedProducts[product.reportId] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, product);
    };
    InterviewBenchComponent.prototype.onRowEditSave = function (product, index) {
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
    InterviewBenchComponent.prototype.onRowEditCancel = function (product, index) {
        this.timeSheets[index] = this.clonedProducts[product.reportId];
        delete this.timeSheets[product.reportId];
    };
    InterviewBenchComponent.prototype.onDateSelect = function (value) {
        this.table.filter(this.formatDate(value), 'created_at', 'equals');
    };
    InterviewBenchComponent.prototype.formatDate = function (date) {
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
    InterviewBenchComponent.prototype.onRepresentativeChange = function (event) {
        if (event.value) {
            console.log(event.value);
            this.table.filter(event.value, 'technology', 'in');
        }
    };
    InterviewBenchComponent.prototype.dropDatabase = function (event, index) {
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
    InterviewBenchComponent.prototype._dropDatabase = function (index) {
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
    InterviewBenchComponent.prototype.download = function (event, url) {
        window.open('https://portal.webmobilez.com/public/storage/' + url);
    };
    InterviewBenchComponent.prototype.getColor = function (status, adminStatus) {
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
    ], InterviewBenchComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], InterviewBenchComponent.prototype, "modalContent", void 0);
    InterviewBenchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/interviews/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/benchsales/interviews/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InterviewBenchComponent);
    return InterviewBenchComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/interviews/user-rest.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/benchsales/interviews/user-rest.service.ts ***!
  \******************************************************************/
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
        return this.http.get('${environment.api}/interviewsubmissions/');
    };
    UserRestService.prototype.storeUser = function (form) {
        return this.http.post('${environment.api}/submissions', form.value);
    };
    UserRestService.prototype.statusChangeConsultant = function (index) {
        return this.http.post('${environment.api}/status-consultant', index);
    };
    UserRestService.prototype.getConsultantsList = function () {
        return this.http.get('${environment.api}/getConsultantsList/');
    };
    UserRestService.prototype.editUser = function (id) {
        return this.http.get('${environment.api}/jobs/' + id);
    };
    UserRestService.prototype.editVenodr = function (id) {
        return this.http.get('${environment.api}/contacts/' + id);
    };
    UserRestService.prototype.editConsultant = function (id) {
        return this.http.get('${environment.api}/store-consultant/' + id);
    };
    UserRestService.prototype.updateUser = function (form, id) {
        return this.http.put('${environment.api}/jobs/' + id, form.value);
    };
    UserRestService.prototype.storeDocument = function (document) {
        return this.http.post('${environment.api}/saveDocument', document);
    };
    UserRestService.prototype.getContactDetails = function (index) {
        return this.http.post('${environment.api}/contactsDetails', index);
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

/***/ "./src/app/admin/benchsales/user-create/user-create.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/benchsales/user-create/user-create.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-length {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVuY2hzYWxlcy91c2VyLWNyZWF0ZS9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhZG1pblxcYmVuY2hzYWxlc1xcdXNlci1jcmVhdGVcXHVzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9iZW5jaHNhbGVzL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsaUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlbmNoc2FsZXMvdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWxlbmd0aFxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIiwiLmJ0bi1sZW5ndGgge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/benchsales/user-create/user-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/benchsales/user-create/user-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: Profile, UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/benchsales/user-rest.service.ts");
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
        this.counter = 0;
        this.serverErrors = [];
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [
            { field: 'user_details.name', header: 'Created By', width: '20%', editable: false },
            { field: 'consultant.consultatName', header: 'Consultant Name', width: '20%', editable: false },
            { field: 'consultant.technology', header: 'Technology', width: '20%', editable: false },
            { field: 'vendorCompanyName', header: 'Company Name', width: '20%', editable: false },
            { field: 'vendorName', header: 'Vendor Name', width: '20%', editable: false },
            { field: 'vendorEmail', header: 'Vendor Email', width: '20%', editable: false },
            { field: 'vendorMobileNumber', header: 'Vendor Mobile', width: '20%', editable: false },
            { field: 'endClientName', header: 'End Client Name', width: '20%', editable: false },
            { field: 'actualRate', header: 'Actual Rate', width: '20%', editable: true },
            { field: 'submissionRate', header: 'Submissio Rate', width: '20%', editable: true },
            { field: 'vendorStatus', header: 'Status', width: '20%', editable: true },
        ];
        this.userRest.getConsultantsList().subscribe(function (response) {
            _this.states = response.submissions;
            _this.vendors = response.vendorslist;
            _this.clients = response.clients;
            _this.data = response.data;
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
            'timezone': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('EST'),
        });
        this.registerContact = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'vendorcontactName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorcontactMobile': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorcontactEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'vendorext': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'vendorCompanyName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'contactName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'contactMobile': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'contactEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'ext': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.registerClient = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'clientName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    UserCreateComponent.prototype.showModalDialog = function () {
        this.displayModal = true;
    };
    UserCreateComponent.prototype.showModalDialogClient = function () {
        this.displayModalClient = true;
    };
    UserCreateComponent.prototype.showModalDialog1 = function () {
        this.registerContact.addControl('cvid', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.registerForm.value.vid, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
        this.displayModal1 = true;
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
    UserCreateComponent.prototype.onChange = function (event) {
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
    UserCreateComponent.prototype.ChangeClients = function (event) {
        //   this.clients=[];
        /* this.userRest.editVenodr(event.value).subscribe(
           (response) => {
             this.contacts =  response.contacts;
           },
           (error) => console.log(error)
         ); */
    };
    UserCreateComponent.prototype.ChangeVendor = function (event) {
        var _this = this;
        this.vmobile = '';
        this.vcname = '';
        this.contacts = [];
        this.userRest.editVenodr(event.value).subscribe(function (response) {
            _this.contacts = response.contacts;
        }, function (error) { return console.log(error); });
    };
    UserCreateComponent.prototype.ChangeContactsInner = function (value) {
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
    UserCreateComponent.prototype.ChangeContacts = function (event) {
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
    UserCreateComponent.prototype.vendorsUi = function (event) {
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
    Object.defineProperty(UserCreateComponent.prototype, "clientName", {
        get: function () { return this.registerClient.get('clientName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "actualRate", {
        get: function () { return this.registerForm.get('actualRate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorStatus", {
        get: function () { return this.registerForm.get('vendorStatus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorComments", {
        get: function () { return this.registerForm.get('vendorComments'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "submissionRate", {
        get: function () { return this.registerForm.get('submissionRate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "state", {
        get: function () { return this.registerForm.get('state'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorDetailId", {
        get: function () { return this.registerForm.get('vendorDetailId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vid", {
        get: function () { return this.registerForm.get('vid'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "clientId", {
        get: function () { return this.registerForm.get('clientId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "endClientLocation", {
        get: function () { return this.registerForm.get('vid'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorCompanyName", {
        get: function () { return this.registerVendor.get('vendorCompanyName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "contactName", {
        get: function () { return this.registerVendor.get('contactName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "contactMobile", {
        get: function () { return this.registerVendor.get('contactMobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "contactEmail", {
        get: function () { return this.registerVendor.get('contactEmail'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "ext", {
        get: function () { return this.registerVendor.get('ext'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorcontactName", {
        get: function () { return this.registerContact.get('vendorcontactName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorcontactMobile", {
        get: function () { return this.registerContact.get('vendorcontactMobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorcontactEmail", {
        get: function () { return this.registerContact.get('vendorcontactEmail'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorext", {
        get: function () { return this.registerContact.get('vendorext'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "scheduleDate", {
        get: function () { return this.registerContact.get('scheduleDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "timezone", {
        get: function () { return this.registerContact.get('timezone'); },
        enumerable: true,
        configurable: true
    });
    UserCreateComponent.prototype.registerClientForm = function () {
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
    UserCreateComponent.prototype.registerContactForm = function () {
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
    UserCreateComponent.prototype.registerVendorCompany = function () {
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
    UserCreateComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registerForm);
        //formData.append('myImageToSend', this.imageFile.file);
        this.userRest.storeUser(this.registerForm).subscribe(function (response) {
            _this.registerForm.reset();
            _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submission Completed' });
            _this.data = response.data;
            _this.crate = '';
            _this.cemail = '';
            _this.cmobile = '';
            _this.ctechnology = '';
            _this.vmobile = '';
            _this.vcname = '';
            // this.router.navigate(['benchsales/list'])
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
            template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-create/user-create.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/benchsales/user-create/user-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/user-edit/user-create.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/benchsales/user-edit/user-create.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlbmNoc2FsZXMvdXNlci1lZGl0L3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/benchsales/user-edit/user-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/benchsales/user-edit/user-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: Profile, UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/benchsales/user-rest.service.ts");
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
        this.counter = 0;
        this.serverErrors = [];
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-edit/user-create.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/benchsales/user-edit/user-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/user-index/user-index.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/benchsales/user-index/user-index.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlbmNoc2FsZXMvdXNlci1pbmRleC91c2VyLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/benchsales/user-index/user-index.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/benchsales/user-index/user-index.component.ts ***!
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
        this.userList = [];
        this.timeSheets = [];
        this.loading = true;
    }
    UserIndexComponent.prototype.ngOnInit = function () {
    };
    UserIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-index',
            template: __webpack_require__(/*! raw-loader!./user-index.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-index/user-index.component.html"),
            styles: [__webpack_require__(/*! ./user-index.component.scss */ "./src/app/admin/benchsales/user-index/user-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserIndexComponent);
    return UserIndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/user-list/user-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/benchsales/user-list/user-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVuY2hzYWxlcy91c2VyLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXHNlcC1iYXJcXGFuZy9zcmNcXGFwcFxcYWRtaW5cXGJlbmNoc2FsZXNcXHVzZXItbGlzdFxcdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9iZW5jaHNhbGVzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtBQ0VGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYmVuY2hzYWxlcy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNhYmxlLXRke1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi51aS1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUtdGQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnVpLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/benchsales/user-list/user-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/benchsales/user-list/user-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/benchsales/user-rest.service.ts");
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
        this.serverErrors = [];
        this.clonedProducts = {};
    }
    ;
    UserListComponent.prototype.clearFilters = function (dt) {
        dt.reset(); // reset the table
    };
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'vendorStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'vendorComments': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'scheduleDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'timezone': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.userRest.getConsultants().subscribe(function (response) {
            console.log(_this.timeSheets = response.submissions);
            _this.totalRecords = _this.timeSheets.length;
            _this.loading = false;
        }, function (error) { console.log(error); });
        this.frozenCols = [
            { field: 'consultatName', header: 'Name' },
        ];
        this.scrollableCols = [
            // { field: 'user_details.name', header: 'Created By', width: '20%', editable: false },
            { field: 'consultant.consultatName', header: 'First Name', width: '20%', editable: false },
            { field: 'consultant.consultantLastName', header: 'Last Name', width: '20%', editable: false },
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
    };
    UserListComponent.prototype.showModalDialog = function (data) {
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
    UserListComponent.prototype.showModalDialog1 = function (data) {
        this.displayModal1 = true;
        this.comment = data;
    };
    UserListComponent.prototype.formatDate = function (date) {
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
    UserListComponent.prototype.onDateSelect = function (value) {
        this.table.filter(value, 'created_at', 'equals');
    };
    UserListComponent.prototype.formatDateNew = function (date) {
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
    Object.defineProperty(UserListComponent.prototype, "vendorStatus", {
        get: function () { return this.registerVendor.get('vendorStatus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserListComponent.prototype, "vendorComments", {
        get: function () { return this.registerVendor.get('vendorComments'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserListComponent.prototype, "scheduleDate", {
        get: function () { return this.registerVendor.get('scheduleDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserListComponent.prototype, "timezone", {
        get: function () { return this.registerVendor.get('timezone'); },
        enumerable: true,
        configurable: true
    });
    UserListComponent.prototype.registerUser = function (submissionId) {
        var _this = this;
        console.log(this.registerVendor);
        this.userRest.updateSubmission(this.registerVendor, submissionId).subscribe(function (response) {
            _this.displayModal = false;
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submision Updated' });
            _this.timeSheets = response.submissions;
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
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
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/benchsales/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/user-rest.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/benchsales/user-rest.service.ts ***!
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
    UserRestService.prototype.getConsultants = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/submissions/");
    };
    UserRestService.prototype.storeUser = function (form) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/submissions", form.value);
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

/***/ "./src/app/admin/benchsales/user-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/benchsales/user-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/benchsales/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/benchsales/user-list/user-list.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/benchsales/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/benchsales/user-edit/user-edit.component.ts");
/* harmony import */ var _documents_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./documents/user-list/user-list.component */ "./src/app/admin/benchsales/documents/user-list/user-list.component.ts");
/* harmony import */ var _contacts_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//contacts/user-list/user-list.component */ "./src/app/admin/benchsales/contacts/user-list/user-list.component.ts");
/* harmony import */ var _interviews_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interviews/user-list/user-list.component */ "./src/app/admin/benchsales/interviews/user-list/user-list.component.ts");
/* harmony import */ var _hotlist_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hotlist/user-list/user-list.component */ "./src/app/admin/benchsales/hotlist/user-list/user-list.component.ts");











var routes = [
    // { path: 'list', component: UserListComponent, outlet: 'users' },
    {
        path: '',
        component: _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__["UserIndexComponent"],
        children: [
            { path: 'list', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"], data: {
                    expectedRole: 'BenchSales'
                } },
            { path: 'create', component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"], data: {
                    expectedRole: 'BenchSales'
                } },
            { path: 'edit/:id', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], data: {
                    expectedRole: 'BenchSales'
                } },
            { path: 'documentlist', component: _documents_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["DocumentBenchListComponent"], data: {
                    expectedRole: 'BenchSales'
                } },
            { path: 'interviews', component: _interviews_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__["InterviewBenchComponent"], data: {
                    expectedRole: 'BenchSales'
                } },
            { path: 'hotlist', component: _hotlist_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__["HotListBenchComponent"], data: {
                    expectedRole: 'BenchSales'
                } },
            { path: 'contacts', component: _contacts_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__["ContactListComponent"], data: {
                    expectedRole: 'BenchSales'
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

/***/ "./src/app/admin/benchsales/user.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/benchsales/user.module.ts ***!
  \*************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/benchsales/user-routing.module.ts");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/benchsales/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/benchsales/user-list/user-list.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/benchsales/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/benchsales/user-edit/user-edit.component.ts");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-rest.service */ "./src/app/admin/benchsales/user-rest.service.ts");
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
/* harmony import */ var _field1_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../field1.pipe */ "./src/app/field1.pipe.ts");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _documents_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./documents/user-list/user-list.component */ "./src/app/admin/benchsales/documents/user-list/user-list.component.ts");
/* harmony import */ var _contacts_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./contacts/user-list/user-list.component */ "./src/app/admin/benchsales/contacts/user-list/user-list.component.ts");
/* harmony import */ var _interviews_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./interviews/user-list/user-list.component */ "./src/app/admin/benchsales/interviews/user-list/user-list.component.ts");
/* harmony import */ var _hotlist_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./hotlist/user-list/user-list.component */ "./src/app/admin/benchsales/hotlist/user-list/user-list.component.ts");
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/virtualscroller */ "./node_modules/primeng/virtualscroller.js");
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_32__);


































var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__["UserIndexComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__["UserCreateComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"],
                _field1_pipe__WEBPACK_IMPORTED_MODULE_25__["FieldPipe1"], _documents_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_27__["DocumentBenchListComponent"], _contacts_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_28__["ContactListComponent"], _hotlist_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_30__["HotListBenchComponent"], _interviews_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_29__["InterviewBenchComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__["MultiSelectModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_32__["CalendarModule"], primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_31__["VirtualScrollerModule"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FieldPipe1 = /** @class */ (function () {
    /**
     *
     */
    function FieldPipe1() {
    }
    FieldPipe1.prototype.transform = function (value) {
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
    FieldPipe1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "field"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FieldPipe1);
    return FieldPipe1;
}());



/***/ })

}]);
//# sourceMappingURL=admin-benchsales-user-module-es5.js.map