import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Person, person, Projects } from '../data-interface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  person: Person = person;
  projects!: Projects[];
  front!: Projects[];
  back!: Projects[]
  mobile!: Projects[];

  faGitHub = faGithub;
  faExternal = faArrowUpRightFromSquare;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getProjects(this.person.id).subscribe((projects: Projects[]) => {
      this.projects = projects; this.front = projects.filter((p) => p.dev == "front"); this.back = projects.filter((p) => p.dev == "back-end"); this.mobile = projects.filter((p) => p.dev == "mobile");
    });
  }

}
