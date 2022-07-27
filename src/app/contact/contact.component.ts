import { Component, OnInit } from '@angular/core';
import { faGithub, faGitlab, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationPin, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Contacts, Person, person } from '../data-interface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  person: Person = person;
  contacts!: Contacts[];

  faLocation = faLocationPin;
  faPhoneFlip = faPhoneFlip;
  faTwitter = faTwitter;
  faLinkedIn = faLinkedin;
  faGitHub = faGithub;
  faGitLab = faGitlab;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getContact(person.id).subscribe((contacts: Contacts[]) => this.contacts = contacts);
  }

  gitHub(): string {
    try {
      return this.contacts.filter((i) => i.name == "github")[0].link;
    } catch (Exception) {
      return "";

    }
  }

  twitter(): string {
    try {
      return this.contacts.filter((i) => i.name == "twitter")[0].link;
    } catch (Exception) {
      return "";

    }
  }

  linkedIn(): string {
    try {
      return this.contacts.filter((i) => i.name == "linkedin")[0].link;
    } catch (Exception) {
      return "";

    }
  }

  gitLab(): string {
    try {
      return this.contacts.filter((i) => i.name == "gitlab")[0].link;
    } catch (Exception) {
      return "";

    }
  }

}
