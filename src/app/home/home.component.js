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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var HomeComponent = (function () {
    function HomeComponent() {
        this.abouts = [
            { icon: 'fa fa-university', text: 'Développeur logiciel', link: 'http://elan-formation.eu/course/developpeur-logiciel/', linkDescription: 'Elan, Strasbourg' },
            { icon: 'fa fa-briefcase', text: 'Stage développement mobile', link: 'http://luence.fr', linkDescription: 'Luence, Hoenheim' },
            { icon: 'fa fa-code', text: 'Applications mobile', link: '/realisations', linkDescription: 'Luence, Hoenheim' },
            { icon: 'fa fa-briefcase', text: 'Infographiste (2005-2015)', link: 'http://www.grande-forge.fr', linkDescription: 'Grande Forge, Eschau' },
        ];
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            styleUrls: ['app/home/home.component.css'],
            templateUrl: '/app/home/home.component.html',
            directives: [ng2_bootstrap_1.CAROUSEL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map