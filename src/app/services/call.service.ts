import { Injectable } from '@angular/core';
import {Http, Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class CallService {

  initialQueryUrl : string = "http://houadexdutil:9090/denodo-odata4-service-6.0/denodo-odata.svc/adex/CallLogDetail";

  constructor(private _http : Http) { }

  LoadApiCall() {
    let username: string = 'adex';
    let password: string = 'adex';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    headers.append("content-type", "application/json");
   
  return  this._http.get(this.initialQueryUrl,{headers: headers}).map(res => res.json().value);
  }

}
