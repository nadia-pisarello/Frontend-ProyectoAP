import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../model/jwt-dto';
import { LoginUser } from '../model/login-user';
import { NewUser } from '../model/new-user';
//import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.URL+ '/auth';
  constructor(private httpClient: HttpClient) {}

  public new(newUser: NewUser): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/newUser', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + '/login', loginUser)
  }

}
