import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../_models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiLink: string = "http://localhost:7740/api/";
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiLink + 'users-list')
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiLink + 'users-add', user)
  }

}
