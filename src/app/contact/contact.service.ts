import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {

    constructor(private _http: Http) {
    }

    /*private _contactUrl = 'http://localhost:8888/server/devStrasbourg/email.php';*/
    private _contactUrl = 'http://gil-mifsud.fr/email.php';
    /* http://tphangout.com/angular-2-sending-mails-from-your-app/
     https://github.com/nodemailer/nodemailer*/

    sendMail(value: {
        name: string,
        email: string,
        phone: string,
        sujet: string,
        comment: string
    }): Observable<any> {
        const body = JSON.stringify(value);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this._contactUrl, body, {
            headers: headers
        }).map(res => res.json());
    }

}
