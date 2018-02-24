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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var ng2_sidebar_1 = require('ng2-sidebar');
var angular2_datatable_1 = require("angular2-datatable");
//import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var detail_servicetemplate_component_1 = require('./dashboard/detail-servicetemplate.component');
var edit_servicetemplate_component_1 = require('./dashboard/edit-servicetemplate.component');
var add_servicetemplate_component_1 = require('./dashboard/add-servicetemplate.component');
var submitted_component_1 = require('./messagequeue/submitted.component');
var queued_component_1 = require('./messagequeue/queued.component');
//for the site
var app_routing_module_1 = require('./app-routing.module');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                ng2_sidebar_1.SidebarModule,
                angular2_datatable_1.DataTableModule,
            ],
            declarations: [app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                detail_servicetemplate_component_1.DetailServiceTemplateComponent,
                edit_servicetemplate_component_1.EditServiceTemplateComponent,
                add_servicetemplate_component_1.AddServiceTemplateComponent,
                submitted_component_1.SubmittedComponent,
                queued_component_1.QueuedComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map