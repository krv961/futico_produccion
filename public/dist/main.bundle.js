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

module.exports = ".table{\r\n\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n.table tr:hover {\r\n    background-color: black;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/alajuelense/alajuelense.component.html":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "\n\n   <head>\n      <link href=\"https://fonts.googleapis.com/css?family=Vollkorn\" rel=\"stylesheet\">\n      <link href=\"https://fonts.googleapis.com/css?family=Cutive\" rel=\"stylesheet\">\n      <link href=\"https://fonts.googleapis.com/css?family=Raleway\" rel=\"stylesheet\">\n      <link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n       <!-- Compiled and minified CSS -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css\">\n\n    <!-- Compiled and minified JavaScript -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js\"></script>\n            \n  </head>\n\n\n   <h1 class=\"title\">{{ldaInfo.nombre}}</h1> <br>\n    <h4 class=\"subtitle\">Sigla: {{ldaInfo.sigla}} </h4><br>\n    <h4 class=\"stadium\">Estadio: {{ldaInfo.estadio}}</h4>\n    <h4 class=\"date\">Año de creacion: {{ldaInfo.ano_creacion  | date:'shortDate'}}</h4><br>\n    <h4 class=\"championships\">Titulos: {{ldaInfo.titulos}}</h4><br>\n    <h4 class=\"dt\">Director Tecnico: {{ldaInfo.dt}}</h4><br>\n    <h4 class=\"histor\">Historia</h4><br>\n    <p>{{ldaInfo.historia}}</p> \n\n   \n\n    <h2>Panilla</h2>\n  <table class=\"table\">\n  <tr>\n    <th>Nombre</th>\n    <th>Apellido</th>\n    <th>#</th>\n    <th>Fecha de Nacimiento</th>\n    <th>Nacionalidad</th>\n    <th>Posicion</th>\n  </tr>\n  <tr *ngFor=\"let jugador of ldaInfo.jugadores\">\n    <td>{{jugador.nombre}}</td>\n    <td>{{jugador.apellido}}</td>\n    <td>{{jugador.numero}}</td>\n    <td>{{jugador.fechaNacimiento  | date:'shortDate'}}</td>\n    <td>{{jugador.nacionalidad}}</td>\n    <td>{{jugador.posicion}}</td>\n  </tr>\n  </table>\n\n\n\n\n"
=======
module.exports = "\r\n<!--\r\n\r\n-->\r\n\r\n\r\n<head>\r\n  <link href=\"https://fonts.googleapis.com/css?family=Vollkorn\" rel=\"stylesheet\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Cutive\" rel=\"stylesheet\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Raleway\" rel=\"stylesheet\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\r\n   <!-- Compiled and minified CSS -->\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css\">\r\n\r\n<!-- Compiled and minified JavaScript -->\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js\"></script>\r\n        \r\n  \r\n</head>\r\n\r\n\r\n<h1 class=\"title\">{{ldaInfo.nombre}}</h1> <br>\r\n<h4 class=\"subtitle\">Sigla: {{ldaInfo.sigla}} </h4><br>\r\n<h4 class=\"stadium\">Estadio: {{ldaInfo.estadio}}</h4>\r\n<h4 class=\"date\">Año de creacion: {{ldaInfo.ano_creacion  | date:'shortDate'}}</h4><br>\r\n<h4 class=\"championships\">Titulos: {{ldaInfo.titulos}}</h4><br>\r\n<h4 class=\"dt\">Director Tecnico: {{ldaInfo.dt}}</h4><br>\r\n<h4 class=\"histor\">Historia</h4><br>\r\n<p>{{ldaInfo.historia}}</p> \r\n\r\n\r\n\r\n<h2>Panilla</h2>\r\n<table class=\"table\">\r\n<tr>\r\n<th>Nombre</th>\r\n<th>Apellido</th>\r\n<th>#</th>\r\n<th>Fecha de Nacimiento</th>\r\n<th>Nacionalidad</th>\r\n<th>Posicion</th>\r\n</tr>\r\n<tr *ngFor=\"let jugador of ldaInfo.jugadores\">\r\n<td>{{jugador.nombre}}</td>\r\n<td>{{jugador.apellido}}</td>\r\n<td>{{jugador.numero}}</td>\r\n<td>{{jugador.fechaNacimiento  | date:'shortDate'}}</td>\r\n<td>{{jugador.nacionalidad}}</td>\r\n<td>{{jugador.posicion}}</td>\r\n</tr>\r\n</table>\r\n\r\n  \r\n\r\n\r\n<!--\r\n  <mat-tab-group>\r\n    <mat-tab label=\"Nombre\">\r\n      {{ldaInfo.nombre}}\r\n    </mat-tab>\r\n    <mat-tab label=\"Sigla\">\r\n        <div class=\"demo-tab-content\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n          </div>\r\n      {{ldaInfo.sigla}}\r\n    </mat-tab>\r\n    <mat-tab label=\"Estadio\">\r\n      {{ldaInfo.estadio}}\r\n    </mat-tab>\r\n    <mat-tab label=\"Año de creación\">\r\n      {{ldaInfo.ano_creacion  | date:'shortDate'}}\r\n    </mat-tab>\r\n    <mat-tab label=\"Historia\"> <p>{{ldaInfo.historia}}</p> </mat-tab>\r\n    <mat-tab label=\"Plantel\">\r\n      <table class=\"table\">\r\n        <tr>\r\n          <th>Nombre</th>\r\n          <th>Apellido</th>\r\n          <th>#</th>\r\n          <th>Fecha de Nacimiento</th>\r\n          <th>Nacionalidad</th>\r\n          <th>Posicion</th>\r\n        </tr>\r\n        <tr *ngFor=\"let jugador of ldaInfo.jugadores\">\r\n          <td>{{jugador.nombre}}</td>\r\n          <td>{{jugador.apellido}}</td>\r\n          <td>{{jugador.numero}}</td>\r\n          <td>{{jugador.fechaNacimiento  | date:'shortDate'}}</td>\r\n          <td>{{jugador.nacionalidad}}</td>\r\n          <td>{{jugador.posicion}}</td>\r\n        </tr>\r\n        </table>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n\r\n   \r\n \r\n\r\n   <h1 class=\"title\">{{ldaInfo.nombre}}</h1> <br>\r\n    <h4 class=\"subtitle\">Sigla: {{ldaInfo.sigla}} </h4><br>\r\n    <h4 class=\"stadium\">Estadio: {{ldaInfo.estadio}}</h4>\r\n    <h4 class=\"date\">Año de creacion: {{ldaInfo.ano_creacion  | date:'shortDate'}}</h4><br>\r\n    <h4 class=\"championships\">Titulos: {{ldaInfo.titulos}}</h4><br>\r\n    <h4 class=\"dt\">Director Tecnico: {{ldaInfo.dt}}</h4><br>\r\n    <h4 class=\"histor\">Historia</h4><br>\r\n    <p>{{ldaInfo.historia}}</p> \r\n\r\n   \r\n\r\n    <h2>Panilla</h2>\r\n  <table class=\"table\">\r\n  <tr>\r\n    <th>Nombre</th>\r\n    <th>Apellido</th>\r\n    <th>#</th>\r\n    <th>Fecha de Nacimiento</th>\r\n    <th>Nacionalidad</th>\r\n    <th>Posicion</th>\r\n  </tr>\r\n  <tr *ngFor=\"let jugador of ldaInfo.jugadores\">\r\n    <td>{{jugador.nombre}}</td>\r\n    <td>{{jugador.apellido}}</td>\r\n    <td>{{jugador.numero}}</td>\r\n    <td>{{jugador.fechaNacimiento  | date:'shortDate'}}</td>\r\n    <td>{{jugador.nacionalidad}}</td>\r\n    <td>{{jugador.posicion}}</td>\r\n  </tr>\r\n  </table>\r\n  !-->\r\n  \r\n\r\n\r\n\r\n\r\n"
>>>>>>> david

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
        this.teamService.getTeam('lda')
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
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

<<<<<<< HEAD
module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"
=======
module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n  "
>>>>>>> david

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_goleo_service__ = __webpack_require__("./src/app/services/goleo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_36__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_37__angular_material_form_field__["a" /* MatFormFieldModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_28__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_30__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_31__team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_35__services_goleo_service__["a" /* GoleoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carmelita/carmelita.component.css":
/***/ (function(module, exports) {

module.exports = ".fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    margin: 5px 2px;\r\n  }\r\n  \r\n  .fa:hover {\r\n      opacity: 0.7;\r\n  }\r\n  \r\n  .fa-facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n\r\n  }\r\n  \r\n  .fa-twitter {\r\n    background: #55ACEE;\r\n    color: white;\r\n  }\r\n  \r\n  .fa-youtube {\r\n    background: #bb0000;\r\n    color: white;\r\n  }\r\n  \r\n  .table{\r\n\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n  \r\n  .table tr:hover {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n  \r\n  .title{\r\n    font-family: 'Vollkorn', serif;\r\n}\r\n  \r\n  .subtitle .stadium .date .championships .dt{\r\n    font-family: 'Cutive', serif;\r\n    color: white;\r\n}\r\n  \r\n  h1, h4 {\r\n\r\ncolor: white;\r\n}\r\n  \r\n  .stadium{\r\n\r\n}\r\n  \r\n  .date {}\r\n  \r\n  .championships{}\r\n  \r\n  .dt {}\r\n  \r\n  .demo-tab-group {\r\n    border: 1px solid #e8e8e8;\r\n  }\r\n  \r\n  .demo-tab-content {\r\n    padding: 16px;\r\n  }\r\n  \r\n  body{\r\n    background-color: #26a69a;\r\n  }\r\n  \r\n  .table{\r\n      background-color: #e8e8e8;\r\n  }\r\n  \r\n  .tab{\r\n    background-color: #e8e8e8;\r\n  }\r\n  \r\n  /* Styles for tab labels */\r\n  \r\n  .mat-tab-label {\r\n    min-width: 25px !important;\r\n    padding: 5px;\r\n    background-color: transparent;\r\n    color: red;\r\n    font-weight: 700;\r\n}\r\n  \r\n  /* Styles for the active tab label */\r\n  \r\n  .mat-tab-label.mat-tab-label-active {\r\n    min-width: 25px !important;\r\n    padding: 5px;\r\n    background-color: transparent;\r\n    color: red;\r\n    font-weight: 700;\r\n}\r\n  \r\n  /* Styles for the ink bar */\r\n  \r\n  .mat-ink-bar {\r\n    background-color: #87B8DE;\r\n}\r\n  \r\n  p {\r\n  font-family: Lato;\r\n}\r\n  \r\n  example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n    max-height: 500px;\r\n    overflow: auto;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .displayed {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 25%;\r\n  }\r\n  \r\n  /*FOCUS*/\r\n  \r\n  .focus {\r\n  -webkit-transition: all 1s ease;\r\n          transition: all 1s ease;\r\n}\r\n  \r\n  .focus:hover {\r\n  border: 70px solid white;\r\n  border-radius: 30%;\r\n}\r\n  \r\n  body{font-family: 'Raleway', sans-serif;}\r\n  \r\n  h2 {\r\n  border-bottom: 10px solid red;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-size: 65px;\r\n  font-weight: 900;\r\n  margin: 0 auto;\r\n  padding: 20px 0 3px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  width: 40.2%;\r\n}\r\n  \r\n  .row.text-center p {\r\n  font-size: 17px;\r\n  font-weight: 600;\r\n  letter-spacing: -0.3px;\r\n  margin: 3px 0 30px;\r\n  text-transform: uppercase;\r\n}\r\n  \r\n  .text-center{\r\n  margin-left: 50px;\r\n}\r\n  \r\n  .h3, h3 {\r\n  font-family: 'Raleway', sans-serif;\r\n  font-size: 24px;\r\n  text-transform: uppercase;\r\n}\r\n  \r\n  .btn-default {\r\n  background: transparent none repeat scroll 0 0;\r\n  border: 2px solid #fff;\r\n  border-radius: 50px;\r\n  text-shadow: 0 1px 0 #fff;\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n  \r\n  .glyphicon {\r\n    color: white;}\r\n  \r\n  .caption-text p {\r\n  margin: 18px auto 13px;\r\n  text-align: center;\r\n  width: 91%;\r\n}\r\n  \r\n  .btn-default:focus, .btn-default:hover {\r\n  background-color: red;\r\n  background-position: 0 -15px;\r\n}\r\n  \r\n  .cuadro_intro_hover{\r\n    \tpadding: 0px;\r\n\t\tposition: relative;\r\n\t\toverflow: hidden;\r\n\t\theight: 200px;\r\n\t}\r\n  \r\n  .cuadro_intro_hover:hover .caption{\r\n\t\topacity: 1;\r\n\t\ttransform: translateY(-150px);\r\n\t\t-webkit-transform:translateY(-150px);\r\n\t\t-moz-transform:translateY(-150px);\r\n\t\t-ms-transform:translateY(-150px);\r\n\t\t-o-transform:translateY(-150px);\r\n\t}\r\n  \r\n  .cuadro_intro_hover img{\r\n\t\tz-index: 4;\r\n\t}\r\n  \r\n  .cuadro_intro_hover .caption{\r\n\t\tposition: absolute;\r\n\t\ttop:150px;\r\n\t\t-webkit-transition:all 0.3s ease-in-out;\r\n\t\ttransition:all 0.3s ease-in-out;\r\n\t\twidth: 100%;\r\n\t}\r\n  \r\n  .cuadro_intro_hover .blur{\r\n\t\tbackground-color: rgba(0,0,0,0.7);\r\n\t\theight: 300px;\r\n\t\tz-index: 5;\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t}\r\n  \r\n  .cuadro_intro_hover .caption-text{\r\n\t\tz-index: 10;\r\n\t\tcolor: #fff;\r\n\t\tposition: absolute;\r\n\t\theight: 300px;\r\n\t\ttext-align: center;\r\n\t\ttop:-20px;\r\n\t\twidth: 100%;\r\n  }\r\n  \r\n  .carmen{\r\n    margin-left: 50px;\r\n  }"

/***/ }),

/***/ "./src/app/carmelita/carmelita.component.html":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<!--Tutorial para css bootstrap divs\r\nhttps://getbootstrap.com/docs/3.3/css/\r\n-->\r\n<html lang=\"en\">\r\n<head>\r\n  <title>Bootstrap Example</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Vollkorn\" rel=\"stylesheet\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Cutive\" rel=\"stylesheet\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Raleway\" rel=\"stylesheet\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n</head>\r\n<body>\r\n\r\n  <!--\r\n<div class=\"container-fluid\"> \r\n<div class=\"row\">\r\n  <div class=\"col-sm-2\"></div><img src=\"assets/img/carmelitalogo.png\"></div>\r\n  <div class=\"col-sm-8\">Info</div>\r\n  <div class=\"col-sm-2\">Social Media</div>\r\n\r\n</div>\r\n-->\r\n<div class=\"container-fluid\"> \r\n \r\n  <div class=\"row \">\r\n    <div class=\"col-sm-3\"><img class=\"displayed focus pic\" src=\"assets/img/carmelitalogo.png\"></div>\r\n    <div class=\"col-sm-6\">\r\n     <!--   <h1 class=\"title\"> {{carmelitaInfo.nombre}}</h1> <br>\r\n        <h4 class=\"subtitle\">Sigla: {{carmelitaInfo.sigla}} </h4><br>\r\n        <h4 class=\"stadium\">Estadio: {{carmelitaInfo.estadio}}</h4>\r\n        <h4 class=\"date\">Año de creacion: {{carmelitaInfo.ano_creacion  | date:'shortDate'}}</h4><br>\r\n        <h4 class=\"championships\">Titulos: {{carmelitaInfo.titulos}}</h4><br>\r\n        <h4 class=\"dt\">Director Tecnico: {{carmelitaInfo.dt}}</h4><br>-->\r\n\r\n        <div class=\"container\">\r\n            <div class=\"row text-center\">\r\n            <h2 class=\"carmen\">{{carmelitaInfo.nombre}} </h2>\r\n                <p class=\"carmen\">{{carmelitaInfo.sigla}}</p>\r\n          </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-2\">\r\n                    <div class=\"cuadro_intro_hover \" style=\"background-color:#cccccc;\">\r\n                    <p style=\"text-align:center;\">\r\n                      <img src=\"https://image.ibb.co/fLYf0d/carmelita_Estadio.jpg\" alt=\"carmelita_Estadio\" class=\"img-responsive\">\r\n                    </p>\r\n                    <div class=\"caption\">\r\n                      <div class=\"blur\"></div>\r\n                      <div class=\"caption-text\">\r\n                        <h3 style=\"border-top:2px solid white; border-bottom:2px solid white; padding:10px;\">Estadio</h3>\r\n                        <p>{{carmelitaInfo.estadio}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                \r\n              </div>\r\n                <div class=\"col-sm-2\">\r\n                      <div class=\"cuadro_intro_hover \" style=\"background-color:#cccccc;\">\r\n                    <p style=\"text-align:center;\">\r\n                        <img src=\"https://image.ibb.co/jCGNDy/trofeo.jpg\" alt=\"trofeo\" class=\"img-responsive\">\r\n                    </p>\r\n                    <div class=\"caption\">\r\n                      <div class=\"blur\"></div>\r\n                      <div class=\"caption-text\">\r\n                        <h3 style=\"border-top:2px solid white; border-bottom:2px solid white; padding:10px;\">Titulos</h3>\r\n                        <p>{{carmelitaInfo.titulos}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                \r\n              </div>\r\n                <div class=\"col-sm-2\">\r\n                      <div class=\"cuadro_intro_hover\" style=\"background-color:#cccccc;\">\r\n                    <p style=\"text-align:center;\">\r\n                        <img src=\"https://image.ibb.co/kkEjty/mario_viquez.jpg\" alt=\"mario_viquez\" class=\"img-responsive\">\r\n                    </p>\r\n                    <div class=\"caption\">\r\n                      <div class=\"blur\"></div>\r\n                      <div class=\"caption-text\">\r\n                        <h3 style=\"border-top:2px solid white; border-bottom:2px solid white; padding:10px;\">DT</h3>\r\n                        <p>{{carmelitaInfo.dt}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                \r\n              </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <a href=\" #\" target=\"_blank\" class=\"fa fa-facebook\"></a>\r\n<a href=\"#\" target=\"_blank\" class=\"fa fa-twitter\"></a>\r\n<a href=\"#\" target=\"_blank\" class=\"fa fa-youtube\"></a>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-5\">\r\n      <table class=\"table\">\r\n        <tr>\r\n          <th>Equipo Local</th>\r\n          <th>Equipo visita</th>\r\n          <th>Resultado</th>\r\n          <th>Fecha</th>\r\n          <th>Estadio</th>\r\n        </tr>\r\n        <tr *ngFor=\"let goleo of carmelitaGoleo.goleadores\">\r\n          <td>{{goleo.nombre}}</td>\r\n          <td>{{goleo.equipo}}</td>\r\n          <td>{{goleo.goles}}</td>\r\n          <td>{{goleo.pie}}</td>\r\n          <td>{{goleo.cabeza}}</td>\r\n          <td>{{goleo.falta}}</td>\r\n          <td>{{goleo.penal}}</td>\r\n        </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-sm-7\">\r\n      \r\n        <mat-card class=\"tab\">\r\n            <mat-card-content>\r\n              <mat-tab-group class=\"demo-tab-group\">\r\n                <mat-tab label=\"Plantel\">\r\n                    <table class=\"table\">\r\n                        <tr>\r\n                          <th>Nombre</th>\r\n                          <th>Apellido</th>\r\n                          <th>#</th>\r\n                          <th>Fecha de Nacimiento</th>\r\n                          <th>Nacionalidad</th>\r\n                          <th>Posicion</th>\r\n                        </tr>\r\n                        <tr *ngFor=\"let jugador of carmelitaInfo.jugadores\">\r\n                          <td>{{jugador.nombre}}</td>\r\n                          <td>{{jugador.apellido}}</td>\r\n                          <td>{{jugador.numero}}</td>\r\n                          <td>{{jugador.fechaNacimiento  | date:'shortDate'}}</td>\r\n                          <td>{{jugador.nacionalidad}}</td>\r\n                          <td>{{jugador.posicion}}</td>\r\n                        </tr>\r\n                        </table>\r\n                </mat-tab>\r\n                <mat-tab label=\"Calendario\">\r\n                  <div class=\"demo-tab-content\">\r\n                    Calendario del equipo\r\n                  </div>  \r\n                </mat-tab>\r\n                <mat-tab label=\"Goleo\">\r\n                  <div class=\"demo-tab-content\">\r\n                   Goleadores del equipo\r\n                   <table class=\"table\">\r\n                      <tr>\r\n                        <th>Nombre</th>\r\n                        <th>Equipo</th>\r\n                        <th>Goles</th>\r\n                        <th>Pie</th>\r\n                        <th>Cabeza</th>\r\n                        <th>Falta</th>\r\n                        <th>Penal</th>\r\n                      </tr>\r\n                      <tr *ngFor=\"let goleo of carmelitaGoleo.goleadores\">\r\n                        <td>{{goleo.nombre}}</td>\r\n                        <td>{{goleo.equipo}}</td>\r\n                        <td>{{goleo.goles}}</td>\r\n                        <td>{{goleo.pie}}</td>\r\n                        <td>{{goleo.cabeza}}</td>\r\n                        <td>{{goleo.falta}}</td>\r\n                        <td>{{goleo.penal}}</td>\r\n                      </tr>\r\n                      </table>\r\n                  </div>  \r\n                </mat-tab>\r\n                <mat-tab label=\"Asistencias\">\r\n                    <div class=\"demo-tab-content\">\r\n                        Asistencias del equipo\r\n                       </div>\r\n                </mat-tab>\r\n                <mat-tab label=\"Noticias\">\r\n                    <div class=\"demo-tab-content\">\r\n                        noticas del equipo\r\n                       </div>  \r\n                </mat-tab>\r\n                <mat-tab label=\"Historia\">\r\n                    <p>{{carmelitaInfo.historia}}</p>  \r\n                </mat-tab>\r\n              </mat-tab-group>\r\n            </mat-card-content>\r\n          </mat-card>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-md-3\">twitter del equipo</div>\r\n  </div>\r\n  \r\n  </div>\r\n\r\n</body>\r\n</html>\r\n"
=======
module.exports = "<p>\r\n  carmelita works!\r\n</p>\r\n"
>>>>>>> david

/***/ }),

/***/ "./src/app/carmelita/carmelita.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarmelitaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/app/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_goleo_service__ = __webpack_require__("./src/app/services/goleo.service.ts");
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
    function CarmelitaComponent(teamService, goleoService) {
        this.teamService = teamService;
        this.goleoService = goleoService;
        this.carmelitaInfo = [];
        this.carmelitaGoleo = [];
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    }
    // dataSource = new MatTableDataSource(ELEMENT_DATA);
    // dataSource = new MatTableDataSource(ELEMENT_DATA);
    CarmelitaComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        //   this.dataSource.filter = filterValue;
    };
    CarmelitaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeam('carmelita')
            .subscribe(function (res) { return _this.carmelitaInfo = res; }, function (err) { return console.log(err); });
        console.log(JSON.stringify(this, function (res) { return _this.carmelitaInfo; })); // '{}'
        this.goleoService.getGoles('ADC')
            .subscribe(function (res) { return _this.carmelitaGoleo = res; }, function (err) { return console.log(err); });
    };
    CarmelitaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carmelita',
            template: __webpack_require__("./src/app/carmelita/carmelita.component.html"),
            styles: [__webpack_require__("./src/app/carmelita/carmelita.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_2__services_goleo_service__["a" /* GoleoService */]])
    ], CarmelitaComponent);
    return CarmelitaComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/app/cartagines/cartagines.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cartagines/cartagines.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  cartagines works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/cartagines/cartagines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartaginesComponent; });
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


var CartaginesComponent = /** @class */ (function () {
    function CartaginesComponent(teamService) {
        this.teamService = teamService;
        this.info = [];
    }
    CartaginesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeam('csc')
            .subscribe(function (res) { return _this.info = res; }, function (err) { return console.log(err); });
    };
    CartaginesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cartagines',
            template: __webpack_require__("./src/app/cartagines/cartagines.component.html"),
            styles: [__webpack_require__("./src/app/cartagines/cartagines.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
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

module.exports = "<p>\r\n  estadisticas works! \r\n\r\n</p>\r\n"

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

module.exports = "<p>\r\n  grecia works!\r\n</p>\r\n"

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
        this.info = [];
    }
    GreciaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeam('gre')
            .subscribe(function (res) { return _this.info = res; }, function (err) { return console.log(err); });
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

module.exports = "<p>\r\n  guadalupe works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/guadalupe/guadalupe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuadalupeComponent; });
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


var GuadalupeComponent = /** @class */ (function () {
    function GuadalupeComponent(teamService) {
        this.teamService = teamService;
        this.info = [];
    }
    GuadalupeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeam('gfc')
            .subscribe(function (res) { return _this.info = res; }, function (err) { return console.log(err); });
    };
    GuadalupeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-guadalupe',
            template: __webpack_require__("./src/app/guadalupe/guadalupe.component.html"),
            styles: [__webpack_require__("./src/app/guadalupe/guadalupe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
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

module.exports = "\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<body>\r\n  <header class=\"header\">\r\n\r\n\r\n\r\n\r\n<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#teambar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>                        \r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/img/logo1.png\" alt=\"LDA\" width=\"56px\" height=\"56\"></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"teambar\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"team hover\"><a routerLink=\"/alajuelense\" routerLinkActive=\"active\"><img src=\"assets/img/ldalogo.png\" alt=\"LDA\" width=\"42px\" height=\"42\"></a></li>\r\n        <li class=\"team hover\"><a routerLink=\"/saprissa\" routerLinkActive=\"active\"><img src=\"assets/img/saprissalogo.png\" alt=\"SAP\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team hover\"><a routerLink=\"/herediano\" routerLinkActive=\"active\"><img src=\"assets/img/heredialogo.png\" alt=\"CSH\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team hover\"><a routerLink=\"/cartagines\" routerLinkActive=\"active\"><img src=\"assets/img/cartagologo.png\" alt=\"CSC\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team hover\"><a routerLink=\"/santos\" routerLinkActive=\"active\"><img src=\"assets/img/santoslogo.png\" alt=\"SAN\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team hover\"><a routerLink=\"/perez-zeledon\" routerLinkActive=\"active\"><img src=\"assets/img/pzlogo.png\" alt=\"PZ\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team hover\"><a routerLink=\"/grecia\" routerLinkActive=\"active\"><img src=\"assets/img/grecialogo.png\" alt=\"GRE\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team hover\"><a routerLink=\"/guadalupe\" routerLinkActive=\"active\"><img src=\"assets/img/guadalupelogo.png\" alt=\"GUA\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team hover\"><a routerLink=\"/limon\" routerLinkActive=\"active\"><img src=\"assets/img/limonlogo.png\" alt=\"LIM\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team hover\"><a routerLink=\"/liberia\" routerLinkActive=\"active\"><img src=\"assets/img/liberialogo.png\" alt=\"LIB\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team hover\"><a routerLink=\"/ucr\" routerLinkActive=\"active\"><img src=\"assets/img/ucrlogo.png\" alt=\"UCR\" width=\"42\" height=\"42\"></a></li>\r\n        <li class=\"team hover\"><a routerLink=\"/carmelita\" routerLinkActive=\"active\"><img src=\"assets/img/carmelitalogo.png\" alt=\"CAR\" width=\"42\" height=\"42\"></a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menubar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">Futico</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"menubar\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li class=\"options\"><a routerLink=\"/tabla-de-posiciones\" routerLinkActive=\"active\">Tabla de Posiciones</a></li>\r\n          <li class=\"options\"><a routerLink=\"/estadisticas\" routerLinkActive=\"active\">Estadisticas</a></li>\r\n          <li class=\"options\"><a routerLink=\"/noticias\" routerLinkActive=\"active\">Noticias</a></li>\r\n          <li class=\"options\"><a routerLink=\"/sobre-nosotros\" routerLinkActive=\"active\">Sobre Nosotros</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n\r\n  \r\n\r\n</header>\r\n\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/header/headerstyle.scss":
/***/ (function(module, exports) {

module.exports = ".team {\n  padding-right: 2ex; }\n\n.options, .navbar-brand {\n  padding-right: 16ex; }\n\n.navbar-inverse {\n  padding-bottom: 0%;\n  padding-top: 0%;\n  clear: both;\n  margin-top: 0%;\n  margin: 0%;\n  margin-bottom: 0%; }\n\n.ng-sticky {\n  background-color: black;\n  line-height: 0%;\n  clear: both; }\n\n.hover:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5); }\n"

/***/ }),

/***/ "./src/app/herediano/herediano.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/herediano/herediano.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  herediano works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/herediano/herediano.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeredianoComponent; });
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


var HeredianoComponent = /** @class */ (function () {
    function HeredianoComponent(teamService) {
        this.teamService = teamService;
        this.info = [];
    }
    HeredianoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeam('csh')
            .subscribe(function (res) { return _this.info = res; }, function (err) { return console.log(err); });
    };
    HeredianoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-herediano',
            template: __webpack_require__("./src/app/herediano/herediano.component.html"),
            styles: [__webpack_require__("./src/app/herediano/herediano.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
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

module.exports = "<!-- ============================================================== -->\r\n<!-- Simple four boxes Row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <!-- column -->    \r\n    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <!-- Row -->\r\n                <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n                    <!-- column -->\r\n                    <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\"> <!-- esto es para que cuando \r\n                        se haga mas pequeño, ocupe solamente la mitad de la pantalla, ejemplo:\r\n                        xl, then fallback to 'gt-sm' so the div sizing is 100%\r\n                        lg, then fallback to 'gt-sm' so the div sizing is 100%\r\n                        md, then fallback to 'gt-sm' so the div sizing is 100%\r\n                        sm, then fallback to the default fxFlex=\"50%\"; so the div sizing is 50%\r\n                        xs, then fallback to the default fxFlex=\"50%\"; so the div sizing is 50%\r\n                    -->\r\n                        Pagina de inicio\r\n                        Aquí irá una información acerca de algunas cosas sobre la página,\r\n                        algunos datos importantes sobre UNAFUT, AÑOS, PARTIDOS, ACTUAL CAMPEON , ETC.\r\n                    </div>                    \r\n                </div>   \r\n                \r\n                <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n                        <!-- column -->\r\n                        <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\"> \r\n                            \r\n                            Pagina de inicio\r\n                            Aquí irá una información acerca de algunas cosas sobre la página,\r\n                            algunos datos importantes sobre UNAFUT, AÑOS, PARTIDOS, ACTUAL CAMPEON , ETC.\r\n                        </div>                    \r\n                    </div>   \r\n\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <!-- column -->    \r\n</div>\r\n\r\n"

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

module.exports = "*{\r\n  margin: 0px;\r\n  padding: 0px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-family: sans-serif;\r\n}\r\n\r\nfooter{\r\n  width: 100%;\r\n  background: #272B59;\r\n  color: white;\r\n  padding: 20px;\r\n}\r\n\r\n.container-footer-all{\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  margin: auto;\r\n  padding: 10px;\r\n}\r\n\r\n.container-body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.column1{\r\n  max-width: 400px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.column1 h1 {\r\n  font-size: 22px;\r\n\r\n}\r\n\r\n.column1 p {\r\n  font-size: 14px;\r\n  color: #C7C7C7;\r\n  margin-top: 20px;\r\n}\r\n\r\n.column2{\r\n  max-width: 400px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.column2 h1 {\r\n  font-size: 22px;\r\n}\r\n\r\n.row {\r\n  margin-top: 20px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.row img{\r\n  width: 36px;\r\n  height: 36px;\r\n}\r\n\r\n.row label{\r\n  margin-top: 10px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.column3{\r\n  max-width: 400px;\r\n  margin-top: 10px;\r\n\r\n}\r\n\r\n.column3 h1 {\r\n  font-size: 22px;\r\n  text-align: center;\r\n\r\n}\r\n\r\n.column3 label {\r\n  font-size: 18px;\r\n  color: #C7C7C7;\r\n  margin-top: 20px;\r\n}\r\n\r\n.row2 {\r\n  margin-top: 20px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.row2 img{\r\n  width: 36px;\r\n  height: 36px;\r\n}\r\n\r\n.row2 label{\r\n  margin-top: 10px;\r\n  margin-left: 20px;\r\n  max-width: 140%;\r\n}\r\n\r\n.container-footer{\r\n  width: 100%;\r\n  background: #C7C7C7;\r\n}\r\n\r\n.footer{\r\n  max-width: 1200px;\r\n  margin: auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 40px;\r\n}\r\n\r\n.copyright{\r\n  color: #101010;\r\n}\r\n\r\n.information{\r\n  text-decoration: none;\r\n  color: #101010;\r\n}\r\n\r\n@media screen and (max-width: 1100px;){\r\n    .container-body{\r\n      -ms-flex-wrap: wrap;\r\n          flex-wrap: wrap;\r\n    }\r\n\r\n    .column3 {\r\n      margin-top: 40px;\r\n    }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n</head>\r\n\r\n<footer>\r\n\r\n    <div ng-sticky style=\"width:100%\" [offSet]=\"0\" [addClass]=\"'is-sticky'\">\r\n\r\n  <div class=\"container-footer-all\">\r\n\r\n\r\n  <div class=\"container-body\">\r\n\r\n        <div class=\"column1\">\r\n            <h1>Más Información de la Página</h1>\r\n            <p>Esta es una página que busca informar sobre todo\r\n            el ámbito del futbol a nivel de Costa Rica.</p>\r\n            <p>Se busca información confiable y de otras páginas serias para\r\n            que el visitante obtenga información veridica y de calidad.</p>\r\n        </div>\r\n\r\n        <div class=\"column2\">\r\n            <h1>Twitter UNAFUT</h1>\r\n            <div class=\"row\">\r\n                <a class=\"twitter-timeline\" data-width=\"300\" data-height=\"200\" href=\"https://twitter.com/UnafutOficial?ref_src=twsrc%5Etfw\">Tweets by UnafutOficial</a>\r\n            </div>\r\n          </div>\r\n  \r\n\r\n        <div class=\"column3\">\r\n          <h1>Información  Contactos</h1>\r\n            <div class=\"row2\">\r\n                <img src=\"assets/img/email.png\">\r\n                <label >futboltico@gmail.com</label>\r\n            </div>\r\n        </div>\r\n\r\n  </div>\r\n  <br/>\r\n  <div class=\"container-footer\">\r\n    <div class=\"footer\">\r\n\r\n\r\n    <div class=\"copyright\">\r\n      &copy; 2018, Todos los Derechos Reservados.\r\n    </div>\r\n    <div class=\"information\">\r\n      Pagina Diseñada por | <a target=\"_blank\" href=\"https://www.facebook.com/rolando.campos.12\">Rolando</a> <a target=\"_blank\" href=\"https://www.facebook.com/mario.alvaradoangulo\">Mario</a>  <a target=\"_blank\" href=\"https://www.facebook.com/kevin.rodriguezvalverde\">Kevin</a>  <a target=\"_blank\" href=\"https://www.facebook.com/david.leitonarias\">David</a> \r\n    </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n</footer>\r\n"

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

module.exports = "<p>\r\n  liberia works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/liberia/liberia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiberiaComponent; });
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


var LiberiaComponent = /** @class */ (function () {
    function LiberiaComponent(teamService) {
        this.teamService = teamService;
        this.info = [];
    }
    LiberiaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeam('lib')
            .subscribe(function (res) { return _this.info = res; }, function (err) { return console.log(err); });
    };
    LiberiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-liberia',
            template: __webpack_require__("./src/app/liberia/liberia.component.html"),
            styles: [__webpack_require__("./src/app/liberia/liberia.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
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

module.exports = "<p>\r\n  limon works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/limon/limon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimonComponent; });
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


var LimonComponent = /** @class */ (function () {
    function LimonComponent(teamService) {
        this.teamService = teamService;
        this.info = [];
    }
    LimonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeam('lim')
            .subscribe(function (res) { return _this.info = res; }, function (err) { return console.log(err); });
    };
    LimonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-limon',
            template: __webpack_require__("./src/app/limon/limon.component.html"),
            styles: [__webpack_require__("./src/app/limon/limon.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
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

module.exports = "<h3>\r\n  No se encuentra la pagina solicitada\r\n</h3>\r\n"

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

module.exports = "<p>\r\n  noticias works!\r\n</p>\r\n"

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

module.exports = "<p>\r\n  perez-zeledon works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/perez-zeledon/perez-zeledon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerezZeledonComponent; });
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


var PerezZeledonComponent = /** @class */ (function () {
    function PerezZeledonComponent(teamService) {
        this.teamService = teamService;
        this.info = [];
    }
    PerezZeledonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeam('pz')
            .subscribe(function (res) { return _this.info = res; }, function (err) { return console.log(err); });
    };
    PerezZeledonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-perez-zeledon',
            template: __webpack_require__("./src/app/perez-zeledon/perez-zeledon.component.html"),
            styles: [__webpack_require__("./src/app/perez-zeledon/perez-zeledon.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
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

module.exports = "<p>\r\n  rest works!\r\n</p>\r\n"

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

module.exports = "<p>\r\n  santos works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/santos/santos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SantosComponent; });
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


var SantosComponent = /** @class */ (function () {
    function SantosComponent(teamService) {
        this.teamService = teamService;
        this.info = [];
    }
    SantosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeam('san')
            .subscribe(function (res) { return _this.info = res; }, function (err) { return console.log(err); });
    };
    SantosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-santos',
            template: __webpack_require__("./src/app/santos/santos.component.html"),
            styles: [__webpack_require__("./src/app/santos/santos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
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

module.exports = "<p>\r\n  saprissa works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/saprissa/saprissa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaprissaComponent; });
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


var SaprissaComponent = /** @class */ (function () {
    function SaprissaComponent(teamService) {
        this.teamService = teamService;
        this.info = [];
    }
    SaprissaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeam('sap')
            .subscribe(function (res) { return _this.info = res; }, function (err) { return console.log(err); });
    };
    SaprissaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-saprissa',
            template: __webpack_require__("./src/app/saprissa/saprissa.component.html"),
            styles: [__webpack_require__("./src/app/saprissa/saprissa.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
    ], SaprissaComponent);
    return SaprissaComponent;
}());



/***/ }),

/***/ "./src/app/services/goleo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoleoService; });
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


var GoleoService = /** @class */ (function () {
    function GoleoService(http) {
        this.http = http;
        this.data = '';
    }
    GoleoService.prototype.getGoles = function (team) {
        console.log('goleo service tiene ' + JSON.stringify(this.http.get('goleo/' + team)));
        console.log('se trae la siguiente url ' + 'goleo/' + team);
        return this.http.get('goleo/' + team);
    };
    GoleoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GoleoService);
    return GoleoService;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
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

module.exports = "<div class=\"wrapper row2\">\r\n    <div id=\"container\" class=\"clear\">\r\n      <!-- ####################################################################################################### -->\r\n      <!-- ####################################################################################################### -->\r\n      <!-- ####################################################################################################### -->\r\n      <!-- ####################################################################################################### -->\r\n      <div id=\"about-us\" class=\"clear\">\r\n        <!-- ####################################################################################################### -->\r\n        <section id=\"about-intro\" class=\"clear\">\r\n          <p>In odio. Mauris feugiat. Nunc posuere, felis sit amet faucibus convallis, tortor enim viverra quam, hendrerit interdum dui quam ut lacus. Ut dui dui, viverra ac, vulputate scelerisque, viverra molestie, tortor. Nullam quis odio id justo accumsan ullamcorper. Mauris lectus enim, luctus vitae, viverra a, pharetra mollis, diam. Donec sed lorem eget nibh sagittis dictum. Curabitur libero. Integer molestie mi sed tellus.</p>\r\n          <p>Praesent imperdiet justo at sem. Nam accumsan dui eget diam.Nulla quis ante eget pede fringilla rutrum. Proin mollis tristique orci. Nam est. Fusce felis nisl, volutpat vel, sollicitudin eu, luctus sit amet, sem. Curabitur risus erat, scelerisque sit amet, mollis id, consectetuer eu, neque. Curabitur sodales semper arcu. Sed ullamcorper arcu eu ante. Vestibulum sed lacus. Quisque vitae libero. Sed quis turpis vitae lectus vehicula tincidunt. Aliquam quam mi, rutrum malesuada, consequat vitae, accumsan ut, lacus. Nulla dictum vestibulum lorem.</p>\r\n        </section>\r\n        <!-- ####################################################################################################### -->\r\n        <section id=\"team\">\r\n          <h2>Vivamuslibero Auguer</h2>\r\n          <ul class=\"clear\">\r\n            <li class=\"one_quarter first\">\r\n              <figure><img src=\"images/demo/team-member.gif\" alt=\"\">\r\n                <figcaption>\r\n                  <p class=\"team_name\">Name Goes Here</p>\r\n                  <p class=\"team_title\">Job Title Here</p>\r\n                  <p class=\"team_description\">Vestassapede et donec ut est liberos sus et eget sed eget. Quisqueta habitur augue magnisl magna phas ellus sagit titor ant curabi turpis.</p>\r\n                </figcaption>\r\n              </figure>\r\n            </li>\r\n            <li class=\"one_quarter\">\r\n              <figure><img src=\"images/demo/team-member.gif\" alt=\"\">\r\n                <figcaption>\r\n                  <p class=\"team_name\">Name Goes Here</p>\r\n                  <p class=\"team_title\">Job Title Here</p>\r\n                  <p class=\"team_description\">Vestassapede et donec ut est liberos sus et eget sed eget. Quisqueta habitur augue magnisl magna phas ellus sagit titor ant curabi turpis.</p>\r\n                </figcaption>\r\n              </figure>\r\n            </li>\r\n            <li class=\"one_quarter\">\r\n              <figure><img src=\"images/demo/team-member.gif\" alt=\"\">\r\n                <figcaption>\r\n                  <p class=\"team_name\">Name Goes Here</p>\r\n                  <p class=\"team_title\">Job Title Here</p>\r\n                  <p class=\"team_description\">Vestassapede et donec ut est liberos sus et eget sed eget. Quisqueta habitur augue magnisl magna phas ellus sagit titor ant curabi turpis.</p>\r\n                </figcaption>\r\n              </figure>\r\n            </li>\r\n            <li class=\"one_quarter\">\r\n              <figure><img src=\"images/demo/team-member.gif\" alt=\"\">\r\n                <figcaption>\r\n                  <p class=\"team_name\">Name Goes Here</p>\r\n                  <p class=\"team_title\">Job Title Here</p>\r\n                  <p class=\"team_description\">Vestassapede et donec ut est liberos sus et eget sed eget. Quisqueta habitur augue magnisl magna phas ellus sagit titor ant curabi turpis.</p>\r\n                </figcaption>\r\n              </figure>\r\n            </li>\r\n          </ul>\r\n        </section>\r\n        <!-- ####################################################################################################### -->\r\n        <section id=\"client_logos\">\r\n          <h2>Vivamuslibero Auguer</h2>\r\n          <ul class=\"clear\">\r\n            <li class=\"one_fifth first\"><img src=\"images/demo/logo.gif\" alt=\"\"></li>\r\n            <li class=\"one_fifth\"><img src=\"images/demo/logo.gif\" alt=\"\"></li>\r\n            <li class=\"one_fifth\"><img src=\"images/demo/logo.gif\" alt=\"\"></li>\r\n            <li class=\"one_fifth\"><img src=\"images/demo/logo.gif\" alt=\"\"></li>\r\n            <li class=\"one_fifth\"><img src=\"images/demo/logo.gif\" alt=\"\"></li>\r\n          </ul>\r\n        </section>\r\n        <!-- ####################################################################################################### -->\r\n      </div>\r\n      <!-- ####################################################################################################### -->\r\n      <!-- ####################################################################################################### -->\r\n      <!-- ####################################################################################################### -->\r\n      <!-- ####################################################################################################### -->\r\n    </div>\r\n  </div>"

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

module.exports = "<p>\r\n  tabla-de-posiciones works!\r\n</p>\r\n"

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
        this.info = 'api/lda';
        this.data = '';
    }
    TeamService.prototype.getTeam = function (team) {
        return this.http.get('api/' + team);
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
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

module.exports = "<p>\r\n  ucr works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/ucr/ucr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcrComponent; });
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


var UcrComponent = /** @class */ (function () {
    function UcrComponent(teamService) {
        this.teamService = teamService;
        this.info = [];
    }
    UcrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeam('ucr')
            .subscribe(function (res) { return _this.info = res; }, function (err) { return console.log(err); });
    };
    UcrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ucr',
            template: __webpack_require__("./src/app/ucr/ucr.component.html"),
            styles: [__webpack_require__("./src/app/ucr/ucr.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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