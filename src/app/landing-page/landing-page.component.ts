import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Subject } from "rxjs";

import { Contact } from '../contact'

//  https://stackoverflow.com/questions/43934727/how-to-use-jquery-plugin-with-angular-4
// declare const jquery:any;
// declare const $ :any;

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  private formUrl = 'https://formspree.io/info@boomeeze.com';
  private headers = new Headers({'Content-Type': 'application/json'});

  contact = new Contact('', '', '', '');

  constructor(private http: Http) { }

  ngOnInit() {
  }

  submitted = false;
  sendFail = false;
  // = new Contact('', '', '', '');

  onSubmit() {
    this.contact._replyto = this.contact.email;
    this.sendContact(this.contact);
  }

  sendContact(contact: Contact): Promise<void> {
    return this.http
        .post(this.formUrl, JSON.stringify(contact), {headers: this.headers})
        .toPromise()
        .then(res => {
          res.json().data as Contact
          this.submitted = true;
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.sendFail = true;
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  /*
  contactForm: NgForm;
  @ViewChild('contactForm') currentForm: NgForm;
*/
}
