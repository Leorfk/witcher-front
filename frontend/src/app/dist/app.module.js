"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var toolbar_1 = require("@angular/material/toolbar");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var snack_bar_1 = require("@angular/material/snack-bar");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var select_1 = require("@angular/material/select");
var header_component_1 = require("./componets/template/header/header.component");
var footer_component_1 = require("./componets/template/footer/footer.component");
var nav_component_1 = require("./componets/template/nav/nav.component");
var home_component_1 = require("./views/home/home.component");
var character_crud_component_1 = require("./views/character-crud/character-crud.component");
var not_found_component_1 = require("./views/not-found/not-found.component");
var character_create_component_1 = require("./componets/character/character-create/character-create.component");
var character_view_component_1 = require("./componets/character/character-view/character-view.component");
var character_update_component_1 = require("./componets/character/character-update/character-update.component");
var character_delete_component_1 = require("./componets/character/character-delete/character-delete.component");
var character_details_component_1 = require("./componets/character/character-details/character-details.component");
var table_component_1 = require("./componets/util/table/table.component");
var form_component_1 = require("./componets/util/form/form.component");
var simple_input_component_1 = require("./componets/util/simple-input/simple-input.component");
var modal_component_1 = require("./componets/util/modal/modal.component");
var monster_crud_component_1 = require("./views/monster-crud/monster-crud.component");
var Material = [
    toolbar_1.MatToolbarModule,
    sidenav_1.MatSidenavModule,
    list_1.MatListModule,
    card_1.MatCardModule,
    button_1.MatButtonModule,
    snack_bar_1.MatSnackBarModule,
    form_field_1.MatFormFieldModule,
    input_1.MatInputModule,
    table_1.MatTableModule,
    paginator_1.MatPaginatorModule,
    select_1.MatSelectModule
];
var Components = [
    header_component_1.HeaderComponent,
    footer_component_1.FooterComponent,
    nav_component_1.NavComponent,
    table_component_1.TableComponent,
    form_component_1.FormComponent,
    simple_input_component_1.SimpleInputComponent,
    modal_component_1.ModalComponent
];
var Pages = [
    home_component_1.HomeComponent,
    character_crud_component_1.CharacterCrudComponent,
    character_create_component_1.CharacterCreateComponent,
    character_view_component_1.CharacterViewComponent,
    character_update_component_1.CharacterUpdateComponent,
    character_delete_component_1.CharacterDeleteComponent,
    character_details_component_1.CharacterDetailsComponent,
    monster_crud_component_1.MonsterCrudComponent,
    not_found_component_1.NotFoundComponent
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                Components,
                Pages
            ],
            imports: [
                Material,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
