(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"bg-dark ourAppHeader \" style=\"text-align:center\">\n\n   \n  <h1 class=\"text-primary text-center text-monospace  \"  >\n    Welcome to {{ title }}!\n  </h1>\n  <p class=\" text-info text-uppercase  text-monospace lead\" >Creativity Define You!</p>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-component/create-component.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-component/create-component.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n\n  \n  <mat-card id=\"matCard\" >\n    <!-- <section class=\"mat-typography\" >\n      <h3 [class.test] = \"test\" class ='mm'>New TYpo</h3>\n      <h3 [ngStyle] = \"fontSize \" class ='mm'>New TYpo</h3>\n    </section> \n    <mat-divider></mat-divider>\n    <br>\n   <button mat-flat-button (click)=\"changeColor()\">Color</button> \n    <br>\n    <mat-divider></mat-divider>\n    <br> -->\n\n    <form  [formGroup] = \"creatForm\" class=\"create-form\" >\n      <mat-form-field class=\"field-full-width\">\n        <input matInput  placeholder=\"Title\" formControlName=\"title\" #title>\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Responsiable\" formControlName=\"responsible\" #responsible>\n       \n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"field-full-width\">\n       \n            <textarea  value=\"{{showUp}}\" matInput placeholder=\"descritption\" formControlName=\"descritption\" #descritption></textarea>       \n\n      </mat-form-field>\n     \n     \n\n    \n      <br>\n      <mat-form-field class=\"field-full-width\">\n        <textarea matInput placeholder=\"Severity\" formControlName=\"severity\" #severity></textarea>\n      </mat-form-field>\n\n      \n        <button mat-flat-button color=\"green\" routerLink=\"/list\" >Back</button>\n        <button mat-flat-button type=\"submit\" (click)=\"addIssue(title.value, responsible.value, descritption.value, severity.value)\" [disabled] =\"creatForm.pristine || creatForm.invalid\" mat-rasied-button color=\"blue\">ADD</button>\n\n    </form>\n\n<!--<form method=\"POST\" enctype=\"multipart/form-data\" [formGroup] = \"myForm\" class=\"create-form\" >\n  \n    <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n\n    <button mat-flat-button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" \n  [disabled]=\"!uploader.getNotUploadedItems().length\" >\n      Upload an Image\n</button>\n</form>-->\n\n<angular-editor class=\"e2e-inner-html-interpolated\" [config]=\"editorConfig\" [(ngModel)]=\"showUp\"></angular-editor>\n\n  </mat-card>\n</div>\n\n\n  \n   \n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-component/edit-component.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-component/edit-component.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-component works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/listcomponent/listcomponent.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listcomponent/listcomponent.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"helloList\" *ngIf=\" '' === ''; else elseBlock \" >\n\n   <script src=\"../prism.js\"></script>  \n    <div *ngIf=\"'google' === 'google'; else elseBlock\" >\n        <button mat-raised-button color=\"primary\" routerLink=\"/create\">Create New Issue</button>\n\n    </div>\n    <ng-template #elseBlock>welcome to site!!! </ng-template>\n  \n    <br><br> \n  \n      \n    <mat-divider></mat-divider>\n\n   \n<!--<table mat-table [dataSource]=\"issues\" class=\"mat-elevation-z8\">-->\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column \n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef> Unreal Tutroial's </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.title}} \n       \n\n    </td>\n  </ng-container>-->\n  <div class=\"container\" >\n  <div class=\"row\" >\n    <div class=\"col-12\" >\n        <mat-tab-group>\n            <mat-tab label=\"Blogs\"> \n      \n                <div class=\" backCard\" *ngFor=\"let title of issues\" >\n                  <br><br>\n                    <mat-card  class=\" container example-card\"  >\n                      <mat-card-header >\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title class=\" text-monospace\" >\n                          <h2>  {{title.title}}</h2>\n                        </mat-card-title>\n                        <mat-card-subtitle> \n                            <mat-chip-list>\n                              <div *ngIf=\"tagApiActivated; else elsec\" > \n                                <mat-chip  (click)=\"tagApi(title.responsebile)\" color=\"primary\" selected><span class=\"text-right\" >\n                                  {{title.responsebile}}</span>\n                                </mat-chip>\n                              </div>\n                              <ng-template #elsec>\n                                  <mat-chip (click)=\"fetchIssues()\" routerLinkActive=\"router-link-active\"  color=\"primary\" selected><span class=\"text-right elsec \" >\n                                      {{title.responsebile}} <br></span>\n                                    </mat-chip>\n                                    <mat-chip (click)=\"fetchIssues()\" routerLinkActive=\"router-link-active\"  color=\"primary\" selected><span class=\"text-right elsec \" >\n                                        OFF <br></span>\n                                      </mat-chip>\n                              </ng-template>\n                              \n                              </mat-chip-list>\n                        </mat-card-subtitle>\n                      </mat-card-header>\n                      <mat-card-content  class=\"e2e-inner-html-interpolated  \" > \n                        {{title.severity}}\n                  \n                       <!-- <div class=\"text-justify\" [innerHTML] = title.description  >  \n                       </div> -->\n                      \n                                      \n                    \n                      </mat-card-content>\n                      <mat-card-actions>\n                         <!-- <button mat-button color=\"primary\" (click)=\"editIssues(title._id)\">Edit</button>\n                          <button mat-button color=\"warn\" (click)=\"deleteIssue(title._id)\">\n                            <i class=\"material-icons\">\n                              delete\n                              </i>\n                          </button>  -->  \n                       <!-- <button mat-raised-button color=\"info\" (click)=\"postAvi_id(title._id)\">Post Open...</button> -->\n                       <button matTooltip=\" Open Post {{title.title}} \" style=\"background-color: bisque;\" mat-button  mat-raised-button (click)=\"openSnackBar(title.title, postAvi_id(title._id))\">Post Open</button>\n                      </mat-card-actions>\n                    </mat-card>\n                    <br>\n                    <mat-divider></mat-divider>\n\n                  </div>\n                  <br>\n      \n            </mat-tab>\n            <mat-tab color=\"primary\" label=\"News\"> Content 2 </mat-tab>\n            <mat-tab label=\"I,m Calling From!\"> INDIA </mat-tab>\n          </mat-tab-group>\n       \n    </div>\n  </div>\n  </div>\n  <!-- Name Column -->\n <!-- <ng-container matColumnDef=\"responsebile\">\n    <th mat-header-cell *matHeaderCellDef> Ressponsible </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.responsebile}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"description\">\n    <th mat-header-cell *matHeaderCellDef></th>\n    <td mat-cell *matCellDef=\"let element\"></td>\n  </ng-container>-->\n\n  <!-- Weight Column \n  <ng-container matColumnDef=\"severity\">\n    <th mat-header-cell *matHeaderCellDef> Severity </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.severity}} </td>\n  </ng-container>-->\n\n  <!-- Symbol Column \n  <ng-container matColumnDef=\"status\">\n    <th mat-header-cell *matHeaderCellDef> Status </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n  </ng-container>\n<br>\n\n<ng-container matColumnDef=\"filename\">\n  <th mat-header-cell *matHeaderCellDef> Image Status </th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.filename}}  \n    <img width=\"100px\" height=\"90px\" src='{{element.filename}}'>\n    <mat-card class=\"example-card\">\n      <img mat-card-image src=\"oneImageReturn(element.filename)\" alt=\"Photo of a Shiba Inu\">\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n          bred for hunting.\n        </p>\n      </mat-card-content>\n    </mat-card></td></ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>-->\n\n</div>\n\n<ng-template #elseBlock>\n  <h4> Add More!! Bug's like Features </h4>\n</ng-template>\n\n\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/post-view/post-view.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-view/post-view.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"container\" >\n        <div class=\"row\" >\n          <div class=\"col-12\" >\n                <button mat-button color=\"warn\" [routerLink]=\"['/list']\" routerLinkActive=\"router-link-active\" >\n                    <i class=\"material-icons\">\n                        keyboard_backspace\n                      </i>\n                      BACK\n                  </button> \n              <mat-tab-group>\n                  <mat-tab label=\"Blogs\"> \n            \n                      <div class=\" backCard\"  >\n                        <br><br>\n                       \n                          <mat-card  class=\" container example-card\"  >\n                            <mat-card-header >\n                              <div mat-card-avatar class=\"example-header-image\"></div>\n                              <mat-card-title class=\" text-monospace\" >\n                                <h2>  {{issuesa?.title}}</h2>\n                              </mat-card-title>\n                              <mat-card-subtitle> \n                                  <mat-chip-list>\n                                      <mat-chip  color=\"primary\" selected><span class=\"text-right\" >\n                                        {{issuesa?.responsebile}}</span>\n                                      </mat-chip>\n                                    \n                                    </mat-chip-list>\n                              </mat-card-subtitle>\n                            </mat-card-header>\n                            <mat-card-content class=\"e2e-inner-html-interpolated  \" > \n                        \n                                \n                             <div class=\"text-justify\" [innerHTML] = issuesa?.description  >  \n                             </div> \n                            \n                                            \n                          \n                            </mat-card-content>\n                            <mat-card-actions>\n                               <!-- <button mat-button color=\"primary\" (click)=\"editIssues(title._id)\">Edit</button>\n                                <button mat-button color=\"warn\" (click)=\"deleteIssue(title._id)\">\n                                  <i class=\"material-icons\">\n                                    delete\n                                    </i>\n                                </button>  -->  \n                                <button mat-button color=\"warn\" [routerLink]=\"['/list']\" routerLinkActive=\"router-link-active\" >\n                                    <i class=\"material-icons\">\n                                            arrow_back_ios\n                                      </i>\n                                      BACK\n                                  </button> \n                            </mat-card-actions>\n                          </mat-card>\n                          <br>\n                          <mat-divider></mat-divider>\n      \n                        </div>\n                        <br>\n            \n                  </mat-tab>\n                  <mat-tab color=\"primary\" label=\"Description\"> <div class=\"text-justify\" [innerHTML] = issuesa?.description  >  \n                    </div>  </mat-tab>\n                  <mat-tab label=\"CODE\"> coming up!! </mat-tab>\n                </mat-tab-group>\n             \n          </div>\n        </div>\n        </div>\n</body>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_component_create_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-component/create-component.component */ "./src/app/create-component/create-component.component.ts");
/* harmony import */ var _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-component/edit-component.component */ "./src/app/edit-component/edit-component.component.ts");
/* harmony import */ var _listcomponent_listcomponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listcomponent/listcomponent.component */ "./src/app/listcomponent/listcomponent.component.ts");
/* harmony import */ var _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-view/post-view.component */ "./src/app/post-view/post-view.component.ts");







const routes = [
    { path: 'create', component: _create_component_create_component_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponentComponent"] },
    { path: 'edit/:id', component: _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_4__["EditComponentComponent"] },
    { path: 'list', component: _listcomponent_listcomponent_component__WEBPACK_IMPORTED_MODULE_5__["ListcomponentComponent"] },
    { path: 'postAvi/:id', component: _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_6__["PostViewComponent"] },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ourAppHeader{\n    height: 300px;\n    background-image: url('https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80');\n    background-position: center;\n    background-size: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEpBQThKO0lBQzlKLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXJBcHBIZWFkZXJ7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcwNzkwMzc2Nzc4LWE5ZmJjODZkNzBlMj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NjQ5JnE9ODAnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xufVxuIl19 */"

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
    constructor() {
        this.title = 'l4 Blog*';
    }
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm2015/ngx-editor.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./highlight.service */ "./src/app/highlight.service.ts");
/* harmony import */ var _listcomponent_listcomponent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./listcomponent/listcomponent.component */ "./src/app/listcomponent/listcomponent.component.ts");
/* harmony import */ var _create_component_create_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-component/create-component.component */ "./src/app/create-component/create-component.component.ts");
/* harmony import */ var _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-component/edit-component.component */ "./src/app/edit-component/edit-component.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./post-view/post-view.component */ "./src/app/post-view/post-view.component.ts");






// import { FileSelectDirective } from 'ng2-file-upload';











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _listcomponent_listcomponent_component__WEBPACK_IMPORTED_MODULE_12__["ListcomponentComponent"],
            _create_component_create_component_component__WEBPACK_IMPORTED_MODULE_13__["CreateComponentComponent"],
            _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_14__["EditComponentComponent"],
            _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_16__["PostViewComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_editor__WEBPACK_IMPORTED_MODULE_6__["NgxEditorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
        ],
        providers: [_issue_service__WEBPACK_IMPORTED_MODULE_10__["IssueService"], _highlight_service__WEBPACK_IMPORTED_MODULE_11__["HighlightService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/create-component/create-component.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/create-component/create-component.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field-full-width{\r\n    width: 60%;\r\n    \r\n}\r\n\r\n#matCard{\r\n    background-color: bisque;\r\n}\r\n\r\nh3{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-size: 28px;\r\n    color: chocolate;\r\n}\r\n\r\n.test{\r\n    font-size: 20px; \r\n    color: blueviolet;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWNvbXBvbmVudC9jcmVhdGUtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVOztBQUVkOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksc0hBQXNIO0lBQ3RILGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLWNvbXBvbmVudC9jcmVhdGUtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGQtZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBcclxufVxyXG5cclxuI21hdENhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6IGNob2NvbGF0ZTtcclxufVxyXG5cclxuLnRlc3R7XHJcbiAgICBmb250LXNpemU6IDIwcHg7IFxyXG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-component/create-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/create-component/create-component.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponentComponent", function() { return CreateComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







// tslint:disable-next-line:use-pipe-transform-interface
let CreateComponentComponent = class CreateComponentComponent {
    constructor(issuesService, fb, routera, sanitizer) {
        this.issuesService = issuesService;
        this.fb = fb;
        this.routera = routera;
        this.sanitizer = sanitizer;
        this.showUp = '';
        this.hellotest = 'Hello Testing Calling';
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '25rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            uploadUrl: 'v1/images',
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
            ]
        };
        // Upload File Here!
        // public URL = 'http://localhost:4420/uploads';
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: 'http://localhost:4420/uploads', itemAlias: 'file' });
        this.creatForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            responsible: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            descritption: '',
            severity: ''
        });
        this.myForm = this.fb.group({
            file: ''
        });
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
        // return this.sanitizer.bypassSecurityTrustHtml(html);
        // return this.sanitizer.bypassSecurityTrustScript(html);
        // return this.sanitizer.bypassSecurityTrustUrl(html);
        // return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
    addIssue(title, res, des, serv) {
        this.issuesService.addIssue(title, res, des, serv).subscribe(() => {
            this.routera.navigate([`/list`]);
        });
    }
    // fileUpload(file) {
    //   this.issuesService.addUpload(file).subscribe(() => {
    //     this.routera.navigate([`/list`]);
    //   });
    // }
    ngOnInit() {
        // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        // this.uploader.onCompleteItem = (item: any, response: any, status: any) => {
        //      console.log('FileUpload:uploaded:', item, status, response);
        //      alert('File uploaded successfully');
        //  };
    }
    changeColor() {
        if (true) {
            this.test = true;
        }
    }
};
CreateComponentComponent.ctorParameters = () => [
    { type: _issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
CreateComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeHtml'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-component',
        template: __webpack_require__(/*! raw-loader!./create-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-component/create-component.component.html"),
        styles: [__webpack_require__(/*! ./create-component.component.css */ "./src/app/create-component/create-component.component.css")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], CreateComponentComponent);



/***/ }),

/***/ "./src/app/edit-component/edit-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/edit-component/edit-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtY29tcG9uZW50L2VkaXQtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/edit-component/edit-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/edit-component/edit-component.component.ts ***!
  \************************************************************/
/*! exports provided: EditComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponentComponent", function() { return EditComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditComponentComponent = class EditComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-component',
        template: __webpack_require__(/*! raw-loader!./edit-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-component/edit-component.component.html"),
        styles: [__webpack_require__(/*! ./edit-component.component.css */ "./src/app/edit-component/edit-component.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EditComponentComponent);



/***/ }),

/***/ "./src/app/highlight.service.ts":
/*!**************************************!*\
  !*** ./src/app/highlight.service.ts ***!
  \**************************************/
/*! exports provided: HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-java */ "./node_modules/prismjs/components/prism-java.js");
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-sass */ "./node_modules/prismjs/components/prism-sass.js");
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/components/prism-scss */ "./node_modules/prismjs/components/prism-scss.js");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_12__);














let HighlightService = class HighlightService {
    // tslint:disable-next-line:ban-types
    constructor(platformId) {
        this.platformId = platformId;
    }
    highlightAll() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
        }
    }
};
HighlightService.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
HighlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], HighlightService);



/***/ }),

/***/ "./src/app/issue.service.ts":
/*!**********************************!*\
  !*** ./src/app/issue.service.ts ***!
  \**********************************/
/*! exports provided: IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let IssueService = class IssueService {
    constructor(http) {
        this.http = http;
        this.url = 'http://192.168.43.55';
    }
    getIssues() {
        return this.http.get(`${this.url}/issues`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('fetched Data!')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getData_', [])));
    }
    getIssueById(id) {
        return this.http.get(`${this.url}/issues/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('fetched id,s!')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getiD_', [])));
    }
    // Find With TagLine;
    getTagRes(tag) {
        return this.http.get(`${this.url}/tag/${tag}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('True')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTag', [])));
    }
    // Get Images from Server;
    getImages() {
        return this.http.get(`${this.url}/files`);
    }
    // @show Image Only One & check Image or Not;
    returnOneImage(filename) {
        // const ImaeRetun = {filename: filename };
        return this.http.get(`${this.url}/image/${filename}`);
    }
    addIssue(title, responsible, descriptoin, serverity) {
        const issue = {
            title,
            responsebile: responsible,
            description: descriptoin,
            severity: serverity,
        };
        return this.http.post(`${this.url}/issues/add`, issue);
    }
    addUpload(file) {
        const uploadFile = {
            file
        };
        return this.http.post(`${this.url}/uploads`, uploadFile);
    }
    uploadImage(file) {
        const formData = new FormData();
        formData.append('file', '', '');
        return this.http.post(`${this.url}/uploads`, formData);
    }
    // Upade Code
    updateIssue(id, title, responsebile, description, severity, status) {
        const issue = {
            title,
            responsebile,
            description,
            severity,
            status
        };
        return this.http.post(`${this.url}/issues/update/${id}`, issue);
    }
    deleteIssue(id) {
        return this.http.get(`${this.url}/issues/delete/${id}`);
    }
    // Handle Error's
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
IssueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
IssueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], IssueService);



/***/ }),

/***/ "./src/app/listcomponent/listcomponent.component.css":
/*!***********************************************************!*\
  !*** ./src/app/listcomponent/listcomponent.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* PrismJS 1.16.0\nhttps://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript */\n/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\tfont-size: 1em;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #f5f2f0;\n}\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n.token.punctuation {\n\tcolor: #999;\n}\n.namespace {\n\topacity: .7;\n}\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #9a6e3a;\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n.token.function,\n.token.class-name {\n\tcolor: #DD4A68;\n}\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n.token.entity {\n\tcursor: help;\n}\ntable{\r\n    width: 100%;\r\n}\nth{\r\n    font-size: 18px;\r\n    \r\n}\n.example-card {\r\n    max-width: 1000px;\r\n  }\n.example-header-image {\r\n    background-size: cover;\r\n  }\n.b{\r\n    font: bold;\r\n  }\n.backCard{\r\n  background-color: #303030; \r\n \r\n}\n.elsec{\r\n  color: cyan;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpc20uY3NzIiwic3JjL2FwcC9saXN0Y29tcG9uZW50L2xpc3Rjb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtzRkFDc0Y7QUFDdEY7Ozs7RUFJRTtBQUVGOztDQUVDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsd0JBQXdCO0NBQ3hCLHNFQUFzRTtDQUN0RSxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixnQkFBZ0I7O0NBRWhCLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsV0FBVzs7Q0FFWCxxQkFBcUI7Q0FFckIsaUJBQWlCO0NBQ2pCLGFBQWE7QUFDZDtBQUVBOztDQUVDLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7QUFFQTs7Q0FFQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQzs7RUFFQyxpQkFBaUI7Q0FDbEI7QUFDRDtBQUVBLGdCQUFnQjtBQUNoQjtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QsY0FBYztBQUNmO0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCO0FBRUEsZ0JBQWdCO0FBQ2hCO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7QUFFQTs7OztDQUlDLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsV0FBVztBQUNaO0FBRUE7Q0FDQyxXQUFXO0FBQ1o7QUFFQTs7Ozs7OztDQU9DLFdBQVc7QUFDWjtBQUVBOzs7Ozs7Q0FNQyxXQUFXO0FBQ1o7QUFFQTs7Ozs7Q0FLQyxjQUFjO0NBQ2QsaUNBQWlDO0FBQ2xDO0FBRUE7OztDQUdDLFdBQVc7QUFDWjtBQUVBOztDQUVDLGNBQWM7QUFDZjtBQUVBOzs7Q0FHQyxXQUFXO0FBQ1o7QUFFQTs7Q0FFQyxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsWUFBWTtBQUNiO0FDM0lBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxlQUFlOztBQUVuQjtBQUVBO0lBQ0ksaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0VBQ0UseUJBQXlCOztBQUUzQjtBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbGlzdGNvbXBvbmVudC9saXN0Y29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQcmlzbUpTIDEuMTYuMFxuaHR0cHM6Ly9wcmlzbWpzLmNvbS9kb3dubG9hZC5odG1sI3RoZW1lcz1wcmlzbSZsYW5ndWFnZXM9bWFya3VwK2NzcytjbGlrZStqYXZhc2NyaXB0ICovXG4vKipcbiAqIHByaXNtLmpzIGRlZmF1bHQgdGhlbWUgZm9yIEphdmFTY3JpcHQsIENTUyBhbmQgSFRNTFxuICogQmFzZWQgb24gZGFiYmxldCAoaHR0cDovL2RhYmJsZXQuY29tKVxuICogQGF1dGhvciBMZWEgVmVyb3VcbiAqL1xuXG5jb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRjb2xvcjogYmxhY2s7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHRleHQtc2hhZG93OiAwIDFweCB3aGl0ZTtcblx0Zm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcblx0Zm9udC1zaXplOiAxZW07XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHdoaXRlLXNwYWNlOiBwcmU7XG5cdHdvcmQtc3BhY2luZzogbm9ybWFsO1xuXHR3b3JkLWJyZWFrOiBub3JtYWw7XG5cdHdvcmQtd3JhcDogbm9ybWFsO1xuXHRsaW5lLWhlaWdodDogMS41O1xuXG5cdC1tb3otdGFiLXNpemU6IDQ7XG5cdC1vLXRhYi1zaXplOiA0O1xuXHR0YWItc2l6ZTogNDtcblxuXHQtd2Via2l0LWh5cGhlbnM6IG5vbmU7XG5cdC1tb3otaHlwaGVuczogbm9uZTtcblx0LW1zLWh5cGhlbnM6IG5vbmU7XG5cdGh5cGhlbnM6IG5vbmU7XG59XG5cbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl06Oi1tb3otc2VsZWN0aW9uLCBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6LW1vei1zZWxlY3Rpb24sXG5jb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6LW1vei1zZWxlY3Rpb24sIGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6LW1vei1zZWxlY3Rpb24ge1xuXHR0ZXh0LXNoYWRvdzogbm9uZTtcblx0YmFja2dyb3VuZDogI2IzZDRmYztcbn1cblxucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6c2VsZWN0aW9uLCBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6c2VsZWN0aW9uLFxuY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl06OnNlbGVjdGlvbiwgY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gOjpzZWxlY3Rpb24ge1xuXHR0ZXh0LXNoYWRvdzogbm9uZTtcblx0YmFja2dyb3VuZDogI2IzZDRmYztcbn1cblxuQG1lZGlhIHByaW50IHtcblx0Y29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sXG5cdHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRcdHRleHQtc2hhZG93OiBub25lO1xuXHR9XG59XG5cbi8qIENvZGUgYmxvY2tzICovXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcblx0cGFkZGluZzogMWVtO1xuXHRtYXJnaW46IC41ZW0gMDtcblx0b3ZlcmZsb3c6IGF1dG87XG59XG5cbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdGJhY2tncm91bmQ6ICNmNWYyZjA7XG59XG5cbi8qIElubGluZSBjb2RlICovXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdHBhZGRpbmc6IC4xZW07XG5cdGJvcmRlci1yYWRpdXM6IC4zZW07XG5cdHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi50b2tlbi5jb21tZW50LFxuLnRva2VuLnByb2xvZyxcbi50b2tlbi5kb2N0eXBlLFxuLnRva2VuLmNkYXRhIHtcblx0Y29sb3I6IHNsYXRlZ3JheTtcbn1cblxuLnRva2VuLnB1bmN0dWF0aW9uIHtcblx0Y29sb3I6ICM5OTk7XG59XG5cbi5uYW1lc3BhY2Uge1xuXHRvcGFjaXR5OiAuNztcbn1cblxuLnRva2VuLnByb3BlcnR5LFxuLnRva2VuLnRhZyxcbi50b2tlbi5ib29sZWFuLFxuLnRva2VuLm51bWJlcixcbi50b2tlbi5jb25zdGFudCxcbi50b2tlbi5zeW1ib2wsXG4udG9rZW4uZGVsZXRlZCB7XG5cdGNvbG9yOiAjOTA1O1xufVxuXG4udG9rZW4uc2VsZWN0b3IsXG4udG9rZW4uYXR0ci1uYW1lLFxuLnRva2VuLnN0cmluZyxcbi50b2tlbi5jaGFyLFxuLnRva2VuLmJ1aWx0aW4sXG4udG9rZW4uaW5zZXJ0ZWQge1xuXHRjb2xvcjogIzY5MDtcbn1cblxuLnRva2VuLm9wZXJhdG9yLFxuLnRva2VuLmVudGl0eSxcbi50b2tlbi51cmwsXG4ubGFuZ3VhZ2UtY3NzIC50b2tlbi5zdHJpbmcsXG4uc3R5bGUgLnRva2VuLnN0cmluZyB7XG5cdGNvbG9yOiAjOWE2ZTNhO1xuXHRiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAuNSk7XG59XG5cbi50b2tlbi5hdHJ1bGUsXG4udG9rZW4uYXR0ci12YWx1ZSxcbi50b2tlbi5rZXl3b3JkIHtcblx0Y29sb3I6ICMwN2E7XG59XG5cbi50b2tlbi5mdW5jdGlvbixcbi50b2tlbi5jbGFzcy1uYW1lIHtcblx0Y29sb3I6ICNERDRBNjg7XG59XG5cbi50b2tlbi5yZWdleCxcbi50b2tlbi5pbXBvcnRhbnQsXG4udG9rZW4udmFyaWFibGUge1xuXHRjb2xvcjogI2U5MDtcbn1cblxuLnRva2VuLmltcG9ydGFudCxcbi50b2tlbi5ib2xkIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udG9rZW4uaXRhbGljIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4udG9rZW4uZW50aXR5IHtcblx0Y3Vyc29yOiBoZWxwO1xufVxuXG4iLCJAaW1wb3J0ICcuLi9wcmlzbS5jc3MnO1xyXG50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIFxyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5ie1xyXG4gICAgZm9udDogYm9sZDtcclxuICB9XHJcbi5iYWNrQ2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwOyBcclxuIFxyXG59XHJcblxyXG4uZWxzZWN7XHJcbiAgY29sb3I6IGN5YW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/listcomponent/listcomponent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/listcomponent/listcomponent.component.ts ***!
  \**********************************************************/
/*! exports provided: ListcomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcomponentComponent", function() { return ListcomponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../highlight.service */ "./src/app/highlight.service.ts");







// tslint:disable-next-line:use-pipe-transform-interface
let ListcomponentComponent = class ListcomponentComponent {
    // tslint:disable-next-line:max-line-length
    constructor(issueService, router, highlightService, sanitizer, _snackBar) {
        this.issueService = issueService;
        this.router = router;
        this.highlightService = highlightService;
        this.sanitizer = sanitizer;
        this._snackBar = _snackBar;
        this.highlighted = false;
        this.tagApiActivated = true;
        this.displayedColumns = ['title', 'responsebile', 'description', 'severity', 'status', 'actions'];
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
        // return this.sanitizer.bypassSecurityTrustHtml(html);
        // return this.sanitizer.bypassSecurityTrustScript(html);
        // return this.sanitizer.bypassSecurityTrustUrl(html);
        // return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
    ngOnInit() {
        this.fetchIssues();
        // this.showImage();
        this.ngAfterViewChecked();
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngAfterViewChecked() {
        // if (this.listco && !this.highlighted) {
        this.highlightService.highlightAll();
        this.highlighted = true;
        // }
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    fetchIssues() {
        this.issueService.
            getIssues().subscribe((data) => {
            this.issues = data;
            this.tagApiActivated = true;
            // console.log(this.issues);
        });
    }
    // @parm- ID So Post Avi. With ID
    postAvi_id(id) {
        this.issueService.
            getIssueById(id).subscribe((data) => {
            this.issues = data;
            this.router.navigate([`/postAvi/${id}`]);
        });
    }
    tagApi(tag) {
        this.issueService.getTagRes(tag).subscribe((data) => {
            this.issues = data;
            this.tagApiActivated = false;
            // console.log (this.issues);
        });
    }
    // @image Show Up
    showImage() {
        this.issueService.getImages().subscribe((data) => {
            this.images = data;
            // console.log (this.images);
        });
    }
    // @get OneImage data
    oneImageReturn(filename) {
        this.issueService.returnOneImage(filename).subscribe((data) => {
            this.images = data;
            // this.router.navigate([`/list/${filename}`]);
        });
    }
    editIssues(id) {
        this.router.navigate([`/edit/${id}`]);
    }
    deleteIssue(id) {
        this.issueService.deleteIssue(id).subscribe(() => {
            this.fetchIssues();
        });
    }
};
ListcomponentComponent.ctorParameters = () => [
    { type: _issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _highlight_service__WEBPACK_IMPORTED_MODULE_6__["HighlightService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_highlight_service__WEBPACK_IMPORTED_MODULE_6__["HighlightService"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
ListcomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listcomponent',
        template: __webpack_require__(/*! raw-loader!./listcomponent.component.html */ "./node_modules/raw-loader/index.js!./src/app/listcomponent/listcomponent.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./listcomponent.component.css */ "./src/app/listcomponent/listcomponent.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_highlight_service__WEBPACK_IMPORTED_MODULE_6__["HighlightService"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _highlight_service__WEBPACK_IMPORTED_MODULE_6__["HighlightService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], ListcomponentComponent);



/***/ }),

/***/ "./src/app/post-view/post-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/post-view/post-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    max-width: 1000px;\n  }\n  \n  .example-header-image {\n    background-size: cover;\n  }\n  \n  .b{\n    font: bold;\n  }\n  \n  .backCard{\n  background-color: #303030; \n \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC12aWV3L3Bvc3Qtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUNGO0VBQ0UseUJBQXlCOztBQUUzQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3Qtdmlldy9wb3N0LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuYntcbiAgICBmb250OiBib2xkO1xuICB9XG4uYmFja0NhcmR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7IFxuIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/post-view/post-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-view/post-view.component.ts ***!
  \**************************************************/
/*! exports provided: PostViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewComponent", function() { return PostViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../highlight.service */ "./src/app/highlight.service.ts");







// tslint:disable-next-line:use-pipe-transform-interface
let PostViewComponent = class PostViewComponent {
    constructor(issueService, router, highlightService, sanitizer, routeaq) {
        this.issueService = issueService;
        this.router = router;
        this.highlightService = highlightService;
        this.sanitizer = sanitizer;
        this.routeaq = routeaq;
        this.highlighted = false;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
        // return this.sanitizer.bypassSecurityTrustHtml(html);
        // return this.sanitizer.bypassSecurityTrustScript(html);
        // return this.sanitizer.bypassSecurityTrustUrl(html);
        // return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
    ngOnInit() {
        this.ngAfterViewChecked();
        // this.fetchIssues();
        const id = this.routeaq.snapshot.paramMap.get('id');
        this.postAvi_id(id);
        console.log(id);
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngAfterViewChecked() {
        // if (this.listco && !this.highlighted) {
        this.highlightService.highlightAll();
        this.highlighted = true;
        // }
    }
    postAvi_id(id) {
        this.issueService.
            getIssueById(id).subscribe((data) => {
            this.issuesa = data;
            // console.log(this.issuesa);
            // this.router.navigate([`/postAvi/${id}`]);
        });
    }
};
PostViewComponent.ctorParameters = () => [
    { type: _issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _highlight_service__WEBPACK_IMPORTED_MODULE_5__["HighlightService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_highlight_service__WEBPACK_IMPORTED_MODULE_5__["HighlightService"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
PostViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-view',
        template: __webpack_require__(/*! raw-loader!./post-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/post-view/post-view.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./post-view.component.css */ "./src/app/post-view/post-view.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_highlight_service__WEBPACK_IMPORTED_MODULE_5__["HighlightService"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _highlight_service__WEBPACK_IMPORTED_MODULE_5__["HighlightService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], PostViewComponent);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/l4/Documents/ANGULAR/ProjectLearning/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map