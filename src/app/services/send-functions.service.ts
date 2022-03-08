import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SentProcesses } from "../models/Processes";
import { catchError, retry } from "rxjs/operators";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendFunctionsService {

  constructor( private http: HttpClient) { }

  requestFunctions(sentProcessesList: SentProcesses): Observable<string[]> {
    const headers = { 'content-type': 'application/json'}
    return this.http.post<string[]>("http://127.0.0.1:8000/functions_api/", sentProcessesList, {'headers':headers});
  }

  requestParser(): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const parserSwitch = {refreshConfig: true};
    return this.http.post("http://127.0.0.1:8000/parser_api/", parserSwitch, {'headers':headers});
  }
}
