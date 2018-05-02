webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alajuelense/alajuelense.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alajuelense/alajuelense.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <h1>{{ldaInfo.nombre}}</h1> <br>\n    <h4>Sigla: {{ldaInfo.sigla}} </h4><br>\n    <h4>Estadio: {{ldaInfo.estadio}}</h4>\n    <h4>Año de creacion: {{ldaInfo.ano_creacion  | date:'shortDate'}}</h4><br>\n    <h4>Titulos: {{ldaInfo.titulos}}</h4><br>\n    <h4>Director Tecnico: {{ldaInfo.dt}}</h4><br>\n    <h4>Historia</h4><br>\n    <p>{{ldaInfo.historia}}</p> \n\n   \n\n    <h2>Panilla</h2>\n  <table class=\"table\">\n  <tr>\n    <th>Nombre</th>\n    <th>Apellido</th>\n    <th>#</th>\n    <th>Fecha de Nacimiento</th>\n    <th>Nacionalidad</th>\n    <th>Posicion</th>\n  </tr>\n  <tr *ngFor=\"let jugador of ldaInfo.jugadores\">\n    <td>{{jugador.nombre}}</td>\n    <td>{{jugador.apellido}}</td>\n    <td>{{jugador.numero}}</td>\n    <td>{{jugador.fechaNacimiento  | date:'shortDate'}}</td>\n    <td>{{jugador.nacionalidad}}</td>\n    <td>{{jugador.posicion}}</td>\n  </tr>\n  </table>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/alajuelense/alajuelense.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlajuelenseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/app/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlajuelenseComponent = /** @class */ (function () {
    function AlajuelenseComponent(teamService) {
        this.teamService = teamService;
        this.ldaInfo = [];
    }
    AlajuelenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getLDA()
            .subscribe(function (res) { return _this.ldaInfo = res; }, function (err) { return console.log(err); });
    };
    AlajuelenseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alajuelense',
            template: __webpack_require__("./src/app/alajuelense/alajuelense.component.html"),
            styles: [__webpack_require__("./src/app/alajuelense/alajuelense.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
    ], AlajuelenseComponent);
    return AlajuelenseComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticias_noticias_component__ = __webpack_require__("./src/app/noticias/noticias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sobre_nosotros_sobre_nosotros_component__ = __webpack_require__("./src/app/sobre-nosotros/sobre-nosotros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__estadisticas_estadisticas_component__ = __webpack_require__("./src/app/estadisticas/estadisticas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabla_de_posiciones_tabla_de_posiciones_component__ = __webpack_require__("./src/app/tabla-de-posiciones/tabla-de-posiciones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carmelita_carmelita_component__ = __webpack_require__("./src/app/carmelita/carmelita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alajuelense_alajuelense_component__ = __webpack_require__("./src/app/alajuelense/alajuelense.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__saprissa_saprissa_component__ = __webpack_require__("./src/app/saprissa/saprissa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__herediano_herediano_component__ = __webpack_require__("./src/app/herediano/herediano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cartagines_cartagines_component__ = __webpack_require__("./src/app/cartagines/cartagines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__santos_santos_component__ = __webpack_require__("./src/app/santos/santos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__perez_zeledon_perez_zeledon_component__ = __webpack_require__("./src/app/perez-zeledon/perez-zeledon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__limon_limon_component__ = __webpack_require__("./src/app/limon/limon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guadalupe_guadalupe_component__ = __webpack_require__("./src/app/guadalupe/guadalupe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__liberia_liberia_component__ = __webpack_require__("./src/app/liberia/liberia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__grecia_grecia_component__ = __webpack_require__("./src/app/grecia/grecia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ucr_ucr_component__ = __webpack_require__("./src/app/ucr/ucr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__inicio_inicio_component__ = __webpack_require__("./src/app/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__no_encontrado_no_encontrado_component__ = __webpack_require__("./src/app/no-encontrado/no-encontrado.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'noticias', component: __WEBPACK_IMPORTED_MODULE_2__noticias_noticias_component__["a" /* NoticiasComponent */] },
    { path: 'sobre-nosotros', component: __WEBPACK_IMPORTED_MODULE_3__sobre_nosotros_sobre_nosotros_component__["a" /* SobreNosotrosComponent */] },
    { path: 'estadisticas', component: __WEBPACK_IMPORTED_MODULE_4__estadisticas_estadisticas_component__["a" /* EstadisticasComponent */] },
    { path: 'tabla-de-posiciones', component: __WEBPACK_IMPORTED_MODULE_5__tabla_de_posiciones_tabla_de_posiciones_component__["a" /* TablaDePosicionesComponent */] },
    { path: 'alajuelense', component: __WEBPACK_IMPORTED_MODULE_7__alajuelense_alajuelense_component__["a" /* AlajuelenseComponent */] },
    { path: 'saprissa', component: __WEBPACK_IMPORTED_MODULE_8__saprissa_saprissa_component__["a" /* SaprissaComponent */] },
    { path: 'herediano', component: __WEBPACK_IMPORTED_MODULE_9__herediano_herediano_component__["a" /* HeredianoComponent */] },
    { path: 'cartagines', component: __WEBPACK_IMPORTED_MODULE_10__cartagines_cartagines_component__["a" /* CartaginesComponent */] },
    { path: 'santos', component: __WEBPACK_IMPORTED_MODULE_11__santos_santos_component__["a" /* SantosComponent */] },
    { path: 'liberia', component: __WEBPACK_IMPORTED_MODULE_15__liberia_liberia_component__["a" /* LiberiaComponent */] },
    { path: 'perez-zeledon', component: __WEBPACK_IMPORTED_MODULE_12__perez_zeledon_perez_zeledon_component__["a" /* PerezZeledonComponent */] },
    { path: 'grecia', component: __WEBPACK_IMPORTED_MODULE_16__grecia_grecia_component__["a" /* GreciaComponent */] },
    { path: 'guadalupe', component: __WEBPACK_IMPORTED_MODULE_14__guadalupe_guadalupe_component__["a" /* GuadalupeComponent */] },
    { path: 'carmelita', component: __WEBPACK_IMPORTED_MODULE_6__carmelita_carmelita_component__["a" /* CarmelitaComponent */] },
    { path: 'limon', component: __WEBPACK_IMPORTED_MODULE_13__limon_limon_component__["a" /* LimonComponent */] },
    { path: 'ucr', component: __WEBPACK_IMPORTED_MODULE_17__ucr_ucr_component__["a" /* UcrComponent */] },
    { path: 'inicio', component: __WEBPACK_IMPORTED_MODULE_18__inicio_inicio_component__["a" /* InicioComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_19__no_encontrado_no_encontrado_component__["a" /* NoEncontradoComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__noticias_noticias_component__["a" /* NoticiasComponent */], __WEBPACK_IMPORTED_MODULE_3__sobre_nosotros_sobre_nosotros_component__["a" /* SobreNosotrosComponent */], __WEBPACK_IMPORTED_MODULE_4__estadisticas_estadisticas_component__["a" /* EstadisticasComponent */], __WEBPACK_IMPORTED_MODULE_5__tabla_de_posiciones_tabla_de_posiciones_component__["a" /* TablaDePosicionesComponent */],
    __WEBPACK_IMPORTED_MODULE_7__alajuelense_alajuelense_component__["a" /* AlajuelenseComponent */], __WEBPACK_IMPORTED_MODULE_8__saprissa_saprissa_component__["a" /* SaprissaComponent */], __WEBPACK_IMPORTED_MODULE_9__herediano_herediano_component__["a" /* HeredianoComponent */], __WEBPACK_IMPORTED_MODULE_10__cartagines_cartagines_component__["a" /* CartaginesComponent */], __WEBPACK_IMPORTED_MODULE_11__santos_santos_component__["a" /* SantosComponent */],
    __WEBPACK_IMPORTED_MODULE_12__perez_zeledon_perez_zeledon_component__["a" /* PerezZeledonComponent */], __WEBPACK_IMPORTED_MODULE_15__liberia_liberia_component__["a" /* LiberiaComponent */], __WEBPACK_IMPORTED_MODULE_13__limon_limon_component__["a" /* LimonComponent */], __WEBPACK_IMPORTED_MODULE_14__guadalupe_guadalupe_component__["a" /* GuadalupeComponent */], __WEBPACK_IMPORTED_MODULE_6__carmelita_carmelita_component__["a" /* CarmelitaComponent */],
    __WEBPACK_IMPORTED_MODULE_16__grecia_grecia_component__["a" /* GreciaComponent */], __WEBPACK_IMPORTED_MODULE_17__ucr_ucr_component__["a" /* UcrComponent */], __WEBPACK_IMPORTED_MODULE_18__inicio_inicio_component__["a" /* InicioComponent */],
    __WEBPACK_IMPORTED_MODULE_19__no_encontrado_no_encontrado_component__["a" /* NoEncontradoComponent */]];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-header></app-header>\n<router-outlet></router-outlet>\n  <app-footer></app-footer>\n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__noticias_noticias_component__ = __webpack_require__("./src/app/noticias/noticias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__estadisticas_estadisticas_component__ = __webpack_require__("./src/app/estadisticas/estadisticas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sobre_nosotros_sobre_nosotros_component__ = __webpack_require__("./src/app/sobre-nosotros/sobre-nosotros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabla_de_posiciones_tabla_de_posiciones_component__ = __webpack_require__("./src/app/tabla-de-posiciones/tabla-de-posiciones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alajuelense_alajuelense_component__ = __webpack_require__("./src/app/alajuelense/alajuelense.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__saprissa_saprissa_component__ = __webpack_require__("./src/app/saprissa/saprissa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__herediano_herediano_component__ = __webpack_require__("./src/app/herediano/herediano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cartagines_cartagines_component__ = __webpack_require__("./src/app/cartagines/cartagines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__santos_santos_component__ = __webpack_require__("./src/app/santos/santos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__perez_zeledon_perez_zeledon_component__ = __webpack_require__("./src/app/perez-zeledon/perez-zeledon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__grecia_grecia_component__ = __webpack_require__("./src/app/grecia/grecia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guadalupe_guadalupe_component__ = __webpack_require__("./src/app/guadalupe/guadalupe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__limon_limon_component__ = __webpack_require__("./src/app/limon/limon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__liberia_liberia_component__ = __webpack_require__("./src/app/liberia/liberia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ucr_ucr_component__ = __webpack_require__("./src/app/ucr/ucr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__carmelita_carmelita_component__ = __webpack_require__("./src/app/carmelita/carmelita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__no_encontrado_no_encontrado_component__ = __webpack_require__("./src/app/no-encontrado/no-encontrado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__layouts_footer_footer_component__ = __webpack_require__("./src/app/layouts/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng_sticky__ = __webpack_require__("./node_modules/ng-sticky/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__inicio_inicio_component__ = __webpack_require__("./src/app/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__rest_rest_component__ = __webpack_require__("./src/app/rest/rest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__team_service__ = __webpack_require__("./src/app/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["b" /* routingComponents */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__noticias_noticias_component__["a" /* NoticiasComponent */],
                __WEBPACK_IMPORTED_MODULE_8__estadisticas_estadisticas_component__["a" /* EstadisticasComponent */],
                __WEBPACK_IMPORTED_MODULE_9__sobre_nosotros_sobre_nosotros_component__["a" /* SobreNosotrosComponent */],
                __WEBPACK_IMPORTED_MODULE_10__tabla_de_posiciones_tabla_de_posiciones_component__["a" /* TablaDePosicionesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__alajuelense_alajuelense_component__["a" /* AlajuelenseComponent */],
                __WEBPACK_IMPORTED_MODULE_12__saprissa_saprissa_component__["a" /* SaprissaComponent */],
                __WEBPACK_IMPORTED_MODULE_13__herediano_herediano_component__["a" /* HeredianoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__cartagines_cartagines_component__["a" /* CartaginesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__santos_santos_component__["a" /* SantosComponent */],
                __WEBPACK_IMPORTED_MODULE_16__perez_zeledon_perez_zeledon_component__["a" /* PerezZeledonComponent */],
                __WEBPACK_IMPORTED_MODULE_17__grecia_grecia_component__["a" /* GreciaComponent */],
                __WEBPACK_IMPORTED_MODULE_18__guadalupe_guadalupe_component__["a" /* GuadalupeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__limon_limon_component__["a" /* LimonComponent */],
                __WEBPACK_IMPORTED_MODULE_20__liberia_liberia_component__["a" /* LiberiaComponent */],
                __WEBPACK_IMPORTED_MODULE_21__ucr_ucr_component__["a" /* UcrComponent */],
                __WEBPACK_IMPORTED_MODULE_22__carmelita_carmelita_component__["a" /* CarmelitaComponent */],
                __WEBPACK_IMPORTED_MODULE_23__no_encontrado_no_encontrado_component__["a" /* NoEncontradoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__layouts_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_25_ng_sticky__["a" /* NgStickyDirective */],
                __WEBPACK_IMPORTED_MODULE_26__inicio_inicio_component__["a" /* InicioComponent */],
                __WEBPACK_IMPORTED_MODULE_29__rest_rest_component__["a" /* RestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_28__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_30__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_31__team_service__["a" /* TeamService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carmelita/carmelita.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/carmelita/carmelita.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  carmelita works!\n</p>\n"

/***/ }),

/***/ "./src/app/carmelita/carmelita.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarmelitaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarmelitaComponent = /** @class */ (function () {
    function CarmelitaComponent() {
    }
    CarmelitaComponent.prototype.ngOnInit = function () {
    };
    CarmelitaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carmelita',
            template: __webpack_require__("./src/app/carmelita/carmelita.component.html"),
            styles: [__webpack_require__("./src/app/carmelita/carmelita.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarmelitaComponent);
    return CarmelitaComponent;
}());



/***/ }),

/***/ "./src/app/cartagines/cartagines.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cartagines/cartagines.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cartagines works!\n</p>\n"

/***/ }),

/***/ "./src/app/cartagines/cartagines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartaginesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartaginesComponent = /** @class */ (function () {
    function CartaginesComponent() {
    }
    CartaginesComponent.prototype.ngOnInit = function () {
    };
    CartaginesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cartagines',
            template: __webpack_require__("./src/app/cartagines/cartagines.component.html"),
            styles: [__webpack_require__("./src/app/cartagines/cartagines.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartaginesComponent);
    return CartaginesComponent;
}());



/***/ }),

/***/ "./src/app/estadisticas/estadisticas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/estadisticas/estadisticas.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  estadisticas works! \n\n</p>\n"

/***/ }),

/***/ "./src/app/estadisticas/estadisticas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EstadisticasComponent = /** @class */ (function () {
    function EstadisticasComponent() {
    }
    EstadisticasComponent.prototype.ngOnInit = function () {
    };
    EstadisticasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-estadisticas',
            template: __webpack_require__("./src/app/estadisticas/estadisticas.component.html"),
            styles: [__webpack_require__("./src/app/estadisticas/estadisticas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EstadisticasComponent);
    return EstadisticasComponent;
}());



/***/ }),

/***/ "./src/app/grecia/grecia.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/grecia/grecia.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  grecia works!\n</p>\n"

/***/ }),

/***/ "./src/app/grecia/grecia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreciaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/app/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GreciaComponent = /** @class */ (function () {
    function GreciaComponent(teamService) {
        this.teamService = teamService;
        this.greciaInfo = [];
    }
    GreciaComponent.prototype.ngOnInit = function () {
    };
    GreciaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-grecia',
            template: __webpack_require__("./src/app/grecia/grecia.component.html"),
            styles: [__webpack_require__("./src/app/grecia/grecia.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
    ], GreciaComponent);
    return GreciaComponent;
}());



/***/ }),

/***/ "./src/app/guadalupe/guadalupe.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/guadalupe/guadalupe.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  guadalupe works!\n</p>\n"

/***/ }),

/***/ "./src/app/guadalupe/guadalupe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuadalupeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuadalupeComponent = /** @class */ (function () {
    function GuadalupeComponent() {
    }
    GuadalupeComponent.prototype.ngOnInit = function () {
    };
    GuadalupeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-guadalupe',
            template: __webpack_require__("./src/app/guadalupe/guadalupe.component.html"),
            styles: [__webpack_require__("./src/app/guadalupe/guadalupe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GuadalupeComponent);
    return GuadalupeComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.html"),
            styles: [__webpack_require__("./src/app/header/headerstyle.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/header.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<body>\r\n  <header class=\"header\">\r\n\r\n\r\n\r\n\r\n<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#teambar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>                        \r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/img/logo1.png\" alt=\"LDA\" width=\"56px\" height=\"56\"></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"teambar\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"team\"><a routerLink=\"/alajuelense\" routerLinkActive=\"active\"><img src=\"assets/img/ldalogo.png\" alt=\"LDA\" width=\"42px\" height=\"42\"></a></li>\r\n        <li class=\"team\"><a routerLink=\"/saprissa\" routerLinkActive=\"active\"><img src=\"assets/img/saprissalogo.png\" alt=\"SAP\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team\"><a routerLink=\"/herediano\" routerLinkActive=\"active\"><img src=\"assets/img/heredialogo.png\" alt=\"CSH\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team\"><a routerLink=\"/cartagines\" routerLinkActive=\"active\"><img src=\"assets/img/cartagologo.png\" alt=\"CSC\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team\"><a routerLink=\"/santos\" routerLinkActive=\"active\"><img src=\"assets/img/santoslogo.png\" alt=\"SAN\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team\"><a routerLink=\"/perez-zeledon\" routerLinkActive=\"active\"><img src=\"assets/img/pzlogo.png\" alt=\"PZ\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team\"><a routerLink=\"/grecia\" routerLinkActive=\"active\"><img src=\"assets/img/grecialogo.png\" alt=\"GRE\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team\"><a routerLink=\"/guadalupe\" routerLinkActive=\"active\"><img src=\"assets/img/guadalupelogo.png\" alt=\"GUA\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team\"><a routerLink=\"/limon\" routerLinkActive=\"active\"><img src=\"assets/img/limonlogo.png\" alt=\"LIM\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team\"><a routerLink=\"/liberia\" routerLinkActive=\"active\"><img src=\"assets/img/liberialogo.png\" alt=\"LIB\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team\"><a routerLink=\"/ucr\" routerLinkActive=\"active\"><img src=\"assets/img/ucrlogo.png\" alt=\"UCR\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team\"><a routerLink=\"/carmelita\" routerLinkActive=\"active\"><img src=\"assets/img/carmelitalogo.png\" alt=\"CAR\" width=\"42\" height=\"42\"></a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menubar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">Futico</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"menubar\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li class=\"options\"><a routerLink=\"/tabla-de-posiciones\" routerLinkActive=\"active\">Tabla de Posiciones</a></li>\r\n          <li class=\"options\"><a routerLink=\"/estadisticas\" routerLinkActive=\"active\">Estadisticas</a></li>\r\n          <li class=\"options\"><a routerLink=\"/noticias\" routerLinkActive=\"active\">Noticias</a></li>\r\n          <li class=\"options\"><a routerLink=\"/sobre-nosotros\" routerLinkActive=\"active\">Sobre Nosotros</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n\r\n  \r\n\r\n</header>\r\n\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/header/headerstyle.scss":
/***/ (function(module, exports) {

module.exports = ".team {\n  padding-right: 2ex; }\n\n.options, .navbar-brand {\n  padding-right: 16ex; }\n\n.navbar-inverse {\n  padding-bottom: 0%;\n  padding-top: 0%;\n  clear: both;\n  margin-top: 0%;\n  margin: 0%;\n  margin-bottom: 0%; }\n\n.ng-sticky {\n  background-color: black;\n  line-height: 0%;\n  clear: both; }\n"

/***/ }),

/***/ "./src/app/herediano/herediano.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/herediano/herediano.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  herediano works!\n</p>\n"

/***/ }),

/***/ "./src/app/herediano/herediano.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeredianoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeredianoComponent = /** @class */ (function () {
    function HeredianoComponent() {
    }
    HeredianoComponent.prototype.ngOnInit = function () {
    };
    HeredianoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-herediano',
            template: __webpack_require__("./src/app/herediano/herediano.component.html"),
            styles: [__webpack_require__("./src/app/herediano/herediano.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeredianoComponent);
    return HeredianoComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Simple four boxes Row -->\n<!-- ============================================================== -->\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n    <!-- column -->    \n    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n        <mat-card>\n            <mat-card-content>\n                <!-- Row -->\n                <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n                    <!-- column -->\n                    <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\"> <!-- esto es para que cuando \n                        se haga mas pequeño, ocupe solamente la mitad de la pantalla, ejemplo:\n                        xl, then fallback to 'gt-sm' so the div sizing is 100%\n                        lg, then fallback to 'gt-sm' so the div sizing is 100%\n                        md, then fallback to 'gt-sm' so the div sizing is 100%\n                        sm, then fallback to the default fxFlex=\"50%\"; so the div sizing is 50%\n                        xs, then fallback to the default fxFlex=\"50%\"; so the div sizing is 50%\n                    -->\n                        Pagina de inicio\n                        Aquí irá una información acerca de algunas cosas sobre la página,\n                        algunos datos importantes sobre UNAFUT, AÑOS, PARTIDOS, ACTUAL CAMPEON , ETC.\n                    </div>                    \n                </div>   \n                \n                <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n                        <!-- column -->\n                        <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\"> \n                            \n                            Pagina de inicio\n                            Aquí irá una información acerca de algunas cosas sobre la página,\n                            algunos datos importantes sobre UNAFUT, AÑOS, PARTIDOS, ACTUAL CAMPEON , ETC.\n                        </div>                    \n                    </div>   \n\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <!-- column -->    \n</div>\n\n"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_info_service__ = __webpack_require__("./src/app/services/info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inicio',
            template: __webpack_require__("./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__("./src/app/inicio/inicio.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_info_service__["a" /* InfoService */]]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/layouts/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "*{\n  margin: 0px;\n  padding: 0px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nfooter{\n  width: 100%;\n  background: #202020;\n  color: white;\n  padding: 20px;\n}\n\n.container-footer-all{\n  width: 100%;\n  max-width: 1200px;\n  margin: auto;\n  padding: 10px;\n}\n\n.container-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.column1{\n  max-width: 400px;\n  margin-top: 10px;\n}\n\n.column1 h1 {\n  font-size: 22px;\n\n}\n\n.column1 p {\n  font-size: 14px;\n  color: #C7C7C7;\n  margin-top: 20px;\n}\n\n/* Todo el CSS de la columna 2\n.column2{\n  max-width: 400px;\n  margin-top: 10px;\n}\n\n.column2 h1 {\n  font-size: 22px;\n}\n\n.row {\n  margin-top: 20px;\n  display: flex;\n}\n\n.row img{\n  width: 36px;\n  height: 36px;\n}\n\n.row label{\n  margin-top: 10px;\n  margin-left: 20px;\n}\n*/\n\n.column3{\n  max-width: 400px;\n  margin-top: 10px;\n\n}\n\n.column3 h1 {\n  font-size: 22px;\n  text-align: center;\n\n}\n\n.column3 label {\n  font-size: 18px;\n  color: #C7C7C7;\n  margin-top: 20px;\n}\n\n.row2 {\n  margin-top: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.row2 img{\n  width: 36px;\n  height: 36px;\n}\n\n.row2 label{\n  margin-top: 10px;\n  margin-left: 20px;\n  max-width: 140%;\n}\n\n.container-footer{\n  width: 100%;\n  background: #101010;\n}\n\n.footer{\n  max-width: 1200px;\n  margin: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 40px;\n}\n\n.copyright{\n  color: #C7C7C7;\n}\n\n.information{\n  text-decoration: none;\n  color: #C7C7C7;\n}\n\n@media screen and (max-width: 1100px;){\n    .container-body{\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n    }\n\n    .column3 {\n      margin-top: 40px;\n    }\n\n}\n"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n\n<footer>\n\n    <div ng-sticky style=\"width:100%\" [offSet]=\"0\" [addClass]=\"'is-sticky'\">\n\n  <div class=\"container-footer-all\">\n\n\n  <div class=\"container-body\">\n\n        <div class=\"column1\">\n            <h1>Más Información de la Página</h1>\n            <p>Esta es una página que busca informar sobre todo\n            el ámbito del futbol a nivel de Costa Rica.</p>\n            <p>Se busca información confiable y de otras páginas serias para\n            que el visitante obtenga información veridica y de calidad.</p>\n        </div>\n\n\n<!--  Columna del centro\n        <div class=\"column2\">\n          <h1>Redes Sociales</h1>\n          <div class=\"row\">\n              <img src=\"https://es.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png\" >\n            <label >Siguenos en </label>\n          </div>\n        </div>\n-->\n\n        <div class=\"column3\">\n          <h1>Información  Contactos</h1>\n            <div class=\"row2\">\n              <span class=\"glyphicon glyphicon-envelope\"></span><a href=\"mailto:futico@gmail.com\" target=\"_top\">futico@gmail.com</a>\n            </div>\n        </div>\n\n  </div>\n  <br/>\n  <div class=\"container-footer\">\n    <div class=\"footer\">\n\n\n    <div class=\"copyright\">\n      &copy; 2018, Todos los Derechos Reservados.\n    </div>\n    <div class=\"information\">\n      Pagina Diseñada por | <a target=\"_blank\" href=\"https://www.facebook.com/rolando.campos.12\">Rolando</a> <a target=\"_blank\" href=\"https://www.facebook.com/mario.alvaradoangulo\">Mario</a>  <a target=\"_blank\" href=\"https://www.facebook.com/kevin.rodriguezvalverde\">Kevin</a>  <a target=\"_blank\" href=\"https://www.facebook.com/david.leitonarias\">David</a> \n    </div>\n\n    </div>\n  </div>\n</div>\n\n</div>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.footername = "Todos los derechos reservados";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/layouts/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/layouts/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/liberia/liberia.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/liberia/liberia.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  liberia works!\n</p>\n"

/***/ }),

/***/ "./src/app/liberia/liberia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiberiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LiberiaComponent = /** @class */ (function () {
    function LiberiaComponent() {
    }
    LiberiaComponent.prototype.ngOnInit = function () {
    };
    LiberiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-liberia',
            template: __webpack_require__("./src/app/liberia/liberia.component.html"),
            styles: [__webpack_require__("./src/app/liberia/liberia.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LiberiaComponent);
    return LiberiaComponent;
}());



/***/ }),

/***/ "./src/app/limon/limon.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/limon/limon.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  limon works!\n</p>\n"

/***/ }),

/***/ "./src/app/limon/limon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LimonComponent = /** @class */ (function () {
    function LimonComponent() {
    }
    LimonComponent.prototype.ngOnInit = function () {
    };
    LimonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-limon',
            template: __webpack_require__("./src/app/limon/limon.component.html"),
            styles: [__webpack_require__("./src/app/limon/limon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LimonComponent);
    return LimonComponent;
}());



/***/ }),

/***/ "./src/app/no-encontrado/no-encontrado.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/no-encontrado/no-encontrado.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  No se encuentra la pagina solicitada\n</h3>\n"

/***/ }),

/***/ "./src/app/no-encontrado/no-encontrado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoEncontradoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoEncontradoComponent = /** @class */ (function () {
    function NoEncontradoComponent() {
    }
    NoEncontradoComponent.prototype.ngOnInit = function () {
    };
    NoEncontradoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-no-encontrado',
            template: __webpack_require__("./src/app/no-encontrado/no-encontrado.component.html"),
            styles: [__webpack_require__("./src/app/no-encontrado/no-encontrado.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoEncontradoComponent);
    return NoEncontradoComponent;
}());



/***/ }),

/***/ "./src/app/noticias/noticias.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/noticias/noticias.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  noticias works!\n</p>\n"

/***/ }),

/***/ "./src/app/noticias/noticias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent() {
    }
    NoticiasComponent.prototype.ngOnInit = function () {
    };
    NoticiasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-noticias',
            template: __webpack_require__("./src/app/noticias/noticias.component.html"),
            styles: [__webpack_require__("./src/app/noticias/noticias.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ }),

/***/ "./src/app/perez-zeledon/perez-zeledon.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/perez-zeledon/perez-zeledon.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  perez-zeledon works!\n</p>\n"

/***/ }),

/***/ "./src/app/perez-zeledon/perez-zeledon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerezZeledonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerezZeledonComponent = /** @class */ (function () {
    function PerezZeledonComponent() {
    }
    PerezZeledonComponent.prototype.ngOnInit = function () {
    };
    PerezZeledonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-perez-zeledon',
            template: __webpack_require__("./src/app/perez-zeledon/perez-zeledon.component.html"),
            styles: [__webpack_require__("./src/app/perez-zeledon/perez-zeledon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerezZeledonComponent);
    return PerezZeledonComponent;
}());



/***/ }),

/***/ "./src/app/rest/rest.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rest/rest.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  rest works!\n</p>\n"

/***/ }),

/***/ "./src/app/rest/rest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestComponent = /** @class */ (function () {
    function RestComponent() {
    }
    RestComponent.prototype.ngOnInit = function () {
    };
    RestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rest',
            template: __webpack_require__("./src/app/rest/rest.component.html"),
            styles: [__webpack_require__("./src/app/rest/rest.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RestComponent);
    return RestComponent;
}());



/***/ }),

/***/ "./src/app/santos/santos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/santos/santos.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  santos works!\n</p>\n"

/***/ }),

/***/ "./src/app/santos/santos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SantosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SantosComponent = /** @class */ (function () {
    function SantosComponent() {
    }
    SantosComponent.prototype.ngOnInit = function () {
    };
    SantosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-santos',
            template: __webpack_require__("./src/app/santos/santos.component.html"),
            styles: [__webpack_require__("./src/app/santos/santos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SantosComponent);
    return SantosComponent;
}());



/***/ }),

/***/ "./src/app/saprissa/saprissa.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/saprissa/saprissa.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  saprissa works!\n</p>\n"

/***/ }),

/***/ "./src/app/saprissa/saprissa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaprissaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaprissaComponent = /** @class */ (function () {
    function SaprissaComponent() {
    }
    SaprissaComponent.prototype.ngOnInit = function () {
    };
    SaprissaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-saprissa',
            template: __webpack_require__("./src/app/saprissa/saprissa.component.html"),
            styles: [__webpack_require__("./src/app/saprissa/saprissa.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SaprissaComponent);
    return SaprissaComponent;
}());



/***/ }),

/***/ "./src/app/services/info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoService = /** @class */ (function () {
    function InfoService(_http) {
        this._http = _http;
        this.toutnamentName = 'Cargando Nombre...';
        this.content = 'Loading content...';
    }
    InfoService.prototype.getInfo = function () {
        var _this = this;
        this._http.get('https://api.sportradar.us/soccer-xt3/other/es/tournaments/sr:tournament:84/info.json?api_key=wtm44z6e274xu7mva4kwjkry')
            .subscribe(function (data) {
            _this.toutnamentName = data['tournament'].name;
            // this.content = data.content;
            console.log(_this.toutnamentName);
        });
    };
    InfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], InfoService);
    return InfoService;
}());



/***/ }),

/***/ "./src/app/sobre-nosotros/sobre-nosotros.component.css":
/***/ (function(module, exports) {

module.exports = "/*\r\nHTML 5 Template Name: \r\nFile: About Us - 10 CSS\r\nAuthor: OS Templates\r\nAuthor URI: http://www.os-templates.com/\r\nLicence: <a href=\"http://www.os-templates.com/template-terms\">Website Template Licence</a>\r\n*/\r\n\r\n#about-us{display:block; width:100%; line-height:1.6em;}\r\n\r\n#about-us h2{margin-bottom:40px; padding-bottom:20px; border-bottom:1px solid #CCCCCC;}\r\n\r\n/* DEMO USE ONLY - CAN BE DELETED */\r\n\r\n#about-us #about-intro{margin-bottom:50px;}\r\n\r\n#about-us #about-intro p{margin:20px 0 0 0; padding:0;}\r\n\r\n#about-us #about-intro p:first-child{margin-top:0;}\r\n\r\n#about-us #team{margin-bottom:30px;}\r\n\r\n#about-us #team ul{margin:0; padding:0; list-style:none; text-align:center;}\r\n\r\n#about-us #team ul li{margin-bottom:20px; padding-bottom:20px; border-bottom:1px solid #CCCCCC;}\r\n\r\n#about-us #team ul li figure{}\r\n\r\n#about-us #team ul li figure img{}\r\n\r\n#about-us #team ul li figure figcaption{}\r\n\r\n#about-us #team ul li p{margin:15px 0 0 0; padding:0;}\r\n\r\n#about-us #team ul li p:first-child{}\r\n\r\n#about-us #team ul li figure figcaption .team_name{font-weight:bold;}\r\n\r\n#about-us #team ul li figure figcaption .team_title{margin:0; font-size:11px; line-height:normal;}\r\n\r\n#about-us #team ul li figure figcaption .team_description{}\r\n\r\n#about-us #team ul ul{margin-top:20px;}\r\n\r\n#about-us #team ul ul li{display:inline; margin:0 0 0 6px; padding:0; border:none;}\r\n\r\n#about-us #team ul ul li:first-child{margin-left:0;}\r\n\r\n#about-us #team ul ul li a{}\r\n\r\n#about-us #team ul ul li a img{margin:0;}\r\n\r\n#about-us #client_logos{margin:0;}\r\n\r\n#about-us #client_logos ul{margin:0; padding:0; list-style:none;}\r\n\r\n#about-us #client_logos ul li{}\r\n\r\n#about-us #client_logos ul li:first-child{margin-left:0;}\r\n\r\n#about-us #client_logos ul li img{}\r\n\r\n"

/***/ }),

/***/ "./src/app/sobre-nosotros/sobre-nosotros.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper row2\">\n    <div id=\"container\" class=\"clear\">\n      <!-- ####################################################################################################### -->\n      <!-- ####################################################################################################### -->\n      <!-- ####################################################################################################### -->\n      <!-- ####################################################################################################### -->\n      <div id=\"about-us\" class=\"clear\">\n        <!-- ####################################################################################################### -->\n        <section id=\"about-intro\" class=\"clear\">\n          <p>In odio. Mauris feugiat. Nunc posuere, felis sit amet faucibus convallis, tortor enim viverra quam, hendrerit interdum dui quam ut lacus. Ut dui dui, viverra ac, vulputate scelerisque, viverra molestie, tortor. Nullam quis odio id justo accumsan ullamcorper. Mauris lectus enim, luctus vitae, viverra a, pharetra mollis, diam. Donec sed lorem eget nibh sagittis dictum. Curabitur libero. Integer molestie mi sed tellus.</p>\n          <p>Praesent imperdiet justo at sem. Nam accumsan dui eget diam.Nulla quis ante eget pede fringilla rutrum. Proin mollis tristique orci. Nam est. Fusce felis nisl, volutpat vel, sollicitudin eu, luctus sit amet, sem. Curabitur risus erat, scelerisque sit amet, mollis id, consectetuer eu, neque. Curabitur sodales semper arcu. Sed ullamcorper arcu eu ante. Vestibulum sed lacus. Quisque vitae libero. Sed quis turpis vitae lectus vehicula tincidunt. Aliquam quam mi, rutrum malesuada, consequat vitae, accumsan ut, lacus. Nulla dictum vestibulum lorem.</p>\n        </section>\n        <!-- ####################################################################################################### -->\n        <section id=\"team\">\n          <h2>Vivamuslibero Auguer</h2>\n          <ul class=\"clear\">\n            <li class=\"one_quarter first\">\n              <figure><img src=\"images/demo/team-member.gif\" alt=\"\">\n                <figcaption>\n                  <p class=\"team_name\">Name Goes Here</p>\n                  <p class=\"team_title\">Job Title Here</p>\n                  <p class=\"team_description\">Vestassapede et donec ut est liberos sus et eget sed eget. Quisqueta habitur augue magnisl magna phas ellus sagit titor ant curabi turpis.</p>\n                </figcaption>\n              </figure>\n            </li>\n            <li class=\"one_quarter\">\n              <figure><img src=\"images/demo/team-member.gif\" alt=\"\">\n                <figcaption>\n                  <p class=\"team_name\">Name Goes Here</p>\n                  <p class=\"team_title\">Job Title Here</p>\n                  <p class=\"team_description\">Vestassapede et donec ut est liberos sus et eget sed eget. Quisqueta habitur augue magnisl magna phas ellus sagit titor ant curabi turpis.</p>\n                </figcaption>\n              </figure>\n            </li>\n            <li class=\"one_quarter\">\n              <figure><img src=\"images/demo/team-member.gif\" alt=\"\">\n                <figcaption>\n                  <p class=\"team_name\">Name Goes Here</p>\n                  <p class=\"team_title\">Job Title Here</p>\n                  <p class=\"team_description\">Vestassapede et donec ut est liberos sus et eget sed eget. Quisqueta habitur augue magnisl magna phas ellus sagit titor ant curabi turpis.</p>\n                </figcaption>\n              </figure>\n            </li>\n            <li class=\"one_quarter\">\n              <figure><img src=\"images/demo/team-member.gif\" alt=\"\">\n                <figcaption>\n                  <p class=\"team_name\">Name Goes Here</p>\n                  <p class=\"team_title\">Job Title Here</p>\n                  <p class=\"team_description\">Vestassapede et donec ut est liberos sus et eget sed eget. Quisqueta habitur augue magnisl magna phas ellus sagit titor ant curabi turpis.</p>\n                </figcaption>\n              </figure>\n            </li>\n          </ul>\n        </section>\n        <!-- ####################################################################################################### -->\n        <section id=\"client_logos\">\n          <h2>Vivamuslibero Auguer</h2>\n          <ul class=\"clear\">\n            <li class=\"one_fifth first\"><img src=\"images/demo/logo.gif\" alt=\"\"></li>\n            <li class=\"one_fifth\"><img src=\"images/demo/logo.gif\" alt=\"\"></li>\n            <li class=\"one_fifth\"><img src=\"images/demo/logo.gif\" alt=\"\"></li>\n            <li class=\"one_fifth\"><img src=\"images/demo/logo.gif\" alt=\"\"></li>\n            <li class=\"one_fifth\"><img src=\"images/demo/logo.gif\" alt=\"\"></li>\n          </ul>\n        </section>\n        <!-- ####################################################################################################### -->\n      </div>\n      <!-- ####################################################################################################### -->\n      <!-- ####################################################################################################### -->\n      <!-- ####################################################################################################### -->\n      <!-- ####################################################################################################### -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/sobre-nosotros/sobre-nosotros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobreNosotrosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SobreNosotrosComponent = /** @class */ (function () {
    function SobreNosotrosComponent() {
    }
    SobreNosotrosComponent.prototype.ngOnInit = function () {
    };
    SobreNosotrosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sobre-nosotros',
            template: __webpack_require__("./src/app/sobre-nosotros/sobre-nosotros.component.html"),
            styles: [__webpack_require__("./src/app/sobre-nosotros/sobre-nosotros.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SobreNosotrosComponent);
    return SobreNosotrosComponent;
}());



/***/ }),

/***/ "./src/app/tabla-de-posiciones/tabla-de-posiciones.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tabla-de-posiciones/tabla-de-posiciones.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  tabla-de-posiciones works!\n</p>\n"

/***/ }),

/***/ "./src/app/tabla-de-posiciones/tabla-de-posiciones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablaDePosicionesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablaDePosicionesComponent = /** @class */ (function () {
    function TablaDePosicionesComponent() {
    }
    TablaDePosicionesComponent.prototype.ngOnInit = function () {
    };
    TablaDePosicionesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tabla-de-posiciones',
            template: __webpack_require__("./src/app/tabla-de-posiciones/tabla-de-posiciones.component.html"),
            styles: [__webpack_require__("./src/app/tabla-de-posiciones/tabla-de-posiciones.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablaDePosicionesComponent);
    return TablaDePosicionesComponent;
}());



/***/ }),

/***/ "./src/app/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
        this.ldaUrl = 'api/lda';
        this.data = '';
    }
    TeamService.prototype.getLDA = function () {
        return this.http.get(this.ldaUrl);
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/ucr/ucr.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ucr/ucr.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ucr works!\n</p>\n"

/***/ }),

/***/ "./src/app/ucr/ucr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UcrComponent = /** @class */ (function () {
    function UcrComponent() {
    }
    UcrComponent.prototype.ngOnInit = function () {
    };
    UcrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ucr',
            template: __webpack_require__("./src/app/ucr/ucr.component.html"),
            styles: [__webpack_require__("./src/app/ucr/ucr.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UcrComponent);
    return UcrComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map