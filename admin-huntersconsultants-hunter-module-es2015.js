(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-huntersconsultants-hunter-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/huntersconsultants/user-create/user-create.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/huntersconsultants/user-create/user-create.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Add Consultant </h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\" enctype=\"multipart/form-data\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n\n                <label>Consultant First Name:</label>\n                <input type=\"text\" formControlName=\"consultatName\" class=\"form-control\" placeholder=\"First Name\">\n                <div *ngIf=\"consultatName.invalid && (consultatName.dirty || consultatName.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultatName.errors?.required\">\n                    First Name is required.\n                  </div>\n                  <div *ngIf=\"consultatName.errors?.minlength\">\n                    First Name must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultatName }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Last Name:</label>\n                <input type=\"text\" formControlName=\"consultantLastName\" class=\"form-control\" placeholder=\"Last Name\"\n                  >\n                <div *ngIf=\"consultantLastName.invalid && (consultantLastName.dirty || consultantLastName.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultantLastName.errors?.required\">\n                    Last Name is required.\n                  </div>\n                  <div *ngIf=\"consultantLastName.errors?.minlength\">\n                    Last Name must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultantLastName }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Consultant Email</label>\n                <input type=\"email\" formControlName=\"consultantEmail\" class=\"form-control\" placeholder=\"Email\" required>\n\n                <div *ngIf=\"consultantEmail.invalid && (consultantEmail.dirty || consultantEmail.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultantEmail.errors?.required\">\n                    Email is required.\n                  </div>\n                  <div *ngIf=\"consultantEmail.errors?.email\">\n                    Invalid email address.\n                  </div>\n                </div>\n\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultantEmail }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Mobile Number:</label>\n                <input type=\"text\" formControlName=\"consultatMobileNumber\" class=\"form-control\"\n                  placeholder=\"Mobile Number\" required>\n                <div\n                  *ngIf=\"consultatMobileNumber.invalid && (consultatMobileNumber.dirty || consultatMobileNumber.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultatMobileNumber.errors?.required\">\n                    Mobile is required.\n                  </div>\n                  <div *ngIf=\"consultatMobileNumber.errors?.minlength\">\n                    Mobile must be at least 10 number long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\"\n                  *ngIf=\"serverErrors\">{{ serverErrors.consultatMobileNumber }}</small>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <label>Technology</label>\n              <p-dropdown #dd [options]=\"cars\" [(ngModel)]=\"selectedCar\" formControlName=\"technology\"\n                [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"test($event)\">\n              </p-dropdown>\n              <div *ngIf=\"technology.invalid && (technology.dirty || technology.touched)\" class=\"form-text text-muted\">\n                <div *ngIf=\"technology.errors?.required\">\n                  Technology is required.\n                </div>\n\n              </div>\n              <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.technology }}</small>\n              <!-- <div class=\"form-group\">\n                <label>Technology</label>\n\n                <select  class=\"form-control selectpicker\" formControlName=\"technology\">\n                  <option [ngValue]=\"null\" disabled>Choose Technology</option>\n                  <option *ngFor=\"let prf of allProfiles\" [ngValue]=\"prf\">\n                   {{ prf.prName }}\n                  </option>\n                </select>\n                <div *ngIf=\"technology.invalid && (technology.dirty || technology.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"technology.errors?.required\">\n                    Technology is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.technology }}</small>\n\n              </div> -->\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Visa Type:</label>\n                <select class=\"form-control\" formControlName=\"visaType\">\n                  <option value=\"\" disabled>Choose visaType</option>\n                  <option value=\"H4 EAD\">H4 EAD\n                  </option>\n                  <option value=\"H1B-Transfer\">H1B-Transfer\n                  </option>\n                  <option value=\"CPT\">CPT\n                  </option>\n                  <option value=\"OPT\">OPT\n                  </option>\n                  <option value=\"H1-B\">H1-B\n                  </option>\n                  <option value=\"GC-EAD\">GC-EAD\n                  </option>\n                  <option value=\"Green Card\">Green Card\n                  </option>\n                  <option value=\"US Citizen\">US Citizen\n                  </option>\n\n                </select>\n                <div *ngIf=\"visaType.invalid && (visaType.dirty || visaType.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"visaType.errors?.required\">\n                    Visa Type is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.visaType }}</small>\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Other Technology:</label>\n                <input type=\"text\" formControlName=\"otherTechnologies\" class=\"form-control\"\n                  placeholder=\"Other Technology\">\n                <div *ngIf=\"otherTechnologies.invalid && (otherTechnologies.dirty || otherTechnologies.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"otherTechnologies.errors?.required\">\n                    Other Technology is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.otherTechnologies }}</small>\n\n              </div>\n            </div>\n\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Rate:</label>\n                <input type=\"text\" formControlName=\"rate\" class=\"form-control\" placeholder=\"Rate\" >\n                <div *ngIf=\"rate.invalid && (rate.dirty || rate.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"rate.errors?.required\">\n                    Rate is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.rate }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Experience:</label>\n                <input type=\"text\" formControlName=\"experience\" class=\"form-control\" placeholder=\"exp\" >\n                <div *ngIf=\"experience.invalid && (experience.dirty || experience.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"experience.errors?.required\">\n                    Experience is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.experience }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>City:</label>\n                <input type=\"text\" formControlName=\"city\" class=\"form-control\" placeholder=\"City\">\n                <div *ngIf=\"city.invalid && (city.dirty || city.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"city.errors?.required\">\n                    City is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.city }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>State:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"state\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"state.invalid && (state.dirty || state.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"state.errors?.required\">\n                    State is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.state }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Willing to Reloacate:</label>\n                <select class=\"form-control\" formControlName=\"willingLocation\">\n                  <option value=\"\">--select--</option>\n                  <option value=\"yes\">Yes </option>\n                  <option value=\"no\">No</option>\n                </select>\n                <div *ngIf=\"willingLocation.invalid && (willingLocation.dirty || willingLocation.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"willingLocation.errors?.required\">\n                    Willing to Relocate is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.willingLocation }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Documents collected:</label>\n                <select class=\"form-control\" formControlName=\"documentsCollected\">\n                  <option value=\"\">--select--</option>\n                  <option value=\"yes\">Yes\n                  </option>\n                  <option value=\"no\">No\n                  </option>\n                </select>\n                <div *ngIf=\"documentsCollected.invalid && (documentsCollected.dirty || documentsCollected.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"documentsCollected.errors?.required\">\n                    Documents is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.documentsCollected }}</small>\n\n              </div>\n            </div>\n\n\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Resource:</label>\n                <select class=\"form-control\" formControlName=\"resource\">\n                  <option value=\"\">--select--</option>\n                  <option value=\"LinkedIn\">LinkedIn\n                  </option>\n                  <option value=\"Dice\">Dice\n                  </option>\n                </select>\n\n                <div *ngIf=\"resource.invalid && (resource.dirty || resource.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"resource.errors?.required\">\n                    Resource is required.\n                  </div>\n\n                </div>\n\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.resource }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Status</label>\n                <select class=\"form-control\" formControlName=\"reportStatus\">\n                  <option value=\"\">--select--</option>\n                  <option value=\"Interested\">Interested</option>\n                  <option value=\"not interested\">not interested</option>\n                  <option value=\"need to discuss\">need to discuss</option>\n                  <option value=\"Not responding\">Not responding</option>\n                  <option value=\"Employer lift the call\">Employer lift the call</option>\n                  <option value=\"Waiting for documents\">Waiting for documents</option>\n                </select>\n                <div *ngIf=\"reportStatus.invalid && (reportStatus.dirty || reportStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"reportStatus.errors?.required\">\n                    Status is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.reportStatus }}</small>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Last 4 digits of SSN :</label>\n                <input type=\"text\" formControlName=\"ssn\" class=\"form-control\" placeholder=\"SSN\" required>\n                <div *ngIf=\"ssn.invalid && (ssn.dirty || ssn.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"ssn.errors?.required\">\n                    Mobile is required.\n                  </div>\n                  <div *ngIf=\"ssn.errors?.minlength\">\n                    Mobile must be at least 4 number long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.ssn }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Best Contact Number</label>\n                <input type=\"text\" formControlName=\"bestContactNumber\" class=\"form-control\"\n                  placeholder=\"Best Contact Number\" required>\n                <div *ngIf=\"bestContactNumber.invalid && (bestContactNumber.dirty || bestContactNumber.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"bestContactNumber.errors?.required\">\n                    Best ContactNumber is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.bestContactNumber }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Skype ID:</label>\n                <input type=\"text\" formControlName=\"skypeId\" class=\"form-control\" placeholder=\"SkypeId\" required>\n\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>linked In Url:</label>\n                <input type=\"text\" formControlName=\"linkedInUrl\" class=\"form-control\" placeholder=\"Linkedin Url\"\n                  required>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Availability:</label>\n                <input type=\"text\" formControlName=\"availability\" class=\"form-control\" placeholder=\"availability\"\n                  required>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Priority</label>\n                <select class=\"form-control\" formControlName=\"priority\">\n                  <option value=\"\">--select--</option>\n                  <option value=\"High\">High</option>\n                  <option value=\"Medium\">Medium</option>\n                  <option value=\"Low\">Low</option>\n                </select>\n                <div *ngIf=\"priority.invalid && (priority.dirty || priority.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"priority.errors?.required\">\n                    priority is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.priority }}</small>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n\n            <div class=\"col-lg-3\">\n              <div class=\"form-group\">\n                <label for=\"resume\"> Resume :</label>\n                <input type=\"file\" class=\"form-control\" (change)=\"imagesPreviewResume($event)\">\n\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"form-group\">\n                <label for=\"otherDocument\"> ID Proof :</label>\n                <input type=\"file\" class=\"form-control\" (change)=\"imagesPreviewOtherDoc($event)\">\n\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"form-group\">\n                <label for=\"workAuthorization\"> Work Authorization :</label>\n                <input type=\"file\" class=\"form-control\" (change)=\"imagesPreviewWorkAuth($event)\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Comments</label>\n                <textarea formControlName=\"comments\" class=\"form-control\"></textarea>\n\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Note</label>\n                <textarea formControlName=\"note\" class=\"form-control\"></textarea>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology1\">1.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology1\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating1\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating1\">\n                  <option value=\"\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology2\">2.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology2\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating2\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating2\">\n                  <option value=\"\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology3\">3.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology3\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating3\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating3\">\n                  <option value=\"\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology4\">4.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology4\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating4\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating4\">\n                  <option value=\"\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Submit\n                Consultant</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/huntersconsultants/user-edit/user-create.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/huntersconsultants/user-edit/user-create.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Edit Consultant </h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"updateUserDetails()\" enctype=\"multipart/form-data\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n\n                <label>Consultant First Name:</label>\n                <input type=\"text\" formControlName=\"consultatName\" class=\"form-control\" placeholder=\"First Name\">\n                <div *ngIf=\"consultatName.invalid && (consultatName.dirty || consultatName.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultatName.errors?.required\">\n                    First Name is required.\n                  </div>\n                  <div *ngIf=\"consultatName.errors?.minlength\">\n                    First Name must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultatName }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Last Name:</label>\n                <input type=\"text\" formControlName=\"consultantLastName\" class=\"form-control\" placeholder=\"Last Name\"\n                  required>\n                <div *ngIf=\"consultantLastName.invalid && (consultantLastName.dirty || consultantLastName.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultantLastName.errors?.required\">\n                    Last Name is required.\n                  </div>\n                  <div *ngIf=\"consultantLastName.errors?.minlength\">\n                    Last Name must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultantLastName }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Consultant Email</label>\n                <input type=\"email\" formControlName=\"consultantEmail\" class=\"form-control\" placeholder=\"Email\" required>\n\n                <div *ngIf=\"consultantEmail.invalid && (consultantEmail.dirty || consultantEmail.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultantEmail.errors?.required\">\n                    Email is required.\n                  </div>\n                  <div *ngIf=\"consultantEmail.errors?.email\">\n                    Invalid email address.\n                  </div>\n                </div>\n\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.consultantEmail }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Mobile Number:</label>\n                <input type=\"text\" formControlName=\"consultatMobileNumber\" class=\"form-control\"\n                  placeholder=\"Mobile Number\" required>\n                <div\n                  *ngIf=\"consultatMobileNumber.invalid && (consultatMobileNumber.dirty || consultatMobileNumber.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"consultatMobileNumber.errors?.required\">\n                    Mobile is required.\n                  </div>\n                  <div *ngIf=\"consultatMobileNumber.errors?.minlength\">\n                    Mobile must be at least 10 number long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\"\n                  *ngIf=\"serverErrors\">{{ serverErrors.consultatMobileNumber }}</small>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <label>Technology</label>\n              <p-dropdown #dd [options]=\"cars\" [(ngModel)]=\"selectedCar\" formControlName=\"technology\"\n                [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"test($event)\">\n              </p-dropdown>\n              <div *ngIf=\"technology.invalid && (technology.dirty || technology.touched)\" class=\"form-text text-muted\">\n                <div *ngIf=\"technology.errors?.required\">\n                  Technology is required.\n                </div>\n\n              </div>\n              <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.technology }}</small>\n              <!-- <div class=\"form-group\">\n                <label>Technology</label>\n\n                <select  class=\"form-control selectpicker\" formControlName=\"technology\">\n                  <option [ngValue]=\"null\" disabled>Choose Technology</option>\n                  <option *ngFor=\"let prf of allProfiles\" [ngValue]=\"prf\">\n                   {{ prf.prName }}\n                  </option>\n                </select>\n                <div *ngIf=\"technology.invalid && (technology.dirty || technology.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"technology.errors?.required\">\n                    Technology is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.technology }}</small>\n\n              </div> -->\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Visa Type:</label>\n                <select class=\"form-control\" formControlName=\"visaType\">\n                  <option value=\"null\" disabled>Choose visaType</option>\n                  <option value=\"H4 EAD\">H4 EAD\n                  </option>\n                  <option value=\"H1B-Transfer\">H1B-Transfer\n                  </option>\n                  <option value=\"CPT\">CPT\n                  </option>\n                  <option value=\"OPT\">OPT\n                  </option>\n                  <option value=\"H1-B\">H1-B\n                  </option>\n                  <option value=\"GC-EAD\">GC-EAD\n                  </option>\n                  <option value=\"Green Card\">Green Card\n                  </option>\n                  <option value=\"US Citizen\">US Citizen\n                  </option>\n\n                </select>\n                <div *ngIf=\"visaType.invalid && (visaType.dirty || visaType.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"visaType.errors?.required\">\n                    Visa Type is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.visaType }}</small>\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Other Technology:</label>\n                <input type=\"text\" formControlName=\"otherTechnologies\" class=\"form-control\"\n                  placeholder=\"Other Technology\" required>\n                <div *ngIf=\"otherTechnologies.invalid && (otherTechnologies.dirty || otherTechnologies.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"otherTechnologies.errors?.required\">\n                    Other Technology is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.otherTechnologies }}</small>\n\n              </div>\n            </div>\n\n\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Rate:</label>\n                <input type=\"text\" formControlName=\"rate\" class=\"form-control\" placeholder=\"Rate\" required>\n                <div *ngIf=\"rate.invalid && (rate.dirty || rate.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"rate.errors?.required\">\n                    Rate is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.rate }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Experience:</label>\n                <input type=\"text\" formControlName=\"experience\" class=\"form-control\" placeholder=\"exp\" required>\n                <div *ngIf=\"experience.invalid && (experience.dirty || experience.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"experience.errors?.required\">\n                    Experience is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.experience }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>City:</label>\n                <input type=\"text\" formControlName=\"city\" class=\"form-control\" placeholder=\"City\" required>\n                <div *ngIf=\"city.invalid && (city.dirty || city.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"city.errors?.required\">\n                    City is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.city }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>State:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"state\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"state.invalid && (state.dirty || state.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"state.errors?.required\">\n                    State is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.state }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Willing to Reloacate:</label>\n                <select class=\"form-control\" formControlName=\"willingLocation\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"yes\">Yes </option>\n                  <option value=\"no\">No</option>\n                </select>\n                <div *ngIf=\"willingLocation.invalid && (willingLocation.dirty || willingLocation.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"willingLocation.errors?.required\">\n                    Willing to Relocate is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.willingLocation }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Documents collected:</label>\n                <select class=\"form-control\" formControlName=\"documentsCollected\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"yes\">Yes\n                  </option>\n                  <option value=\"no\">No\n                  </option>\n                </select>\n                <div *ngIf=\"documentsCollected.invalid && (documentsCollected.dirty || documentsCollected.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"documentsCollected.errors?.required\">\n                    Documents is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.documentsCollected }}</small>\n\n              </div>\n            </div>\n\n\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Resource:</label>\n                <select class=\"form-control\" formControlName=\"resource\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"yes\">Yes\n                  </option>\n                  <option value=\"no\">No\n                  </option>\n                </select>\n\n                <div *ngIf=\"resource.invalid && (resource.dirty || resource.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"resource.errors?.required\">\n                    Resource is required.\n                  </div>\n\n                </div>\n\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.resource }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Status</label>\n                <select class=\"form-control\" formControlName=\"reportStatus\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"Interested\">Interested</option>\n                  <option value=\"not interested\">not interested</option>\n                  <option value=\"need to discuss\">need to discuss</option>\n                  <option value=\"Not responding\">Not responding</option>\n                  <option value=\"Employer lift the call\">Employer lift the call</option>\n                  <option value=\"Waiting for documents\">Waiting for documents</option>\n                </select>\n                <div *ngIf=\"reportStatus.invalid && (reportStatus.dirty || reportStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"reportStatus.errors?.required\">\n                    Status is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.reportStatus }}</small>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Last 4 digits of SSN :</label>\n                <input type=\"text\" formControlName=\"ssn\" class=\"form-control\" placeholder=\"SSN\" required>\n                <div *ngIf=\"ssn.invalid && (ssn.dirty || ssn.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"ssn.errors?.required\">\n                    Mobile is required.\n                  </div>\n                  <div *ngIf=\"ssn.errors?.minlength\">\n                    Mobile must be at least 4 number long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.ssn }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Best Contact Number</label>\n                <input type=\"text\" formControlName=\"bestContactNumber\" class=\"form-control\"\n                  placeholder=\"Best Contact Number\" required>\n                <div *ngIf=\"bestContactNumber.invalid && (bestContactNumber.dirty || bestContactNumber.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"bestContactNumber.errors?.required\">\n                    Best ContactNumber is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.bestContactNumber }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Skype ID:</label>\n                <input type=\"text\" formControlName=\"skypeId\" class=\"form-control\" placeholder=\"SkypeId\" required>\n\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>linked In Url:</label>\n                <input type=\"text\" formControlName=\"linkedInUrl\" class=\"form-control\" placeholder=\"Linkedin Url\"\n                  required>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Availability:</label>\n                <input type=\"text\" formControlName=\"availability\" class=\"form-control\" placeholder=\"availability\"\n                  required>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Priority</label>\n                <select class=\"form-control\" formControlName=\"priority\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"High\">High</option>\n                  <option value=\"Medium\">Medium</option>\n                  <option value=\"Low\">Low</option>\n                </select>\n                <div *ngIf=\"priority.invalid && (priority.dirty || priority.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"priority.errors?.required\">\n                    priority is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.priority }}</small>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n\n            <div class=\"col-lg-3\">\n              <div class=\"form-group\">\n                  <label for=\"resume\"> Resume :</label>\n                  <input type=\"file\" class=\"form-control\"  (change)=\"imagesPreviewResume($event)\">\n\n              </div>\n          </div>\n          <div class=\"col-lg-3\">\n            <div class=\"form-group\">\n                <label for=\"otherDocument\"> ID Proof :</label>\n                <input type=\"file\" class=\"form-control\"  (change)=\"imagesPreviewOtherDoc($event)\"  >\n\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"form-group\">\n              <label for=\"workAuthorization\"> Work Authorization :</label>\n              <input type=\"file\" class=\"form-control\" (change)=\"imagesPreviewWorkAuth($event)\" >\n          </div>\n      </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Comments</label>\n                <textarea formControlName=\"comments\" class=\"form-control\"></textarea>\n\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Note</label>\n                <textarea formControlName=\"note\" class=\"form-control\"></textarea>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology1\">1.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology1\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating1\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating1\">\n                  <option value=\"null\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology2\">2.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology2\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating2\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating2\">\n                  <option value=\"null\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology3\">3.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology3\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating3\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating3\">\n                  <option value=\"null\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"technology4\">4.Technology:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technology\" formControlName=\"technology4\"\n                  value=\"\">\n              </div>\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"form-group\">\n                <label for=\"rating4\">Rating:</label>\n                <select class=\"form-control\" formControlName=\"rating4\">\n                  <option value=\"null\">--Select--</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Update\n                Consultant</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/huntersconsultants/user-index/user-index.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/huntersconsultants/user-index/user-index.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/huntersconsultants/user-list/user-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/huntersconsultants/user-list/user-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"remove-margin\"> Consultant List  <a routerLink=\"/huntersconsultants/create\" class=\"btn btn-primary\">\r\n  Add Consultant\r\n </a></h4>\r\n\r\n\r\n<!--\r\n<p-table #dt [responsive]=\"true\" [value]=\"timeSheets\" [frozenColumns]=\"frozenCols\" [scrollable]=\"true\"\r\n  scrollHeight=\"200px\" appendTo=\"body\" filterMatchMode=\"equals\" columnResizeMode=\"expand\" dataKey=\"id\" [rows]=\"10\"\r\n  [showCurrentPageReport]=\"true\" tableStyleClass=\"fixtable\" [rowsPerPageOptions]=\"[5,10,20,30]\" [loading]=\"loading\"\r\n  styleClass=\"p-datatable-customers\" [paginator]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['created_at','consultatName','consultantEmail','consultatMobileNumber','experience','rate','reportStatus']\">\r\n\r\n  <ng-template pTemplate=\"header\">\r\n    <tr>\r\n\r\n      <th>Consultant Name</th>\r\n      <th>Created At</th>\r\n      <th>Email</th>\r\n      <th>Phone number</th>\r\n\r\n      <th>Exp </th>\r\n      <th>Rate</th>\r\n      <th>Status</th>\r\n      <th>Action</th>\r\n\r\n    </tr>\r\n    <tr>\r\n\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <p-calendar (onSelect)=\"onDateSelect($event)\" (onClearClick)=\"dt.filter('', 'created_at', 'equals')\"\r\n          [showButtonBar]=\"true\" [style]=\"{'width':'300px'}\" styleClass=\"p-column-filter\" placeholder=\"Date\"\r\n          [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\"></p-calendar>\r\n      </th>\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultantEmail', 'startsWith')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'startsWith')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"exp\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'reportStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-customer>\r\n    <tr>\r\n\r\n\r\n      <td>\r\n        {{customer.consultatName}}\r\n      </td>\r\n      <td>\r\n        {{customer.created_at | date}}\r\n      </td>\r\n      <td>\r\n        {{customer.consultantEmail}}\r\n      </td>\r\n      <td>\r\n        {{customer.consultatMobileNumber}}\r\n      </td>\r\n\r\n      <td>\r\n        {{customer.experience}}\r\n      </td>\r\n      <td>\r\n        {{customer.rate}}\r\n      </td>\r\n      <td>\r\n        {{customer.reportStatus}}\r\n      </td>\r\n      <td>\r\n        -\r\n      </td>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"emptymessage\">\r\n    <tr>\r\n      <td colspan=\"6\">No Consultants found.</td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table> -->\r\n<!--\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n          <h4 class=\"remove-margin\"> Timesheet List </h4>\r\n    <div class=\"card\">\r\n\r\n      <div class=\"card-body\">\r\n        <p-table #dt [value]=\"timeSheets\" dataKey=\"id\"\r\n        [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,20]\" [loading]=\"loading\" styleClass=\"p-datatable-customers\"\r\n        [paginator]=\"false\"\r\n        [filterDelay]=\"0\" [globalFilterFields]=\"['fromDate','duration','assignment','serviceCode']\">\r\n\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Employee</th>\r\n                <th>Date</th>\r\n                <th>Duration</th>\r\n                <th>Assignment</th>\r\n                <th>Service Code</th>\r\n            </tr>\r\n\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-customer>\r\n            <tr>\r\n              <td>\r\n                {{customer.user_details.name}}\r\n              </td>\r\n                <td>\r\n                    {{customer.fromDate | date}}\r\n                </td>\r\n                <td>\r\n                   {{customer.duration}}\r\n                </td>\r\n                <td>\r\n                  {{customer.assignment}}\r\n               </td>\r\n               <td>\r\n                {{customer.serviceCode}}\r\n             </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <tr>\r\n                <td colspan=\"6\">No Users found.</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p-inplace>\r\n  <ng-template pTemplate=\"display\">\r\n    Click to Edit\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n    <input type=\"text\" value=\"PrimeNG\" pInputText>\r\n  </ng-template>\r\n</p-inplace>\r\n\r\n<p-table #dt [value]=\"timeSheets\" dataKey=\"id\"\r\n        [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\" styleClass=\"p-datatable-customers\"\r\n        [paginator]=\"true\" currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\"\r\n        [filterDelay]=\"0\" [globalFilterFields]=\"['consultatName']\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div class=\"table-header\">\r\n                List of Consultants\r\n                <span class=\"p-input-icon-left\">\r\n                    <i class=\"pi pi-search\"></i>\r\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" placeholder=\"Global Search\" />\r\n                </span>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Name</th>\r\n\r\n            </tr>\r\n            <tr>\r\n                <th>\r\n                    <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'startsWith')\" placeholder=\"Search by Name\" class=\"p-column-filter\">\r\n                </th>\r\n\r\n\r\n\r\n\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-customer>\r\n            <tr>\r\n                <td>\r\n                    {{customer.consultatName}}\r\n                </td>\r\n\r\n\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <tr>\r\n                <td colspan=\"6\">No Consultants found.</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n {{rowData|field:col}}\r\n  -->\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" [autoLayout]=\"true\"  [value]=\"timeSheets\" [scrollable]=\"true\"\r\n   [filterDelay]=\"0\" [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\" [reorderableColumns]=\"true\"\r\n  autoLayout=\"true\"  dataKey=\"reportId\" editMode=\"row\" [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\r\n   [rowsPerPageOptions]=\"[10,25,50]\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Action</th>\r\n      <th>Docs</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th>\r\n\r\n      </th>\r\n      <th>\r\n        <i class=\"pi pi-download\"></i>\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'user_details.name', 'startsWith')\"\r\n          placeholder=\"Created By\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n<!--  <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'user_details.name', 'startsWith')\"\r\n        placeholder=\"Created By\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n\r\n   <th>\r\n        <p-calendar (onSelect)=\"onDateSelect($event)\" (onClearClick)=\"dt.filter('', 'created_at', 'equals')\"\r\n          [showButtonBar]=\"true\" [style]=\"{'width':'300px'}\" styleClass=\"p-column-filter\" placeholder=\"Date\"\r\n          [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\"></p-calendar>\r\n      </th> -->\r\n\r\n      <th> <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultantEmail', 'startsWith')\"\r\n          placeholder=\"Email\" class=\"p-column-filter\"></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultatMobileNumber', 'startsWith')\"\r\n          placeholder=\"Phone\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'experience', 'startsWith')\"\r\n          placeholder=\"exp\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n     <!--   <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'rate', 'startsWith')\" placeholder=\"Rate\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n  <th>\r\n        <p-multiSelect [options]=\"statusOptions\" placeholder=\"All\" (onChange)=\"onRepresentativeChange($event)\" styleClass=\"p-column-filter\" >\r\n            <ng-template let-option pTemplate=\"item\">\r\n                <div class=\"p-multiselect-representative-option\">\r\n                     <span class=\"p-ml-1\">{{option.label}}</span>\r\n                </div>\r\n            </ng-template>\r\n        </p-multiSelect>\r\n    </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'visaType', 'startsWith')\"\r\n          placeholder=\"visaType\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'city', 'startsWith')\"\r\n          placeholder=\"city\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'state', 'startsWith')\"\r\n          placeholder=\"state\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'willingLocation', 'startsWith')\"\r\n          placeholder=\"willingLocation\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'documentsCollected', 'startsWith')\"\r\n          placeholder=\"documentsCollected\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'resource', 'startsWith')\"\r\n          placeholder=\"resource\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'ssn', 'startsWith')\"\r\n          placeholder=\"SSN\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'bestContactNumber', 'startsWith')\"\r\n          placeholder=\"bestContactNumber\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'linkedInUrl', 'startsWith')\"\r\n          placeholder=\"linkedInUrl\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'skypeId', 'startsWith')\"\r\n          placeholder=\"skypeId\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'priority', 'startsWith')\"\r\n          placeholder=\"priority\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'reportStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th> -->\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.reportStatus,rowData.adminStatus)}\"  >\r\n      <td style=\"text-align:center\" >\r\n<span *ngIf=\"rowData.userStatus != 'p'\">\r\n  <button pRipple pButton type=\"button\"  icon=\"pi pi-thumbs-up\" (click)=\"dropDatabase($event,rowData.reportId);\"  class=\"p-button-rounded p-button-text \"></button>\r\n        <!--  <button  *ngIf=\"!editing\" pButton pRipple type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" (click)=\"onRowEditInit(rowData)\" class=\"p-button-rounded p-button-text \"></button>\r\n            <button   *ngIf=\"editing\" pButton pRipple type=\"button\" pSaveEditableRow icon=\"pi pi-check\" (click)=\"onRowEditSave(rowData,ri)\" class=\"p-button-rounded p-button-text p-button-success p-mr-2\"></button>\r\n            <button   *ngIf=\"editing\" pButton pRipple type=\"button\" pCancelEditableRow icon=\"pi pi-times\" (click)=\"onRowEditCancel(rowData, ri)\" class=\"p-button-rounded p-button-text p-button-danger\"></button> -->\r\n            <a (click)=\"editUser(rowData.reportId)\"  class=\"btn btn-warning btn-sm\">Edit</a>\r\n\r\n</span>\r\n<span *ngIf=\"rowData.userStatus == 'p'\">Submit to Admin</span>\r\n            </td>\r\n      <td>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/resume/{{rowData.resume}}\" download\r\n        *ngIf=\"rowData.resume\"><img src=\"./assets/img/word.png\"></a>\r\n      <a href=\"https://portal.webmobilez.com/storage/app/uploads/otherDocument/{{rowData.otherDocument}}\"  download *ngIf=\"rowData.otherDocument\"><img\r\n            src=\"./assets/img/idcard.png\"></a>\r\n        <a href=\"https://portal.webmobilez.com/storage/app/uploads/workAuthorization/{{rowData.workauthorization}}\"   download *ngIf=\"rowData.workAuthorization\"><img\r\n            src=\"./assets/img/suitcase.png\"></a>\r\n{{rowData.created_at | date }}</td>\r\n      <td *ngFor=\"let col of columns\" >\r\n            <div *ngIf=\"!col.editable\">\r\n              {{rowData|field:col}}\r\n            </div>\r\n            <p-cellEditor *ngIf=\"col.editable\">\r\n                    <ng-template pTemplate=\"input\" >\r\n                      <div *ngIf=\"rowData|field:col as variable\">\r\n                         <input pInputText type=\"text\"  [(ngModel)]=\"variable\" required>\r\n                                                </div>\r\n                    </ng-template>\r\n                    <ng-template pTemplate=\"output\">\r\n\r\n                        {{rowData|field:col}}\r\n                    </ng-template>\r\n            </p-cellEditor>\r\n      </td>\r\n\r\n      <!-- <td>\r\n        <a href=\"#\" class=\"btn btn-circle btn-sm btn-primary updateStatus\" (click)=\"dropDatabase($event,rowData.reportId);\"  data-toggle=\"tooltip\" title=\"Publish\">\r\n          <i\r\n          class=\"fa fa-thumbs-up\"></i>\r\n        </a>\r\n\r\n          <button  *ngIf=\"!editing\" pButton pRipple type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" (click)=\"onRowEditInit(custom)\" class=\"p-button-rounded p-button-text \"></button>\r\n          <button   *ngIf=\"editing\" pButton pRipple type=\"button\" pSaveEditableRow icon=\"pi pi-check\" (click)=\"onRowEditSave(custom,ri)\" class=\"p-button-rounded p-button-text p-button-success p-mr-2\"></button>\r\n          <button   *ngIf=\"editing\" pButton pRipple type=\"button\" pCancelEditableRow icon=\"pi pi-times\" (click)=\"onRowEditCancel(custom, ri)\" class=\"p-button-rounded p-button-text p-button-danger\"></button>\r\n\r\n      </td>\r\n\r\n    </tr>\r\n   <tr [pEditableRow]=\"rowData\">\r\n\r\n      <td>\r\n        <p-cellEditor>\r\n            <ng-template pTemplate=\"input\">\r\n                <input pInputText type=\"text\" [(ngModel)]=\"rowData.consultatName\">\r\n            </ng-template>\r\n            <ng-template pTemplate=\"output\">\r\n                {{rowData.consultatName}}\r\n            </ng-template>\r\n        </p-cellEditor>\r\n     </td>\r\n     <td>\r\n      <p-cellEditor>\r\n          <ng-template pTemplate=\"input\">\r\n              <input pInputText type=\"text\" [(ngModel)]=\"rowData.consultantEmail\">\r\n          </ng-template>\r\n          <ng-template pTemplate=\"output\">\r\n              {{rowData.consultantEmail}}\r\n          </ng-template>\r\n      </p-cellEditor>\r\n   </td>\r\n\r\n   <td>\r\n    <p-cellEditor>\r\n        <ng-template pTemplate=\"input\">\r\n            <input pInputText type=\"text\" [(ngModel)]=\"rowData.consultantEmail\">\r\n        </ng-template>\r\n        <ng-template pTemplate=\"output\">\r\n            {{rowData.consultantEmail}}\r\n        </ng-template>\r\n    </p-cellEditor>\r\n </td>\r\n <td>\r\n  <p-cellEditor>\r\n      <ng-template pTemplate=\"input\">\r\n          <input pInputText type=\"text\" [(ngModel)]=\"rowData.experience\">\r\n      </ng-template>\r\n      <ng-template pTemplate=\"output\">\r\n          {{rowData.experience}}\r\n      </ng-template>\r\n  </p-cellEditor>\r\n</td> -->\r\n\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\" [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n"

/***/ }),

/***/ "./src/app/admin/huntersconsultants/hunter.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/huntersconsultants/hunter.module.ts ***!
  \***********************************************************/
/*! exports provided: HunterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HunterModule", function() { return HunterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/huntersconsultants/user-routing.module.ts");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/huntersconsultants/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/huntersconsultants/user-list/user-list.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/huntersconsultants/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/huntersconsultants/user-edit/user-edit.component.ts");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-rest.service */ "./src/app/admin/huntersconsultants/user-rest.service.ts");
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
/* harmony import */ var _field3_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../field3.pipe */ "./src/app/field3.pipe.ts");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__);




























let HunterModule = class HunterModule {
};
HunterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__["UserIndexComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__["UserCreateComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"], _field3_pipe__WEBPACK_IMPORTED_MODULE_25__["FieldPipe"]],
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
], HunterModule);



/***/ }),

/***/ "./src/app/admin/huntersconsultants/user-create/user-create.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/huntersconsultants/user-create/user-create.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2h1bnRlcnNjb25zdWx0YW50cy91c2VyLWNyZWF0ZS91c2VyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/huntersconsultants/user-create/user-create.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/huntersconsultants/user-create/user-create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: Profile, UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/huntersconsultants/user-rest.service.ts");
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
            'consultatName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
            'consultantLastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
            'consultantEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'consultatMobileNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]),
            'technology': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'otherTechnologies': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'visaType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'willingLocation': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'documentsCollected': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'resource': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'ssn': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'bestContactNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'linkedInUrl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'skypeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'comments': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'note': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'reportStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'experience': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'availability': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'resume': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'otherDocument': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'workAuthorization': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'technology1': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'rating1': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'technology2': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'rating2': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'technology3': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'rating3': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'technology4': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'rating4': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
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
            this.router.navigate(['huntersconsultants/list']);
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
        template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/huntersconsultants/user-create/user-create.component.html"),
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
        styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/huntersconsultants/user-create/user-create.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserCreateComponent);



/***/ }),

/***/ "./src/app/admin/huntersconsultants/user-edit/user-create.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/huntersconsultants/user-edit/user-create.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2h1bnRlcnNjb25zdWx0YW50cy91c2VyLWVkaXQvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/huntersconsultants/user-edit/user-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/huntersconsultants/user-edit/user-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: Profile, UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/huntersconsultants/user-rest.service.ts");
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
        let id = this.route.snapshot.params.id;
        this.userRest.editUser(id).subscribe((response) => {
            this.registerForm.patchValue({
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
            this.router.navigate(['huntersconsultants/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
    updateUserDetails() {
        let id = this.route.snapshot.params.id;
        this.userRest.updateUser(this.registerForm, id).subscribe((response) => {
            console.log(response),
                this.router.navigate(['huntersconsultants/list']);
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
        template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/huntersconsultants/user-edit/user-create.component.html"),
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
        styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/huntersconsultants/user-edit/user-create.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserEditComponent);



/***/ }),

/***/ "./src/app/admin/huntersconsultants/user-index/user-index.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/huntersconsultants/user-index/user-index.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2h1bnRlcnNjb25zdWx0YW50cy91c2VyLWluZGV4L3VzZXItaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/huntersconsultants/user-index/user-index.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/huntersconsultants/user-index/user-index.component.ts ***!
  \*****************************************************************************/
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
        template: __webpack_require__(/*! raw-loader!./user-index.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/huntersconsultants/user-index/user-index.component.html"),
        styles: [__webpack_require__(/*! ./user-index.component.scss */ "./src/app/admin/huntersconsultants/user-index/user-index.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserIndexComponent);



/***/ }),

/***/ "./src/app/admin/huntersconsultants/user-list/user-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/huntersconsultants/user-list/user-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaHVudGVyc2NvbnN1bHRhbnRzL3VzZXItbGlzdC9DOlxceGFtcHBcXGh0ZG9jc1xcc2VwLWJhclxcYW5nL3NyY1xcYXBwXFxhZG1pblxcaHVudGVyc2NvbnN1bHRhbnRzXFx1c2VyLWxpc3RcXHVzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vaHVudGVyc2NvbnN1bHRhbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtBQ0VGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vaHVudGVyc2NvbnN1bHRhbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpc2FibGUtdGR7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLnVpLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xyXG59XHJcbiIsIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uZGlzYWJsZS10ZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udWktYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/huntersconsultants/user-list/user-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/huntersconsultants/user-list/user-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/huntersconsultants/user-rest.service.ts");
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
    }
    ;
    ngOnInit() {
        this.userRest.getConsultants().subscribe((response) => { console.log(this.timeSheets = response.timesheet); this.loading = false; }, (error) => { console.log(error); });
        this.frozenCols = [
            { field: 'consultatName', header: 'Name' },
        ];
        this.scrollableCols = [
            { field: 'user_details.name', header: 'Created By', width: '20%', editable: false },
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
            message: 'Are you sure to Submit to Admin',
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
        this.router.navigate(['huntersconsultants/edit', id]);
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
        template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/huntersconsultants/user-list/user-list.component.html"),
        styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/huntersconsultants/user-list/user-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserListComponent);



/***/ }),

/***/ "./src/app/admin/huntersconsultants/user-rest.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/huntersconsultants/user-rest.service.ts ***!
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
    getTimeSheet() {
        return this.http.get('https://portal.webmobilez.com/public/api/getAllTimesheets');
    }
    getConsultants() {
        return this.http.get('https://portal.webmobilez.com/public/api/getAllConsultants/');
    }
    storeUser(form) {
        return this.http.post('https://portal.webmobilez.com/public/api/store-consultant', form.value);
    }
    statusChangeConsultant(index) {
        return this.http.post('https://portal.webmobilez.com/public/api/status-consultant', index);
    }
    editUser(id) {
        return this.http.get('https://portal.webmobilez.com/public/api/store-consultant/' + id);
    }
    updateUser(form, id) {
        return this.http.put('https://portal.webmobilez.com/public/api/store-consultant/' + id, form.value);
    }
    storeDocument(document) {
        return this.http.post('https://portal.webmobilez.com/public/api/saveDocument', document);
    }
};
UserRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserRestService);



/***/ }),

/***/ "./src/app/admin/huntersconsultants/user-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/huntersconsultants/user-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/huntersconsultants/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/huntersconsultants/user-list/user-list.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/huntersconsultants/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/huntersconsultants/user-edit/user-edit.component.ts");







const routes = [
    // { path: 'list', component: UserListComponent, outlet: 'users' },
    {
        path: '',
        component: _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__["UserIndexComponent"],
        children: [
            { path: 'list', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"], data: {
                    expectedRole: 'HeadHunters'
                } },
            { path: 'inactivelist', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"], data: {
                    expectedRole: 'HeadHunters'
                } },
            { path: 'create', component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"], data: {
                    expectedRole: 'HeadHunters'
                } },
            { path: 'edit/:id', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], data: {
                    expectedRole: 'HeadHunters'
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

/***/ "./src/app/field3.pipe.ts":
/*!********************************!*\
  !*** ./src/app/field3.pipe.ts ***!
  \********************************/
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
//# sourceMappingURL=admin-huntersconsultants-hunter-module-es2015.js.map