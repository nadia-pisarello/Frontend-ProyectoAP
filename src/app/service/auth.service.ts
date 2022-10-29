import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUser } from '../model/login-user';
import { NewUser } from '../model/new-user';
//import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'https://herobackenap.herokuapp.com/api/v1';
  //URL = 'http://localhost:8080/api/v1'
  constructor(private httpClient: HttpClient) {}

  public new(newUser: NewUser): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/auth/newUser', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + '/auth/login', loginUser)
  }

}
