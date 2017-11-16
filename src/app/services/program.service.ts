import { Injectable } from '@angular/core';
import {Http, Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProgramService {

  initialQueryUrl : string = "ProgramLogDetail";

  constructor(private _http : Http) { }

  LoadApiProgram() {
    let username: string = 'adex';
    let password: string = 'adex';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    headers.append("content-type", "application/json");
    // headers.append("Access-Control-Allow-Origin", '*');
   
  return  this._http.get(this.initialQueryUrl,{headers: headers}).map(res => res.json().value);
  }

}