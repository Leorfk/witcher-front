"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var monster_crud_component_1 = require("./views/monster-crud/monster-crud.component");
var character_create_component_1 = require("./componets/character/character-create/character-create.component");
var not_found_component_1 = require("./views/not-found/not-found.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var character_crud_component_1 = require("./views/character-crud/character-crud.component");
var home_component_1 = require("./views/home/home.component");
var character_update_component_1 = require("./componets/character/character-update/character-update.component");
var character_delete_component_1 = require("./componets/character/character-delete/character-delete.component");
var character_details_component_1 = require("./componets/character/character-details/character-details.component");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'characters',
        component: character_crud_component_1.CharacterCrudComponent
    },
    {
        path: 'characters/create',
        component: character_create_component_1.CharacterCreateComponent
    },
    {
        path: 'characters/edit/:id',
        component: character_update_component_1.CharacterUpdateComponent
    },
    {
        path: 'characters/delete/:id',
        component: character_delete_component_1.CharacterDeleteComponent
    },
    {
        path: 'characters/details/:id',
        component: character_details_component_1.CharacterDetailsComponent
    },
    {
        path: 'monsters',
        component: monster_crud_component_1.MonsterCrudComponent
    },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
