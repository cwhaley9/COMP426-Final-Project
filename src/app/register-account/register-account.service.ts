import { Injectable } from '@angular/core';
import { User } from './registration.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterAccountService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>('/api/users');
  }
  createUser(user: User){
    return this.http.post<User>('/api/users', user);
  }
}
