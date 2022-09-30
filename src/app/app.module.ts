import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { WorkXpComponent } from './components/work-xp/work-xp.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewExperienceComponent } from './components/work-xp/new-experience.component';
import { EditXpComponent } from './components/work-xp/edit-xp.component';
import { NewEducationComponent } from './components/education/newEducation.component';
import { EditEducationComponent } from './components/education/edit-education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    EducationComponent,
    WorkXpComponent,
    AboutMeComponent,
    ProyectComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienceComponent,
    EditXpComponent,
    NewEducationComponent,
    EditEducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }