import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person, Experience, Contacts, Projects, Skills, About } from './data-interface'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  configUrl = 'assets/config.json';


  constructor(private http: HttpClient) { }

  getPerson(id: number) {
    return this.http.get<Person>(`api/profile/person/${id}`);

  }

  getAbout(id: number) {
    return this.http.get<About[]>(`api/profile/about/${id}`);

  }

  getExperience(id: number) {
    return this.http.get<Experience[]>(`api/profile/experience/${id}`);
  }
  getEducation(id: number | undefined) {
    return this.http.get<Experience[]>(`api/profile/education/${id}`);
  }
  getProjects(id: number | undefined) {
    return this.http.get<Projects[]>(`api/profile/projects/${id}`);
  }

  getSkills(id: number | undefined) {
    return this.http.get<Skills[]>(`api/profile/skills/${id}`);
  }

  getContact(id: number | undefined) {
    return this.http.get<Contacts[]>(`api/profile/contacts/${id}`);
  }


}
