import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';
import { Experience } from '../model/experience';
import { Proyect } from '../model/proyect';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url = 'http//localhost:8080/api/v1/';

    // Headers =>>> POST, PUT Y DELETE.
    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' });
  
  
    constructor(private http:HttpClient) { }
  
    
    // ******************   |  GET ALL    | **************************
   
    getEducationData():Observable<Education[]> {
      return this.http.get<Education[]>( this.url + 'education');
    }
  
  
    getExperienceData():Observable<any> {
      return this.http.get<any>(this.url + 'experience');
    }
  
    getProyectData():Observable<Proyect> {
      return this.http.get<Proyect>( this.url + 'proyect');
    }
  
    getSkillData():Observable<Skill> {
      return this.http.get<Skill>( this.url + 'skill');
    }
  
   
    // **************   |   METHOD'S GET ONE    | **************************
  
    getOneEducationData(id: number):Observable<Education> {
      return this.http.get<Education>( this.url + 'education/' + id);
    }
  
    getOneExperience(id: number):Observable<Experience> {
      return this.http.get<Experience>( this.url + "experience/" + id);
    }
  
    getOneProyectData(id: number):Observable<Proyect> {
      return this.http.get<Proyect>( this.url + 'proyect/' + id);
    }
  
    getOneSkillData(id: number):Observable<Skill> {
      return this.http.get<Skill>( this.url + 'skill/' + id);
    }
  
  
    // **************   |   METHOD'S POST    | ******************************
 
  
    postEducation( Education: Education ):Observable<Education> {
      return this.http.post<Education>( this.url + 'education', Education , { headers: this.headers} );
    }
  
    postExperiencia( Experience: Experience ):Observable<Experience> {
      return this.http.post<Experience>( this.url + "experience", Experience , { headers: this.headers} );
    }
  
    postProyecto( Proyect: Proyect ):Observable<Proyect> {
      return this.http.post<Proyect>( this.url + 'proyect', Proyect , { headers: this.headers} );
    }
  
    postSkill( Skill: Skill ):Observable<Skill> {
      return this.http.post<Skill>( this.url + 'skill', Skill , { headers: this.headers} );
    }
  
    // **************   |   METHOD'S PUT    | ******************************
  
    putExperiencia( Experience: Experience, i: Number  ):Observable<Experience> {
      return this.http.put<Experience>( this.url + "experience/" + i, Experience , { headers: this.headers} );
    }
  
    putEducation( Education: Education, id: Number  ):Observable<Education> {
      return this.http.put<Education>( this.url + 'education/' + id, Education , { headers: this.headers} );
    }
  
    putProyecto( Proyect: Proyect, id: Number  ):Observable<Proyect> {
      return this.http.put<Proyect>( this.url + 'proyect/' + id, Proyect , { headers: this.headers} );
    }
  
    putSkill( Skill: Skill, id: Number  ):Observable<Skill> {
      return this.http.put<Skill>( this.url + 'skill/' + id, Skill , { headers: this.headers} );
    }
  
  
    // **************   |   METHOD'S DELETE    | ***************************
  

  
    deleteEducation( id: Number ):Observable<Education> {
      return this.http.delete<Education>( this.url + 'education/' + id , { headers: this.headers} );
    }
  
    deleteExperience( id: Number ):Observable<Experience> {
      return this.http.delete<Experience>( this.url + 'experience/' + id ,  { headers: this.headers} );
    }
  
    deleteProyect( id: Number ):Observable<Proyect> {
      return this.http.delete<Proyect>( this.url + 'proyect/' + id ,  { headers: this.headers} );
    }
  
    deleteSkill( id: Number ):Observable<Skill> {
      return this.http.delete<Skill>( this.url + 'skill/' + id ,  { headers: this.headers} );
    }
  
  
}


