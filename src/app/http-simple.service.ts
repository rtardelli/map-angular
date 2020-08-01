import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpSimpleService {

  constructor(private http: HttpClient) { }

  ping() {
    return console.log("Hey, what is up!");
  }

  getBeer() {
    return this.http.get("https://api.openbrewerydb.org/breweries");
  }
}
