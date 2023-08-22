import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Observable, tap } from 'rxjs';
import { Person, person, Skills } from '../data-interface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  person: Person = person;
  loader: boolean = true;
  backEnd!: Skills[];
  frontEnd!: Skills[];
  mobile!: Skills[];
  tools!: Skills[];
  errorMessage: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getSkills(this.person.id).subscribe((skill: Skills[]) => {
      this.backEnd = skill.filter((s) => s.skillSet == "back-end");
      this.frontEnd = skill.filter((s) => s.skillSet == "front-end");
      this.mobile = skill.filter((s) => s.skillSet == "mobile");
      this.tools = skill.filter((s) => s.skillSet == "tools");
      this.loader = false;

    }, error => {
      console.log(error);
      this.errorMessage = error;
    })

  }

}
