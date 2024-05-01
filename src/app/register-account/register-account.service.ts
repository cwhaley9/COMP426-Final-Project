import { Injectable } from '@angular/core';
import { User } from '../app.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterAccountService {

  userRoute = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]>{
    return this.http.get<User[]>(this.userRoute);
  }
  createUser(user: User): Observable<any>{
    return this.http.post<User>(this.userRoute, user);
  }
  updateUser(user: User): Observable<any>{
    return this.http.put<User>(`${this.userRoute}/${user.username}`, user);
  }
  deleteUser(user: User): Observable<any>{
    return this.http.delete(`${this.userRoute}/${user.username}`);
  }
  checkExists(user: User): Observable<any>{
    return this.http.get(`http://localhost:3000/api/users/exists/${user.username}`);
  }
}
