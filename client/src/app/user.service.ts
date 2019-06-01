import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "./user.model";
import {HttpClient} from "@angular/common/http";

const host = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  create(user: User): Observable<User> {
    const path = 'users';
    const url = `${host}/${path}`;
    return this.http.post<User>(url, user);
  }

  login(username: string): Observable<User> {
    const path = 'users/login';
    const url = `${host}/${path}`;
    return this.http.post<User>(url, { username });
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  loadToken(): string {
    return localStorage.getItem('token');
  }
}
