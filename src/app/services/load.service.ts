import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
@Injectable()
export class LoadService {

  private apiUrl = environment.apiUrl;
  private oderByUrl: string = this.apiUrl + "LoadLogDetail?$orderby=";
  private filterUrl: string = this.apiUrl + "LoadLogDetail?$filter=(";
  private initialQueryUrl: string = this.apiUrl + "LoadLogDetail??$oderby= StartTime desc";

  constructor(private _http: Http) {

  }

  LoadApiCall() {
    let username: string = 'adex';
    let password: string = 'adex';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("content-type", "application/json");
    return this._http.get(this.initialQueryUrl, { headers: headers }).map(res => res.json().value);
  }


  jsonToUrl(obj) {
    var parts = [];
    for (var i in obj) {
      if (obj.hasOwnProperty(i) && typeof (obj[i]) === "string") {
        parts.push(encodeURIComponent(i) + "%20eq%20%27" + encodeURIComponent(obj[i]) + "%27");
      }
      if (obj.hasOwnProperty(i) && typeof (obj[i]) === "number") {
        parts.push(encodeURIComponent(i) + "%20eq%20" + encodeURIComponent(obj[i]));
      }
    }
    this.initialQueryUrl = this.filterUrl + parts.join("&") + ")";
    this.LoadApiCall;
    console.log("In this url option " + this.oderByUrl);
  }


  sortingUrl(sortingValue) {


    let username: string = 'adex';
    let password: string = 'adex';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("content-type", "application/json");

    if (sortingValue == "ProcessCode") {

      return this._http.get(this.oderByUrl + "" + sortingValue, { headers: headers }).map(res => res.json().value);

    }

    else {

      return this._http.get(this.oderByUrl + "" + sortingValue + " desc", { headers: headers }).map(res => res.json().value);

    }



  }




} 
