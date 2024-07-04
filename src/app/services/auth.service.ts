import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const Auth_API = 'http://localhost:8082/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username:string, password:string): Observable<any> {
    return this.http.post(Auth_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username:string, email:string, password:string): Observable<any> {
    return this.http.post(Auth_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(Auth_API + 'signout', {}, httpOptions);
  }
}
