import { Injectable } from '@angular/core';
import { User } from '../app.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAccountService {
  
  userAuthenticateRoute = 'http://localhost:3000/api/users/authenticate';
  
  constructor(private http: HttpClient) { }

  authenticateUser(user: User): Observable<any>{
    return this.http.post<User>(this.userAuthenticateRoute, user);
  }
}
