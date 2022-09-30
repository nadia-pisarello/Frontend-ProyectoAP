import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly URL = environment.URL;
  constructor(private httpClient: HttpClient) { }
  public getUser(): Observable<any>{
    return this.httpClient.get(`${this.URL}get/profile`);
  }
}
