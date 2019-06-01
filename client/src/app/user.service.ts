import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "./user.model";
import {HttpClient} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";

const host = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    const path = 'users';
    const url = `${host}/${path}`;
    return this.http.post<User>(url, user)
      .pipe(tap((user: User) => {
        localStorage.setItem('id', user._id);
      }));
  }

  loginUser(username: string): Observable<User> {
    const path = 'users/login';
    const url = `${host}/${path}`;
    return this.http.post<User>(url, { username })
      .pipe(tap((user: User) => {
        localStorage.setItem('id', user._id);
      }));
  }

  getUser(): Observable<User> {
    const path = `users/${this.loadId()}`;
    const url = `${host}/${path}`;
    return this.http.get<User>(url);
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  loadToken(): string {
    return localStorage.getItem('token');
  }

  loadId(): string {
    return localStorage.getItem('id');
  }
}
