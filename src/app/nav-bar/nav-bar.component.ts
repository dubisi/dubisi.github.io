import { Component, OnInit } from '@angular/core';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  path: string = "../assets/logo.svg";
  cv: string = "../assets/Cv.pdf";

  faBars = faBarsProgress;
  constructor() { }

  ngOnInit(): void {
  }

}
