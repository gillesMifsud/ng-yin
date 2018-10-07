import { Component } from '@angular/core';
import { Http, Response, Headers, Request, RequestMethod } from '@angular/http';
import 'rxjs/Rx';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.css'],
    providers: [ContactService]
})

export class ContactComponent {

    contactForm: FormGroup;
    response: any;

    sujets = ["Informations", "Offre d'Emploi"];

    name: AbstractControl;
    email: AbstractControl;
    phone: AbstractControl;
    sujet: AbstractControl;
    comment: AbstractControl;

    mailgunUrl: string;
    mailgunApiKey: string;
    contactMail: string;

    constructor(
        fb: FormBuilder,
        private contactService: ContactService,
        private http: Http)
    {
        this.contactForm = fb.group({
            'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            'email': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            'phone': ['', Validators.required],
            'sujet': ['', Validators.required],
            'comment': ['', Validators.compose([Validators.required, Validators.minLength(20)])]
        });
        this.name = this.contactForm.controls['name'];
        this.email = this.contactForm.controls['email'];
        this.phone = this.contactForm.controls['phone'];
        this.sujet = this.contactForm.controls['sujet'];
        this.comment = this.contactForm.controls['comment'];

        this.mailgunUrl = "sandbox3c1d080d7358402099752408ff7116d5.mailgun.org";
        this.mailgunApiKey = window.btoa("api:key-bdb1dafbafbe36b1ea3b786dbf720389");
        this.contactMail = "gil_mifsud@yahoo.fr";
    }

    onSubmit(
        name:string,
        email:string,
        phone:string,
        sujet:string,
        comment:string): void {
        this.contactService.sendMail(
            {
                name: name,
                email: email,
                phone: phone,
                sujet: sujet,
                comment: comment
            }
        )
            .subscribe(
                response => this.response = response,
                error => console.log(error)
            );
    }
    // onSubmit(form): void {
    // console.log('Valeurs du formulaire:', form);
    // }
    send(
        name: string,
        email: string,
        phone: string,
        sujet: string,
        comment: string)
    {
        var requestHeaders = new Headers();
        requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
        requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        this.http.request(new Request({
            method: RequestMethod.Post,
            url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
            body: "from=" + email + "&to=" + this.contactMail + "&name=" + name + "&phone=" + phone + "&subject=" + sujet + "&text=" + comment,
            headers: requestHeaders
        }))
            .subscribe(success => {
                console.log("SUCCESS -> " + JSON.stringify(success));
            }, error => {
                console.log("ERROR -> " + JSON.stringify(error));
            });
    }
}
