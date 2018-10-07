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
var RealisationsComponent = (function () {
    function RealisationsComponent() {
        this.listRealisations = [
            { titre: 'Projet mobile Luence', icon: 'fa fa-mobile-phone' },
            { titre: 'Chocathome', icon: 'fa fa-mobile-phone' },
            { titre: 'Material Meteo', icon: 'fa fa-mobile-phone' },
            { titre: 'Forum PHP', icon: 'fa fa-globe' },
            { titre: 'Site web Alamgaleri', icon: 'fa fa-wordpress' }
        ];
        this.luence = [
            {
                index: 0,
                titre: 'Projet mobile Luence',
                img: 'app/assets/img/realisations/luence1.png',
                img2: 'app/assets/img/realisations/luence2.png',
                img3: 'app/assets/img/realisations/luence3.png',
                text: 'Application mobile',
                societe: 'Luence',
                link: 'http://www.luence.fr',
                icon: 'fa fa-mobile-phone',
                description: "Réalisation d'une application mobile e-commerce cross-platform pour la société Luence",
                caracteristiques: "Back-end WordPress E-Commerce (Woocommerce)",
                technologies: "Ionic 2, Angular2, Wordpress, PHP"
            }
        ];
        this.chocathome = [
            {
                index: 1,
                titre: 'Chocathome',
                img: 'app/assets/img/realisations/chocathome1.png',
                img2: 'app/assets/img/realisations/chocathome2.png',
                img3: 'app/assets/img/realisations/chocathome3.png',
                text: 'Application mobile',
                societe: 'Choc@home',
                link: 'http://www.luence.fr',
                icon: 'fa fa-mobile-phone',
                description: "Réalisation d'une application mobile e-commerce cross-platform pour la société Choc@Home lors du stage chez Luence",
                caracteristiques: "Back-end WordPress Woocommerce",
                technologies: "Ionic 2, Angular2, Wordpress, PHP"
            }
        ];
        this.materialmeteo = [
            {
                index: 2,
                titre: 'Material Meteo',
                img: 'app/assets/img/realisations/materialmeteo1.png',
                img2: 'app/assets/img/realisations/materialmeteo2.png',
                img3: 'app/assets/img/realisations/materialmeteo3.png',
                text: 'Application mobile',
                societe: 'Projet perso',
                link: 'home',
                icon: 'fa fa-mobile-phone',
                description: "Réalisation d'une application mobile de météo",
                caracteristiques: "Localisation GPS",
                technologies: "Angular Js, Bootstrap, FontAwesome"
            }
        ];
        this.forum = [
            {
                index: 3,
                titre: 'Forum PHP',
                img: 'app/assets/img/realisations/forum1.png',
                img2: 'app/assets/img/realisations/forum2.png',
                img3: 'app/assets/img/realisations/forum3.png',
                text: 'Site Web',
                societe: 'Projet de formation',
                link: 'home',
                icon: 'fa fa-globe',
                description: "Réalisation d'un forum de discussion complet",
                caracteristiques: "MVC",
                technologies: "PHP, SQL, Bootstrap, FontAwesome"
            }
        ];
        this.alam = [
            {
                index: 4,
                titre: 'Site web Alamgaleri',
                img: 'app/assets/img/realisations/alamgaleri.png',
                img2: '',
                img3: '',
                text: 'Site Web',
                societe: 'Alam Galeri',
                link: 'http://www.alamgaleri.com',
                icon: 'fa fa-wordpress',
                description: "Réalisation du site web Alam Galeri",
                caracteristiques: "Wordpress",
                technologies: "PHP, SQL, FontAwesome"
            }
        ];
        // ngmodel
        this.loadedProject = null;
        this.selectedIndex = null;
        this.onlyOne = false;
    }
    RealisationsComponent.prototype.close = function () {
        this.selectedIndex = null;
    };
    RealisationsComponent.prototype.load = function (i) {
        this.selectedIndex = i;
        if (i == 0) {
            this.loadedProject = this.luence;
            this.onlyOne = false;
        }
        else if (i == 1) {
            this.loadedProject = this.chocathome;
            this.onlyOne = false;
        }
        else if (i == 2) {
            this.loadedProject = this.materialmeteo;
            this.onlyOne = false;
        }
        else if (i == 3) {
            this.loadedProject = this.forum;
            this.onlyOne = true;
        }
        else if (i == 4) {
            this.loadedProject = this.alam;
            this.onlyOne = true;
        }
        else {
            this.loadedProject = null;
        }
    };
    RealisationsComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/realisations/realisations.component.html',
            styleUrls: ['app/realisations/realisations.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], RealisationsComponent);
    return RealisationsComponent;
}());
exports.RealisationsComponent = RealisationsComponent;
//# sourceMappingURL=realisations.component.js.map