import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/newEducation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditXpComponent } from './components/work-xp/edit-xp.component';
import { NewExperienceComponent } from './components/work-xp/new-experience.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'newXp', component: NewExperienceComponent},
  {path: 'editXp/:id', component: EditXpComponent},
  {path: 'newEducation', component: NewEducationComponent},
  {path: 'editEducation/:id', component: EditEducationComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }