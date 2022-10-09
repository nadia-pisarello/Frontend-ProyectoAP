import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Education } from '../model/education';
import { Experience } from '../model/experience';
import { Proyect } from '../model/proyect';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private readonly URL = 'http://localhost:8080/api/v1';

    // Headers =>>> POST, PUT Y DELETE.
    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' });
  
  
    constructor(private http:HttpClient) { }
  
    
    // ******************   |  GET ALL    | **************************
   
    getEducationData():Observable<Education[]> {
      return this.http.get<Education[]>( this.URL + '/education', {responseType: 'json'}).pipe(catchError(this.getEducationData));
    }
  
  
    public getExperienceData():Observable<Experience[]> {
      return this.http.get<Experience[]>(`${this.URL}/experience/list`, {responseType: 'json'}).pipe(catchError(this.getExperienceData));
    }
  
    getProyectData():Observable<Proyect[]> {
      return this.http.get<Proyect[]>( this.URL + '/proyect', {responseType: 'json'}).pipe(catchError(this.getProyectData));
    }
  
    getSkillData():Observable<Skill[]> {
      return this.http.get<Skill[]>( this.URL + '/skill', {responseType: 'json'}).pipe(catchError(this.getSkillData));
    }
  
   
    // **************   |   METHOD'S GET ONE    | **************************
  
    getOneEducationData(id: number):Observable<Education> {
      return this.http.get<Education>( this.URL + '/education/' + id);
    }
  
    getOneExperience(id: number):Observable<Experience> {
      return this.http.get<Experience>( this.URL + "/experience/" + id);
    }
  
    getOneProyectData(id: number):Observable<Proyect> {
      return this.http.get<Proyect>( this.URL + '/proyect/' + id);
    }
  
    getOneSkillData(id: number):Observable<Skill> {
      return this.http.get<Skill>( this.URL + '/skill/' + id);
    }
  
  
    // **************   |   METHOD'S POST    | ******************************
 
  
    postEducation( Education: Education ):Observable<Education> {
      return this.http.post<Education>( this.URL + '/education', Education , { headers: this.headers} );
    }
  
    postExperiencia( Experience: Experience ):Observable<Experience> {
      return this.http.post<Experience>( this.URL + "/experience", Experience , { headers: this.headers} );
    }
  
    postProyecto( Proyect: Proyect ):Observable<Proyect> {
      return this.http.post<Proyect>( this.URL + '/proyect', Proyect , { headers: this.headers} );
    }
  
    postSkill( Skill: Skill ):Observable<Skill> {
      return this.http.post<Skill>( this.URL + '/skill', Skill , { headers: this.headers} );
    }
  
    // **************   |   METHOD'S PUT    | ******************************
  
    putExperiencia( Experience: Experience, i: Number  ):Observable<Experience> {
      return this.http.put<Experience>( this.URL + "/experience/" + i, Experience , { headers: this.headers} );
    }
  
    putEducation( Education: Education, id: Number  ):Observable<Education> {
      return this.http.put<Education>( this.URL + '/education/' + id, Education , { headers: this.headers} );
    }
  
    putProyecto( Proyect: Proyect, id: Number  ):Observable<Proyect> {
      return this.http.put<Proyect>( this.URL + '/proyect/' + id, Proyect , { headers: this.headers} );
    }
  
    putSkill( Skill: Skill, id: Number  ):Observable<Skill> {
      return this.http.put<Skill>( this.URL + '/skill/' + id, Skill , { headers: this.headers} );
    }
  
  
    // **************   |   METHOD'S DELETE    | ***************************
  

  
    deleteEducation( id: Number ):Observable<Education> {
      return this.http.delete<Education>( this.URL + '/education/' + id , { headers: this.headers} );
    }
  
    deleteExperience( id: Number ):Observable<Experience> {
      return this.http.delete<Experience>( this.URL + '/experience/' + id ,  { headers: this.headers} );
    }
  
    deleteProyect( id: Number ):Observable<Proyect> {
      return this.http.delete<Proyect>( this.URL + '/proyect/' + id ,  { headers: this.headers} );
    }
  
    deleteSkill( id: Number ):Observable<Skill> {
      return this.http.delete<Skill>( this.URL + '/skill/' + id ,  { headers: this.headers} );
    }
  
  
}


