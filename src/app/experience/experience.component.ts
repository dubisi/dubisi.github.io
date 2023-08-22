import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, person, Experience } from '../data-interface';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  person: Person = person;
  loader: boolean = true;
  experience: Experience[] | [] = [];
  errorMessage: any;


  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getExperience(this.person.id).subscribe((experience: Experience[]) => { this.experience = experience; this.loader = false; }, error => {
      console.log(error);
      this.errorMessage = error;
    });

  }

}
