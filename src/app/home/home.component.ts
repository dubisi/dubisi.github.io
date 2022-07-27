import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../data-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() person!: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
