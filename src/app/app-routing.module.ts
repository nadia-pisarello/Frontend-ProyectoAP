import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducationComponent } from './components/education/edit-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent}, 
  {path: 'editExperience/:id', component: EditExperienceComponent},
  {path: 'editEducation/:id', component: EditEducationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
