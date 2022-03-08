import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/User";
import { Authentication } from "../models/Authentication";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  constructor( private http: HttpClient ) { }

  authenticationRequest(userInput: User): Observable<Authentication> {
    const headers = { 'content-type': 'application/json'}
    return this.http.post<Authentication>("http://127.0.0.1:8000/authenticate_user/", userInput, {'headers':headers})
  }
}
