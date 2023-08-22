import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Education, Person, person } from '../data-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  person: Person = person;
  loader: boolean = true;
  education!: Education[];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getEducation(this.person.id).subscribe((education: Education[]) => { this.education = education; this.loader = false; });
  }

}
