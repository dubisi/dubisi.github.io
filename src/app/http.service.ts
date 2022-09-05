import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person, Experience, Contacts, Projects, Skills, About } from './data-interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  configUrl = 'assets/config.json';
  baseUrl: string = environment.backend.baseURL;

  constructor(private http: HttpClient) { }

  getPerson(id: number) {
    return this.http.get<Person>(`${this.baseUrl}api/profile/person/${id}`);

  }

  getAbout(id: number) {
    return this.http.get<About[]>(`${this.baseUrl}api/profile/about/${id}`);

  }

  getExperience(id: number) {
    return this.http.get<Experience[]>(`${this.baseUrl}api/profile/experience/${id}`);
  }
  getEducation(id: number | undefined) {
    return this.http.get<Experience[]>(`${this.baseUrl}api/profile/education/${id}`);
  }
  getProjects(id: number | undefined) {
    return this.http.get<Projects[]>(`${this.baseUrl}api/profile/projects/${id}`);
  }

  getSkills(id: number | undefined) {
    return this.http.get<Skills[]>(`${this.baseUrl}api/profile/skills/${id}`);
  }

  getContact(id: number | undefined) {
    return this.http.get<Contacts[]>(`${this.baseUrl}api/profile/contacts/${id}`);
  }


}
