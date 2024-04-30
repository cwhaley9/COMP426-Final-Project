import { Injectable } from '@angular/core';
import { User } from '../app.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  userDeleteRoute = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  authenticatedUser: User | null = null;

  setAuthenticatedUser(user: User | null): void {
    this.authenticatedUser = user;
  }

  getAuthenticatedUser(): User | null {
    return this.authenticatedUser;
  }

  getAuthenticatedUsername(): string {
    if(this.authenticatedUser){
      return this.authenticatedUser.username;
    }
    return 'Guest';
  }

  deleteAccount(): Observable<any> {
    return this.http.delete(`${this.userDeleteRoute}/${this.getAuthenticatedUsername()}`, { responseType: 'text' });
  }
}

