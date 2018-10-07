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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var forms_1 = require('@angular/forms');
var contact_service_1 = require('./contact.service');
var ContactComponent = (function () {
    function ContactComponent(fb, contactService, http) {
        this.contactService = contactService;
        this.http = http;
        this.sujets = ['Informations', "Offre d'Emploi"];
        this.contactForm = fb.group({
            'name': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])],
            'phone': ['',],
            'sujet': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2)])],
            'comment': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(20)])]
        });
        this.name = this.contactForm.controls['name'];
        this.email = this.contactForm.controls['email'];
        this.phone = this.contactForm.controls['phone'];
        this.sujet = this.contactForm.controls['sujet'];
        this.comment = this.contactForm.controls['comment'];
    }
    ContactComponent.prototype.onSubmit = function (name, email, phone, sujet, comment) {
        var _this = this;
        this.contactService.sendMail({
            name: name,
            email: email,
            phone: phone,
            sujet: sujet,
            comment: comment
        })
            .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
    };
    ContactComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/contact/contact.component.html',
            styleUrls: ['app/contact/contact.css'],
            providers: [http_1.HTTP_PROVIDERS, contact_service_1.ContactService]
        }),
        core_1.NgModule({
            declarations: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, contact_service_1.ContactService, http_1.Http])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map