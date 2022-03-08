import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ReceivedProcesses } from "../models/Processes";


@Injectable({
  providedIn: 'root'
})
export class GetFunctionsService {

  constructor(private http: HttpClient) { }
  
  getFunctions(): Observable<ReceivedProcesses> {
    return this.http.get<ReceivedProcesses>("http://127.0.0.1:8000/functions_api/");
  }

  getResults():Observable<ArrayBuffer> {
    return this.http.get("http://127.0.0.1:8000/download_results/", {responseType:'arraybuffer'});
  }

}
