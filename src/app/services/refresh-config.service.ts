import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RefreshConfig } from "../models/RefreshConfig";

@Injectable({
  providedIn: 'root'
})
export class RefreshConfigService {

  constructor( private http: HttpClient ) { }

  refreshConfig(refreshConfig: RefreshConfig) {
    const headers = { 'content-type': 'application/json'}
    return this.http.post("http://127.0.0.1:8000/parser_api/", refreshConfig, {"headers": headers}).subscribe();
  }
}
