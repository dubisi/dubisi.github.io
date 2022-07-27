import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Person, person } from './data-interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  person: Person = person;
  title = `${person.name} ${person.lastName}`;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getPerson(person.id).subscribe(result => {
      this.person = result;
    }, error => console.error(error));
  }

  getId() {
    return this.person?.id;
  }

}
