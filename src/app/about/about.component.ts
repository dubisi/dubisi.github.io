import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { About, person, Person } from '../data-interface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  loader: boolean = true;
  person: Person = person;
  about!: About | undefined;
  path: string = "../assets/";
  cv: string = "../assets/Cv.pdf";
  errorMessage: any | HttpErrorResponse | undefined;

  constructor(private http: HttpService) { }


  ngOnInit(): void {
  }

}
