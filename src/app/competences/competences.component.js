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
var CompetencesComponent = (function () {
    function CompetencesComponent() {
        this.competences = [
            { titre: 'langages', icon: 'devicons devicons-html5' },
            { titre: 'frameworks', icon: 'devicons devicons-angular' },
            { titre: 'autres', icon: 'fa fa-ellipsis-h' },
            { titre: 'adobe', icon: 'devicons devicons-photoshop' },
            { titre: 'office', icon: 'fa fa-file-word-o' }
        ];
        this.langages = [
            {
                titre: 'HTML5',
                description: 'Hypertext Language Markup',
                icon: 'devicons devicons-html5'
            },
            {
                titre: 'CSS3',
                description: 'Cascading Style Sheets',
                icon: 'devicons devicons-css3'
            },
            {
                titre: 'PHP',
                description: 'Hypertext Preprocessor',
                icon: 'devicons devicons-php'
            },
            {
                titre: 'SQL',
                description: 'Structured Query Language',
                icon: 'devicons devicons-mysql'
            },
            {
                titre: 'TYPESCRIPT',
                description: 'Superset Javascript',
                icon: 'devicons devicons-javascript'
            },
            {
                titre: 'SASS',
                description: 'Syntactically Awesome Stylesheets',
                icon: 'devicons devicons-sass'
            }
        ];
        this.frameworks = [
            {
                titre: 'ANGULAR 2',
                description: 'Angular2 Javascript Framework',
                icon: 'devicons devicons-angular'
            },
            {
                titre: 'IONIC 2',
                description: 'Hybride mobile apps framework',
                icon: 'devicons devicons-ionic'
            },
            {
                titre: 'BOOTSTRAP',
                description: 'Css framework',
                icon: 'devicons devicons-bootstrap'
            },
            {
                titre: 'CORDOVA',
                description: 'Apache Cordova',
                icon: 'devicons devicons-phonegap'
            },
            {
                titre: 'JQUERY',
                description: 'Javascript structured language',
                icon: 'devicons devicons-jquery_ui'
            }
        ];
        this.autres = [
            {
                titre: 'GIT',
                description: 'Version control system',
                icon: 'devicons devicons-git'
            },
            {
                titre: 'LINUX',
                description: 'Linux OS',
                icon: 'devicons devicons-linux'
            },
            {
                titre: 'NPM',
                description: 'Node.js package manager',
                icon: 'devicons devicons-npm'
            },
            {
                titre: 'WORDPRESS',
                description: 'Content management system',
                icon: 'devicons devicons-wordpress'
            }
        ];
        this.adobe = [
            {
                titre: 'PS',
                description: 'Adobe Photoshop',
                icon: 'app/assets/img/adobe/photoshop.svg'
            },
            {
                titre: 'ID',
                description: 'Adobe Indesign',
                icon: 'app/assets/img/adobe/indesign.svg'
            },
            {
                titre: 'AI',
                description: 'Adobe Illustrator',
                icon: 'app/assets/img/adobe/illustrator.svg'
            }
        ];
        this.office = [
            {
                titre: 'WORD',
                description: 'Microsoft text editor',
                icon: 'app/assets/img/office/word.svg'
            },
            {
                titre: 'EXCEL',
                description: 'Microsoft tables editor',
                icon: 'app/assets/img/office/excel.svg'
            },
            {
                titre: 'POWERPOINT',
                description: 'Microsoft presentation editor',
                icon: 'app/assets/img/office/powerpoint.svg'
            }
        ];
        // ngmodel
        this.titlePassed = '';
        this.selectedIndex = null;
    }
    CompetencesComponent.prototype.toggleCompetences = function (titre, i) {
        this.selectedIndex = i;
        this.titlePassed = titre;
        console.log(this.titlePassed, i);
    };
    CompetencesComponent = __decorate([
        core_1.Component({
            selector: 'competences',
            templateUrl: '/app/competences/competences.component.html',
            styleUrls: ['app/competences/competences.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], CompetencesComponent);
    return CompetencesComponent;
}());
exports.CompetencesComponent = CompetencesComponent;
//# sourceMappingURL=competences.component.js.map