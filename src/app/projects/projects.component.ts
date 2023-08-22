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
  loader: boolean = true;
  projects!: Projects[];
  front!: Projects[];
  back!: Projects[]
  mobile!: Projects[];
  externalLink = "https://youtu.be/flOT7q5XD9I";
  link = "https://github.com/dubisi/recursive-maze";

  faGitHub = faGithub;
  faExternal = faArrowUpRightFromSquare;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

}
