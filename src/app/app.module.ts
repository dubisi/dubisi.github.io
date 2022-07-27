import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { HttpService } from './http.service';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule, FontAwesomeModule, BrowserAnimationsModule
  ],
  providers: [HttpService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
